"use client"

import { useEffect, useState } from "react"
import { ContentService } from "@/services/content-service"
import { StudyMaterial } from "@/data/curriculum-database"
import { StudyMaterialViewer } from "@/components/study-material-viewer"
import { useRouter } from "next/navigation"

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
        <StudyMaterialViewer
            material={lesson}
            onComplete={handleComplete}
            isCompleted={completed}
        />
    )
}
