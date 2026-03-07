import { useState, useCallback } from 'react'
import { sections } from '../data/sections'

const STORAGE_KEY = 'si-claude-advogados-progress'

type ProgressData = Record<string, number[]>

function loadProgress(): ProgressData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveProgress(data: ProgressData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // localStorage indisponível
  }
}

export function useProgress() {
  const [progress, setProgress] = useState<ProgressData>(loadProgress)

  const markCardViewed = useCallback((sectionId: string, cardIndex: number) => {
    setProgress(prev => {
      const sectionCards = prev[sectionId] || []
      if (sectionCards.includes(cardIndex)) return prev
      const next = { ...prev, [sectionId]: [...sectionCards, cardIndex] }
      saveProgress(next)
      return next
    })
  }, [])

  const isCardViewed = useCallback((sectionId: string, cardIndex: number): boolean => {
    return (progress[sectionId] || []).includes(cardIndex)
  }, [progress])

  const getSectionProgress = useCallback((sectionId: string) => {
    const section = sections.find(s => s.id === sectionId)
    const total = section ? section.cards.length : 0
    const viewed = (progress[sectionId] || []).length
    const percent = total > 0 ? Math.round((viewed / total) * 100) : 0
    return { viewed, total, percent }
  }, [progress])

  const getGlobalProgress = useCallback(() => {
    let viewed = 0
    let total = 0
    for (const section of sections) {
      total += section.cards.length
      viewed += (progress[section.id] || []).length
    }
    const percent = total > 0 ? Math.round((viewed / total) * 100) : 0
    return { viewed, total, percent }
  }, [progress])

  return { markCardViewed, isCardViewed, getSectionProgress, getGlobalProgress }
}
