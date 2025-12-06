"use client"

import { useEffect, useState } from "react"
import { AuthService } from "@/services/auth-service"
import { User, Subject } from "@/types/user"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, CheckCircle, PlayCircle, Lock } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function SubjectDetailsPage({ params }: { params: { subjectId: string } }) {
    const router = useRouter()
    const [user, setUser] = useState<User | null>(null)
    const [subject, setSubject] = useState<Subject | null>(null)

    useEffect(() => {
        const currentUser = AuthService.getCurrentUser()
        if (!currentUser) {
            router.push("/login")
            return
        }
        setUser(currentUser)

        const foundSubject = currentUser.profile.subjects.find(s => s.id === params.subjectId)
        if (foundSubject) {
            setSubject(foundSubject)
        } else {
            router.push("/subjects")
        }
    }, [params.subjectId, router])

    if (!user || !subject) return null

    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex items-center space-x-4">
                <Link href="/subjects">
                    <Button variant="ghost" size="icon">
                        <ArrowLeft className="h-6 w-6" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                        <span className="text-4xl">{subject.icon}</span>
                        {subject.name}
                    </h1>
                    <p className="text-gray-500">{subject.conquestTitle}</p>
                </div>
            </div>

            {/* Progress Overview */}
            <Card className="bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/10">
                <CardContent className="pt-6">
                    <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-primary">Subject Mastery</span>
                        <span className="text-sm text-gray-500">{subject.xp} / {subject.maxXp} XP</span>
                    </div>
                    <Progress value={(subject.xp / subject.maxXp) * 100} className="h-3" />
                </CardContent>
            </Card>

            {/* Topics List */}
            <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Topics</h2>
                <div className="grid gap-4">
                    {subject.topics.map((topic) => (
                        <Card key={topic.id} className={`transition-all ${topic.completed ? 'bg-green-50/50 border-green-100' : 'hover:border-primary/50'}`}>
                            <CardContent className="p-6 flex items-center justify-between">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold text-lg">{topic.name}</h3>
                                        {topic.completed && <CheckCircle className="h-5 w-5 text-green-500" />}
                                    </div>
                                    <p className="text-sm text-gray-500">
                                        {topic.studyMaterials.length} Lessons • {topic.quizzes.length} Quizzes
                                    </p>
                                </div>

                                <div className="flex gap-2">
                                    {/* For now, we just link to the first lesson if available, or a generic topic view */}
                                    {/* In a real app, we might have a topic details page /subjects/[id]/topics/[topicId] */}
                                    {/* But based on the original app, it seems to jump to lessons/quizzes. */}
                                    {/* I'll link to a hypothetical topic page or just expand. */}
                                    {/* Let's just link to the first lesson for now to demonstrate routing. */}

                                    {topic.studyMaterials.length > 0 ? (
                                        <Link href={`/learn/${topic.studyMaterials[0].id}`}>
                                            <Button>
                                                <PlayCircle className="h-4 w-4 mr-2" />
                                                Start Learning
                                            </Button>
                                        </Link>
                                    ) : (
                                        <Button variant="outline" disabled>Coming Soon</Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
