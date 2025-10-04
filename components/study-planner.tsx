"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, Clock, Target, BookOpen, CheckCircle, AlertCircle, ArrowLeft } from "lucide-react"
import type { User } from "@/types/user"

interface StudyPlannerProps {
  user: User
  onClose: () => void
}

interface StudySession {
  id: string
  subject: string
  topic: string
  type: "study" | "quiz" | "test"
  duration: number
  completed: boolean
  scheduledDate: string
  priority: "high" | "medium" | "low"
}

export default function StudyPlanner({ user, onClose }: StudyPlannerProps) {
  const [studySessions, setStudySessions] = useState<StudySession[]>([])
  const [selectedWeek, setSelectedWeek] = useState(0)

  useEffect(() => {
    generateStudyPlan()
  }, [user])

  const generateStudyPlan = () => {
    const sessions: StudySession[] = []
    const today = new Date()
    
    user.profile.subjects.forEach((subject, subjectIndex) => {
      subject.topics.forEach((topic, topicIndex) => {
        if (!topic.completed) {
          // Add study sessions
          topic.studyMaterials.forEach((material, materialIndex) => {
            const sessionDate = new Date(today)
            sessionDate.setDate(today.getDate() + (subjectIndex * 7) + (topicIndex * 2) + materialIndex)
            
            sessions.push({
              id: `study-${subject.id}-${topic.id}-${material.id}`,
              subject: subject.name,
              topic: topic.name,
              type: "study",
              duration: 30, // Default duration
              completed: false,
              scheduledDate: sessionDate.toISOString().split('T')[0],
              priority: topicIndex === 0 ? "high" : topicIndex === 1 ? "medium" : "low"
            })
          })

          // Add quiz sessions
          topic.quizzes.forEach((quiz, quizIndex) => {
            const sessionDate = new Date(today)
            sessionDate.setDate(today.getDate() + (subjectIndex * 7) + (topicIndex * 2) + quizIndex + 1)
            
            sessions.push({
              id: `quiz-${subject.id}-${topic.id}-${quiz.id}`,
              subject: subject.name,
              topic: topic.name,
              type: "quiz",
              duration: quiz.timeLimit || 20,
              completed: false,
              scheduledDate: sessionDate.toISOString().split('T')[0],
              priority: "medium"
            })
          })
        }
      })
    })

    setStudySessions(sessions.slice(0, 20)) // Limit to 20 sessions
  }

  const getWeekSessions = (weekOffset: number) => {
    const startDate = new Date()
    startDate.setDate(startDate.getDate() + (weekOffset * 7))
    const endDate = new Date(startDate)
    endDate.setDate(startDate.getDate() + 6)

    return studySessions.filter(session => {
      const sessionDate = new Date(session.scheduledDate)
      return sessionDate >= startDate && sessionDate <= endDate
    })
  }

  const toggleSessionComplete = (sessionId: string) => {
    setStudySessions(prev => 
      prev.map(session => 
        session.id === sessionId 
          ? { ...session, completed: !session.completed }
          : session
      )
    )
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-100 text-red-800 border-red-200"
      case "medium": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low": return "bg-green-100 text-green-800 border-green-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "study": return <BookOpen className="h-4 w-4" />
      case "quiz": return <Target className="h-4 w-4" />
      case "test": return <AlertCircle className="h-4 w-4" />
      default: return <BookOpen className="h-4 w-4" />
    }
  }

  const weekSessions = getWeekSessions(selectedWeek)
  const completedSessions = studySessions.filter(s => s.completed).length
  const totalSessions = studySessions.length
  const progressPercentage = totalSessions > 0 ? (completedSessions / totalSessions) * 100 : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
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
                <Calendar className="h-8 w-8 mr-3 text-indigo-600" />
                Study Planner
              </h1>
              <p className="text-muted-foreground">Personalized study schedule for {user.username}</p>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{completedSessions}</div>
                <div className="text-sm opacity-90">Sessions Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{totalSessions - completedSessions}</div>
                <div className="text-sm opacity-90">Sessions Remaining</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">{Math.round(progressPercentage)}%</div>
                <div className="text-sm opacity-90">Overall Progress</div>
              </div>
            </div>
            <Progress value={progressPercentage} className="mt-4 bg-white/20" />
          </CardContent>
        </Card>

        {/* Week Navigation */}
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Weekly Schedule</CardTitle>
              <div className="flex space-x-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedWeek(Math.max(0, selectedWeek - 1))}
                  disabled={selectedWeek === 0}
                >
                  Previous Week
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setSelectedWeek(selectedWeek + 1)}
                >
                  Next Week
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                Week {selectedWeek + 1} ({weekSessions.length} sessions)
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Study Sessions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {weekSessions.map((session) => (
            <Card 
              key={session.id} 
              className={`transition-all hover:shadow-lg ${
                session.completed ? 'bg-green-50 border-green-200' : ''
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(session.type)}
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getPriorityColor(session.priority)}`}
                    >
                      {session.priority}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleSessionComplete(session.id)}
                    className={session.completed ? 'text-green-600' : 'text-gray-400'}
                  >
                    <CheckCircle className="h-5 w-5" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{session.subject}</h3>
                  <p className="text-sm text-muted-foreground">{session.topic}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{session.duration} min</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(session.scheduledDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <Badge 
                    variant={session.type === 'study' ? 'secondary' : session.type === 'quiz' ? 'default' : 'destructive'}
                    className="text-xs"
                  >
                    {session.type.charAt(0).toUpperCase() + session.type.slice(1)}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {weekSessions.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Calendar className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No sessions this week</h3>
              <p className="text-muted-foreground">
                {selectedWeek === 0 
                  ? "Great job! You're all caught up for this week." 
                  : "No sessions scheduled for this week yet."}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Study Tips */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2" />
              Study Tips for Success
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Effective Study Techniques:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Use active recall - test yourself regularly</li>
                  <li>• Take breaks every 25-30 minutes</li>
                  <li>• Create mind maps for complex topics</li>
                  <li>• Practice past papers and questions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Time Management:</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Prioritize high-priority topics first</li>
                  <li>• Set specific goals for each session</li>
                  <li>• Review previous topics regularly</li>
                  <li>• Don't cram - spread learning over time</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}