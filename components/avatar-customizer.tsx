"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Sparkles, Crown, Heart, Star } from "lucide-react"

const avatarOptions = [
  { id: 1, url: "/cute-girl-with-pink-hair.jpg", name: "Pink Princess", cost: 0 },
  { id: 2, url: "/girl-with-blue-hair-and-glasses.jpg", name: "Smart Scholar", cost: 50 },
  { id: 3, url: "/girl-with-purple-hair-and-crown.jpg", name: "Royal Genius", cost: 100 },
  { id: 4, url: "/girl-with-green-hair-and-stars.jpg", name: "Star Student", cost: 150 },
  { id: 5, url: "/girl-with-rainbow-hair.jpg", name: "Rainbow Warrior", cost: 200 },
  { id: 6, url: "/girl-with-golden-hair-and-tiara.jpg", name: "Golden Goddess", cost: 300 },
]

const accessories = [
  { id: 1, name: "Sparkle Crown", icon: "👑", cost: 75 },
  { id: 2, name: "Magic Glasses", icon: "🤓", cost: 50 },
  { id: 3, name: "Star Earrings", icon: "⭐", cost: 60 },
  { id: 4, name: "Heart Necklace", icon: "💖", cost: 80 },
  { id: 5, name: "Rainbow Bow", icon: "🌈", cost: 90 },
  { id: 6, name: "Unicorn Horn", icon: "🦄", cost: 120 },
]

interface AvatarCustomizerProps {
  currentAvatar: string
  onSave: (avatar: string) => void
  onClose: () => void
}

export default function AvatarCustomizer({ currentAvatar, onSave, onClose }: AvatarCustomizerProps) {
  const [selectedAvatar, setSelectedAvatar] = useState(currentAvatar)
  const [selectedAccessories, setSelectedAccessories] = useState<number[]>([])

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          <Button variant="outline" onClick={onClose}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Quests
          </Button>
          <h1 className="text-3xl font-bold text-center flex items-center">
            <Sparkles className="h-8 w-8 mr-3 text-pink-500" />
            Avatar Studio
            <Sparkles className="h-8 w-8 ml-3 text-pink-500" />
          </h1>
          <div></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Avatar Preview */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center">
                <Crown className="h-5 w-5 mr-2 text-yellow-500" />
                Your Avatar
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="relative inline-block mb-6">
                <Avatar className="h-32 w-32 border-4 border-primary">
                  <AvatarImage src={selectedAvatar || "/placeholder.svg"} />
                  <AvatarFallback>👑</AvatarFallback>
                </Avatar>
                {selectedAccessories.map((accessoryId) => {
                  const accessory = accessories.find((a) => a.id === accessoryId)
                  return (
                    <div key={accessoryId} className="absolute -top-2 -right-2 text-2xl">
                      {accessory?.icon}
                    </div>
                  )
                })}
              </div>
              <Button onClick={() => onSave(selectedAvatar)} className="w-full" size="lg">
                <Star className="h-4 w-4 mr-2" />
                Save & Equip
              </Button>
            </CardContent>
          </Card>

          {/* Avatar Selection */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="h-5 w-5 mr-2 text-pink-500" />
                Choose Your Look
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {avatarOptions.map((avatar) => (
                  <Card
                    key={avatar.id}
                    className={`cursor-pointer transition-all hover:scale-105 ${
                      selectedAvatar === avatar.url ? "ring-4 ring-primary" : ""
                    }`}
                    onClick={() => setSelectedAvatar(avatar.url)}
                  >
                    <CardContent className="p-4 text-center">
                      <Avatar className="h-16 w-16 mx-auto mb-2">
                        <AvatarImage src={avatar.url || "/placeholder.svg"} />
                        <AvatarFallback>👑</AvatarFallback>
                      </Avatar>
                      <p className="text-sm font-medium mb-1">{avatar.name}</p>
                      <Badge variant={avatar.cost === 0 ? "secondary" : "outline"} className="text-xs">
                        {avatar.cost === 0 ? "Free" : `${avatar.cost} coins`}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Sparkles className="h-5 w-5 mr-2 text-purple-500" />
                Magical Accessories
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {accessories.map((accessory) => (
                  <Card
                    key={accessory.id}
                    className={`cursor-pointer transition-all hover:scale-105 ${
                      selectedAccessories.includes(accessory.id) ? "ring-2 ring-purple-400" : ""
                    }`}
                    onClick={() => {
                      setSelectedAccessories((prev) =>
                        prev.includes(accessory.id)
                          ? prev.filter((id) => id !== accessory.id)
                          : [...prev, accessory.id],
                      )
                    }}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="text-3xl mb-2">{accessory.icon}</div>
                      <p className="text-sm font-medium mb-1">{accessory.name}</p>
                      <Badge variant="outline" className="text-xs">
                        {accessory.cost} coins
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
