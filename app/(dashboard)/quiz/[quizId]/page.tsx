"use client"

import { useEffect, useState } from "react"
import { ContentService } from "@/services/content-service"
import { AuthService } from "@/services/auth-service"
import { ProgressStorage } from "@/utils/progress-storage"
import { Quiz, QuizQuestion } from "@/data/curriculum-database"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Clock, Trophy, CheckCircle, XCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function QuizPage({ params }: { params: { quizId: string } }) {
    const router = useRouter()
    const [quiz, setQuiz] = useState<Quiz | null>(null)
    const [context, setContext] = useState<{ subjectId: string, topicId: string } | null>(null)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [answers, setAnswers] = useState<Record<string, string>>({})
    const [showResults, setShowResults] = useState(false)
    const [timeRemaining, setTimeRemaining] = useState(0)

    useEffect(() => {
        const found = ContentService.getQuizWithContext(params.quizId)
        if (found) {
            setQuiz(found.quiz)
            setContext({ subjectId: found.subjectId, topicId: found.topicId })
            setTimeRemaining(found.quiz.timeLimit * 60) // Convert minutes to seconds
        } else {
            router.push("/subjects")
        }
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
            await ProgressStorage.completeQuiz(
                user.username,
                context.subjectId,
                context.topicId,
                quiz.id,
                score,
                quiz.xpReward,
                quiz.coinReward
            )
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
            <div className="max-w-4xl mx-auto space-y-6">
                <Card className="border-t-4 border-t-primary">
                    <CardHeader className="text-center pb-4">
                        <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center">
                            <Trophy className="h-10 w-10 text-primary" />
                        </div>
                        <CardTitle className="text-3xl">Quiz Complete!</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="text-center space-y-2">
                            <p className="text-5xl font-bold text-primary">{score}%</p>
                            <p className="text-gray-500">
                                {correctAnswers} out of {quiz.questions.length} correct
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-green-50 p-4 rounded-lg text-center">
                                <p className="text-sm text-gray-600 mb-1">XP Earned</p>
                                <p className="text-2xl font-bold text-green-600">+{quiz.xpReward}</p>
                            </div>
                            <div className="bg-yellow-50 p-4 rounded-lg text-center">
                                <p className="text-sm text-gray-600 mb-1">Coins Earned</p>
                                <p className="text-2xl font-bold text-yellow-600">+{quiz.coinReward}</p>
                            </div>
                        </div>

                        {/* Review Answers */}
                        <div className="space-y-4 mt-8">
                            <h3 className="font-semibold text-lg">Review Your Answers</h3>
                            {quiz.questions.map((question, index) => {
                                const isCorrect = answers[question.id] === question.correctAnswer
                                return (
                                    <Card key={question.id} className={isCorrect ? "border-green-200" : "border-red-200"}>
                                        <CardContent className="pt-4">
                                            <div className="flex items-start gap-3">
                                                {isCorrect ? (
                                                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                                                ) : (
                                                    <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                                                )}
                                                <div className="flex-1">
                                                    <p className="font-medium mb-2">
                                                        {index + 1}. {question.question}
                                                    </p>
                                                    {!isCorrect && (
                                                        <div className="space-y-1 text-sm">
                                                            <p className="text-red-600">Your answer: {answers[question.id] || "Not answered"}</p>
                                                            <p className="text-green-600">Correct answer: {question.correctAnswer}</p>
                                                        </div>
                                                    )}
                                                    <p className="text-sm text-gray-600 mt-2 italic">{question.explanation}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>

                        <div className="flex gap-3 pt-4">
                            <Button variant="outline" onClick={() => router.back()} className="flex-1">
                                Back to Subject
                            </Button>
                            <Button onClick={() => window.location.reload()} className="flex-1">
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
                        <h1 className="text-2xl font-bold text-gray-900">{quiz.title}</h1>
                        <div className="flex items-center gap-3 mt-1">
                            <Badge variant="secondary" className="capitalize">
                                {quiz.difficulty}
                            </Badge>
                            <span className="text-sm text-gray-500">
                                {quiz.questions.length} Questions
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-lg">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <span className="font-mono font-bold text-orange-600">
                        {formatTime(timeRemaining)}
                    </span>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                    <span>Question {currentQuestionIndex + 1} of {quiz.questions.length}</span>
                    <span>{Object.keys(answers).length} answered</span>
                </div>
                <Progress value={((currentQuestionIndex + 1) / quiz.questions.length) * 100} />
            </div>

            {/* Question Card */}
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">
                        {currentQuestion.question}
                    </CardTitle>
                    {currentQuestion.marks && (
                        <Badge variant="outline" className="w-fit">{currentQuestion.marks} marks</Badge>
                    )}
                </CardHeader>
                <CardContent className="space-y-3">
                    {currentQuestion.options?.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleAnswer(currentQuestion.id, option)}
                            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${answers[currentQuestion.id] === option
                                ? "border-primary bg-primary/5"
                                : "border-gray-200 hover:border-gray-300"
                                }`}
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${answers[currentQuestion.id] === option
                                    ? "border-primary bg-primary text-white"
                                    : "border-gray-300"
                                    }`}>
                                    {answers[currentQuestion.id] === option && "✓"}
                                </div>
                                <span className="font-medium">{option}</span>
                            </div>
                        </button>
                    ))}
                </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-4">
                <Button
                    variant="outline"
                    onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                    disabled={currentQuestionIndex === 0}
                >
                    Previous
                </Button>

                <div className="flex gap-3">
                    {currentQuestionIndex < quiz.questions.length - 1 ? (
                        <Button
                            onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                        >
                            Next Question
                        </Button>
                    ) : (
                        <Button
                            onClick={handleSubmit}
                            className="bg-green-600 hover:bg-green-700"
                        >
                            Submit Quiz
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}
