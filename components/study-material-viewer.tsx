"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen, Target, CheckCircle } from "lucide-react"
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
  const [currentSection, setCurrentSection] = useState(0)
  const sections = material.content.split("\n## ").map((section, index) => {
    if (index === 0) return section
    return "## " + section
  })

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {material.title}
            </CardTitle>
            {isCompleted && (
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                <CheckCircle className="w-4 h-4 mr-1" />
                Completed
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {material.estimatedTime} minutes
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              {material.type}
            </div>
            <Badge variant={material.difficulty === "higher" ? "destructive" : "default"}>{material.difficulty}</Badge>
          </div>
        </CardHeader>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Learning Objectives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {material.learningObjectives.map((objective, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                <span>{objective}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="prose prose-lg max-w-none
            prose-headings:text-purple-800
            prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6 prose-h1:mt-8
            prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-6 prose-h2:text-purple-700
            prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-4 prose-h3:text-purple-600
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-strong:text-purple-800 prose-strong:font-semibold
            prose-em:text-purple-600
            prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
            prose-li:mb-2 prose-li:text-gray-700
            prose-code:bg-purple-50 prose-code:text-purple-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
            prose-pre:bg-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:border prose-pre:border-gray-300
            prose-blockquote:border-l-4 prose-blockquote:border-purple-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:bg-purple-50 prose-blockquote:py-2 prose-blockquote:my-4
            prose-hr:my-8 prose-hr:border-purple-200
            prose-a:text-purple-600 prose-a:underline prose-a:hover:text-purple-800
            [&>*:first-child]:mt-0">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                details: ({ children }) => (
                  <details className="my-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                    {children}
                  </details>
                ),
                summary: ({ children }) => (
                  <summary className="cursor-pointer font-semibold text-purple-700 hover:text-purple-900 flex items-center gap-2 mb-2">
                    {children}
                  </summary>
                ),
                code: ({ node, inline, className, children, ...props }: any) => {
                  if (inline) {
                    return (
                      <code className="bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                        {children}
                      </code>
                    )
                  }
                  return (
                    <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto border border-gray-200 my-4">
                      <code className="text-sm font-mono text-gray-800" {...props}>
                        {children}
                      </code>
                    </pre>
                  )
                },
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold mb-6 mt-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-3xl font-bold mb-4 mt-6 text-purple-700 border-b-2 border-purple-200 pb-2">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-2xl font-semibold mb-3 mt-4 text-purple-600">
                    {children}
                  </h3>
                ),
                ul: ({ children }) => (
                  <ul className="my-4 space-y-2 list-disc pl-6">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="my-4 space-y-2 list-decimal pl-6">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-gray-700 leading-relaxed">
                    {children}
                  </li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-600 bg-purple-50 py-3 my-4 rounded-r-lg">
                    {children}
                  </blockquote>
                ),
                hr: () => (
                  <hr className="my-8 border-t-2 border-purple-200" />
                ),
              }}
            >
              {sections[currentSection]}
            </ReactMarkdown>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          {sections.length > 1 && (
            <>
              <Button
                variant="outline"
                onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
                disabled={currentSection === 0}
              >
                Previous Section
              </Button>
              <Button
                variant="outline"
                onClick={() => setCurrentSection(Math.min(sections.length - 1, currentSection + 1))}
                disabled={currentSection === sections.length - 1}
              >
                Next Section
              </Button>
            </>
          )}
        </div>

        <Button
          onClick={onComplete}
          disabled={isCompleted}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          {isCompleted ? "Completed" : "Mark as Complete"}
        </Button>
      </div>
    </div>
  )
}
