import { useRef, useEffect, useCallback } from 'react'
import { sections } from '../data/sections'
import { Icon } from './Icons'

interface TabNavProps {
  activeTab: string
  onTabChange: (id: string) => void
}

export function TabNav({ activeTab, onTabChange }: TabNavProps) {
  const navRef = useRef<HTMLElement>(null)
  const activeRef = useRef<HTMLButtonElement>(null)

  // Auto-scroll active tab into view
  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [activeTab])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    const currentIndex = sections.findIndex(s => s.id === activeTab)
    let nextIndex = currentIndex

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      nextIndex = (currentIndex + 1) % sections.length
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      nextIndex = (currentIndex - 1 + sections.length) % sections.length
    } else {
      return
    }

    onTabChange(sections[nextIndex].id)
  }, [activeTab, onTabChange])

  return (
    <nav
      ref={navRef}
      role="tablist"
      aria-label="Seções do guia"
      onKeyDown={handleKeyDown}
      className="flex gap-1 overflow-x-auto snap-x snap-mandatory pb-1 sm:flex-wrap sm:justify-center scrollbar-hide"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
    >
      {sections.map((s) => {
        const isActive = activeTab === s.id
        return (
          <button
            key={s.id}
            ref={isActive ? activeRef : undefined}
            role="tab"
            aria-selected={isActive}
            aria-controls="section-panel"
            tabIndex={isActive ? 0 : -1}
            id={`tab-${s.id}`}
            onClick={() => onTabChange(s.id)}
            className={`
              whitespace-nowrap snap-start min-w-[44px]
              flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer border
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--fg-accent)] focus-visible:ring-offset-1
              ${isActive
                ? 'bg-[var(--bg-accent-subtle)] text-[var(--fg-accent)] border-[var(--border-accent)]'
                : 'bg-transparent text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] hover:bg-[var(--bg-surface)] border-transparent'
              }
            `}
          >
            <Icon name={s.icon} size={14} className="shrink-0" />
            <span>{s.title}</span>
          </button>
        )
      })}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </nav>
  )
}
