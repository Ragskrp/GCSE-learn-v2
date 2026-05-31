"use client"

import { useEffect, useState } from "react"
import { Sparkles, Trophy, Shield, Wand2, Star, Zap, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface StoryProgressionModalProps {
  isOpen: boolean
  onClose: () => void
  type: "level_up" | "quest_complete"
  level: number
  themePreference: "superhero" | "fairy-princess"
  username: string
  rewardXp?: number
  rewardCoins?: number
  subjectName?: string
}

export function StoryProgressionModal({
  isOpen,
  onClose,
  type,
  level,
  themePreference,
  username,
  rewardXp = 50,
  rewardCoins = 10,
  subjectName = "General Quest"
}: StoryProgressionModalProps) {
  const [mounted, setMounted] = useState(false)
  const isSuperhero = themePreference === "superhero"

  useEffect(() => {
    if (isOpen) {
      setMounted(true)
    } else {
      const timer = setTimeout(() => setMounted(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen && !mounted) return null

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
      isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
    } backdrop-blur-md bg-black/70`}>

      {/* Interactive Floating Particles (CSS animated) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-ping opacity-30 ${
              isSuperhero ? "bg-cyan-400" : "bg-pink-400"
            }`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <div className={`w-full max-w-lg p-1.5 rounded-[2.5rem] relative overflow-hidden transition-all duration-500 shadow-3xl ${
        isSuperhero
          ? "bg-slate-950 border border-cyan-500/40 text-cyan-100 shadow-cyan-500/20 animate-in zoom-in duration-300"
          : "bg-gradient-to-tr from-pink-50 via-white to-purple-50 border border-pink-300 text-slate-800 shadow-pink-300/30 animate-in zoom-in duration-300"
      }`}>

        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${
            isSuperhero ? "hover:bg-slate-800 text-slate-400 hover:text-white" : "hover:bg-slate-100 text-slate-400 hover:text-pink-600"
          }`}
        >
          <X className="h-5 w-5" />
        </button>

        <div className="text-center p-8 sm:p-10 space-y-6">

          {/* Main Visual Icon */}
          <div className="relative flex justify-center mb-6">
            <div className={`p-6 rounded-full shadow-2xl relative ${
              isSuperhero
                ? "bg-cyan-500/10 border-2 border-cyan-400/40 text-cyan-400 ring-8 ring-cyan-950/40"
                : "bg-pink-100/80 border-2 border-pink-400 text-pink-500 ring-8 ring-pink-50"
            }`}>
              {type === "level_up" ? (
                isSuperhero ? <Shield className="h-16 w-16 animate-bounce" /> : <Wand2 className="h-16 w-16 animate-bounce" />
              ) : (
                <Trophy className="h-16 w-16 text-yellow-500 fill-yellow-500 animate-pulse" />
              )}

              {/* Sparkle attachments */}
              <div className="absolute top-2 right-2 animate-spin"><Star className="h-5 w-5 text-yellow-400 fill-yellow-400" /></div>
              <div className="absolute bottom-2 left-2 animate-pulse"><Zap className="h-5 w-5 text-cyan-400" /></div>
            </div>
          </div>

          {/* Celebratory Headers */}
          <div className="space-y-2">
            <span className={`text-xs font-black uppercase tracking-widest ${isSuperhero ? "text-cyan-400" : "text-pink-500"}`}>
              {type === "level_up" ? "DIGNITY ASCENSION UNLOCKED" : "QUEST CONQUERED SUCCESS"}
            </span>
            <h2 className={`text-3xl font-black ${
              isSuperhero ? "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" : "bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
            }`}>
              {type === "level_up" ? `Level Up Complete! ✨` : `${subjectName} Clear! 🏆`}
            </h2>
          </div>

          {/* Story Narrative Card */}
          <div className={`p-5 rounded-2xl border text-sm text-left leading-relaxed ${
            isSuperhero
              ? "bg-slate-900 border-slate-800 text-slate-350"
              : "bg-white/80 border-pink-100 text-slate-650"
          }`}>
            <h4 className={`font-extrabold flex items-center gap-1.5 mb-1.5 ${isSuperhero ? "text-cyan-400" : "text-pink-600"}`}>
              <Sparkles className="h-4 w-4" />
              Lore Unlocked
            </h4>
            {type === "level_up" ? (
              isSuperhero ? (
                <span>
                  ⚡ Great work, <strong>{username}</strong>! Your mecha calculations have breached new capacities, upgrading your profile to <strong>Rank Level {level}</strong>. High-voltage calculations and mecha-suit defenses have been significantly reinforced. GCSE Sector is safe... for now!
                </span>
              ) : (
                <span>
                  🌸 Spectacular, <strong>{username}</strong>! Your study magic blooms, raising your magical star-dust potency to <strong>Mana Level {level}</strong>. The GCSE ancient library shields have grown brighter, and your spells grow ever stronger!
                </span>
              )
            ) : (
              isSuperhero ? (
                <span>
                  🚀 Battle Log: Sector <strong>{subjectName}</strong> successfully secured. Your calculated strikes demolished boring review grids, yielding massive energy cores. Onward to the next sector, Commander!
                </span>
              ) : (
                <span>
                  ✨ Chronicles: Kingdom <strong>{subjectName}</strong> restored to full light. The star-dusted spell you cast cleared the exam fog completely. The fairy realm rejoices!
                </span>
              )
            )}
          </div>

          {/* Loot Box / Rewards */}
          <div className="flex justify-center gap-4 py-2">
            <div className={`px-4 py-2.5 rounded-2xl flex items-center gap-2 border ${
              isSuperhero ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100"
            }`}>
              <Zap className="h-4 w-4 text-cyan-400 fill-cyan-400" />
              <span className="text-xs font-bold text-slate-400">+{rewardXp} {isSuperhero ? "PP" : "Mana"}</span>
            </div>
            <div className={`px-4 py-2.5 rounded-2xl flex items-center gap-2 border ${
              isSuperhero ? "bg-slate-900 border-slate-800" : "bg-white border-slate-100"
            }`}>
              <Trophy className="h-4 w-4 text-yellow-500" />
              <span className="text-xs font-bold text-slate-400">+{rewardCoins} Coins</span>
            </div>
          </div>

          {/* Action Button */}
          <Button
            onClick={onClose}
            className={`w-full h-14 rounded-full text-lg font-black shadow-lg transform hover:-translate-y-0.5 transition-all ${
              isSuperhero
                ? "bg-cyan-500 hover:bg-cyan-600 text-slate-950 shadow-cyan-950/40"
                : "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-pink-200/50"
            }`}
          >
            {isSuperhero ? "CONTINUE EXPEDITION ⚔️" : "PROCEED THE JOURNEY 🧚"}
          </Button>

        </div>
      </div>
    </div>
  )
}
