"use client"

import { useEffect, useState } from "react"
import { AuthService } from "@/services/auth-service"
import { User } from "@/types/user"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Coins, BookOpen, Target, ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { ACHIEVEMENTS } from "@/data/achievements"
import Link from "next/link"

export default function ProfilePage() {
    const router = useRouter()
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        const currentUser = AuthService.getCurrentUser()
        if (!currentUser) {
            router.push("/login")
            return
        }
        setUser(currentUser)
    }, [router])

    if (!user) return null

    const { profile } = user
    const unlockedSet = new Set(profile.achievements || [])
    const unlockedAchievements = ACHIEVEMENTS.filter(a => unlockedSet.has(a.id))

    return (
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-3xl font-bold text-foreground mb-2">My Profile</h1>
                <p className="text-muted-foreground">Track your learning journey</p>
            </div>

            {/* Profile Card */}
            <Card className="border-2 border-primary/20 glass-panel">
                <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                        {/* Avatar */}
                        <Avatar className="h-32 w-32 border-4 border-primary/20">
                            <AvatarImage src={profile.avatarUrl} alt={user.username} />
                            <AvatarFallback className="text-4xl bg-primary/10 text-primary">
                                {user.username[0].toUpperCase()}
                            </AvatarFallback>
                        </Avatar>

                        {/* Info */}
                        <div className="flex-1 text-center md:text-left">
                            <h2 className="text-2xl font-bold text-foreground mb-1">{user.username}</h2>
                            <Badge className="mb-4">Year {user.yearGroup}</Badge>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                                <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                                    <div className="flex items-center justify-center mb-1">
                                        <Star className="h-5 w-5 text-yellow-500" />
                                    </div>
                                    <div className="text-2xl font-bold text-yellow-700 dark:text-yellow-400">{profile.level}</div>
                                    <div className="text-xs text-muted-foreground">Level</div>
                                </div>

                                <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                                    <div className="flex items-center justify-center mb-1">
                                        <Trophy className="h-5 w-5 text-purple-500" />
                                    </div>
                                    <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">{profile.xp}</div>
                                    <div className="text-xs text-muted-foreground">XP</div>
                                </div>

                                <div className="text-center p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                                    <div className="flex items-center justify-center mb-1">
                                        <Coins className="h-5 w-5 text-amber-500" />
                                    </div>
                                    <div className="text-2xl font-bold text-amber-700 dark:text-amber-400">{profile.coins}</div>
                                    <div className="text-xs text-muted-foreground">Coins</div>
                                </div>

                                <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                                    <div className="flex items-center justify-center mb-1">
                                        <Target className="h-5 w-5 text-green-500" />
                                    </div>
                                    <div className="text-2xl font-bold text-green-700 dark:text-green-400">{profile.totalQuestsCompleted}</div>
                                    <div className="text-xs text-muted-foreground">Quests</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Subjects Progress */}
            <Card className="glass-panel">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-foreground">
                        <BookOpen className="h-5 w-5 text-primary" />
                        My Subjects
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {profile.subjects.length > 0 ? (
                        <div className="space-y-4">
                            {profile.subjects.map((subject) => (
                                <div key={subject.id} className="flex items-center justify-between p-4 bg-muted/40 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">{subject.icon}</span>
                                        <div>
                                            <h3 className="font-semibold text-foreground">{subject.name}</h3>
                                            <p className="text-sm text-muted-foreground">Level {subject.level} • {subject.xp}/{subject.maxXp} XP</p>
                                        </div>
                                    </div>
                                    <Badge variant={subject.unlocked ? "default" : "secondary"}>
                                        {subject.unlocked ? "Active" : "Locked"}
                                    </Badge>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-8 text-muted-foreground">
                            <BookOpen className="h-12 w-12 mx-auto mb-3 opacity-50" />
                            <p>No subjects enrolled yet</p>
                            <Button className="mt-4" onClick={() => router.push("/subjects")}>
                                Browse Subjects
                            </Button>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="glass-panel">
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-foreground">
                        <Trophy className="h-5 w-5 text-primary" />
                        Achievements
                    </CardTitle>
                    <Link href="/achievements" className="text-sm text-primary hover:underline flex items-center">
                        View All <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
                </CardHeader>
                <CardContent>
                    {unlockedAchievements.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {unlockedAchievements.slice(0, 3).map(ach => (
                                <div key={ach.id} className="p-4 rounded-xl border border-yellow-200 dark:border-yellow-900 bg-yellow-50 dark:bg-yellow-900/10 flex items-center gap-3">
                                    <div className="text-2xl">{ach.icon}</div>
                                    <div>
                                        <p className="font-bold text-sm text-foreground">{ach.title}</p>
                                        <p className="text-xs text-muted-foreground">+{ach.xpReward} XP</p>
                                    </div>
                                </div>
                            ))}
                            {unlockedAchievements.length > 3 && (
                                <div className="flex items-center justify-center p-4 text-sm text-muted-foreground">
                                    +{unlockedAchievements.length - 3} more unlocked
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-center py-8 text-muted-foreground">
                            <Trophy className="h-12 w-12 mx-auto mb-3 opacity-50" />
                            <p>No achievements unlocked yet</p>
                            <p className="text-sm mt-2">Complete quests to earn badges and rewards</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
