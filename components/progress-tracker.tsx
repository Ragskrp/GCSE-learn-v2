"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, TrendingUp, Target, Calendar, Award, BarChart3, PieChart, Activity } from "lucide-react"
import type { User } from "@/types/user"

interface ProgressTrackerProps {
  user: User
  onClose: () => void
}

interface SubjectProgress {
  name: string
  totalTopics: number
  completedTopics: number
  totalXP: number
  earnedXP: number
  averageScore: number
  timeSpent: number
}

export default function ProgressTracker({ user, onClose }: ProgressTrackerProps) {
  const [selectedTimeframe, setSelectedTimeframe] = useState<"week" | "month" | "all">("month")

  // Calculate progress data
  const calculateSubjectProgress = (): SubjectProgress[] => {
    return user.profile.subjects.map(subject => {
      const totalTopics = subject.topics.length
      const completedTopics = subject.topics.filter(topic => topic.completed).length
      const totalXP = subject.maxXp
      const earnedXP = subject.xp
      
      // Mock data for demonstration - in real app, this would come from user activity
      const averageScore = Math.floor(Math.random() * 30) + 70 // 70-100%
      const timeSpent = Math.floor(Math.random() * 50) + 20 // 20-70 hours

      return {
        name: subject.name,
        totalTopics,
        completedTopics,
        totalXP,
        earnedXP,
        averageScore,
        timeSpent
      }
    })
  }

  const subjectProgress = calculateSubjectProgress()
  const overallProgress = {
    totalTopics: subjectProgress.reduce((sum, subject) => sum + subject.totalTopics, 0),
    completedTopics: subjectProgress.reduce((sum, subject) => sum + subject.completedTopics, 0),
    totalXP: subjectProgress.reduce((sum, subject) => sum + subject.totalXP, 0),
    earnedXP: subjectProgress.reduce((sum, subject) => sum + subject.earnedXP, 0),
    averageScore: Math.round(subjectProgress.reduce((sum, subject) => sum + subject.averageScore, 0) / subjectProgress.length),
    totalTimeSpent: subjectProgress.reduce((sum, subject) => sum + subject.timeSpent, 0)
  }

  // Mock weekly progress data
  const weeklyProgress = [
    { week: "Week 1", xp: 120, quizzes: 3, studyTime: 8 },
    { week: "Week 2", xp: 180, quizzes: 5, studyTime: 12 },
    { week: "Week 3", xp: 150, quizzes: 4, studyTime: 10 },
    { week: "Week 4", xp: 200, quizzes: 6, studyTime: 15 },
  ]

  const getGradeFromScore = (score: number) => {
    if (score >= 90) return { grade: "A*", color: "text-yellow-600" }
    if (score >= 80) return { grade: "A", color: "text-green-600" }
    if (score >= 70) return { grade: "B", color: "text-blue-600" }
    if (score >= 60) return { grade: "C", color: "text-purple-600" }
    if (score >= 50) return { grade: "D", color: "text-orange-600" }
    return { grade: "U", color: "text-red-600" }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={onClose}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center">
                <BarChart3 className="h-8 w-8 mr-3 text-blue-600" />
                Progress Tracker
              </h1>
              <p className="text-muted-foreground">Track your learning journey and achievements</p>
            </div>
          </div>
        </div>

        {/* Overall Stats */}
        <Card className="mb-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{overallProgress.completedTopics}</div>
                <div className="text-sm opacity-90">Topics Completed</div>
                <div className="text-xs opacity-75">of {overallProgress.totalTopics}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{overallProgress.earnedXP}</div>
                <div className="text-sm opacity-90">Total XP Earned</div>
                <div className="text-xs opacity-75">of {overallProgress.totalXP}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{overallProgress.averageScore}%</div>
                <div className="text-sm opacity-90">Average Score</div>
                <div className={`text-xs font-semibold ${getGradeFromScore(overallProgress.averageScore).color}`}>
                  Grade {getGradeFromScore(overallProgress.averageScore).grade}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{overallProgress.totalTimeSpent}h</div>
                <div className="text-sm opacity-90">Study Time</div>
                <div className="text-xs opacity-75">this month</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="subjects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="subjects">Subject Progress</TabsTrigger>
            <TabsTrigger value="trends">Learning Trends</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="subjects" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {subjectProgress.map((subject, index) => {
                const completionRate = (subject.completedTopics / subject.totalTopics) * 100
                const xpRate = (subject.earnedXP / subject.totalXP) * 100
                const grade = getGradeFromScore(subject.averageScore)

                return (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{subject.name}</CardTitle>
                        <Badge variant="outline" className={`${grade.color} font-bold`}>
                          {grade.grade}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Topics Completed</span>
                          <span>{subject.completedTopics}/{subject.totalTopics}</span>
                        </div>
                        <Progress value={completionRate} className="h-2" />
                      </div>

                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>XP Progress</span>
                          <span>{subject.earnedXP}/{subject.totalXP}</span>
                        </div>
                        <Progress value={xpRate} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Average Score</div>
                          <div className="font-semibold">{subject.averageScore}%</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Time Spent</div>
                          <div className="font-semibold">{subject.timeSpent}h</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2" />
                  Weekly Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyProgress.map((week, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="font-medium">{week.week}</div>
                      <div className="flex space-x-6 text-sm">
                        <div className="text-center">
                          <div className="font-semibold text-blue-600">{week.xp}</div>
                          <div className="text-muted-foreground">XP</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-green-600">{week.quizzes}</div>
                          <div className="text-muted-foreground">Quizzes</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-purple-600">{week.studyTime}h</div>
                          <div className="text-muted-foreground">Study</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2" />
                    Study Streak
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-2">7</div>
                    <div className="text-muted-foreground">Days in a row</div>
                    <div className="text-sm text-green-600 mt-2">🔥 Keep it up!</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    This Week's Goal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Complete 5 quizzes</span>
                        <span>3/5</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      2 more quizzes to reach your goal!
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "First Steps", description: "Complete your first quiz", icon: "🎯", earned: true, date: "2 days ago" },
                { title: "Speed Learner", description: "Complete 5 quizzes in one day", icon: "⚡", earned: true, date: "1 week ago" },
                { title: "Perfect Score", description: "Get 100% on any quiz", icon: "💯", earned: false },
                { title: "Study Streak", description: "Study for 7 days in a row", icon: "🔥", earned: true, date: "Today" },
                { title: "Subject Master", description: "Complete all topics in a subject", icon: "👑", earned: false },
                { title: "Night Owl", description: "Study after 10 PM", icon: "🦉", earned: true, date: "3 days ago" },
              ].map((achievement, index) => (
                <Card key={index} className={`${achievement.earned ? 'bg-yellow-50 border-yellow-200' : 'opacity-60'}`}>
                  <CardContent className="p-4 text-center">
                    <div className="text-4xl mb-2">{achievement.icon}</div>
                    <h3 className="font-semibold mb-1">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                    {achievement.earned ? (
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        Earned {achievement.date}
                      </Badge>
                    ) : (
                      <Badge variant="outline">Not earned yet</Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}