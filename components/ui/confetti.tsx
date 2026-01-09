
"use client"

import { useEffect, useRef } from 'react'

export const Confetti = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        const particles: any[] = []
        const colors = ['#ec4899', '#8b5cf6', '#3b82f6', '#10b981', '#f59e0b']

        const createParticles = () => {
            for (let i = 0; i < 150; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height - canvas.height,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    size: Math.random() * 8 + 2,
                    speedY: Math.random() * 3 + 2,
                    speedX: Math.random() * 2 - 1,
                    rotation: Math.random() * 360
                })
            }
        }

        const animate = () => {
            if (!ctx || !canvas) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((p, index) => {
                p.y += p.speedY
                p.x += p.speedX
                p.rotation += 2

                ctx.save()
                ctx.translate(p.x, p.y)
                ctx.rotate((p.rotation * Math.PI) / 180)
                ctx.fillStyle = p.color
                ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size)
                ctx.restore()

                if (p.y > canvas.height) {
                    particles[index].y = -10
                    particles[index].x = Math.random() * canvas.width
                }
            })

            requestAnimationFrame(animate)
        }

        createParticles()
        animate()

        // Cleanup
        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        window.addEventListener('resize', handleResize)

        // Auto-stop after 5 seconds
        const timeout = setTimeout(() => {
            if (canvas) canvas.remove()
        }, 5000)

        return () => {
            window.removeEventListener('resize', handleResize)
            clearTimeout(timeout)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-50"
        />
    )
}
