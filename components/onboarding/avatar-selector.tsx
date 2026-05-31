"use client"

import { useState } from "react"
import { Shield, Zap, Flame, Compass, Sparkles, Wand2, Flower2, Droplet, Star } from "lucide-react"

export interface AvatarOption {
  id: string
  name: string
  url: string
  description: string
  icon: any
  color: string
  bgGradient: string
  stats: { label: string; value: number }[]
}

const superheroAvatars: AvatarOption[] = [
  {
    id: "cyber_knight",
    name: "Cyber-Knight",
    url: "/avatars/cyber-knight.png",
    description: "Harnesses mecha-suit technology to blast through difficult equations.",
    icon: Shield,
    color: "text-cyan-400",
    bgGradient: "from-cyan-900/50 to-slate-900/80 border-cyan-500/40 focus:border-cyan-400 shadow-cyan-950/50",
    stats: [
      { label: "Logic Shield", value: 95 },
      { label: "Equation Blast", value: 85 }
    ]
  },
  {
    id: "thunder_strike",
    name: "Thunder-Strike",
    url: "/avatars/thunder-strike.png",
    description: "Channels high-voltage electrical storms to supercharge memory recall.",
    icon: Zap,
    color: "text-amber-400",
    bgGradient: "from-amber-900/50 to-slate-900/80 border-amber-500/40 focus:border-amber-400 shadow-amber-950/50",
    stats: [
      { label: "Voltage Recall", value: 90 },
      { label: "Speed Solving", value: 92 }
    ]
  },
  {
    id: "shadow_ninja",
    name: "Shadow-Ninja",
    url: "/avatars/shadow-ninja.png",
    description: "Blends into the shadows, performing silent calculations at lightspeed.",
    icon: Compass,
    color: "text-purple-400",
    bgGradient: "from-purple-900/50 to-slate-900/80 border-purple-500/40 focus:border-purple-400 shadow-purple-950/50",
    stats: [
      { label: "Stealth Logic", value: 88 },
      { label: "Lightspeed Quiz", value: 96 }
    ]
  },
  {
    id: "fire_breather",
    name: "Fire-Breather",
    url: "/avatars/fire-breather.png",
    description: "Commands raging cosmic fire to melt down complex literature chapters.",
    icon: Flame,
    color: "text-rose-400",
    bgGradient: "from-rose-900/50 to-slate-900/80 border-rose-500/40 focus:border-rose-400 shadow-rose-950/50",
    stats: [
      { label: "Cosmic Heat", value: 94 },
      { label: "Chapter Melt", value: 87 }
    ]
  }
]

const fairyPrincessAvatars: AvatarOption[] = [
  {
    id: "starlight_princess",
    name: "Starlight Princess",
    url: "/avatars/starlight-princess.png",
    description: "Draws magic from celestial alignment to illuminate hidden study secrets.",
    icon: Star,
    color: "text-pink-400",
    bgGradient: "from-pink-100 to-white border-pink-300 shadow-pink-200/50",
    stats: [
      { label: "Stardust Vision", value: 93 },
      { label: "Secret Insight", value: 88 }
    ]
  },
  {
    id: "flora_fairy",
    name: "Flora Fairy",
    url: "/avatars/flora-fairy.png",
    description: "Commands the blossoming flowers and trees to restore learning mana.",
    icon: Flower2,
    color: "text-emerald-500",
    bgGradient: "from-emerald-50 to-white border-emerald-300 shadow-emerald-100/50",
    stats: [
      { label: "Botanical Rest", value: 95 },
      { label: "Mana Bloom", value: 91 }
    ]
  },
  {
    id: "ocean_pixie",
    name: "Ocean Pixie",
    url: "/avatars/ocean-pixie.png",
    description: "Siphons power from ancient depths to flow smoothly through quizzes.",
    icon: Droplet,
    color: "text-sky-500",
    bgGradient: "from-sky-50 to-white border-sky-300 shadow-sky-100/50",
    stats: [
      { label: "Fluid Flow", value: 89 },
      { label: "Deep Memory", value: 94 }
    ]
  },
  {
    id: "aurora_mage",
    name: "Aurora Mage",
    url: "/avatars/aurora-mage.png",
    description: "Weaves spells using the magical Northern Lights to clear mock exam fog.",
    icon: Wand2,
    color: "text-purple-500",
    bgGradient: "from-purple-50 to-white border-purple-300 shadow-purple-100/50",
    stats: [
      { label: "Aurora Beam", value: 92 },
      { label: "Fog Breaker", value: 95 }
    ]
  }
]

interface AvatarSelectorProps {
  gender: "male" | "female"
  selectedAvatar: string
  onSelect: (avatarUrl: string, avatarId: string) => void
}

export function AvatarSelector({ gender, selectedAvatar, onSelect }: AvatarSelectorProps) {
  const avatars = gender === "male" ? superheroAvatars : fairyPrincessAvatars
  const isMale = gender === "male"

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className={`text-xl font-extrabold flex items-center justify-center gap-2 ${isMale ? "text-cyan-400" : "text-pink-600"}`}>
          <Sparkles className="h-5 w-5 animate-pulse" />
          Choose Your Avatar
        </h3>
        <p className={`text-sm ${isMale ? "text-slate-400" : "text-slate-500"} mt-1`}>
          Select the avatar that will represent you on this legendary GCSE journey!
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {avatars.map((avatar) => {
          const Icon = avatar.icon
          const isSelected = selectedAvatar === avatar.url

          return (
            <div
              key={avatar.id}
              onClick={() => onSelect(avatar.url, avatar.name)}
              className={`cursor-pointer rounded-3xl border-2 p-5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden group ${
                isSelected
                  ? isMale
                    ? "bg-slate-900 border-cyan-400 scale-105 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                    : "bg-pink-50 border-pink-500 scale-105 shadow-[0_0_20px_rgba(236,72,153,0.3)]"
                  : isMale
                    ? `bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:scale-[1.02]`
                    : `bg-white/80 border-slate-200 text-slate-700 hover:border-slate-300 hover:scale-[1.02]`
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-lg font-black ${isSelected ? (isMale ? "text-cyan-400" : "text-pink-600") : ""}`}>
                    {avatar.name}
                  </span>
                  <div className={`p-2.5 rounded-full ${isSelected ? (isMale ? "bg-cyan-500/20 text-cyan-400" : "bg-pink-500/20 text-pink-500") : (isMale ? "bg-slate-800 text-slate-400" : "bg-slate-100 text-slate-400")}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <p className={`text-xs leading-relaxed ${isSelected ? (isMale ? "text-slate-350" : "text-slate-600") : "text-slate-400"}`}>
                  {avatar.description}
                </p>
              </div>

              {/* Stats */}
              <div className="mt-4 pt-4 border-t border-slate-100/10 space-y-2">
                {avatar.stats.map((stat, idx) => (
                  <div key={idx} className="flex justify-between items-center text-[10px] font-bold">
                    <span className="uppercase tracking-wider opacity-60">{stat.label}</span>
                    <div className="flex items-center gap-1.5 w-1/2">
                      <div className={`h-1.5 rounded-full w-full bg-slate-100/20 overflow-hidden`}>
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${isMale ? "bg-cyan-400" : "bg-pink-500"}`}
                          style={{ width: `${stat.value}%` }}
                        />
                      </div>
                      <span className="opacity-95">{stat.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative sparkle corner background */}
              <div className="absolute -bottom-8 -right-8 w-20 h-20 opacity-5 pointer-events-none group-hover:scale-125 transition-transform">
                <Icon className="w-full h-full" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
