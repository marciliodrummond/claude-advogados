import { sections } from '../data/sections'
import { Icon } from './Icons'

interface TabNavProps {
  activeTab: string
  onTabChange: (id: string) => void
}

export function TabNav({ activeTab, onTabChange }: TabNavProps) {
  return (
    <nav className="flex gap-1 overflow-x-auto pb-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => onTabChange(s.id)}
          className={`
            shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border-none whitespace-nowrap
            ${activeTab === s.id
              ? 'bg-[var(--bg-accent-subtle)] text-[var(--fg-accent)] border border-[var(--border-accent)]'
              : 'bg-transparent text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] hover:bg-[var(--bg-surface)]'
            }
          `}
        >
          <Icon name={s.icon} size={14} />
          {s.title}
        </button>
      ))}
    </nav>
  )
}
