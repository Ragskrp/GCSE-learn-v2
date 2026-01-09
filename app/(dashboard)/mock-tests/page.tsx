
"use client"

import { useEffect, useState } from "react"
import { AuthService } from "@/services/auth-service"
import { ContentService } from "@/services/content-service"
import { Subject, User } from "@/types/user" // Assuming User type has subjects in profile
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Timer, Trophy, AlertCircle, ArrowRight, BrainCircuit } from "lucide-react"
import Link from "next/link"

export default function MockTestsDashboard() {
    const [subjects, setSubjects] = useState<Subject[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            // 1. Get User for context (year group)
            const user = AuthService.getCurrentUser()

            // 2. Fetch all subjects available
            // In a real scenario, we might default to the user's enrolled subjects
            let allSubjects: Subject[] = []

            if (user && user.profile.subjects && user.profile.subjects.length > 0) {
                allSubjects = user.profile.subjects
            } else {
                // Fallback to fetching all for default year 10
                allSubjects = await ContentService.getAllSubjects()
            }

            setSubjects(allSubjects)
            setLoading(false)
        }
        fetchData()
    }, [])

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        )
    }

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                    <BrainCircuit className="h-8 w-8 text-primary" />
                    Mock Exam Hall
                </h1>
                <p className="text-gray-500 mt-2">
                    Test your knowledge with timed, randomized assessments.
                    These mock tests simulate real GCSE conditions.
                </p>

                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg flex gap-3 text-sm text-yellow-800">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <div>
                        <p className="font-semibold">Exam Conditions</p>
                        <p>No pausing allowed. 20-30 minutes per paper. Results are calculated using 2024 Grade Boundaries.</p>
                    </div>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {subjects.map((subject) => (
                    <Card key={subject.id} className="group hover:shadow-lg transition-all border-l-4" style={{ borderLeftColor: subject.color ? undefined : '#3b82f6' }}>
                        {/* Fallback color logic if 'from-blue-500' string is used, rarely works for inline styles directly without parsing.
                             For now, we rely on tailwind classes if possible or just standard border.
                          */}
                        <div className={`h-2 w-full bg-gradient-to-r ${subject.color || "from-gray-400 to-gray-500"}`}></div>

                        <CardContent className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="text-4xl">{subject.icon || "📚"}</div>
                                <Badge variant="outline" className="font-mono">
                                    Paper 1
                                </Badge>
                            </div>

                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {subject.name}
                            </h3>

                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                                <div className="flex items-center gap-1">
                                    <Timer className="h-4 w-4" />
                                    <span>~30m</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Trophy className="h-4 w-4" />
                                    <span>25-40 Marks</span>
                                </div>
                            </div>

                            <Link href={`/mock-tests/${subject.id}`}>
                                <Button className="w-full group-hover:bg-primary group-hover:text-white">
                                    Sit Exam
                                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
