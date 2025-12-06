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
import rehypeRaw from 'rehype-raw'

interface StudyMaterialViewerProps {
  material: StudyMaterial
  onComplete: () => void
  isCompleted: boolean
}

export function StudyMaterialViewer({ material, onComplete, isCompleted }: StudyMaterialViewerProps) {
  // Split content into slides based on ## headers or --- dividers
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-6 bg-white rounded-2xl shadow-lg p-6 border-t-4 border-purple-500">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {material.title}
              </h1>
              <div className="flex items-center gap-3 flex-wrap">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                  {material.difficulty}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{material.estimatedTime} mins</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <Sparkles className="w-4 h-4 text-yellow-500" />
                  <span>150 XP</span>
                </div>
              </div>
            </div>
            {isCompleted && (
              <Badge className="bg-green-100 text-green-800 border-green-300">
                <CheckCircle className="w-4 h-4 mr-1" />
                Completed
              </Badge>
            )}
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-purple-700">
                Slide {currentSlide + 1} of {slides.length}
              </span>
              <span className="text-gray-600">{Math.round(progress)}% Complete</span>
            </div>
            <Progress
              value={progress}
              className="h-3 bg-purple-100"
            />
          </div>
        </div>

        {/* Main Slide Card */}
        <Card className="mb-6 overflow-hidden border-0 shadow-2xl transition-all duration-300 transform hover:scale-[1.01]">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2" />
          <CardContent className="p-8 md:p-12 min-h-[500px] flex flex-col justify-center">
            <div className="prose prose-lg max-w-none
              prose-headings:text-purple-800
              prose-h1:text-5xl prose-h1:font-bold prose-h1:mb-8 prose-h1:leading-tight
              prose-h2:text-4xl prose-h2:font-bold prose-h2:mb-6 prose-h2:text-purple-700
              prose-h3:text-3xl prose-h3:font-semibold prose-h3:mb-4 prose-h3:text-purple-600
              prose-p:text-xl prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-purple-800 prose-strong:font-bold
              prose-em:text-purple-600 prose-em:not-italic
              prose-ul:my-6 prose-ul:list-none prose-ul:pl-0
              prose-ol:my-6 prose-ol:list-none prose-ol:pl-0
              prose-li:mb-4 prose-li:text-xl prose-li:text-gray-700 prose-li:pl-8 prose-li:relative
              prose-li:before:content-['✨'] prose-li:before:absolute prose-li:before:left-0 prose-li:before:text-purple-500
              prose-code:bg-purple-50 prose-code:text-purple-800 prose-code:px-3 prose-code:py-1 prose-code:rounded-lg prose-code:text-lg prose-code:font-mono prose-code:font-semibold
              prose-pre:bg-gradient-to-r prose-pre:from-gray-50 prose-pre:to-purple-50 prose-pre:p-6 prose-pre:rounded-2xl prose-pre:overflow-x-auto prose-pre:border-2 prose-pre:border-purple-200 prose-pre:shadow-inner
              prose-blockquote:border-l-8 prose-blockquote:border-purple-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-2xl prose-blockquote:text-gray-700 prose-blockquote:bg-gradient-to-r prose-blockquote:from-purple-50 prose-blockquote:to-pink-50 prose-blockquote:py-6 prose-blockquote:my-8 prose-blockquote:rounded-r-2xl prose-blockquote:shadow-md
              prose-a:text-purple-600 prose-a:underline prose-a:hover:text-purple-800 prose-a:font-semibold
              [&>*:first-child]:mt-0
              [&>*:last-child]:mb-0">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  details: ({ children }) => (
                    <details className="my-6 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200 shadow-lg">
                      {children}
                    </details>
                  ),
                  summary: ({ children }) => (
                    <summary className="cursor-pointer font-bold text-xl text-purple-700 hover:text-purple-900 flex items-center gap-3 mb-4 list-none">
                      <span className="text-2xl">💡</span>
                      {children}
                    </summary>
                  ),
                  code: ({ node, inline, className, children, ...props }: any) => {
                    if (inline) {
                      return (
                        <code className="bg-purple-100 text-purple-800 px-3 py-1 rounded-lg text-lg font-mono font-semibold" {...props}>
                          {children}
                        </code>
                      )
                    }
                    return (
                      <pre className="bg-gradient-to-r from-gray-50 to-purple-50 p-6 rounded-2xl overflow-x-auto border-2 border-purple-200 my-6 shadow-lg">
                        <code className="text-lg font-mono text-gray-800" {...props}>
                          {children}
                        </code>
                      </pre>
                    )
                  },
                  h1: ({ children }) => (
                    <h1 className="text-5xl font-bold mb-8 leading-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-4xl font-bold mb-6 text-purple-700">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-3xl font-semibold mb-4 text-purple-600">
                      {children}
                    </h3>
                  ),
                  ul: ({ children }) => (
                    <ul className="my-6 space-y-4">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="my-6 space-y-4 list-decimal pl-8">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-xl text-gray-700 leading-relaxed">
                      {children}
                    </li>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-8 border-purple-500 pl-6 italic text-2xl text-gray-700 bg-gradient-to-r from-purple-50 to-pink-50 py-6 my-8 rounded-r-2xl shadow-lg">
                      {children}
                    </blockquote>
                  ),
                  img: ({ src, alt }) => (
                    <div className="my-8 flex justify-center">
                      <img
                        src={src}
                        alt={alt || 'Lesson illustration'}
                        className="rounded-2xl shadow-2xl max-w-full h-auto border-4 border-purple-200"
                        style={{ maxHeight: '400px', objectFit: 'contain' }}
                      />
                    </div>
                  ),
                }}
              >
                {slides[currentSlide]}
              </ReactMarkdown>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between bg-white rounded-2xl shadow-lg p-6">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            size="lg"
            variant="outline"
            className="gap-2 text-lg font-semibold"
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
                className={`h-3 rounded-full transition-all ${index === currentSlide
                  ? 'w-8 bg-gradient-to-r from-purple-500 to-pink-500'
                  : 'w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {!isLastSlide ? (
            <Button
              onClick={nextSlide}
              size="lg"
              className="gap-2 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </Button>
          ) : (
            <Button
              onClick={onComplete}
              disabled={isCompleted}
              size="lg"
              className="gap-2 text-lg font-semibold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              <Trophy className="w-5 h-5" />
              {isCompleted ? "Completed!" : "Complete Lesson"}
            </Button>
          )}
        </div>

        {/* Learning Objectives - Always visible */}
        <div className="mt-6 bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
            <Trophy className="w-6 h-6" />
            Learning Objectives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {material.learningObjectives.map((objective, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{objective}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
