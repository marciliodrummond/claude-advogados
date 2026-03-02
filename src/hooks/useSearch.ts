import { useState, useMemo } from 'react'
import { sections } from '../data/sections'

export interface SearchResult {
  sectionId: string
  sectionTitle: string
  cardTitle: string
  cardIndex: number
  snippet: string
  score: number
}

// Synonym map: user might type any of these → we also search for the alternatives
const synonyms: Record<string, string[]> = {
  // Português coloquial → termos técnicos
  'economizar': ['token', 'otimizar', 'economia', 'gastar menos', 'uso máximo', 'limite'],
  'barato': ['token', 'economia', 'custo', 'preço', 'plano'],
  'gratis': ['gratuito', 'free', 'custo'],
  'gasto': ['token', 'consumo', 'limite', 'uso'],
  'limite': ['token', 'limite', 'cota', 'resetar', 'plano'],
  'caro': ['token', 'plano', 'preço', 'custo', 'max'],

  // Intenções de busca
  'comecar': ['primeiros passos', 'instalar', 'configurar', 'início', 'começar', 'básico', 'iniciante'],
  'começar': ['primeiros passos', 'instalar', 'configurar', 'início', 'começar', 'básico', 'iniciante'],
  'inicio': ['primeiros passos', 'instalar', 'configurar', 'início', 'começar'],
  'instalar': ['instalação', 'download', 'baixar', 'configurar', 'desktop'],
  'baixar': ['download', 'instalação', 'instalar', 'desktop'],
  'configurar': ['configuração', 'personalizar', 'setup', 'instruções globais'],
  'setup': ['configurar', 'instalar', 'personalizar'],

  // Ferramentas e funcionalidades
  'contrato': ['contrato', 'cláusula', 'review-contract', 'análise', 'revisão', 'nda'],
  'peticao': ['petição', 'peça', 'processual', 'trabalhista'],
  'petição': ['petição', 'peça', 'processual', 'trabalhista', 'inicial'],
  'prazo': ['prazo', 'deadline', 'vencimento', 'controle', 'calendário'],
  'pesquisa': ['pesquisa', 'jurisprudência', 'jurimetria', 'busca', 'search'],
  'jurisprudencia': ['jurisprudência', 'precedente', 'tribunal', 'stj', 'stf'],
  'modelo': ['template', 'modelo', 'minuta', 'rascunho'],

  // Áreas do direito
  'trabalhista': ['trabalhista', 'clt', 'tst', 'rescisão', 'reclamatória'],
  'consumidor': ['consumidor', 'cdc', 'defesa', 'relação de consumo'],
  'previdenciario': ['previdenciário', 'inss', 'aposentadoria', 'benefício'],
  'empresarial': ['empresarial', 'societário', 'contrato', 'due diligence', 'm&a'],
  'imobiliario': ['imobiliário', 'usucapião', 'locação', 'imóvel'],

  // Ecossistema Claude
  'ia': ['claude', 'inteligência artificial', 'ai', 'modelo'],
  'chatgpt': ['claude', 'chat', 'gpt', 'comparação', 'alternativa', 'openai'],
  'gpt': ['claude', 'chat', 'skill', 'comparação'],
  'assistente': ['claude', 'cowork', 'chat', 'agente'],
  'automatizar': ['automação', 'automatizar', 'chrome', 'workflow', 'agendar'],
  'automacao': ['automação', 'automatizar', 'chrome', 'workflow', 'agendar'],
  'navegar': ['chrome', 'navegador', 'extensão', 'web', 'site'],
  'planilha': ['excel', 'spreadsheet', 'xlsx', 'tabela', 'dados'],
  'excel': ['excel', 'planilha', 'spreadsheet', 'xlsx', 'formatação condicional'],
  'powerpoint': ['powerpoint', 'pptx', 'apresentação', 'slides'],
  'word': ['word', 'docx', 'documento', 'formatação'],
  'email': ['gmail', 'email', 'e-mail', 'correio'],
  'gmail': ['gmail', 'email', 'e-mail', 'conector'],
  'drive': ['google drive', 'drive', 'documentos', 'conector', 'nuvem'],
  'plugin': ['plugin', 'plugins', 'pacote', 'legal', 'productivity'],
  'skill': ['skill', 'skills', 'habilidade', 'manual', 'instrução'],
  'conector': ['conector', 'conectores', 'mcp', 'integração', 'conexão'],
  'memoria': ['memória', 'lembrar', 'contexto', 'persistente'],
  'projeto': ['projeto', 'pasta', 'knowledge base', 'contexto'],
  'comando': ['slash command', 'comando', 'atalho', '/', 'barra'],

  // Outras IAs e ferramentas alternativas
  'lovable': ['lovable', 'tokens', 'economia', 'alternativa', 'economize', 'gratuitas'],
  'perplexity': ['perplexity', 'pesquisa', 'alternativa', 'tokens', 'gratuitas', 'economize'],
  'gemini': ['gemini', 'google', 'alternativa', 'tokens', 'ai studio', 'gratuitas'],
  'deepseek': ['deepseek', 'alternativa', 'tokens', 'economia', 'gratuitas', 'rascunho'],
  'notebooklm': ['notebooklm', 'notebook', 'resumir', 'google', 'gratuitas', 'pre-processar', 'economia'],
  'notebook': ['notebooklm', 'notebook', 'resumir', 'google', 'gratuitas', 'pre-processar'],
  'ai studio': ['google ai studio', 'gemini', 'testar', 'prompt', 'gratuitas', 'economia'],
  'ilovepdf': ['ilovepdf', 'pdf', 'converter', 'txt', 'gratuitas', 'economia'],
  'outra ia': ['alternativa', 'outras', 'ferramentas', 'tokens', 'economia', 'gratuitas', 'economize'],
  'outras ias': ['alternativa', 'outras', 'ferramentas', 'tokens', 'economia', 'gratuitas', 'economize'],
  'ferramenta': ['ferramenta', 'ferramentas', 'alternativa', 'extensão', 'gratuitas'],
  'gratuita': ['gratuitas', 'gratis', 'free', 'notebooklm', 'perplexity', 'deepseek', 'ilovepdf', 'economia'],
  'gratuitas': ['gratuitas', 'gratis', 'free', 'notebooklm', 'perplexity', 'deepseek', 'ilovepdf', 'economia'],
  'token': ['token', 'tokens', 'limite', 'economia', 'otimizar', 'uso maximo', 'gratuitas', 'economize'],
  'tokens': ['token', 'tokens', 'limite', 'economia', 'otimizar', 'uso maximo', 'gratuitas', 'economize'],
}

// Intent map: common questions → relevant card titles (boosted in results)
const intentMap: Record<string, string[]> = {
  'como comecar': ['Instalação do Claude Desktop', 'O que é o Claude?', 'Escolhendo seu Plano', 'Checklist'],
  'quanto custa': ['Escolhendo seu Plano', 'Plano'],
  'qual plano': ['Escolhendo seu Plano', 'Plano'],
  'como instalar': ['Instalação do Claude Desktop', 'Claude in Chrome'],
  'como usar': ['Chat vs Cowork', 'O que é o Cowork', 'Personalizar'],
  'revisar contrato': ['Análise de Contratos', 'Plugin Legal', 'review-contract'],
  'fazer peticao': ['Parecer Jurídico', 'Petições', 'Criando Skills'],
  'pesquisar jurisprudencia': ['Pesquisa Jurídica', 'Raciocínio Estendido', 'Chrome'],
  'controle prazo': ['Controle de Prazos', 'Calendário'],
  'economizar token': ['Economize com IAs Gratuitas', 'Entendendo Tokens', 'Pré-processe Documentos', 'Monitore seu Uso'],
  'gastar menos': ['Economize com IAs Gratuitas', 'Entendendo Tokens', 'Pré-processe Documentos', 'Monitore seu Uso'],
  'uso maximo': ['Economize com IAs Gratuitas', 'Entendendo Tokens', 'Pré-processe Documentos', 'Técnicas Expert'],
  'outra ia': ['Economize com IAs Gratuitas', 'Pré-processe Documentos'],
  'ferramenta gratuita': ['Economize com IAs Gratuitas', 'Pré-processe Documentos'],
  'notebooklm': ['Economize com IAs Gratuitas', 'Pré-processe Documentos'],
  'pre processar': ['Pré-processe Documentos', 'Economize com IAs Gratuitas'],
  'o que e cowork': ['O que é o Cowork', 'Chat vs Cowork'],
  'o que e plugin': ['O que são Plugins?', 'Plugins: O Armário'],
  'o que e skill': ['O que são Skills?', 'Skills: Os Manuais'],
  'o que e conector': ['MCP e Conectores', 'Google Drive', 'Gmail'],
  'como conectar': ['Google Drive', 'Gmail', 'Conectores'],
  'chrome': ['O que é o Claude in Chrome?', 'Pesquisa', 'Automação', 'Agendar'],
  'navegar site': ['Claude in Chrome', 'Pesquisa de Jurisprudência'],
  'criar pasta': ['Organizando suas Pastas', 'Projetos', 'CLAUDE.md'],
  'organizar': ['Organizando suas Pastas', 'Projetos'],
  'sub agente': ['Sub-agentes', 'Delegação', 'Paralelo'],
  'due diligence': ['Due Diligence', 'Análise de Contratos'],
  'parecer': ['Parecer Jurídico'],
  'relatorio': ['Relatório para Cliente'],
  'apresentacao': ['PowerPoint', 'Slides'],
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function getExpandedTerms(query: string): string[] {
  const normalized = normalize(query)
  const terms = [normalized]

  // Check for synonym matches
  for (const [key, alts] of Object.entries(synonyms)) {
    const normKey = normalize(key)
    if (normalized.includes(normKey) || normKey.includes(normalized)) {
      terms.push(...alts.map(normalize))
    }
  }

  // Also split query into words and check each
  const words = normalized.split(' ').filter(w => w.length >= 2)
  for (const word of words) {
    for (const [key, alts] of Object.entries(synonyms)) {
      const normKey = normalize(key)
      if (word === normKey || normKey.startsWith(word)) {
        terms.push(...alts.map(normalize))
      }
    }
  }

  return [...new Set(terms)]
}

function getIntentBoosts(query: string): string[] {
  const normalized = normalize(query)
  const boosts: string[] = []

  for (const [intent, titles] of Object.entries(intentMap)) {
    const normIntent = normalize(intent)
    // Check if query matches this intent pattern
    const intentWords = normIntent.split(' ')
    const queryWords = normalized.split(' ')
    const matchCount = intentWords.filter(iw => queryWords.some(qw => qw.includes(iw) || iw.includes(qw))).length
    if (matchCount >= Math.ceil(intentWords.length * 0.5)) {
      boosts.push(...titles.map(normalize))
    }
  }

  return boosts
}

export function useSearch() {
  const [query, setQuery] = useState('')

  const results = useMemo<SearchResult[]>(() => {
    if (query.length < 2) return []

    const expandedTerms = getExpandedTerms(query)
    const intentBoosts = getIntentBoosts(query)
    const found: SearchResult[] = []

    for (const section of sections) {
      for (let i = 0; i < section.cards.length; i++) {
        const card = section.cards[i]

        // Build comprehensive searchable text
        const parts = [
          card.title,
          card.subtitle || '',
          card.content,
          (card.tips || []).join(' '),
          (card.steps || []).join(' '),
          card.prompt || '',
          (card.links || []).map(l => l.label).join(' '),
          (card.flowSteps || []).map(f => `${f.title} ${f.description}`).join(' '),
          card.analogy?.text || '',
          (card.elementGrid || []).map(e => `${e.name} ${e.description} ${e.whenToUse || ''}`).join(' '),
          card.relationship?.title || '',
          (card.relationship?.items || []).map(r => `${r.label} ${r.value} ${r.sub || ''}`).join(' '),
          (card.commandList || []).map(c => `${c.command} ${c.description}`).join(' '),
          (card.checklist || []).map(g => `${g.title} ${g.items.join(' ')}`).join(' '),
          (card.refTable || []).map(r => `${r.element} ${r.analogy}`).join(' '),
        ]

        const fullText = normalize(parts.join(' '))
        const titleText = normalize(`${card.title} ${card.subtitle || ''}`)

        let score = 0

        // Score each expanded term
        for (const term of expandedTerms) {
          if (titleText.includes(term)) {
            score += 10 // Title match = high score
          }
          if (fullText.includes(term)) {
            score += 3 // Content match
          }
        }

        // Boost for intent matches
        for (const boost of intentBoosts) {
          if (titleText.includes(boost)) {
            score += 8
          }
        }

        if (score > 0) {
          // Find best snippet
          const q = normalize(query)
          const idx = fullText.indexOf(q)
          let snippet: string
          if (idx >= 0) {
            const start = Math.max(0, idx - 40)
            const end = Math.min(fullText.length, idx + q.length + 60)
            snippet = '...' + fullText.slice(start, end).trim() + '...'
          } else {
            // Use beginning of content as snippet
            snippet = card.subtitle || card.content.slice(0, 80).trim() + '...'
          }

          found.push({
            sectionId: section.id,
            sectionTitle: section.title,
            cardTitle: card.title,
            cardIndex: i,
            snippet,
            score,
          })
        }
      }
    }

    // Sort by score descending, then deduplicate
    found.sort((a, b) => b.score - a.score)
    return found.slice(0, 12)
  }, [query])

  return { query, setQuery, results }
}
