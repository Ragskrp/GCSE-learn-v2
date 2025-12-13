"use client"

import { useEffect, useState } from "react"
import { AuthService } from "@/services/auth-service"
import { User, Subject } from "@/types/user"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { Sparkles, Lock, Play, BookOpen, Calculator, FlaskConical, Book, ScrollText, Monitor } from "lucide-react"

// Static definition of all available subjects to ensure links ALWAYS appear
const ALL_SUBJECTS = [
    {
        id: "maths", // Matches firebase ID 'maths-10' typically, but let's handle the redirect
        name: "Mathematics",
        icon: <Calculator />,
        color: "from-blue-400 to-indigo-500",
        conquestTitle: "Number Ninja",
        description: "Master the language of the universe",
        questions: 25
    },
    {
        id: "science", // 'science-10'
        name: "Combined Science",
        icon: <FlaskConical />,
        color: "from-teal-400 to-green-500",
        conquestTitle: "Lab Legend",
        description: "Explore the laws of nature",
        questions: 30
    },
    {
        id: "english-lit", // 'english-lit-10'
        name: "English Literature",
        icon: <Book />,
        color: "from-amber-400 to-orange-500",
        conquestTitle: "Word Wizard",
        description: "Analyze the great texts",
        questions: 20
    },
    {
        id: "history", // 'history-10'
        name: "History",
        icon: <ScrollText />,
        color: "from-red-400 to-rose-500",
        conquestTitle: "Time Traveller",
        description: "Uncover the past",
        questions: 25
    },
    {
        id: "computer-science-j277",
        name: "Computer Science",
        icon: <Monitor />,
        color: "from-purple-400 to-fuchsia-500",
        conquestTitle: "Binary Baron",
        description: "Decode the digital world",
        questions: 50
    }
]

export default function SubjectsPage() {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadUser = async () => {
            let currentUser = AuthService.getCurrentUser()
            // Try to refresh even if user exists, just to be sure we have latest progress
            if (!currentUser || !currentUser.profile.subjects || currentUser.profile.subjects.length === 0) {
                const refreshed = await AuthService.refreshUserProfile();
                if (refreshed) currentUser = refreshed;
            }
            setUser(currentUser)
            setIsLoading(false)
        }
        loadUser()
    }, [])

    // Helper to get progress for a subject from the user profile
    const getSubjectProgress = (subjectId: string) => {
        if (!user || !user.profile.subjects) return { xp: 0, maxXp: 1000, unlocked: true };

        // Try to find by ID or name matching
        const found = user.profile.subjects.find(s =>
            s.id === subjectId ||
            s.id === `${subjectId}-10` ||
            s.name.toLowerCase().includes(subjectId.replace('-', ' '))
        );

        if (found) return { xp: found.xp, maxXp: found.maxXp, unlocked: found.unlocked };

        // Default (if not found in profile, we still show it as unlocked so they can access it)
        return { xp: 0, maxXp: 1000, unlocked: true };
    }

    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="relative">
                    <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-pink-400 animate-spin"></div>
                    <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-purple-400 animate-spin delay-150"></div>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-4xl font-extrabold gradient-text mb-2 flex items-center gap-3">
                        <BookOpen className="text-pink-500" />
                        All Quests
                    </h1>
                    <p className="text-slate-500 font-medium">Choose a realm to begin your adventure.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ALL_SUBJECTS.map((subject) => {
                    const stats = getSubjectProgress(subject.id);
                    // Determine the actual link ID. Ideally we should have consistent IDs.
                    // For now, map 'maths' -> 'maths-10' if that's what the details page expects,
                    // BUT your previous code implies details page uses whatever ID is passed.
                    // Let's use the ID defined in ALL_SUBJECTS, and ensure details page handles it.
                    // Actually, let's map standard ones to -10 if that's the convention except CS.
                    const linkId = subject.id === 'computer-science-j277' ? subject.id :
                        (subject.id.endsWith('-10') ? subject.id : `${subject.id}-10`);

                    return (
                        <Link key={subject.id} href={`/subjects/${linkId}`}>
                            <div className={`glass-card p-0 rounded-[2rem] overflow-hidden h-full group relative hover:scale-[1.03] transition-all duration-300`}>

                                {/* Card Header Illustration */}
                                <div className={`h-32 bg-gradient-to-r ${subject.color} p-6 relative overflow-hidden`}>
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl transform -translate-x-5 translate-y-5"></div>

                                    <div className="relative z-10 flex justify-between items-start">
                                        <div className="text-white text-5xl drop-shadow-md transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                            {subject.icon}
                                        </div>
                                        <div className="bg-white/30 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                                            <Sparkles size={12} /> OPEN
                                        </div>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="p-6 pt-8 bg-white/40 backdrop-blur-sm min-h-[160px] flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold text-slate-800 mb-1 group-hover:text-pink-600 transition-colors">
                                            {subject.name}
                                        </h3>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                            {subject.conquestTitle}
                                        </p>
                                        <p className="text-sm text-slate-500 mb-6">
                                            {subject.description}
                                        </p>

                                        <div className="space-y-2 mb-6">
                                            <div className="flex justify-between text-xs font-bold text-slate-500">
                                                <span>MASTERY</span>
                                                <span>{Math.round((stats.xp / stats.maxXp) * 100)}%</span>
                                            </div>
                                            <Progress value={(stats.xp / stats.maxXp) * 100} className="h-2.5 bg-slate-200/50" />
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center border-t border-slate-200/50 pt-4">
                                        <div className="text-xs font-medium text-slate-500">
                                            {subject.questions} Challenges
                                        </div>

                                        <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all shadow-sm">
                                            <Play size={14} className="ml-0.5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
