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

    useEffect(() => {
        const loadUser = async () => {
            let currentUser = AuthService.getCurrentUser()

            // Check if subjects are missing and try to refresh
            if (currentUser && (!currentUser.profile.subjects || currentUser.profile.subjects.length === 0)) {
                const refreshed = await AuthService.refreshUserProfile()
                if (refreshed) currentUser = refreshed
            }

            setUser(currentUser)
        }
        loadUser()
    }, [])

    if (!user) return null

    return (
        <div className="space-y-8">
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.username}!</h1>
                    <p className="text-gray-500">Ready to continue your learning journey?</p>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border">
                    <span className="text-sm font-medium text-gray-600">Level {user.profile.level}</span>
                    <Progress value={(user.profile.xp / user.profile.maxXp) * 100} className="w-24 h-2" />
                    <span className="text-xs text-gray-400">{user.profile.xp}/{user.profile.maxXp} XP</span>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardContent className="pt-6 flex items-center space-x-4">
                        <div className="p-3 bg-yellow-100 rounded-full">
                            <Trophy className="h-6 w-6 text-yellow-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Total Quests</p>
                            <h3 className="text-2xl font-bold">{user.profile.totalQuestsCompleted}</h3>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6 flex items-center space-x-4">
                        <div className="p-3 bg-purple-100 rounded-full">
                            <Star className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Total XP</p>
                            <h3 className="text-2xl font-bold">{user.profile.xp}</h3>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6 flex items-center space-x-4">
                        <div className="p-3 bg-blue-100 rounded-full">
                            <Zap className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500">Coins Earned</p>
                            <h3 className="text-2xl font-bold">{user.profile.coins}</h3>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Subjects Overview */}
            <div>
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Your Subjects</h2>
                    <Link href="/subjects">
                        <Button variant="ghost" className="text-primary">
                            View All <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {user.profile.subjects.slice(0, 3).map((subject) => (
                        <Link key={subject.id} href={`/subjects/${subject.id}`}>
                            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full border-l-4" style={{ borderLeftColor: subject.unlocked ? '#3b82f6' : '#e5e7eb' }}>
                                <CardHeader className="pb-2">
                                    <div className="flex justify-between items-start">
                                        <div className="text-3xl mb-2">{subject.icon}</div>
                                        {!subject.unlocked && <span className="text-xs bg-gray-100 px-2 py-1 rounded">Locked</span>}
                                    </div>
                                    <CardTitle className="text-lg">{subject.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm text-gray-500">
                                            <span>Progress</span>
                                            <span>{Math.round((subject.xp / subject.maxXp) * 100)}%</span>
                                        </div>
                                        <Progress value={(subject.xp / subject.maxXp) * 100} className="h-2" />
                                        <p className="text-xs text-gray-400 mt-2">{subject.conquestTitle}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
