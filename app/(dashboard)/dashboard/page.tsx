"use client"

import { useEffect, useState } from "react"
import { AuthService } from "@/services/auth-service"
import { User } from "@/types/user"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ArrowRight, Trophy, Star, Zap, BookOpen, Compass, Shield, Wand2, Sparkles, MapPin } from "lucide-react"
import { StoryProgressionModal } from "@/components/story/story-progression-modal"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function DashboardPage() {
    const [user, setUser] = useState<User | null>(null)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [storyModalOpen, setStoryModalOpen] = useState(false)
    const [modalType, setModalType] = useState<"level_up" | "quest_complete">("level_up")
    const [lastConqueredSubject, setLastConqueredSubject] = useState("")

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

            // Trigger a welcoming mecha/magic progression popup if it is their first time
            if (currentUser && currentUser.profile.unlockedStoryCards?.includes("welcome-quest") && !localStorage.getItem("story-welcomed")) {
                setModalType("level_up")
                setStoryModalOpen(true)
                localStorage.setItem("story-welcomed", "true")
            }
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

    const triggerMockLevelUp = () => {
        setModalType("level_up")
        setStoryModalOpen(true)
    }

    const triggerMockQuestComplete = (subjectName: string) => {
        setLastConqueredSubject(subjectName)
        setModalType("quest_complete")
        setStoryModalOpen(true)
    }

    if (!user) return null

    const isSuperhero = user.profile.themePreference === "superhero"
    const xpTerm = isSuperhero ? "PP" : "Mana"

    return (
        <div className="space-y-8 pb-10">

            {/* Welcome Story Hero Section */}
            <div className={cn(
                "p-8 rounded-[2.5rem] border flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden transition-all duration-500",
                isSuperhero
                    ? "bg-slate-900/80 border-cyan-500/20 shadow-lg shadow-cyan-950/20"
                    : "bg-white border-white/60 shadow-lg shadow-pink-200/20"
            )}>
                {/* Background Sparkles */}
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    {isSuperhero ? <Shield className="w-48 h-48 text-cyan-400" /> : <Wand2 className="w-48 h-48 text-pink-500" />}
                </div>

                <div className="relative z-10 max-w-xl space-y-2">
                    <div className={cn(
                        "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold transition-all",
                        isSuperhero ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" : "bg-pink-50 text-pink-600 border border-pink-100"
                    )}>
                        <Sparkles className="h-3.5 w-3.5 animate-spin" />
                        <span>UK STUDY YEAR {user.yearGroup} ACTIVATED</span>
                    </div>
                    <h1 className={cn(
                        "text-3xl sm:text-4xl font-black tracking-tight transition-colors duration-500",
                        isSuperhero ? "bg-gradient-to-r from-cyan-400 to-cyan-150 bg-clip-text text-transparent" : "bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
                    )}>
                        Welcome back, {user.username}!
                    </h1>
                    <p className={cn(
                        "text-sm font-medium leading-relaxed transition-colors duration-500",
                        isSuperhero ? "text-slate-400" : "text-slate-500"
                    )}>
                        {isSuperhero
                            ? "GCSE sector grids are active. Charge your calculations mecha-cores and secure outstanding Grade marks!"
                            : "The ancient academy magic streams are aligned. Cast your spellbooks and solve mystical scroll pathways!"}
                    </p>
                </div>

                <div className={cn(
                    "glass-panel px-6 py-4 rounded-3xl flex items-center space-x-4 border transition-all min-w-[240px]",
                    isSuperhero ? "bg-slate-950/70 border-slate-800" : "bg-slate-50/50 border-slate-150"
                )}>
                    <div className="flex flex-col items-start space-y-1 w-full">
                        <div className="flex justify-between w-full text-xs font-black">
                            <span className={isSuperhero ? "text-cyan-400" : "text-pink-600"}>LEVEL {user.profile.level}</span>
                            <span className="opacity-60">{user.profile.xp}/{user.profile.maxXp} {xpTerm}</span>
                        </div>
                        <Progress value={(user.profile.xp / user.profile.maxXp) * 100} className="w-full h-3 border border-white/20" />
                    </div>
                </div>
            </div>

            {/* Stats Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className={cn(
                    "glass-card p-6 rounded-3xl flex items-center space-x-4 hover:scale-[1.03] transition-all border duration-300",
                    isSuperhero ? "bg-slate-900 border-slate-850" : "bg-white border-slate-100"
                )}>
                    <div className={cn(
                        "h-16 w-16 rounded-2xl flex items-center justify-center shadow-inner transition-colors duration-500",
                        isSuperhero ? "bg-cyan-500/10 text-cyan-400" : "bg-gradient-to-br from-yellow-50 to-amber-50 text-yellow-600"
                    )}>
                        <Trophy className="h-8 w-8" />
                    </div>
                    <div>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-wider">Quests Conquered</p>
                        <h3 className={cn("text-3xl font-black mt-0.5", isSuperhero ? "text-cyan-400" : "text-slate-700")}>
                            {user.profile.totalQuestsCompleted}
                        </h3>
                    </div>
                </div>

                <div className={cn(
                    "glass-card p-6 rounded-3xl flex items-center space-x-4 hover:scale-[1.03] transition-all border duration-300",
                    isSuperhero ? "bg-slate-900 border-slate-850" : "bg-white border-slate-100"
                )}>
                    <div className={cn(
                        "h-16 w-16 rounded-2xl flex items-center justify-center shadow-inner transition-colors duration-500",
                        isSuperhero ? "bg-cyan-500/10 text-cyan-400" : "bg-gradient-to-br from-cyan-50 to-blue-50 text-blue-600"
                    )}>
                        <Star className="h-8 w-8 animate-pulse" />
                    </div>
                    <div>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-wider">Total {xpTerm}</p>
                        <h3 className={cn("text-3xl font-black mt-0.5", isSuperhero ? "text-cyan-400" : "text-slate-700")}>
                            {user.profile.xp}
                        </h3>
                    </div>
                </div>

                <div className={cn(
                    "glass-card p-6 rounded-3xl flex items-center space-x-4 hover:scale-[1.03] transition-all border duration-300",
                    isSuperhero ? "bg-slate-900 border-slate-850" : "bg-white border-slate-100"
                )}>
                    <div className={cn(
                        "h-16 w-16 rounded-2xl flex items-center justify-center shadow-inner transition-colors duration-500",
                        isSuperhero ? "bg-cyan-500/10 text-cyan-400" : "bg-gradient-to-br from-emerald-50 to-teal-50 text-emerald-600"
                    )}>
                        <Zap className="h-8 w-8 text-yellow-500 fill-yellow-500" />
                    </div>
                    <div>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-wider">Gold Coins</p>
                        <h3 className={cn("text-3xl font-black mt-0.5", isSuperhero ? "text-cyan-400" : "text-slate-700")}>
                            {user.profile.coins}
                        </h3>
                    </div>
                </div>
            </div>

            {/* RPG STORY ROAD MAP (Quests Overview) */}
            <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h2 className="text-2xl font-black text-slate-700 dark:text-slate-200 flex items-center gap-2.5">
                        <Compass className={isSuperhero ? "text-cyan-400 animate-spin" : "text-pink-500 animate-pulse"} />
                        <span>Adventure Quest Map</span>
                    </h2>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleForceRefresh}
                            disabled={isRefreshing}
                            className={cn(
                                "text-xs font-bold h-10 px-4 rounded-xl transition-all border",
                                isSuperhero ? "bg-slate-900 border-slate-850 hover:bg-slate-800 text-slate-350" : "bg-white text-slate-600"
                            )}
                        >
                            {isRefreshing ? "↻ Summoning..." : "↻ Refresh Portal"}
                        </Button>
                        <Button
                            onClick={triggerMockLevelUp}
                            className={cn(
                                "text-xs font-bold h-10 px-4 rounded-xl text-slate-950",
                                isSuperhero ? "bg-cyan-400 hover:bg-cyan-500" : "bg-pink-100 text-pink-700 border border-pink-200"
                            )}
                        >
                            ⚡ Level Celebration
                        </Button>
                    </div>
                </div>

                {(!user.profile.subjects || user.profile.subjects.length === 0) ? (
                    <div className={cn(
                        "text-center py-16 border rounded-[2.5rem] transition-colors duration-500",
                        isSuperhero ? "bg-slate-900 border-slate-850 text-slate-400" : "bg-white border-slate-100 text-slate-500"
                    )}>
                        <p className="font-semibold mb-4">No active quest lines found. Summon curriculum magic to initialize!</p>
                        <Button onClick={handleForceRefresh} disabled={isRefreshing}>
                            {isRefreshing ? "Summoning Scrolls..." : "Summon Quest Scrolls ✨"}
                        </Button>
                    </div>
                ) : (
                    <div className="relative p-6 sm:p-10 rounded-[3rem] border overflow-hidden transition-all duration-500 bg-slate-950/20 border-slate-850">
                        
                        {/* Map Connector Track Line */}
                        <div className="absolute top-1/2 left-10 right-10 h-2 bg-gradient-to-r from-cyan-500/20 via-pink-500/20 to-purple-500/20 rounded-full -translate-y-1/2 hidden lg:block" />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                            {user.profile.subjects.slice(0, 3).map((subject, idx) => {
                                const isUnlocked = subject.unlocked !== false
                                return (
                                    <div key={subject.id} className="relative group">
                                        
                                        {/* RPG Path Pin Badge */}
                                        <div className="absolute -top-4 -left-3 z-20 flex items-center gap-1.5 shadow-md px-3 py-1 rounded-full text-[9px] font-black tracking-wider transition-all duration-300 group-hover:scale-105 bg-slate-950 text-slate-100 border border-slate-800">
                                            <MapPin className={isSuperhero ? "text-cyan-400 h-3 w-3 animate-bounce" : "text-pink-500 h-3 w-3"} />
                                            <span>SECTOR 0{idx + 1}</span>
                                        </div>

                                        <div className={cn(
                                            "rounded-[2rem] border overflow-hidden h-full flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative",
                                            isSuperhero
                                                ? `bg-slate-900 border-slate-850 hover:border-cyan-500/40 shadow-slate-950/50 ${!isUnlocked ? 'opacity-40 grayscale pointer-events-none' : ''}`
                                                : `bg-white border-slate-150 hover:border-pink-300 shadow-pink-100/30 ${!isUnlocked ? 'opacity-45 grayscale pointer-events-none' : ''}`
                                        )}>
                                            <div className="relative">
                                                {/* Header Gradient */}
                                                <div className={`h-28 bg-gradient-to-r ${subject.color || 'from-pink-400 to-purple-500'} p-6 relative flex items-end justify-between overflow-hidden`}>
                                                    <span className="text-4xl drop-shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300">
                                                        {subject.icon}
                                                    </span>
                                                    {!isUnlocked && (
                                                        <div className="absolute top-4 right-4 bg-slate-950/70 border border-slate-800 text-white px-2 py-1 rounded-full text-[10px] font-black backdrop-blur-sm tracking-widest">
                                                            SEALED
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="p-6 space-y-4">
                                                    <div>
                                                        <h3 className={cn("text-xl font-black tracking-tight", isSuperhero ? "text-slate-100" : "text-slate-850")}>
                                                            {subject.name}
                                                        </h3>
                                                        <span className="text-[10px] font-extrabold uppercase tracking-wider opacity-60">
                                                            {subject.conquestTitle || "ANCIENT MYSTIC SCROLL"}
                                                        </span>
                                                    </div>

                                                    <div className="space-y-1.5">
                                                        <div className="flex justify-between text-xs font-bold text-slate-500">
                                                            <span>CONQUEST METRICS</span>
                                                            <span>{Math.round((subject.xp / subject.maxXp) * 100)}%</span>
                                                        </div>
                                                        <Progress value={(subject.xp / subject.maxXp) * 100} className="h-2.5" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-6 pt-0 flex gap-2">
                                                <Link href={`/subjects/${subject.id}`} className="w-full">
                                                    <Button className={cn(
                                                        "w-full h-11 rounded-2xl font-black text-xs shadow-md transition-all duration-300 text-slate-950",
                                                        isSuperhero
                                                            ? "bg-cyan-400 hover:bg-cyan-500 hover:shadow-cyan-950/20"
                                                            : "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white hover:shadow-pink-200"
                                                    )}>
                                                        {isSuperhero ? "COMMENCE STRIKE ⚔️" : "ENTER REALM 🧚"}
                                                    </Button>
                                                </Link>
                                                <Button
                                                    variant="outline"
                                                    onClick={() => triggerMockQuestComplete(subject.name)}
                                                    className={cn(
                                                        "h-11 w-12 p-0 rounded-2xl border transition-all",
                                                        isSuperhero ? "bg-slate-950 border-slate-850 text-slate-400 hover:text-white" : "bg-slate-50 text-slate-650 hover:bg-white"
                                                    )}
                                                >
                                                    🏆
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>

            {/* Celebrations Popups Modal */}
            <StoryProgressionModal
                isOpen={storyModalOpen}
                onClose={() => setStoryModalOpen(false)}
                type={modalType}
                level={user.profile.level}
                themePreference={user.profile.themePreference || "superhero"}
                username={user.username}
                subjectName={lastConqueredSubject}
            />

        </div>
    )
}
