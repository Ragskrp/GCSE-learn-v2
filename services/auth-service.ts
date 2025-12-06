import { User } from "@/types/user";
import {
    doc,
    getDoc,
    setDoc,
    collection,
    getDocs,
    query,
    where
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { getAllUsers as getLocalUsers, getUserProgress, updateUserProgress as updateLocalProgress } from "@/data/users";
import { year10Mathematics, year7Mathematics, year10CombinedScience, year10EnglishLiterature, year10History } from "@/data/curriculum-database";

const LOGGED_IN_USER_KEY = "loggedInUser";

// Check if Firebase is configured
const isFirebaseConfigured = () => {
    return !!(
        process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
        process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID &&
        typeof db !== 'undefined'
    );
};

export class AuthService {
    /**
     * Login with name and 4-digit PIN
     * Tries Firebase first, falls back to LocalStorage
     */
    static async login(name: string, pin: string): Promise<User | null> {
        if (typeof window === 'undefined') return null;

        // Normalize name
        const normalizedName = name.trim();

        // Try Firebase first if configured
        if (isFirebaseConfigured()) {
            try {
                // Query Firestore for student with matching name
                const studentDoc = await getDoc(doc(db, "students", normalizedName));

                if (studentDoc.exists()) {
                    const studentData = studentDoc.data();

                    // Verify PIN matches
                    if (studentData.pin === pin) {
                        // Store session
                        localStorage.setItem(LOGGED_IN_USER_KEY, normalizedName);

                        const yearGroup = studentData.yearGroup || 10;
                        const defaultSubjects = yearGroup === 10
                            ? [year10Mathematics, year10CombinedScience, year10EnglishLiterature, year10History]
                            : [year7Mathematics];

                        // Convert Firestore data to User format
                        const user: User = {
                            username: normalizedName,
                            password: pin,
                            yearGroup: yearGroup,
                            profile: {
                                level: studentData.level || 1,
                                xp: studentData.xp || 0,
                                maxXp: studentData.maxXp || 500,
                                coins: studentData.coins || 0,
                                avatarUrl: studentData.avatarUrl || "/cute-girl-avatar.png",
                                totalQuestsCompleted: studentData.totalQuestsCompleted || 0,
                                subjects: (studentData.subjects && studentData.subjects.length > 0)
                                    ? studentData.subjects
                                    : JSON.parse(JSON.stringify(defaultSubjects))
                            }
                        };

                        // Cache in LocalStorage for offline access
                        updateLocalProgress(normalizedName, user.profile);

                        return user;
                    }
                }
            } catch (error) {
                console.error("Firebase login failed, falling back to LocalStorage:", error);
                // Fall through to LocalStorage
            }
        }

        // Fallback: LocalStorage authentication
        const users = getLocalUsers();
        const user = users.find(u =>
            u.username.toLowerCase() === normalizedName.toLowerCase() &&
            u.password === pin
        );

        if (user) {
            localStorage.setItem(LOGGED_IN_USER_KEY, user.username);
            return user;
        }

        return null;
    }

    /**
     * Register a new student (Firebase only)
     */
    static async registerStudent(name: string, pin: string, yearGroup: 7 | 10): Promise<User | null> {
        if (!isFirebaseConfigured()) {
            console.error("Firebase not configured. Cannot register students.");
            return null;
        }

        try {
            const normalizedName = name.trim();

            // Check if student already exists
            const existingDoc = await getDoc(doc(db, "students", normalizedName));
            if (existingDoc.exists()) {
                console.error("Student already exists");
                return null;
            }

            // Create new student document
            const studentData = {
                name: normalizedName,
                pin: pin,
                yearGroup: yearGroup,
                level: 1,
                xp: 0,
                maxXp: yearGroup === 10 ? 500 : 400,
                coins: 0,
                avatarUrl: "/cute-girl-avatar.png",
                totalQuestsCompleted: 0,
                subjects: [],
                createdAt: new Date().toISOString()
            };

            await setDoc(doc(db, "students", normalizedName), studentData);

            const defaultSubjects = yearGroup === 10
                ? [year10Mathematics, year10CombinedScience, year10EnglishLiterature, year10History]
                : [year7Mathematics];

            // Create User object
            const newUser: User = {
                username: normalizedName,
                password: pin,
                yearGroup: yearGroup,
                profile: {
                    level: studentData.level,
                    xp: studentData.xp,
                    maxXp: studentData.maxXp,
                    coins: studentData.coins,
                    avatarUrl: studentData.avatarUrl,
                    totalQuestsCompleted: studentData.totalQuestsCompleted,
                    subjects: JSON.parse(JSON.stringify(defaultSubjects))
                }
            };

            localStorage.setItem(LOGGED_IN_USER_KEY, normalizedName);
            return newUser;
        } catch (error) {
            console.error("Registration failed:", error);
            return null;
        }
    }

    /**
     * Logout current user
     */
    static async logout(): Promise<void> {
        if (typeof window === 'undefined') return;
        localStorage.removeItem(LOGGED_IN_USER_KEY);
    }

    /**
     * Get currently logged in user
     */
    static getCurrentUser(): User | null {
        if (typeof window === 'undefined') return null;

        const username = localStorage.getItem(LOGGED_IN_USER_KEY);
        if (!username) return null;

        // Get from LocalStorage (cached)
        const user = getUserProgress(username);
        return user;
    }

    /**
     * Get all users/students
     */
    static async getAllUsers(): Promise<User[]> {
        if (isFirebaseConfigured()) {
            try {
                const studentsSnapshot = await getDocs(collection(db, "students"));
                return studentsSnapshot.docs.map(doc => {
                    const data = doc.data();
                    return {
                        username: data.name,
                        password: data.pin,
                        yearGroup: data.yearGroup,
                        profile: {
                            level: data.level,
                            xp: data.xp,
                            maxXp: data.maxXp,
                            coins: data.coins,
                            avatarUrl: data.avatarUrl || "/cute-girl-avatar.png",
                            totalQuestsCompleted: data.totalQuestsCompleted || 0,
                            subjects: data.subjects || []
                        }
                    } as User;
                });
            } catch (error) {
                console.error("Failed to get students from Firebase:", error);
            }
        }

        // Fallback to LocalStorage
        return getLocalUsers();
    }

    /**
     * Update user profile (saves to both Firebase and LocalStorage)
     */
    static async updateUser(user: User): Promise<void> {
        // Update LocalStorage (for offline access)
        updateLocalProgress(user.username, user.profile);

        // Update Firebase if configured
        if (isFirebaseConfigured()) {
            try {
                const studentRef = doc(db, "students", user.username);
                await setDoc(studentRef, {
                    name: user.username,
                    pin: user.password,
                    yearGroup: user.yearGroup,
                    level: user.profile.level,
                    xp: user.profile.xp,
                    maxXp: user.profile.maxXp,
                    coins: user.profile.coins,
                    avatarUrl: user.profile.avatarUrl,
                    totalQuestsCompleted: user.profile.totalQuestsCompleted,
                    subjects: user.profile.subjects,
                    updatedAt: new Date().toISOString()
                }, { merge: true });
            } catch (error) {
                console.error("Failed to update student in Firebase:", error);
            }
        }
    }

    /**
     * Check if Firebase is ready
     */
    static isFirebaseReady(): boolean {
        return isFirebaseConfigured();
    }
}
