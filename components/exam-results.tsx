"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Trophy,
  Target,
  BookOpen,
  RotateCcw,
  Crown,
  Star,
  Coins,
  Sparkles,
  PartyPopper,
  Heart,
  Zap,
  Gift,
} from "lucide-react"

interface ExamResultsProps {
  subject: {
    id: string
    name: string
    duration: number
    questions: number
    icon?: string
    conquestTitle?: string
  }
  score: {
    correct: number
    total: number
    percentage: number
    earnedCoins?: number
    earnedXp?: number
  }
  onRestart: () => void
}

export default function ExamResults({ subject, score, onRestart }: ExamResultsProps) {
  const [showCelebration, setShowCelebration] = useState(true)
  const [coinsAnimating, setCoinsAnimating] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCoinsAnimating(true)
    }, 1000)

    const celebrationTimer = setTimeout(() => {
      setShowCelebration(false)
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearTimeout(celebrationTimer)
    }
  }, [])

  const getGrade = (percentage: number) => {
    if (percentage >= 90)
      return {
        grade: "A*",
        color: "bg-gradient-to-r from-yellow-400 to-yellow-600 text-white",
        title: "Legendary Scholar!",
      }
    if (percentage >= 80)
      return { grade: "A", color: "bg-gradient-to-r from-green-400 to-green-600 text-white", title: "Master Warrior!" }
    if (percentage >= 70)
      return { grade: "B", color: "bg-gradient-to-r from-blue-400 to-blue-600 text-white", title: "Brave Knight!" }
    if (percentage >= 60)
      return { grade: "C", color: "bg-gradient-to-r from-purple-400 to-purple-600 text-white", title: "Rising Hero!" }
    if (percentage >= 50)
      return {
        grade: "D",
        color: "bg-gradient-to-r from-orange-400 to-orange-600 text-white",
        title: "Determined Fighter!",
      }
    return { grade: "U", color: "bg-gradient-to-r from-pink-400 to-pink-600 text-white", title: "Future Champion!" }
  }

  const gradeInfo = getGrade(score.percentage)

  const getFeedback = (percentage: number) => {
    if (percentage >= 90)
      return "🎉 INCREDIBLE! You're absolutely crushing it! You're ready to conquer any GCSE challenge!"
    if (percentage >= 80) return "✨ AMAZING! Your hard work is really paying off! Keep up this fantastic momentum!"
    if (percentage >= 70) return "🌟 GREAT JOB! You're doing so well! A little more practice and you'll be unstoppable!"
    if (percentage >= 60)
      return "💪 GOOD WORK! You're on the right track! Focus on your weak spots and you'll level up fast!"
    if (percentage >= 50)
      return "🚀 KEEP GOING! Every expert was once a beginner! You're building your skills beautifully!"
    return "💖 DON'T GIVE UP! This is just practice - every mistake is a step closer to mastery! You've got this!"
  }

  const getStudyTips = (subjectId: string) => {
    const tips = {
      maths: ["Practice more algebra problems", "Review geometry formulas", "Work on mental arithmetic"],
      english: ["Read more literature", "Practice essay writing", "Study literary devices"],
      science: ["Review key scientific concepts", "Practice calculations", "Study diagrams and processes"],
      history: ["Create timeline of events", "Practice source analysis", "Review key historical figures"],
      geography: ["Study maps and locations", "Review physical processes", "Practice case studies"],
    }
    return tips[subjectId as keyof typeof tips] || ["Keep practicing!", "Review your notes", "Ask for help when needed"]
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100 relative ${showCelebration ? "party-lights" : ""}`}
    >
      {showCelebration && (
        <div className="fixed inset-0 pointer-events-none z-10">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {i % 3 === 0 ? (
                <Star className="h-6 w-6 text-yellow-400" />
              ) : i % 3 === 1 ? (
                <Heart className="h-6 w-6 text-pink-400" />
              ) : (
                <Sparkles className="h-6 w-6 text-purple-400" />
              )}
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 py-8 relative z-20">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <PartyPopper className="h-10 w-10 text-primary mr-3" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Quest Complete!
            </h1>
            <PartyPopper className="h-10 w-10 text-primary ml-3" />
          </div>
          <p className="text-xl text-muted-foreground flex items-center justify-center">
            <div className="text-2xl mr-2">{subject.icon || "📚"}</div>
            {subject.name} - {subject.conquestTitle || "Knowledge Quest"}
          </p>
        </div>

        <Card className="mb-8 max-w-3xl mx-auto shadow-2xl border-4 border-primary/30">
          <CardHeader className="text-center bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="flex items-center justify-center mb-4">
              <Crown className="h-8 w-8 text-yellow-500 mr-3" />
              <CardTitle className="text-3xl">{gradeInfo.title}</CardTitle>
              <Crown className="h-8 w-8 text-yellow-500 ml-3" />
            </div>

            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className={`flex items-center justify-center mb-2 ${coinsAnimating ? "coin-flip" : ""}`}>
                  <Coins className="h-8 w-8 text-yellow-500 mr-2" />
                  <span className="text-6xl font-bold text-primary">{score.earnedCoins || 0}</span>
                </div>
                <Badge className={`${gradeInfo.color} text-lg px-4 py-2`}>Grade {gradeInfo.grade}</Badge>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
                  <CardContent className="pt-4">
                    <div className="text-center">
                      <div className={`flex items-center justify-center mb-2 ${coinsAnimating ? "coin-flip" : ""}`}>
                        <Coins className="h-8 w-8 text-yellow-500 mr-2" />
                        <span className="text-3xl font-bold text-yellow-600">+{score.earnedCoins || 0}</span>
                      </div>
                      <p className="text-sm text-yellow-700 font-medium">Coins Earned!</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
                  <CardContent className="pt-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Zap className="h-8 w-8 text-purple-500 mr-2" />
                        <span className="text-3xl font-bold text-purple-600">+{score.earnedXp || 0}</span>
                      </div>
                      <p className="text-sm text-purple-700 font-medium">XP Gained!</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-lg font-medium flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Challenges Conquered
                  </span>
                  <span className="text-xl font-bold">
                    {score.correct} / {score.total}
                  </span>
                </div>
                <Progress value={score.percentage} className="h-4" />
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border-2 border-green-200">
                <h3 className="font-bold text-lg mb-3 flex items-center text-green-800">
                  <Gift className="h-5 w-5 mr-2" />
                  Your Victory Message
                </h3>
                <p className="text-green-700 text-lg leading-relaxed">{getFeedback(score.percentage)}</p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-200">
                <h3 className="font-bold text-lg mb-4 flex items-center text-purple-800">
                  <BookOpen className="h-5 w-5 mr-2" />
                  Power-Up Tips for {subject.name}
                </h3>
                <ul className="space-y-2">
                  {getStudyTips(subject.id).map((tip, index) => (
                    <li key={index} className="text-purple-700 flex items-start">
                      <Star className="h-4 w-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onRestart}
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold text-lg px-8"
            >
              <Trophy className="mr-2 h-5 w-5" />
              Choose Next Quest
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="font-bold text-lg px-8 bg-transparent">
              <RotateCcw className="mr-2 h-5 w-5" />
              Retry This Quest
            </Button>
          </div>

          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 rounded-lg border border-pink-200 max-w-md mx-auto">
            <p className="text-pink-800 font-medium flex items-center justify-center">
              <Heart className="h-4 w-4 mr-2" />
              Keep conquering quests to unlock amazing rewards!
              <Heart className="h-4 w-4 ml-2" />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
