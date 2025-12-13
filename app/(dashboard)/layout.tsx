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
    UserCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const pathname = usePathname()
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const [sidebarOpen, setSidebarOpen] = useState(true)

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
            <div className="min-h-screen flex items-center justify-center bg-pink-50">
                <div className="relative">
                    <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-pink-400 animate-spin"></div>
                    <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-purple-400 animate-spin delay-150"></div>
                    <div className="absolute inset-0 flex items-center justify-center font-bold text-pink-500">Loading...</div>
                </div>
            </div>
        )
    }

    if (!user) return null

    const navItems = [
        { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
        { href: "/subjects", label: "My Quests", icon: BookOpen },
        { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
        { href: "/profile", label: "My Profile", icon: UserCircle },
        { href: "/settings", label: "Settings", icon: Settings },
    ]

    return (
        <div className="min-h-screen flex flex-col lg:flex-row relative">

            {/* Background Blobs for Dashboard */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-pink-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-200/40 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {!sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setSidebarOpen(true)}
                />
            )}

            {/* Sidebar (Glass Panel) */}
            <aside
                className={cn(
                    "fixed lg:static inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300 ease-in-out flex flex-col p-4",
                    !sidebarOpen && "-translate-x-full lg:translate-x-0"
                )}
            >
                <div className="glass-panel h-full rounded-3xl flex flex-col overflow-hidden bg-white/40">
                    <div className="h-24 flex items-center justify-center border-b border-white/40 mb-2">
                        <div className="flex items-center gap-3">
                            <div className="bg-gradient-to-tr from-pink-400 to-purple-500 p-2.5 rounded-xl shadow-lg text-white">
                                <GraduationCap size={28} />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">GCSE Quest</h1>
                                <p className="text-xs text-slate-500 font-medium tracking-wide">LEVEL UP LEARNING</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 flex-1 overflow-y-auto">
                        {/* User Profile Mini-Card */}
                        <div className="glass-card p-4 rounded-2xl mb-8 flex items-center space-x-3 bg-white/60">
                            <Avatar className="h-12 w-12 border-2 border-white shadow-md">
                                <AvatarImage src={user.profile.avatarUrl} />
                                <AvatarFallback className="bg-pink-100 text-pink-600">{user.username[0]}</AvatarFallback>
                            </Avatar>
                            <div className="overflow-hidden">
                                <p className="text-sm font-bold text-slate-700 truncate">{user.username}</p>
                                <div className="flex items-center text-xs text-pink-600 font-semibold bg-pink-100 px-2 py-0.5 rounded-full w-fit mt-1">
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
                                                ? "text-white shadow-md shadow-pink-200 scale-105"
                                                : "text-slate-600 hover:bg-white/50 hover:text-pink-600"
                                        )}
                                    >
                                        {isActive && (
                                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-100 z-0"></div>
                                        )}
                                        <Icon className={cn("h-5 w-5 relative z-10 transition-transform group-hover:scale-110", isActive ? "text-white" : "text-slate-400 group-hover:text-pink-500")} />
                                        <span className="relative z-10">{item.label}</span>
                                        {isActive && <div className="absolute right-3 h-2 w-2 bg-white rounded-full z-10 animate-pulse"></div>}
                                    </Link>
                                )
                            })}
                        </nav>
                    </div>

                    <div className="p-4 mt-auto border-t border-white/40">
                        <Button
                            variant="ghost"
                            className="w-full justify-start text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-xl h-12 px-4"
                            onClick={handleLogout}
                        >
                            <LogOut className="h-5 w-5 mr-3" />
                            <span className="font-medium">Logout</span>
                        </Button>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden h-screen">
                {/* Glass Header */}
                <header className="h-20 px-8 flex items-center justify-between shrink-0">
                    <div className="lg:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            className="bg-white/50 text-slate-600"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>

                    {/* Page Title / Breadcrumbs Placeholder */}
                    <div className="hidden lg:block">
                        <h2 className="text-2xl font-bold gradient-text">
                            {navItems.find(i => pathname.startsWith(i.href))?.label || "Adventure"}
                        </h2>
                    </div>

                    {/* Top Right Actions */}
                    <div className="flex items-center space-x-4">
                        <div className="glass-card px-4 py-2 rounded-full flex items-center space-x-4 bg-white/60">
                            <div className="flex items-center text-yellow-500 font-bold">
                                <div className="bg-yellow-100 p-1.5 rounded-full mr-2">
                                    <Trophy size={16} />
                                </div>
                                <span>{user.profile.xp} XP</span>
                            </div>
                            <div className="h-4 w-px bg-slate-200"></div>
                            <div className="flex items-center text-pink-500 font-bold">
                                <div className="bg-pink-100 p-1.5 rounded-full mr-2">
                                    <Sparkles size={16} />
                                </div>
                                <span>{user.profile.coins} Coins</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Page Content Container */}
                <div className="flex-1 overflow-y-auto p-4 lg:p-8 pt-0 scrollbar-hide">
                    {/* Inner content wrapper with animation */}
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}
