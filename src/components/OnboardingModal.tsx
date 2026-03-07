import { useState, useEffect, useCallback } from 'react'
import { BookOpen, Navigation, Lightbulb, X } from 'lucide-react'

const STORAGE_KEY = 'si-claude-advogados-onboarding-done'

export function shouldShowOnboarding(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) !== 'true'
  } catch {
    return false
  }
}

function markOnboardingDone() {
  try {
    localStorage.setItem(STORAGE_KEY, 'true')
  } catch {
    // localStorage indisponível
  }
}

const steps = [
  {
    icon: BookOpen,
    title: 'Bem-vindo ao Claude para Advogados!',
    description: 'Explore 10 seções com 109 tutoriais interativos, 29 prompts prontos e Skills exclusivas para dominar o Claude na advocacia.',
  },
  {
    icon: Navigation,
    title: 'Navegação',
    description: 'Use as abas para alternar entre seções, filtre por nível de experiência e busque qualquer conteúdo com a barra de pesquisa inteligente.',
  },
  {
    icon: Lightbulb,
    title: 'Dica Pro',
    description: 'Favorite os cards mais úteis clicando no coração, acompanhe seu progresso pela barra no topo e use os checklists interativos que salvam automaticamente.',
  },
]

interface OnboardingModalProps {
  onClose: () => void
}

export function OnboardingModal({ onClose }: OnboardingModalProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  const handleClose = useCallback(() => {
    markOnboardingDone()
    onClose()
  }, [onClose])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [handleClose])

  const goTo = useCallback((step: number, dir: 'next' | 'prev') => {
    if (animating) return
    setDirection(dir)
    setAnimating(true)
    setTimeout(() => {
      setCurrentStep(step)
      setAnimating(false)
    }, 200)
  }, [animating])

  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      handleClose()
    } else {
      goTo(currentStep + 1, 'next')
    }
  }

  const step = steps[currentStep]
  const StepIcon = step.icon

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border overflow-hidden"
        style={{
          background: 'var(--bg-card)',
          borderColor: 'var(--border-line)',
          boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
          animation: 'onboardingScaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 p-1.5 rounded-lg text-[var(--fg-muted)] hover:text-[var(--fg-primary)] hover:bg-[var(--bg-surface)] transition-colors cursor-pointer bg-transparent border-none z-10"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="px-8 pt-10 pb-6">
          <div
            className={animating ? (direction === 'next' ? 'onboarding-exit-left' : 'onboarding-exit-right') : 'onboarding-enter'}
            style={{
              animation: animating
                ? `onboardingSlideOut${direction === 'next' ? 'Left' : 'Right'} 0.2s ease both`
                : `onboardingSlideIn${direction === 'next' ? 'Right' : 'Left'} 0.25s ease both`,
            }}
          >
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: 'var(--bg-accent-subtle)',
                  border: '2px solid var(--border-accent)',
                }}
              >
                <StepIcon className="w-7 h-7 text-[var(--fg-accent)]" />
              </div>
            </div>

            {/* Text */}
            <h2 className="text-xl font-bold text-[var(--fg-primary)] text-center mb-3 tracking-tight">
              {step.title}
            </h2>
            <p className="text-sm text-[var(--fg-secondary)] text-center leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-8 pb-8 pt-2">
          {/* Skip */}
          <button
            onClick={handleClose}
            className="text-xs text-[var(--fg-muted)] hover:text-[var(--fg-secondary)] cursor-pointer bg-transparent border-none transition-colors px-2 py-1"
          >
            Pular
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {steps.map((_, i) => (
              <div
                key={i}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === currentStep ? 20 : 6,
                  background: i === currentStep ? 'var(--fg-accent)' : 'var(--border-line)',
                }}
              />
            ))}
          </div>

          {/* Next / Finish */}
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-lg text-xs font-semibold cursor-pointer border-none transition-all duration-200 hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, var(--bg-accent), var(--bg-accent-hover))',
              color: 'var(--fg-on-accent)',
            }}
          >
            {currentStep === steps.length - 1 ? 'Concluir' : 'Próximo'}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes onboardingScaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes onboardingSlideOutLeft {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(-30px); opacity: 0; }
        }
        @keyframes onboardingSlideOutRight {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(30px); opacity: 0; }
        }
        @keyframes onboardingSlideInRight {
          from { transform: translateX(30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes onboardingSlideInLeft {
          from { transform: translateX(-30px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
