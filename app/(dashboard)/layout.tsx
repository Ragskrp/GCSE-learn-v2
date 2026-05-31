"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { AuthService } from "@/services/auth-service"
import { User } from "@/types/user"
import {
    LayoutDashboard,
    BookOpen,
    Trophy,
    Settings,
    LogOut,
    Menu,
    GraduationCap,
    Sparkles,
    UserCircle,
    Medal,
    Zap,
    Shield,
    Wand2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const pathname = usePathname()
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [sidebarOpen, setSidebarOpen] = useState(false)

    useEffect(() => {
        const currentUser = AuthService.getCurrentUser()
        if (!currentUser) {
            router.push("/login")
        } else {
            setUser(currentUser)
        }
        setLoading(false)
    }, [router])

    const handleLogout = () => {
        AuthService.logout()
        router.push("/login")
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="relative">
                    <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-primary animate-spin"></div>
                    <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-secondary animate-spin delay-150"></div>
                </div>
            </div>
        )
    }

    if (!user) return null

    const isSuperhero = user.profile.themePreference === "superhero"

    const navItems = [
        { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
        { href: "/subjects", label: "My Quests", icon: BookOpen },
        { href: "/mock-tests", label: "Mock Tests", icon: GraduationCap },
        { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
        { href: "/achievements", label: "Achievements", icon: Medal },
        { href: "/profile", label: "My Profile", icon: UserCircle },
        { href: "/settings", label: "Settings", icon: Settings },
    ]

    return (
        <div className={cn(
            "min-h-screen flex flex-col lg:flex-row relative transition-all duration-500",
            isSuperhero
                ? "bg-slate-950 text-slate-100 dark"
                : "bg-gradient-to-br from-pink-50/50 via-white to-purple-50/50 text-slate-800"
        )}>

            {/* Background Blobs for Dashboard */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className={cn(
                    "absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full mix-blend-multiply filter blur-3xl animate-pulse transition-colors duration-500",
                    isSuperhero ? "bg-cyan-500/10" : "bg-pink-300/20"
                )}></div>
                <div className={cn(
                    "absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700 transition-colors duration-500",
                    isSuperhero ? "bg-purple-600/10" : "bg-purple-300/20"
                )}></div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden transition-all duration-300"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar (Glass Panel) */}
            <aside
                className={cn(
                    "fixed lg:static inset-y-0 left-0 z-50 w-72 transform transition-all duration-300 ease-in-out flex flex-col p-4 pb-2 lg:pb-4",
                    sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                )}
            >
                <div className={cn(
                    "glass-panel h-full rounded-3xl flex flex-col overflow-hidden transition-all duration-500",
                    isSuperhero
                        ? "bg-slate-900/60 border border-slate-800/80"
                        : "bg-white/80 border border-white/60"
                )}>
                    <div className={cn(
                        "h-24 flex items-center justify-center border-b mb-2 transition-colors duration-550",
                        isSuperhero ? "border-slate-800" : "border-slate-100"
                    )}>
                        <div className="flex items-center gap-3">
                            <div className={cn(
                                "p-2.5 rounded-xl shadow-lg text-white transition-colors duration-500",
                                isSuperhero ? "bg-cyan-500" : "bg-gradient-to-r from-pink-500 to-purple-500"
                            )}>
                                {isSuperhero ? <Shield size={28} /> : <Wand2 size={28} />}
                            </div>
                            <div>
                                <h1 className={cn(
                                    "text-xl font-black transition-colors duration-500",
                                    isSuperhero ? "bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent" : "bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
                                )}>GCSE Quest</h1>
                                <p className="text-xs text-muted-foreground font-extrabold tracking-wide uppercase">
                                    {isSuperhero ? "CYBER HERO MODE" : "PRINCESS SPELLS"}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 flex-1 overflow-y-auto">
                        {/* User Profile Mini-Card */}
                        <div className={cn(
                            "glass-card p-4 rounded-2xl mb-6 flex items-center space-x-3 transition-colors duration-500",
                            isSuperhero ? "bg-slate-950/70 border border-slate-850" : "bg-slate-50/50 border border-slate-150"
                        )}>
                            <Avatar className="h-12 w-12 border-2 border-white/20 shadow-md">
                                <AvatarImage src={user.profile.avatarUrl} />
                                <AvatarFallback className="bg-primary/20 text-primary">{user.username[0]}</AvatarFallback>
                            </Avatar>
                            <div className="overflow-hidden">
                                <p className="text-sm font-bold text-foreground truncate">{user.username}</p>
                                <div className={cn(
                                    "flex items-center text-xs font-bold px-2 py-0.5 rounded-full w-fit mt-1",
                                    isSuperhero ? "text-cyan-400 bg-cyan-950/30" : "text-pink-600 bg-pink-50"
                                )}>
                                    <Sparkles className="h-3 w-3 mr-1" />
                                    Level {user.profile.level}
                                </div>
                            </div>
                        </div>

                        <nav className="space-y-2">
                            {navItems.map((item) => {
                                const Icon = item.icon
                                const isActive = pathname.startsWith(item.href)
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "flex items-center space-x-3 px-4 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200 group relative overflow-hidden",
                                            isActive
                                                ? isSuperhero
                                                    ? "text-slate-950 shadow-md shadow-cyan-500/10 scale-105"
                                                    : "text-white shadow-md shadow-pink-500/20 scale-105"
                                                : isSuperhero
                                                    ? "text-slate-400 hover:bg-slate-800/50 hover:text-cyan-400"
                                                    : "text-slate-500 hover:bg-pink-50/50 hover:text-pink-600"
                                        )}
                                    >
                                        {isActive && (
                                            <div className={cn(
                                                "absolute inset-0 z-0",
                                                isSuperhero ? "bg-cyan-400" : "bg-gradient-to-r from-pink-500 to-purple-500"
                                            )}></div>
                                        )}
                                        <Icon className={cn(
                                            "h-5 w-5 relative z-10 transition-transform group-hover:scale-110",
                                            isActive
                                                ? isSuperhero ? "text-slate-950" : "text-white"
                                                : "text-slate-400 group-hover:text-current"
                                        )} />
                                        <span className="relative z-10">{item.label}</span>
                                        {isActive && <div className={cn(
                                            "absolute right-3 h-2 w-2 rounded-full z-10 animate-pulse",
                                            isSuperhero ? "bg-slate-950" : "bg-white"
                                        )}></div>}
                                    </Link>
                                )
                            })}
                        </nav>
                    </div>

                    <div className={cn(
                        "p-4 mt-auto border-t transition-colors",
                        isSuperhero ? "border-slate-800" : "border-slate-100"
                    )}>
                        <Button
                            variant="ghost"
                            className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl h-12 px-4"
                            onClick={handleLogout}
                        >
                            <LogOut className="h-5 w-5 mr-3" />
                            <span className="font-semibold">Logout</span>
                        </Button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden min-h-screen lg:h-screen">
                {/* Glass Header */}
                <header className="h-20 px-8 flex items-center justify-between shrink-0">
                    <div className="lg:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            className={cn(
                                "text-slate-600 transition-colors",
                                isSuperhero ? "bg-slate-900 text-slate-300" : "bg-white/50"
                            )}
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>

                    {/* Page Title */}
                    <div className="hidden lg:block">
                        <h2 className={cn(
                            "text-2xl font-black transition-colors duration-500",
                            isSuperhero ? "bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent" : "bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
                        )}>
                            {navItems.find(i => pathname.startsWith(i.href))?.label || "Adventure"}
                        </h2>
                    </div>

                    {/* Top Right Actions */}
                    <div className="flex items-center space-x-2 md:space-x-4">
                        <ModeToggle />

                        <div className={cn(
                            "glass-card px-2 md:px-4 py-2 rounded-full flex items-center space-x-2 md:space-x-4 transition-colors",
                            isSuperhero ? "bg-slate-900 border border-slate-800" : "bg-white/80"
                        )}>
                            <div className={cn(
                                "flex items-center font-extrabold text-xs md:text-sm",
                                isSuperhero ? "text-cyan-400" : "text-pink-600"
                            )}>
                                <div className={cn(
                                    "p-1 md:p-1.5 rounded-full mr-1 md:mr-2",
                                    isSuperhero ? "bg-cyan-500/10" : "bg-pink-50"
                                )}>
                                    {isSuperhero ? <Zap size={14} className="md:w-4 md:h-4 animate-bounce" /> : <Sparkles size={14} className="md:w-4 md:h-4" />}
                                </div>
                                <span>{user.profile.xp}<span className="hidden sm:inline ml-1">{isSuperhero ? "PP" : "Mana"}</span></span>
                            </div>
                            <div className={cn(
                                "h-4 w-px",
                                isSuperhero ? "bg-slate-800" : "bg-slate-200"
                            )}></div>
                            <div className="flex items-center text-yellow-500 font-extrabold text-xs md:text-sm">
                                <div className={cn(
                                    "p-1 md:p-1.5 rounded-full mr-1 md:mr-2",
                                    isSuperhero ? "bg-yellow-500/10" : "bg-yellow-50"
                                )}>
                                    <Trophy size={14} className="md:w-4 md:h-4" />
                                </div>
                                <span>{user.profile.coins}<span className="hidden sm:inline ml-1">Coins</span></span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content Container */}
                <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 pt-0 scrollbar-hide pb-10">
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}
