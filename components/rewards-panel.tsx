"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Trophy, Star, Crown, Gift, Zap, Heart, Sparkles } from "lucide-react"

const achievements = [
  {
    id: 1,
    name: "First Steps",
    description: "Complete your first exam",
    icon: "🎯",
    unlocked: true,
    date: "2024-01-15",
  },
  {
    id: 2,
    name: "Math Wizard",
    description: "Score 90% in Mathematics",
    icon: "🧙‍♀️",
    unlocked: true,
    date: "2024-01-20",
  },
  {
    id: 3,
    name: "Speed Demon",
    description: "Complete exam in under 30 minutes",
    icon: "⚡",
    unlocked: true,
    date: "2024-01-22",
  },
  { id: 4, name: "Perfect Score", description: "Get 100% on any exam", icon: "💯", unlocked: false },
  { id: 5, name: "Study Streak", description: "Complete exams 7 days in a row", icon: "🔥", unlocked: false },
  { id: 6, name: "Subject Master", description: "Unlock all subjects", icon: "👑", unlocked: false },
]

const rewards = [
  { id: 1, name: "Extra Time Boost", description: "+10 minutes for next exam", cost: 100, icon: "⏰" },
  { id: 2, name: "Hint Power-Up", description: "Get 3 hints during exam", cost: 150, icon: "💡" },
  { id: 3, name: "Double XP", description: "2x XP for next exam", cost: 200, icon: "⭐" },
  { id: 4, name: "Lucky Charm", description: "Higher chance of easy questions", cost: 250, icon: "🍀" },
  { id: 5, name: "Rainbow Theme", description: "Unlock rainbow interface", cost: 300, icon: "🌈" },
  { id: 6, name: "VIP Status", description: "Special avatar border", cost: 500, icon: "👑" },
]

interface RewardsPanelProps {
  coins: number
  level: number
  xp: number
  maxXp: number
  onClose: () => void
}

export default function RewardsPanel({ coins, level, xp, maxXp, onClose }: RewardsPanelProps) {
  const [activeTab, setActiveTab] = useState<"achievements" | "shop">("achievements")

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          <Button variant="outline" onClick={onClose}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Quests
          </Button>
          <h1 className="text-3xl font-bold text-center flex items-center">
            <Trophy className="h-8 w-8 mr-3 text-yellow-500" />
            Rewards Center
            <Trophy className="h-8 w-8 ml-3 text-yellow-500" />
          </h1>
          <div></div>
        </div>

        {/* Player Stats */}
        <Card className="mb-8 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Crown className="h-6 w-6 mr-2 text-yellow-300" />
                  <span className="text-2xl font-bold">Level {level}</span>
                </div>
                <Progress value={(xp / maxXp) * 100} className="w-full bg-white/20" />
                <p className="text-sm mt-1 opacity-90">
                  {xp}/{maxXp} XP
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Sparkles className="h-6 w-6 mr-2 text-yellow-300" />
                  <span className="text-2xl font-bold">{coins}</span>
                </div>
                <p className="text-sm opacity-90">Coins Earned</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Star className="h-6 w-6 mr-2 text-yellow-300" />
                  <span className="text-2xl font-bold">{achievements.filter((a) => a.unlocked).length}</span>
                </div>
                <p className="text-sm opacity-90">Achievements</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-lg">
            <Button
              variant={activeTab === "achievements" ? "default" : "ghost"}
              onClick={() => setActiveTab("achievements")}
              className="mr-1"
            >
              <Trophy className="h-4 w-4 mr-2" />
              Achievements
            </Button>
            <Button variant={activeTab === "shop" ? "default" : "ghost"} onClick={() => setActiveTab("shop")}>
              <Gift className="h-4 w-4 mr-2" />
              Reward Shop
            </Button>
          </div>
        </div>

        {/* Achievements Tab */}
        {activeTab === "achievements" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <Card
                key={achievement.id}
                className={`transition-all ${
                  achievement.unlocked
                    ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200"
                    : "opacity-60"
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl">{achievement.icon}</div>
                    {achievement.unlocked && (
                      <Badge className="bg-green-500 text-white">
                        <Star className="h-3 w-3 mr-1" />
                        Unlocked
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-bold text-lg mb-2">{achievement.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                  {achievement.unlocked && achievement.date && (
                    <p className="text-xs text-green-600 font-medium">
                      Earned on {new Date(achievement.date).toLocaleDateString()}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Shop Tab */}
        {activeTab === "shop" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rewards.map((reward) => (
              <Card key={reward.id} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="text-4xl">{reward.icon}</div>
                    <Badge variant="outline" className="flex items-center">
                      <Sparkles className="h-3 w-3 mr-1" />
                      {reward.cost}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-bold text-lg mb-2">{reward.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{reward.description}</p>
                  <Button
                    className="w-full"
                    disabled={coins < reward.cost}
                    variant={coins >= reward.cost ? "default" : "secondary"}
                  >
                    {coins >= reward.cost ? (
                      <>
                        <Zap className="h-4 w-4 mr-2" />
                        Purchase
                      </>
                    ) : (
                      <>
                        <Heart className="h-4 w-4 mr-2" />
                        Need {reward.cost - coins} more coins
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
