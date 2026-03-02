import { Search, X } from 'lucide-react'
import type { SearchResult } from '../hooks/useSearch'

interface SearchBarProps {
  query: string
  onQueryChange: (q: string) => void
  results: SearchResult[]
  onSelectResult: (sectionId: string, cardIndex: number) => void
}

export function SearchBar({ query, onQueryChange, results, onSelectResult }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--fg-muted)]" />
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Buscar no guia... (ex: contrato, plugin, cowork)"
          className="w-full h-10 pl-10 pr-10 rounded-xl border text-sm font-sans outline-none transition-all duration-200 focus:border-[var(--border-focus)] focus:shadow-[var(--gold-glow-sm)]"
          style={{
            background: 'var(--bg-surface)',
            borderColor: 'var(--border-line)',
            color: 'var(--fg-primary)',
          }}
        />
        {query && (
          <button
            onClick={() => onQueryChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--fg-muted)] hover:text-[var(--fg-primary)] cursor-pointer bg-transparent border-none"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {results.length > 0 && (
        <div
          className="absolute top-12 left-0 right-0 rounded-xl border overflow-hidden shadow-lg z-50 max-h-80 overflow-y-auto"
          style={{
            background: 'var(--bg-elevated)',
            borderColor: 'var(--border-line)',
          }}
        >
          {results.map((r, i) => (
            <button
              key={i}
              onClick={() => {
                onSelectResult(r.sectionId, r.cardIndex)
                onQueryChange('')
              }}
              className="w-full text-left px-4 py-3 border-b transition-colors duration-150 hover:bg-[var(--bg-accent-subtle)] cursor-pointer bg-transparent border-none"
              style={{ borderColor: 'var(--border-line)' }}
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-[var(--fg-accent)]">{r.sectionTitle}</span>
                <span className="text-[var(--fg-muted)]">/</span>
                <span className="text-sm font-medium text-[var(--fg-primary)]">{r.cardTitle}</span>
              </div>
              <p className="text-xs text-[var(--fg-muted)] line-clamp-1">{r.snippet}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
