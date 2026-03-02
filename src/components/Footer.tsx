export function Footer() {
  return (
    <footer className="mt-16 pb-8 pt-8 border-t" style={{ borderColor: 'var(--border-line)' }}>
      <div className="text-center space-y-2">
        <p className="text-xs text-[var(--fg-muted)]">
          Guia criado por <span className="text-[var(--fg-accent)] font-semibold">Super Inteligênc[IA]</span> · Marcílio Drummond
        </p>
        <p className="text-[10px] text-[var(--fg-muted)]">
          Todo resultado gerado pelo Claude deve ser revisado por um advogado habilitado. A responsabilidade ética e legal é sempre do profissional.
        </p>
        <p className="text-[10px] text-[var(--fg-muted)]">
          @marcilio.drummond · Versão Março/2026
        </p>
      </div>
    </footer>
  )
}
