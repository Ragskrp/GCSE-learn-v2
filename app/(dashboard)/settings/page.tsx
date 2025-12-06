"use client"

import { useEffect, useState } from "react"
import { AuthService } from "@/services/auth-service"
import { User } from "@/types/user"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Settings as SettingsIcon, Bell, Volume2, Palette, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SettingsPage() {
    const router = useRouter()
    const [user, setUser] = useState<User | null>(null)
    const [notifications, setNotifications] = useState(true)
    const [sound, setSound] = useState(true)
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const currentUser = AuthService.getCurrentUser()
        if (!currentUser) {
            router.push("/login")
            return
        }
        setUser(currentUser)
    }, [router])

    const handleLogout = async () => {
        await AuthService.logout()
        router.push("/login")
    }

    if (!user) return null

    return (
        <div className="max-w-2xl mx-auto space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
                <p className="text-gray-500">Manage your account and preferences</p>
            </div>

            {/* Account Info */}
            <Card>
                <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>Your account details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Label className="text-sm text-gray-500">Name</Label>
                        <p className="text-lg font-medium">{user.username}</p>
                    </div>
                    <div>
                        <Label className="text-sm text-gray-500">Year Group</Label>
                        <p className="text-lg font-medium">Year {user.yearGroup}</p>
                    </div>
                    <div>
                        <Label className="text-sm text-gray-500">PIN</Label>
                        <p className="text-lg font-medium">••••</p>
                    </div>
                </CardContent>
            </Card>

            {/* Preferences */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <SettingsIcon className="h-5 w-5" />
                        Preferences
                    </CardTitle>
                    <CardDescription>Customize your learning experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Bell className="h-5 w-5 text-gray-500" />
                            <div>
                                <Label htmlFor="notifications" className="font-medium">Notifications</Label>
                                <p className="text-sm text-gray-500">Receive quest reminders and updates</p>
                            </div>
                        </div>
                        <Switch
                            id="notifications"
                            checked={notifications}
                            onCheckedChange={setNotifications}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Volume2 className="h-5 w-5 text-gray-500" />
                            <div>
                                <Label htmlFor="sound" className="font-medium">Sound Effects</Label>
                                <p className="text-sm text-gray-500">Play sounds for achievements and actions</p>
                            </div>
                        </div>
                        <Switch
                            id="sound"
                            checked={sound}
                            onCheckedChange={setSound}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Palette className="h-5 w-5 text-gray-500" />
                            <div>
                                <Label htmlFor="darkMode" className="font-medium">Dark Mode</Label>
                                <p className="text-sm text-gray-500">Switch to dark theme</p>
                            </div>
                        </div>
                        <Switch
                            id="darkMode"
                            checked={darkMode}
                            onCheckedChange={setDarkMode}
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card className="border-red-200">
                <CardHeader>
                    <CardTitle className="text-red-600">Danger Zone</CardTitle>
                    <CardDescription>Irreversible actions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium">Log Out</p>
                            <p className="text-sm text-gray-500">Sign out of your account</p>
                        </div>
                        <Button variant="destructive" onClick={handleLogout}>
                            <LogOut className="h-4 w-4 mr-2" />
                            Log Out
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Save Button */}
            <div className="flex justify-end">
                <Button size="lg">
                    Save Changes
                </Button>
            </div>
        </div>
    )
}
