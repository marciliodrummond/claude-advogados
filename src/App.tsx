import { useState, useCallback, useEffect, useRef } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { SearchBar } from './components/SearchBar'
import { TabNav } from './components/TabNav'
import { LevelFilter } from './components/LevelFilter'
import { SectionContent } from './components/SectionContent'
import { Footer } from './components/Footer'
import { LoginGate, useAuth } from './components/LoginGate'
import { OnboardingModal, shouldShowOnboarding } from './components/OnboardingModal'
import { FavoritesPanel } from './components/FavoritesPanel'
import { useTheme } from './hooks/useTheme'
import { useSearch } from './hooks/useSearch'
import { useProgress } from './hooks/useProgress'
import { useFavorites } from './hooks/useFavorites'
import { useChecklist } from './hooks/useChecklist'
import { Heart } from 'lucide-react'

function App() {
  const { theme, toggle } = useTheme()
  const { isAuthenticated, authenticate } = useAuth()
  const { query, setQuery, results, isFocused, handleFocus, handleBlur } = useSearch()
  const { markCardViewed, isCardViewed, getSectionProgress, getGlobalProgress } = useProgress()
  const { favorites, toggleFavorite, isFavorite, removeFavorite, favoritesCount } = useFavorites()
  const checklist = useChecklist()
  const [activeTab, setActiveTab] = useState('primeiros-passos')
  const [openCardIndex, setOpenCardIndex] = useState<number | null>(null)
  const [levelFilter, setLevelFilter] = useState('todos')
  const [showGuide, setShowGuide] = useState(false)
  const [showOnboarding, setShowOnboarding] = useState(false)
  const [showFavorites, setShowFavorites] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  // Show onboarding on first authenticated visit
  useEffect(() => {
    if (isAuthenticated && shouldShowOnboarding()) {
      setShowOnboarding(true)
    }
  }, [isAuthenticated])

  // Show guide content when user scrolls past the Hero section
  useEffect(() => {
    if (showGuide) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setShowGuide(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (heroRef.current) observer.observe(heroRef.current)
    return () => observer.disconnect()
  }, [showGuide])

  const handleStart = useCallback(() => {
    setShowGuide(true)
    setTimeout(() => {
      document.getElementById('guide-content')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }, [])

  const handleSelectResult = useCallback((sectionId: string, cardIndex: number) => {
    setActiveTab(sectionId)
    setOpenCardIndex(cardIndex)
    setShowGuide(true)
    setTimeout(() => {
      document.getElementById('guide-content')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }, [])

  const handleFavoriteNavigate = useCallback((sectionId: string, cardIndex: number) => {
    setActiveTab(sectionId)
    setOpenCardIndex(cardIndex)
    setShowGuide(true)
    setTimeout(() => {
      document.getElementById('guide-content')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }, [])

  if (!isAuthenticated) {
    return <LoginGate onAuthenticated={authenticate} />
  }

  const globalProgress = getGlobalProgress()
  const sectionProgress = getSectionProgress(activeTab)

  return (
    <div className="relative z-10 min-h-screen">
      <Header theme={theme} onToggleTheme={toggle} />

      <main className="max-w-[840px] mx-auto px-4 sm:px-8 pt-14">
        <div ref={heroRef}>
          <Hero onStart={handleStart} />
        </div>

        <div id="guide-content" className={`transition-opacity duration-500 ${showGuide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>

          {/* Global progress bar */}
          {globalProgress.viewed > 0 && (
            <div className="mb-4 flex items-center gap-2">
              <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: 'var(--border-line)' }}>
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${globalProgress.percent}%`,
                    background: 'var(--fg-accent)',
                  }}
                />
              </div>
              <span className="font-mono text-[10px] text-[var(--fg-muted)] shrink-0">
                {globalProgress.viewed}/{globalProgress.total} cards
              </span>
            </div>
          )}

          {/* Search */}
          <div className="mb-6">
            <SearchBar
              query={query}
              onQueryChange={setQuery}
              results={results}
              onSelectResult={handleSelectResult}
              isFocused={isFocused}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          {/* Tabs */}
          <div className="mb-4">
            <TabNav activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          {/* Level Filter + Favorites button */}
          <div className="mb-6 flex items-center justify-between flex-wrap gap-2">
            <LevelFilter active={levelFilter} onChange={setLevelFilter} />
            <button
              onClick={() => setShowFavorites(true)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium transition-all duration-200 cursor-pointer border"
              style={{
                background: favoritesCount > 0 ? 'rgba(244,63,94,0.06)' : 'transparent',
                borderColor: favoritesCount > 0 ? 'rgba(244,63,94,0.2)' : 'var(--border-line)',
                color: favoritesCount > 0 ? '#f43f5e' : 'var(--fg-secondary)',
              }}
              aria-label={`Favoritos (${favoritesCount})`}
            >
              <Heart
                className="w-3.5 h-3.5"
                style={{
                  color: favoritesCount > 0 ? '#f43f5e' : 'var(--fg-muted)',
                  fill: favoritesCount > 0 ? '#f43f5e' : 'none',
                }}
              />
              <span>Favoritos</span>
              {favoritesCount > 0 && (
                <span
                  className="text-[10px] font-bold px-1.5 py-0.5 rounded-full"
                  style={{ background: 'rgba(244,63,94,0.15)', color: '#f43f5e' }}
                >
                  {favoritesCount}
                </span>
              )}
            </button>
          </div>

          {/* Section Content */}
          <SectionContent
            activeTab={activeTab}
            openCardIndex={openCardIndex}
            onCardToggle={setOpenCardIndex}
            levelFilter={levelFilter}
            onCardOpened={markCardViewed}
            isCardViewed={isCardViewed}
            isFavorite={isFavorite}
            onToggleFavorite={toggleFavorite}
            sectionProgress={sectionProgress}
            checklist={checklist}
          />

          <Footer />
        </div>
      </main>

      {/* Onboarding Modal */}
      {showOnboarding && (
        <OnboardingModal onClose={() => setShowOnboarding(false)} />
      )}

      {/* Favorites Panel */}
      {showFavorites && (
        <FavoritesPanel
          favorites={favorites}
          onRemove={removeFavorite}
          onNavigate={handleFavoriteNavigate}
          onClose={() => setShowFavorites(false)}
        />
      )}
    </div>
  )
}

export default App
