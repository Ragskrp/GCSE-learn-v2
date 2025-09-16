"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { QuizInterface } from "@/components/quiz-interface"
import ExamInterface from "@/components/exam-interface"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, CheckCircle, Star, Trophy, ArrowLeft, Target, Zap, Crown, Sparkles } from "lucide-react"
import type { User } from "@/types/user"

interface LearningPathwayProps {
  user: User
  onClose: () => void
}

export default function LearningPathway({ user, onClose }: LearningPathwayProps) {
  const [selectedSubject, setSelectedSubject] = useState<string>(user.profile.subjects[0]?.id || "maths")
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)
  const [showStudyMaterial, setShowStudyMaterial] = useState(false)
  const [showQuiz, setShowQuiz] = useState(false)
  const [showTest, setShowTest] = useState(false)
  const [activeMaterial, setActiveMaterial] = useState<null | { title: string; content: string; type: string }>(null)
  const [activeQuiz, setActiveQuiz] = useState<any>(null)
  const [activeTest, setActiveTest] = useState<any>(null)

  const currentSubject = user.profile.subjects.find((s) => s.id === selectedSubject)

  if (!currentSubject) {
    return <div>Subject not found</div>
  }

  const completedTopics = currentSubject.topics.filter((t) => t.completed).length
  const totalTopics = currentSubject.topics.length
  const progressPercentage = totalTopics > 0 ? (completedTopics / totalTopics) * 100 : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={onClose}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Quests
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground flex items-center">
                <Crown className="h-8 w-8 mr-3 text-yellow-500" />
                Learning Pathways - Year {user.yearGroup}
                <Sparkles className="h-6 w-6 ml-2 text-purple-500" />
              </h1>
              <p className="text-muted-foreground">
                Master your {user.yearGroup === 7 ? "Key Stage 3" : "GCSE"} subjects step by step
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Subject Selection Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Choose Subject</CardTitle>
                <CardDescription>Select a subject to view your learning pathway</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {user.profile.subjects.map((subject) => {
                  const completed = subject.topics.filter((t) => t.completed).length
                  const total = subject.topics.length
                  return (
                    <Button
                      key={subject.id}
                      variant={selectedSubject === subject.id ? "default" : "outline"}
                      className="w-full justify-start h-auto p-4"
                      onClick={() => setSelectedSubject(subject.id)}
                    >
                      <div className="flex items-center space-x-3 w-full">
                        <div className="text-2xl">{subject.icon}</div>
                        <div className="flex-1 text-left">
                          <div className="font-medium">{subject.name}</div>
                          <div className="text-xs opacity-70">
                            {completed}/{total} topics completed
                          </div>
                          <Progress value={total > 0 ? (completed / total) * 100 : 0} className="h-1 mt-1" />
                        </div>
                      </div>
                    </Button>
                  )
                })}
              </CardContent>
            </Card>
          </div>

          {/* Main Pathway View */}
          <div className="lg:col-span-3">
            <Card className="mb-6">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${currentSubject.color} text-white`}>
                      <div className="text-2xl">{currentSubject.icon}</div>
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{currentSubject.name}</CardTitle>
                      <CardDescription>
                        {completedTopics} of {totalTopics} topics mastered • {currentSubject.conquestTitle}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    <Trophy className="h-4 w-4 mr-2" />
                    {Math.round(progressPercentage)}% Complete
                  </Badge>
                </div>
                <Progress value={progressPercentage} className="h-3 mt-4" />
              </CardHeader>
            </Card>

            {/* Skill Tree Visualization */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Learning Pathway
                </CardTitle>
                <CardDescription>Complete topics in order to unlock new challenges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {currentSubject.topics.map((topic, index) => {
                    const isLast = index === currentSubject.topics.length - 1
                    const nodeClass = topic.completed ? "completed-node" : "current-node" // All topics are unlocked for now

                    return (
                      <div key={topic.id} className="relative">
                        <div className="flex items-center space-x-4">
                          {/* Topic Node */}
                          <div
                            className={`
                              flex items-center justify-center w-16 h-16 rounded-full border-4 border-white shadow-lg cursor-pointer transition-all hover:scale-105 ${nodeClass}
                              ${selectedTopic === topic.id ? "ring-4 ring-primary ring-offset-2" : ""}
                            `}
                            onClick={() => setSelectedTopic(selectedTopic === topic.id ? null : topic.id)}
                          >
                            {topic.completed ? <CheckCircle className="h-8 w-8" /> : <BookOpen className="h-8 w-8" />}
                          </div>

                          {/* Topic Info */}
                          <div className="flex-1">
                            <Card
                              className={`transition-all ${selectedTopic === topic.id ? "ring-2 ring-primary" : ""}`}
                            >
                              <CardContent className="p-4">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h3 className="font-semibold text-lg">{topic.name}</h3>
                                    <p className="text-sm text-muted-foreground">
                                      {topic.studyMaterials.length} study materials • {topic.quizzes.length} quizzes •{" "}
                                      {topic.tests.length} tests
                                    </p>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    {topic.completed && (
                                      <Badge variant="default" className="bg-green-500">
                                        <Star className="h-3 w-3 mr-1" />
                                        Mastered
                                      </Badge>
                                    )}
                                    {!topic.completed && (
                                      <Badge variant="secondary">
                                        <Zap className="h-3 w-3 mr-1" />
                                        Available
                                      </Badge>
                                    )}
                                  </div>
                                </div>

                                {selectedTopic === topic.id && (
                                  <div className="mt-4 pt-4 border-t">
                                    <div className="space-y-4">
                                      {/* Study Materials */}
                                      {topic.studyMaterials.length > 0 && (
                                        <div>
                                          <h4 className="font-medium mb-2 flex items-center">
                                            <BookOpen className="h-4 w-4 mr-2" />
                                            Study Materials
                                          </h4>
                                          <div className="grid grid-cols-1 gap-2">
                                            {topic.studyMaterials.map((material) => (
                                              <Card key={material.id} className="p-3">
                                                <div className="flex items-center justify-between">
                                                  <div>
                                                    <h5 className="font-medium text-sm">{material.title}</h5>
                                                    <p className="text-xs text-muted-foreground">
                                                      {material.content.substring(0, 100)}...
                                                    </p>
                                                  </div>
                                                  <Badge variant="outline" className="text-xs">
                                                    {material.type}
                                                  </Badge>
                                                </div>
                                              </Card>
                                            ))}
                                          </div>
                                        </div>
                                      )}

                                      {/* Action Buttons */}
                                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          onClick={() => {
                                            if (topic.studyMaterials.length > 0) {
                                              setActiveMaterial(topic.studyMaterials[0]);
                                              setShowStudyMaterial(true);
                                            }
                                          }}
                                        >
                                          <BookOpen className="h-4 w-4 mr-2" />
                                          Study Materials ({topic.studyMaterials.length})
                                        </Button>
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          onClick={() => {
                                            if (topic.quizzes.length > 0) {
                                              setActiveQuiz(topic.quizzes[0]);
                                              setShowQuiz(true);
                                            }
                                          }}
                                        >
                                          <Target className="h-4 w-4 mr-2" />
                                          Practice Quiz ({topic.quizzes.length})
                                        </Button>
                                        <Button
                                          variant="default"
                                          size="sm"
                                          onClick={() => {
                                            if (topic.tests.length > 0) {
                                              setActiveTest(topic.tests[0]);
                                              setShowTest(true);
                                            }
                                          }}
                                        >
                                          <Trophy className="h-4 w-4 mr-2" />
                                          Take Test ({topic.tests.length})
                                        </Button>
      {/* Study Material Modal */}
      <Dialog open={showStudyMaterial} onOpenChange={setShowStudyMaterial}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{activeMaterial?.title}</DialogTitle>
            <DialogDescription>Type: {activeMaterial?.type}</DialogDescription>
          </DialogHeader>
          <div className="mt-4 whitespace-pre-line">{activeMaterial?.content}</div>
        </DialogContent>
      </Dialog>

      {/* Quiz Modal */}
      <Dialog open={showQuiz} onOpenChange={setShowQuiz}>
        <DialogContent className="max-w-2xl">
          {activeQuiz && (
            <QuizInterface quiz={activeQuiz} onComplete={() => setShowQuiz(false)} />
          )}
        </DialogContent>
      </Dialog>

      {/* Test Modal */}
      <Dialog open={showTest} onOpenChange={setShowTest}>
        <DialogContent className="max-w-2xl">
          {activeTest && (
            <ExamInterface subject={{ ...currentSubject, tests: [activeTest] }} onComplete={() => setShowTest(false)} />
          )}
        </DialogContent>
      </Dialog>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        {/* Connection Line */}
                        {!isLast && (
                          <div className="flex justify-center my-4">
                            <div className="skill-tree-line w-1 h-8"></div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
