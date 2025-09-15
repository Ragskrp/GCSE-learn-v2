"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Crown, Sparkles, Heart, Star } from "lucide-react"
import { findUser } from "@/data/users"
import type { User } from "@/types/user"

interface LoginFormProps {
  onLogin: (user: User) => void
}

export default function LoginForm({ onLogin }: LoginFormProps) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    setTimeout(() => {
      const user = findUser(username, password)
      if (user) {
        onLogin(user)
      } else {
        setError("Invalid credentials! Please check your username and password.")
      }
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute sparkle opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <Sparkles className="h-4 w-4 text-purple-400" />
          </div>
        ))}
      </div>

      <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-2xl border-0 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg"></div>

        <CardHeader className="text-center relative z-10">
          <div className="flex items-center justify-center mb-4">
            <Crown className="h-8 w-8 mr-3 text-yellow-500" />
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              GCSE Quest Academy
            </CardTitle>
            <Crown className="h-8 w-8 ml-3 text-yellow-500" />
          </div>
          <CardDescription className="text-base text-muted-foreground">
            Welcome back, Scholar! Ready to conquer your quests?
          </CardDescription>
        </CardHeader>

        <CardContent className="relative z-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-sm font-medium flex items-center">
                <Star className="h-4 w-4 mr-2 text-yellow-500" />
                Username
              </Label>
              <Input
                id="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="h-12 text-base"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium flex items-center">
                <Heart className="h-4 w-4 mr-2 text-pink-500" />
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 text-base"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm text-center">{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full h-12 text-lg font-bold rounded-md transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                backgroundColor: "#059669",
                color: "#ffffff",
                border: "none",
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.backgroundColor = "#047857"
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.backgroundColor = "#059669"
                }
              }}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  <span style={{ color: "#ffffff" }}>Logging in...</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5 mr-2" style={{ color: "#ffffff" }} />
                  <span style={{ color: "#ffffff" }}>Start Your Adventure</span>
                  <Sparkles className="h-5 w-5 ml-2" style={{ color: "#ffffff" }} />
                </>
              )}
            </button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
