"use client"

import { useEffect, useState } from "react"
import { AuthService } from "@/services/auth-service"
import { User } from "@/types/user"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ArrowRight, Trophy, Star, Zap, BookOpen } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null)
    const [isRefreshing, setIsRefreshing] = useState(false)

    useEffect(() => {
        const loadUser = async () => {
            let currentUser = AuthService.getCurrentUser()

            // Check if subjects are missing and try to refresh
            if (currentUser && (!currentUser.profile.subjects || currentUser.profile.subjects.length === 0)) {
                console.log("Empty subjects detected on dashboard, auto-refreshing...")
                const refreshed = await AuthService.refreshUserProfile()
                if (refreshed) currentUser = refreshed
            }

            console.log("Dashboard loaded user with subjects:", currentUser?.profile.subjects?.length)
            setUser(currentUser)
        }
        loadUser()
    }, [])

    const handleForceRefresh = async () => {
        setIsRefreshing(true)
        try {
            const refreshed = await AuthService.refreshUserProfile()
            if (refreshed) {
                setUser(refreshed)
            }
        } finally {
            setIsRefreshing(false)
        }
    }

    if (!user) return null

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-4xl font-extrabold gradient-text mb-2">Welcome back, {user.username}! ✨</h1>
                    <p className="text-slate-500 font-medium">Ready to continue your magical quest?</p>
                </div>
                <div className="glass-panel px-6 py-3 rounded-full flex items-center space-x-4">
                    <div className="flex flex-col items-end">
                        <span className="text-xs font-bold text-pink-500 uppercase tracking-wider">Level {user.profile.level}</span>
                        <span className="text-xs text-slate-400">{user.profile.xp}/{user.profile.maxXp} XP</span>
                    </div>
                    <Progress value={(user.profile.xp / user.profile.maxXp) * 100} className="w-32 h-3 border border-white/50" />
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="glass-card p-6 rounded-3xl flex items-center space-x-4 hover:scale-105 transition-transform">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-yellow-100 to-amber-100 flex items-center justify-center shadow-inner">
                        <Trophy className="h-8 w-8 text-yellow-600" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">Quests Done</p>
                        <h3 className="text-3xl font-black text-slate-700">{user.profile.totalQuestsCompleted}</h3>
                    </div>
                </div>

                <div className="glass-card p-6 rounded-3xl flex items-center space-x-4 hover:scale-105 transition-transform delay-75">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-purple-100 to-fuchsia-100 flex items-center justify-center shadow-inner">
                        <Star className="h-8 w-8 text-purple-600" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">Total XP</p>
                        <h3 className="text-3xl font-black text-slate-700">{user.profile.xp}</h3>
                    </div>
                </div>

                <div className="glass-card p-6 rounded-3xl flex items-center space-x-4 hover:scale-105 transition-transform delay-150">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center shadow-inner">
                        <Zap className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wide">Coins</p>
                        <h3 className="text-3xl font-black text-slate-700">{user.profile.coins}</h3>
                    </div>
                </div>
            </div>

            {/* Subjects Overview */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-700 flex items-center gap-2">
                        <BookOpen className="text-pink-500" />
                        Your Quests
                    </h2>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleForceRefresh}
                            disabled={isRefreshing}
                            className="text-xs"
                        >
                            {isRefreshing ? "Refreshing..." : "↻ Refresh Data"}
                        </Button>
                        <Link href="/subjects">
                            <Button variant="ghost" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50">
                                View All <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>

                {(!user.profile.subjects || user.profile.subjects.length === 0) ? (
                    <div className="text-center py-12 glass-panel rounded-3xl">
                        <p className="text-slate-500 mb-4">No quests found yet! The magic is loading...</p>
                        <Button onClick={handleForceRefresh} disabled={isRefreshing}>
                            {isRefreshing ? "Summoning Quests..." : "Summon Quests Now ✨"}
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {user.profile.subjects.slice(0, 3).map((subject) => (
                            <Link key={subject.id} href={`/subjects/${subject.id}`}>
                                <div className={`glass-card p-0 rounded-3xl overflow-hidden h-full group ${!subject.unlocked ? 'opacity-70 grayscale' : ''}`}>
                                    <div className={`h-24 bg-gradient-to-r ${subject.color || 'from-pink-400 to-purple-500'} p-6 relative`}>
                                        <div className="absolute -bottom-6 left-6 text-5xl drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            {subject.icon}
                                        </div>
                                        {!subject.unlocked && (
                                            <div className="absolute top-4 right-4 bg-black/20 text-white px-2 py-1 rounded-full text-xs font-bold backdrop-blur-sm">
                                                LOCKED
                                            </div>
                                        )}
                                    </div>
                                    <div className="pt-8 p-6">
                                        <h3 className="text-xl font-bold text-slate-800 mb-1">{subject.name}</h3>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">{subject.conquestTitle}</p>

                                        <div className="space-y-2">
                                            <div className="flex justify-between text-xs font-bold text-slate-500">
                                                <span>PROGRESS</span>
                                                <span>{Math.round((subject.xp / subject.maxXp) * 100)}%</span>
                                            </div>
                                            <Progress value={(subject.xp / subject.maxXp) * 100} className="h-2.5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div >
    )
}
