"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Crown, Sparkles, Heart, Star, ArrowRight } from "lucide-react"
import { AuthService } from "@/services/auth-service"
import type { User } from "@/types/user"
import { Button } from "@/components/ui/button"

interface LoginFormProps {
  onLogin: (user: User) => void
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [username, setUsername] = useState("")
  const [pin, setPin] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const user = await AuthService.login(username, pin)

      if (user) {
        onLogin(user)
      } else {
        setError("Invalid username or PIN.")
      }
    } catch (err) {
      setError("Failed to login. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex items-center justify-center w-full min-h-[80vh]">
      <div className="glass-card w-full max-w-md p-1 rounded-3xl relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,105,180,0.3)]">

        {/* Decor header background */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-pink-400/20 to-purple-400/20 z-0"></div>

        <CardHeader className="text-center relative z-10 pt-10 pb-2">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/50 p-4 rounded-full shadow-lg backdrop-blur-sm ring-4 ring-white/30">
              <Crown className="h-10 w-10 text-pink-500 fill-pink-500 shimmer" />
            </div>
          </div>
          <CardTitle className="text-3xl font-extrabold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            GCSE Quest
          </CardTitle>
          <CardDescription className="text-slate-500 font-medium mt-2">
            Enter the magical realm of revision! ✨
          </CardDescription>
        </CardHeader>

        <CardContent className="relative z-10 px-8 pb-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 group">
              <Label htmlFor="username" className="text-slate-600 font-semibold flex items-center group-focus-within:text-pink-500 transition-colors">
                <Star className="h-4 w-4 mr-2 text-yellow-400 fill-yellow-400" />
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="PrincessCoder"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-14 rounded-2xl bg-white/50 border-white/60 focus:bg-white/80 focus:ring-pink-400 focus:border-pink-300 text-lg shadow-inner placeholder:text-slate-300 transition-all"
                required
              />
            </div>

            <div className="space-y-2 group">
              <Label htmlFor="pin" className="text-slate-600 font-semibold flex items-center group-focus-within:text-pink-500 transition-colors">
                <Heart className="h-4 w-4 mr-2 text-pink-400 fill-pink-400" />
                Secret PIN
              </Label>
              <Input
                id="pin"
                type="password"
                maxLength={4}
                placeholder="••••"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="h-14 rounded-2xl bg-white/50 border-white/60 focus:bg-white/80 focus:ring-pink-400 focus:border-pink-300 text-lg tracking-[0.5em] text-center shadow-inner placeholder:tracking-normal placeholder:text-slate-300 transition-all"
                required
              />
            </div>

            {error && (
              <div className="glass-panel bg-red-50/50 border-red-200/50 rounded-xl p-3 animate-shake">
                <p className="text-red-500 text-sm text-center font-medium opacity-90">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full h-14 rounded-full text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-lg shadow-pink-200 hover:shadow-xl hover:shadow-pink-300 transform hover:-translate-y-1 transition-all duration-300 mt-4"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Opening Portal...
                </>
              ) : (
                <>
                  Enter World <ArrowRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </div>
    </div>
  )
}
