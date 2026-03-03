import { useState, useMemo, useCallback } from 'react'
import { sections } from '../data/sections'

export interface SearchResult {
  sectionId: string
  sectionTitle: string
  sectionIcon: string
  cardTitle: string
  cardSubtitle: string
  cardIndex: number
  cardLevel: string
  cardIcon: string
  snippet: string
  score: number
  matchType: 'exact' | 'synonym' | 'intent' | 'fuzzy'
}

export interface Suggestion {
  query: string
  label: string
  icon: string
}

// ── Popular suggestions shown on focus ──────────────────────

export const popularSuggestions: Suggestion[] = [
  { query: 'petição', label: 'Petições e Peças', icon: 'file-text' },
  { query: 'contrato', label: 'Análise de Contratos', icon: 'file-check' },
  { query: 'como começar', label: 'Primeiros Passos', icon: 'rocket' },
  { query: 'jurisprudência', label: 'Pesquisa Jurídica', icon: 'search' },
  { query: 'prazo', label: 'Controle de Prazos', icon: 'clock' },
  { query: 'plugin', label: 'Plugins do Claude', icon: 'plug' },
  { query: 'cowork', label: 'Claude Cowork', icon: 'handshake' },
  { query: 'economizar tokens', label: 'Otimização de Uso', icon: 'trending-up' },
]

// ── Normalization ───────────────────────────────────────────

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

// ── Fuzzy matching (Levenshtein distance) ───────────────────

function levenshtein(a: string, b: string): number {
  if (a.length === 0) return b.length
  if (b.length === 0) return a.length
  const m: number[][] = []
  for (let i = 0; i <= b.length; i++) m[i] = [i]
  for (let j = 0; j <= a.length; j++) m[0][j] = j
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      m[i][j] = Math.min(
        m[i - 1][j] + 1,
        m[i][j - 1] + 1,
        m[i - 1][j - 1] + (b[i - 1] === a[j - 1] ? 0 : 1)
      )
    }
  }
  return m[b.length][a.length]
}

function fuzzyMatchScore(query: string, target: string): number {
  if (query.length < 4) return 0
  const targetWords = target.split(' ')
  let bestScore = 0
  for (const word of targetWords) {
    if (word.length < 3) continue
    const dist = levenshtein(query, word)
    const maxLen = Math.max(query.length, word.length)
    if (dist <= Math.floor(maxLen * 0.3) && dist > 0) {
      bestScore = Math.max(bestScore, 1 - dist / maxLen)
    }
  }
  return bestScore
}

// ── Synonym map (expanded for 103+ cards) ───────────────────

const synonyms: Record<string, string[]> = {
  // Custos e tokens
  'economizar': ['token', 'otimizar', 'economia', 'gastar menos', 'uso maximo', 'limite', 'gratuitas'],
  'barato': ['token', 'economia', 'custo', 'preco', 'plano'],
  'gratis': ['gratuito', 'free', 'custo', 'economia'],
  'gasto': ['token', 'consumo', 'limite', 'uso'],
  'limite': ['token', 'limite', 'cota', 'resetar', 'plano'],
  'caro': ['token', 'plano', 'preco', 'custo', 'max'],
  'token': ['token', 'tokens', 'limite', 'economia', 'otimizar', 'uso maximo', 'gratuitas'],
  'tokens': ['token', 'tokens', 'limite', 'economia', 'otimizar', 'uso maximo', 'gratuitas'],

  // Primeiros passos
  'comecar': ['primeiros passos', 'instalar', 'configurar', 'inicio', 'basico', 'iniciante'],
  'inicio': ['primeiros passos', 'instalar', 'configurar', 'comecar'],
  'instalar': ['instalacao', 'download', 'baixar', 'configurar', 'desktop'],
  'baixar': ['download', 'instalacao', 'instalar', 'desktop'],
  'configurar': ['configuracao', 'personalizar', 'setup', 'instrucoes globais'],

  // Ferramentas jurídicas
  'contrato': ['contrato', 'clausula', 'review contract', 'analise', 'revisao', 'nda', 'due diligence'],
  'peticao': ['peticao', 'peca', 'processual', 'trabalhista', 'inicial', 'visual law'],
  'prazo': ['prazo', 'deadline', 'vencimento', 'controle', 'calendario', 'prazos'],
  'pesquisa': ['pesquisa', 'jurisprudencia', 'jurimetria', 'busca', 'search', 'precedente'],
  'jurisprudencia': ['jurisprudencia', 'precedente', 'tribunal', 'stj', 'stf', 'vinculante', 'sumula', 'triagem'],
  'precedente': ['jurisprudencia', 'precedente', 'vinculante', 'orientadora', 'sumula'],
  'parecer': ['parecer', 'opiniao', 'analise juridica', 'viabilidade'],
  'audiencia': ['audiencia', 'preparacao', 'testemunha', 'depoimento', 'conciliacao'],
  'acordo': ['acordo', 'negociacao', 'mediacao', 'conciliacao', 'batna', 'zopa'],

  // Peças processuais estratégicas
  'replica': ['replica', 'contestacao', 'diagnostico', 'desconstrucao', 'tatico'],
  'contestacao': ['contestacao', 'replica', 'defesa', 'impugnacao'],
  'contrarrazoes': ['contrarrazoes', 'recurso', 'apelacao', 'agravo', 'sentenca', 'blindar'],
  'recurso': ['recurso', 'apelacao', 'agravo', 'resp', 'contrarrazoes', 'recursal'],
  'apelacao': ['apelacao', 'recurso', 'contrarrazoes', 'sentenca', 'tribunal'],
  'sentenca': ['sentenca', 'contrarrazoes', 'recurso', 'decisao'],

  // Áreas do direito
  'trabalhista': ['trabalhista', 'clt', 'tst', 'rescisao', 'reclamatoria'],
  'consumidor': ['consumidor', 'cdc', 'defesa', 'relacao de consumo'],
  'previdenciario': ['previdenciario', 'inss', 'aposentadoria', 'beneficio', 'tnu'],
  'empresarial': ['empresarial', 'societario', 'contrato', 'due diligence', 'm a'],
  'imobiliario': ['imobiliario', 'usucapiao', 'locacao', 'imovel'],
  'tributario': ['tributario', 'imposto', 'carf', 'fiscal', 'tributaria'],
  'familia': ['familia', 'divorcio', 'guarda', 'alimentos', 'pensao'],

  // Ecossistema Claude
  'ia': ['claude', 'inteligencia artificial', 'ai', 'modelo'],
  'chatgpt': ['claude', 'chatgpt', 'gpt', 'comparacao', 'alternativa', 'openai', 'gemini'],
  'gpt': ['claude', 'chatgpt', 'comparacao', 'alternativa'],
  'gemini': ['gemini', 'google', 'alternativa', 'comparacao'],
  'assistente': ['claude', 'cowork', 'chat', 'agente'],
  'automatizar': ['automacao', 'automatizar', 'chrome', 'workflow', 'agendar', 'recorrente'],
  'automacao': ['automacao', 'automatizar', 'chrome', 'workflow', 'agendar', 'recorrente'],
  'navegar': ['chrome', 'navegador', 'extensao', 'web', 'site'],

  // Ferramentas office
  'planilha': ['excel', 'spreadsheet', 'xlsx', 'tabela', 'dados'],
  'excel': ['excel', 'planilha', 'spreadsheet', 'xlsx', 'formatacao condicional', 'powerpoint'],
  'powerpoint': ['powerpoint', 'pptx', 'apresentacao', 'slides', 'sustentacao'],
  'word': ['word', 'docx', 'documento', 'formatacao'],
  'slides': ['powerpoint', 'apresentacao', 'slides', 'sustentacao oral'],
  'apresentacao': ['powerpoint', 'slides', 'apresentacao', 'sustentacao'],

  // Comunicação
  'email': ['gmail', 'email', 'e mail', 'correio', 'comunicacao'],
  'gmail': ['gmail', 'email', 'e mail', 'conector'],
  'drive': ['google drive', 'drive', 'documentos', 'conector', 'nuvem'],

  // Componentes Claude
  'plugin': ['plugin', 'plugins', 'pacote', 'legal', 'productivity', 'contencioso'],
  'skill': ['skill', 'skills', 'habilidade', 'manual', 'instrucao', 'personalizar'],
  'conector': ['conector', 'conectores', 'mcp', 'integracao', 'conexao'],
  'mcp': ['mcp', 'model context protocol', 'conector', 'servidor', 'api', 'datajud'],
  'memoria': ['memoria', 'lembrar', 'contexto', 'persistente', 'importar'],
  'projeto': ['projeto', 'pasta', 'knowledge base', 'contexto'],
  'comando': ['slash command', 'comando', 'atalho', 'barra'],
  'estilo': ['estilo', 'estilos', 'escrita', 'tom', 'formal', 'conciso', 'style'],
  'artefato': ['artefato', 'artefatos', 'criacao', 'visual', 'diagrama', 'grafico'],

  // Modelos
  'opus': ['opus', 'modelo', 'sonnet', 'haiku', 'qual modelo'],
  'sonnet': ['sonnet', 'modelo', 'opus', 'haiku', 'qual modelo'],
  'haiku': ['haiku', 'modelo', 'opus', 'sonnet', 'qual modelo', 'rapido', 'barato'],
  'qual modelo': ['opus', 'sonnet', 'haiku', 'modelo', 'escolher'],

  // Ética e regulamentação
  'etica': ['etica', 'oab', 'cnj', 'regulamentacao', 'resolucao', 'regras'],
  'oab': ['oab', 'etica', 'regulamentacao', 'recomendacao', 'disciplinar'],
  'cnj': ['cnj', 'resolucao 615', 'regulamentacao', 'judiciario'],
  'lgpd': ['lgpd', 'protecao de dados', 'privacidade', 'seguranca', 'sigilo'],
  'sigilo': ['sigilo', 'confidencialidade', 'seguranca', 'enterprise', 'team', 'privilegio'],
  'seguranca': ['seguranca', 'sigilo', 'lgpd', 'dados', 'privacidade', 'protecao'],

  // Negociação e estratégia
  'negociacao': ['negociacao', 'mediacao', 'acordo', 'conciliacao', 'batna', 'zopa'],
  'mediacao': ['mediacao', 'negociacao', 'acordo', 'conciliacao'],
  'conciliacao': ['conciliacao', 'acordo', 'mediacao', 'negociacao', 'audiencia'],
  'estrategia': ['estrategia', 'caso', 'tese', 'risco', 'cenario', 'viabilidade', 'tatico'],
  'viabilidade': ['viabilidade', 'estrategia', 'risco', 'parecer', 'analise'],

  // Implementação
  'implementar': ['implementar', 'escritorio', 'adocao', 'roadmap', 'fase'],
  'roadmap': ['roadmap', 'implementar', 'escritorio', 'fase', 'adocao', 'plano'],
  'escritorio': ['escritorio', 'implementar', 'equipe', 'roadmap', 'gestao'],

  // Visual Law
  'visual law': ['visual law', 'legal design', 'quadro resumo', 'timeline', 'tabela', 'visual'],
  'legal design': ['legal design', 'visual law', 'visual', 'formatacao'],

  // Comparação e análise
  'comparar': ['comparacao', 'multi documentos', 'diferenca', 'clausula', 'lado a lado'],
  'comparacao': ['comparacao', 'multi documentos', 'diferenca', 'comparar', 'versus'],

  // Outras IAs
  'lovable': ['lovable', 'tokens', 'economia', 'alternativa', 'gratuitas'],
  'perplexity': ['perplexity', 'pesquisa', 'alternativa', 'tokens', 'gratuitas'],
  'deepseek': ['deepseek', 'alternativa', 'tokens', 'economia', 'gratuitas'],
  'notebooklm': ['notebooklm', 'notebook', 'resumir', 'google', 'gratuitas', 'pre processar'],
  'ai studio': ['google ai studio', 'gemini', 'testar', 'prompt', 'gratuitas'],
  'ilovepdf': ['ilovepdf', 'pdf', 'converter', 'txt', 'gratuitas'],
  'gratuita': ['gratuitas', 'gratis', 'free', 'notebooklm', 'perplexity', 'deepseek', 'ilovepdf'],
  'gratuitas': ['gratuitas', 'gratis', 'free', 'notebooklm', 'perplexity', 'deepseek', 'ilovepdf'],

  // DataJud e APIs
  'datajud': ['datajud', 'cnj', 'api', 'processo', 'consulta', 'mcp'],
  'pje': ['pje', 'processo eletronico', 'download', 'comunica', 'mni'],
  'processo': ['processo', 'processual', 'numero', 'consulta', 'datajud', 'acompanhamento'],
}

// ── Intent map (expanded for 103 cards) ─────────────────────

const intentMap: Record<string, string[]> = {
  // Primeiros passos
  'como comecar': ['O que e o Claude', 'Instalacao do Claude Desktop', 'Escolhendo seu Plano', 'Glossario'],
  'quanto custa': ['Escolhendo seu Plano'],
  'qual plano': ['Escolhendo seu Plano', 'Sigilo Profissional'],
  'como instalar': ['Instalacao do Claude Desktop', 'Claude in Chrome'],
  'como usar': ['Chat vs Cowork', 'O que e o Cowork', 'Personalizar'],

  // Modelos
  'qual modelo': ['Qual Modelo Usar', 'Opus', 'Sonnet', 'Haiku'],
  'opus ou sonnet': ['Qual Modelo Usar'],
  'modelo mais rapido': ['Qual Modelo Usar', 'Haiku'],
  'modelo mais inteligente': ['Qual Modelo Usar', 'Opus'],

  // Comparações
  'chatgpt ou claude': ['Claude vs ChatGPT vs Gemini'],
  'melhor ia': ['Claude vs ChatGPT vs Gemini'],
  'qual ia usar': ['Claude vs ChatGPT vs Gemini'],
  'comparar ia': ['Claude vs ChatGPT vs Gemini'],
  'claude ou gemini': ['Claude vs ChatGPT vs Gemini'],

  // Funcionalidades
  'como personalizar': ['Personalizar', 'Estilos de Escrita'],
  'estilo escrita': ['Estilos de Escrita Juridica'],
  'como lembrar': ['Memoria Inteligente'],
  'memoria': ['Memoria Inteligente', 'Memoria'],
  'importar chatgpt': ['Memoria Inteligente'],

  // Jurídico
  'revisar contrato': ['Analise de Contratos', 'Plugin Legal', 'Comparacao Multi documentos'],
  'fazer peticao': ['Peticoes', 'Visual Law', 'Criando Skills'],
  'pesquisar jurisprudencia': ['Pesquisa Juridica', 'Jurisprudencia Estrategica', 'Chrome'],
  'controle prazo': ['Controle de Prazos', 'Calendario', 'Automacao Recorrente'],
  'parecer': ['Parecer Juridico'],
  'relatorio': ['Relatorio para Cliente'],
  'due diligence': ['Due Diligence', 'Analise de Contratos', 'Comparacao Multi documentos'],

  // Peças estratégicas
  'fazer replica': ['Skill de Replica Estrategica', 'Plugin Contencioso'],
  'contrarrazoes': ['Skill de Contrarrazoes Recursais', 'Plugin Contencioso'],
  'recurso': ['Skill de Contrarrazoes Recursais', 'Contrarrazoes'],
  'estrategia caso': ['Skill de Estrategia de Caso'],
  'analisar caso': ['Skill de Estrategia de Caso'],
  'viabilidade': ['Skill de Estrategia de Caso'],

  // Negociação
  'preparar negociacao': ['Preparacao para Negociacao'],
  'mediacao': ['Preparacao para Negociacao', 'Mediacao'],
  'acordo': ['Preparacao para Negociacao', 'Mediacao'],
  'batna': ['Preparacao para Negociacao'],

  // Office
  'criar planilha': ['Excel e PowerPoint Juridico'],
  'criar apresentacao': ['Excel e PowerPoint Juridico'],
  'excel': ['Excel e PowerPoint Juridico', 'Calculos Juridicos'],
  'powerpoint': ['Excel e PowerPoint Juridico'],
  'comparar documentos': ['Comparacao Multi documentos'],
  'comparar contratos': ['Comparacao Multi documentos', 'Analise de Contratos'],

  // Tokens e economia
  'economizar token': ['Economize com IAs Gratuitas', 'Entendendo Tokens', 'Pre processe Documentos'],
  'gastar menos': ['Economize com IAs Gratuitas', 'Entendendo Tokens', 'Pre processe Documentos'],
  'uso maximo': ['Economize com IAs Gratuitas', 'Tecnicas Expert'],
  'outra ia': ['Economize com IAs Gratuitas', 'Pre processe Documentos'],
  'ferramenta gratuita': ['Economize com IAs Gratuitas', 'Pre processe Documentos'],
  'pre processar': ['Pre processe Documentos', 'Economize com IAs Gratuitas'],

  // Automação
  'agendar tarefa': ['Automacao Recorrente'],
  'tarefa recorrente': ['Automacao Recorrente'],
  'automatizar escritorio': ['Automacao de Escritorio', 'Automacao Recorrente'],
  'automacao semanal': ['Automacao Recorrente'],

  // Ética e regulamentação
  'etica ia': ['Etica e IA na Advocacia'],
  'regras oab': ['Etica e IA na Advocacia'],
  'cnj 615': ['Etica e IA na Advocacia'],
  'sigilo': ['Sigilo Profissional', 'LGPD'],
  'dados sensiveis': ['Sigilo Profissional', 'Protecao de Dados', 'LGPD'],
  'confidencialidade': ['Sigilo Profissional'],
  'plano seguro': ['Sigilo Profissional'],

  // Implementação
  'implementar ia': ['Roadmap Implementando IA'],
  'adotar ia escritorio': ['Roadmap Implementando IA'],
  'comecar escritorio': ['Roadmap Implementando IA'],

  // Componentes
  'o que e cowork': ['O que e o Cowork', 'Chat vs Cowork'],
  'o que e plugin': ['O que sao Plugins', 'Plugins'],
  'o que e skill': ['O que sao Skills', 'Skills'],
  'o que e conector': ['MCP e Conectores', 'Google Drive', 'Gmail'],
  'o que e mcp': ['O que e MCP', 'MCP e Conectores'],
  'como conectar': ['Google Drive', 'Gmail', 'Conectores'],
  'chrome': ['O que e o Claude in Chrome', 'Pesquisa', 'Automacao'],
  'criar pasta': ['Organizando suas Pastas', 'Projetos'],
  'organizar': ['Organizando suas Pastas', 'Projetos'],
  'sub agente': ['Sub agentes'],
  'visual law': ['Visual Law', 'Skill de Visual Law', 'MCP Visual Law'],
  'apresentacao': ['Excel e PowerPoint', 'Slides'],
}

// ── Multi-field weighted scoring ────────────────────────────

interface FieldScore {
  text: string
  weight: number
}

function buildSearchFields(card: typeof sections[0]['cards'][0]): FieldScore[] {
  return [
    { text: normalize(card.title), weight: 25 },
    { text: normalize(card.subtitle || ''), weight: 15 },
    { text: normalize(card.analogy?.text || ''), weight: 8 },
    { text: normalize(card.content), weight: 4 },
    { text: normalize((card.tips || []).join(' ')), weight: 3 },
    { text: normalize((card.steps || []).join(' ')), weight: 3 },
    { text: normalize(card.prompt || ''), weight: 5 },
    { text: normalize((card.commandList || []).map(c => `${c.command} ${c.description}`).join(' ')), weight: 7 },
    { text: normalize((card.flowSteps || []).map(f => `${f.title} ${f.description}`).join(' ')), weight: 4 },
    { text: normalize((card.elementGrid || []).map(e => `${e.name} ${e.description} ${e.whenToUse || ''}`).join(' ')), weight: 5 },
    { text: normalize((card.links || []).map(l => l.label).join(' ')), weight: 2 },
    { text: normalize((card.checklist || []).map(g => `${g.title} ${g.items.join(' ')}`).join(' ')), weight: 3 },
    { text: normalize(card.relationship?.title || ''), weight: 3 },
    { text: normalize((card.relationship?.items || []).map(r => `${r.label} ${r.value} ${r.sub || ''}`).join(' ')), weight: 3 },
    { text: normalize((card.refTable || []).map(r => `${r.element} ${r.analogy}`).join(' ')), weight: 3 },
  ]
}

// ── Synonym expansion ───────────────────────────────────────

function getExpandedTerms(query: string): { original: string[], expanded: string[] } {
  const normalized = normalize(query)
  const words = normalized.split(' ').filter(w => w.length >= 2)
  const original = [normalized, ...words]
  const expanded: string[] = []

  for (const word of words) {
    for (const [key, alts] of Object.entries(synonyms)) {
      const normKey = normalize(key)
      if (word === normKey || normKey.startsWith(word) || word.startsWith(normKey)) {
        expanded.push(...alts.map(normalize))
      }
    }
  }

  // Also check the full query as a synonym key
  for (const [key, alts] of Object.entries(synonyms)) {
    const normKey = normalize(key)
    if (normalized.includes(normKey) || normKey.includes(normalized)) {
      expanded.push(...alts.map(normalize))
    }
  }

  return {
    original: [...new Set(original)],
    expanded: [...new Set(expanded)],
  }
}

// ── Intent detection ────────────────────────────────────────

function getIntentBoosts(query: string): string[] {
  const normalized = normalize(query)
  const boosts: string[] = []

  for (const [intent, titles] of Object.entries(intentMap)) {
    const normIntent = normalize(intent)
    const intentWords = normIntent.split(' ')
    const queryWords = normalized.split(' ')

    // Check if query matches intent (50%+ word overlap)
    const matchCount = intentWords.filter(iw =>
      queryWords.some(qw => qw.includes(iw) || iw.includes(qw))
    ).length

    if (matchCount >= Math.ceil(intentWords.length * 0.5)) {
      boosts.push(...titles.map(normalize))
    }
  }

  return [...new Set(boosts)]
}

// ── Snippet extraction with context ─────────────────────────

function extractSnippet(fields: FieldScore[], queryNorm: string, card: typeof sections[0]['cards'][0]): string {
  // Try to find match in content fields for a relevant snippet
  const allText = fields.map(f => f.text).join(' ')
  const idx = allText.indexOf(queryNorm)

  if (idx >= 0) {
    const start = Math.max(0, idx - 30)
    const end = Math.min(allText.length, idx + queryNorm.length + 70)
    const raw = allText.slice(start, end).trim()
    return (start > 0 ? '...' : '') + raw + (end < allText.length ? '...' : '')
  }

  // Try individual query words
  const words = queryNorm.split(' ').filter(w => w.length >= 3)
  for (const word of words) {
    const wIdx = allText.indexOf(word)
    if (wIdx >= 0) {
      const start = Math.max(0, wIdx - 25)
      const end = Math.min(allText.length, wIdx + word.length + 75)
      const raw = allText.slice(start, end).trim()
      return (start > 0 ? '...' : '') + raw + (end < allText.length ? '...' : '')
    }
  }

  return card.subtitle || card.content.slice(0, 100).trim() + '...'
}

// ── Main scoring function ───────────────────────────────────

function scoreCard(
  fields: FieldScore[],
  original: string[],
  expanded: string[],
  intentBoosts: string[],
  queryNorm: string,
): { score: number; matchType: SearchResult['matchType'] } {
  let score = 0
  let matchType: SearchResult['matchType'] = 'exact'
  let hasExact = false
  let hasSynonym = false
  let hasIntent = false
  let hasFuzzy = false

  const titleField = fields[0]
  const subtitleField = fields[1]

  // 1. Original terms — direct matches (highest value)
  for (const term of original) {
    for (const field of fields) {
      if (!field.text) continue
      // Exact word boundary match (more precise)
      if (field.text.includes(term)) {
        score += field.weight
        hasExact = true
        // Bonus for exact word match at start of title
        if (field === titleField && field.text.startsWith(term)) {
          score += 10
        }
      }
    }
  }

  // 2. Phrase match bonus (multi-word query matched in sequence)
  if (queryNorm.includes(' ') && queryNorm.length >= 5) {
    if (titleField.text.includes(queryNorm)) {
      score += 30
      hasExact = true
    } else if (subtitleField.text.includes(queryNorm)) {
      score += 20
      hasExact = true
    }
  }

  // 3. Expanded terms — synonym matches (medium value)
  for (const term of expanded) {
    if (titleField.text.includes(term)) {
      score += 8
      hasSynonym = true
    }
    if (subtitleField.text.includes(term)) {
      score += 5
      hasSynonym = true
    }
    // Only check content for expanded terms if there's no title match
    if (!hasExact && !hasSynonym) {
      for (const field of fields.slice(2)) {
        if (field.text && field.text.includes(term)) {
          score += Math.min(field.weight, 3)
          hasSynonym = true
          break
        }
      }
    }
  }

  // 4. Intent boost
  for (const boost of intentBoosts) {
    if (titleField.text.includes(boost) || subtitleField.text.includes(boost)) {
      score += 15
      hasIntent = true
    }
  }

  // 5. Fuzzy matching on title (typo tolerance)
  if (score === 0) {
    for (const term of original) {
      const fuzzyScore = fuzzyMatchScore(term, titleField.text)
      if (fuzzyScore > 0) {
        score += Math.round(fuzzyScore * 12)
        hasFuzzy = true
      }
      const fuzzySubScore = fuzzyMatchScore(term, subtitleField.text)
      if (fuzzySubScore > 0) {
        score += Math.round(fuzzySubScore * 6)
        hasFuzzy = true
      }
    }
  }

  // 6. Multi-word coverage bonus
  if (original.length > 1) {
    const words = queryNorm.split(' ').filter(w => w.length >= 2)
    const allFieldText = fields.map(f => f.text).join(' ')
    const matchedWords = words.filter(w => allFieldText.includes(w))
    if (matchedWords.length > 1) {
      score += matchedWords.length * 4 // Bonus per matched word
    }
  }

  // Determine primary match type
  if (hasExact) matchType = 'exact'
  else if (hasIntent) matchType = 'intent'
  else if (hasSynonym) matchType = 'synonym'
  else if (hasFuzzy) matchType = 'fuzzy'

  return { score, matchType }
}

// ── Related content suggestions ─────────────────────────────

const relatedMap: Record<string, string[]> = {
  'Análise de Contratos': ['Plugin Legal', 'Comparação Multi-documentos', 'Due Diligence'],
  'Petições e Peças Processuais': ['Skill de Visual Law', 'Skill de Estratégia de Caso'],
  'Skill de Réplica Estratégica': ['Skill de Contrarrazões Recursais', 'Skill de Jurisprudência Estratégica', 'Plugin Contencioso'],
  'Skill de Contrarrazões Recursais': ['Skill de Réplica Estratégica', 'Skill de Jurisprudência Estratégica'],
  'Skill de Jurisprudência Estratégica': ['Skill de Réplica Estratégica', 'Pesquisa Jurídica Avançada'],
  'Skill de Estratégia de Caso': ['Preparação para Negociação', 'Parecer Jurídico'],
  'Preparação para Negociação e Mediação': ['Skill de Estratégia de Caso'],
  'Estilos de Escrita Jurídica': ['Personalizar', 'Skill de Visual Law'],
  'Memória Inteligente': ['Personalizar', 'Projetos'],
  'Excel e PowerPoint Jurídico': ['Cálculos Jurídicos', 'Relatório para Cliente'],
  'Ética e IA na Advocacia: OAB e CNJ': ['Sigilo Profissional', 'Proteção de Dados e LGPD'],
  'Sigilo Profissional: Qual Plano Escolher?': ['Ética e IA na Advocacia', 'Escolhendo seu Plano'],
  'Roadmap: Implementando IA no Escritório': ['Automação Recorrente', 'Automação de Escritório'],
}

export function getRelatedCards(cardTitle: string): string[] {
  return relatedMap[cardTitle] || []
}

// ── Main hook ───────────────────────────────────────────────

export function useSearch() {
  const [query, setQuery] = useState('')
  const [isFocused, setIsFocused] = useState(false)

  // Pre-build search fields for all cards (memoized)
  const searchIndex = useMemo(() => {
    return sections.map(section => ({
      section,
      cards: section.cards.map((card, idx) => ({
        card,
        index: idx,
        fields: buildSearchFields(card),
      })),
    }))
  }, [])

  const results = useMemo<SearchResult[]>(() => {
    if (query.length < 2) return []

    const queryNorm = normalize(query)
    const { original, expanded } = getExpandedTerms(query)
    const intentBoosts = getIntentBoosts(query)
    const found: SearchResult[] = []

    for (const { section, cards } of searchIndex) {
      for (const { card, index, fields } of cards) {
        const { score, matchType } = scoreCard(fields, original, expanded, intentBoosts, queryNorm)

        if (score > 0) {
          found.push({
            sectionId: section.id,
            sectionTitle: section.title,
            sectionIcon: section.icon,
            cardTitle: card.title,
            cardSubtitle: card.subtitle || '',
            cardIndex: index,
            cardLevel: card.level,
            cardIcon: card.icon,
            snippet: extractSnippet(fields, queryNorm, card),
            score,
            matchType,
          })
        }
      }
    }

    found.sort((a, b) => b.score - a.score)
    return found.slice(0, 15)
  }, [query, searchIndex])

  const handleFocus = useCallback(() => setIsFocused(true), [])
  const handleBlur = useCallback(() => {
    // Delay to allow click on results
    setTimeout(() => setIsFocused(false), 200)
  }, [])

  return { query, setQuery, results, isFocused, handleFocus, handleBlur }
}
