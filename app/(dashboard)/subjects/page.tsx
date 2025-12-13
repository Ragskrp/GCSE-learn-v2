"use client"

import { useEffect, useState } from "react"
import { AuthService } from "@/services/auth-service"
import { User } from "@/types/user"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { Sparkles, Lock, ArrowRight, Play, BookOpen } from "lucide-react"

export default function SubjectsPage() {
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadUser = async () => {
            let currentUser = AuthService.getCurrentUser()

            // Self-healing: If no subjects found, try to sync with Firestore
            if (currentUser && (!currentUser.profile.subjects || currentUser.profile.subjects.length === 0)) {
                console.log('🔄 No subjects found in cache, syncing with server...');
                const refreshed = await AuthService.refreshUserProfile();
                if (refreshed) {
                    currentUser = refreshed;
                }
            }
            setUser(currentUser)
            setIsLoading(false)
        }
        loadUser()
    }, [])

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

    if (!user) return null

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
                {user.profile.subjects.map((subject) => (
                    <Link key={subject.id} href={`/subjects/${subject.id}`}>
                        <div className={`glass-card p-0 rounded-[2rem] overflow-hidden h-full group relative hover:scale-[1.03] transition-all duration-300 ${!subject.unlocked ? 'opacity-80' : ''}`}>

                            {/* Card Header Illustration */}
                            <div className={`h-32 bg-gradient-to-r ${subject.color || 'from-pink-400 to-purple-500'} p-6 relative overflow-hidden`}>
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full blur-xl transform -translate-x-5 translate-y-5"></div>

                                <div className="relative z-10 flex justify-between items-start">
                                    <div className="text-5xl drop-shadow-md transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                                        {subject.icon}
                                    </div>
                                    {!subject.unlocked ? (
                                        <div className="bg-black/30 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1">
                                            <Lock size={12} /> LOCKED
                                        </div>
                                    ) : (
                                        <div className="bg-white/30 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                                            <Sparkles size={12} /> UNLOCKED
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 pt-8 bg-white/40 backdrop-blur-sm min-h-[160px] flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-800 mb-1 group-hover:text-pink-600 transition-colors">
                                        {subject.name}
                                    </h3>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">
                                        {subject.conquestTitle}
                                    </p>

                                    <div className="space-y-2 mb-6">
                                        <div className="flex justify-between text-xs font-bold text-slate-500">
                                            <span>MASTERY</span>
                                            <span>{Math.round((subject.xp / subject.maxXp) * 100)}%</span>
                                        </div>
                                        <Progress value={(subject.xp / subject.maxXp) * 100} className="h-2.5 bg-slate-200/50" />
                                    </div>
                                </div>

                                <div className="flex justify-between items-center border-t border-slate-200/50 pt-4">
                                    <div className="text-xs font-medium text-slate-500">
                                        {subject.questions} Challenges
                                    </div>

                                    {subject.unlocked && (
                                        <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all shadow-sm">
                                            <Play size={14} className="ml-0.5" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
