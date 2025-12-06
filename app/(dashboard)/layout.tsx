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
    X,
    GraduationCap
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
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        )
    }

    if (!user) return null

    const navItems = [
        { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
        { href: "/subjects", label: "My Subjects", icon: BookOpen },
        { href: "/leaderboard", label: "Leaderboard", icon: Trophy },
        { href: "/profile", label: "Profile", icon: GraduationCap },
        { href: "/settings", label: "Settings", icon: Settings },
    ]

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Mobile Sidebar Overlay */}
            {!sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(true)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out flex flex-col",
                    !sidebarOpen && "-translate-x-full lg:translate-x-0"
                )}
            >
                <div className="h-16 flex items-center px-6 border-b border-gray-100">
                    <GraduationCap className="h-8 w-8 text-primary mr-2" />
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                        GCSE Quest
                    </span>
                </div>

                <div className="p-4">
                    <div className="flex items-center space-x-3 mb-6 p-3 bg-gray-50 rounded-xl">
                        <Avatar className="h-10 w-10 border-2 border-primary/20">
                            <AvatarImage src={user.profile.avatarUrl} />
                            <AvatarFallback>{user.username[0]}</AvatarFallback>
                        </Avatar>
                        <div className="overflow-hidden">
                            <p className="text-sm font-medium truncate">{user.username}</p>
                            <p className="text-xs text-muted-foreground">Level {user.profile.level}</p>
                        </div>
                    </div>

                    <nav className="space-y-1">
                        {navItems.map((item) => {
                            const Icon = item.icon
                            const isActive = pathname.startsWith(item.href)
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                                        isActive
                                            ? "bg-primary/10 text-primary"
                                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                    )}
                                >
                                    <Icon className="h-5 w-5" />
                                    <span>{item.label}</span>
                                </Link>
                            )
                        })}
                    </nav>
                </div>

                <div className="mt-auto p-4 border-t border-gray-100">
                    <Button
                        variant="ghost"
                        className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={handleLogout}
                    >
                        <LogOut className="h-5 w-5 mr-2" />
                        Logout
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Header */}
                <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <Menu className="h-6 w-6" />
                    </Button>

                    <div className="flex-1 px-4">
                        {/* Breadcrumbs or Page Title could go here */}
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Notifications or other header items */}
                    </div>
                </header>

                {/* Page Content */}
                <div className="flex-1 overflow-y-auto p-4 lg:p-8">
                    {children}
                </div>
            </main>
        </div>
    )
}
