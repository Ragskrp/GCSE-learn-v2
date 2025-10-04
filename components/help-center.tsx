"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Search, CircleHelp as HelpCircle, BookOpen, MessageCircle, Video, FileText, Lightbulb, Users, Mail } from "lucide-react"

interface HelpCenterProps {
  onClose: () => void
}

const faqData = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I start my first quiz?",
        answer: "Select a subject from your dashboard, choose a topic, then click 'Start Quest' to begin your first quiz. Make sure you have a quiet space and good internet connection."
      },
      {
        question: "What are coins and XP used for?",
        answer: "Coins can be spent in the Rewards Shop for power-ups and customizations. XP helps you level up and unlock new features. Both are earned by completing quizzes and tests."
      },
      {
        question: "How do I unlock new subjects?",
        answer: "New subjects unlock automatically as you progress through your current ones. Complete topics and maintain good scores to unlock advanced subjects."
      }
    ]
  },
  {
    category: "Studying & Exams",
    questions: [
      {
        question: "How long should I study each day?",
        answer: "We recommend 30-60 minutes per day, broken into 25-minute focused sessions with 5-minute breaks. Quality is more important than quantity."
      },
      {
        question: "What happens if I fail a quiz?",
        answer: "Don't worry! You can retake quizzes after reviewing the study materials. Each attempt helps you learn and improve your understanding."
      },
      {
        question: "How are my grades calculated?",
        answer: "Grades are based on your quiz and test scores: A* (90%+), A (80-89%), B (70-79%), C (60-69%), D (50-59%), U (below 50%)."
      }
    ]
  },
  {
    category: "Technical Issues",
    questions: [
      {
        question: "My progress isn't saving. What should I do?",
        answer: "Make sure you have a stable internet connection and don't close the browser during quizzes. Your progress is automatically saved after each question."
      },
      {
        question: "The timer isn't working correctly.",
        answer: "Refresh the page and restart the quiz. If the problem persists, contact support with details about your browser and device."
      },
      {
        question: "I can't access my account.",
        answer: "Check your username and password are correct. If you're still having trouble, contact your teacher or school administrator for help."
      }
    ]
  }
]

const studyTips = [
  {
    title: "Active Recall",
    description: "Test yourself regularly instead of just re-reading notes",
    icon: "🧠"
  },
  {
    title: "Spaced Repetition",
    description: "Review topics at increasing intervals to improve retention",
    icon: "📅"
  },
  {
    title: "Pomodoro Technique",
    description: "Study for 25 minutes, then take a 5-minute break",
    icon: "⏰"
  },
  {
    title: "Practice Tests",
    description: "Take practice exams under timed conditions",
    icon: "📝"
  },
  {
    title: "Study Groups",
    description: "Collaborate with classmates to discuss difficult topics",
    icon: "👥"
  },
  {
    title: "Mind Maps",
    description: "Create visual representations of complex topics",
    icon: "🗺️"
  }
]

const videoTutorials = [
  {
    title: "Getting Started with GCSE Quest",
    duration: "3:45",
    description: "Learn the basics of navigating the platform and starting your first quiz"
  },
  {
    title: "Effective Study Techniques",
    duration: "7:22",
    description: "Discover proven methods to improve your learning and retention"
  },
  {
    title: "Using the Study Planner",
    duration: "4:18",
    description: "Organize your study schedule for maximum effectiveness"
  },
  {
    title: "Understanding Your Progress",
    duration: "5:33",
    description: "Learn how to track your improvement and identify areas for focus"
  }
]

export default function HelpCenter({ onClose }: HelpCenterProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredFAQs = faqData.filter(category => 
    selectedCategory === "all" || category.category.toLowerCase().includes(selectedCategory.toLowerCase())
  ).map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
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
                <HelpCircle className="h-8 w-8 mr-3 text-blue-600" />
                Help Center
              </h1>
              <p className="text-muted-foreground">Get help and learn how to make the most of GCSE Quest</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-8 w-8 mx-auto mb-3 text-blue-600" />
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground">Get instant help from our support team</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Mail className="h-8 w-8 mx-auto mb-3 text-green-600" />
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-sm text-muted-foreground">Send us a detailed message</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Video className="h-8 w-8 mx-auto mb-3 text-purple-600" />
              <h3 className="font-semibold mb-2">Video Tutorials</h3>
              <p className="text-sm text-muted-foreground">Watch step-by-step guides</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-orange-600" />
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-sm text-muted-foreground">Connect with other students</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="faq" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="faq">FAQ</TabsTrigger>
            <TabsTrigger value="guides">Study Guides</TabsTrigger>
            <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
            <TabsTrigger value="tips">Study Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="faq" className="space-y-6">
            {/* Search and Filter */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search frequently asked questions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant={selectedCategory === "all" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory("all")}
                    >
                      All
                    </Button>
                    {faqData.map((category) => (
                      <Button
                        key={category.category}
                        variant={selectedCategory === category.category ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category.category)}
                      >
                        {category.category}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Results */}
            <div className="space-y-6">
              {filteredFAQs.map((category, categoryIndex) => (
                <Card key={categoryIndex}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border-l-4 border-blue-200 pl-4">
                        <h4 className="font-semibold mb-2">{faq.question}</h4>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredFAQs.length === 0 && (
              <Card>
                <CardContent className="text-center py-12">
                  <Search className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No results found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or browse all categories
                  </p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="guides" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    GCSE Mathematics Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Complete guide covering all GCSE Mathematics topics from Number to Statistics.
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">45 pages</Badge>
                    <Button size="sm">Download PDF</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Combined Science Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive guide covering Biology, Chemistry, and Physics topics.
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">67 pages</Badge>
                    <Button size="sm">Download PDF</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    English Language Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Master reading comprehension, creative writing, and language analysis.
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">38 pages</Badge>
                    <Button size="sm">Download PDF</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Exam Techniques Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Learn effective exam strategies, time management, and stress reduction techniques.
                  </p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">22 pages</Badge>
                    <Button size="sm">Download PDF</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videoTutorials.map((video, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-100 p-3 rounded-lg">
                        <Video className="h-6 w-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{video.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{video.description}</p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{video.duration}</Badge>
                          <Button size="sm">Watch Now</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tips" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {studyTips.map((tip, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{tip.icon}</div>
                    <h3 className="font-semibold mb-2">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground">{tip.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  Additional Study Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Online Resources:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• BBC Bitesize - Free GCSE revision materials</li>
                      <li>• Khan Academy - Video lessons and practice</li>
                      <li>• Seneca Learning - Interactive courses</li>
                      <li>• Physics & Maths Tutor - Past papers and notes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Study Apps:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Anki - Spaced repetition flashcards</li>
                      <li>• Forest - Focus and productivity timer</li>
                      <li>• Quizlet - Digital flashcards and games</li>
                      <li>• Notion - Note-taking and organization</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}