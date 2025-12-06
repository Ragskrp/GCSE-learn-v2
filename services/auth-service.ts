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
import { year10Mathematics, year7Mathematics, year10CombinedScience, year10EnglishLiterature, year10History } from "@/data/curriculum-database";

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
            const subjects: any[] = [];

            // Define subject IDs based on year group
            const subjectIds = yearGroup === 10
                ? ['maths-10', 'science-10', 'english-lit-10', 'history-10']
                : ['maths-7'];

            for (const docId of subjectIds) {
                const docRef = doc(db, "subjects", docId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    subjects.push(docSnap.data());
                }
            }

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
                const studentDoc = await getDoc(doc(db, "students", normalizedName));

                if (studentDoc.exists()) {
                    const studentData = studentDoc.data();

                    if (studentData.pin === pin) {
                        localStorage.setItem(LOGGED_IN_USER_KEY, normalizedName);

                        const yearGroup = studentData.yearGroup || 10;

                        // Fetch subjects from Firestore if not present in student profile
                        let userSubjects = studentData.subjects;
                        if (!userSubjects || userSubjects.length === 0) {
                            userSubjects = await this.fetchCurriculumForYear(yearGroup);
                        }

                        // Fallback to static if Firestore fetch returned nothing (and no local subjects)
                        if (!userSubjects || userSubjects.length === 0) {
                            const defaultSubjects = yearGroup === 10
                                ? [year10Mathematics, year10CombinedScience, year10EnglishLiterature, year10History]
                                : [year7Mathematics];
                            userSubjects = JSON.parse(JSON.stringify(defaultSubjects));
                        }

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
                                subjects: userSubjects
                            }
                        };

                        // Update local cache via ProgressStorage logic manually to ensure consistency
                        // We read strict from localStorage to avoid async cycle if possible, 
                        // but updating ProgressStorage is async. 
                        // For simplicity, we'll try to update the 'users' cache directly here.
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

                        // Also update memory for legacy calls
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

            const existingDoc = await getDoc(doc(db, "students", normalizedName));
            if (existingDoc.exists()) {
                console.error("Student already exists");
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
                subjects: defaultSubjects,
                createdAt: new Date().toISOString()
            };

            await setDoc(doc(db, "students", normalizedName), studentData);

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
                    subjects: defaultSubjects
                }
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

    static isFirebaseReady(): boolean {
        return isFirebaseConfigured();
    }
}
