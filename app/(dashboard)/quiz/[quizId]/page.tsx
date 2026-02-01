"use client"

import { useEffect, useState } from "react"
import { ContentService } from "@/services/content-service"
import { AuthService } from "@/services/auth-service"
import { ProgressStorage } from "@/utils/progress-storage"
import { Quiz } from "@/data/curriculum-database"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Clock, Trophy, CheckCircle, XCircle, Award } from "lucide-react"
import { useRouter } from "next/navigation"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeRaw from 'rehype-raw'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import { Input } from "@/components/ui/input"

export default function QuizPage({ params }: { params: { quizId: string } }) {
    const router = useRouter()
    const [quiz, setQuiz] = useState<Quiz | null>(null)
    const [context, setContext] = useState<{ subjectId: string, topicId: string } | null>(null)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState<Record<string, string>>({})
    const [showResults, setShowResults] = useState(false)
    const [timeRemaining, setTimeRemaining] = useState(0)
    const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([])

    useEffect(() => {
        const fetchQuiz = async () => {
            const found = await ContentService.getQuizWithContext(params.quizId)
            if (found) {
                setQuiz(found.quiz)
                setContext({ subjectId: found.subjectId, topicId: found.topicId })
                setTimeRemaining(found.quiz.timeLimit * 60) // Convert minutes to seconds
            } else {
                router.push("/subjects")
            }
        }
        fetchQuiz()
    }, [params.quizId, router])

    useEffect(() => {
        if (!quiz || showResults || timeRemaining <= 0) return

        const timer = setInterval(() => {
            setTimeRemaining((prev) => {
                if (prev <= 1) {
                    handleSubmit()
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [quiz, showResults, timeRemaining])

    const handleAnswer = (questionId: string, answer: string) => {
        setAnswers((prev) => ({ ...prev, [questionId]: answer }))
    }

    const handleSubmit = async () => {
        setShowResults(true)
        // Calculate score and save progress
        const correctAnswers = quiz?.questions.filter(
            (q) => answers[q.id] === q.correctAnswer
        ).length || 0

        const score = Math.round((correctAnswers / (quiz?.questions.length || 1)) * 100)

        const user = AuthService.getCurrentUser()
        if (user && context && quiz) {
            const achievements = await ProgressStorage.completeQuiz(
                user.username,
                context.subjectId,
                context.topicId,
                quiz.id,
                score,
                quiz.xpReward,
                quiz.coinReward
            )
            if (achievements && achievements.length > 0) {
                setUnlockedAchievements(achievements)
            }
        }
    }

    if (!quiz) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        )
    }

    const currentQuestion = quiz.questions[currentQuestionIndex]
    const correctAnswers = quiz.questions.filter(
        (q) => answers[q.id] === q.correctAnswer
    ).length
    const score = Math.round((correctAnswers / quiz.questions.length) * 100)

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins}:${secs.toString().padStart(2, '0')}`
    }

    if (showResults) {
        return (
            <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
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

                <Card className="border-t-4 border-t-primary glass-panel">
                    <CardHeader className="text-center pb-4">
                        <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center">
                            <Trophy className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="text-3xl gradient-text">Quiz Complete!</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="text-center space-y-2">
                            <p className="text-5xl font-bold text-primary">{score}%</p>
                            <p className="text-muted-foreground">
                                {correctAnswers} out of {quiz.questions.length} correct
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg text-center">
                                <p className="text-sm text-muted-foreground mb-1">XP Earned</p>
                                <p className="text-2xl font-bold text-green-600 dark:text-green-400">+{quiz.xpReward}</p>
                            </div>
                            <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg text-center">
                                <p className="text-sm text-muted-foreground mb-1">Coins Earned</p>
                                <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">+{quiz.coinReward}</p>
                            </div>
                        </div>

                        {/* Review Answers */}
                        <div className="space-y-4 mt-8">
                            <h3 className="font-semibold text-lg text-foreground">Review Your Answers</h3>
                            {quiz.questions.map((question, index) => {
                                const isCorrect = answers[question.id] === question.correctAnswer
                                return (
                                    <div key={question.id} className={`p-4 rounded-xl border ${isCorrect ? "border-green-200 bg-green-50/50 dark:bg-green-900/10 dark:border-green-900" : "border-destructive/20 bg-destructive/5"}`}>
                                        <div className="flex items-start gap-3">
                                            {isCorrect ? (
                                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                            ) : (
                                                <XCircle className="h-5 w-5 text-destructive mt-0.5" />
                                            )}
                                            <div className="flex-1">
                                                <div className="font-medium mb-2 text-foreground prose prose-invert max-w-none">
                                                    <ReactMarkdown
                                                        remarkPlugins={[remarkMath]}
                                                        rehypePlugins={[rehypeKatex]}
                                                    >
                                                        {`${index + 1}. ${question.question}`}
                                                    </ReactMarkdown>
                                                </div>
                                                {!isCorrect && (
                                                    <div className="space-y-1 text-sm">
                                                        <div className="flex gap-1 text-destructive">
                                                            <span>Your answer:</span>
                                                            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                                                {String(answers[question.id] || "Not answered")}
                                                            </ReactMarkdown>
                                                        </div>
                                                        <div className="flex gap-1 text-green-600 dark:text-green-400">
                                                            <span>Correct answer:</span>
                                                            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
                                                                {String(question.correctAnswer)}
                                                            </ReactMarkdown>
                                                        </div>
                                                    </div>
                                                )}
                                                <p className="text-sm text-muted-foreground mt-2 italic">{question.explanation}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="flex gap-3 pt-4">
                            <Button variant="outline" onClick={() => router.back()} className="flex-1">
                                Back to Subject
                            </Button>
                            <Button onClick={() => window.location.reload()} className="flex-1 bg-primary hover:bg-primary/90 text-white">
                                Retake Quiz
                            </Button>
                        </div>
                    </CardContent>
                </Card>
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
                        <h1 className="text-2xl font-bold text-foreground">{quiz.title}</h1>
                        <div className="flex items-center gap-3 mt-1">
                            <Badge variant="secondary" className="capitalize">
                                {quiz.difficulty}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                                {quiz.questions.length} Questions
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 bg-orange-50 dark:bg-orange-900/20 px-4 py-2 rounded-lg border border-orange-200 dark:border-orange-800">
                    <Clock className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    <span className="font-mono font-bold text-orange-600 dark:text-orange-400">
                        {formatTime(timeRemaining)}
                    </span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Question {currentQuestionIndex + 1} of {quiz.questions.length}</span>
                    <span>{Object.keys(answers).length} answered</span>
                </div>
                <Progress value={((currentQuestionIndex + 1) / quiz.questions.length) * 100} className="h-2 bg-secondary" />
            </div>

            {/* Question Card */}
            <div className="glass-card rounded-2xl p-6 min-h-[300px] flex flex-col justify-center">
                <div className="mb-6 flex justify-between items-start">
                    <div className="text-xl font-bold text-foreground leading-relaxed prose prose-invert max-w-none">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm, remarkMath]}
                            rehypePlugins={[rehypeRaw, rehypeKatex]}
                        >
                            {currentQuestion.question}
                        </ReactMarkdown>
                    </div>
                    {currentQuestion.marks && (
                        <Badge variant="outline" className="w-fit shrink-0 ml-4">{currentQuestion.marks} marks</Badge>
                    )}
                </div>

                <div className="space-y-3">
                    {currentQuestion.type === "short-answer" ? (
                        <div className="space-y-4">
                            <Input
                                placeholder="Type your answer here..."
                                value={answers[currentQuestion.id] || ""}
                                onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                                className="text-lg p-6 rounded-xl border-2 border-border focus:border-primary bg-background"
                            />
                            <p className="text-sm text-muted-foreground italic">
                                Note: High-stakes math answers should be written clearly.
                            </p>
                        </div>
                    ) : (
                        currentQuestion.options?.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(currentQuestion.id, option)}
                                className={`w-full text-left p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${answers[currentQuestion.id] === option
                                    ? "border-primary bg-primary/10 shadow-md"
                                    : "border-border hover:border-primary/50 hover:bg-secondary/50"
                                    }`}
                            >
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${answers[currentQuestion.id] === option
                                    ? "border-primary bg-primary text-white"
                                    : "border-muted-foreground/30 text-transparent"
                                    }`}>
                                    {answers[currentQuestion.id] === option && <span className="text-xs">✓</span>}
                                </div>
                                <span className={`font-medium ${answers[currentQuestion.id] === option ? 'text-primary' : 'text-foreground'}`}>
                                    <ReactMarkdown
                                        remarkPlugins={[remarkMath]}
                                        rehypePlugins={[rehypeKatex]}
                                    >
                                        {option}
                                    </ReactMarkdown>
                                </span>
                            </button>
                        ))
                    )}
                </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-4">
                <Button
                    variant="outline"
                    onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                    disabled={currentQuestionIndex === 0}
                    className="border-primary/20 hover:text-primary"
                >
                    Previous
                </Button>

                <div className="flex gap-3">
                    {currentQuestionIndex < quiz.questions.length - 1 ? (
                        <Button
                            onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                            className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25"
                        >
                            Next Question
                        </Button>
                    ) : (
                        <Button
                            onClick={handleSubmit}
                            className="bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-600/20"
                        >
                            Submit Quiz
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}
