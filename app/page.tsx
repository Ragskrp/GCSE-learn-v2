"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import LoginForm from "@/components/login-form"
import { Crown, Coins, Star, Trophy, Sparkles, Camera, Plus, Zap, Heart, Gift, PartyPopper, Lightbulb, BookOpen, Users, LogOut, CircleHelp as HelpCircle, Calendar, ChartBar as BarChart3 } from "lucide-react"
import ExamInterface from "@/components/exam-interface"
  HelpCircle,
import AvatarCustomizer from "@/components/avatar-customizer"
import RewardsPanel from "@/components/rewards-panel"
import LearningPathway from "@/components/learning-pathway"
import Leaderboard from "@/components/leaderboard"
import HelpCenter from "@/components/help-center"
import StudyPlanner from "@/components/study-planner"
import ProgressTracker from "@/components/progress-tracker"
import HelpCenter from "@/components/help-center"
import type { User } from "@/types/user"
import { updateUserProgress, getAllUsers, getUserProgress } from "@/data/users"

export default function HomePage() {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null)
  const [examStarted, setExamStarted] = useState(false)
  const [showAvatarCustomizer, setShowAvatarCustomizer] = useState(false)
  const [showRewards, setShowRewards] = useState(false)
  const [showLearningPathway, setShowLearningPathway] = useState(false)
  const [showLeaderboard, setShowLeaderboard] = useState(false)
  const [showHelpCenter, setShowHelpCenter] = useState(false)
  const [showStudyPlanner, setShowStudyPlanner] = useState(false)
  const [showProgressTracker, setShowProgressTracker] = useState(false)
  const [partyMode, setPartyMode] = useState(false)

  useEffect(() => {
  const [showHelpCenter, setShowHelpCenter] = useState(false)
    // Check if a user is logged in from a previous session
    const loggedInUsername = localStorage.getItem("loggedInUser")
    if (loggedInUsername) {
      const user = getUserProgress(loggedInUsername)
      if (user) {
        setCurrentUser(user)
      }
    }
  }, [])

  useEffect(() => {
    if (partyMode) {
      const timer = setTimeout(() => setPartyMode(false), 10000)
      return () => clearTimeout(timer)
    }
  }, [partyMode])

  useEffect(() => {
    if (currentUser) {
      // Refresh user data from storage to get latest progress
      const updatedUsers = getAllUsers()
      const refreshedUser = updatedUsers.find((u) => u.username === currentUser.username)
      if (refreshedUser) {
        setCurrentUser(refreshedUser)
      }
    }
  }, []) // Removed currentUser from dependency array to avoid loops

  const handleLogin = (user: User) => {
    setCurrentUser(user)
    localStorage.setItem("loggedInUser", user.username)
  }

  const handleLogout = () => {
    setCurrentUser(null)
    localStorage.removeItem("loggedInUser")
    setSelectedSubject(null)
    setExamStarted(false)
    setShowAvatarCustomizer(false)
    setShowRewards(false)
    setShowLearningPathway(false)
    setShowLeaderboard(false)
    setShowHelpCenter(false)
    setShowStudyPlanner(false)
    setShowProgressTracker(false)
    setPartyMode(false)
  }

    setShowHelpCenter(false)
  if (!currentUser) {
    return <LoginForm onLogin={handleLogin} />
  }

  if (examStarted && selectedSubject) {
    const subject = currentUser.profile.subjects.find((s) => s.id === selectedSubject)
    return (
      <ExamInterface
        subject={subject!}
        onComplete={(earnedCoins: number, earnedXp: number) => {
          // Immutable update for subjects array
          const updatedSubjects = currentUser.profile.subjects.map((s) =>
            s.id === selectedSubject
              ? { ...s, xp: s.xp + earnedXp, coins: s.coins + earnedCoins }
              : s
          )

          const updatedProfile = {
            ...currentUser.profile,
            coins: currentUser.profile.coins + earnedCoins,
            xp: currentUser.profile.xp + earnedXp,
            totalQuestsCompleted: currentUser.profile.totalQuestsCompleted + 1,
            subjects: updatedSubjects,
          }

          if (updatedProfile.xp >= updatedProfile.maxXp) {
            updatedProfile.level += 1
            updatedProfile.xp = updatedProfile.xp - updatedProfile.maxXp
            updatedProfile.maxXp = Math.floor(updatedProfile.maxXp * 1.2)
          }

          const updatedUser = { ...currentUser, profile: updatedProfile }
          setCurrentUser(updatedUser)
          updateUserProgress(currentUser.username, updatedProfile)

          setExamStarted(false)
          setSelectedSubject(null)
          setPartyMode(true)
        }}
      />
    )
  }

  if (showAvatarCustomizer) {
    return (
      <AvatarCustomizer
        currentAvatar={currentUser.profile.avatarUrl}
        onSave={(newAvatar) => {
          const updatedProfile = { ...currentUser.profile, avatarUrl: newAvatar }
          setCurrentUser({ ...currentUser, profile: updatedProfile })
          updateUserProgress(currentUser.username, updatedProfile)
          setShowAvatarCustomizer(false)
        }}
        onClose={() => setShowAvatarCustomizer(false)}
      />
    )
  }

  if (showRewards) {
    return (
      <RewardsPanel
        coins={currentUser.profile.coins}
        level={currentUser.profile.level}
        xp={currentUser.profile.xp}
        maxXp={currentUser.profile.maxXp}
        onClose={() => setShowRewards(false)}
      />
    )
  }

  if (showLearningPathway) {
    return <LearningPathway user={currentUser} onClose={() => setShowLearningPathway(false)} />
  }

  if (showLeaderboard) {
    return <Leaderboard currentUser={currentUser} onClose={() => setShowLeaderboard(false)} />
  }

  if (showHelpCenter) {
    return <HelpCenter onClose={() => setShowHelpCenter(false)} />
  }

  if (showStudyPlanner) {
    return <StudyPlanner user={currentUser} onClose={() => setShowStudyPlanner(false)} />
  }

  if (showProgressTracker) {
    return <ProgressTracker user={currentUser} onClose={() => setShowProgressTracker(false)} />
  }
  if (showHelpCenter) {
    return <HelpCenter onClose={() => setShowHelpCenter(false)} />
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 ${partyMode ? "party-lights" : ""}`}
    >
      {partyMode && (
        <div className="fixed inset-0 pointer-events-none z-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              <Sparkles className="h-6 w-6 text-yellow-400" />
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Avatar className="h-16 w-16 border-4 border-primary">
                <AvatarImage src={currentUser.profile.avatarUrl || "/placeholder.svg"} />
                <AvatarFallback>👑</AvatarFallback>
              </Avatar>
              <Button
                size="sm"
                variant="secondary"
                className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
                onClick={() => setShowAvatarCustomizer(true)}
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                {currentUser.username} - Year {currentUser.yearGroup} Scholar
              </h2>
              <div className="flex items-center space-x-2">
                <Progress value={(currentUser.profile.xp / currentUser.profile.maxXp) * 100} className="w-32" />
                <span className="text-sm text-muted-foreground">
                  {currentUser.profile.xp}/{currentUser.profile.maxXp} XP
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => setShowProgressTracker(true)} className="relative">
              <BarChart3 className="h-4 w-4 mr-2" />
              Progress
            </Button>
            <Button variant="outline" onClick={() => setShowStudyPlanner(true)} className="relative">
              <Calendar className="h-4 w-4 mr-2" />
              Planner
            </Button>
            <Button variant="outline" onClick={() => setShowLeaderboard(true)} className="relative">
              <Users className="h-4 w-4 mr-2" />
              Leaderboard
            </Button>
            <Button variant="outline" onClick={() => setShowHelpCenter(true)} className="relative">
              <HelpCircle className="h-4 w-4 mr-2" />
              Help
            </Button>
            <Button variant="outline" onClick={() => setPartyMode(!partyMode)} className="relative">
              <PartyPopper className="h-4 w-4 mr-2" />
              Party Mode
            </Button>
            <Button variant="secondary" onClick={() => setShowRewards(true)} className="relative">
              <Coins className="h-5 w-5 mr-2 text-yellow-500" />
              {currentUser.profile.coins}
            </Button>
            <Button variant="outline" onClick={handleLogout} className="relative bg-transparent">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        <Card className="mb-8 bg-gradient-to-r from-primary to-secondary text-primary-foreground overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/sparkles-pattern.jpg')] opacity-10"></div>
          <CardContent className="pt-6 relative z-10">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Crown className="h-8 w-8 mr-3 text-yellow-300" />
                <h1 className="text-3xl font-bold">GCSE Quest Academy - Year {currentUser.yearGroup}</h1>
                <Crown className="h-8 w-8 ml-3 text-yellow-300" />
              </div>
              <p className="text-lg opacity-90 mb-4">
                "Every expert was once a beginner. Every pro was once an amateur. Every icon was once an unknown."
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center">
                  <Trophy className="h-4 w-4 mr-1" />
                  <span>{Array.isArray(currentUser.profile.subjects) ? currentUser.profile.subjects.length : 0} Subjects Available</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  <span>Level {currentUser.profile.level} Scholar</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-4 w-4 mr-1" />
                  <span>{currentUser.profile.coins} Coins Earned</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-foreground">Choose Your Quest</h2>
            <div className="flex space-x-2">
              <Button variant="secondary" size="sm" onClick={() => setShowLearningPathway(true)}>
                <BookOpen className="h-4 w-4 mr-2" />
                Learning Pathways
              </Button>
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Subject
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.isArray(currentUser.profile.subjects) && currentUser.profile.subjects.map((subject) => (
              <Card
                key={subject.id}
                className={`cursor-pointer transition-all hover:shadow-xl hover:scale-105 relative overflow-hidden ${
                  selectedSubject === subject.id ? "ring-4 ring-primary shadow-2xl" : ""
                } ${!subject.unlocked ? "opacity-60" : ""}`}
                onClick={() => subject.unlocked && setSelectedSubject(subject.id)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-10`}></div>

                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{subject.icon}</div>
                      <div>
                        <CardTitle className="text-lg">{subject.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{subject.conquestTitle}</p>
                      </div>
                    </div>
                    {!subject.unlocked && (
                      <div className="bg-gray-200 rounded-full p-2">
                        <Gift className="h-4 w-4 text-gray-500" />
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        Level {subject.level}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Coins className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-medium">{subject.coins}</span>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span>Progress</span>
                        <span>
                          {subject.xp}/{subject.maxXp} XP
                        </span>
                      </div>
                      <Progress value={(subject.xp / subject.maxXp) * 100} className="h-2" />
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>⏱️ {subject.duration} min</span>
                      <span>❓ {subject.questions} questions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {selectedSubject && (
          <div className="text-center mb-8">
            <Card className="inline-block bg-gradient-to-r from-primary to-secondary text-primary-foreground">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 mr-2" />
                    Ready for Battle?
                    <Sparkles className="h-5 w-5 ml-2" />
                  </h3>
                  <p className="text-sm opacity-90 mb-4">
                    Conquer {currentUser.profile.subjects.find((s) => s.id === selectedSubject)?.name} and earn epic
                    rewards!
                  </p>
                </div>
                <Button
                  onClick={() => setExamStarted(true)}
                  size="lg"
                  variant="secondary"
                  className="w-full text-lg font-bold bounce-in"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Start Quest
                  <Trophy className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="flex items-center text-orange-800">
              <Lightbulb className="h-5 w-5 mr-2" />
              Quest Master Tips
            </CardTitle>
            <CardDescription className="text-orange-600">
              Level up your exam skills and earn more rewards!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-orange-800 flex items-center">
                  <Star className="h-4 w-4 mr-2" />
                  Before Your Quest:
                </h4>
                <ul className="text-sm text-orange-700 space-y-2">
                  <li className="flex items-center">
                    <Heart className="h-3 w-3 mr-2 text-pink-500" />
                    Find your power-up zone (quiet space)
                  </li>
                  <li className="flex items-center">
                    <Heart className="h-3 w-3 mr-2 text-pink-500" />
                    Gather your battle tools (pen & paper)
                  </li>
                  <li className="flex items-center">
                    <Heart className="h-3 w-3 mr-2 text-pink-500" />
                    Check your connection strength
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-orange-800 flex items-center">
                  <Trophy className="h-4 w-4 mr-2" />
                  During Battle:
                </h4>
                <ul className="text-sm text-orange-700 space-y-2">
                  <li className="flex items-center">
                    <Heart className="h-3 w-3 mr-2 text-pink-500" />
                    Read each challenge carefully
                  </li>
                  <li className="flex items-center">
                    <Heart className="h-3 w-3 mr-2 text-pink-500" />
                    Master time like a true warrior
                  </li>
                  <li className="flex items-center">
                    <Heart className="h-3 w-3 mr-2 text-pink-500" />
                    Keep moving to maximize XP
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
