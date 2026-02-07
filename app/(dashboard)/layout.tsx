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
    Medal
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
        <div className="min-h-screen flex flex-col lg:flex-row relative">

            {/* Background Blobs for Dashboard */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
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
                <div className="glass-panel h-full rounded-3xl flex flex-col overflow-hidden">
                    <div className="h-24 flex items-center justify-center border-b border-white/10 mb-2">
                        <div className="flex items-center gap-3">
                            <div className="bg-gradient-to-tr from-primary to-purple-500 p-2.5 rounded-xl shadow-lg text-white">
                                <GraduationCap size={28} />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">GCSE Quest</h1>
                                <p className="text-xs text-muted-foreground font-medium tracking-wide">LEVEL UP LEARNING</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 flex-1 overflow-y-auto">
                        {/* User Profile Mini-Card */}
                        <div className="glass-card p-4 rounded-2xl mb-8 flex items-center space-x-3">
                            <Avatar className="h-12 w-12 border-2 border-white/20 shadow-md">
                                <AvatarImage src={user.profile.avatarUrl} />
                                <AvatarFallback className="bg-primary/20 text-primary">{user.username[0]}</AvatarFallback>
                            </Avatar>
                            <div className="overflow-hidden">
                                <p className="text-sm font-bold text-foreground truncate">{user.username}</p>
                                <div className="flex items-center text-xs text-primary font-semibold bg-primary/10 px-2 py-0.5 rounded-full w-fit mt-1">
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
                                            "flex items-center space-x-3 px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-200 group relative overflow-hidden",
                                            isActive
                                                ? "text-primary-foreground shadow-md shadow-primary/20 scale-105"
                                                : "text-muted-foreground hover:bg-white/10 hover:text-primary dark:hover:bg-white/5"
                                        )}
                                    >
                                        {isActive && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 opacity-100 z-0"></div>
                                        )}
                                        <Icon className={cn("h-5 w-5 relative z-10 transition-transform group-hover:scale-110", isActive ? "text-white" : "text-slate-400 group-hover:text-primary")} />
                                        <span className="relative z-10">{item.label}</span>
                                        {isActive && <div className="absolute right-3 h-2 w-2 bg-white rounded-full z-10 animate-pulse"></div>}
                                    </Link>
                                )
                            })}
                        </nav>
                    </div>

                    <div className="p-4 mt-auto border-t border-white/10">
                        <Button
                            variant="ghost"
                            className="w-full justify-start text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl h-12 px-4"
                            onClick={handleLogout}
                        >
                            <LogOut className="h-5 w-5 mr-3" />
                            <span className="font-medium">Logout</span>
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
                            className="bg-white/50 text-slate-600 dark:bg-black/50 dark:text-slate-200"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>

                    {/* Page Title */}
                    <div className="hidden lg:block">
                        <h2 className="text-2xl font-bold gradient-text">
                            {navItems.find(i => pathname.startsWith(i.href))?.label || "Adventure"}
                        </h2>
                    </div>

                    {/* Top Right Actions */}
                    <div className="flex items-center space-x-2 md:space-x-4">
                        <ModeToggle />

                        <div className="glass-card px-2 md:px-4 py-2 rounded-full flex items-center space-x-2 md:space-x-4">
                            <div className="flex items-center text-yellow-500 font-bold text-xs md:text-sm">
                                <div className="bg-yellow-100 p-1 md:p-1.5 rounded-full mr-1 md:mr-2 dark:bg-yellow-900/20">
                                    <Trophy size={14} className="md:w-4 md:h-4" />
                                </div>
                                <span>{user.profile.xp}<span className="hidden sm:inline ml-1">XP</span></span>
                            </div>
                            <div className="h-4 w-px bg-slate-200 dark:bg-slate-700"></div>
                            <div className="flex items-center text-primary font-bold text-xs md:text-sm">
                                <div className="bg-primary/10 p-1 md:p-1.5 rounded-full mr-1 md:mr-2">
                                    <Sparkles size={14} className="md:w-4 md:h-4" />
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
