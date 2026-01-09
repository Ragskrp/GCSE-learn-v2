"use client"

import { useEffect, useState } from "react"
import { AuthService } from "@/services/auth-service"
import { User } from "@/types/user"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Lock, Medal } from "lucide-react"
import { ACHIEVEMENTS } from "@/data/achievements"

export default function AchievementsPage() {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const currentUser = AuthService.getCurrentUser()
        if (currentUser) {
            setUser(currentUser)
        }
    }, [])

    if (!user) return null

    const unlockedSet = new Set(user.profile.achievements || [])

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
            <div className="text-center space-y-2">
                <h1 className="text-3xl font-bold gradient-text flex items-center justify-center gap-3">
                    <Trophy className="h-8 w-8 text-yellow-500" />
                    Achievements
                </h1>
                <p className="text-muted-foreground">Unlock badges by mastering your subjects and completing quests.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ACHIEVEMENTS.map((achievement) => {
                    const isUnlocked = unlockedSet.has(achievement.id)

                    return (
                        <div
                            key={achievement.id}
                            className={`
                                relative p-6 rounded-2xl border-2 transition-all duration-300
                                ${isUnlocked
                                    ? "bg-gradient-to-br from-yellow-50 to-white dark:from-yellow-900/10 dark:to-background border-yellow-200 dark:border-yellow-700 shadow-md transform hover:-translate-y-1"
                                    : "bg-secondary/30 border-border grayscale opacity-70"
                                }
                            `}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`
                                    w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm
                                    ${isUnlocked ? "bg-white dark:bg-yellow-900/20" : "bg-gray-200 dark:bg-gray-800"}
                                `}>
                                    {achievement.icon}
                                </div>
                                {isUnlocked ? (
                                    <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800">
                                        Unlocked
                                    </Badge>
                                ) : (
                                    <Badge variant="outline" className="text-muted-foreground">
                                        <Lock className="w-3 h-3 mr-1" />
                                        Locked
                                    </Badge>
                                )}
                            </div>

                            <h3 className={`font-bold text-lg mb-1 ${isUnlocked ? 'text-foreground' : 'text-muted-foreground'}`}>
                                {achievement.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                {achievement.description}
                            </p>

                            <div className="pt-4 border-t border-dashed border-gray-200 dark:border-gray-700 flex items-center justify-between">
                                <span className="text-xs font-bold uppercase text-muted-foreground tracking-wider">Reward</span>
                                <span className={`flex items-center text-sm font-bold ${isUnlocked ? 'text-green-600 dark:text-green-400' : 'text-gray-400'}`}>
                                    +{achievement.xpReward} XP
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
