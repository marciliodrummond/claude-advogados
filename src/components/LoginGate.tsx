import { useState, useRef, useEffect } from 'react'
import { Shield, KeyRound, AlertCircle, Eye, EyeOff } from 'lucide-react'

const ACCESS_KEY = '6114Adv104Claude'
const STORAGE_KEY = 'si-claude-advogados-auth'

interface LoginGateProps {
  onAuthenticated: () => void
}

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === 'true'
    } catch {
      return false
    }
  })

  const authenticate = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true')
    } catch {
      // sessionStorage indisponível
    }
    setIsAuthenticated(true)
  }

  return { isAuthenticated, authenticate }
}

export function LoginGate({ onAuthenticated }: LoginGateProps) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [shake, setShake] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ACCESS_KEY) {
      onAuthenticated()
    } else {
      setError(true)
      setShake(true)
      setTimeout(() => setShake(false), 600)
      setTimeout(() => setError(false), 3000)
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" style={{ background: 'var(--bg-page)' }}>
      {/* Orbs decorativos */}
      <div className="absolute top-[15%] right-[10%] w-[350px] h-[350px] rounded-full pointer-events-none blur-[100px] animate-[orbFloat_12s_ease-in-out_infinite]" style={{
        background: 'radial-gradient(circle, rgba(226,192,116,0.1) 0%, transparent 70%)',
      }} />
      <div className="absolute bottom-[15%] left-[5%] w-[250px] h-[250px] rounded-full pointer-events-none blur-[100px] animate-[orbFloat_12s_ease-in-out_infinite_-4s]" style={{
        background: 'radial-gradient(circle, rgba(226,192,116,0.07) 0%, transparent 70%)',
      }} />

      <div
        className={`relative w-full max-w-[400px] ${shake ? 'animate-[shakeX_0.5s_ease]' : ''}`}
        style={{ animation: shake ? undefined : 'scaleIn 0.5s ease both' }}
      >
        {/* Logo + Branding */}
        <div className="text-center mb-8" style={{ animation: 'fadeUp 0.6s ease 0.1s both' }}>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5" style={{
            background: 'linear-gradient(135deg, var(--bg-accent), var(--bg-accent-hover))',
            boxShadow: 'var(--gold-glow-md)',
          }}>
            <Shield className="w-8 h-8 text-[var(--fg-on-accent)]" />
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-[-0.03em] text-[var(--fg-primary)]">
            Acesso <span className="text-[var(--fg-accent)]">Exclusivo</span>
          </h1>
          <p className="text-sm text-[var(--fg-secondary)] mt-2 max-w-[300px] mx-auto leading-relaxed">
            Conteúdo reservado para membros do programa Super Inteligênc[IA]
          </p>
        </div>

        {/* Card de Login */}
        <div
          className="rounded-2xl border p-6 sm:p-8"
          style={{
            background: 'var(--bg-elevated)',
            borderColor: 'var(--border-line)',
            boxShadow: 'var(--gold-glow-sm)',
            animation: 'fadeUp 0.6s ease 0.2s both',
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-[var(--fg-secondary)] uppercase tracking-wider font-mono mb-2">
                <KeyRound className="w-3.5 h-3.5 text-[var(--fg-accent)]" />
                Chave de Acesso
              </label>
              <div className="relative">
                <input
                  ref={inputRef}
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(false) }}
                  placeholder="Digite a chave de acesso"
                  className="w-full h-12 px-4 pr-12 rounded-xl border text-sm font-sans outline-none transition-all duration-200 focus:border-[var(--border-focus)] focus:shadow-[var(--gold-glow-sm)]"
                  style={{
                    background: 'var(--bg-surface)',
                    borderColor: error ? '#ef4444' : 'var(--border-line)',
                    color: 'var(--fg-primary)',
                  }}
                  autoComplete="off"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--fg-muted)] hover:text-[var(--fg-secondary)] cursor-pointer bg-transparent border-none transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Mensagem de erro */}
              <div className={`flex items-center gap-1.5 mt-2 transition-all duration-300 ${error ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1 pointer-events-none'}`}>
                <AlertCircle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                <span className="text-xs text-red-400">Chave de acesso incorreta. Tente novamente.</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-12 rounded-xl text-sm font-semibold cursor-pointer border-none transition-all duration-200 hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
              style={{
                background: 'linear-gradient(135deg, var(--bg-accent), var(--bg-accent-hover))',
                color: 'var(--fg-on-accent)',
                boxShadow: 'var(--gold-glow-sm)',
              }}
            >
              <Shield className="w-4 h-4" />
              Acessar Guia
            </button>
          </form>
        </div>

        {/* Footer discreto */}
        <p className="text-center text-[10px] text-[var(--fg-muted)] mt-5" style={{ animation: 'fadeIn 0.8s ease 0.5s both' }}>
          Super Inteligênc[IA] · Acesso exclusivo para membros
        </p>
      </div>
    </div>
  )
}
