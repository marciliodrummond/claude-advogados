import { useState, useCallback } from 'react'

const STORAGE_KEY = 'si-claude-advogados-checklists'

type ChecklistData = Record<string, boolean[]>

function loadChecklists(): ChecklistData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

function saveChecklists(data: ChecklistData) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // localStorage indisponível
  }
}

export function useChecklist() {
  const [checklists, setChecklists] = useState<ChecklistData>(loadChecklists)

  const isChecked = useCallback((checklistId: string, itemIndex: number): boolean => {
    return !!(checklists[checklistId] && checklists[checklistId][itemIndex])
  }, [checklists])

  const toggleCheck = useCallback((checklistId: string, itemIndex: number) => {
    setChecklists(prev => {
      const current = prev[checklistId] || []
      const updated = [...current]
      // Expand array if needed
      while (updated.length <= itemIndex) updated.push(false)
      updated[itemIndex] = !updated[itemIndex]
      const next = { ...prev, [checklistId]: updated }
      saveChecklists(next)
      return next
    })
  }, [])

  const getChecklistProgress = useCallback((checklistId: string, totalItems: number) => {
    const items = checklists[checklistId] || []
    const checked = items.filter(Boolean).length
    return { checked, total: totalItems }
  }, [checklists])

  return { isChecked, toggleCheck, getChecklistProgress }
}
