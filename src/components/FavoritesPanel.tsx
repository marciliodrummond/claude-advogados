import { useEffect, useCallback } from 'react'
import { Heart, X, Trash2 } from 'lucide-react'
import { Icon } from './Icons'
import { sections } from '../data/sections'
import type { FavoriteItem } from '../hooks/useFavorites'

interface FavoritesPanelProps {
  favorites: FavoriteItem[]
  onRemove: (sectionId: string, cardIndex: number) => void
  onNavigate: (sectionId: string, cardIndex: number) => void
  onClose: () => void
}

export function FavoritesPanel({ favorites, onRemove, onNavigate, onClose }: FavoritesPanelProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  // Group by section
  const grouped: Record<string, { sectionTitle: string; sectionIcon: string; items: FavoriteItem[] }> = {}
  for (const fav of favorites) {
    if (!grouped[fav.sectionId]) {
      const section = sections.find(s => s.id === fav.sectionId)
      grouped[fav.sectionId] = {
        sectionTitle: section?.title || fav.sectionId,
        sectionIcon: section?.icon || 'book-open',
        items: [],
      }
    }
    grouped[fav.sectionId].items.push(fav)
  }

  return (
    <div
      className="fixed inset-0 z-[150]"
      style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div
        className="absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto border-l"
        style={{
          background: 'var(--bg-card)',
          borderColor: 'var(--border-line)',
          animation: 'favSlideIn 0.25s ease both',
        }}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 border-b"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border-line)' }}
        >
          <div className="flex items-center gap-2.5">
            <Heart className="w-4 h-4" style={{ color: '#f43f5e', fill: '#f43f5e' }} />
            <span className="text-sm font-bold text-[var(--fg-primary)]">Favoritos</span>
            <span className="font-mono text-[11px] text-[var(--fg-muted)]">({favorites.length})</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[var(--fg-muted)] hover:text-[var(--fg-primary)] hover:bg-[var(--bg-surface)] transition-colors cursor-pointer bg-transparent border-none"
            aria-label="Fechar favoritos"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
            <Heart className="w-10 h-10 text-[var(--fg-muted)] opacity-30 mb-4" />
            <p className="text-sm font-medium text-[var(--fg-muted)] mb-2">Nenhum favorito ainda</p>
            <p className="text-xs text-[var(--fg-muted)] opacity-70">
              Clique no coração nos cards para salvar seus favoritos
            </p>
          </div>
        ) : (
          <div className="py-2">
            {Object.entries(grouped).map(([sectionId, group]) => (
              <div key={sectionId}>
                {/* Section header */}
                <div className="flex items-center gap-2 px-5 py-2.5">
                  <Icon name={group.sectionIcon} size={12} className="text-[var(--fg-accent)]" />
                  <span className="text-[10px] font-bold text-[var(--fg-muted)] uppercase tracking-wider">
                    {group.sectionTitle}
                  </span>
                </div>

                {/* Items */}
                {group.items.map((fav) => {
                  const section = sections.find(s => s.id === fav.sectionId)
                  const card = section?.cards[fav.cardIndex]
                  return (
                    <div
                      key={`${fav.sectionId}-${fav.cardIndex}`}
                      className="flex items-center gap-3 px-5 py-2.5 border-b transition-colors hover:bg-[var(--bg-surface)]"
                      style={{ borderColor: 'var(--border-line)' }}
                    >
                      <button
                        onClick={() => {
                          onNavigate(fav.sectionId, fav.cardIndex)
                          onClose()
                        }}
                        className="flex-1 text-left cursor-pointer bg-transparent border-none p-0 min-w-0"
                      >
                        <p className="text-[13px] font-medium text-[var(--fg-primary)] truncate">{fav.title}</p>
                        {card?.subtitle && (
                          <p className="text-[11px] text-[var(--fg-muted)] truncate mt-0.5">{card.subtitle}</p>
                        )}
                      </button>
                      <button
                        onClick={() => onRemove(fav.sectionId, fav.cardIndex)}
                        className="p-1.5 rounded-md text-[var(--fg-muted)] hover:text-red-400 hover:bg-red-400/10 transition-colors cursor-pointer bg-transparent border-none shrink-0"
                        aria-label={`Remover "${fav.title}" dos favoritos`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes favSlideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  )
}
