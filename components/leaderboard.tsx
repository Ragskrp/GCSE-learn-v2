"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Trophy, Crown, Star, Zap, Target, Medal, Award, Sparkles } from "lucide-react"
import type { User } from "@/types/user"
import { getAllUsers } from "@/data/users"

interface LeaderboardProps {
  currentUser: User
  onClose: () => void
}

interface LeaderboardEntry {
  user: User
  totalXP: number
  totalCoins: number
  totalQuestsCompleted: number
  averageScore: number
  rank: number
}

export default function Leaderboard({ currentUser, onClose }: LeaderboardProps) {
  const [selectedCategory, setSelectedCategory] = useState<"overall" | "year7" | "year10">("overall")
  const [selectedMetric, setSelectedMetric] = useState<"xp" | "coins" | "quests">("xp")

  // Calculate leaderboard data
  const calculateLeaderboard = (): LeaderboardEntry[] => {
    let filteredUsers = getAllUsers()

    // Filter by year group if needed
    if (selectedCategory === "year7") {
      filteredUsers = filteredUsers.filter((user) => user.yearGroup === 7)
    } else if (selectedCategory === "year10") {
      filteredUsers = filteredUsers.filter((user) => user.yearGroup === 10)
    }

    // Calculate stats for each user
    const entries: LeaderboardEntry[] = filteredUsers.map((user) => {
      const totalXP = user.profile.subjects.reduce((sum, subject) => sum + subject.xp, 0) + user.profile.xp
      const totalCoins = user.profile.subjects.reduce((sum, subject) => sum + subject.coins, 0) + user.profile.coins
      const totalQuestsCompleted = user.profile.totalQuestsCompleted
      const completedTopics = user.profile.subjects.reduce(
        (sum, subject) => sum + subject.topics.filter((topic) => topic.completed).length,
        0,
      )
      const totalTopics = user.profile.subjects.reduce((sum, subject) => sum + subject.topics.length, 0)
      const averageScore = totalTopics > 0 ? (completedTopics / totalTopics) * 100 : 0

      return {
        user,
        totalXP,
        totalCoins,
        totalQuestsCompleted,
        averageScore,
        rank: 0, // Will be set after sorting
      }
    })

    // Sort by selected metric
    entries.sort((a, b) => {
      switch (selectedMetric) {
        case "xp":
          return b.totalXP - a.totalXP
        case "coins":
          return b.totalCoins - a.totalCoins
        case "quests":
          return b.totalQuestsCompleted - a.totalQuestsCompleted
        default:
          return b.totalXP - a.totalXP
      }
    })

    // Assign ranks
    entries.forEach((entry, index) => {
      entry.rank = index + 1
    })

    return entries
  }

  const leaderboardData = calculateLeaderboard()
  const currentUserEntry = leaderboardData.find((entry) => entry.user.username === currentUser.username)

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-6 w-6 text-yellow-500" />
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />
      case 3:
        return <Award className="h-6 w-6 text-amber-600" />
      default:
        return (
          <div className="h-6 w-6 flex items-center justify-center text-sm font-bold text-muted-foreground">
            #{rank}
          </div>
        )
    }
  }

  const getRankBadge = (rank: number) => {
    if (rank === 1) return "Champion"
    if (rank <= 3) return "Elite"
    if (rank <= 5) return "Advanced"
    if (rank <= 10) return "Skilled"
    return "Scholar"
  }

  const getMetricValue = (entry: LeaderboardEntry) => {
    switch (selectedMetric) {
      case "xp":
        return `${entry.totalXP} XP`
      case "coins":
        return `${entry.totalCoins} coins`
      case "quests":
        return `${entry.totalQuestsCompleted} quests`
      default:
        return `${entry.totalXP} XP`
    }
  }

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
                <Trophy className="h-8 w-8 mr-3 text-yellow-500" />
                Leaderboard
                <Sparkles className="h-6 w-6 ml-2 text-purple-500" />
              </h1>
              <p className="text-muted-foreground">See how you rank against other scholars!</p>
            </div>
          </div>
        </div>

        {/* Current User Stats */}
        {currentUserEntry && (
          <Card className="mb-6 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Avatar className="h-16 w-16 border-4 border-white">
                      <AvatarImage src={currentUser.profile.avatarUrl || "/placeholder.svg"} />
                      <AvatarFallback>👑</AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-2 -right-2 bg-white rounded-full p-1">
                      {getRankIcon(currentUserEntry.rank)}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{currentUser.username}</h2>
                    <p className="text-lg opacity-90">
                      Rank #{currentUserEntry.rank} • {getRankBadge(currentUserEntry.rank)}
                    </p>
                    <p className="text-sm opacity-75">Year {currentUser.yearGroup} Scholar</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">{getMetricValue(currentUserEntry)}</div>
                  <div className="text-sm opacity-75">
                    {Math.round(currentUserEntry.averageScore)}% topics completed
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Category</CardTitle>
                <CardDescription>Choose which students to compare with</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={selectedCategory === "overall" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory("overall")}
                >
                  <Trophy className="h-4 w-4 mr-2" />
                  All Students
                </Button>
                <Button
                  variant={selectedCategory === "year7" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory("year7")}
                >
                  <Star className="h-4 w-4 mr-2" />
                  Year 7 Only
                </Button>
                <Button
                  variant={selectedCategory === "year10" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory("year10")}
                >
                  <Crown className="h-4 w-4 mr-2" />
                  Year 10 Only
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Ranking By</CardTitle>
                <CardDescription>Choose what to rank students by</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant={selectedMetric === "xp" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setSelectedMetric("xp")}
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Total XP
                </Button>
                <Button
                  variant={selectedMetric === "coins" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setSelectedMetric("coins")}
                >
                  <Trophy className="h-4 w-4 mr-2" />
                  Total Coins
                </Button>
                <Button
                  variant={selectedMetric === "quests" ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => setSelectedMetric("quests")}
                >
                  <Target className="h-4 w-4 mr-2" />
                  Quests Completed
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Leaderboard */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  {selectedCategory === "overall"
                    ? "All Students"
                    : selectedCategory === "year7"
                      ? "Year 7 Students"
                      : "Year 10 Students"}{" "}
                  - Ranked by{" "}
                  {selectedMetric === "xp" ? "XP" : selectedMetric === "coins" ? "Coins" : "Quests Completed"}
                </CardTitle>
                <CardDescription>{leaderboardData.length} students competing • Updated in real-time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboardData.map((entry, index) => {
                    const isCurrentUser = entry.user.username === currentUser.username
                    return (
                      <Card
                        key={entry.user.username}
                        className={`transition-all ${
                          isCurrentUser ? "ring-2 ring-primary bg-primary/5" : ""
                        } ${entry.rank <= 3 ? "border-yellow-200 bg-yellow-50/50" : ""}`}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center justify-center w-12 h-12">
                                {getRankIcon(entry.rank)}
                              </div>
                              <Avatar className="h-12 w-12">
                                <AvatarImage src={entry.user.profile.avatarUrl || "/placeholder.svg"} />
                                <AvatarFallback>{entry.user.username.charAt(0).toUpperCase()}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex items-center space-x-2">
                                  <h3 className="font-semibold text-lg">
                                    {entry.user.username}
                                    {isCurrentUser && <span className="text-primary ml-2">(You)</span>}
                                  </h3>
                                  <Badge variant={entry.rank <= 3 ? "default" : "secondary"}>
                                    {getRankBadge(entry.rank)}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  Year {entry.user.yearGroup} • Level {entry.user.profile.level} •{" "}
                                  {Math.round(entry.averageScore)}% completed
                                </p>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-primary">{getMetricValue(entry)}</div>
                              <div className="text-sm text-muted-foreground">
                                {entry.totalQuestsCompleted} quests • {entry.totalCoins} coins
                              </div>
                              <Progress value={entry.averageScore} className="w-24 h-2 mt-1" />
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
        </div>

        {/* Achievement Badges */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Award className="h-5 w-5 mr-2" />
              Achievement Levels
            </CardTitle>
            <CardDescription>Unlock special titles as you climb the ranks!</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center p-4 rounded-lg bg-yellow-50 border border-yellow-200">
                <Crown className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                <div className="font-semibold text-yellow-700">Champion</div>
                <div className="text-xs text-yellow-600">Rank #1</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-50 border border-gray-200">
                <Medal className="h-8 w-8 mx-auto mb-2 text-gray-500" />
                <div className="font-semibold text-gray-700">Elite</div>
                <div className="text-xs text-gray-600">Rank #2-3</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-blue-50 border border-blue-200">
                <Star className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <div className="font-semibold text-blue-700">Advanced</div>
                <div className="text-xs text-blue-600">Rank #4-5</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-green-50 border border-green-200">
                <Target className="h-8 w-8 mx-auto mb-2 text-green-500" />
                <div className="font-semibold text-green-700">Skilled</div>
                <div className="text-xs text-green-600">Rank #6-10</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-purple-50 border border-purple-200">
                <Sparkles className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                <div className="font-semibold text-purple-700">Scholar</div>
                <div className="text-xs text-purple-600">All Others</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
