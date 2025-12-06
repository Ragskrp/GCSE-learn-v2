"use client"

import { useEffect, useState } from "react"
import { AuthService } from "@/services/auth-service"
import { User } from "@/types/user"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Crown, Star } from "lucide-react"
import { useRouter } from "next/navigation"

export default function LeaderboardPage() {
    const router = useRouter()
    const [currentUser, setCurrentUser] = useState<User | null>(null)
    const [allUsers, setAllUsers] = useState<User[]>([])

    useEffect(() => {
        const user = AuthService.getCurrentUser()
        if (!user) {
            router.push("/login")
            return
        }
        setCurrentUser(user)

        // Load all users for leaderboard
        AuthService.getAllUsers().then(users => {
            // Sort by XP (descending)
            const sorted = users.sort((a, b) => b.profile.xp - a.profile.xp)
            setAllUsers(sorted)
        })
    }, [router])

    if (!currentUser) return null

    const getRankIcon = (rank: number) => {
        switch (rank) {
            case 1:
                return <Crown className="h-6 w-6 text-yellow-500" />
            case 2:
                return <Medal className="h-6 w-6 text-gray-400" />
            case 3:
                return <Medal className="h-6 w-6 text-amber-600" />
            default:
                return <span className="text-gray-500 font-bold">#{rank}</span>
        }
    }

    const getRankBadge = (rank: number) => {
        if (rank === 1) return "🥇 Champion"
        if (rank === 2) return "🥈 Runner-up"
        if (rank === 3) return "🥉 Third Place"
        return null
    }

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center justify-center gap-3">
                    <Trophy className="h-8 w-8 text-yellow-500" />
                    Leaderboard
                </h1>
                <p className="text-gray-500">See how you rank against other scholars</p>
            </div>

            {/* Current User Rank */}
            <Card className="border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-purple-500/5">
                <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="text-2xl font-bold text-primary">
                                #{allUsers.findIndex(u => u.username === currentUser.username) + 1}
                            </div>
                            <Avatar className="h-12 w-12 border-2 border-primary/20">
                                <AvatarImage src={currentUser.profile.avatarUrl} />
                                <AvatarFallback className="bg-primary/10 text-primary">
                                    {currentUser.username[0].toUpperCase()}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold">{currentUser.username} (You)</p>
                                <p className="text-sm text-gray-500">Year {currentUser.yearGroup}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center gap-2 justify-end">
                                <Star className="h-5 w-5 text-yellow-500" />
                                <span className="text-2xl font-bold text-primary">{currentUser.profile.xp}</span>
                            </div>
                            <p className="text-sm text-gray-500">XP</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Top 3 Podium */}
            {allUsers.length >= 3 && (
                <div className="grid grid-cols-3 gap-4 mb-8">
                    {/* 2nd Place */}
                    <Card className="bg-gradient-to-b from-gray-50 to-white">
                        <CardContent className="pt-6 text-center">
                            <div className="mb-3">
                                <Medal className="h-12 w-12 mx-auto text-gray-400" />
                            </div>
                            <Avatar className="h-16 w-16 mx-auto mb-3 border-2 border-gray-300">
                                <AvatarImage src={allUsers[1].profile.avatarUrl} />
                                <AvatarFallback>{allUsers[1].username[0]}</AvatarFallback>
                            </Avatar>
                            <p className="font-semibold">{allUsers[1].username}</p>
                            <p className="text-sm text-gray-500 mb-2">Year {allUsers[1].yearGroup}</p>
                            <Badge variant="secondary">{allUsers[1].profile.xp} XP</Badge>
                        </CardContent>
                    </Card>

                    {/* 1st Place */}
                    <Card className="bg-gradient-to-b from-yellow-50 to-white border-2 border-yellow-200 -mt-4">
                        <CardContent className="pt-6 text-center">
                            <div className="mb-3">
                                <Crown className="h-16 w-16 mx-auto text-yellow-500" />
                            </div>
                            <Avatar className="h-20 w-20 mx-auto mb-3 border-4 border-yellow-300">
                                <AvatarImage src={allUsers[0].profile.avatarUrl} />
                                <AvatarFallback>{allUsers[0].username[0]}</AvatarFallback>
                            </Avatar>
                            <p className="font-bold text-lg">{allUsers[0].username}</p>
                            <p className="text-sm text-gray-500 mb-2">Year {allUsers[0].yearGroup}</p>
                            <Badge className="bg-yellow-500">{allUsers[0].profile.xp} XP</Badge>
                        </CardContent>
                    </Card>

                    {/* 3rd Place */}
                    <Card className="bg-gradient-to-b from-amber-50 to-white">
                        <CardContent className="pt-6 text-center">
                            <div className="mb-3">
                                <Medal className="h-12 w-12 mx-auto text-amber-600" />
                            </div>
                            <Avatar className="h-16 w-16 mx-auto mb-3 border-2 border-amber-300">
                                <AvatarImage src={allUsers[2].profile.avatarUrl} />
                                <AvatarFallback>{allUsers[2].username[0]}</AvatarFallback>
                            </Avatar>
                            <p className="font-semibold">{allUsers[2].username}</p>
                            <p className="text-sm text-gray-500 mb-2">Year {allUsers[2].yearGroup}</p>
                            <Badge variant="secondary">{allUsers[2].profile.xp} XP</Badge>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Full Leaderboard */}
            <Card>
                <CardHeader>
                    <CardTitle>All Scholars</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {allUsers.map((user, index) => {
                            const rank = index + 1
                            const isCurrentUser = user.username === currentUser.username
                            const rankBadge = getRankBadge(rank)

                            return (
                                <div
                                    key={user.username}
                                    className={`flex items-center justify-between p-4 rounded-lg transition-colors ${isCurrentUser
                                            ? 'bg-primary/10 border-2 border-primary/30'
                                            : 'bg-gray-50 hover:bg-gray-100'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 text-center">
                                            {getRankIcon(rank)}
                                        </div>
                                        <Avatar className="h-10 w-10">
                                            <AvatarImage src={user.profile.avatarUrl} />
                                            <AvatarFallback>{user.username[0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <p className="font-semibold flex items-center gap-2">
                                                {user.username}
                                                {isCurrentUser && <Badge variant="outline">You</Badge>}
                                            </p>
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                                <span>Year {user.yearGroup}</span>
                                                {rankBadge && <span>• {rankBadge}</span>}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center gap-1 justify-end">
                                            <Star className="h-4 w-4 text-yellow-500" />
                                            <span className="font-bold text-lg">{user.profile.xp}</span>
                                        </div>
                                        <p className="text-xs text-gray-500">Level {user.profile.level}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
