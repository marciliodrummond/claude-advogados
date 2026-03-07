import { useState, useEffect } from 'react'
import { ExpandableCard } from './ExpandableCard'
import { SectionIcon } from './Icons'
import { sections } from '../data/sections'

interface ChecklistHook {
  isChecked: (checklistId: string, itemIndex: number) => boolean
  toggleCheck: (checklistId: string, itemIndex: number) => void
  getChecklistProgress: (checklistId: string, totalItems: number) => { checked: number; total: number }
}

interface SectionContentProps {
  activeTab: string
  openCardIndex: number | null
  onCardToggle: (index: number | null) => void
  levelFilter: string
  onCardOpened?: (sectionId: string, cardIndex: number) => void
  isCardViewed?: (sectionId: string, cardIndex: number) => boolean
  isFavorite?: (sectionId: string, cardIndex: number) => boolean
  onToggleFavorite?: (sectionId: string, cardIndex: number, title: string) => void
  sectionProgress?: { viewed: number; total: number; percent: number }
  checklist?: ChecklistHook
}

export function SectionContent({
  activeTab,
  openCardIndex,
  onCardToggle,
  levelFilter,
  onCardOpened,
  isCardViewed,
  isFavorite,
  onToggleFavorite,
  sectionProgress,
  checklist,
}: SectionContentProps) {
  const section = sections.find(s => s.id === activeTab)
  const [animateKey, setAnimateKey] = useState(0)

  useEffect(() => {
    setAnimateKey(k => k + 1)
    onCardToggle(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab])

  if (!section) return null

  const filteredCards = levelFilter === 'todos'
    ? section.cards
    : section.cards.filter(c => c.level === levelFilter)

  const sectionIndex = sections.findIndex(s => s.id === activeTab)
  const sectionNumber = String(sectionIndex + 1).padStart(2, '0')

  return (
    <div
      key={animateKey}
      role="tabpanel"
      id="section-panel"
      aria-labelledby={`tab-${activeTab}`}
      tabIndex={0}
      className="space-y-3 relative"
      style={{ animation: 'fadeUp 0.4s ease both' }}
    >
      {/* Section number watermark */}
      <div className="absolute -top-2 right-0 pointer-events-none select-none font-display text-[80px] sm:text-[100px] font-extrabold leading-none" style={{
        color: 'var(--fg-accent)',
        opacity: 0.04,
      }}>
        {sectionNumber}
      </div>

      <div className="mb-4 relative">
        <div className="flex items-center gap-2.5 mb-2">
          <div className="w-6 h-px bg-gradient-to-r from-[var(--fg-accent)] to-transparent" />
          <span className="font-mono text-[10px] font-medium text-[var(--fg-accent)] uppercase tracking-[0.12em]">
            Seção {sectionNumber}
          </span>
        </div>
        <div className="flex items-center gap-3 mb-1">
          <SectionIcon name={section.icon} />
          <h2 className="font-display text-xl sm:text-2xl font-bold text-[var(--fg-primary)] tracking-tight">
            {section.title}
          </h2>
        </div>
        <p className="text-sm text-[var(--fg-secondary)] ml-[52px]">{section.description}</p>

        {/* Section progress bar */}
        {sectionProgress && sectionProgress.viewed > 0 && (
          <div className="mt-3 ml-[52px]">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--border-line)' }}>
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${sectionProgress.percent}%`,
                    background: 'var(--fg-accent)',
                  }}
                />
              </div>
              <span className="text-[11px] text-[var(--fg-muted)] shrink-0">
                {sectionProgress.viewed} de {sectionProgress.total} cards explorados
              </span>
            </div>
          </div>
        )}
      </div>

      {filteredCards.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-sm text-[var(--fg-muted)]">Nenhum conteúdo neste nível para esta seção.</p>
        </div>
      ) : (
        filteredCards.map((card, i) => {
          const originalIndex = section.cards.indexOf(card)
          return (
            <div key={originalIndex} style={{ animationDelay: `${i * 50}ms`, animation: 'fadeUp 0.4s ease both' }}>
              <ExpandableCard
                card={card}
                isOpen={openCardIndex === originalIndex}
                onToggle={() => {
                  const opening = openCardIndex !== originalIndex
                  onCardToggle(opening ? originalIndex : null)
                  if (opening && onCardOpened) {
                    onCardOpened(activeTab, originalIndex)
                  }
                }}
                viewed={isCardViewed ? isCardViewed(activeTab, originalIndex) : false}
                isFavorite={isFavorite ? isFavorite(activeTab, originalIndex) : false}
                onToggleFavorite={onToggleFavorite ? () => onToggleFavorite(activeTab, originalIndex, card.title) : undefined}
                checklist={checklist}
              />
            </div>
          )
        })
      )}
    </div>
  )
}
