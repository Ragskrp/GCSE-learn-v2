"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Clock,
  Trophy,
  Sparkles
} from "lucide-react"
import type { StudyMaterial } from "@/data/curriculum-database"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeRaw from 'rehype-raw'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

interface StudyMaterialViewerProps {
  material: StudyMaterial
  onComplete: () => void
  isCompleted: boolean
  relatedQuizId?: string
}

export function StudyMaterialViewer({ material, onComplete, isCompleted, relatedQuizId }: StudyMaterialViewerProps) {
  const slides = material.content
    .split(/\n---\n/)
    .filter(slide => slide.trim().length > 0)

  const [currentSlide, setCurrentSlide] = useState(0)
  const progress = ((currentSlide + 1) / slides.length) * 100

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  const isLastSlide = currentSlide === slides.length - 1

  return (
    <div className="min-h-screen p-6 animate-fade-in-up">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="glass-panel rounded-2xl p-6 border-t-4 border-primary">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold gradient-text mb-2">
                {material.title}
              </h1>
              <div className="flex items-center gap-3 flex-wrap">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
                  {material.difficulty}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{material.estimatedTime} mins</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  <span>150 XP</span>
                </div>
              </div>
            </div>
            {isCompleted && (
              <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-300 dark:border-green-800">
                <CheckCircle className="w-4 h-4 mr-1" />
                Completed
              </Badge>
            )}
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-primary font-bold">
                Slide {currentSlide + 1} of {slides.length}
              </span>
              <span className="text-muted-foreground">{Math.round(progress)}% Complete</span>
            </div>
            <Progress
              value={progress}
              className="h-3 bg-secondary"
            />
          </div>
        </div>

        {/* Main Slide Card */}
        <div className="glass-card rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 min-h-[500px] flex flex-col relative">
          <div className="bg-gradient-to-r from-primary to-purple-600 h-2 absolute top-0 w-full" />
          <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
            <div className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:text-foreground
              prose-h1:text-4xl prose-h1:font-extrabold prose-h1:mb-8 prose-h1:gradient-text prose-h1:tracking-tight
              prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-primary prose-h2:pb-2 prose-h2:border-b-2 prose-h2:border-primary/20
              prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-foreground/90 prose-h3:flex prose-h3:items-center prose-h3:gap-2
              prose-p:text-lg prose-p:md:text-xl prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-foreground prose-strong:font-bold prose-strong:bg-primary/5 prose-strong:px-1 prose-strong:rounded
              prose-em:text-primary prose-em:not-italic prose-em:font-medium
              prose-ul:my-6 prose-ul:list-none prose-ul:pl-0 prose-ul:space-y-4
              prose-li:text-lg prose-li:md:text-xl prose-li:text-muted-foreground prose-li:pl-10 prose-li:relative prose-li:leading-snug
              prose-li:before:content-[''] prose-li:before:absolute prose-li:before:left-2 prose-li:before:top-[0.6em] prose-li:before:h-2.5 prose-li:before:w-2.5 prose-li:before:rounded-full prose-li:before:bg-primary/60
              prose-code:bg-secondary prose-code:text-primary prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-mono prose-code:text-sm
              prose-pre:bg-secondary/50 prose-pre:border prose-pre:border-border prose-pre:rounded-xl prose-pre:shadow-inner
              prose-blockquote:border-none prose-blockquote:p-0 prose-blockquote:m-0
              prose-a:text-primary prose-a:underline prose-a:decoration-2 prose-a:underline-offset-2 hover:prose-a:text-primary/80
              [&>h2:first-child]:mt-0
              [&>h3:first-child]:mt-0
              [&>*:last-child]:mb-0">
              <ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeRaw, rehypeKatex]}
                components={{
                  // Better Headings
                  h2: ({ children }) => (
                    <h2 className="flex items-center gap-3 group">
                      <span className="h-8 w-1.5 bg-primary rounded-full group-hover:h-10 transition-all duration-300" />
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="flex items-center gap-2 group italic font-bold">
                      <span className="text-primary group-hover:translate-x-1 transition-transform inline-block">→</span>
                      {children}
                    </h3>
                  ),
                  // Enhance images
                  img: ({ src, alt }) => (
                    <div className="my-10 flex flex-col items-center">
                      <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <img
                          src={src}
                          alt={alt || 'Lesson illustration'}
                          className="relative rounded-2xl shadow-xl border-2 border-white/20 max-h-[500px] w-full object-cover bg-white/5"
                        />
                      </div>
                      {alt && <p className="mt-4 text-sm italic text-muted-foreground">{alt}</p>}
                    </div>
                  ),
                  // Custom Callout Support (Example: blockquotes as cards)
                  blockquote: ({ children }) => (
                    <div className="my-10 p-8 glass-panel border-l-8 border-primary rounded-r-2xl transform hover:scale-[1.01] transition-all duration-300 shadow-xl relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Trophy className="w-16 h-16 text-primary" />
                      </div>
                      <div className="flex gap-4 relative z-10">
                        <div className="text-4xl mt-1">💡</div>
                        <div className="italic text-xl md:text-2xl text-foreground font-medium leading-relaxed">
                          {children}
                        </div>
                      </div>
                    </div>
                  ),
                  // Enhance list items to NOT have the double marker if markdown provides one
                  li: ({ children }) => (
                    <li className="group ml-2">
                      <span className="absolute left-[-4px] top-[0.6em] h-3 w-3 rounded-md bg-primary/20 group-hover:bg-primary transition-colors origin-center rotate-45" />
                      <div className="group-hover:text-foreground transition-colors">{children}</div>
                    </li>
                  ),
                  // Style tables for better readability
                  table: ({ children }) => (
                    <div className="my-10 overflow-hidden rounded-2xl border border-white/10 glass-card shadow-2xl">
                      <table className="w-full text-left border-collapse">
                        {children}
                      </table>
                    </div>
                  ),
                  thead: ({ children }) => (
                    <thead className="bg-primary/20 text-primary font-bold">
                      {children}
                    </thead>
                  ),
                  th: ({ children }) => (
                    <th className="p-5 border-b border-white/10 uppercase tracking-widest text-xs font-black">
                      {children}
                    </th>
                  ),
                  td: ({ children }) => (
                    <td className="p-5 border-b border-white/5 text-muted-foreground text-lg">
                      {children}
                    </td>
                  ),
                }}
              >
                {slides[currentSlide]}
              </ReactMarkdown>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between glass-panel rounded-2xl p-6">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            size="lg"
            variant="outline"
            className="gap-2 text-lg font-semibold border-primary/20 hover:bg-primary/10 hover:text-primary"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </Button>

          {/* Slide Indicators */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'w-8 bg-gradient-to-r from-primary to-purple-500'
                  : 'w-3 bg-secondary hover:bg-primary/40'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {!isLastSlide ? (
            <Button
              onClick={nextSlide}
              size="lg"
              className="gap-2 text-lg font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </Button>
          ) : (
            <div className="flex gap-4">
              <Button
                onClick={onComplete}
                disabled={isCompleted}
                size="lg"
                className="gap-2 text-lg font-semibold bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-500/20"
              >
                <Trophy className="w-5 h-5" />
                {isCompleted ? "Completed!" : "Complete Lesson"}
              </Button>
              {relatedQuizId && (
                <Button
                  onClick={() => window.location.href = `/quiz/${relatedQuizId}`}
                  size="lg"
                  variant="secondary"
                  className="gap-2 text-lg font-semibold"
                >
                  Take Test
                  <ChevronRight className="w-5 h-5" />
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Learning Objectives */}
        <div className="glass-panel rounded-2xl p-6">
          <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6" />
            Learning Objectives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {material.learningObjectives.map((objective, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-secondary/30 rounded-lg border border-white/10"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{objective}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
