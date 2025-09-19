"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Clock, Trophy, Coins, Zap } from "lucide-react"
import type { Quiz } from "@/data/curriculum-database"

interface QuizInterfaceProps {
  quiz: Quiz
  onComplete: (score: number, passed: boolean) => void
}

export function QuizInterface({ quiz, onComplete }: QuizInterfaceProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [timeLeft, setTimeLeft] = useState(quiz.timeLimit * 60) // Convert to seconds
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)

  const handleSubmit = useCallback(() => {
    let correctAnswers = 0
    quiz.questions.forEach((question) => {
      const userAnswer = answers[question.id]
      if (Array.isArray(question.correctAnswer)) {
        if (question.correctAnswer.includes(userAnswer)) {
          correctAnswers++
        }
      } else {
        if (userAnswer === question.correctAnswer) {
          correctAnswers++
        }
      }
    })

    const finalScore = Math.round((correctAnswers / quiz.questions.length) * 100)
    const passed = finalScore >= quiz.passingScore

    setScore(finalScore)
    setShowResults(true)
    onComplete(finalScore, passed)
  }, [answers, onComplete, quiz.passingScore, quiz.questions])

  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      handleSubmit()
    }
  }, [timeLeft, showResults, handleSubmit])

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  if (showResults) {
    const passed = score >= quiz.passingScore
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{passed ? "🎉 Congratulations!" : "📚 Keep Learning!"}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {score}%
            </div>

            <div className="flex justify-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">
                  +{passed ? quiz.xpReward : Math.floor(quiz.xpReward * 0.5)}
                </div>
                <div className="text-sm text-gray-600 flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  XP Earned
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-500">
                  +{passed ? quiz.coinReward : Math.floor(quiz.coinReward * 0.5)}
                </div>
                <div className="text-sm text-gray-600 flex items-center gap-1">
                  <Coins className="w-4 h-4" />
                  Coins Earned
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Review Your Answers</h3>
              {quiz.questions.map((question, index) => {
                const userAnswer = answers[question.id]
                const isCorrect = Array.isArray(question.correctAnswer)
                  ? question.correctAnswer.includes(userAnswer)
                  : userAnswer === question.correctAnswer

                return (
                  <Card
                    key={question.id}
                    className={`border-l-4 ${isCorrect ? "border-l-green-500" : "border-l-red-500"}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-2 mb-2">
                        <Badge variant={isCorrect ? "default" : "destructive"}>{isCorrect ? "✓" : "✗"}</Badge>
                        <div className="flex-1">
                          <p className="font-medium">{question.question}</p>
                          <p className="text-sm text-gray-600 mt-1">
                            Your answer:{" "}
                            <span className={isCorrect ? "text-green-600" : "text-red-600"}>
                              {userAnswer || "No answer"}
                            </span>
                          </p>
                          {!isCorrect && (
                            <p className="text-sm text-green-600">
                              Correct answer:{" "}
                              {Array.isArray(question.correctAnswer)
                                ? question.correctAnswer.join(", ")
                                : question.correctAnswer}
                            </p>
                          )}
                          <p className="text-sm text-blue-600 mt-2">{question.explanation}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const question = quiz.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {quiz.title}
            </CardTitle>
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {formatTime(timeLeft)}
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1">
                <Trophy className="w-4 h-4" />
                {quiz.passingScore}% to pass
              </Badge>
            </div>
          </div>
          <Progress value={progress} className="mt-4" />
          <p className="text-sm text-gray-600 mt-2">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </p>
        </CardHeader>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">{question.question}</h3>
              <Badge variant="secondary" className="mb-4">
                {question.marks} mark{question.marks !== 1 ? "s" : ""}
              </Badge>
            </div>

            {question.type === "multiple-choice" && question.options && (
              <RadioGroup
                value={answers[question.id] || ""}
                onValueChange={(value) => handleAnswerChange(question.id, value)}
              >
                {question.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="cursor-pointer">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {question.type === "true-false" && (
              <RadioGroup
                value={answers[question.id] || ""}
                onValue-Change={(value) => handleAnswerChange(question.id, value)}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="True" id="true" />
                  <Label htmlFor="true" className="cursor-pointer">
                    True
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="False" id="false" />
                  <Label htmlFor="false" className="cursor-pointer">
                    False
                  </Label>
                </div>
              </RadioGroup>
            )}

            {(question.type === "short-answer" || question.type === "calculation") && (
              <Input
                placeholder="Enter your answer..."
                value={answers[question.id] || ""}
                onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                className="max-w-md"
              />
            )}
          </div>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>

            {currentQuestion === quiz.questions.length - 1 ? (
              <Button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Submit Quiz
              </Button>
            ) : (
              <Button
                onClick={() => setCurrentQuestion(currentQuestion + 1)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Next
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
