"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Crown, Sparkles, Heart, Star, ArrowRight, UserPlus, ArrowLeft, Shield, Zap, Wand2 } from "lucide-react"
import { AuthService } from "@/services/auth-service"
import { AvatarSelector } from "@/components/onboarding/avatar-selector"
import Link from "next/link"

export default function RegisterPage() {
    const router = useRouter()
    const [step, setStep] = useState(1)
    const [name, setName] = useState("")
    const [pin, setPin] = useState("")
    const [yearGroup, setYearGroup] = useState<7 | 8 | 9 | 10 | 11>(10)
    const [gender, setGender] = useState<"male" | "female">("male")
    const [avatarUrl, setAvatarUrl] = useState("/avatars/cyber-knight.png")
    const [avatarName, setAvatarName] = useState("Cyber-Knight")
    const [dreamGrade, setDreamGrade] = useState<number>(9)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleNext = () => {
        setError("")
        if (step === 1 && !name.trim()) {
            setError("Please summon your name first!")
            return
        }
        if (step === 2 && !gender) {
            setError("Please align with your destiny path!")
            return
        }
        if (step === 3 && !avatarUrl) {
            setError("Choose an avatar to join the battle!")
            return
        }
        setStep((s) => s + 1)
    }

    const handleBack = () => {
        setError("")
        setStep((s) => Math.max(1, s - 1))
    }

    const handleGenderChange = (selectedGender: "male" | "female") => {
        setGender(selectedGender)
        // Reset default avatar based on gender selection
        if (selectedGender === "male") {
            setAvatarUrl("/avatars/cyber-knight.png")
            setAvatarName("Cyber-Knight")
        } else {
            setAvatarUrl("/avatars/starlight-princess.png")
            setAvatarName("Starlight Princess")
        }
    }

    const handleAvatarSelect = (url: string, name: string) => {
        setAvatarUrl(url)
        setAvatarName(name)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")

        if (pin.length !== 4) {
            setError("Secret PIN must be exactly 4 digits")
            setIsLoading(false)
            return
        }

        try {
            const themePreference = gender === "male" ? "superhero" : "fairy-princess"
            const user = await AuthService.registerStudent(
                name,
                pin,
                yearGroup,
                gender,
                avatarUrl,
                dreamGrade,
                themePreference
            )

            if (user) {
                router.push("/dashboard")
            } else {
                setError("Summoning failed! Username might already be claimed.")
            }
        } catch (err) {
            setError("The magic portal is unstable. Please try again!")
        } finally {
            setIsLoading(false)
        }
    }

    const isSuperhero = gender === "male"

    return (
        <div className={`min-h-screen flex items-center justify-center p-4 transition-all duration-700 ${
            isSuperhero
                ? "bg-gradient-to-br from-slate-950 via-cyan-950/20 to-slate-900 text-slate-100"
                : "bg-gradient-to-br from-pink-50 via-purple-50 to-white text-slate-800"
        }`}>
            {/* Ambient Background Glows */}
            <div className={`absolute inset-0 pointer-events-none overflow-hidden -z-10`}>
                <div className={`absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full filter blur-3xl opacity-20 animate-pulse transition-colors duration-700 ${
                    isSuperhero ? "bg-cyan-500" : "bg-pink-400"
                }`} />
                <div className={`absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000 transition-colors duration-700 ${
                    isSuperhero ? "bg-purple-600" : "bg-purple-300"
                }`} />
            </div>

            <div className={`w-full max-w-xl p-1.5 rounded-[2.5rem] relative overflow-hidden transition-all duration-500 shadow-2xl ${
                isSuperhero
                    ? "bg-slate-900/80 border border-cyan-500/30 shadow-cyan-950/40"
                    : "bg-white/90 border border-white/60 shadow-pink-200/50"
            }`}>

                {/* Progress bar */}
                <div className="absolute top-0 left-0 w-full h-2 bg-slate-200/20">
                    <div
                        className={`h-full transition-all duration-500 ${isSuperhero ? "bg-cyan-400" : "bg-gradient-to-r from-pink-500 to-purple-500"}`}
                        style={{ width: `${(step / 4) * 100}%` }}
                    />
                </div>

                <CardHeader className="text-center pt-10 pb-4 relative z-10">
                    <div className="flex items-center justify-center mb-4">
                        <div className={`p-4 rounded-full shadow-lg backdrop-blur-sm transition-all duration-500 ${
                            isSuperhero
                                ? "bg-cyan-500/20 ring-4 ring-cyan-500/30 text-cyan-400"
                                : "bg-pink-500/10 ring-4 ring-pink-500/20 text-pink-500"
                        }`}>
                            <Sparkles className="h-10 w-10 shimmer" />
                        </div>
                    </div>
                    <CardTitle className={`text-3xl font-black transition-colors duration-500 ${
                        isSuperhero ? "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" : "bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
                    }`}>
                        {step === 1 && "The Awakening"}
                        {step === 2 && "Choose Your Path"}
                        {step === 3 && "Embody Your Destiny"}
                        {step === 4 && "The GCSE Pact"}
                    </CardTitle>
                    <CardDescription className={`font-semibold mt-1 transition-colors duration-500 ${isSuperhero ? "text-slate-400" : "text-slate-500"}`}>
                        {step === 1 && "Summon your name and define your school rank!"}
                        {step === 2 && "Are you a Tech Cyber-Hero or a Star-dusted Princess?"}
                        {step === 3 && `Behold your final form: ${avatarName}!`}
                        {step === 4 && "Set your final PIN and pledge your dream grade!"}
                    </CardDescription>
                </CardHeader>

                <CardContent className="px-6 sm:px-10 pb-10 relative z-10">
                    {/* STEP 1: Name and Year Group */}
                    {step === 1 && (
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="username" className={`font-bold flex items-center ${isSuperhero ? "text-slate-350" : "text-slate-700"}`}>
                                    <Star className="h-4 w-4 mr-2 text-yellow-400 fill-yellow-400" />
                                    Summon Your Name
                                </Label>
                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="Enter your name..."
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={`h-14 rounded-2xl text-lg shadow-inner placeholder:text-slate-400/60 transition-all ${
                                        isSuperhero
                                            ? "bg-slate-950/80 border-slate-800 focus:border-cyan-400 focus:bg-slate-950 focus:ring-cyan-500/20"
                                            : "bg-white/50 border-white/60 focus:bg-white/90 focus:border-pink-300 focus:ring-pink-300/20"
                                    }`}
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label className={`font-bold flex items-center ${isSuperhero ? "text-slate-350" : "text-slate-700"}`}>
                                    <Crown className="h-4 w-4 mr-2 text-purple-400 fill-purple-400" />
                                    Your UK Study Year Group
                                </Label>
                                <div className="grid grid-cols-5 gap-2">
                                    {([7, 8, 9, 10, 11] as const).map((yr) => (
                                        <button
                                            key={yr}
                                            type="button"
                                            onClick={() => setYearGroup(yr)}
                                            className={`h-14 rounded-2xl border-2 flex items-center justify-center font-extrabold text-lg transition-all ${
                                                yearGroup === yr
                                                    ? isSuperhero
                                                        ? "bg-cyan-500/20 border-cyan-400 text-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.3)]"
                                                        : "bg-pink-100 border-pink-500 text-pink-600 shadow-[0_0_12px_rgba(236,72,153,0.2)]"
                                                    : isSuperhero
                                                        ? "bg-slate-950/50 border-slate-850 text-slate-500 hover:bg-slate-900"
                                                        : "bg-white/50 border-slate-200 text-slate-400 hover:bg-white/80"
                                            }`}
                                        >
                                            Y{yr}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 2: Path Choice (Gender) */}
                    {step === 2 && (
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div
                                    onClick={() => handleGenderChange("male")}
                                    className={`cursor-pointer rounded-3xl border-2 p-6 transition-all duration-300 text-center relative overflow-hidden group ${
                                        gender === "male"
                                            ? "bg-slate-900/90 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)] scale-105"
                                            : "bg-slate-950/40 border-slate-800 opacity-60 hover:opacity-90 hover:scale-[1.02] text-slate-400"
                                    }`}
                                >
                                    <div className="h-16 w-16 mx-auto rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-4">
                                        <Shield className="h-8 w-8 text-cyan-400" />
                                    </div>
                                    <h3 className="text-xl font-extrabold text-cyan-400">Superhero Path</h3>
                                    <p className="text-xs text-slate-400 mt-2">
                                        Unleash mecha tech, mecha armor, high-voltage lightning, and epic equation power bursts. (Male)
                                    </p>
                                </div>

                                <div
                                    onClick={() => handleGenderChange("female")}
                                    className={`cursor-pointer rounded-3xl border-2 p-6 transition-all duration-300 text-center relative overflow-hidden group ${
                                        gender === "female"
                                            ? "bg-white border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.3)] scale-105 text-slate-800"
                                            : "bg-white/40 border-slate-200 opacity-60 hover:opacity-90 hover:scale-[1.02] text-slate-400"
                                    }`}
                                >
                                    <div className="h-16 w-16 mx-auto rounded-2xl bg-pink-500/10 flex items-center justify-center mb-4">
                                        <Wand2 className="h-8 w-8 text-pink-500" />
                                    </div>
                                    <h3 className="text-xl font-extrabold text-pink-600">Fairy Princess</h3>
                                    <p className="text-xs text-slate-500 mt-2">
                                        Command cosmic stardust, fairy garden mana blooms, ocean depths, and aurora spectrums. (Female)
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* STEP 3: Avatar Selection */}
                    {step === 3 && (
                        <AvatarSelector
                            gender={gender}
                            selectedAvatar={avatarUrl}
                            onSelect={handleAvatarSelect}
                        />
                    )}

                    {/* STEP 4: GCSE Target Pledge and Secret Pin */}
                    {step === 4 && (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* The Lore Adventure call to action */}
                            <div className={`p-5 rounded-2xl border leading-relaxed text-sm relative overflow-hidden font-medium ${
                                isSuperhero
                                    ? "bg-cyan-950/20 border-cyan-500/20 text-cyan-200"
                                    : "bg-pink-50/50 border-pink-200 text-pink-700"
                            }`}>
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    {isSuperhero ? <Shield className="w-12 h-12" /> : <Wand2 className="w-12 h-12" />}
                                </div>
                                <h4 className="font-bold flex items-center gap-2 mb-1.5">
                                    <Sparkles className="h-4 w-4 animate-spin" />
                                    The Prophecy Awaits
                                </h4>
                                {isSuperhero ? (
                                    <span>
                                        🚀 <strong>{name}</strong>! GCSE Galaxy Sector <strong>Y{yearGroup}</strong> is under cosmic lockdown.
                                        Equip your <strong>{avatarName}</strong> mecha systems and prepare to unleash academic firepower. Set your target GCSE grade to unlock high-voltage upgrades!
                                    </span>
                                ) : (
                                    <span>
                                        ✨ <strong>{name}</strong>! The ancient library scrolls of kingdom <strong>Y{yearGroup}</strong> are sealed.
                                        As the legendary <strong>{avatarName}</strong>, command your stardust spells to restore light. Pledge your GCSE dream grade to amplify your study magic!
                                    </span>
                                )}
                            </div>

                            {/* Dream Grade Selection */}
                            <div className="space-y-2">
                                <Label className={`font-bold flex items-center ${isSuperhero ? "text-slate-350" : "text-slate-700"}`}>
                                    <Crown className="h-4 w-4 mr-2 text-yellow-500 fill-yellow-500" />
                                    Your Target GCSE Grade Goal
                                </Label>
                                <div className="grid grid-cols-4 gap-2">
                                    {([6, 7, 8, 9] as const).map((grade) => (
                                        <button
                                            key={grade}
                                            type="button"
                                            onClick={() => setDreamGrade(grade)}
                                            className={`h-12 rounded-2xl border-2 flex flex-col items-center justify-center font-extrabold transition-all ${
                                                dreamGrade === grade
                                                    ? isSuperhero
                                                        ? "bg-cyan-500/20 border-cyan-400 text-cyan-400"
                                                        : "bg-pink-100 border-pink-500 text-pink-600"
                                                    : isSuperhero
                                                        ? "bg-slate-950/50 border-slate-850 text-slate-500 hover:bg-slate-900"
                                                        : "bg-white/50 border-slate-200 text-slate-400 hover:bg-white/85"
                                            }`}
                                        >
                                            <span className="text-lg">Grade {grade}</span>
                                            <span className="text-[9px] uppercase tracking-wider opacity-60">
                                                {grade === 9 ? "LEGENDARY" : grade === 8 ? "EPIC" : "HERO"}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Secret PIN */}
                            <div className="space-y-2">
                                <Label htmlFor="pin" className={`font-bold flex items-center ${isSuperhero ? "text-slate-350" : "text-slate-700"}`}>
                                    <Heart className="h-4 w-4 mr-2 text-pink-400 fill-pink-400" />
                                    Create 4-Digit Secret Key (PIN)
                                </Label>
                                <Input
                                    id="pin"
                                    type="password"
                                    maxLength={4}
                                    placeholder="••••"
                                    value={pin}
                                    onChange={(e) => setPin(e.target.value)}
                                    className={`h-14 rounded-2xl text-lg tracking-[0.5em] text-center shadow-inner placeholder:tracking-normal placeholder:text-slate-450 transition-all ${
                                        isSuperhero
                                            ? "bg-slate-950/80 border-slate-800 focus:border-cyan-400 focus:bg-slate-950 focus:ring-cyan-500/20"
                                            : "bg-white/50 border-white/60 focus:bg-white/90 focus:border-pink-350 focus:ring-pink-300/20"
                                    }`}
                                    required
                                />
                            </div>

                            {error && (
                                <div className={`border rounded-2xl p-3 animate-shake ${
                                    isSuperhero ? "bg-rose-950/30 border-rose-900/30 text-rose-300" : "bg-red-50/50 border-red-200/50 text-red-500"
                                }`}>
                                    <p className="text-sm text-center font-semibold opacity-90">{error}</p>
                                </div>
                            )}

                            <Button
                                type="submit"
                                className={`w-full h-14 rounded-full text-lg font-black shadow-lg transform hover:-translate-y-1 transition-all duration-300 mt-4 ${
                                    isSuperhero
                                        ? "bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-slate-950 shadow-cyan-950/40 hover:shadow-cyan-400/20"
                                        : "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-pink-200/80 hover:shadow-pink-300/90"
                                }`}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2" />
                                        Awakening Power...
                                    </>
                                ) : (
                                    <>
                                        <UserPlus className="mr-2 h-5 w-5" />
                                        {isSuperhero ? "AWAKEN MY POWERS ⚡" : "CAST THE MAGIC SPELL 🌟"}
                                    </>
                                )}
                            </Button>
                        </form>
                    )}

                    {/* Navigation Buttons */}
                    {step < 4 && (
                        <div className="space-y-4 mt-6">
                            {error && (
                                <div className={`border rounded-2xl p-3 animate-shake ${
                                    isSuperhero ? "bg-rose-950/30 border-rose-900/30 text-rose-300" : "bg-red-50/50 border-red-200/50 text-red-500"
                                }`}>
                                    <p className="text-sm text-center font-semibold opacity-90">{error}</p>
                                </div>
                            )}

                            <div className="flex gap-4">
                                {step > 1 && (
                                    <Button
                                        type="button"
                                        variant="outline"
                                        onClick={handleBack}
                                        className={`h-14 w-1/3 rounded-2xl font-bold transition-all ${
                                            isSuperhero
                                                ? "bg-slate-950/20 border-slate-800 text-slate-400 hover:bg-slate-900"
                                                : "bg-white/50 border-slate-200 text-slate-650 hover:bg-white"
                                        }`}
                                    >
                                        <ArrowLeft className="mr-2 h-4 w-4" /> Back
                                    </Button>
                                )}
                                <Button
                                    type="button"
                                    onClick={handleNext}
                                    className={`h-14 rounded-2xl font-black text-lg transition-all duration-300 shadow-md ${
                                        step > 1 ? "w-2/3" : "w-full"
                                    } ${
                                        isSuperhero
                                            ? "bg-cyan-500 hover:bg-cyan-600 text-slate-950 shadow-cyan-950/40 hover:shadow-cyan-400/20"
                                            : "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white shadow-pink-200/50"
                                    }`}
                                >
                                    Proceed Quest <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>
                    )}

                    <div className="text-center mt-6">
                        <Link href="/login" className={`text-sm font-semibold transition-colors ${
                            isSuperhero ? "text-slate-500 hover:text-cyan-400" : "text-slate-500 hover:text-pink-600"
                        }`}>
                            Already initiated? Return to portal
                        </Link>
                    </div>
                </CardContent>
            </div>
        </div>
    )
}
