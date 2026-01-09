"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { MockTestService, MockTest } from "@/services/mock-test-service"
import { AuthService } from "@/services/auth-service"
import { ProgressStorage } from "@/utils/progress-storage"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Confetti } from "@/components/ui/confetti"
import {
    Timer,
    ChevronLeft,
    ChevronRight,
    Flag,
    CheckCircle,
    AlertTriangle,
    FileText,
    Trophy,
    RotateCcw,
    XCircle,
    Award
} from "lucide-react"

export default function MockExamPage({ params }: { params: { subjectId: string } }) {
    const router = useRouter()

    // States
    const [status, setStatus] = useState<'loading' | 'intro' | 'active' | 'finished'>('loading')
    const [test, setTest] = useState<MockTest | null>(null)
    const [currentQIndex, setCurrentQIndex] = useState(0)
    const [answers, setAnswers] = useState<Record<string, string>>({})
    const [flagged, setFlagged] = useState<Set<string>>(new Set())
    const [timeLeft, setTimeLeft] = useState(0) // seconds
    const [grade, setGrade] = useState<number>(0)
    const [score, setScore] = useState<{ earned: number, total: number }>({ earned: 0, total: 0 })
    const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([])

    // Load Exam
    useEffect(() => {
        const init = async () => {
            const generatedTest = await MockTestService.generateMockTest(params.subjectId)
            if (generatedTest) {
                setTest(generatedTest)
                setTimeLeft(generatedTest.timeLimit * 60)
                setStatus('intro')
            } else {
                router.push('/mock-tests')
            }
        }
        init()
    }, [params.subjectId, router])

    // Timer Logic
    useEffect(() => {
        if (status !== 'active' || timeLeft <= 0) return

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    finishExam()
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [status, timeLeft])

    const startExam = () => {
        setStatus('active')
        window.scrollTo(0, 0)
    }

    const finishExam = async () => {
        if (!test) return

        // Calculate Result
        let correctCount = 0
        let earnedMarks = 0

        test.questions.forEach(q => {
            if (answers[q.id] === q.correctAnswer) {
                correctCount++
                earnedMarks += (q.marks || 1)
            }
        })

        const percentage = (earnedMarks / test.totalMarks) * 100
        const calculatedGrade = MockTestService.calculateGrade(percentage)

        setScore({ earned: earnedMarks, total: test.totalMarks })
        setGrade(calculatedGrade)
        setStatus('finished')

        // Save progress using ProgressStorage
        const user = AuthService.getCurrentUser()
        if (user) {
            const earnedXp = earnedMarks * 10
            const earnedCoins = Math.floor(earnedMarks * 2)

            try {
                const achievementsReceived = await ProgressStorage.completeMockTest(
                    user.username,
                    params.subjectId,
                    percentage,
                    earnedXp,
                    earnedCoins
                )
                if (achievementsReceived && achievementsReceived.length > 0) {
                    setUnlockedAchievements(achievementsReceived)
                }
            } catch (e) {
                console.error("Failed to save progress", e)
            }
        }
    }

    const handleAnswer = (questionId: string, value: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }))
    }

    const toggleFlag = (questionId: string) => {
        const newSet = new Set(flagged)
        if (newSet.has(questionId)) newSet.delete(questionId)
        else newSet.add(questionId)
        setFlagged(newSet)
    }

    const formatTime = (totalSeconds: number) => {
        const m = Math.floor(totalSeconds / 60)
        const s = totalSeconds % 60
        return `${m}:${s.toString().padStart(2, '0')}`
    }

    if (status === 'loading' || !test) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                <p className="text-muted-foreground animate-pulse">Generating your unique paper...</p>
            </div>
        )
    }

    if (status === 'intro') {
        return (
            <div className="max-w-2xl mx-auto pt-10">
                <Card className="border-t-4 border-t-primary shadow-xl glass-panel">
                    <CardContent className="p-8 text-center space-y-6">
                        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FileText className="h-10 w-10 text-primary" />
                        </div>

                        <div>
                            <h1 className="text-3xl font-bold text-foreground">{test.subjectName} Mock Exam</h1>
                            <p className="text-muted-foreground mt-2">Generated ID: <span className="font-mono text-xs bg-secondary p-1 rounded-md">{test.id}</span></p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 border-y border-border py-6">
                            <div>
                                <p className="text-sm text-muted-foreground uppercase font-bold">Time</p>
                                <p className="text-2xl font-semibold text-foreground">{test.timeLimit} mins</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground uppercase font-bold">Questions</p>
                                <p className="text-2xl font-semibold text-foreground">{test.questions.length}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground uppercase font-bold">Max Marks</p>
                                <p className="text-2xl font-semibold text-foreground">{test.totalMarks}</p>
                            </div>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded text-left text-sm text-yellow-800 dark:text-yellow-200 flex gap-3">
                            <AlertTriangle className="h-5 w-5 shrink-0" />
                            <p>Once you start, the timer will begin. Do not refresh the page or you will lose your progress. Good luck!</p>
                        </div>

                        <Button size="lg" className="w-full text-lg h-12 bg-primary hover:bg-primary/90 text-white" onClick={startExam}>
                            Open Exam Paper
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    if (status === 'finished') {
        const percentage = Math.round((score.earned / score.total) * 100)

        return (
            <div className="max-w-4xl mx-auto space-y-6 animate-in slide-in-from-bottom-8 duration-700">
                <Confetti />

                {unlockedAchievements.length > 0 && (
                    <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 dark:from-yellow-900/50 dark:to-yellow-800/50 border-2 border-yellow-400 p-4 rounded-xl flex items-center gap-4 shadow-lg animate-bounce">
                        <div className="bg-yellow-400 p-2 rounded-full text-white">
                            <Award className="h-8 w-8" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-yellow-800 dark:text-yellow-100">Achievement Unlocked!</h3>
                            <p className="text-yellow-700 dark:text-yellow-200">{unlockedAchievements.join(', ')}</p>
                        </div>
                    </div>
                )}

                <Card className="border-none shadow-2xl overflow-hidden relative z-10 glass-panel">
                    <div className={`h-32 ${percentage >= 50 ? 'bg-green-600' : 'bg-orange-500'} flex items-center justify-center relative`}>
                        <div className="text-white text-center">
                            <p className="uppercase tracking-widest font-bold opacity-80">Final Grade</p>
                            <div className="text-7xl font-extrabold flex items-center justify-center gap-2 mt-2">
                                <span className="bg-white text-black w-20 h-20 rounded-xl flex items-center justify-center shadow-lg">
                                    {grade}
                                </span>
                            </div>
                        </div>
                    </div>

                    <CardContent className="p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-muted-foreground uppercase font-bold text-sm">Performance</h3>
                                    <p className="text-4xl font-bold mt-1 text-foreground">
                                        {score.earned} <span className="text-xl text-muted-foreground font-normal">/ {score.total} Marks</span>
                                    </p>
                                    <div className="mt-2 text-sm font-medium text-muted-foreground">
                                        {percentage}% Accuracy
                                    </div>
                                    <Progress value={percentage} className="mt-2 h-3" />
                                </div>

                                <div className="bg-secondary/50 p-4 rounded-lg">
                                    <h4 className="font-bold flex items-center gap-2 mb-2 text-foreground">
                                        <Trophy className="h-4 w-4 text-yellow-500" />
                                        Rewards
                                    </h4>
                                    <div className="flex gap-4">
                                        <div>
                                            <span className="block text-xs text-muted-foreground">XP Earned</span>
                                            <span className="font-bold text-green-600 dark:text-green-400">+{score.earned * 10} XP</span>
                                        </div>
                                        <div>
                                            <span className="block text-xs text-muted-foreground">Coins</span>
                                            <span className="font-bold text-yellow-600 dark:text-yellow-400">+{Math.floor(score.earned * 2)} 🪙</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="font-bold text-foreground">Question Breakdown</h3>
                                <div className="h-64 overflow-y-auto pr-2 space-y-2 custom-scrollbar">
                                    {test.questions.map((q, i) => {
                                        const isCorrect = answers[q.id] === q.correctAnswer
                                        return (
                                            <div key={q.id} className={`p-3 rounded border text-sm flex justify-between items-start ${isCorrect ? 'bg-green-50/50 dark:bg-green-900/20 border-green-200 dark:border-green-800' : 'bg-red-50/50 dark:bg-red-900/20 border-red-200 dark:border-red-800'}`}>
                                                <div className="flex gap-2">
                                                    <span className="font-mono text-muted-foreground w-6">Q{i + 1}</span>
                                                    <div className="flex-1">
                                                        <p className="font-medium text-foreground line-clamp-1">{q.question}</p>
                                                        <p className="text-xs text-muted-foreground mt-1">Topic: {q.topic || 'General'}</p>
                                                        {!isCorrect && <p className="text-xs text-green-600 dark:text-green-400 mt-1 font-bold">Ans: {q.correctAnswer}</p>}
                                                    </div>
                                                </div>
                                                {isCorrect
                                                    ? <CheckCircle className="h-4 w-4 text-green-500" />
                                                    : <XCircle className="h-4 w-4 text-red-400" />
                                                }
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <Button variant="outline" className="flex-1" onClick={() => router.push('/mock-tests')}>
                                Exit to Hall
                            </Button>
                            <Button className="flex-1 bg-primary hover:bg-primary/90 text-white" onClick={() => window.location.reload()}>
                                <RotateCcw className="mr-2 h-4 w-4" />
                                Sit Another Paper
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    const currentQ = test.questions[currentQIndex]

    return (
        <div className="flex gap-6 h-[calc(100vh-100px)]">
            <div className="w-64 flex-shrink-0 hidden md:flex flex-col gap-4">
                <Card className="border-none shadow-sm glass-panel">
                    <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-4">
                            <span className="font-bold text-foreground">Question Map</span>
                            <span className="text-xs text-muted-foreground">{answers[currentQ.id] ? 'Saved' : 'Pending'}</span>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                            {test.questions.map((q, i) => {
                                const isCurrent = i === currentQIndex
                                const isAnswered = !!answers[q.id]
                                const isFlagged = flagged.has(q.id)

                                return (
                                    <button
                                        key={q.id}
                                        onClick={() => setCurrentQIndex(i)}
                                        className={`
                                            h-10 w-full rounded flex items-center justify-center font-bold text-sm transition-all relative
                                            ${isCurrent ? 'bg-primary text-white shadow-md ring-2 ring-offset-1 ring-primary' :
                                                isAnswered ? 'bg-secondary text-foreground hover:bg-secondary/80' : 'bg-background border text-muted-foreground hover:bg-secondary/20'}
                                        `}
                                    >
                                        {i + 1}
                                        {isFlagged && <div className="absolute -top-1 -right-1 w-2 h-2 bg-destructive rounded-full" />}
                                    </button>
                                )
                            })}
                        </div>
                    </CardContent>
                </Card>

                <div className="flex-1" />

                <Button variant="outline" className="text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/20" onClick={finishExam}>
                    End Exam Early
                </Button>
            </div>

            <div className="flex-1 flex flex-col max-w-3xl mx-auto w-full">
                <div className="glass-panel text-foreground p-4 rounded-xl flex items-center justify-between shadow-lg mb-6 sticky top-0 z-10 border-none bg-slate-900/90 dark:bg-black/90 text-white dark:text-white">
                    <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${timeLeft < 300 ? 'bg-red-600 animate-pulse' : 'bg-white/10'}`}>
                            <Timer className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Time Remaining</p>
                            <p className="font-mono text-xl font-bold">{formatTime(timeLeft)}</p>
                        </div>
                    </div>

                    <div className="text-right">
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Progress</p>
                        <p className="font-mono text-xl font-bold">
                            {Object.keys(answers).length} / {test.questions.length}
                        </p>
                    </div>
                </div>

                <Card className="flex-1 border shadow-sm flex flex-col glass-card">
                    <div className="p-6 border-b border-border flex justify-between items-start">
                        <div>
                            <span className="text-muted-foreground font-bold tracking-widest text-sm uppercase">Question {currentQIndex + 1}</span>
                            <div className="flex items-center gap-2 mt-1">
                                {currentQ.topic && <Badge variant="secondary">{currentQ.topic}</Badge>}
                                <Badge variant="outline">{currentQ.marks || 1} Marks</Badge>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            className={flagged.has(currentQ.id) ? "text-destructive bg-destructive/10 hover:bg-destructive/20" : "text-muted-foreground"}
                            onClick={() => toggleFlag(currentQ.id)}
                        >
                            <Flag className="h-4 w-4 mr-2" />
                            {flagged.has(currentQ.id) ? "Flagged" : "Flag"}
                        </Button>
                    </div>

                    <div className="p-8 flex-1 overflow-y-auto">
                        <h2 className="text-2xl font-medium text-foreground leading-normal mb-8">
                            {currentQ.question}
                        </h2>

                        <div className="space-y-3 max-w-xl">
                            {currentQ.options?.map((option, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleAnswer(currentQ.id, option)}
                                    className={`
                                        w-full p-4 rounded-xl border-2 text-left transition-all flex items-center gap-4 group
                                        ${answers[currentQ.id] === option
                                            ? 'border-primary bg-primary/10 shadow-md'
                                            : 'border-border hover:border-primary/50 hover:bg-secondary/30'}
                                    `}
                                >
                                    <div className={`
                                        w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors
                                        ${answers[currentQ.id] === option
                                            ? 'bg-primary border-primary text-white'
                                            : 'border-muted-foreground/30 text-muted-foreground group-hover:border-muted-foreground/50'}
                                    `}>
                                        <span className="font-bold text-sm">{String.fromCharCode(65 + idx)}</span>
                                    </div>
                                    <span className={`text-lg ${answers[currentQ.id] === option ? 'font-medium text-primary' : 'text-foreground'}`}>
                                        {option}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 bg-secondary/30 border-t border-border flex justify-between items-center">
                        <Button
                            variant="ghost"
                            onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
                            disabled={currentQIndex === 0}
                            className="hover:text-primary"
                        >
                            <ChevronLeft className="h-4 w-4 mr-2" /> Previous
                        </Button>

                        {currentQIndex === test.questions.length - 1 ? (
                            <Button onClick={finishExam} className="bg-green-600 hover:bg-green-700 text-white px-8 shadow-lg shadow-green-600/20">
                                Submit Paper
                            </Button>
                        ) : (
                            <Button onClick={() => setCurrentQIndex(prev => Math.min(test.questions.length - 1, prev + 1))} className="bg-primary hover:bg-primary/90 text-white">
                                Next Question <ChevronRight className="h-4 w-4 ml-2" />
                            </Button>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    )
}
