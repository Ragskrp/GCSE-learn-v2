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
import { getAllUsers, getUserProgress, updateUserProgress } from "@/data/users";
import { year10Mathematics, year7Mathematics, year10CombinedScience, year10EnglishLiterature, year10History, year10ComputerScienceJ277 } from "@/data/curriculum-database";

const LOGGED_IN_USER_KEY = "loggedInUser";

const isFirebaseConfigured = () => {
    return !!(
        process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
        process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID &&
        typeof db !== 'undefined'
    );
};

export class AuthService {
    static async fetchCurriculumForYear(yearGroup: number): Promise<any[]> {
        if (!isFirebaseConfigured()) return [];

        try {
            console.log(`AuthService: Fetching curriculum for Year ${yearGroup} in parallel...`);

            // Define subject IDs based on year group
            const subjectIds = yearGroup === 10
                ? ['maths-10', 'science-10', 'english-lit-10', 'history-10', 'computer-science-j277']
                : ['maths-7'];

            // Fetch all subjects in parallel for maximum speed
            const subjectPromises = subjectIds.map(async (docId) => {
                const docRef = doc(db, "subjects", docId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    return {
                        ...docSnap.data(),
                        id: docSnap.id
                    };
                }
                return null;
            });

            const results = await Promise.all(subjectPromises);
            const subjects = results.filter((s): s is any => s !== null);

            console.log(`AuthService: Successfully fetched ${subjects.length} subjects from Firestore.`);
            return subjects;
        } catch (error) {
            console.error("Error fetching curriculum:", error);
            return [];
        }
    }

    static async login(name: string, pin: string): Promise<User | null> {
        if (typeof window === 'undefined') return null;

        const normalizedName = name.trim();

        if (isFirebaseConfigured()) {
            try {
                // Check 'users' collection (standardized)
                const userDoc = await getDoc(doc(db, "users", normalizedName));

                if (userDoc.exists()) {
                    const userData = userDoc.data();

                    if (userData.pin === pin || userData.password === pin) {
                        localStorage.setItem(LOGGED_IN_USER_KEY, normalizedName);

                        const yearGroup = userData.yearGroup || 10;

                        // Fetch subjects from Firestore if not present in user profile
                        let userSubjects = userData.subjects || userData.profile?.subjects;
                        if (!userSubjects || userSubjects.length === 0) {
                            userSubjects = await this.fetchCurriculumForYear(yearGroup);
                        }

                        // Fallback to static if Firestore fetch returned nothing
                        if (!userSubjects || userSubjects.length === 0) {
                            const defaultSubjects = yearGroup === 10
                                ? [year10Mathematics, year10CombinedScience, year10EnglishLiterature, year10History, year10ComputerScienceJ277]
                                : [year7Mathematics];
                            userSubjects = JSON.parse(JSON.stringify(defaultSubjects));
                        }

                        // Create profile object
                        const profile = {
                            level: userData.level || userData.profile?.level || 1,
                            xp: userData.xp || userData.profile?.xp || 0,
                            maxXp: userData.maxXp || userData.profile?.maxXp || 500,
                            coins: userData.coins || userData.profile?.coins || 0,
                            avatarUrl: userData.avatarUrl || userData.profile?.avatarUrl || "/cute-girl-avatar.png",
                            totalQuestsCompleted: userData.totalQuestsCompleted || userData.profile?.totalQuestsCompleted || 0,
                            achievements: userData.achievements || userData.profile?.achievements || [],
                            subjects: userSubjects
                        };

                        const user: User = {
                            username: normalizedName,
                            password: pin,
                            yearGroup: yearGroup,
                            profile: profile
                        };

                        // Update local cache
                        try {
                            const stored = localStorage.getItem("gcse-quest-progress");
                            let allUsers = [];
                            if (stored) {
                                const parsed = JSON.parse(stored);
                                allUsers = parsed.users || [];
                            }

                            const existingIndex = allUsers.findIndex((u: User) => u.username === normalizedName);
                            if (existingIndex >= 0) {
                                allUsers[existingIndex] = user;
                            } else {
                                allUsers.push(user);
                            }

                            localStorage.setItem("gcse-quest-progress", JSON.stringify({
                                users: allUsers,
                                lastUpdated: new Date().toISOString()
                            }));
                        } catch (e) {
                            console.error("Failed to update local cache on login", e);
                        }

                        // Ensure Firestore has the latest subjects (repair) if they were missing
                        if ((!userData.subjects || userData.subjects.length === 0) && userSubjects.length > 0) {
                            try {
                                await setDoc(doc(db, "users", normalizedName), {
                                    subjects: userSubjects,
                                    profile: { ...profile, subjects: userSubjects }
                                }, { merge: true });
                            } catch (e) {
                                console.error("Failed to repair missing subjects in Firestore", e);
                            }
                        }

                        // Also update memory for legacy calls and await cache update
                        await this.updateUser(user);
                        updateUserProgress(normalizedName, user.profile);

                        return user;
                    }
                }
            } catch (error) {
                console.error("Firebase login failed, falling back to LocalStorage:", error);
            }
        }

        const users = getAllUsers();
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

    static async registerStudent(name: string, pin: string, yearGroup: 7 | 10): Promise<User | null> {
        if (!isFirebaseConfigured()) {
            console.error("Firebase not configured. Cannot register students.");
            return null;
        }

        try {
            const normalizedName = name.trim();

            const existingDoc = await getDoc(doc(db, "users", normalizedName));
            if (existingDoc.exists()) {
                console.error("User already exists");
                return null;
            }

            // Fetch curriculum
            const defaultSubjects = await this.fetchCurriculumForYear(yearGroup);

            // Fallback if fetch failed
            if (defaultSubjects.length === 0) {
                const staticSubjects = yearGroup === 10
                    ? [year10Mathematics, year10CombinedScience, year10EnglishLiterature, year10History]
                    : [year7Mathematics];
                defaultSubjects.push(...JSON.parse(JSON.stringify(staticSubjects)));
            }

            const profile = {
                level: 1,
                xp: 0,
                maxXp: yearGroup === 10 ? 500 : 400,
                coins: 0,
                avatarUrl: "/cute-girl-avatar.png",
                totalQuestsCompleted: 0,
                achievements: [],
                subjects: defaultSubjects
            };

            const userData = {
                name: normalizedName,
                username: normalizedName,
                pin: pin,
                password: pin, // Legacy support
                yearGroup: yearGroup,
                level: 1,
                xp: 0,
                maxXp: yearGroup === 10 ? 500 : 400,
                coins: 0,
                avatarUrl: "/cute-girl-avatar.png",
                totalQuestsCompleted: 0,
                subjects: defaultSubjects,
                profile: profile,
                createdAt: new Date().toISOString()
            };

            await setDoc(doc(db, "users", normalizedName), userData);

            const newUser: User = {
                username: normalizedName,
                password: pin,
                yearGroup: yearGroup,
                profile: profile
            };

            // Update local cache
            try {
                const stored = localStorage.getItem("gcse-quest-progress");
                let allUsers = [];
                if (stored) {
                    const parsed = JSON.parse(stored);
                    allUsers = parsed.users || [];
                }
                allUsers.push(newUser);
                localStorage.setItem("gcse-quest-progress", JSON.stringify({
                    users: allUsers,
                    lastUpdated: new Date().toISOString()
                }));
            } catch (e) {
                // ignore
            }

            localStorage.setItem(LOGGED_IN_USER_KEY, normalizedName);
            return newUser;
        } catch (error) {
            console.error("Registration failed:", error);
            return null;
        }
    }

    static async logout(): Promise<void> {
        if (typeof window === 'undefined') return;
        localStorage.removeItem(LOGGED_IN_USER_KEY);
    }

    static getCurrentUser(): User | null {
        if (typeof window === 'undefined') return null;

        const username = localStorage.getItem(LOGGED_IN_USER_KEY);
        if (!username) return null;

        // Try getting from ProgressStorage cache first
        try {
            const stored = localStorage.getItem("gcse-quest-progress");
            if (stored) {
                const data = JSON.parse(stored);
                if (data.users) {
                    const user = data.users.find((u: User) => u.username === username);
                    if (user) return user;
                }
            }
        } catch (e) {
            console.error("Error reading from local cache", e);
        }

        const user = getUserProgress(username);
        return user;
    }

    static async getAllUsers(): Promise<User[]> {
        if (isFirebaseConfigured()) {
            try {
                const usersSnapshot = await getDocs(collection(db, "users"));
                return usersSnapshot.docs.map(doc => {
                    const data = doc.data();
                    const profile = data.profile || {
                        level: data.level,
                        xp: data.xp,
                        maxXp: data.maxXp,
                        coins: data.coins,
                        avatarUrl: data.avatarUrl || "/cute-girl-avatar.png",
                        totalQuestsCompleted: data.totalQuestsCompleted || 0,
                        achievements: data.achievements || data.profile?.achievements || [],
                        subjects: data.subjects || []
                    };

                    return {
                        username: data.name || data.username,
                        password: data.pin || data.password,
                        yearGroup: data.yearGroup,
                        profile: profile
                    } as User;
                });
            } catch (error) {
                console.error("Failed to get users from Firebase:", error);
            }
        }

        return getAllUsers();
    }

    static async updateUser(user: User): Promise<void> {
        // Update memory
        updateUserProgress(user.username, user.profile);

        // Update local cache
        try {
            const stored = localStorage.getItem("gcse-quest-progress");
            let allUsers = [];
            if (stored) {
                const parsed = JSON.parse(stored);
                allUsers = parsed.users || [];
            }
            const idx = allUsers.findIndex((u: User) => u.username === user.username);
            if (idx >= 0) allUsers[idx] = user;
            else allUsers.push(user);

            localStorage.setItem("gcse-quest-progress", JSON.stringify({
                users: allUsers,
                lastUpdated: new Date().toISOString()
            }));
        } catch (e) { }

        if (isFirebaseConfigured()) {
            try {
                const userRef = doc(db, "users", user.username);
                // Merge update
                await setDoc(userRef, {
                    name: user.username,
                    pin: user.password,
                    password: user.password, // Keep both for safety
                    yearGroup: user.yearGroup,
                    // Flattened props
                    level: user.profile.level,
                    xp: user.profile.xp,
                    maxXp: user.profile.maxXp,
                    coins: user.profile.coins,
                    avatarUrl: user.profile.avatarUrl,
                    totalQuestsCompleted: user.profile.totalQuestsCompleted,
                    achievements: user.profile.achievements || [],
                    subjects: user.profile.subjects,
                    // Nested profile
                    profile: user.profile,
                    updatedAt: new Date().toISOString()
                }, { merge: true });
            } catch (error) {
                console.error("Failed to update user in Firebase:", error);
            }
        }
    }

    static isFirebaseReady(): boolean {
        return isFirebaseConfigured();
    }

    static async refreshUserProfile(): Promise<User | null> {
        if (typeof window === 'undefined') return null;

        const username = localStorage.getItem(LOGGED_IN_USER_KEY);
        if (!username || !isFirebaseConfigured()) return null;

        try {
            const userDoc = await getDoc(doc(db, "users", username));
            if (userDoc.exists()) {
                const userData = userDoc.data();

                // Reconstruct the user object similar to login
                const yearGroup = userData.yearGroup || 10;
                let userSubjects = userData.subjects || userData.profile?.subjects || [];

                // Fallback to curriculum if still empty (self-healing)
                if (userSubjects.length === 0) {
                    userSubjects = await this.fetchCurriculumForYear(yearGroup);
                }

                // Fallback to static if Firestore fetch returned nothing
                if (!userSubjects || userSubjects.length === 0) {
                    console.log("AuthService: No subjects found in Firestore, using static defaults...");
                    // Try to get at least the revamped subjects
                    const { year10Mathematics, year10CombinedScience, year10History } = require("@/data/curriculum-database");
                    const defaultSubjects = yearGroup === 10
                        ? [year10Mathematics, year10CombinedScience, year10History]
                        : [year7Mathematics];
                    userSubjects = JSON.parse(JSON.stringify(defaultSubjects));
                }

                const profile = {
                    level: userData.level || userData.profile?.level || 1,
                    xp: userData.xp || userData.profile?.xp || 0,
                    maxXp: userData.maxXp || userData.profile?.maxXp || 500,
                    coins: userData.coins || userData.profile?.coins || 0,
                    avatarUrl: userData.avatarUrl || userData.profile?.avatarUrl || "/cute-girl-avatar.png",
                    totalQuestsCompleted: userData.totalQuestsCompleted || userData.profile?.totalQuestsCompleted || 0,
                    achievements: userData.achievements || userData.profile?.achievements || [],
                    subjects: userSubjects
                };

                const user: User = {
                    username: username,
                    password: userData.pin || userData.password,
                    yearGroup: yearGroup,
                    profile: profile
                };

                // Update local cache and memory
                await this.updateUser(user);
                updateUserProgress(username, user.profile);

                return user;
            }
        } catch (error) {
            console.error("Failed to refresh user profile from Firestore:", error);
        }
        return null;
    }
}
