import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Star, Trophy, Sparkles } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans overflow-hidden relative">

      {/* Background Blobs (Pure CSS) */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-2000"></div>

      {/* Header */}
      <header className="px-6 h-20 flex items-center justify-between relative z-10 glass-panel mt-4 mx-4 rounded-2xl">
        <div className="flex items-center gap-2">
          <div className="bg-gradient-to-tr from-pink-500 to-purple-500 p-2 rounded-lg text-white">
            <Sparkles size={24} />
          </div>
          <span className="text-xl font-bold gradient-text">GCSE Quest</span>
        </div>
        <nav className="hidden md:flex gap-8 text-slate-600 font-medium">
          <Link href="#features" className="hover:text-pink-500 transition-colors">Features</Link>
          <Link href="#subjects" className="hover:text-pink-500 transition-colors">Subjects</Link>
          <Link href="#about" className="hover:text-pink-500 transition-colors">About</Link>
        </nav>
        <div className="flex gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-slate-600 hover:text-pink-600 hover:bg-pink-50 rounded-full px-6">
              Log in
            </Button>
          </Link>
          <Link href="/register">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-pink-200 rounded-full px-8 transition-all hover:scale-105">
              Get Started
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 container mx-auto px-4 flex flex-col items-center justify-center text-center py-20 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/60 text-sm font-medium text-pink-600 mb-8 animate-bounce delay-75 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
          </span>
          The cutest way to smash your exams! 🎀
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-slate-800">
          Make Revision <br />
          <span className="gradient-text">Simply Magical</span>
        </h1>

        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Level up your knowledge with our gamified learning platform.
          Earn XP, unlock badges, and conquer your GCSEs in a world of pastel perfection.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <Link href="/register">
            <Button size="lg" className="w-full sm:w-auto h-14 px-10 rounded-full text-lg bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-200 hover:shadow-2xl transition-all hover:-translate-y-1">
              Start Learning Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 w-full">
          <div className="glass-card p-8 rounded-3xl text-left hover:scale-105 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-500 mb-6 shadow-inner">
              <Trophy size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Gamified Progress</h3>
            <p className="text-slate-500 leading-relaxed">Earn coins and XP for every lesson. Turn boring revision into an addictive quest!</p>
          </div>

          <div className="glass-card p-8 rounded-3xl text-left hover:scale-105 transition-all duration-300 delay-100">
            <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-500 mb-6 shadow-inner">
              <BookOpen size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Bite-sized Lessons</h3>
            <p className="text-slate-500 leading-relaxed">Concise, easy-to-digest content perfect for quick study sessions on the go.</p>
          </div>

          <div className="glass-card p-8 rounded-3xl text-left hover:scale-105 transition-all duration-300 delay-200">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-500 mb-6 shadow-inner">
              <Star size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Instant Feedback</h3>
            <p className="text-slate-500 leading-relaxed">Test your knowledge with interactive quizzes and get detailed explanations instantly.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-10 text-center text-slate-400 text-sm relative z-10">
        <p>© 2025 GCSE Quest. Built with ✨ & 💖.</p>
      </footer>
    </div>
  )
}
