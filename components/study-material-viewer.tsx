"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, BookOpen, Target, CheckCircle } from "lucide-react"
import type { StudyMaterial } from "@/data/curriculum-database"

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
          <div className="prose max-w-none">
            <div
              className="whitespace-pre-wrap"
              dangerouslySetInnerHTML={{
                __html: sections[currentSection]
                  .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mb-4 text-purple-800">$1</h1>')
                  .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-semibold mb-3 text-purple-700">$1</h2>')
                  .replace(/^### (.+)$/gm, '<h3 class="text-xl font-medium mb-2 text-purple-600">$1</h3>')
                  .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-purple-800">$1</strong>')
                  .replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
                  .replace(/^- (.+)$/gm, '<li class="ml-4">$1</li>')
                  .replace(/^\d+\. (.+)$/gm, '<li class="ml-4 list-decimal">$1</li>'),
              }}
            />
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
