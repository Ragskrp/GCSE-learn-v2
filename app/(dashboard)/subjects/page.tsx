"use client"

import { useEffect, useState } from "react"
import { AuthService } from "@/services/auth-service"
import { User } from "@/types/user"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

export default function SubjectsPage() {
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        setUser(AuthService.getCurrentUser())
    }, [])

    if (!user) return null

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">All Subjects</h1>
                <p className="text-gray-500">Choose a subject to start your quest.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {user.profile.subjects.map((subject) => (
                    <Link key={subject.id} href={`/subjects/${subject.id}`}>
                        <Card className={`hover:shadow-lg transition-all cursor-pointer h-full ${!subject.unlocked ? 'opacity-75 grayscale' : ''}`}>
                            <CardHeader className="pb-2">
                                <div className="flex justify-between items-start">
                                    <div className="text-4xl mb-4">{subject.icon}</div>
                                    {subject.unlocked ? (
                                        <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full">Unlocked</span>
                                    ) : (
                                        <span className="text-xs font-medium bg-gray-100 text-gray-700 px-2 py-1 rounded-full">Locked</span>
                                    )}
                                </div>
                                <CardTitle className="text-xl">{subject.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm text-gray-500">
                                            <span>Progress</span>
                                            <span>{subject.xp}/{subject.maxXp} XP</span>
                                        </div>
                                        <Progress value={(subject.xp / subject.maxXp) * 100} className="h-2" />
                                    </div>

                                    <div className="flex justify-between text-xs text-gray-400">
                                        <span>{subject.questions} Questions</span>
                                        <span>{subject.duration} mins</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}
