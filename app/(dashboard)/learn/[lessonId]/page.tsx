"use client"

import { useEffect, useState } from "react"
import { ContentService } from "@/services/content-service"
import { StudyMaterial } from "@/data/curriculum-database"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Clock, BookOpen, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import ReactMarkdown from "react-markdown"

export default function LessonPage({ params }: { params: { lessonId: string } }) {
    const router = useRouter()
    const [lesson, setLesson] = useState<StudyMaterial | null>(null)
    const [completed, setCompleted] = useState(false)

    useEffect(() => {
        const foundLesson = ContentService.getLesson(params.lessonId)
        if (foundLesson) {
            setLesson(foundLesson)
        } else {
            // Lesson not found, redirect back
            router.push("/subjects")
        }
    }, [params.lessonId, router])

    const handleComplete = () => {
        setCompleted(true)
        // In a real app, we would save progress here
        // ProgressStorage.completeLesson(username, subjectId, topicId, lessonId)
    }

    if (!lesson) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="icon" onClick={() => router.back()}>
                        <ArrowLeft className="h-6 w-6" />
                    </Button>
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">{lesson.title}</h1>
                        <div className="flex items-center gap-3 mt-2">
                            <Badge variant="secondary" className="capitalize">
                                {lesson.difficulty}
                            </Badge>
                            <div className="flex items-center text-sm text-gray-500">
                                <Clock className="h-4 w-4 mr-1" />
                                {lesson.estimatedTime} mins
                            </div>
                        </div>
                    </div>
                </div>

                {completed && (
                    <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="h-5 w-5" />
                        <span className="font-medium">Completed</span>
                    </div>
                )}
            </div>

            {/* Learning Objectives */}
            {lesson.learningObjectives && lesson.learningObjectives.length > 0 && (
                <Card className="border-l-4 border-l-primary">
                    <CardHeader className="pb-3">
                        <CardTitle className="text-lg flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-primary" />
                            Learning Objectives
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                            {lesson.learningObjectives.map((objective, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span className="text-gray-700">{objective}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            )}

            {/* Lesson Content */}
            <Card>
                <CardContent className="pt-6">
                    <div className="prose prose-lg max-w-none">
                        <ReactMarkdown>{lesson.content}</ReactMarkdown>
                    </div>
                </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-6 border-t">
                <Button variant="outline" onClick={() => router.back()}>
                    Back to Subject
                </Button>

                <div className="flex gap-3">
                    {!completed && (
                        <Button onClick={handleComplete}>
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Mark as Complete
                        </Button>
                    )}
                    <Button variant="secondary">
                        Take Quiz
                    </Button>
                </div>
            </div>
        </div>
    )
}
