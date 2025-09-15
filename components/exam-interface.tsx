"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, ArrowLeft, ArrowRight, Zap, Star, Crown, Sparkles, Trophy, Target } from "lucide-react"
import ExamResults from "@/components/exam-results"

// Sample questions for different subjects
const sampleQuestions = {
  maths: [
    {
      id: 1,
      question: "What is the value of x in the equation 2x + 5 = 13?",
      options: ["x = 3", "x = 4", "x = 5", "x = 6"],
      correct: 1,
    },
    {
      id: 2,
      question: "Calculate the area of a circle with radius 7cm (use π = 3.14)",
      options: ["153.86 cm²", "43.96 cm²", "21.98 cm²", "87.92 cm²"],
      correct: 0,
    },
    {
      id: 3,
      question: "Simplify: 3(x + 4) - 2x",
      options: ["x + 12", "5x + 12", "x + 4", "3x + 2"],
      correct: 0,
    },
  ],
  english: [
    {
      id: 1,
      question: "Which of the following is an example of a metaphor?",
      options: [
        "The wind whispered through the trees",
        "She is as brave as a lion",
        "Time is money",
        "The car screeched to a halt",
      ],
      correct: 2,
    },
    {
      id: 2,
      question: "What is the main purpose of a topic sentence?",
      options: [
        "To conclude a paragraph",
        "To introduce the main idea of a paragraph",
        "To provide evidence",
        "To create suspense",
      ],
      correct: 1,
    },
  ],
  science: [
    {
      id: 1,
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correct: 2,
    },
    {
      id: 2,
      question: "Which organ in the human body produces insulin?",
      options: ["Liver", "Pancreas", "Kidney", "Heart"],
      correct: 1,
    },
  ],
  history: [
    {
      id: 1,
      question: "In which year did World War II end?",
      options: ["1944", "1945", "1946", "1947"],
      correct: 1,
    },
  ],
  geography: [
    {
      id: 1,
      question: "What is the longest river in the world?",
      options: ["Amazon River", "Nile River", "Mississippi River", "Yangtze River"],
      correct: 1,
    },
  ],
}

interface ExamInterfaceProps {
  subject: {
    id: string
    name: string
    duration: number
    questions: number
    icon?: string
    conquestTitle?: string
    level?: number
    color?: string
  }
  onComplete: (earnedCoins: number, earnedXp: number) => void
}

export default function ExamInterface({ subject, onComplete }: ExamInterfaceProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [timeLeft, setTimeLeft] = useState(subject.duration * 60)
  const [examCompleted, setExamCompleted] = useState(false)
  const [streak, setStreak] = useState(0)
  const [powerUpsUsed, setPowerUpsUsed] = useState(0)
  const [hintsUsed, setHintsUsed] = useState(0)

  const questions = sampleQuestions[subject.id as keyof typeof sampleQuestions] || []

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

  const handleAnswerChange = (questionId: number, answerIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerIndex }))
  }

  const handleSubmitExam = () => {
    setExamCompleted(true)
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) {
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

  const useHint = () => {
    if (hintsUsed < 3) {
      setHintsUsed((prev) => prev + 1)
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
              <div className="text-2xl mr-3">{subject.icon || "📚"}</div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">{subject.name} Quest</h1>
                <p className="text-sm text-muted-foreground">{subject.conquestTitle || "Knowledge Warrior"}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="flex items-center">
                <Zap className="h-3 w-3 mr-1" />
                Streak: {streak}
              </Badge>
              <Badge variant="outline" className="flex items-center">
                <Star className="h-3 w-3 mr-1" />
                Hints: {3 - hintsUsed}
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
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={useHint}
                    disabled={hintsUsed >= 3}
                    className="flex items-center"
                  >
                    <Sparkles className="h-3 w-3 mr-1" />
                    Hint ({3 - hintsUsed})
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-lg leading-relaxed font-medium">{questions[currentQuestion]?.question}</p>

                <RadioGroup
                  value={answers[questions[currentQuestion]?.id]?.toString()}
                  onValueChange={(value) => {
                    handleAnswerChange(questions[currentQuestion]?.id, Number.parseInt(value))
                    if (Number.parseInt(value) === questions[currentQuestion]?.correct) {
                      setStreak((prev) => prev + 1)
                    }
                  }}
                  className="space-y-3"
                >
                  {questions[currentQuestion]?.options.map((option, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <RadioGroupItem value={index.toString()} id={`option-${index}`} />
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
