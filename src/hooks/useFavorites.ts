import { useState, useCallback } from 'react'

const STORAGE_KEY = 'si-claude-advogados-favorites'

export interface FavoriteItem {
  sectionId: string
  cardIndex: number
  title: string
}

function loadFavorites(): FavoriteItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveFavorites(data: FavoriteItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    // localStorage indisponível
  }
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(loadFavorites)

  const toggleFavorite = useCallback((sectionId: string, cardIndex: number, title: string) => {
    setFavorites(prev => {
      const exists = prev.some(f => f.sectionId === sectionId && f.cardIndex === cardIndex)
      const next = exists
        ? prev.filter(f => !(f.sectionId === sectionId && f.cardIndex === cardIndex))
        : [...prev, { sectionId, cardIndex, title }]
      saveFavorites(next)
      return next
    })
  }, [])

  const isFavorite = useCallback((sectionId: string, cardIndex: number): boolean => {
    return favorites.some(f => f.sectionId === sectionId && f.cardIndex === cardIndex)
  }, [favorites])

  const removeFavorite = useCallback((sectionId: string, cardIndex: number) => {
    setFavorites(prev => {
      const next = prev.filter(f => !(f.sectionId === sectionId && f.cardIndex === cardIndex))
      saveFavorites(next)
      return next
    })
  }, [])

  const favoritesCount = favorites.length

  return { favorites, toggleFavorite, isFavorite, removeFavorite, favoritesCount }
}
