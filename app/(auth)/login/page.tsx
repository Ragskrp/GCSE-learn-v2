"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Crown, Sparkles, Heart, Star } from "lucide-react"
import { AuthService } from "@/services/auth-service"

export default function LoginPage() {
    const router = useRouter()
    const [name, setName] = useState("")
    const [pin, setPin] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handlePinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "") // Only allow digits
        if (value.length <= 4) {
            setPin(value)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        // Validate PIN length
        if (pin.length !== 4) {
            setError("PIN must be exactly 4 digits")
            setIsLoading(false)
            return
        }

        try {
            const user = await AuthService.login(name, pin)

            if (user) {
                router.push("/dashboard")
            } else {
                setError("Invalid name or PIN. Please try again.")
            }
        } catch (error) {
            console.error("Login error:", error)
            setError("Login failed. Please try again.")
        } finally {
            setIsLoading(false)
        }
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
                            <Label htmlFor="name" className="text-sm font-medium flex items-center">
                                <Star className="h-4 w-4 mr-2 text-yellow-500" />
                                Your Name
                            </Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="h-12 text-base"
                                required
                                autoComplete="name"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="pin" className="text-sm font-medium flex items-center">
                                <Heart className="h-4 w-4 mr-2 text-pink-500" />
                                4-Digit PIN
                            </Label>
                            <Input
                                id="pin"
                                type="password"
                                inputMode="numeric"
                                placeholder="Enter 4-digit PIN"
                                value={pin}
                                onChange={handlePinChange}
                                className="h-12 text-base text-center tracking-widest text-2xl"
                                required
                                maxLength={4}
                                pattern="[0-9]{4}"
                            />
                            <p className="text-xs text-gray-500 text-center">Enter your 4-digit security PIN</p>
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
