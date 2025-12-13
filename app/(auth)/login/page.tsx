"use client"

import LoginForm from "@/components/login-form"
import { useRouter } from "next/navigation"

export default function LoginPage() {
    const router = useRouter()

    const handleLogin = (user: any) => {
        // Redirect to dashboard on successful login
        router.push("/dashboard")
    }

    return (
        <div className="min-h-screen flex items-center justify-center p-4 w-full">
            {/* Background is handled by globals.css body style, ensuring a unified theme */}
            <LoginForm onLogin={handleLogin} />
        </div>
    )
}
