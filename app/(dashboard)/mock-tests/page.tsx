
"use client"

import { useEffect, useState } from "react"
import { AuthService } from "@/services/auth-service"
import { ContentService } from "@/services/content-service"
import { Subject } from "@/types/curriculum"
import { User } from "@/types/user"
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
            try {
                const user = AuthService.getCurrentUser()
                let allSubjects: Subject[] = []

                if (user && user.profile.subjects && user.profile.subjects.length > 0) {
                    allSubjects = user.profile.subjects as any
                } else {
                    allSubjects = await ContentService.getAllSubjects()
                }

                // Filter and Deduplicate
                const yearGroup = user?.yearGroup || 10
                const filtered = allSubjects.filter(s => {
                    if (s.id.includes("-")) {
                        const parts = s.id.split("-")
                        const idYear = parseInt(parts[parts.length - 1])
                        if (!isNaN(idYear) && idYear !== yearGroup) return false
                    }
                    return true
                })

                const uniqueSubjects = Array.from(new Map(filtered.map(s => [s.id, s])).values())
                setSubjects(uniqueSubjects)
            } catch (err) {
                console.error("MockTests: Error loading data", err)
            } finally {
                setLoading(false)
            }
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {subjects.map((subject) => (
                    <Card key={subject.id} className="group hover:shadow-xl transition-all duration-300 border-none overflow-hidden glass-card flex flex-col h-full">
                        <div className={`h-3 bg-gradient-to-r ${subject.color || "from-pink-400 to-purple-500"}`}></div>

                        <CardContent className="p-6 flex flex-col flex-1">
                            <div className="flex justify-between items-start mb-6">
                                <div className="text-5xl group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                                    {subject.icon || "📚"}
                                </div>
                                <Badge variant="secondary" className="font-bold bg-primary/10 text-primary border-none">
                                    Mock Paper 1
                                </Badge>
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100">
                                {subject.name}
                            </h3>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">FULL SYLLABUS</p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div className="flex items-center gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50">
                                    <Timer className="h-4 w-4 text-primary" />
                                    <div className="text-xs">
                                        <p className="text-slate-400 font-bold uppercase pb-0.5" style={{ fontSize: '0.6rem' }}>Duration</p>
                                        <p className="font-bold text-slate-700 dark:text-slate-300">~{subject.timeLimit || 30}m</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 p-3 rounded-2xl bg-slate-50 dark:bg-slate-900/50">
                                    <Trophy className="h-4 w-4 text-yellow-500" />
                                    <div className="text-xs">
                                        <p className="text-slate-400 font-bold uppercase pb-0.5" style={{ fontSize: '0.6rem' }}>Reward</p>
                                        <p className="font-bold text-slate-700 dark:text-slate-300">250 XP</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-auto pt-4">
                                <Link href={`/mock-tests/${subject.id}`}>
                                    <Button className="w-full bg-gradient-to-r from-primary to-purple-500 hover:scale-105 transition-transform text-white font-bold h-12 rounded-xl border-none shadow-md shadow-primary/20">
                                        Sit Examination
                                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}
