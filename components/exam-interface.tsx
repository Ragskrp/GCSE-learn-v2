"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, ArrowLeft, ArrowRight, Zap, Star, Crown, Sparkles, Trophy, Target } fimport { Clock, CircleCheck as CheckCircle, ArrowLeft, ArrowRight, Zap, Star, Crown, Sparkles, Trophy, Target } from "lucide-react"se"

interface ExamInterfaceProps {
  subject: Topic
  onComplete: (earnedCoins: number, earnedXp: number) => void
}

export default function ExamInterface({ subject, onComplete }: ExamInterfaceProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [timeLeft, setTimeLeft] = useState(subject.timeLimit * 60)
  const [examCompleted, setExamCompleted] = useState(false)
  const [streak, setStreak] = useState(0)

  const questions = subject.questions || []

  useEffect(() => {
    if (timeLeft > 0 && !examCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      handleSubmitExam()
    }
  }, [timeLeft, examCompleted])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  const handleSubmitExam = () => {
    setExamCompleted(true)
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++
      }
    })
    const percentage = Math.round((correct / questions.length) * 100)
    let earnedCoins = Math.floor(percentage / 10) * 10 + streak * 5
    let earnedXp = percentage * 2 + correct * 10
    if (percentage === 100) {
      earnedCoins += 50
      earnedXp += 100
    }
    return {
      correct,
      total: questions.length,
      percentage,
      earnedCoins,
      earnedXp,
    }
  }


  if (examCompleted) {
    const score = calculateScore()
    return (
      <ExamResults subject={subject} score={score} onRestart={() => onComplete(score.earnedCoins, score.earnedXp)} />
    )
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Button variant="outline" onClick={() => onComplete(0, 0)} className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retreat
            </Button>
            <div className="flex items-center">
              <div className="text-2xl mr-3">📚</div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">{subject.title} Quest</h1>
                <p className="text-sm text-muted-foreground">Knowledge Warrior</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="flex items-center">
                <Zap className="h-3 w-3 mr-1" />
                Streak: {streak}
              </Badge>
            </div>
            <div
              className={`flex items-center text-lg font-mono px-3 py-1 rounded-lg ${
                timeLeft < 300 ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
              }`}
            >
              <Clock className="h-5 w-5 mr-2" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>

        <Card className="mb-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="pt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium flex items-center">
                <Trophy className="h-4 w-4 mr-2 text-primary" />
                Battle Progress: Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="text-sm font-medium flex items-center">
                <Target className="h-4 w-4 mr-2 text-secondary" />
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-3" />
          </CardContent>
        </Card>

        {questions.length > 0 && (
          <Card className="mb-8 shadow-lg border-2 border-primary/20">
            <CardHeader className="bg-gradient-to-r from-primary/5 to-secondary/5">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center">
                  <Crown className="h-5 w-5 mr-2 text-primary" />
                  Challenge {currentQuestion + 1}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed font-medium">{questions[currentQuestion]?.question}</p>

                <RadioGroup
                  value={answers[questions[currentQuestion]?.id]?.toString()}
                  onValueChange={(value) => {
                    handleAnswerChange(questions[currentQuestion]?.id, value)
                    if (value === questions[currentQuestion]?.correctAnswer) {
                      setStreak((prev) => prev + 1)
                    }
                  }}
                  className="space-y-3"
                >
                  {questions[currentQuestion]?.options?.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <RadioGroupItem value={option} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="text-base cursor-pointer flex-1">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className="flex items-center"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous Challenge
          </Button>

          <div className="flex space-x-2">
            {questions.map((_, index) => (
              <Button
                key={index}
                variant={index === currentQuestion ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentQuestion(index)}
                className="w-12 h-12 relative"
              >
                {answers[questions[index]?.id] !== undefined && (
                  <CheckCircle className="h-4 w-4 absolute -top-1 -right-1 text-green-500 bg-white rounded-full" />
                )}
                {index + 1}
              </Button>
            ))}
          </div>

          {currentQuestion === questions.length - 1 ? (
            <Button
              onClick={handleSubmitExam}
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold"
            >
              <Trophy className="mr-2 h-4 w-4" />
              Complete Quest
              <Sparkles className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
              disabled={currentQuestion === questions.length - 1}
              className="flex items-center"
            >
              Next Challenge
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
