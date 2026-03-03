export interface CardLink {
  label: string
  url: string
}

export interface FlowStep {
  title: string
  description: string
}

export interface Analogy {
  tag?: string
  text: string
}

export interface ElementGridItem {
  icon: string
  name: string
  tech?: string
  description: string
  whenToUse?: string
  highlight?: boolean
}

export interface RelationshipItem {
  label: string
  value: string
  sub?: string
  highlight?: boolean
  flex?: number
}

export interface CommandItem {
  command: string
  description: string
}

export interface ChecklistGroup {
  title: string
  items: string[]
}

export interface RefTableRow {
  icon: string
  element: string
  analogy: string
  config: 'sim' | 'nao' | 'auto'
  configLabel: string
}

export interface Card {
  title: string
  subtitle?: string
  level: 'iniciante' | 'intermediario' | 'avancado' | 'expert'
  icon: string
  content: string
  tips?: string[]
  steps?: string[]
  prompt?: string
  links?: CardLink[]
  flowSteps?: FlowStep[]
  analogy?: Analogy
  elementGrid?: ElementGridItem[]
  relationship?: { title: string; items: RelationshipItem[]; symbols?: string[] }
  commandList?: CommandItem[]
  checklist?: ChecklistGroup[]
  refTable?: RefTableRow[]
}

export interface Section {
  id: string
  title: string
  description: string
  icon: string
  cards: Card[]
}

export const sections: Section[] = [
  // ═══════════════════════════════════════════════════════════
  // SEÇÃO 1: PRIMEIROS PASSOS
  // ═══════════════════════════════════════════════════════════
  {
    id: 'primeiros-passos',
    title: 'Primeiros Passos',
    description: 'Entenda o ecossistema Claude e comece sua jornada',
    icon: 'rocket',
    cards: [
      {
        title: 'O que é o Claude?',
        subtitle: 'Entenda o ecossistema completo',
        level: 'iniciante',
        icon: 'lightbulb',
        analogy: {
          tag: 'Analogia Central',
          text: 'O Claude é um **escritório de advocacia completo**. Tem recepção (Chat), sala de trabalho (Cowork), armário de especialidades (Plugins), sistema telefônico (Conectores), manuais (Skills), formulários (Slash Commands), caderno de anotações (Memória) e até um boy que vai ao fórum (Chrome).',
        },
        content: `O Claude não é só um chat. É um **ecossistema inteiro** de ferramentas que, quando conectadas, transformam seu escritório numa operação integrada — pesquisa, redação, revisão, organização de arquivos, controle de agenda e até navegação automatizada na web.

Cada ferramenta do Claude traduzida para a linguagem do seu escritório. Sem termos técnicos. Com tudo que você precisa para começar.`,
        elementGrid: [
          { icon: 'message-square', name: 'Chat', tech: 'claude.ai', description: 'A **recepção do escritório**. Conversas rápidas, ida e volta.', whenToUse: 'Perguntas rápidas, brainstorming, tirar dúvidas', highlight: false },
          { icon: 'zap', name: 'Cowork', tech: 'Claude Desktop', description: 'A **sala de trabalho do estagiário**. Entregue a tarefa e saia para tomar café.', whenToUse: 'Tarefas completas com documentos, contratos, relatórios', highlight: true },
          { icon: 'terminal', name: 'Claude Code', tech: 'Terminal', description: 'A **sala do programador**. Muito poderoso, mas feito para desenvolvedores.', whenToUse: 'Criar sistemas, ferramentas de legaltech, automações', highlight: false },
        ],
        tips: [
          'A maioria dos advogados usa só o chat básico — você vai além!',
          'Cada ferramenta resolve um tipo diferente de tarefa',
          'Não precisa ativar tudo de uma vez — vá no seu ritmo',
        ],
        links: [
          { label: 'Acessar Claude.ai', url: 'https://claude.ai' },
          { label: 'Página de Preços', url: 'https://claude.com/pricing' },
        ],
      },
      {
        title: 'Escolhendo seu Plano',
        subtitle: 'Qual plano se encaixa na sua rotina',
        level: 'iniciante',
        icon: 'credit-card',
        content: `O Claude oferece diferentes planos pagos. Todos dão acesso ao ecossistema completo, variando nos limites de uso:

| Plano | Preço | Para quem? |
|-------|-------|------------|
| **Pro** | US$ 20/mês (~R$ 120) | Advogado que usa algumas vezes por semana |
| **Max 5x** | US$ 100/mês (~R$ 600) | Advogado que usa todos os dias |
| **Max 20x** | US$ 200/mês (~R$ 1.200) | Escritório com uso pesado |
| **Team** | US$ 25/usuário/mês | Equipes de advogados |

**Recomendação para começar:** O plano Pro (US$ 20/mês) já dá acesso ao Cowork, Skills, Projetos e tudo mais. É suficiente para a maioria dos advogados que estão aprendendo.

**Exemplo prático:** Um advogado trabalhista que faz 3-4 petições por semana, analisa 2-3 contratos e precisa de pesquisa jurisprudencial consegue trabalhar confortavelmente com o plano Pro.`,
        tips: [
          'O plano Pro é o melhor custo-benefício para começar',
          'Você pode fazer upgrade a qualquer momento',
          'O limite reseta a cada 5 horas — planeje suas sessões',
          'Para escritórios: Team tem administração centralizada e controles de segurança',
        ],
        links: [
          { label: 'Ver Planos e Preços', url: 'https://claude.com/pricing' },
        ],
      },
      {
        title: 'Instalação do Claude Desktop',
        subtitle: 'Passo a passo para começar',
        level: 'iniciante',
        icon: 'download',
        content: `O Claude Desktop é essencial para usar o Cowork. Baixe em **claude.ai/download**.

O aplicativo desktop é o que permite ao Claude trabalhar **diretamente nos seus arquivos locais** — ler pastas, criar documentos, organizar arquivos. Sem ele, você fica limitado ao chat no navegador.`,
        steps: [
          'Acesse claude.ai/download e baixe a versão para seu sistema (Mac ou Windows)',
          'Execute o instalador e siga as instruções na tela',
          'Abra o aplicativo e faça login com sua conta Claude',
          'No topo da tela, você verá as abas Chat e Cowork',
          'Configure suas preferências em Personalizar (menu lateral)',
          'Dê permissão para acessar pastas quando solicitado',
        ],
        tips: [
          'No Mac: requer Apple Silicon (M1 ou posterior)',
          'No Windows: qualquer hardware compatível (exceto ARM64)',
          'O app precisa ficar aberto enquanto o Cowork trabalha',
          'Mantenha o app atualizado — novas funcionalidades são adicionadas semanalmente',
        ],
        links: [
          { label: 'Baixar Claude Desktop', url: 'https://claude.ai/download' },
        ],
      },
      {
        title: 'Chat vs Cowork: Qual a Diferença?',
        subtitle: 'Entenda quando usar cada modo',
        level: 'iniciante',
        icon: 'arrow-right-left',
        content: `A diferença fundamental entre os dois modos:

**Claude Chat** = Você conversa com o Claude, ele responde. Mas ele não mexe nos seus arquivos. É como conversar com um colega pelo WhatsApp — ele te dá ideias, mas não coloca a mão na massa.

**Claude Cowork** = Você entrega uma pasta de documentos e uma tarefa. Ele lê os documentos, faz um plano, executa o trabalho e entrega pronto. É como ter um estagiário sentado ao seu lado que realmente faz o trabalho.

O Cowork pode: ler dezenas de documentos de uma vez, organizar pastas, criar Word/Excel/PowerPoint, extrair informações, montar relatórios, comparar cláusulas e muito mais.

| Característica | Chat | Cowork |
|----------------|------|--------|
| **Acessa arquivos?** | Não (só uploads) | Sim, pastas inteiras |
| **Cria documentos?** | Só artefatos | Word, Excel, PPT reais |
| **Subtarefas?** | Não | Sim, em paralelo |
| **Ideal para** | Consultas rápidas | Tarefas completas |`,
        tips: [
          'Use o Chat para consultas rápidas e brainstorming',
          'Use o Cowork para tarefas que envolvem arquivos e entregas',
          'Você pode alternar entre os dois modos a qualquer momento',
        ],
        flowSteps: [
          { title: 'Chat', description: 'Consulta rápida, brainstorming, dúvidas jurídicas' },
          { title: 'Cowork', description: 'Tarefas com documentos: análise, redação, organização' },
          { title: 'Resultado', description: 'Documentos prontos salvos na sua pasta' },
        ],
      },
      {
        title: 'Glossário Essencial',
        subtitle: 'Os termos que você precisa conhecer',
        level: 'iniciante',
        icon: 'book-open',
        content: `Antes de avançar, conheça os termos principais do ecossistema Claude:

| Termo | O que significa |
|-------|----------------|
| **Token** | Unidade de processamento do Claude (~1 palavra = 1-2 tokens) |
| **Contexto** | Tudo que o Claude "lembra" dentro de uma conversa |
| **Projeto** | Pasta de trabalho com instruções e documentos permanentes |
| **Skill** | Instrução personalizada que especializa o Claude |
| **Plugin** | Pacote com Skills + comandos + conectores |
| **Conector** | Ponte entre o Claude e outra ferramenta (Drive, Gmail) |
| **Artefato** | Criação visual do Claude (código, doc, gráfico) |
| **MCP** | Model Context Protocol — tecnologia dos conectores |
| **Slash Command** | Atalho com "/" para ativar uma função (ex: /review-contract) |
| **CLAUDE.md** | Arquivo de instruções automáticas para uma pasta |
| **Knowledge Base** | Documentos de referência permanente num Projeto |
| **Raciocínio Estendido** | Modo que faz o Claude "pensar mais" antes de responder |`,
        tips: [
          'Não precisa decorar tudo — use este glossário como referência rápida',
          'Os termos mais usados no dia a dia são: Token, Projeto, Skill e Conector',
        ],
      },
      {
        title: 'Qual Modelo Usar? Opus, Sonnet e Haiku',
        subtitle: 'Cada modelo tem um papel no seu escritório',
        level: 'iniciante',
        icon: 'layers',
        analogy: {
          text: 'Pense no escritório: o **sócio sênior** (Opus) resolve casos complexos e toma decisões estratégicas. O **associado pleno** (Sonnet) faz de tudo com competência e rapidez. O **estagiário eficiente** (Haiku) executa tarefas repetitivas em segundos. **Você não escala o sócio para fotocopiar — e não manda o estagiário fazer sustentação oral.**',
        },
        content: `O Claude possui 3 modelos. Escolher o modelo certo para cada tarefa é tão importante quanto escolher o advogado certo para cada caso.

**Comparativo completo:**

| Característica | **Opus 4.6** | **Sonnet 4.6** | **Haiku 4.5** |
|---------------|-------------|---------------|--------------|
| **Perfil** | Sócio sênior | Associado pleno | Estagiário eficiente |
| **Inteligência** | Máxima | Alta | Boa |
| **Velocidade** | Moderada | Rápida | Ultra-rápida |
| **Contexto** | 1M tokens (beta) | 1M tokens (beta) | 200K tokens |
| **Custo API** | $15/$75 por M tokens | $3/$15 por M tokens | $0.80/$4 por M tokens |
| **Melhor para** | Análise complexa, estratégia | Uso diário, redação, pesquisa | Volume alto, triagem, rotina |

**Quando usar cada modelo:**

| Tarefa Jurídica | Modelo Ideal | Por quê |
|----------------|-------------|---------|
| Parecer jurídico complexo | **Opus** | Raciocínio profundo e multifatorial |
| Análise de contrato M&A | **Opus** | Detecta nuances e riscos ocultos |
| Estratégia de caso | **Opus** | Avaliação de cenários e probabilidades |
| Redação de petição | **Sonnet** | Equilíbrio entre qualidade e velocidade |
| Pesquisa de jurisprudência | **Sonnet** | Rápido e preciso na busca |
| Revisão de contratos simples | **Sonnet** | Suficiente para riscos padrão |
| Triagem de e-mails | **Haiku** | Volume alto, decisão binária |
| Classificação de documentos | **Haiku** | Repetitivo e previsível |
| Resumo de decisões | **Haiku** | Extrair pontos-chave rapidamente |

**No claude.ai (Chat/Cowork):**
Você pode alternar entre os modelos no seletor de modelo (canto superior). O Cowork usa Opus por padrão. O Chat permite escolher.

**Dica de ouro:**
Use Haiku para pré-processamento → Sonnet para análise → Opus para decisões estratégicas. Esse pipeline economiza até 80% de custo com mesma qualidade final.`,
        tips: [
          'No Chat: alterne entre modelos conforme a complexidade da tarefa',
          'Para redação diária (petições, contratos, e-mails): Sonnet é o melhor custo-benefício',
          'Para análises que exigem raciocínio profundo: sempre Opus com Raciocínio Estendido',
          'Para triagem de 50+ documentos: use Haiku via API — é 18x mais barato que Opus',
        ],
      },
      {
        title: 'Claude vs ChatGPT vs Gemini para Advogados',
        subtitle: 'Comparação objetiva para quem precisa escolher',
        level: 'iniciante',
        icon: 'arrow-right-left',
        analogy: {
          text: 'ChatGPT é o **advogado carismático** (popular, bom em tudo, às vezes superficial). Gemini é o **pesquisador com acesso à biblioteca** (conectado ao Google, bom em busca). Claude é o **redator técnico meticuloso** (melhor texto, mais seguro, mais profundo). **Cada um tem força — mas para advocacia, a diferença é real.**',
        },
        content: `Comparação prática focada no que importa para advogados brasileiros:

**Comparativo geral:**

| Critério | **Claude** | **ChatGPT** | **Gemini** |
|----------|-----------|------------|-----------|
| **Qualidade de redação** | Excelente | Boa | Boa |
| **Raciocínio jurídico** | Excelente | Bom | Bom |
| **Instrução longa (>5 págs)** | Excelente | Limitado | Bom |
| **Janela de contexto** | 1M tokens | 128K tokens | 2M tokens |
| **Análise de PDFs** | Nativa, até 32MB | Sim | Sim |
| **Segurança de dados** | Alta (não treina com dados) | Variável | Variável |
| **Pesquisa na web** | Integrada | Integrada | Nativa (Google) |
| **Plugins/integrações** | Crescendo rápido | Maduro (GPTs) | Limitado |
| **Desktop agent** | Cowork (muito poderoso) | Operator | Limitado |
| **Preço Pro** | $20/mês | $20/mês | $19.99/mês |

**Onde o Claude se destaca para advogados:**
- **Redação de peças processuais** — Texto mais fluido, menos "robotizado", melhor estrutura
- **Análise de documentos longos** — 1M tokens = ~2.500 páginas em uma única conversa
- **Fidelidade às instruções** — Segue prompt complexo com muito mais precisão
- **Segurança** — Dados não usados para treino (Pro+), Enterprise com confidencialidade total
- **Cowork** — Agent desktop que lê seus arquivos, cria documentos e automatiza fluxos
- **Legal Plugin** — Plugin oficial para análise de contratos com classificação de risco

**Onde ChatGPT vence:**
- Ecossistema de GPTs (milhares de assistentes prontos)
- Geração de imagens (DALL-E integrado)
- Mais popular = mais tutoriais disponíveis

**Onde Gemini vence:**
- Integração nativa com Google Workspace
- Busca web mais natural (é o Google)
- Janela de contexto de 2M tokens

**Veredicto para advogados brasileiros:**
Para **redação jurídica**, **análise de contratos** e **raciocínio complexo**, o Claude é superior. Para **pesquisa web rápida**, Gemini tem vantagem. Para quem já usa o ecossistema Google intensamente, Gemini é mais conveniente. **A recomendação: Claude como ferramenta principal + Gemini/Perplexity como complemento para pesquisa.**`,
        tips: [
          'Não é preciso escolher apenas um — use cada IA onde ela é melhor',
          'Claude para redação e análise profunda, Perplexity/Gemini para pesquisa rápida',
          'Para escritórios que precisam de segurança máxima: Claude Enterprise é a escolha mais segura',
          'Teste os 3 com a mesma petição — a diferença de qualidade na redação é visível',
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // SEÇÃO 2: ECOSSISTEMA CLAUDE
  // ═══════════════════════════════════════════════════════════
  {
    id: 'ecossistema',
    title: 'Ecossistema Claude',
    description: 'Cada ferramenta traduzida para a linguagem do seu escritório',
    icon: 'network',
    cards: [
      {
        title: 'O Escritório Digital Completo',
        subtitle: 'A grande analogia que explica tudo',
        level: 'iniciante',
        icon: 'building',
        analogy: {
          tag: 'Analogia Central',
          text: 'O Claude é um **escritório de advocacia completo**. Tem recepção (Chat), sala de trabalho (Cowork), armário de especialidades (Plugins), sistema telefônico (Conectores), manuais de procedimento (Skills), formulários prontos (Slash Commands), caderno de anotações (Memória) e até um boy que vai ao fórum (Chrome).',
        },
        content: `Cada ferramenta do Claude traduzida para a linguagem do seu escritório. Sem termos técnicos. Com tudo que você precisa para começar.

**O segredo:** Não é uma ferramenta só. É um ecossistema integrado. O poder real aparece quando você combina 2-3 ferramentas num único fluxo de trabalho.`,
        flowSteps: [
          { title: 'VOCÊ (o advogado)', description: 'O que você precisa?' },
          { title: 'Chat', description: 'Perguntas rápidas — usa Memória e Projetos' },
          { title: 'Cowork', description: 'Tarefas complexas — usa Plugins, Skills, Commands, MCP, Sub-agentes, Chrome, Excel' },
          { title: 'Claude Code', description: 'Programação — usa Terminal e Plugins' },
        ],
        refTable: [
          { icon: 'message-square', element: 'Chat', analogy: 'Recepção do escritório', config: 'nao', configLabel: 'Não' },
          { icon: 'zap', element: 'Cowork', analogy: 'Sala de trabalho do estagiário', config: 'sim', configLabel: 'Sim' },
          { icon: 'terminal', element: 'Claude Code', analogy: 'Sala do programador', config: 'sim', configLabel: 'Sim' },
          { icon: 'package', element: 'Plugin', analogy: 'Pasta do armário de especialidades', config: 'sim', configLabel: 'Instalar' },
          { icon: 'plug', element: 'MCP', analogy: 'Padrão telefônico (tomada)', config: 'nao', configLabel: 'Não' },
          { icon: 'phone', element: 'Conector', analogy: 'Linha telefônica individual', config: 'sim', configLabel: 'Ativar' },
          { icon: 'book-open', element: 'Skill', analogy: 'Página do manual de procedimentos', config: 'auto', configLabel: 'Automático' },
          { icon: 'sliders', element: 'Slash Command', analogy: 'Formulário pronto da secretária', config: 'auto', configLabel: 'Automático' },
          { icon: 'users', element: 'Sub-agente', analogy: 'Estagiários em paralelo', config: 'auto', configLabel: 'Automático' },
          { icon: 'brain', element: 'Memória', analogy: 'Caderno de anotações', config: 'auto', configLabel: 'Automático' },
          { icon: 'folder-open', element: 'Projeto', analogy: 'Pasta do caso com regras', config: 'sim', configLabel: 'Criar' },
          { icon: 'settings', element: 'Instruções Globais', analogy: 'Política interna do escritório', config: 'sim', configLabel: '1x' },
          { icon: 'file-text', element: 'CLAUDE.md', analogy: 'Capa da pasta do caso', config: 'sim', configLabel: 'Criar' },
          { icon: 'globe', element: 'Claude in Chrome', analogy: 'Boy que vai ao fórum', config: 'sim', configLabel: 'Instalar' },
          { icon: 'spreadsheet', element: 'Claude in Excel', analogy: 'Estagiário na planilha', config: 'sim', configLabel: 'Add-in' },
          { icon: 'presentation', element: 'Claude in PPT', analogy: 'Estagiário na apresentação', config: 'sim', configLabel: 'Add-in' },
        ],
      },
      {
        title: 'Os 3 Ambientes',
        subtitle: 'Recepção, sala de trabalho e sala do programador',
        level: 'iniciante',
        icon: 'layout',
        analogy: {
          text: 'O Claude Desktop tem **três modos**, como três salas do escritório. A maioria dos advogados vai usar só as duas primeiras.',
        },
        content: `Cada ambiente tem um propósito diferente. Entender isso é a chave para usar o Claude com eficiência.`,
        elementGrid: [
          { icon: 'message-square', name: 'Chat', tech: 'A Recepção', description: 'O cliente chega, pergunta, o advogado responde. Conversa rápida, ida e volta. Ele **não mexe nos seus arquivos**.', whenToUse: 'Perguntas rápidas, brainstorming, tirar dúvidas, rascunhos curtos', highlight: false },
          { icon: 'zap', name: 'Cowork', tech: 'A Sala de Trabalho', description: 'Entregue documentos, explique a tarefa e **saia para tomar café**. Quando voltar, o trabalho está pronto.', whenToUse: 'Contratos, relatórios, due diligence, peças processuais, organização', highlight: true },
          { icon: 'terminal', name: 'Claude Code', tech: 'Sala do Programador', description: 'Tela preta, código, terminal. Muito poderoso, mas **feito para desenvolvedores**. A maioria não precisa.', whenToUse: 'Criar sistemas, ferramentas de legaltech, automações complexas', highlight: false },
        ],
      },
      {
        title: 'Plugins: O Armário de Especialidades',
        subtitle: 'Pacotes que transformam o Claude de genérico em especialista',
        level: 'intermediario',
        icon: 'package',
        analogy: {
          text: 'Imagine um **armário com pastas etiquetadas**: "Trabalhista", "Consumidor", "Previdenciário". Cada pasta tem tudo: modelos, checklists, legislação, fluxos. **Sem a pasta = genérico. Com a pasta = especialista.**',
        },
        content: `Plugins são pacotes completos de funcionalidade que transformam o Claude em um especialista de uma área. Eles combinam Skills + Slash Commands + Conectores em um kit pronto.`,
        relationship: {
          title: 'O que tem dentro de um Plugin',
          items: [
            { label: 'Plugin', value: 'O pacote completo', sub: 'Kit Jurídico', highlight: true, flex: 2 },
            { label: 'Skills', value: 'Conhecimento', sub: 'Como revisar contrato' },
            { label: 'Commands', value: 'Atalhos /', sub: '/review-contract' },
            { label: 'Conectores', value: 'Ligações', sub: 'Slack, Drive' },
          ],
          symbols: ['=', '+', '+'],
        },
        tips: [
          'Instale o plugin Legal para ter os comandos jurídicos',
          'Plugins podem ser criados por você ou pela comunidade',
          'Cada plugin instalado adiciona novos Slash Commands',
        ],
        links: [
          { label: 'Página de Plugins', url: 'https://claude.com/plugins' },
          { label: 'Plugin Legal', url: 'https://claude.com/plugins/legal' },
          { label: 'GitHub dos Plugins', url: 'https://github.com/anthropics/knowledge-work-plugins' },
        ],
      },
      {
        title: 'MCP e Conectores: O Sistema Telefônico',
        subtitle: 'Como o Claude se conecta com ferramentas externas',
        level: 'intermediario',
        icon: 'plug',
        analogy: {
          text: 'Imagine o **sistema telefônico** do escritório. Cada linha conecta a um lugar: fórum, cartório, banco, contador. O **MCP é o padrão telefônico** (você não precisa entender). O **Conector é cada linha individual** (Google Drive, Gmail, Slack).',
        },
        content: `O MCP (Model Context Protocol) é a tecnologia que permite ao Claude se conectar com ferramentas externas. Você não precisa se preocupar com o MCP em si — basta ativar os conectores que precisa.

**Como ativar:** Claude Desktop → Personalizar → Conectores → Escolha o serviço → Connect → Faça login.`,
        relationship: {
          title: 'MCP vs Conector vs Plugin',
          items: [
            { label: 'MCP', value: 'O padrão / a "tomada"', sub: 'Você não precisa se preocupar' },
            { label: 'Conector', value: 'Cada linha individual', sub: 'Google Drive, Gmail, Slack, DocuSign', highlight: true },
            { label: 'Plugin', value: 'O pacote que inclui conectores', sub: 'Legal, Sales, Finance + conexões', highlight: true },
          ],
          symbols: ['→', '→'],
        },
      },
      {
        title: 'Skills: Os Manuais de Procedimento',
        subtitle: 'O conhecimento que ensina o Claude a seguir o procedimento correto',
        level: 'intermediario',
        icon: 'book-open',
        analogy: {
          text: 'Os **manuais de procedimento interno** do escritório. "Quando chegar um caso de dano moral, siga estes passos..." O estagiário novo não sabe nada, mas **quando lê o manual, segue o procedimento certo**.',
        },
        content: `Skills são instruções personalizadas que especializam o Claude para tarefas específicas. Diferente dos Plugins (que são pacotes completos), uma Skill é uma instrução individual — como uma página de um manual.`,
        relationship: {
          title: 'Skill vs Plugin',
          items: [
            { label: 'Skill', value: 'UMA página do manual', sub: 'Como revisar cláusula de indenização' },
            { label: 'Plugin', value: 'O MANUAL INTEIRO', sub: 'Várias skills + atalhos + conexões', highlight: true },
          ],
          symbols: ['⊂'],
        },
        tips: [
          'Crie Skills em Personalizar → Skills no Claude Desktop',
          'Uma Skill pode ser tão simples quanto "Sempre citar jurisprudência do STJ"',
          'Skills são carregadas automaticamente em todas as conversas',
        ],
      },
      {
        title: 'Slash Commands: Formulários Prontos',
        subtitle: 'Atalhos que transformam tarefas complexas em formulários simples',
        level: 'intermediario',
        icon: 'sliders',
        analogy: {
          text: 'A secretária tem **formulários prontos** para os pedidos mais comuns. Em vez de explicar tudo do zero, você pega o formulário, **preenche os campos e entrega**. O trabalho sai padronizado.',
        },
        content: `No Cowork, digite \`/\` na caixa de texto, escolha o comando e preencha o formulário.`,
        commandList: [
          { command: '/review-contract', description: 'Análise cláusula por cláusula com semáforo verde/amarelo/vermelho' },
          { command: '/triage-nda', description: 'Classificação rápida de NDAs por nível de risco' },
          { command: '/brief', description: 'Geração de briefing jurídico formatado' },
          { command: '/vendor-check', description: 'Verificação de status de contrato de fornecedor' },
          { command: '/respond', description: 'Modelo de resposta padronizada (LGPD, discovery, etc.)' },
        ],
      },
      {
        title: 'Sub-agentes: Estagiários em Paralelo',
        subtitle: 'Processos automáticos que dividem tarefas grandes',
        level: 'intermediario',
        icon: 'users',
        analogy: {
          text: 'O estagiário principal recebe: "Analise 20 contratos". Em vez de fazer sozinho, **divide o trabalho entre vários sub-estagiários**. Cada um faz sua parte, devolve, e o principal monta o relatório final. **Acontece automaticamente.**',
        },
        content: `Quando você pede algo complexo, o Claude não faz tudo sozinho. Ele **delega subtarefas** para sub-agentes especializados. Isso acontece **em paralelo** — 5 contratos são analisados simultaneamente, não um por um.`,
        flowSteps: [
          { title: 'Tarefa', description: '"Analise 20 contratos"' },
          { title: 'Divisão automática', description: 'Sub-agentes 1-4 analisam em paralelo (5 contratos cada)' },
          { title: 'Combinação', description: 'Resultados são consolidados automaticamente' },
          { title: 'Relatório Final', description: 'Documento completo com todas as análises' },
        ],
        tips: [
          'Quanto mais clara sua instrução, melhor o Claude divide as tarefas',
          'Para tarefas com muitos documentos, organize-os em subpastas temáticas',
          'O Cowork mostra o plano de execução antes de começar — revise-o',
        ],
      },
      {
        title: 'Memória: O Caderno de Anotações',
        subtitle: 'Informações que o Claude guarda entre conversas',
        level: 'intermediario',
        icon: 'brain',
        analogy: {
          text: 'Toda vez que você conversa com um colega, ele anota num caderno: **"O Dr. prefere pareceres curtos"**, "Atua em previdenciário", "Gosta de tabelas em Excel". Da próxima vez, **ele já sabe suas preferências**.',
        },
        content: `O Claude tem **3 camadas de memória**:

**1. Memória de Conversa (temporária)** — Dura apenas durante a conversa atual. Conversas longas consomem mais tokens.

**2. Memória de Projeto (persistente)** — Instruções e documentos enviados a um Projeto ficam disponíveis em todas as conversas daquele Projeto.

**3. Memória Global (Personalizar)** — Suas preferências pessoais valem para TODAS as conversas.`,
        tips: [
          'Use Projetos para casos complexos com muitos documentos',
          'Coloque informações pessoais no Personalizar (global)',
          'Crie CLAUDE.md em cada pasta de trabalho do Cowork',
          'Inicie nova conversa para cada tarefa — mantém o contexto limpo',
        ],
      },
      {
        title: 'Projetos + Instruções de Pasta',
        subtitle: 'As pastas do caso com regras próprias',
        level: 'intermediario',
        icon: 'folder-open',
        analogy: {
          text: 'Cada caso tem sua **pasta física com capa de regras**: "Cliente: João Silva. Área: Consumidor. Juízo: 3ª Vara Cível. Prazo: 15/04." Qualquer pessoa que pegar a pasta **sabe imediatamente o contexto**.',
        },
        content: `Existem duas formas de dar contexto permanente ao Claude:`,
        elementGrid: [
          { icon: 'folder-open', name: 'Projetos (claude.ai)', tech: 'A Pasta do Caso — Web', description: 'Espaço no claude.ai com documentos de referência e instruções. O Claude **usa em todas as conversas** daquele projeto.', highlight: false },
          { icon: 'file-text', name: 'CLAUDE.md', tech: 'A Capa com Regras — Cowork', description: 'Arquivo **CLAUDE.md** na raiz da pasta. O Claude lê automaticamente toda vez que trabalha naquela pasta.', highlight: true },
        ],
      },
      {
        title: 'Instruções Globais: Política do Escritório',
        subtitle: 'Regras que valem para TODAS as conversas',
        level: 'intermediario',
        icon: 'settings',
        analogy: {
          text: 'A **política interna** do escritório: "Sempre usar timbrado", "Pareceres com no máximo 5 páginas", "Linguagem formal". Essas regras **não mudam de caso para caso — valem sempre**.',
        },
        content: `Configure em Personalizar no Claude Desktop. Exemplo de instruções globais:

- Sou advogado no Brasil, inscrito na OAB/MG
- Sempre considere a legislação brasileira
- Documentos em português do Brasil
- Valores em reais (R$), datas DD/MM/AAAA
- Citações: Tribunal, Recurso, Nº, Relator, Data`,
        prompt: `Sou advogado(a) [sua especialidade] no Brasil, inscrito(a) na OAB/[UF] nº [número]. Atuo principalmente em [áreas]. Sempre considere a legislação brasileira vigente. Use linguagem técnica jurídica. Documentos em português do Brasil. Valores em reais (R$), datas no formato DD/MM/AAAA. Citações no formato: Tribunal, Recurso, Nº, Relator, Data.`,
      },
      {
        title: 'Extensões: Boy do Fórum e Estagiário Office',
        subtitle: 'Chrome, Excel e PowerPoint',
        level: 'intermediario',
        icon: 'globe',
        analogy: {
          text: 'Ferramentas que estendem o poder do Claude para o **navegador e o Office**. Como ter um boy que vai ao fórum buscar informações e um estagiário que monta suas planilhas e apresentações.',
        },
        content: `O Claude se estende além do Desktop com extensões para navegador e Office.`,
        elementGrid: [
          { icon: 'globe', name: 'Claude in Chrome', tech: 'O Boy que vai ao Fórum', description: 'Extensão do Chrome. O Claude **navega na internet**, acessa sites, lê páginas e busca informações como parte da tarefa.', highlight: false },
          { icon: 'spreadsheet', name: 'Claude in Excel', tech: 'Estagiário na Planilha', description: 'Suplemento que permite ao Claude **trabalhar dentro do Excel** em tempo real — analisa dados, cria fórmulas, monta tabelas.', highlight: false },
          { icon: 'presentation', name: 'Claude in PowerPoint', tech: 'Estagiário na Apresentação', description: 'Suplemento para PowerPoint. O Claude **monta slides automaticamente** — e pode passar contexto do Excel direto.', highlight: false },
        ],
      },
      {
        title: 'Checklist: O que Configurar Primeiro',
        subtitle: 'Domine o ecossistema em 4 semanas',
        level: 'iniciante',
        icon: 'calendar',
        content: `Se você é advogado e quer começar do zero, siga esta ordem:`,
        checklist: [
          {
            title: 'Semana 1 — O Básico',
            items: [
              'Criar conta em claude.ai',
              'Escolher plano (Pro = US$ 20/mês ~ R$ 120)',
              'Baixar Claude Desktop',
              'Explorar as abas Chat e Cowork',
            ],
          },
          {
            title: 'Semana 2 — Configuração',
            items: [
              'Configurar instruções globais',
              'Criar pasta de teste com documentos',
              'Experimentar o Cowork com tarefa simples',
            ],
          },
          {
            title: 'Semana 3 — Plugins e Conectores',
            items: [
              'Instalar plugin Legal',
              'Instalar plugin Productivity',
              'Conectar Google Drive (se usar)',
              'Conectar Gmail (se quiser)',
            ],
          },
          {
            title: 'Semana 4 — Avançado',
            items: [
              'Criar CLAUDE.md para um caso real',
              'Testar slash commands (/review-contract)',
              'Instalar Claude in Chrome',
              'Criar plugin personalizado para sua área',
            ],
          },
        ],
        tips: [
          'Não tente ativar tudo de uma vez — o aprendizado gradual é mais eficaz',
          'A Semana 1 é suficiente para já ter ganhos reais de produtividade',
          'Reserve 30 minutos por dia nas primeiras semanas para praticar',
        ],
      },
      {
        title: 'Links Essenciais',
        subtitle: 'Todos os recursos em um lugar',
        level: 'iniciante',
        icon: 'link',
        content: `Acesse rapidamente os recursos mais importantes do ecossistema Claude:`,
        links: [
          { label: 'Criar Conta', url: 'https://claude.ai' },
          { label: 'Baixar Claude Desktop', url: 'https://claude.com/download' },
          { label: 'Downloads Diversos', url: 'https://claude.ai/downloads' },
          { label: 'Escolher Plano', url: 'https://claude.com/pricing' },
          { label: 'Página de Plugins', url: 'https://claude.com/plugins' },
          { label: 'Plugin Legal', url: 'https://claude.com/plugins/legal' },
          { label: 'Guia do Cowork', url: 'https://support.claude.com/en/articles/13345190-get-started-with-cowork' },
          { label: 'GitHub dos Plugins', url: 'https://github.com/anthropics/knowledge-work-plugins' },
          { label: 'Documentação Completa', url: 'https://docs.claude.com' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // SEÇÃO 3: CLAUDE.AI (CHAT)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'claude-chat',
    title: 'Claude Chat',
    description: 'Domine as funcionalidades do chat e projetos',
    icon: 'message-square',
    cards: [
      {
        title: 'Personalizar',
        subtitle: 'Configure o Claude do seu jeito',
        level: 'iniciante',
        icon: 'settings',
        analogy: {
          text: 'Quando um cliente novo chega ao escritório, você preenche uma **ficha de cadastro**: nome, área, preferências, restrições. O Personalizar é essa ficha — mas para o Claude. Ele lê antes de cada conversa e já sabe como te atender.',
        },
        content: `É onde você diz ao Claude **quem você é** e **como quer que ele se comporte**. Funciona como uma "ficha de apresentação" que o Claude lê antes de cada conversa.

**O que configurar:**
- **Preferências do usuário:** "Sou advogado trabalhista em Minas Gerais", "Prefiro respostas objetivas"
- **Estilo de escrita:** "Tom formal e técnico" ou "Linguagem clara para leigos"
- **Skills (Habilidades):** Instruções personalizadas para tarefas específicas
- **Memória:** O Claude lembra informações de conversas passadas

**Exemplo prático:** Um advogado previdenciarista configura: "Sempre considere as atualizações da Reforma da Previdência (EC 103/2019), cite jurisprudência do STJ e TNU, e calcule tempos de contribuição usando a regra de transição aplicável."`,
        steps: [
          'Acesse claude.ai e faça login',
          'Clique no menu lateral esquerdo, no ícone de maleta (Personalizar)',
          'Preencha suas informações: quem é, o que faz, como quer respostas',
          'Crie um Skill: clique em "Criar Skill" e escreva instruções específicas',
          'Salve — as preferências valem para todas as conversas',
        ],
        prompt: `Sou advogado(a) [sua especialidade] no Brasil, inscrito(a) na OAB/[UF] nº [número]. Atuo principalmente em [áreas]. Sempre considere a legislação brasileira vigente, especialmente [CPC, CLT, CDC, CC etc]. Use linguagem técnica jurídica. Quando possível, cite jurisprudência recente dos tribunais superiores (STF, STJ, TST). Formate respostas com: I) tese principal, II) fundamentos legais, III) jurisprudência, IV) conclusão.`,
        links: [
          { label: 'Acessar Personalizar', url: 'https://claude.ai/settings' },
        ],
      },
      {
        title: 'Estilos de Escrita Jurídica',
        subtitle: 'O Claude escreve como você — literalmente',
        level: 'intermediario',
        icon: 'pen-tool',
        analogy: {
          text: 'Todo advogado experiente tem um **estilo de escrita reconhecível** — a forma como estrutura argumentos, a escolha de palavras, o tom. Os Estilos (Styles) permitem que o Claude **absorva e reproduza** esse estilo em todas as respostas. É como clonar sua voz jurídica.',
        },
        content: `Os Estilos permitem definir COMO o Claude escreve — não apenas O QUE ele escreve. Diferente do Personalizar (que diz quem você é), o Estilo define a forma, o tom e a estrutura das respostas.

**4 estilos pré-definidos:**

| Estilo | Descrição | Uso Jurídico |
|--------|-----------|-------------|
| **Normal** | Equilibrado, conversacional | Conversas internas, brainstorming |
| **Formal** | Polido, profissional, preciso | Petições, pareceres, contratos |
| **Conciso** | Direto, sem rodeios | Resumos executivos, despachos, e-mails rápidos |
| **Explicativo** | Didático, detalhado | Explicar direito para clientes leigos |

**O poder dos Estilos Personalizados:**

Envie amostras do SEU trabalho (petições, pareceres, e-mails) e o Claude aprende a escrever como você. Isso inclui:
- Estrutura de parágrafos e argumentos
- Vocabulário e termos técnicos preferidos
- Tom (mais combativo, mais conciliador, mais técnico)
- Nível de formalidade
- Padrões de citação jurisprudencial

**Exemplo prático:**
Um advogado tributarista envia 3 pareceres e 2 petições como amostra. O Claude aprende que ele prefere: parágrafos curtos, citação no formato "STJ, REsp nº X, Rel. Min. Y", argumentação dedutiva (premissa geral → caso concreto), e conclusões numeradas.

**Estilos combinados com Skills:**
O Estilo define a FORMA. O Skill define o CONTEÚDO. Juntos, o Claude escreve como você E sabe o que você precisa.`,
        steps: [
          'Acesse claude.ai → clique no seu avatar → "Estilos"',
          'Escolha um estilo pré-definido (Formal é o melhor para começar)',
          'Para personalizar: clique em "Criar Estilo Personalizado"',
          'Envie 2-5 amostras do seu trabalho (petições, pareceres, e-mails)',
          'O Claude analisa e cria um perfil de escrita que replica seu estilo',
        ],
        tips: [
          'Crie estilos diferentes para contextos diferentes: "Petição" (formal), "Cliente" (acessível), "Colega" (técnico direto)',
          'O estilo "Formal" é ideal como ponto de partida para toda redação jurídica',
          'Envie suas MELHORES peças como amostra — o Claude vai replicar aquele nível',
          'Estilos funcionam em conjunto com Skills e Projetos — não se sobrepõem',
        ],
      },
      {
        title: 'Memória Inteligente',
        subtitle: 'O Claude lembra de você entre conversas',
        level: 'intermediario',
        icon: 'brain',
        analogy: {
          text: 'Imagine um assistente que **nunca esquece**: lembra que você prefere citar o STJ antes do STF, que seu cliente João Silva tem processo em 3 varas diferentes, e que você odeia latinismos. A Memória do Claude faz exatamente isso — e agora é **grátis para todos**.',
        },
        content: `A Memória permite que o Claude lembre informações de conversas anteriores e as use automaticamente em conversas futuras. Desde março de 2026, está disponível gratuitamente para todos os usuários.

**Como funciona:**

| Aspecto | Detalhes |
|---------|---------|
| **Atualização** | A cada 24 horas, o Claude sintetiza suas conversas recentes |
| **Escopo** | Lembra preferências, padrões de trabalho, contexto recorrente |
| **Controle** | Você pode pausar, deletar ou gerenciar o que é lembrado |
| **Privacidade** | Dados da memória não são usados para treinamento |

**O que o Claude pode lembrar:**
- Sua área de atuação e especialidades
- Clientes recorrentes e contexto dos casos
- Preferências de formatação e estilo
- Jurisprudência que você cita frequentemente
- Termos técnicos específicos da sua prática
- Fluxos de trabalho que você repete

**Exemplo prático:**
Na segunda-feira, você diz: "Estou trabalhando no caso Maria Silva, rescisão indireta, 5ª Vara do Trabalho de BH." Na quinta, em outra conversa, basta dizer "continue a análise do caso Maria Silva" — o Claude já sabe tudo.

**Importação de memórias:**
O Claude agora permite importar memórias do ChatGPT e outros assistentes. Se você já tem histórico em outra IA, pode trazê-lo para o Claude sem começar do zero.

**Memória vs. Projeto:**

| | Memória | Projeto |
|-|---------|---------|
| **Persiste** | Globalmente | Dentro do projeto |
| **Escopo** | Preferências e padrões gerais | Documentos e instruções de um caso |
| **Controle** | Automático (com edição manual) | Totalmente manual |
| **Uso ideal** | Personalização geral | Contexto específico de um caso |`,
        steps: [
          'A memória já está ativa por padrão — basta usar o Claude normalmente',
          'Para gerenciar: Configurações → Privacidade → Controles de Memória',
          'Para deletar memórias específicas: peça "esqueça que eu prefiro X"',
          'Para importar do ChatGPT: Configurações → Memória → Importar',
          'Para pausar temporariamente: use o modo Incógnito',
        ],
        tips: [
          'Nas primeiras conversas, seja explícito sobre suas preferências — o Claude vai lembrar',
          'Diga coisas como "sempre que eu pedir uma petição, use o formato Visual Law"',
          'A memória funciona JUNTO com Projetos — use ambos para contexto máximo',
          'Revise suas memórias periodicamente em Configurações para garantir que estão corretas',
        ],
        links: [
          { label: 'Gerenciar Memória', url: 'https://claude.ai/settings/data-privacy-controls' },
        ],
      },
      {
        title: 'Framework CONTEXTO: Prompt Jurídico Perfeito',
        subtitle: 'A fórmula em 7 letras que transforma resultados mediocres em peças profissionais',
        level: 'intermediario',
        icon: 'target',
        analogy: {
          tag: 'A Diferença',
          text: 'A diferença entre perguntar "faça uma petição" e usar o Framework CONTEXTO é a mesma diferença entre entregar uma **folha em branco** e um **briefing completo** a um colega advogado. A qualidade do resultado depende 100% da qualidade do pedido.',
        },
        content: `A qualidade do resultado do Claude depende inteiramente da qualidade do seu prompt. O Framework CONTEXTO é uma estrutura em 7 elementos que garante prompts jurídicos completos.

**C — Cargo (papel):**
Defina quem o Claude deve ser. Não apenas "um advogado", mas com especialidade, experiência e contexto: *"Você é um advogado previdenciarista com 15 anos de experiência no TRF-1."*

**O — Objetivo (tarefa):**
Diga exatamente o que quer. Quanto mais específico, melhor: *"Elabore uma petição inicial de aposentadoria por invalidez."*

**N — Narrativa (fatos):**
Forneça todos os fatos relevantes — o Claude não é vidente: *"Cliente: João, 52 anos, pedreiro, hérnia de disco L4-L5, CID M51.1, 25 anos CLT."*

**T — Tom e formato:**
Especifique estilo, estrutura e formatação: *"Formal e direto. Parágrafos de 5 linhas. Inclua tutela antecipada."*

**E — Exclusões:**
Diga o que NÃO quer — evita erros comuns: *"Não invente jurisprudência. Marque com [VERIFICAR] quando tiver dúvida."*

**X — Exemplo (quando tiver):**
Anexe um modelo de referência: *"Siga o estilo da petição que estou anexando como referência."*

**T — Transformação iterativa:**
Refine após a primeira resposta: *"Reforce o argumento sobre impossibilidade de reabilitação. Adicione pedido alternativo de auxílio-doença."*`,
        prompt: `Você é um advogado [ESPECIALIDADE] com 15 anos de experiência, atuando no [TRIBUNAL/REGIÃO].

<caso>
[DESCREVA TODOS OS FATOS: partes, datas, valores, documentos relevantes]
</caso>

<tarefa>
Elabore [TIPO DE PEÇA] com a seguinte estrutura:
1. Endereçamento e qualificação
2. Dos fatos (cronológico)
3. Do direito (fundamente com legislação e jurisprudência)
4. Da tutela de urgência (se aplicável)
5. Dos pedidos (principal + alternativos)
6. Do valor da causa
</tarefa>

<formato>
- Linguagem formal e direta, sem rebuscamento
- Parágrafos de no máximo 5 linhas
- Priorize argumentos mais fortes primeiro
- Máximo [X] páginas
</formato>

<restricoes>
- Cite apenas jurisprudência que tenha certeza que existe
- Marque com [VERIFICAR] qualquer precedente duvidoso
- Não use latinismos desnecessários
</restricoes>`,
        steps: [
          'Defina o CARGO: especialidade e experiência do advogado virtual',
          'Especifique o OBJETIVO: tipo exato de peça ou análise',
          'Forneça a NARRATIVA: todos os fatos, datas, valores e documentos',
          'Determine o TOM: estilo de escrita e formatação desejada',
          'Liste as EXCLUSÕES: o que não quer no resultado',
          'Anexe EXEMPLO: modelo de referência (quando tiver)',
          'Planeje a TRANSFORMAÇÃO: como vai refinar o resultado',
        ],
        tips: [
          'Use tags XML (<caso>, <tarefa>, <formato>) para organizar prompts complexos',
          'Quanto mais fatos você fornecer, menos o Claude precisa inferir',
          'O CONTEXTO completo transforma rascunhos genéricos em peças quase prontas para protocolar',
          'Adapte o framework: nem toda tarefa precisa de todos os 7 elementos',
        ],
        flowSteps: [
          { title: 'Pedido Raso', description: '"Faça uma petição de aposentadoria por invalidez" → Resultado genérico e medíocre' },
          { title: 'Com CONTEXTO', description: 'Todos os 7 elementos → Resultado profissional quase pronto para protocolar' },
          { title: 'Diferença Prática', description: 'Sem CONTEXTO: 6-8h de trabalho | Com CONTEXTO: 1,5-2,5h (incluindo revisão)' },
        ],
      },
      {
        title: 'Técnicas Expert de Prompt Jurídico',
        subtitle: 'XML, Chain of Thought, iteração e refinamento profissional',
        level: 'avancado',
        icon: 'layers',
        analogy: {
          tag: 'Nível Profissional',
          text: 'Se o Framework CONTEXTO é o **briefing do caso**, as técnicas avançadas são as **habilidades de argumentação** — chain of thought é a exposição lógica, XML é a formatação processual, iteração é a revisão de pares. Juntas, elevam qualquer prompt ao nível de um escritório de ponta.',
        },
        content: `Quatro técnicas avançadas que os melhores escritórios usam para extrair resultados extraordinários do Claude:

**Técnica 1 — Tags XML para Pedidos Complexos:**
Quando o prompt tem muitas partes, use tags XML para separar seções. O Claude foi treinado para responder excepcionalmente bem a essa estruturação:

\`<caso>\` → Fatos do cliente e do processo
\`<tarefa>\` → O que você quer que ele faça
\`<formato>\` → Estilo, estrutura e formatação
\`<restricoes>\` → Limites e proibições

**Técnica 2 — Cadeia de Pensamento (Chain of Thought):**
Para análises complexas, force o Claude a raciocinar ANTES de escrever: *"Antes de redigir, analise: (1) fatos juridicamente relevantes, (2) teses aplicáveis, (3) riscos e contra-argumentos, (4) estratégia processual. Só depois redija."*

**Técnica 3 — Iteração Inteligente (4 Rodadas):**
O primeiro resultado raramente é o melhor. Use refinamento progressivo:
→ Rodada 1: Gere o rascunho completo
→ Rodada 2: Reforce argumentos fracos
→ Rodada 3: Revise como advogado da parte contrária
→ Rodada 4: Versão final com gramática e coesão

**Técnica 4 — Análise de Vulnerabilidades:**
Peça ao Claude: *"Releia toda a petição como se fosse o advogado da parte contrária. Identifique os 3 pontos mais vulneráveis e sugira como fortalecê-los."*`,
        prompt: `[TÉCNICA: ITERAÇÃO EM 4 RODADAS]

RODADA 1 — Rascunho:
"Elabore a petição com base nos fatos fornecidos."

RODADA 2 — Reforço:
"O argumento do tópico 3 está fraco. Reforce com fundamentação constitucional e adicione precedente do STJ."

RODADA 3 — Stress-test:
"Releia como advogado da parte contrária. Identifique os 3 pontos mais vulneráveis e sugira como fortalecê-los."

RODADA 4 — Finalização:
"Faça a versão final incorporando todas as melhorias. Revise gramática, coesão e formatação."`,
        tips: [
          'Tags XML funcionam melhor que markdown para prompts com múltiplas seções',
          'Chain of Thought melhora drasticamente análises de viabilidade e pareceres',
          'A rodada 3 (advogado contrário) é a mais valiosa — revela falhas invisíveis',
          'Combine as 4 técnicas: XML + CoT + Iteração para peças de alta complexidade',
        ],
        commandList: [
          { command: '<caso>...</caso>', description: 'Delimita os fatos e contexto do processo' },
          { command: '<tarefa>...</tarefa>', description: 'Define exatamente o que o Claude deve fazer' },
          { command: '<formato>...</formato>', description: 'Especifica estilo, estrutura e restrições visuais' },
          { command: '<restricoes>...</restricoes>', description: 'Lista o que NÃO deve aparecer no resultado' },
          { command: '<exemplo>...</exemplo>', description: 'Fornece modelo de referência para o Claude seguir' },
          { command: '<contexto>...</contexto>', description: 'Informações de background e legislação aplicável' },
        ],
      },
      {
        title: 'Biblioteca de Prompts Jurídicos',
        subtitle: '6 prompts profissionais prontos para copiar e usar',
        level: 'intermediario',
        icon: 'book-open',
        analogy: {
          tag: 'Formulários Inteligentes',
          text: 'Assim como todo escritório tem **modelos de petição** no armário, sua Biblioteca de Prompts é o armário digital — templates testados que você adapta em segundos. A diferença: estes prompts já incluem o Framework CONTEXTO, então os resultados são consistentemente profissionais.',
        },
        content: `Coleção de prompts profissionais testados e otimizados para as tarefas mais comuns na advocacia. Cada prompt já segue o Framework CONTEXTO e pode ser adaptado em segundos.

**1. Petição Inicial Universal:**
Use para qualquer área do direito. Estrutura completa com endereçamento, qualificação, fatos, direito, tutela, pedidos e valor da causa. Marque com [VERIFICAR] jurisprudência duvidosa.

**2. Análise de Contrato:**
Parecer consultivo completo com resumo executivo, cláusulas de risco (alto/médio/baixo), cláusulas abusivas (CDC/CC), pontos omissos e recomendações de renegociação.

**3. Recurso (qualquer tipo):**
Identifica pontos atacáveis, desenvolve fundamentação, cita precedentes e antecipa contra-argumentos. Formato: cabimento, tempestividade, preparo e razões.

**4. E-mail ao Cliente:**
Comunicação profissional e acolhedora. Sem jargão (ou com explicação). Máximo 3 parágrafos. Sempre termina com próximos passos.

**5. Análise de Viabilidade:**
Parecer objetivo: viável/parcialmente/inviável. Fundamentos, jurisprudência, contra-argumentos, riscos, estimativa de valor e recomendação estratégica.

**6. Carrossel para Instagram:**
Conteúdo educativo seguindo diretrizes OAB. Gancho provocativo, desenvolvimento prático, CTA natural. 8-10 slides com título + 3-4 linhas cada.`,
        prompt: `[PROMPT 2 — ANÁLISE DE CONTRATO]

Analise o contrato anexo e entregue um parecer consultivo com:

1. RESUMO EXECUTIVO (5 linhas máximo)
2. PARTES E OBJETO
3. CLÁUSULAS DE RISCO
   - Risco Alto (detalhe e explique por que)
   - Risco Médio
   - Risco Baixo
4. CLÁUSULAS ABUSIVAS (fundamente com CDC/CC)
5. PONTOS OMISSOS (cláusulas que deveriam constar)
6. RECOMENDAÇÕES PRÁTICAS (o que renegociar e como)

Tom: consultivo, acessível para o cliente leigo.

[PROMPT 5 — VIABILIDADE DE TESE]

Analise a viabilidade da seguinte tese: [descreva]

Entregue:
1. PARECER (favorável/parcialmente favorável/desfavorável)
2. FUNDAMENTOS LEGAIS mais fortes
3. JURISPRUDÊNCIA favorável (com ressalva [VERIFICAR])
4. CONTRA-ARGUMENTOS e como respondê-los
5. RISCOS PROCESSUAIS (incluindo sucumbência)
6. ESTIMATIVA DE VALOR
7. RECOMENDAÇÃO ESTRATÉGICA

Seja honesto. Se a tese for fraca, diga claramente.`,
        tips: [
          'Adapte os prompts para sua área — mude a especialidade, legislação e tribunais',
          'Salve seus prompts adaptados como Skills para uso automático',
          'Combine prompts: use o de viabilidade ANTES do de petição para casos novos',
          'Itere: o primeiro resultado é rascunho — refine com as técnicas de iteração',
        ],
        elementGrid: [
          { icon: 'file-text', name: 'Petição Universal', description: 'Qualquer área do direito', whenToUse: 'Petições iniciais, contestações, réplicas' },
          { icon: 'file-check', name: 'Análise Contratual', description: 'Parecer consultivo completo', whenToUse: 'Revisão de contratos, due diligence' },
          { icon: 'scale', name: 'Recurso', description: 'Pontos atacáveis + fundamentação', whenToUse: 'Apelações, agravos, REsp' },
          { icon: 'mail', name: 'E-mail ao Cliente', description: 'Profissional e acolhedor', whenToUse: 'Atualizações, orientações, cobranças' },
          { icon: 'target', name: 'Viabilidade', description: 'Parecer objetivo e honesto', whenToUse: 'Antes de aceitar novo caso' },
          { icon: 'trending-up', name: 'Instagram', description: 'Carrossel educativo OAB', whenToUse: 'Marketing de conteúdo semanal' },
        ],
      },
      {
        title: 'Projetos',
        subtitle: 'Pastas de trabalho inteligentes',
        level: 'intermediario',
        icon: 'folder-open',
        analogy: {
          text: 'Cada caso no escritório tem uma **pasta física** com tudo: procuração, petições, documentos, anotações. No Claude, essa pasta é o Projeto — e o melhor: ele **lê tudo automaticamente** antes de cada conversa.',
        },
        content: `Um Projeto é como uma **pasta de trabalho** no Claude. Dentro dela, você guarda documentos, anotações e instruções sobre um caso ou cliente.

**Vantagens dos Projetos:**
- **Instruções personalizadas** que valem para todas as conversas do projeto
- **Knowledge Base:** envie PDFs, Word, planilhas como referência permanente
- **Múltiplas conversas** compartilhando o mesmo contexto
- **Memória persistente:** diferente de conversas soltas, nada se perde

**Projeto = memória permanente** (instruções, estilo, dados fixos)
**Conversa = sessão de trabalho** (descartável, focada numa tarefa)

**Exemplo para advogado trabalhista:**
Crie um Projeto "Caso Maria Silva — Rescisão Indireta" e envie: petição inicial, CTPS, holerites, e-mails do empregador, laudo médico. Nas instruções: "Este caso é de rescisão indireta fundamentada no art. 483, 'd' da CLT. A cliente é bancária com 12 anos de serviço."`,
        steps: [
          'Clique em "Projetos" no menu lateral',
          'Clique em "Novo Projeto" e dê um nome claro (ex: "Caso João Silva — Trabalhista 2026")',
          'Adicione instruções com o contexto do projeto',
          'Envie documentos: petições, contratos, laudos',
          'Comece a conversar — o Claude já terá todo o contexto',
        ],
        tips: [
          'Crie um projeto para cada cliente ou caso importante',
          'Envie a petição inicial, contestação, laudos periciais como Knowledge Base',
          'Inicie uma nova conversa dentro do projeto para cada tarefa diferente',
          'Atualize as instruções conforme o caso evolui',
        ],
      },
      {
        title: 'Artefatos',
        subtitle: 'Criações visuais e interativas',
        level: 'intermediario',
        icon: 'palette',
        analogy: {
          text: 'Imagine que em vez de só ditar uma resposta, o estagiário **desenha um organograma, monta uma planilha ou cria um fluxograma** ali na hora. Artefatos são criações visuais do Claude — como uma segunda tela de trabalho.',
        },
        content: `Artefatos são **criações visuais** que o Claude mostra numa janela separada, ao lado da conversa. Em vez de só escrever texto, ele cria coisas interativas.

**O que o Claude pode criar:**
- Documentos formatados (relatórios, memos)
- Código funcional que roda no navegador
- Páginas web e landing pages
- Gráficos e diagramas (fluxogramas, organogramas)
- Planilhas e tabelas organizadas
- Aplicativos interativos (calculadoras, ferramentas)

**Exemplo para advogado:** Peça "Crie um fluxograma interativo do procedimento da ação trabalhista, desde a petição inicial até a execução." O Claude cria um diagrama visual navegável.

Basta pedir! O Claude decide automaticamente quando criar um artefato. Para forçar, diga "crie um artefato com..." ou "mostre em uma visualização separada".`,
        tips: [
          'Peça "Crie um fluxograma do procedimento de uma ação trabalhista"',
          'Use para criar apresentações visuais para clientes',
          'Ative em Configurações → Artefatos (recomendamos manter ligado)',
          'Peça calculadoras: "Crie uma calculadora de custas judiciais para o TJ-SP"',
        ],
      },
      {
        title: 'Execução de Código',
        subtitle: 'Análise de dados sem programar',
        level: 'intermediario',
        icon: 'zap',
        analogy: {
          text: 'O estagiário não só lê a planilha — ele **abre o Excel, faz as contas e entrega o resultado pronto**. Execução de código permite ao Claude processar dados reais, sem você precisar saber programar.',
        },
        content: `Permite que o Claude **execute código em tempo real** dentro da conversa. Mesmo sem saber programar, você pode pedir para:

- **Analisar planilhas:** "Analise esta planilha de honorários e diga qual cliente deve mais"
- **Criar gráficos:** "Faça um gráfico de barras com processos por mês"
- **Processar documentos:** "Extraia todos os nomes e CPFs deste PDF"
- **Cálculos complexos:** "Calcule juros e correção monetária de jan/2020 a hoje pelo IPCA"
- **Gerar arquivos:** "Gere um documento Word com o resumo deste caso"

**Caso real:** Um advogado enviou uma planilha com 500 linhas de cálculos trabalhistas e o Claude identificou 23 erros de cálculo em menos de 1 minuto — economizando horas de revisão manual.`,
        steps: [
          'Em Configurações, ative "Execução de Código e Criação de Arquivos"',
          'Envie seu arquivo (planilha, PDF, documento)',
          'Descreva o que quer: "Organize estes dados por data e crie uma tabela"',
          'Aguarde o Claude processar',
          'Baixe o resultado (Word, Excel, PDF) pelo botão de download',
        ],
      },
      {
        title: 'Raciocínio Estendido',
        subtitle: 'Quando o Claude precisa pensar mais',
        level: 'avancado',
        icon: 'brain',
        analogy: {
          text: 'Em questões simples, o advogado responde rápido. Mas para teses complexas com jurisprudência conflitante, ele **para, estuda, pondera e só então responde**. O Raciocínio Estendido é esse "modo estudo" do Claude.',
        },
        content: `O Raciocínio Estendido (Extended Thinking) faz o Claude "pensar mais tempo" antes de responder. Ao ativar, ele:

- Analisa o problema de múltiplos ângulos
- Considera contra-argumentos
- Verifica a consistência da própria resposta
- Produz respostas mais fundamentadas

**Quando usar:**
- Análise de teses jurídicas complexas com múltiplas correntes
- Pareceres sobre questões controvertidas
- Comparação de jurisprudência conflitante
- Questões de direito constitucional com ponderação de princípios

**Quando NÃO usar:**
- Consultas simples e diretas
- Redação de peças com estrutura já definida
- Tarefas mecânicas (extração de dados, organização)

**Atenção:** Consome significativamente mais tokens. Use apenas quando a complexidade justificar.`,
        tips: [
          'Ative na conversa quando precisar de análise profunda',
          'Ideal para teses jurídicas inovadoras ou controversas',
          'Desative para tarefas simples — economize tokens',
        ],
      },
      {
        title: 'Pesquisa Jurídica Avançada no Chat',
        subtitle: 'Técnicas expert para consultas complexas',
        level: 'expert',
        icon: 'search',
        analogy: {
          text: 'Não pergunte ao Claude como um leigo — pergunte como um **professor de direito**: "Analise dialeticamente", "Mapeie divergências entre tribunais", "Faça stress-test da minha tese." Perguntas inteligentes = respostas extraordinárias.',
        },
        content: `Técnicas avançadas para extrair o máximo do chat em pesquisas jurídicas:

**Técnica 1 — Análise Dialética:**
Peça ao Claude para argumentar os dois lados: "Apresente os argumentos a FAVOR e CONTRA a aplicação da teoria da perda de uma chance neste caso. Para cada argumento, cite a jurisprudência mais relevante."

**Técnica 2 — Mapeamento de Divergências:**
"Mapeie as divergências entre STF e STJ sobre [tema]. Para cada tribunal, indique: tese dominante, precedentes, fundamentos, e estado atual da discussão."

**Técnica 3 — Stress-test de Tese:**
"Atue como advogado da parte contrária. Encontre todas as vulnerabilidades da seguinte tese: [sua tese]. Para cada vulnerabilidade, sugira como o adversário a exploraria e como eu poderia me defender."

**Técnica 4 — Engenharia Reversa de Decisão:**
"Analise esta decisão judicial e identifique: ratio decidendi, obiter dicta, premissas implícitas, possíveis distinções para casos futuros, e se há vulnerabilidade para recurso."`,
        prompt: `Atue como um jurista especialista em [área]. Analise a seguinte questão jurídica sob múltiplas perspectivas:

QUESTÃO: [descreva]

Para cada perspectiva:
1. Identifique a corrente doutrinária
2. Cite os principais autores
3. Liste precedentes relevantes (STF, STJ, TST)
4. Avalie a força de cada argumento (forte/médio/fraco)
5. Indique a tendência atual da jurisprudência

Ao final, recomende a linha argumentativa mais robusta e explique por quê.`,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // SEÇÃO 4: COWORK
  // ═══════════════════════════════════════════════════════════
  {
    id: 'cowork',
    title: 'Claude Cowork',
    description: 'Seu assistente que executa tarefas completas',
    icon: 'handshake',
    cards: [
      {
        title: 'O que é o Cowork',
        subtitle: 'Seu colega de trabalho digital',
        level: 'intermediario',
        icon: 'monitor',
        analogy: {
          text: 'A **sala de trabalho** do escritório. Entregue os documentos, explique a tarefa e **saia para tomar café**. Quando voltar, o trabalho está pronto — petições, planilhas, relatórios, tudo salvo na sua pasta.',
        },
        content: `O Cowork é a funcionalidade mais poderosa do Claude para quem **não é programador**. Ele transforma o Claude em um verdadeiro "colega de trabalho digital" que roda no seu computador.

Enquanto o chat responde mensagens uma a uma, o Cowork permite que o Claude execute tarefas complexas de múltiplas etapas — criando arquivos reais, organizando pastas, gerando documentos formatados e coordenando subtarefas em paralelo.

**O que ele pode fazer:**
- Organizar arquivos e pastas inteiras
- Criar documentos Word, Excel, PowerPoint
- Processar dados e gerar relatórios
- Pesquisar e sintetizar informações
- Trabalhar com múltiplas tarefas em paralelo
- Delegar para sub-agentes especializados`,
        steps: [
          'Abra o Claude Desktop e troque para a aba "Cowork"',
          'Escolha uma pasta para o Claude trabalhar',
          'Conceda permissão para ler, editar e criar arquivos',
          'Descreva sua tarefa de forma específica e detalhada',
          'Revise o plano do Claude e deixe-o executar',
          'Acompanhe em tempo real ou volte quando terminar',
        ],
        links: [
          { label: 'Baixar Claude Desktop', url: 'https://claude.ai/download' },
        ],
      },
      {
        title: 'Organizando suas Pastas',
        subtitle: 'A lógica dos "Cérebros"',
        level: 'intermediario',
        icon: 'layers',
        content: `Quanto mais organizados estiverem seus arquivos, melhor será o resultado do Cowork. Use a lógica dos 3 tipos de "Cérebros":

**Tipo 1 — Pasta por Área do Direito:**
Base de conhecimento organizada sobre uma área específica. Contém legislação, jurisprudência, doutrina, modelos e súmulas.

**Tipo 2 — Pasta por Processo/Cliente:**
Todos os documentos de um processo específico. Contém peças, decisões, provas, prazos e notas estratégicas.

**Tipo 3 — Pasta por Tema Específico:**
Para dominar um assunto transversal (ex: LGPD em clínicas, liminar para medicamento off-label). Cruza documentos de várias áreas.

**Arquivo CLAUDE.md:** Crie na raiz de cada pasta com instruções como:
"Esta pasta contém o processo trabalhista nº 0001234-56.2025.5.03.0001. Reclamante: Maria Silva. Reclamada: Empresa ABC. Tese principal: rescisão indireta (art. 483, 'd', CLT)."`,
        tips: [
          'Crie uma pasta específica para trabalhar com o Cowork (nunca use pastas com dados bancários)',
          'Use subpastas organizadas: Legislação, Jurisprudência, Modelos, Provas',
          'Adicione um arquivo CLAUDE.md na raiz da pasta com instruções específicas do caso',
          'O CLAUDE.md funciona como instruções automáticas para aquela pasta',
        ],
      },
      {
        title: 'Análise de Contratos',
        subtitle: 'Revisão cláusula por cláusula',
        level: 'intermediario',
        icon: 'file-check',
        analogy: {
          text: 'Como ter um advogado revisor que lê **cada cláusula com marca-texto colorido**: verde (ok), amarelo (atenção) e vermelho (risco). Em 3 minutos no lugar de 3 horas.',
        },
        content: `Uma das tarefas mais poderosas do Cowork. Coloque o contrato (PDF ou Word) na pasta e peça a análise.

O Claude classifica cada cláusula como:
- **VERDE** — Padrão de mercado, sem risco
- **AMARELO** — Merece atenção, pode ser melhorado
- **VERMELHO** — Risco alto, precisa de alteração

Para cláusulas amarelas e vermelhas, ele sugere redações alternativas. Ao final, gera um resumo executivo com: partes, objeto, valor, prazo, cláusulas críticas e recomendação geral.

**Exemplo prático:** Advogado empresarial recebe um contrato de prestação de serviços de 25 páginas. Em 3 minutos, o Cowork identifica: 2 cláusulas vermelhas (limitação de responsabilidade desfavorável, cláusula penal abusiva) e 5 amarelas.`,
        prompt: `Analise este contrato cláusula por cláusula. Para cada cláusula:

VERDE = Padrão de mercado, sem risco
AMARELO = Merece atenção, pode ser melhorado
VERMELHO = Risco alto, precisa de alteração

Para cláusulas amarelas e vermelhas, sugira uma redação alternativa.

Ao final, faça um resumo executivo com: partes, objeto, valor, prazo, cláusulas críticas e recomendação geral (aprovar, aprovar com ressalvas, rejeitar).

Salve como documento Word.`,
        flowSteps: [
          { title: 'Upload', description: 'Coloque o contrato na pasta do Cowork' },
          { title: 'Análise', description: 'Claude lê e classifica cada cláusula (Verde/Amarelo/Vermelho)' },
          { title: 'Sugestões', description: 'Redações alternativas para cláusulas de risco' },
          { title: 'Relatório', description: 'Resumo executivo em Word com recomendação final' },
        ],
      },
      {
        title: 'Parecer Jurídico',
        subtitle: 'Pareceres completos e estruturados',
        level: 'avancado',
        icon: 'file-text',
        analogy: {
          text: 'O estagiário mais dedicado do escritório: lê todos os documentos, **pesquisa legislação, monta a fundamentação e entrega o parecer formatado**. Você revisa e assina.',
        },
        content: `Com base nos documentos da pasta, o Claude elabora pareceres jurídicos completos com estrutura profissional.

**Exemplo prático:** Advogada de direito imobiliário precisa de parecer sobre usucapião especial urbana. Coloca na pasta: matrícula do imóvel, IPTU, contas de luz, declarações de vizinhos. O Cowork gera parecer completo com análise de cada requisito legal (art. 183 CF e art. 1.240 CC).`,
        prompt: `Com base nos documentos desta pasta, elabore um parecer jurídico completo com a seguinte estrutura:

I. Consulta (resumo do que foi perguntado)
II. Fatos Relevantes (extraídos dos documentos)
III. Questão Jurídica
IV. Fundamentação (com referência aos documentos da pasta, legislação e jurisprudência)
V. Teses Favoráveis e Contrárias
VI. Análise de Riscos (probabilidade e impacto)
VII. Conclusão e Recomendações

Salve como documento Word com formatação profissional.`,
        tips: [
          'Inclua toda a legislação relevante na pasta',
          'Sempre revise — o Claude gera rascunhos, não peças finais',
          'A responsabilidade profissional é sempre do advogado',
          'Peça para citar artigos específicos e jurisprudência real',
        ],
      },
      {
        title: 'Linha do Tempo Processual',
        subtitle: 'Cronologia completa do processo',
        level: 'intermediario',
        icon: 'clock',
        analogy: {
          text: 'Assumir um processo com 47 peças é como entrar num filme pela metade. A timeline é o **"resumo até aqui"** — tudo organizado em ordem, com datas, atos e impactos estratégicos.',
        },
        content: `O Claude lê todas as peças e decisões e cria uma cronologia completa com datas, atos processuais, documentos de referência e observações estratégicas.

**Exemplo prático:** Advogado assume um processo já em andamento com 47 peças. Em vez de ler tudo manualmente, o Cowork cria uma timeline completa em Excel com links para cada documento de referência.`,
        prompt: `Leia todas as peças e decisões deste processo. Crie uma planilha Excel com a linha do tempo completa contendo: Data, Ato Processual, Parte que praticou, Documento de Referência, Observações Estratégicas e Impacto no Caso. Ordene por data. Destaque em amarelo decisões interlocutórias e em vermelho prazos.`,
      },
      {
        title: 'Auditoria Processual',
        subtitle: 'Detecção de falhas processuais',
        level: 'avancado',
        icon: 'search',
        analogy: {
          text: 'Um **raio-X do processo**: verifica cada osso (elemento processual) e identifica fraturas (falhas). Competência, citação, prazos, legitimidade, provas — nada escapa.',
        },
        content: `Auditoria completa verificando: competência do juízo, regularidade de citação/intimação, prazos e preclusões, legitimidade, adequação dos pedidos, regularidade das provas, decisões interlocutórias e recursos cabíveis.

Para cada falha encontrada, o Claude indica: documento de referência, norma violada, impacto para o caso e correção sugerida.

**Quando usar:** Ao assumir processos em andamento, antes de audiências importantes, na preparação de recursos.`,
        prompt: `Faça uma auditoria processual completa deste caso. Verifique:
1. Competência do juízo
2. Regularidade da citação/intimação
3. Observância de prazos e preclusões
4. Legitimidade ativa e passiva
5. Adequação dos pedidos e causa de pedir
6. Regularidade das provas
7. Decisões interlocutórias pendentes de recurso
8. Recursos cabíveis e seus prazos

Para cada falha encontrada, indique: (a) documento onde está a falha, (b) norma violada, (c) impacto para o caso, (d) correção sugerida.

Salve como documento Word e crie um resumo executivo no início.`,
      },
      {
        title: 'Relatório para Cliente',
        subtitle: 'Comunicação clara sem juridiquês',
        level: 'intermediario',
        icon: 'bar-chart',
        analogy: {
          text: 'Cliente empresário não quer ler 20 páginas de juridiquês. Quer saber: **o que aconteceu, quanto custa e o que precisa fazer**. O Claude traduz o processo para linguagem executiva.',
        },
        content: `Crie relatórios executivos sobre o andamento do caso em linguagem simples e acessível, sem juridiquês desnecessário.

**Exemplo prático:** Cliente empresário quer saber o status de 3 processos trabalhistas. O Cowork gera um relatório único com: resumo por processo, próximos passos, riscos financeiros e prazos importantes — tudo em linguagem que o cliente entende.`,
        prompt: `Crie um relatório sobre o andamento deste caso para enviar ao cliente.

REGRAS:
- Linguagem simples e clara (sem termos técnicos desnecessários)
- Quando usar termos jurídicos, explique entre parênteses
- Estrutura: Resumo Executivo, O Que Aconteceu (últimos 30 dias), Próximos Passos, Prazos Importantes, Riscos e Oportunidades, Recomendações
- Tom profissional mas acessível
- Formato: documento Word com formatação profissional
- Inclua uma tabela resumo dos prazos no final`,
      },
      {
        title: 'Controle de Prazos',
        subtitle: 'Nunca mais perca um prazo',
        level: 'intermediario',
        icon: 'calendar',
        analogy: {
          text: 'Perder prazo é o **pesadelo de todo advogado**. O Claude lê intimações e monta automaticamente a planilha de prazos com semáforo: vermelho (urgente), amarelo (atenção) e verde (tranquilo).',
        },
        content: `O Claude lê decisões e intimações e cria planilhas com controle completo de prazos: processo, data da intimação, prazo em dias úteis, data limite, providência necessária e status.

**Exemplo prático:** Escritório recebe 15 intimações na semana. O Cowork lê todas e gera uma planilha única com prazos calculados automaticamente, destacando em vermelho os que vencem nos próximos 5 dias úteis.`,
        prompt: `Leia as decisões e intimações desta pasta. Crie uma planilha Excel com:
- Número do Processo
- Data da Publicação/Intimação
- Tipo de Prazo (recurso, manifestação, cumprimento)
- Prazo em Dias Úteis
- Data Limite para Cumprimento
- Providência Necessária
- Responsável (preencher "A DEFINIR")
- Status (PENDENTE)

Use formatação condicional:
- VERMELHO: prazos que vencem nos próximos 5 dias úteis
- AMARELO: prazos de 6-15 dias úteis
- VERDE: prazos acima de 15 dias úteis

Ordene por data limite (mais urgente primeiro).`,
      },
      {
        title: 'Modos de Trabalho (Prompts Prontos)',
        subtitle: '6 modos para copiar e usar imediatamente',
        level: 'intermediario',
        icon: 'target',
        analogy: {
          text: 'Em vez de explicar tudo do zero toda vez, tenha **modos de trabalho prontos**: "Modo Especialista", "Modo Auditor", "Modo Timeline". É como trocar o chapéu do estagiário conforme a tarefa.',
        },
        content: `Copie e use estes prompts diretamente no Cowork ou Chat. Cada um ativa um "modo de trabalho" diferente do Claude:`,
        commandList: [
          { command: 'Modo Especialista', description: '"Atue como advogado especialista em [área]. Analise o caso dos documentos desta pasta considerando legislação, jurisprudência e doutrina. Apresente: tese principal, fundamentos, riscos e recomendações."' },
          { command: 'Modo Auditor', description: '"Faça uma auditoria processual completa. Verifique: competência, citação, prazos, legitimidade, provas, recursos cabíveis. Para cada falha: norma violada, impacto e correção."' },
          { command: 'Modo Timeline', description: '"Leia todas as peças e crie uma linha do tempo em Excel com: Data, Ato, Parte, Documento, Observação Estratégica. Destaque decisões em amarelo e prazos em vermelho."' },
          { command: 'Modo Relatório', description: '"Crie um relatório para o cliente em linguagem simples. Estrutura: Resumo, O que aconteceu, Próximos passos, Prazos, Riscos e Recomendações. Sem juridiquês."' },
          { command: 'Modo Contrato', description: '"Analise este contrato cláusula por cláusula. Verde = ok, Amarelo = atenção, Vermelho = risco. Sugira redações alternativas para amarelos e vermelhos. Resumo executivo ao final."' },
          { command: 'Modo Organização', description: '"Organize esta pasta: renomeie arquivos com padrão claro, crie subpastas temáticas, gere um índice em Markdown e um CLAUDE.md com instruções para futuras sessões."' },
        ],
        tips: [
          'Salve seus prompts favoritos nas instruções do Projeto',
          'Combine modos: "Modo Timeline + Modo Auditor" para análise completa',
          'Adapte os prompts para sua especialidade jurídica',
        ],
      },
      {
        title: 'Due Diligence Documental',
        subtitle: 'Análise completa de documentação societária',
        level: 'avancado',
        icon: 'building',
        analogy: {
          text: 'M&A com 120 documentos? O Cowork divide entre **sub-agentes em paralelo** — como ter 5 estagiários analisando simultaneamente. Resultado: inventário completo, mapa de riscos e lista de pendências.',
        },
        content: `Para cada documento societário, contrato ou certidão, o Claude extrai: tipo, data, partes, valores, vigência e cláusulas críticas. Gera planilha de controle e relatório destacando pontos de atenção, irregularidades e documentos faltantes.

**Exemplo prático:** M&A de empresa de médio porte com 120 documentos. O Cowork analisa todos em paralelo (via sub-agentes) e entrega: planilha de inventário documental, relatório de riscos e lista de pendências.`,
        prompt: `Realize uma due diligence nesta pasta de documentos. Para cada documento, extraia:
- Tipo de documento
- Data
- Partes envolvidas
- Valores (se houver)
- Vigência
- Cláusulas críticas ou irregularidades

Monte:
1. Planilha Excel de controle (inventário documental completo)
2. Relatório Word com: (a) resumo executivo, (b) pontos de atenção, (c) irregularidades encontradas, (d) documentos faltantes, (e) recomendações

Classifique os riscos como: BAIXO, MÉDIO, ALTO, CRÍTICO.`,
      },
      {
        title: 'Organização de Documentos Processuais',
        subtitle: 'Renomeie e classifique centenas de arquivos automaticamente',
        level: 'intermediario',
        icon: 'folder-open',
        analogy: {
          text: 'Sabe quando você baixa 47 documentos do PJe e vem tudo como "documento_1.pdf", "documento_2.pdf"? O Cowork é como ter um **estagiário organizador** que lê cada PDF, identifica o que é e renomeia com o padrão do escritório — em segundos.',
        },
        content: `Um dos maiores problemas da prática forense é a desorganização de documentos processuais. O Cowork resolve isso automaticamente.

**O problema:**
Ao baixar documentos de processos (PJe, e-SAJ, PROJUDI), os arquivos vêm com nomes genéricos como "doc_12345.pdf" ou "evento_678.pdf". Encontrar algo específico vira pesadelo.

**A solução com Cowork:**
Coloque todos os documentos numa pasta e peça ao Cowork para ler, identificar e renomear cada um seguindo o padrão do escritório.

**Exemplo prático — Processo Trabalhista:**

Antes:
- documento_1.pdf
- documento_2.pdf
- evento_45.pdf
- peca_processual_3.pdf

Depois:
- 001_PETICAO-INICIAL_2024-03-15.pdf
- 002_PROCURACAO_RECLAMANTE_2024-03-15.pdf
- 003_CTPS_JOSE-SILVA.pdf
- 004_HOLERITES_JAN-DEZ-2023.pdf
- 005_CONTESTACAO_RECLAMADA_2024-05-10.pdf
- 006_ATA-AUDIENCIA_2024-07-22.pdf
- 007_SENTENCA_2024-09-30.pdf

**O que o Cowork faz automaticamente:**
1. Lê cada PDF e identifica o tipo de documento
2. Extrai a data do documento
3. Identifica as partes envolvidas
4. Renomeia seguindo o padrão: NUMERO_TIPO_DETALHES_DATA
5. Move para subpastas organizadas (opcional)
6. Gera um índice em Excel com todos os documentos`,
        prompt: `Leia TODOS os documentos PDF desta pasta. Para cada um:

1. Identifique o tipo: petição inicial, contestação, réplica, sentença, acórdão, procuração, substabelecimento, ata de audiência, laudo pericial, certidão, alvará, mandado, CTPS, holerite, contrato, comprovante, recurso, contrarrazões, decisão interlocutória, despacho, outro.

2. Extraia: data do documento, partes mencionadas, número do processo.

3. Renomeie cada arquivo seguindo este padrão:
   [SEQUÊNCIA 3 dígitos]_[TIPO EM MAIÚSCULO]_[DETALHE RELEVANTE]_[DATA YYYY-MM-DD].pdf

4. Crie as seguintes subpastas e mova os documentos:
   - /Peticoes (iniciais, contestações, réplicas, recursos)
   - /Decisoes (sentenças, acórdãos, despachos, decisões)
   - /Documentos (CTPS, holerites, contratos, comprovantes)
   - /Audiencias (atas, termos)
   - /Procuracoes (procurações, substabelecimentos)
   - /Pericias (laudos, quesitos)

5. Gere um arquivo "INDICE_PROCESSUAL.xlsx" com: sequência, nome original, nome novo, tipo, data, subpasta, resumo em 1 linha.`,
        tips: [
          'Funciona com qualquer área: trabalhista, cível, criminal, tributário, familiar',
          'Customize o padrão de nomes editando o prompt — use o padrão do seu escritório',
          'Para processos grandes (100+ documentos), processe em lotes de 30-40 por vez',
          'Salve este prompt como Skill para usar em todos os processos novos',
        ],
        steps: [
          'Baixe todos os documentos do processo numa pasta (ex: "Processo_12345")',
          'Abra o Cowork e aponte para essa pasta',
          'Cole o prompt de organização acima',
          'Aguarde o Cowork processar (2-5 minutos para ~50 documentos)',
          'Confira o índice Excel gerado e os documentos renomeados',
        ],
      },
      {
        title: 'Preparação Completa para Audiências',
        subtitle: 'Do processo à sala de audiência, tudo preparado',
        level: 'avancado',
        icon: 'briefcase',
        analogy: {
          text: 'Imagine chegar na audiência com um **dossiê completo**: cronologia dos fatos, roteiro de perguntas, teses e contra-teses, pontos fracos do adversário e um resumo de bolso. O Cowork prepara tudo isso a partir dos documentos do processo.',
        },
        content: `A preparação de audiências é uma das tarefas mais críticas e demoradas. O Cowork transforma horas de preparação em minutos.

**O que o Cowork gera automaticamente:**

**1. Cronologia dos Fatos**
Timeline completa com datas, eventos e documentos que comprovam cada fato. Formato de tabela para consulta rápida.

**2. Roteiro de Perguntas para Testemunhas**
Perguntas organizadas por testemunha, com objetivo de cada pergunta e documento de suporte. Inclui perguntas de contradita.

**3. Quadro de Teses**
Teses do autor vs. teses do réu, lado a lado, com fundamentos legais e jurisprudência de apoio para cada uma.

**4. Pontos de Atenção**
Fragilidades do seu caso, argumentos fortes do adversário e sugestões de como contornar.

**5. Resumo de Bolso**
Uma página A4 com as informações essenciais para consulta rápida durante a audiência.

**Exemplo prático — Audiência de Instrução Trabalhista:**
O advogado coloca na pasta: petição inicial, contestação, réplica, atas de audiências anteriores, laudos e todos os documentos probatórios. Em 5 minutos, recebe os 5 documentos acima prontos.`,
        prompt: `Analise TODOS os documentos desta pasta referentes ao processo judicial e prepare um dossiê completo para audiência:

DOCUMENTO 1 — CRONOLOGIA DOS FATOS:
- Tabela em Excel com colunas: Data, Fato, Documento Comprobatório, Relevância (Alta/Média/Baixa)
- Ordem cronológica
- Destaque os fatos controversos

DOCUMENTO 2 — ROTEIRO DE PERGUNTAS:
- Para cada testemunha listada no processo:
  a) Perguntas de qualificação
  b) Perguntas sobre os fatos (vincular a cada fato da cronologia)
  c) Perguntas de contradita (se testemunha da parte adversa)
  d) Objetivo de cada pergunta (o que se pretende provar)
- Formato Word, organizado por testemunha

DOCUMENTO 3 — QUADRO DE TESES:
- Tabela comparativa: Tese do Autor | Tese do Réu
- Para cada ponto: fundamento legal, jurisprudência citada, força do argumento (forte/médio/fraco)
- Identifique os pontos pacíficos e os controversos

DOCUMENTO 4 — PONTOS DE ATENÇÃO:
- Lista das fragilidades do nosso caso
- Argumentos mais fortes da parte adversa
- Sugestão de como contornar cada ponto fraco
- Possíveis perguntas que o juiz pode fazer

DOCUMENTO 5 — RESUMO DE BOLSO (1 página):
- Número do processo, vara, juiz
- Partes e advogados
- Objeto da ação em 2 linhas
- 5 fatos-chave
- 3 teses principais
- 3 pontos de atenção
- Pedidos

Salve tudo em uma subpasta "AUDIENCIA_[DATA]".`,
        tips: [
          'Envie o máximo de documentos do processo — quanto mais contexto, melhor a preparação',
          'Adapte o prompt para o tipo de audiência: instrução, conciliação, una, custódia',
          'O "Resumo de Bolso" é ideal para imprimir e levar à audiência',
          'Combine com o roteiro de perguntas para não esquecer nenhum ponto',
        ],
        flowSteps: [
          { title: 'Documentos', description: 'Coloque todo o processo digitalizado na pasta' },
          { title: 'Análise', description: 'O Cowork lê e cruza todas as informações' },
          { title: 'Dossiê', description: '5 documentos gerados: cronologia, perguntas, teses, alertas, resumo' },
          { title: 'Audiência', description: 'Vá preparado com o dossiê completo' },
        ],
      },
      {
        title: 'Gestão de Carteira de Processos',
        subtitle: 'Controle todos os seus processos num único relatório',
        level: 'intermediario',
        icon: 'database',
        analogy: {
          text: 'Imagine que cada processo do escritório é um paciente num hospital. O Cowork funciona como o **painel de controle da UTI**: mostra status de cada um, alertas de urgência e o que precisa de atenção imediata.',
        },
        content: `Advogados que gerenciam dezenas ou centenas de processos precisam de uma visão consolidada. O Cowork cria dashboards completos a partir dos seus dados.

**O que você obtém:**

**Dashboard Geral:**
Planilha consolidada com todos os processos do escritório, status atualizado, próximos prazos e ações pendentes.

**Relatórios por Cliente:**
Para cada cliente, um relatório individual com seus processos, andamentos recentes e valores envolvidos.

**Alertas de Prioridade:**
Classificação automática por urgência: prazos vencendo, audiências próximas, decisões pendentes de recurso.

**Exemplo prático:**
Um escritório com 80 processos ativos. Em vez de checar cada um individualmente, o advogado coloca os dados na pasta e recebe: 1 planilha master + 1 relatório por cliente + 1 lista de urgências.

**Como funciona na prática:**
1. Exporte os dados do seu sistema de gestão (ou monte uma planilha simples)
2. Coloque na pasta do Cowork
3. Peça a consolidação
4. Receba o dashboard pronto`,
        prompt: `Analise os dados processuais desta pasta e gere um dashboard completo de gestão:

PLANILHA 1 — DASHBOARD GERAL (Excel):
- Colunas: Nº Processo, Cliente, Parte Adversa, Tipo de Ação, Vara/Tribunal, Status, Fase Atual, Último Andamento, Data Último Andamento, Próximo Prazo, Dias Restantes, Valor da Causa, Honorários, Prioridade
- Formatação condicional: vermelho (prazo < 5 dias), amarelo (5-15 dias), verde (> 15 dias)
- Aba "Resumo" com: total de processos, processos por área, processos por fase, processos por prioridade

PLANILHA 2 — ALERTAS DE URGÊNCIA (Excel):
- Apenas processos com ações pendentes nos próximos 30 dias
- Ordenar por urgência (prazo mais próximo primeiro)
- Colunas: Processo, Cliente, Prazo, Tipo de Providência, Responsável, Status

RELATÓRIOS INDIVIDUAIS — Um arquivo Word por cliente com:
- Lista dos processos do cliente
- Status resumido de cada processo
- Últimos andamentos relevantes (30 dias)
- Próximas ações previstas
- Valores envolvidos (se disponíveis)

Salve tudo em subpasta "GESTAO_[MÊS]".`,
        tips: [
          'Atualize mensalmente para manter o controle atualizado',
          'Use a planilha de alertas como pauta da reunião semanal do escritório',
          'Os relatórios por cliente são ótimos para enviar como prestação de contas',
          'Combine com o Controle de Prazos para uma visão 360° do escritório',
        ],
      },
      {
        title: 'Cálculos Jurídicos e Tabelas',
        subtitle: 'Correção monetária, juros, verbas trabalhistas e mais',
        level: 'intermediario',
        icon: 'spreadsheet',
        analogy: {
          text: 'Em vez de usar calculadoras online ou planilhas complexas, o Cowork funciona como um **departamento contábil particular**: você diz o que precisa calcular, ele faz as contas e entrega a planilha formatada.',
        },
        content: `O Cowork gera planilhas de cálculos jurídicos completas, com fórmulas e explicações. Basta descrever o que precisa.

**Cálculos Trabalhistas:**
Verbas rescisórias completas: saldo de salário, férias (vencidas, proporcionais, 1/3), 13° proporcional, aviso prévio, FGTS + 40%, multa do art. 477 CLT. Tudo com fórmulas visíveis.

**Correção Monetária:**
Atualização de valores por qualquer índice (IPCA-E, INPC, IGP-M, SELIC) com cálculo mês a mês e resultado final.

**Liquidação de Sentença:**
A partir do dispositivo da sentença, o Cowork identifica as verbas devidas e calcula cada uma com base nos parâmetros do processo.

**Cálculo de Custas e Honorários:**
Com base no valor da causa e na tabela da OAB, calcula custas processuais, honorários advocatícios (contratuais e sucumbenciais).

**Exemplo prático — Rescisão Trabalhista:**
"Calcule as verbas rescisórias de dispensa sem justa causa: salário R$ 4.500, admissão 15/03/2021, dispensa 10/01/2025, aviso prévio indenizado. Gere a planilha completa."`,
        prompt: `Gere uma planilha Excel completa de cálculos jurídicos com base nos seguintes dados:

[COLE AQUI OS DADOS DO CASO: tipo de cálculo, valores, datas, parâmetros]

A planilha deve conter:
1. ABA "CÁLCULOS" — Todos os cálculos detalhados com fórmulas visíveis (não valores fixos)
2. ABA "MEMÓRIA" — Memória de cálculo descritiva explicando cada etapa
3. ABA "RESUMO" — Quadro resumo com valores parciais e total
4. ABA "PARÂMETROS" — Dados de entrada utilizados (para conferência)

Regras:
- Use as fórmulas corretas do Excel (não calcule manualmente)
- Destaque o total geral em negrito
- Inclua coluna de "Base Legal" indicando o fundamento de cada verba
- Formate valores como moeda (R$) e datas como DD/MM/AAAA
- Inclua linha de correção monetária e juros quando aplicável`,
        tips: [
          'Sempre confira os cálculos gerados — a IA pode errar em contas complexas',
          'Especifique o índice de correção e a taxa de juros desejados',
          'Para cálculos trabalhistas, informe: salário, datas de admissão e demissão, tipo de rescisão',
          'Salve o prompt como Skill para reutilizar com diferentes processos',
        ],
      },
      {
        title: 'Petições e Peças Processuais',
        subtitle: 'Do rascunho à peça formatada com fundamentação',
        level: 'avancado',
        icon: 'pen-tool',
        analogy: {
          text: 'O Cowork não escreve petições do zero — ele funciona como um **assistente de redação jurídica** que monta a estrutura, pesquisa fundamentação e formata segundo as normas do tribunal. Você revisa, ajusta e assina.',
        },
        content: `O Cowork pode gerar rascunhos completos de peças processuais a partir dos documentos do processo. O advogado sempre revisa e ajusta antes de protocolar.

**Tipos de peças que o Cowork gera:**
- Petição inicial (todas as áreas)
- Contestação com impugnação ponto a ponto
- Réplica à contestação
- Recursos (apelação, agravo, embargos)
- Contrarrazões de recurso
- Petições intermediárias (juntada, manifestação, impugnação)
- Memoriais de julgamento

**Como funciona:**
1. Coloque na pasta: documentos do caso + petição da parte adversa (se for contestação/recurso)
2. O Cowork lê tudo e identifica os pontos relevantes
3. Gera a peça com: qualificação, fatos, direito, pedidos e documentos
4. Formata segundo as normas do tribunal

**Exemplo prático — Contestação Trabalhista:**
Advogado coloca na pasta: petição inicial do reclamante, contrato de trabalho, holerites, cartão de ponto e regulamento interno. O Cowork gera a contestação impugnando ponto a ponto cada pedido.

**Qualidade da fundamentação:**
O Cowork busca na base de conhecimento: legislação aplicável, súmulas, OJs e orientações jurisprudenciais. Você deve sempre verificar se as citações estão corretas e atualizadas.`,
        prompt: `Analise os documentos desta pasta e gere uma [TIPO DE PEÇA: contestação/recurso/petição inicial] completa:

ESTRUTURA:
1. ENDEREÇAMENTO — Juízo competente (extrair dos autos)
2. QUALIFICAÇÃO — Das partes (extrair dos documentos)
3. TEMPESTIVIDADE — Demonstrar que está no prazo (se aplicável)
4. BREVE RESUMO — Síntese do caso em 1 parágrafo
5. DOS FATOS — Narrativa fática baseada nos documentos da pasta
6. DO DIREITO — Fundamentação jurídica com:
   - Legislação aplicável (artigos específicos)
   - Jurisprudência (citar tribunal, número, relator, ano)
   - Doutrina (quando relevante)
7. DOS PEDIDOS — Pedidos específicos e subsidiários
8. REQUERIMENTOS FINAIS — Provas, audiência, etc.
9. VALOR DA CAUSA — Se petição inicial
10. DOCUMENTOS — Lista de documentos anexados

FORMATO:
- Word (.docx)
- Fonte: Times New Roman 12, espaçamento 1,5
- Margens: superior e esquerda 3cm, inferior e direita 2cm
- Parágrafos com recuo de primeira linha de 2cm
- Títulos em negrito e MAIÚSCULO`,
        tips: [
          'NUNCA protocole uma peça sem revisão completa do advogado',
          'Verifique TODAS as citações de legislação e jurisprudência',
          'Quanto mais documentos do processo você fornecer, melhor o resultado',
          'Para contestações, inclua a petição do adversário para impugnação ponto a ponto',
        ],
      },
      {
        title: 'Petições com Visual Law / Legal Design',
        subtitle: 'Peças processuais visualmente superiores',
        level: 'avancado',
        icon: 'palette',
        analogy: {
          text: 'Imagine entregar ao juiz uma petição que ele **entende em metade do tempo**: com quadro resumo no topo, timeline dos fatos, tabela de provas e checklist de requisitos legais. Isso é **Visual Law** — e o Claude gera tudo isso automaticamente.',
        },
        content: `Visual Law (ou Legal Design) é a aplicação de técnicas visuais em documentos jurídicos para torná-los mais claros e persuasivos. Tribunais brasileiros como TJ-SP, TRT-2, TJ-DFT e STJ já reconhecem e valorizam essa prática.

**O que o Claude gera para você:**

**1. Quadro Resumo (Summary Box):**
Tabela no topo da petição com: tipo de ação, partes, valor da causa, objeto, pedido principal e tutela de urgência. O juiz entende o caso em 10 segundos.

**2. Timeline dos Fatos:**
Cronologia visual com datas, eventos e documentos comprobatórios. Substitui parágrafos longos por uma sequência clara.

**3. Tabela Mapa de Provas:**
Conecta cada fato alegado ao documento que o comprova. O juiz localiza a prova sem procurar nos autos.

| # | Fato Alegado | Prova | Documento |
|---|-------------|-------|-----------|
| 1 | Relação contratual | Contrato assinado | Doc. 02 |
| 2 | Inadimplemento | Faturas vencidas | Docs. 03-07 |
| 3 | Notificação | AR de recebimento | Doc. 08 |

**4. Checklist de Requisitos Legais:**
Para tutelas de urgência, liminares ou recursos: tabela mostrando cada requisito legal e se está demonstrado.

**5. Quadro Comparativo de Argumentos:**
Teses do autor vs. teses do réu, lado a lado, com fundamentação e força do argumento.

**6. Árvore Decisória:**
Diagrama mostrando os cenários possíveis e suas consequências jurídicas.

**Impacto comprovado:**
Juízes relatam redução de **30-50% no tempo de análise** de petições com Visual Law bem aplicado.`,
        prompt: `Analise os documentos desta pasta e gere uma [TIPO DE PEÇA] aplicando técnicas de Visual Law / Legal Design:

ESTRUTURA VISUAL OBRIGATÓRIA:

1. QUADRO RESUMO (no topo da peça):
   | Campo | Informação |
   |-------|-----------|
   | Tipo de Ação | [identificar] |
   | Autor | [nome completo e qualificação] |
   | Réu | [nome completo e qualificação] |
   | Valor da Causa | [R$ valor] |
   | Objeto | [resumo em 1 linha] |
   | Pedido Principal | [resumo] |
   | Tutela de Urgência | [Sim/Não — tipo] |

2. DOS FATOS — Use TIMELINE VISUAL:
   Para cada fato relevante, organize como:
   [DATA] → [EVENTO] → [Documento comprobatório (Doc. XX)]
   Destaque fatos controversos com ⚠️

3. MAPA DE PROVAS (tabela):
   | # | Fato | Meio de Prova | Documento | Página |
   Para cada alegação, vincule à prova específica.

4. DO DIREITO — Use TABELA DE REQUISITOS:
   | Requisito Legal | Demonstrado? | Fundamentação |
   Com ✅ para requisitos preenchidos e ❌ para ausentes.

5. QUADRO COMPARATIVO (se contestação/recurso):
   | Ponto | Alegação Adversa | Nossa Resposta | Fundamento |

6. DOS PEDIDOS — Lista numerada, hierárquica:
   Pedido principal → Pedidos acessórios → Pedidos subsidiários
   Cada pedido em item separado e claro.

7. FORMATAÇÃO:
   - Títulos: negrito, maiúsculo, com ícones de seção
   - Destaques: negrito para termos-chave e valores
   - Tabelas: com cabeçalho destacado
   - Parágrafos curtos (máximo 5 linhas)

Formato: Word (.docx), Times New Roman 12, espaçamento 1,5.`,
        tips: [
          'Comece usando Visual Law em petições iniciais e recursos — são as peças com maior impacto',
          'O quadro resumo no topo é o elemento mais valorizado pelos juízes',
          'Use tabelas de mapa de provas em TODAS as petições — facilita enormemente a análise',
          'Não exagere nos elementos visuais: cada um deve ter função comunicativa clara',
        ],
        flowSteps: [
          { title: 'Documentos', description: 'Coloque os documentos do caso na pasta' },
          { title: 'Prompt Visual Law', description: 'Cole o prompt com a estrutura visual' },
          { title: 'Geração', description: 'O Cowork cria a peça com todos os elementos visuais' },
          { title: 'Revisão', description: 'Revise o conteúdo jurídico e ajuste os visuais' },
        ],
      },
      {
        title: 'Proposta de Honorários Profissional',
        subtitle: 'Propostas visuais que convertem clientes',
        level: 'intermediario',
        icon: 'presentation',
        analogy: {
          text: 'Uma proposta de honorários bem apresentada é como um **cartão de visita premium**: comunica profissionalismo antes mesmo do cliente ler o conteúdo. O Cowork gera propostas com estrutura visual de escritório de primeira linha.',
        },
        content: `Propostas de honorários são o primeiro documento que o cliente recebe. A apresentação visual faz diferença direta na conversão.

**O que o Cowork gera:**

**1. Capa Institucional:**
Nome do escritório, logomarca, dados do cliente, data e número da proposta.

**2. Quadro Resumo do Caso:**
Tabela com: natureza da demanda, partes envolvidas, valor estimado, complexidade e prognóstico inicial.

**3. Escopo dos Serviços:**

| Fase | O que inclui | O que não inclui |
|------|-------------|-----------------|
| Análise Preliminar | Estudo do caso, documentação | Parecer formal |
| Fase Judicial | Petição até sentença | Recursos a tribunais superiores |
| Fase Recursal | Apelação e recursos especiais | Recursos ao STF |

**4. Tabela de Honorários:**

| Fase | Escopo | Honorários | Prazo Estimado |
|------|--------|-----------|---------------|
| Análise | Estudo e viabilidade | R$ 3.000 (fixo) | 5 dias úteis |
| Judicial | Até sentença | R$ 2.000/mês | 12-18 meses |
| Êxito | Percentual sobre resultado | 20% do valor obtido | Ao final |

**5. Condições de Pagamento:**
Tabela com datas, parcelas e formas de pagamento.

**6. Diferenciais do Escritório:**
Lista visual com ícones dos diferenciais competitivos.

**Resultado:** Uma proposta de 3-5 páginas, profissional e visual, pronta para enviar ao cliente em PDF.`,
        prompt: `Gere uma PROPOSTA DE HONORÁRIOS completa e profissional para o seguinte caso:

DADOS DO CASO:
- Cliente: [NOME DO CLIENTE]
- Tipo de Demanda: [DESCRIÇÃO]
- Valor Envolvido: [R$ VALOR ESTIMADO]
- Complexidade: [BAIXA/MÉDIA/ALTA]

ESTRUTURA DA PROPOSTA (formato Word):

1. CAPA:
   - Nome do escritório: [NOME]
   - "Proposta de Prestação de Serviços Jurídicos"
   - Cliente: [nome]
   - Data: [data atual]
   - Nº Proposta: [ANO/SEQUENCIAL]

2. APRESENTAÇÃO DO ESCRITÓRIO (1 parágrafo):
   [Breve descrição da experiência na área]

3. QUADRO RESUMO DO CASO:
   Tabela com natureza, partes, valor, complexidade, prognóstico.

4. ESCOPO DOS SERVIÇOS:
   Tabela detalhada: O que INCLUI | O que NÃO inclui
   Separado por fases (pré-judicial, judicial, recursal).

5. HONORÁRIOS:
   Tabela clara com: Fase | Tipo | Valor | Condição
   Incluir honorários de êxito se aplicável.

6. CONDIÇÕES:
   - Forma de pagamento
   - Reajuste anual
   - Despesas processuais (custas, perícias)
   - Vigência da proposta

7. ACEITE:
   Campo para assinatura do cliente com data.

Formatação: profissional, com tabelas limpas, títulos claros e espaçamento adequado.`,
        tips: [
          'Sempre apresente pelo menos 2 opções de honorários (fixo vs. êxito vs. misto)',
          'Inclua claramente o que NÃO está incluído — evita conflitos futuros',
          'A proposta é seu primeiro "produto" para o cliente: invista na apresentação',
          'Salve como Skill para padronizar todas as propostas do escritório',
        ],
      },
      {
        title: 'Pasta do Cliente Completa',
        subtitle: 'Onboarding profissional em minutos',
        level: 'intermediario',
        icon: 'folder-open',
        analogy: {
          text: 'Quando um novo cliente chega, o escritório precisa montar toda a estrutura: pasta de documentos, ficha cadastral, procuração, contrato de honorários, carta de boas-vindas. O Cowork faz tudo isso de uma vez — como um **kit de boas-vindas automatizado**.',
        },
        content: `O Cowork monta toda a estrutura de pastas e documentos para um novo cliente em uma única execução.

**O que sai pronto:**

**1. Estrutura de Pastas:**
- /Cliente_[NOME]/
  - /01_Cadastro/ (ficha, documentos pessoais)
  - /02_Procuracoes/ (procuração ad judicia)
  - /03_Contratos/ (contrato de honorários)
  - /04_Processo/ (peças, documentos, decisões)
  - /05_Correspondencias/ (e-mails, cartas)
  - /06_Financeiro/ (notas, recibos)

**2. Ficha Cadastral do Cliente:**
Documento Word com todos os dados do cliente organizados: pessoais, profissionais, endereço, documentos, dados bancários.

**3. Procuração Ad Judicia:**
Minuta de procuração com poderes adequados ao tipo de ação, pronta para assinatura.

**4. Contrato de Honorários:**
Contrato baseado na proposta aprovada, com todas as cláusulas necessárias.

**5. Carta de Boas-Vindas:**
Carta personalizada explicando: quem é o advogado responsável, canais de contato, próximos passos e prazos estimados.

**6. Checklist de Documentos Pendentes:**
Lista do que o cliente ainda precisa enviar, com prazos.`,
        prompt: `Monte uma PASTA DE CLIENTE COMPLETA para o novo caso:

DADOS:
- Nome do Cliente: [NOME COMPLETO]
- CPF/CNPJ: [NÚMERO]
- Endereço: [ENDEREÇO]
- Telefone: [NÚMERO]
- E-mail: [E-MAIL]
- Tipo de Demanda: [DESCRIÇÃO]
- Advogado Responsável: [NOME] - OAB/[ESTADO] [NÚMERO]
- Nome do Escritório: [NOME DO ESCRITÓRIO]

GERE OS SEGUINTES DOCUMENTOS:

1. FICHA CADASTRAL (Word):
   Dados pessoais, profissionais, documentos, contato de emergência, dados bancários para restituições.

2. PROCURAÇÃO AD JUDICIA (Word):
   Com poderes da cláusula "ad judicia" + poderes especiais adequados ao tipo de ação.
   Incluir: receber citação, confessar, transigir, desistir, dar quitação, firmar compromisso, substabelecer.

3. CONTRATO DE HONORÁRIOS (Word):
   Baseado nos seguintes termos: [INSERIR VALORES E CONDIÇÕES ACORDADOS]
   Cláusulas mínimas: objeto, honorários, forma de pagamento, despesas processuais, vigência, rescisão, confidencialidade, foro.

4. CARTA DE BOAS-VINDAS (Word):
   Tom profissional e acolhedor. Incluir:
   - Apresentação do advogado responsável
   - Canais de comunicação e horários
   - Próximos passos do caso
   - Prazos estimados
   - O que o cliente precisa providenciar

5. CHECKLIST DE DOCUMENTOS (Word):
   Lista de documentos necessários para o tipo de ação, com [ ] para marcar os recebidos e prazos.

Crie uma estrutura de subpastas organizada e salve cada documento na pasta correspondente.`,
        tips: [
          'Crie um Skill "Onboarding de Cliente" com os dados padrão do escritório pré-preenchidos',
          'Adapte a procuração para cada tipo de ação — poderes especiais variam',
          'A carta de boas-vindas é o primeiro contato formal: capriche no tom',
          'O checklist de documentos evita idas e vindas com o cliente',
        ],
        flowSteps: [
          { title: 'Dados', description: 'Preencha os dados do cliente no prompt' },
          { title: 'Geração', description: 'Cowork cria 5+ documentos de uma vez' },
          { title: 'Revisão', description: 'Confira os documentos gerados' },
          { title: 'Entrega', description: 'Envie ao cliente para assinatura' },
        ],
      },
      {
        title: 'E-mails Jurídicos Profissionais',
        subtitle: 'Comunicação impecável com clientes, colegas e tribunais',
        level: 'iniciante',
        icon: 'mail',
        analogy: {
          text: 'E-mails mal escritos passam imagem de amadorismo. O Claude funciona como um **revisor e redator profissional**: ajusta o tom, organiza as informações e garante que cada e-mail represente a qualidade do escritório.',
        },
        content: `E-mails são a comunicação mais frequente de qualquer escritório. O Claude gera e-mails profissionais para qualquer situação.

**Tipos de e-mails prontos:**

**Para Clientes:**
- Atualização de andamento processual
- Solicitação de documentos
- Explicação de decisão judicial (sem juridiquês)
- Envio de proposta de honorários
- Comunicação de resultado (favorável ou desfavorável)
- Prestação de contas mensal

**Para Colegas/Advogados:**
- Substabelecimento com ou sem reservas
- Solicitação de informações processuais
- Comunicação de acordo
- Convite para composição amigável

**Para Tribunais/Órgãos:**
- Solicitação de certidões
- Comunicação de mudança de endereço
- Pedido de informações administrativas

**Exemplo — Atualização para cliente:**
Tom profissional, linguagem clara, sem juridiquês. Explica o que aconteceu, o que significa na prática e quais são os próximos passos.`,
        prompt: `Redija um e-mail profissional para a seguinte situação:

CONTEXTO:
- Remetente: [NOME DO ADVOGADO] — OAB/[ESTADO] [NÚMERO]
- Destinatário: [NOME DO DESTINATÁRIO]
- Relação: [Cliente / Advogado adverso / Tribunal / Colega]
- Assunto: [DESCREVA A SITUAÇÃO]

DIRETRIZES:
1. Tom: profissional, respeitoso e objetivo
2. Se for para cliente: evitar juridiquês, explicar em linguagem acessível
3. Se for para advogado/tribunal: usar terminologia técnica adequada
4. Estrutura:
   - Cumprimento adequado ao destinatário
   - Contexto breve (processo/assunto)
   - Informação principal
   - Próximos passos ou ação necessária
   - Encerramento cordial
   - Assinatura com dados do escritório
5. Máximo 3 parágrafos (curtos e diretos)
6. Incluir linha de assunto sugerida`,
        tips: [
          'Crie um Skill com a assinatura padrão do escritório para não precisar repetir',
          'Para más notícias: sempre termine com os próximos passos e alternativas',
          'E-mails para clientes devem explicar o "e agora?" — não só o que aconteceu',
          'Revise o tom: profissional não é frio, e acessível não é informal',
        ],
        commandList: [
          { command: 'Atualização', description: '"Redija e-mail de atualização processual para o cliente sobre [evento]"' },
          { command: 'Documentos', description: '"Redija e-mail solicitando documentos ao cliente: [lista de docs]"' },
          { command: 'Resultado', description: '"Redija e-mail comunicando resultado [favorável/desfavorável] ao cliente"' },
          { command: 'Proposta', description: '"Redija e-mail de envio de proposta de honorários para [cliente]"' },
          { command: 'Acordo', description: '"Redija e-mail propondo acordo para o advogado adverso"' },
        ],
      },
      {
        title: 'Excel e PowerPoint Jurídico',
        subtitle: 'O Claude opera diretamente nas suas planilhas e apresentações',
        level: 'intermediario',
        icon: 'spreadsheet',
        analogy: {
          text: 'Em vez de pedir ao Claude para gerar dados e depois copiar para o Excel, agora ele **abre sua planilha e trabalha nela diretamente**. É como ter um assistente que senta na sua cadeira, abre o Excel e preenche tudo sozinho — incluindo fórmulas.',
        },
        content: `O Cowork pode operar diretamente dentro do Microsoft Excel e PowerPoint, criando, editando e formatando arquivos sem que você precise copiar e colar nada.

**No Excel — O que o Claude faz:**

| Tarefa | Exemplo Prático |
|--------|----------------|
| **Criar planilhas completas** | Tabela de prazos processuais com fórmulas de contagem |
| **Inserir fórmulas** | DATEDIF para calcular tempo de contribuição, SUMPRODUCT para somar verbas |
| **Formatação condicional** | Prazos em vermelho (<5 dias), amarelo (6-15), verde (>15) |
| **Gráficos e dashboards** | Gráfico de barras com valor das causas por vara |
| **Análise de dados** | Tabela dinâmica de processos por status, comarca, valor |
| **Correção monetária** | Planilha com IPCA-E, INPC ou SELIC aplicados automaticamente |

**No PowerPoint — O que o Claude faz:**

| Tarefa | Exemplo Prático |
|--------|----------------|
| **Criar apresentações** | Sustentação oral com slides profissionais |
| **Resumo visual de caso** | Timeline, quadro de partes, mapa de provas em slides |
| **Relatório para cliente** | Apresentação executiva com gráficos e conclusões |
| **Material de treinamento** | Slides para equipe sobre nova legislação |

**Como funciona:**
Basta pedir ao Cowork e ele cria ou edita o arquivo diretamente. O arquivo aparece na sua pasta como .xlsx ou .pptx pronto para uso.`,
        prompt: `Crie uma planilha Excel completa de controle de prazos processuais com as seguintes especificações:

Colunas: Nº Processo | Cliente | Vara | Tipo de Prazo | Data Inicial | Prazo (dias) | Data Final | Status | Observações

Funcionalidades:
1. Fórmula de data final: =Data Inicial + Prazo (considerando dias úteis com WORKDAY)
2. Formatação condicional no Status:
   - VENCIDO (vermelho) se Data Final < HOJE
   - URGENTE (amarelo) se faltam menos de 5 dias úteis
   - NO PRAZO (verde) se faltam mais de 5 dias úteis
3. Linha de cabeçalho congelada
4. Filtros automáticos em todas as colunas
5. Aba separada "Dashboard" com: total de prazos por status, próximos 5 prazos a vencer, processos por vara

Preencha com 10 linhas de exemplo realistas de processos trabalhistas.`,
        tips: [
          'Peça planilhas com fórmulas prontas — o Claude insere WORKDAY, DATEDIF, SUMPRODUCT corretamente',
          'Para apresentações de sustentação oral: peça "crie slides com máximo 5 bullets por slide"',
          'Combine com dados do DataJud: o Claude pode buscar dados e já jogar na planilha',
          'Arquivos são salvos na pasta do Cowork — arraste para onde quiser depois',
        ],
      },
      {
        title: 'Comparação Multi-documentos',
        subtitle: 'Analise dezenas de documentos lado a lado',
        level: 'avancado',
        icon: 'copy',
        analogy: {
          text: 'Imagine ter um **quadro branco gigante** onde você cola 10 contratos lado a lado e marca as diferenças com caneta vermelha. O Claude faz isso em segundos — compara cláusulas, identifica divergências e gera um relatório consolidado.',
        },
        content: `Uma das tarefas mais demoradas na advocacia é comparar múltiplos documentos. O Cowork do Claude, com sua janela de contexto de 1 milhão de tokens (~2.500 páginas), faz isso com profundidade impossível para qualquer humano.

**Tipos de comparação disponíveis:**

| Tipo | Documentos | Resultado |
|------|-----------|-----------|
| **Contrato vs. Contrato** | 2+ minutas/versões | Tabela de diferenças cláusula a cláusula |
| **Contrato vs. Legislação** | Contrato + lei aplicável | Cláusulas ilegais ou abusivas identificadas |
| **Petição vs. Contestação** | Inicial + defesa | Mapa de convergências e divergências |
| **Decisão vs. Precedentes** | Sentença + jurisprudência | Conformidade com entendimento dominante |
| **Laudos técnicos** | 2+ laudos periciais | Pontos concordantes vs. divergentes |
| **Edital vs. Proposta** | Licitação: edital + proposta | Conformidade com requisitos do edital |

**Prompt estruturado para comparação:**

O Claude deve receber todos os documentos na mesma conversa e instruções claras sobre o que comparar.

**Formatos de saída:**
- **Tabela de divergências:** Cláusula | Doc A | Doc B | Análise
- **Relatório de conformidade:** Item | Conforme? | Observações
- **Mapa de risco:** Ponto | Risco | Recomendação
- **Consolidação:** Síntese unificada de múltiplas fontes`,
        prompt: `Compare os documentos a seguir e gere um relatório estruturado:

DOCUMENTOS:
[Cole ou anexe os documentos aqui]

ANÁLISE SOLICITADA:
1. MAPA DE DIVERGÊNCIAS — Tabela com cada ponto de diferença:
   | Tema | Documento A | Documento B | Impacto | Recomendação |

2. PONTOS DE CONVERGÊNCIA — O que é idêntico ou equivalente entre os documentos

3. CLÁUSULAS/PONTOS DE RISCO — Itens que apresentam risco jurídico ou inconsistência:
   | Cláusula | Risco | Severidade (Alta/Média/Baixa) | Sugestão |

4. ANÁLISE CONSOLIDADA — Resumo executivo das diferenças mais relevantes e recomendação de ação

Seja específico: cite números de cláusulas, artigos de lei e trechos exatos dos documentos.`,
        tips: [
          'Coloque todos os documentos na mesma pasta do Cowork para análise conjunta',
          'Para contratos: peça comparação cláusula a cláusula com referência ao CC/CDC/CLT',
          'Para due diligence: analise todos os contratos de uma empresa em uma única sessão',
          'O Claude consegue processar até ~2.500 páginas em uma única conversa (1M tokens)',
        ],
      },
      {
        title: 'Preparação para Negociação e Mediação',
        subtitle: 'Estratégia completa antes de sentar à mesa',
        level: 'avancado',
        icon: 'target',
        analogy: {
          text: 'Um general não entra em batalha sem um **plano tático, inteligência sobre o inimigo e cenários de contingência**. Uma negociação ou mediação exige a mesma preparação. O Claude monta seu arsenal completo: BATNA, ZOPA, cenários e roteiro de concessões.',
        },
        content: `A preparação é o que separa uma negociação amadora de uma profissional. Este fluxo gera todos os documentos que você precisa antes de sentar à mesa.

**O que o Claude prepara:**

| Documento | Descrição |
|-----------|-----------|
| **Análise de Posições** | Posição do seu cliente vs. posição adversa — interesses declarados e ocultos |
| **BATNA** (Best Alternative) | Melhor alternativa caso a negociação fracasse — para ambos os lados |
| **ZOPA** (Zona de Acordo) | Faixa de valores/condições onde o acordo é possível |
| **Cenários de Acordo** | 3 cenários: ideal, aceitável e mínimo — com fundamentação |
| **Roteiro de Concessões** | O que conceder em cada rodada e o que exigir em troca |
| **Argumentos-chave** | Top 5 argumentos por ordem de impacto persuasivo |
| **Contra-argumentos** | Antecipação das objeções adversas com respostas preparadas |
| **Âncora Inicial** | Valor/condição de abertura com justificativa técnica |

**Para mediação especificamente:**
- Resumo do caso para o mediador (objetivo, neutro)
- Mapa de interesses (não posições) de ambas as partes
- Propostas criativas de solução (ganha-ganha)
- Cálculo comparativo: custo do acordo vs. custo de litigar

**Quando usar:**
- Audiências de conciliação (CPC art. 334)
- Mediação judicial ou extrajudicial
- Negociação de acordos trabalhistas
- Termos de ajustamento de conduta (TAC)
- Acordos de leniência
- Negociação de contratos complexos`,
        prompt: `Prepare uma análise completa de negociação para o seguinte caso:

CONTEXTO DO CASO:
[Descreva: partes, objeto, histórico, valores envolvidos, fase processual]

GERE OS SEGUINTES DOCUMENTOS:

1. ANÁLISE DE POSIÇÕES
   - Posição e interesses do meu cliente
   - Posição e interesses prováveis da parte adversa
   - Interesses ocultos identificados

2. BATNA DE AMBOS OS LADOS
   - Melhor alternativa do meu cliente se não houver acordo
   - Melhor alternativa da parte adversa
   - Qual lado tem mais pressão para acordar?

3. ZOPA (Zona de Possível Acordo)
   - Valor/condição mínima aceitável para meu cliente
   - Valor/condição máxima que a parte adversa provavelmente aceita
   - Faixa de acordo provável

4. CENÁRIOS DE ACORDO (tabela)
   | Cenário | Valor/Condições | Probabilidade | Justificativa |
   - Ideal, Aceitável, Mínimo

5. ROTEIRO DE CONCESSÕES
   - O que oferecer primeiro (menor impacto)
   - O que exigir em troca de cada concessão
   - Limites inegociáveis

6. ARGUMENTOS E CONTRA-ARGUMENTOS (tabela)
   | Nosso Argumento | Provável Objeção | Nossa Resposta |

7. RECOMENDAÇÃO ESTRATÉGICA
   - Âncora de abertura sugerida
   - Estratégia de negociação (competitiva, colaborativa, mista)
   - Momento ideal para apresentar proposta`,
        tips: [
          'Forneça o máximo de informações sobre a parte adversa — quanto mais contexto, melhor a análise',
          'Para audiências do art. 334 CPC: prepare o BATNA antes — muitos advogados chegam sem',
          'Combine com o Skill de Jurisprudência para fundamentar cada cenário com precedentes',
          'Peça ao Claude para calcular o custo de oportunidade: "quanto custa litigar vs. acordar?"',
        ],
        flowSteps: [
          { title: 'Contexto', description: 'Forneça o caso completo: partes, valores, histórico, fase processual' },
          { title: 'Análise', description: 'Claude mapeia posições, interesses, BATNA e ZOPA' },
          { title: 'Cenários', description: 'Monta 3 cenários de acordo com probabilidades' },
          { title: 'Roteiro', description: 'Gera estratégia de concessões e contra-argumentos' },
          { title: 'Preparação', description: 'Documento consolidado pronto para levar à mesa' },
        ],
      },
      {
        title: 'Fluxo: Do Cliente à Petição em 10 Passos',
        subtitle: 'Workflow completo: da reunião inicial ao protocolo no PJe',
        level: 'intermediario',
        icon: 'git-branch',
        analogy: {
          tag: 'Linha de Produção Jurídica',
          text: 'Pense numa **linha de montagem** onde cada etapa agrega valor: a reunião vira transcrição, a transcrição vira fatos organizados, os fatos viram tese, a tese vira petição, a petição vira peça revisada e protocolar. O Claude é o operário eficiente em cada estação.',
        },
        content: `Workflow completo que transforma uma reunião com cliente em petição pronta para protocolar. Cada etapa usa o Claude de forma otimizada.

**Tempo sem Claude:** 6-8 horas
**Tempo com Claude:** 1,5-2,5 horas (incluindo revisão humana obrigatória)

**Etapa 1 — Reunião com Cliente:**
Grave a reunião (Fathom, gravador do celular ou notas). Capture tudo: fatos, datas, valores, documentos mencionados.

**Etapa 2 — Transcrição:**
Cole áudio/notas no Claude: *"Transcreva e organize os pontos principais da reunião."*

**Etapa 3 — Organização dos Fatos:**
*"Organize em tópicos os fatos juridicamente relevantes, separando: fatos incontroversos, fatos a provar e documentos necessários."*

**Etapa 4 — Análise Estratégica:**
*"Qual a melhor tese? Quais os fundamentos legais mais fortes? Quais os riscos?"*

**Etapa 5 — Rascunho da Petição:**
Use o Framework CONTEXTO para gerar a primeira versão completa.

**Etapa 6 — Refinamento:**
*"Reforce o argumento X. Adicione pedido alternativo Y. Melhore a fundamentação do tópico Z."*

**Etapa 7 — Stress-test:**
*"Releia como advogado da parte contrária. Identifique vulnerabilidades e sugira correções."*

**Etapa 8 — Verificação de Jurisprudência:**
Confirme TODA jurisprudência citada nos sites oficiais (STJ, TST, TRFs). Esta etapa é **inegociável**.

**Etapa 9 — Formatação Final:**
Ajuste no Word: cabeçalho, rodapé, procuração, documentos anexos. Revisão ortográfica final.

**Etapa 10 — Protocolo:**
Protocole no PJe/eSAJ/PROJUDI. Confira classe, competência e documentos.`,
        flowSteps: [
          { title: '1. Reunião', description: 'Grave e capture todos os fatos do cliente' },
          { title: '2. Transcrição', description: 'Claude organiza áudio/notas em texto estruturado' },
          { title: '3. Fatos', description: 'Separa fatos relevantes, a provar e documentos' },
          { title: '4. Estratégia', description: 'Análise de tese, fundamentos e riscos' },
          { title: '5. Rascunho', description: 'Petição completa via Framework CONTEXTO' },
          { title: '6. Refinar', description: 'Reforce argumentos e adicione pedidos' },
          { title: '7. Stress-test', description: 'Revisão como advogado contrário' },
          { title: '8. Verificar', description: 'Confirme jurisprudência nos sites oficiais' },
          { title: '9. Formatar', description: 'Ajuste final no Word + documentos' },
          { title: '10. Protocolar', description: 'PJe/eSAJ com conferência final' },
        ],
        tips: [
          'A etapa 8 (verificação) é OBRIGATÓRIA — nunca pule essa etapa',
          'Use Projetos: crie um projeto por caso com todos os documentos',
          'As etapas 3 a 7 podem ser feitas na mesma conversa do Claude',
          'Salve o prompt da etapa 5 como Skill para reutilizar em casos similares',
        ],
      },
      {
        title: 'Análise de Viabilidade de Tese',
        subtitle: 'Avaliação estratégica antes de aceitar o caso',
        level: 'avancado',
        icon: 'target',
        analogy: {
          tag: 'Due Diligence do Caso',
          text: 'Assim como um investidor faz due diligence antes de investir, o advogado estratégico faz **análise de viabilidade** antes de aceitar um caso. O Claude é o analista que monta o relatório de risco em minutos, não em dias.',
        },
        content: `Antes de aceitar qualquer caso, faça uma análise de viabilidade completa com o Claude. Isso evita investir horas em teses frágeis e permite cobrar honorários proporcionais ao risco real.

**O que a análise entrega:**

| Elemento | O que avalia |
|----------|-------------|
| **Parecer de viabilidade** | Favorável, parcialmente favorável ou desfavorável |
| **Fundamentos legais** | Legislação aplicável + força de cada fundamento |
| **Jurisprudência** | Precedentes favoráveis e contrários (com [VERIFICAR]) |
| **Contra-argumentos** | O que a parte contrária vai alegar + como responder |
| **Riscos processuais** | Sucumbência, honorários, prescrição, decadência |
| **Estimativa de valor** | Proveito econômico estimado para o cliente |
| **Recomendação** | Estratégia processual completa ou recusa fundamentada |

**Quando usar:**
→ Novo cliente com caso complexo
→ Tese inovadora ou controversa
→ Caso com alto risco financeiro
→ Litígios de grande valor
→ Antes de propor honorários

**Fluxo prático:**
1. Descreva o caso resumidamente ao Claude
2. Peça análise completa com 7 elementos
3. Se favorável: peça estratégia processual
4. Se desfavorável: explique ao cliente com fundamentos`,
        prompt: `Você é um consultor jurídico estratégico com vasta experiência.

Analise a viabilidade da seguinte tese:
[DESCREVA O CASO: fatos, partes, valores, documentos disponíveis]

Entregue uma análise completa com:

1. PARECER DE VIABILIDADE (favorável / parcialmente favorável / desfavorável)
2. FUNDAMENTOS LEGAIS mais fortes (com artigos específicos)
3. JURISPRUDÊNCIA favorável (marque com [VERIFICAR] se não tiver certeza)
4. CONTRA-ARGUMENTOS previsíveis e como respondê-los
5. RISCOS PROCESSUAIS (sucumbência, prescrição, provas)
6. ESTIMATIVA DE VALOR (proveito econômico do cliente)
7. RECOMENDAÇÃO ESTRATÉGICA (aceitar ou não, e por quê)

Seja absolutamente honesto. Se a tese for fraca, diga claramente e explique por quê. Prefiro saber agora do que descobrir na sentença.`,
        tips: [
          'Faça SEMPRE antes de aceitar casos de alto valor — pode evitar prejuízos',
          'Peça honestidade: "Se a tese for fraca, diga claramente" melhora a qualidade',
          'Use como base para definir honorários: teses mais arriscadas justificam valores maiores',
          'Combine com Skill de Estratégia de Caso para análise ainda mais profunda',
        ],
      },
      {
        title: 'Marketing Jurídico Ético com Claude',
        subtitle: 'Conteúdo profissional para redes sociais dentro das regras da OAB',
        level: 'intermediario',
        icon: 'trending-up',
        analogy: {
          tag: 'Assessoria de Imprensa Digital',
          text: 'O Claude funciona como uma **assessoria de imprensa digital** do seu escritório — produz conteúdo educativo, respeitando as diretrizes da OAB, no tom certo para cada plataforma. Você revisa e publica. Produção semanal que antes levaria 4 horas sai em 30 minutos.',
        },
        content: `Produção de conteúdo jurídico para redes sociais usando o Claude, respeitando rigorosamente as diretrizes de publicidade da OAB (Provimento 205/2021).

**Regras de ouro:**
→ Foco em **educar sobre direitos**, nunca em captar clientes diretamente
→ Tom **educativo e acessível**, sem ser informal demais
→ Nunca prometa resultados ou use linguagem mercantil
→ Sempre inclua ressalva: "Consulte um advogado para seu caso específico"

**Fluxo de produção semanal:**

| Dia | Atividade | Prompt |
|-----|-----------|--------|
| **Segunda** | Definir tema da semana | "Sugira 5 temas de [área] que geram engajamento e educam" |
| **Terça** | Carrossel Instagram | "Crie carrossel de 8 slides sobre [tema]. Gancho no slide 1" |
| **Quarta** | Roteiro Reels | "Adapte para roteiro de Reels de 45 segundos" |
| **Quinta** | Post LinkedIn | "Crie thread profissional de 5 posts sobre o mesmo tema" |
| **Sexta** | Legenda + Stories | "Crie legenda para feed + 3 stories com enquete" |

**Formatos disponíveis:**
→ **Carrossel Instagram** (8-10 slides): gancho + desenvolvimento + CTA
→ **Roteiro Reels/TikTok** (30-60s): hook + explicação + chamada
→ **Thread LinkedIn** (5-7 posts): insight + dados + conclusão
→ **Legenda para Feed**: texto educativo + hashtags relevantes
→ **Stories com Enquete**: interação + educação + engajamento`,
        prompt: `Você é um especialista em marketing de conteúdo para advogados brasileiros.

Crie um carrossel de 8 slides sobre [TEMA JURÍDICO] para Instagram.

ESTRUTURA:
- Slide 1: Gancho provocativo (pergunta ou afirmação impactante)
- Slides 2-7: Desenvolvimento prático e educativo
- Slide 8: Resumo + CTA natural

REGRAS OBRIGATÓRIAS:
- Tom educativo e acessível, sem ser informal
- Cada slide: título curto (máx 6 palavras) + texto de 3-4 linhas
- Foco em direitos que as pessoas não sabem que têm
- Respeitar diretrizes OAB (sem captação direta, sem promessas)
- Incluir no slide 8: "Consulte um advogado para seu caso específico"

APÓS O CARROSSEL, crie também:
1. Legenda completa com hashtags (máx 200 palavras)
2. Roteiro de Reels de 45 segundos sobre o mesmo tema
3. 3 sugestões de stories com enquete para engajamento`,
        tips: [
          'Crie um Project "Marketing Jurídico" com as regras OAB nas instruções',
          'Produza conteúdo em lote: 1 hora de Claude = conteúdo para a semana toda',
          'Peça variações: "Agora adapte para público empresarial" ou "para pessoas físicas"',
          'Use Artifacts para gerar tabelas e infográficos diretamente no Claude',
        ],
        checklist: [
          {
            title: 'Antes de Publicar — Checklist OAB',
            items: [
              'Conteúdo é educativo, não mercantil',
              'Não promete resultados nem captação direta',
              'Tom profissional e acessível',
              'Inclui ressalva sobre consulta individual',
              'Não expõe dados de clientes ou processos',
              'Não critica colegas ou instituições',
              'Hashtags relevantes e profissionais',
            ],
          },
        ],
      },
      {
        title: 'Automação Recorrente e Agendada',
        subtitle: 'Tarefas que o Claude executa sozinho, toda semana',
        level: 'avancado',
        icon: 'clock',
        analogy: {
          text: 'Imagine um estagiário que **toda segunda-feira de manhã** já tem pronto na sua mesa: relatório de prazos da semana, alertas de publicações, e resumo de atualizações dos processos. Sem você pedir. A automação recorrente do Cowork faz exatamente isso.',
        },
        content: `O Cowork permite agendar tarefas que se repetem automaticamente em intervalos definidos. O Claude executa, salva os resultados e notifica você quando termina.

**Automações recorrentes para escritórios:**

| Frequência | Tarefa | Resultado |
|-----------|--------|-----------|
| **Diária** | Verificar publicações no DJe | Relatório de intimações e prazos do dia |
| **Diária** | Resumo de e-mails jurídicos | Destaques do inbox com prioridade |
| **Semanal** | Relatório de prazos | Planilha com todos os prazos da semana |
| **Semanal** | Atualização de processos | Status de cada caso com movimentações |
| **Quinzenal** | Relatório para clientes | E-mail automático com andamento dos casos |
| **Mensal** | Dashboard do escritório | Métricas: novos casos, encerrados, receita, prazos |
| **Mensal** | Compliance check | Verificação de pendências administrativas |

**Como configurar:**
No Cowork, peça ao Claude para criar uma tarefa recorrente. Ele perguntará: frequência, horário, pasta de trabalho e formato de saída.

**Exemplo de configuração:**
"Execute toda segunda às 7h: leia a pasta 'Processos Ativos', gere um relatório Excel com prazos da semana ordenados por urgência, e salve na pasta 'Relatórios Semanais'."

**Combinação poderosa:**
Automação recorrente + Conectores = fluxo totalmente automático. Exemplo: Claude verifica Gmail diariamente → identifica intimações → atualiza planilha de prazos → envia alerta no Slack.`,
        tips: [
          'Comece com 1 automação semanal (relatório de prazos) e vá adicionando gradualmente',
          'Configure alertas por Slack ou e-mail para ser notificado quando a tarefa completar',
          'Sempre revise os primeiros resultados — ajuste o prompt até a qualidade ficar consistente',
          'Para escritórios com equipe: cada advogado pode ter suas automações personalizadas',
        ],
      },
      {
        title: 'Automação de Escritório com Cowork',
        subtitle: 'Fluxos completos end-to-end',
        level: 'expert',
        icon: 'workflow',
        content: `Para o nível Expert, o Cowork permite criar **fluxos completos de automação** que combinam múltiplas funcionalidades:

**Fluxo 1 — Onboarding de Cliente:**
Recebimento de documentos → Análise de viabilidade → Checklist de pendências → Minuta de procuração → Carta de boas-vindas

**Fluxo 2 — Preparação de Audiência:**
Leitura do processo completo → Timeline dos fatos → Roteiro de perguntas para testemunhas → Quadro de teses e contra-teses → Resumo de bolso

**Fluxo 3 — Gestão Mensal do Escritório:**
Extração de prazos de todos os processos → Planilha consolidada → Relatórios individuais por cliente → Dashboard de métricas

**Como montar fluxos complexos:**
1. Crie uma pasta com todas as entradas
2. Escreva um prompt detalhado com TODAS as etapas
3. O Cowork cria sub-agentes para cada etapa
4. Revise os resultados intermediários
5. Ajuste e refine conforme necessário`,
        prompt: `Execute o seguinte fluxo de onboarding para novo cliente:

1. ANÁLISE INICIAL: Leia todos os documentos desta pasta e identifique: tipo de demanda, partes envolvidas, fatos principais, pedidos possíveis.

2. VIABILIDADE: Gere um parecer de viabilidade com: probabilidade de êxito (alta/média/baixa), fundamentos, riscos, valor estimado da causa.

3. CHECKLIST: Crie uma lista de documentos necessários que ainda faltam, com base no tipo de ação identificada.

4. PROCURAÇÃO: Gere uma minuta de procuração ad judicia com os poderes necessários para este tipo de ação.

5. CARTA: Redija uma carta de boas-vindas ao cliente explicando os próximos passos.

Salve cada documento em uma subpasta "Onboarding" dentro desta pasta.`,
        flowSteps: [
          { title: 'Documentos', description: 'Cliente envia documentos na pasta' },
          { title: 'Análise', description: 'Claude identifica tipo de demanda e viabilidade' },
          { title: 'Checklist', description: 'Lista de pendências e documentos faltantes' },
          { title: 'Documentos', description: 'Procuração, contrato de honorários' },
          { title: 'Comunicação', description: 'Carta ao cliente com próximos passos' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // SEÇÃO 5: SKILLS
  // ═══════════════════════════════════════════════════════════
  {
    id: 'skills',
    title: 'Skills',
    description: 'Habilidades personalizadas que ensinam o Claude',
    icon: 'star',
    cards: [
      {
        title: 'O que são Skills?',
        subtitle: 'Instruções que especializam o Claude',
        level: 'intermediario',
        icon: 'book-open',
        analogy: {
          text: 'Os **manuais de procedimento interno** do escritório. "Quando chegar um caso de dano moral, siga estes passos..." O estagiário novo não sabe nada, mas **quando lê o manual, segue o procedimento certo**.',
        },
        content: `Skills são **instruções escritas em arquivo de texto simples** (.md) que ensinam o Claude a fazer tarefas específicas do jeito que você quer. Quando você conversa, ele lê automaticamente todos os seus Skills e decide **sozinho** qual usar.

**Skills vs GPTs do ChatGPT:**

| Característica | Claude Skills | GPTs do ChatGPT |
|----------------|--------------|-----------------|
| Como ativa? | Automático | Manual (abrir GPT específico) |
| Combinar vários? | Sim! Juntos na mesma conversa | Não. Cada GPT é isolado |
| Onde funcionam? | Em qualquer conversa | Apenas naquele GPT |
| Como criar? | Arquivo .md com instruções | Criador visual (limitado) |
| Limite de instruções? | Amplo (milhares de tokens) | 8.000 caracteres |

No ChatGPT, você troca de "assistente" para cada tarefa. No Claude, você trabalha em uma conversa só e o Claude ativa os Skills corretos automaticamente.`,
      },
      {
        title: 'Criando Skills Jurídicos',
        subtitle: 'Personalize para sua área',
        level: 'intermediario',
        icon: 'pen-tool',
        analogy: {
          text: 'Escrever um Skill é como criar um **checklist para estagiário**: "Quando fizer petição trabalhista: 1) cite CLT, 2) use jurisprudência TST, 3) inclua pedido de gratuidade." O estagiário segue e acerta.',
        },
        content: `Crie Skills personalizados para automatizar seu fluxo de trabalho jurídico.

**Exemplo — Skill "Petições Trabalhistas":**
Instruções: "Sempre use a estrutura: I) Dos Fatos, II) Do Direito, III) Dos Pedidos. Cite a CLT e jurisprudência do TST. Tom formal. Inclua pedido de justiça gratuita quando aplicável."

**Exemplo — Skill "Contratos Empresariais":**
"Toda análise de contrato deve verificar: cláusula penal, limitação de responsabilidade, foro de eleição, confidencialidade, propriedade intelectual. Use linguagem do Código Civil e classificação verde/amarelo/vermelho."

**Skills embutidos no Cowork:**
- Criação de **Word (.docx)** com formatação profissional
- Criação de **Excel (.xlsx)** com fórmulas e formatação condicional
- Criação de **PowerPoint (.pptx)** com slides profissionais
- Leitura e análise de **PDFs**
- Acesso direto a **arquivos locais**`,
        steps: [
          'Vá em Personalizar → Skills',
          'Clique em "Criar Skill"',
          'Dê um nome descritivo (ex: "peticoes-trabalhistas")',
          'Escreva instruções detalhadas sobre formato, tom, estrutura, referências',
          'Salve — o Skill fica ativo automaticamente em todas as conversas',
        ],
        tips: [
          'Seja específico nas instruções: formato, tom, estrutura, legislação',
          'Crie Skills separados para cada tipo de tarefa (petições, pareceres, contratos)',
          'Teste e refine — ajuste as instruções conforme os resultados',
          'Inclua exemplos de output esperado no Skill para melhores resultados',
        ],
      },
      {
        title: 'Skills Prontos para Advogados',
        subtitle: 'Templates por área de atuação',
        level: 'avancado',
        icon: 'briefcase',
        analogy: {
          text: 'Manuais de procedimento **prontos para copiar e colar**. Cada área do direito tem o seu — basta adaptar com suas preferências e legislação favorita.',
        },
        content: `Templates de Skills prontos para as principais áreas:

**Skill — Direito Trabalhista:**
"Considere sempre a CLT, Reforma Trabalhista (Lei 13.467/2017), súmulas do TST e OJs da SBDI. Calcule verbas rescisórias conforme a convenção coletiva aplicável. Verifique prescrição quinquenal e bienal."

**Skill — Direito do Consumidor:**
"Aplique o CDC (Lei 8.078/90) como norma de ordem pública. Considere inversão do ônus da prova (art. 6º, VIII). Cite jurisprudência do STJ sobre responsabilidade objetiva."

**Skill — Direito Imobiliário:**
"Verifique matrícula do imóvel, IPTU, certidões negativas. Analise contratos conforme CC/2002 (arts. 481-532). Considere Lei do Inquilinato (8.245/91) quando aplicável."

**Skill — Direito Previdenciário:**
"Considere EC 103/2019 (Reforma da Previdência), Lei 8.213/91, Decreto 3.048/99. Calcule tempo de contribuição com regras de transição. Cite TNU e STJ."

**Skill — LGPD:**
"Analise conformidade com Lei 13.709/2018 (LGPD). Identifique bases legais de tratamento (art. 7º). Verifique necessidade de RIPD. Considere decisões da ANPD."`,
        tips: [
          'Copie e adapte esses templates para suas necessidades',
          'Combine Skills: tenha um geral (formato) + um por área (legislação)',
          'Mantenha os Skills atualizados com novas legislações e súmulas',
        ],
      },
      {
        title: 'Skill de Petição Universal',
        subtitle: 'Template de Skill que funciona para qualquer área do direito',
        level: 'intermediario',
        icon: 'file-text',
        analogy: {
          tag: 'Formulário Mestre',
          text: 'Imagine um **formulário inteligente** que se adapta sozinho: você preenche os dados do caso e ele gera a petição na estrutura correta, com a legislação certa, no formato do tribunal. O Skill de Petição Universal faz exatamente isso — é o modelo que gera todos os outros.',
        },
        content: `Skill pronto para usar que transforma qualquer briefing de caso em petição profissional. Funciona para todas as áreas do direito — basta fornecer os dados.

**Por que criar este Skill:**
→ Toda petição sua sai no mesmo padrão de qualidade
→ Estagiários e associados produzem no seu nível
→ Elimina o "branco" diante da página vazia
→ Jurisprudência é marcada com nível de confiança

**Como usar:** Crie um arquivo \`.md\` com o conteúdo abaixo e adicione como Skill no Claude. Toda vez que pedir uma petição, o Claude seguirá automaticamente.

**Estrutura do Skill:**

\`\`\`
IDENTIDADE:
Advogado [especialidade] com 15 anos de experiência no [tribunal].

ESTRUTURA OBRIGATÓRIA:
1. Endereçamento (juízo competente)
2. Qualificação completa das partes
3. Dos Fatos (cronológico, com referência a docs)
4. Do Direito (legislação + jurisprudência)
5. Da Tutela de Urgência (quando aplicável)
6. Dos Pedidos (principal + alternativos)
7. Do Valor da Causa
8. Provas a produzir
9. Encerramento

REGRAS DE ESCRITA:
- Parágrafos de no máximo 5 linhas
- Priorize argumentos mais fortes primeiro
- Conectivos lógicos entre seções
- Linguagem formal e direta

REGRA DE JURISPRUDÊNCIA:
- Cite apenas decisões com alta confiança
- Marque com [VERIFICAR] quando houver dúvida
- Nunca invente números de processo ou relator
- Prefira Súmulas e teses repetitivas
\`\`\``,
        prompt: `[SKILL DE PETIÇÃO UNIVERSAL — COPIE E SALVE COMO .md]

IDENTIDADE:
Você é um advogado [SUA ÁREA] com 15 anos de experiência, atuando no [SEU TRIBUNAL/REGIÃO].

REGRAS DE ESCRITA:
- Formato ABNT, Times New Roman 12, espaçamento 1,5
- Parágrafos curtos (máximo 5 linhas)
- Priorize argumentos mais fortes primeiro
- Use conectivos lógicos para transição
- Linguagem formal, mas direta

REGRAS DE CONTEÚDO:
- Toda petição: qualificação, fatos, direito, pedidos, valor da causa
- Cite apenas jurisprudência com alta confiança
- Quando não tiver certeza: "[VERIFICAR: possível precedente sobre X no STJ/TRF]"
- Sempre inclua pedidos alternativos quando aplicável
- Inclua tutela antecipada quando houver fundamento de urgência

LEGISLAÇÃO BASE:
[LISTE AS LEIS QUE VOCÊ MAIS USA]

ESTILO DE REFERÊNCIA:
[DESCREVA OU ANEXE UM MODELO DA SUA PETIÇÃO IDEAL]`,
        steps: [
          'Copie o template do prompt acima',
          'Personalize: substitua [SUA ÁREA], [SEU TRIBUNAL], [LEGISLAÇÃO]',
          'Salve como arquivo .md (ex: skill-peticao-universal.md)',
          'No Claude: Configurações → Skills → Adicionar → Envie o arquivo',
          'Teste: peça uma petição e veja o Claude seguir todas as regras',
          'Ajuste: refine as instruções com base nos resultados',
        ],
        tips: [
          'Crie variações por área: skill-peticao-trabalhista.md, skill-peticao-civel.md',
          'Adicione seus modelos favoritos como exemplo de referência',
          'Mantenha o Skill atualizado quando houver mudanças legislativas',
          'Combine com o Skill de Visual Law para petições com design diferenciado',
        ],
      },
      {
        title: 'Skill de Comunicação com Cliente',
        subtitle: 'E-mails, WhatsApp e atualizações profissionais automatizados',
        level: 'intermediario',
        icon: 'mail',
        analogy: {
          tag: 'Secretária Executiva Digital',
          text: 'Este Skill transforma o Claude em uma **secretária executiva** que conhece o tom do escritório: profissional com clientes corporativos, acolhedora com pessoas físicas, técnica com colegas. Cada mensagem sai no tom certo, sem você pensar.',
        },
        content: `Skill que padroniza toda comunicação do escritório — e-mails, WhatsApp, atualizações de caso e orientações ao cliente. O Claude adapta automaticamente o tom conforme o contexto.

**Quando usar:**
→ E-mail de atualização do processo ao cliente
→ Resposta de WhatsApp sobre dúvida do cliente
→ Comunicação entre escritórios sobre caso conjunto
→ Orientação ao cliente sobre documentos necessários
→ Cobrança elegante de honorários

**Canais e formatos:**

| Canal | Tom | Limite |
|-------|-----|--------|
| **E-mail formal** | Profissional, técnico | Máximo 3 parágrafos |
| **WhatsApp** | Acolhedor, direto | Máximo 5 linhas |
| **Carta ao cliente** | Consultivo, explicativo | Máximo 1 página |
| **E-mail entre advogados** | Técnico, objetivo | Sem limite definido |
| **Cobrança** | Firme, mas cordial | Máximo 2 parágrafos |

**Regras universais:**
→ Nunca use jargão sem explicar ao cliente leigo
→ Sempre termine com próximos passos claros
→ Demonstre empatia com a situação do cliente
→ Confirme prazos e datas relevantes
→ Reforce que está acompanhando de perto`,
        prompt: `[SKILL DE COMUNICAÇÃO — COPIE E SALVE COMO .md]

IDENTIDADE:
Você é o assistente de comunicação do escritório [NOME DO ESCRITÓRIO].

REGRAS GERAIS:
- Tom profissional, mas acolhedor e acessível
- Nunca use jargão jurídico sem explicar
- Sempre termine com próximos passos claros
- Demonstre empatia com a situação do cliente
- Confirme prazos e datas quando relevante

FORMATOS POR CANAL:

E-MAIL AO CLIENTE:
- Máximo 3 parágrafos
- Saudação pessoal (Prezado/a Sr/a [Nome])
- Corpo: atualização + explicação em linguagem acessível
- Encerramento: próximos passos + disponibilidade

WHATSAPP:
- Máximo 5 linhas
- Saudação breve + informação direta
- Confirme se o cliente entendeu

COBRANÇA DE HONORÁRIOS:
- Tom firme mas cordial
- Relembre o serviço prestado
- Apresente opções de pagamento
- Nunca ameace — ofereça solução`,
        tips: [
          'Crie um Project por cliente e combine com este Skill para mensagens personalizadas',
          'Para clientes corporativos, ajuste o tom para mais formal e técnico',
          'Salve templates de e-mails recorrentes (atualização mensal, cobrança, orientação)',
          'Peça ao Claude: "Adapte esta mensagem para WhatsApp" para converter entre canais',
        ],
        elementGrid: [
          { icon: 'mail', name: 'E-mail Formal', description: 'Profissional e estruturado', whenToUse: 'Atualizações, pareceres, orientações' },
          { icon: 'message-circle', name: 'WhatsApp', description: 'Direto e acolhedor', whenToUse: 'Respostas rápidas, lembretes' },
          { icon: 'file-text', name: 'Carta ao Cliente', description: 'Consultivo e completo', whenToUse: 'Orientações detalhadas, termos' },
          { icon: 'dollar-sign', name: 'Cobrança', description: 'Firme mas cordial', whenToUse: 'Honorários em atraso, parcelas' },
        ],
      },
      {
        title: 'Skill de Marketing Jurídico',
        subtitle: 'Produção de conteúdo para redes sociais no padrão OAB',
        level: 'intermediario',
        icon: 'trending-up',
        analogy: {
          tag: 'Agência de Conteúdo Interna',
          text: 'Ter este Skill é como ter uma **agência de marketing jurídico** dentro do Claude — ela conhece as regras da OAB, sabe o tom certo para cada rede social, e produz conteúdo da semana inteira em 30 minutos. Você só revisa e publica.',
        },
        content: `Skill que transforma o Claude em um produtor de conteúdo jurídico especializado. Toda produção respeita automaticamente as diretrizes de publicidade da OAB.

**O que o Skill produz automaticamente:**
→ Carrosseis para Instagram (8-10 slides)
→ Roteiros para Reels/TikTok (30-60 segundos)
→ Threads para LinkedIn (5-7 posts profissionais)
→ Legendas para feed com hashtags otimizadas
→ Stories com enquetes para engajamento

**Regras embutidas no Skill:**
→ Todo conteúdo respeita Provimento 205/2021 da OAB
→ Foco educativo: ensinar direitos, não captar
→ Sem promessas de resultados ou linguagem mercantil
→ CTA natural: "Consulte um advogado para seu caso"
→ Sem exposição de dados de clientes ou processos

**Como configurar:**
Crie o Skill com suas áreas de atuação, público-alvo preferencial e tom de comunicação. O Claude vai gerar conteúdo consistente toda semana.

**Fluxo semanal:**
Segunda: escolha o tema → Terça: carrossel → Quarta: reels → Quinta: LinkedIn → Sexta: stories`,
        prompt: `[SKILL DE MARKETING JURÍDICO — COPIE E SALVE COMO .md]

IDENTIDADE:
Você é um especialista em marketing de conteúdo para advogados brasileiros.

REGRAS OBRIGATÓRIAS:
- Todo conteúdo respeita diretrizes de publicidade da OAB (Provimento 205/2021)
- Tom: educativo, acessível, sem ser informal demais
- Foco em educar sobre direitos, não captar clientes
- Use ganchos que despertem curiosidade
- Inclua CTA natural no final

ÁREAS DE ATUAÇÃO:
[LISTE SUAS ÁREAS: trabalhista, cível, família, etc.]

PÚBLICO-ALVO:
[DEFINA: empresários, trabalhadores, consumidores, etc.]

FORMATOS DISPONÍVEIS:
1. Carrossel Instagram (8-10 slides)
   - Slide 1: gancho provocativo
   - Slides 2-7: desenvolvimento prático
   - Slide final: resumo + CTA

2. Roteiro Reels (30-60 segundos)
   - Hook nos 3 primeiros segundos
   - Explicação clara e prática
   - CTA: "Siga para mais dicas"

3. Thread LinkedIn (5-7 posts)
   - Post 1: insight ou dado impactante
   - Posts 2-6: desenvolvimento profissional
   - Post final: conclusão + engajamento

4. Legenda Feed (máx 200 palavras)
   - Texto educativo + hashtags relevantes

PROIBIDO:
- Promessas de resultados
- Linguagem mercantil
- Exposição de dados de clientes
- Críticas a colegas ou instituições`,
        tips: [
          'Produza em lote: 1 hora com Claude = conteúdo da semana inteira',
          'Peça "5 temas que geram engajamento em [sua área]" para nunca faltar pauta',
          'Adapte: "Transforme este carrossel em roteiro de Reels de 45 segundos"',
          'Use Artifacts para gerar tabelas e infográficos diretamente no Claude',
        ],
        steps: [
          'Copie o template do Skill acima',
          'Personalize com suas áreas e público-alvo',
          'Salve como skill-marketing-juridico.md',
          'Adicione como Skill no Claude',
          'Teste: "Crie um carrossel sobre [tema]"',
          'Ajuste o tom com base nos resultados até ficar no seu estilo',
        ],
      },
      {
        title: 'Arquitetura de Skills para Escritório',
        subtitle: 'Sistema de Skills integrado',
        level: 'expert',
        icon: 'database',
        analogy: {
          text: 'Um escritório organizado tem **normas em camadas**: política interna (vale para todos), manual por área (trabalhista, cível), procedimento por tarefa (petição, parecer), e ficha do cliente. Skills seguem a mesma lógica.',
        },
        content: `Para escritórios, monte uma **arquitetura de Skills** organizada:

**Camada 1 — Skill Base (global):**
Informações do escritório, formatação padrão, cabeçalho, rodapé, estilo de redação. Vale para TODAS as conversas.

**Camada 2 — Skills por Área:**
Um Skill para cada área de atuação (trabalhista, civil, tributário). Contém legislação específica, tribunais relevantes, estilo de argumentação.

**Camada 3 — Skills por Tipo de Tarefa:**
Petição inicial, contestação, recurso, parecer, contrato. Cada um com estrutura e formato próprios.

**Camada 4 — Skills por Cliente (via Projetos):**
Instruções específicas do cliente nas instruções do Projeto. Preferências, histórico, particularidades.

| Camada | Onde criar | Escopo |
|--------|-----------|--------|
| Base | Personalizar (global) | Todas as conversas |
| Área | Personalizar → Skills | Todas as conversas |
| Tarefa | Personalizar → Skills | Todas as conversas |
| Cliente | Instruções do Projeto | Apenas naquele projeto |

**Resultado:** O Claude automaticamente combina as 4 camadas em cada conversa, sem você precisar repetir instruções.`,
        tips: [
          'Comece pela Camada 1 (base) e vá adicionando gradualmente',
          'Evite contradições entre Skills — sejam consistentes nas instruções',
          'Para equipes: padronize os Skills da Camada 1 e 2 entre todos os advogados',
        ],
      },
      {
        title: 'Skill de Visual Law / Legal Design',
        subtitle: 'Aplique Visual Law automaticamente em qualquer documento',
        level: 'avancado',
        icon: 'palette',
        analogy: {
          text: 'Imagine que o Claude **sempre** aplica Visual Law nas suas peças — sem você precisar pedir. Um Skill de Visual Law é como programar o estilo visual do escritório: uma vez configurado, toda petição sai com quadro resumo, timeline e tabela de provas automaticamente.',
        },
        content: `Crie um Skill que ensina o Claude a aplicar Visual Law em qualquer documento jurídico. Uma vez ativado, TODAS as peças que o Claude gerar seguirão o padrão visual do escritório.

**Como criar o Skill:**

Vá em Claude → Personalizar → Skills → Criar Skill e cole o conteúdo abaixo.

**O que o Skill faz automaticamente:**
- Insere quadro resumo no topo de petições
- Cria timelines nos fatos
- Gera tabelas de mapa de provas
- Formata checklist de requisitos legais
- Monta quadros comparativos de argumentos
- Estrutura pedidos de forma hierárquica e clara
- Usa parágrafos curtos (máx. 5 linhas)
- Aplica destaque visual em termos-chave

**Skill combinado com outros:**
Este Skill pode ser combinado com qualquer outro Skill do escritório. Por exemplo: "Skill de Petição Trabalhista" + "Skill de Visual Law" = petição trabalhista com todos os elementos visuais.

**Personalização:**
Adapte o Skill para o padrão do seu escritório: tipo de fonte, margens, estilo de tabelas, cores (se o tribunal aceitar).`,
        prompt: `SKILL: Visual Law / Legal Design para Documentos Jurídicos

Ao gerar qualquer documento jurídico (petição, parecer, recurso, contestação, contrato), aplique SEMPRE as seguintes técnicas de Visual Law:

1. QUADRO RESUMO (obrigatório no topo de petições):
   Tabela com: Tipo de Ação, Autor, Réu, Valor da Causa, Objeto (1 linha), Pedido Principal, Tutela de Urgência (Sim/Não).

2. TIMELINE DOS FATOS:
   Em vez de parágrafos longos, apresente os fatos como:
   [DATA] → [EVENTO] — [Documento comprobatório]
   Destaque fatos controversos com ⚠️

3. MAPA DE PROVAS (tabela obrigatória):
   | # | Fato Alegado | Meio de Prova | Documento |
   Conecte CADA alegação a sua prova específica.

4. TABELA DE REQUISITOS LEGAIS:
   Quando houver requisitos cumulativos (tutela urgência, gratuidade, etc.):
   | Requisito | Demonstrado? | Fundamentação |
   Use ✅ para atendidos e ❌ para não atendidos.

5. QUADRO COMPARATIVO (contestações e recursos):
   | Ponto Controverso | Alegação Adversa | Nossa Resposta | Base Legal |

6. ESTRUTURA HIERÁRQUICA DE PEDIDOS:
   a) Pedidos principais (numerados)
   b) Pedidos acessórios (sub-numerados)
   c) Pedidos subsidiários (claramente identificados)

7. FORMATAÇÃO:
   - Parágrafos curtos (máximo 5 linhas)
   - Termos-chave em negrito
   - Valores monetários em negrito
   - Títulos de seção: MAIÚSCULO e negrito
   - Subtítulos: Negrito normal
   - Listas numeradas para argumentos sequenciais
   - Tabelas para comparações e dados estruturados

8. LINGUAGEM:
   - Objetiva e precisa
   - Frases na ordem direta
   - Evitar latinismos desnecessários
   - Evitar parágrafos com mais de 1 ideia principal

Aplique estas regras em TODOS os documentos jurídicos, salvo instrução contrária.`,
        tips: [
          'Cole este prompt em Personalizar → Skills para que funcione em TODAS as conversas',
          'Combine com Skills de área específica (trabalhista, cível) para resultado máximo',
          'Adapte os elementos visuais conforme o tribunal aceita — alguns são mais conservadores',
          'O Skill funciona tanto no Chat quanto no Cowork',
        ],
        steps: [
          'Abra o Claude → clique em "Personalizar" (canto inferior esquerdo)',
          'Vá em "Skills" → clique em "Criar Skill"',
          'Dê o nome "Visual Law / Legal Design"',
          'Cole o prompt completo acima no campo de instruções',
          'Salve — a partir de agora, TODA peça jurídica sairá com Visual Law',
        ],
      },
      {
        title: 'Skill de Réplica Estratégica',
        subtitle: 'Desconstrução tática da contestação em 3 etapas sequenciais',
        level: 'avancado',
        icon: 'shield',
        analogy: {
          text: 'A maioria dos advogados "reitera os termos da inicial" na réplica. Com este Skill, o Claude opera como um **estrategista militar**: primeiro faz o reconhecimento do terreno (diagnóstico), depois identifica os pontos fracos do inimigo (desconstrução), e só então monta o plano de ataque (arquitetura).',
        },
        content: `A réplica é a **última oportunidade real de persuasão ativa** antes da fase instrutória. Este Skill transforma a réplica de peça reativa em instrumento cirúrgico de desconstrução argumentativa.

**O método em 3 etapas encadeadas:**

| Etapa | Função | Resultado |
|-------|--------|-----------|
| **Diagnóstico Tático** | Análise comparativa Inicial vs. Contestação | Mapa de disputas do processo |
| **Desconstrução Técnica** | Dissecação de fragilidades da defesa | Vulnerabilidades classificadas por impacto |
| **Arquitetura da Réplica** | Estruturação persuasiva da peça | Roteiro estratégico completo |

**Por que funciona:**

Quando você joga a contestação no Claude e pede "faça uma réplica", recebe texto genérico que repete a inicial com outras palavras. Este Skill força o Claude a **analisar antes de redigir** — e a diferença é brutal.

**O que o Skill faz automaticamente:**
- Mapeia teses atacadas, argumentos frágeis e contradições da defesa
- Identifica fatos não impugnados (art. 341 CPC = fatos incontroversos)
- Classifica fragilidades jurídicas e fáticas por ordem de impacto estratégico
- Estrutura a réplica em sequência persuasiva: preliminares → reforço → desconstrução → pedidos
- Separa a arquitetura (plano) da execução (redação) para manter controle intelectual

**Elementos essenciais para fornecer ao Claude:**
1. Pedidos e tese central da inicial
2. Provas apresentadas pelo autor
3. Pontos de ataque específicos da defesa
4. Fragilidades identificadas na contestação
5. Pontos que precisam de reforço argumentativo ou probatório`,
        prompt: `SKILL: Réplica Estratégica — Cadeia de 3 Prompts Sequenciais

Quando o usuário pedir para elaborar uma réplica à contestação, SEMPRE execute as 3 etapas abaixo em sequência. NÃO pule etapas. Cada etapa alimenta a próxima. Apresente o resultado de cada etapa antes de avançar.

═══ ETAPA 1 — DIAGNÓSTICO TÁTICO ═══

Analise comparativamente a petição inicial e a contestação e produza um diagnóstico tático completo.

PETIÇÃO INICIAL — Analise: pedidos formulados, tese central, narrativa fática, provas apresentadas e fundamentos jurídicos.

CONTESTAÇÃO — Analise: argumentos de defesa, teses jurídicas invocadas, documentos juntados, preliminares arguidas e impugnações específicas.

DIAGNÓSTICO COMPARATIVO — Responda:
- Quais teses da inicial estão sendo atacadas frontalmente pela defesa?
- Quais argumentos da contestação são juridicamente frágeis ou mal fundamentados?
- Existem contradições entre as alegações da defesa e os documentos que ela própria juntou?
- Quais pontos da inicial precisam de reforço argumentativo ou probatório?
- A defesa omitiu impugnação a algum fato ou pedido relevante? (art. 341 CPC — fato não impugnado = incontroverso)

Organize por impacto estratégico, do mais crítico ao menos urgente.

═══ ETAPA 2 — DESCONSTRUÇÃO TÉCNICA ═══

Com base no diagnóstico, classifique TODAS as fragilidades da contestação:

FRAGILIDADES JURÍDICAS:
- Teses sem amparo legal ou que distorcem texto normativo
- Interpretações equivocadas de dispositivos legais ou súmulas
- Precedentes citados fora de contexto ou inaplicáveis
- Fundamentos que contradizem jurisprudência dominante

FRAGILIDADES FÁTICAS:
- Contradições entre alegações da defesa e documentos que ela mesma juntou
- Omissão de fatos relevantes que constam nos autos
- Versões incompatíveis com as provas já produzidas
- Narrativa inverossímil

PRELIMINARES (se houver):
- Fundamento técnico de cada preliminar arguida
- Fragilidades argumentativas e processuais
- Elementos para refutação fundamentada

MAPA ESTRATÉGICO:
- Prioridades de ataque (maior impacto primeiro)
- Maior vulnerabilidade da defesa
- Teses da inicial que saíram fortalecidas
- Necessidade de novas provas ou requerimentos probatórios

═══ ETAPA 3 — ARQUITETURA DA RÉPLICA ═══

Estruture o roteiro completo da réplica:

1. PRELIMINARES — Refutação técnica de cada preliminar com fundamentação legal e jurisprudência. Pedido expresso de rejeição.
2. REFORÇO DA TESE AUTORAL — Ratificação dos fatos, fortalecimento das provas, consolidação dos fundamentos. Demonstrar que a contestação NÃO abalou a tese.
3. DESCONSTRUÇÃO DA DEFESA — Refutação pontual de cada argumento relevante, exposição de fragilidades, contradições e inconsistências. Jurisprudência contrária às teses da defesa.
4. COMPLEMENTAÇÃO PROBATÓRIA — Novos documentos juntados com a réplica e justificativa técnica.
5. PEDIDOS — Rejeição das preliminares + procedência integral com eventuais ajustes.

NÃO redija a peça — estruture o roteiro detalhado com argumentos, provas e fundamentação de cada seção. Só redija quando o usuário aprovar o roteiro.`,
        tips: [
          'Forneça a petição inicial E a contestação completas — quanto mais contexto, melhor a análise',
          'Mantenha as 3 etapas na mesma conversa para o Claude acumular o contexto de cada fase',
          'Revise o diagnóstico antes de pedir a etapa seguinte — ajuste prioridades se necessário',
          'Combine com o Skill de Visual Law para réplicas com quadros comparativos e tabelas de provas',
          'Fato não impugnado = fato incontroverso (art. 341 CPC) — o Skill identifica isso automaticamente',
        ],
        steps: [
          'Abra Claude → Personalizar → Skills → Criar Skill "Réplica Estratégica"',
          'Cole o prompt completo acima no campo de instruções e salve',
          'Na conversa: cole a petição inicial e a contestação',
          'Peça: "Faça o diagnóstico tático desta réplica"',
          'Revise o diagnóstico → peça: "Agora faça a desconstrução técnica"',
          'Revise a desconstrução → peça: "Monte a arquitetura da réplica"',
          'Com o roteiro aprovado → peça: "Redija a réplica completa seguindo o roteiro"',
        ],
        flowSteps: [
          { title: 'Diagnóstico Tático', description: 'Análise comparativa entre inicial e contestação — mapa de disputas do processo' },
          { title: 'Desconstrução Técnica', description: 'Dissecação de fragilidades jurídicas, fáticas e preliminares — classificadas por impacto' },
          { title: 'Arquitetura da Réplica', description: 'Roteiro persuasivo: preliminares → reforço → desconstrução → pedidos' },
          { title: 'Redação Final', description: 'Com o roteiro aprovado, o Claude redige a peça completa e coerente' },
        ],
      },
      {
        title: 'Skill de Contrarrazões Recursais',
        subtitle: 'Blindagem da sentença e desmonte cirúrgico do recurso adverso',
        level: 'avancado',
        icon: 'lock',
        analogy: {
          text: 'A sentença favorável é uma **fortaleza conquistada**. O recurso adverso é o contra-ataque. Com este Skill, o Claude mapeia por onde o inimigo está atacando, identifica onde o ataque é fraco, e constrói uma **muralha de defesa ponto a ponto** que blinda cada fundamento da decisão.',
        },
        content: `Da reação automática à dissecação tática: este Skill transforma contrarrazões genéricas em peças que **blindam a sentença** e **desmontam o recurso adverso** com precisão cirúrgica.

**O método em 3 etapas encadeadas:**

| Etapa | Função | Resultado |
|-------|--------|-----------|
| **Contextualização** | Mapeamento completo do cenário processual | Fatos, direito e pontos sob ataque organizados |
| **Fragilidades do Recurso** | Dissecação cirúrgica do recurso adverso | Vulnerabilidades técnicas e fáticas classificadas |
| **Arquitetura Estratégica** | Estruturação da peça de defesa | Roteiro completo antes da redação |

**Adaptável a qualquer tipo de recurso:**

| Recurso | Foco de Ajuste |
|---------|---------------|
| **Apelação** | Reforçar fundamentação da sentença; demonstrar acerto do juízo |
| **Agravo de Instrumento** | Foco na interlocutória; ausência de urgência ou erro |
| **Recurso Especial** | Direito federal; ausência de prequestionamento ou divergência |
| **Recurso Extraordinário** | Matéria constitucional; ausência de repercussão geral |
| **Recurso Inominado (JEC)** | Linguagem direta; conjunto probatório e proporcionalidade |
| **Embargos de Declaração** | Inexistência de omissão/contradição; caráter infringente |

**O que o Skill faz automaticamente:**
- Organiza fatos consolidados, direito aplicado e pontos sob ataque recursal
- Identifica erros de fundamentação, contradições internas e omissões de precedentes vinculantes
- Mapeia teses da sentença que precisam de reforço nas contrarrazões
- Estrutura a peça em sequência: preliminares → reforço da sentença → desconstrução → pedidos`,
        prompt: `SKILL: Contrarrazões Recursais — Cadeia de 3 Prompts Sequenciais

Quando o usuário pedir para elaborar contrarrazões a qualquer tipo de recurso, SEMPRE execute as 3 etapas abaixo em sequência. NÃO pule etapas. Cada etapa alimenta a próxima.

═══ ETAPA 1 — CONTEXTUALIZAÇÃO COMPLETA ═══

Antes de redigir, analise e organize TODAS as informações do caso:

SENTENÇA FAVORÁVEL:
- Quais teses foram acolhidas pelo juiz
- Fundamentos jurídicos centrais da decisão
- Provas que o magistrado considerou determinantes
- Jurisprudência citada ou aplicada na fundamentação

RECURSO DA PARTE CONTRÁRIA:
- Quais teses da sentença estão sendo atacadas
- Argumentos principais do recorrente
- Pedidos recursais específicos (reforma total, parcial, anulação)

VISÃO GERAL DO PROCESSO:
- Pedidos da petição inicial
- Defesa apresentada na contestação
- Documentos-chave dos autos

Organize em categorias: (a) fatos consolidados e incontroversos, (b) direito aplicado e fundamentos acolhidos, (c) pontos sob ataque recursal.

═══ ETAPA 2 — IDENTIFICAÇÃO DE FRAGILIDADES DO RECURSO ═══

Analise o recurso com profundidade e identifique:

FRAGILIDADES TÉCNICAS:
- Erros de fundamentação jurídica (teses sem base ou mal aplicadas)
- Omissão de precedentes vinculantes que favorecem a sentença
- Contradições internas na argumentação recursal
- Argumentos desprovidos de amparo no conjunto probatório

PONTOS QUE EXIGEM BLINDAGEM:
- Teses da sentença que precisam ser reforçadas
- Provas que devem ser destacadas e recontextualizadas
- Questões preliminares que podem ser levantadas
- Jurisprudência que consolida a posição vencedora

ESTRATÉGIA DE DEFESA:
- Linha argumentativa de maior força persuasiva
- Pontos mais vulneráveis do recurso
- Prioridades absolutas nas contrarrazões

Liste tudo em ordem de relevância estratégica.

═══ ETAPA 3 — ARQUITETURA DAS CONTRARRAZÕES ═══

Estruture o roteiro completo:

1. QUESTÕES PRELIMINARES (se aplicável): tempestividade, preparo, requisitos formais, vícios de admissibilidade
2. REFORÇO DA SENTENÇA: razões para manutenção, fundamentos sólidos, provas robustas que o recurso ignora ou distorce
3. DESCONSTRUÇÃO DO RECURSO: refutação pontual de cada argumento, demonstração de fragilidades, jurisprudência contrária
4. TESES SUBSIDIÁRIAS (se houver): argumentos alternativos para hipótese de acolhimento parcial
5. PEDIDOS: conhecimento e total desprovimento + honorários recursais (quando cabível)

NÃO redija — estruture o roteiro detalhado com argumentos, provas e jurisprudência de cada seção. Só redija quando o usuário aprovar.`,
        tips: [
          'Forneça o texto integral da sentença e do recurso — não apenas resumos',
          'Revise o roteiro (Etapa 3) antes de pedir a redação final — é o produto mais valioso',
          'Se a análise não identificou algo relevante, alimente o Claude com essa informação e peça nova análise',
          'Sempre peça honorários recursais quando cabível — muitos advogados esquecem',
          'Para Recurso Especial: enfatize ausência de prequestionamento e conformidade com STJ',
        ],
        steps: [
          'Abra Claude → Personalizar → Skills → Criar Skill "Contrarrazões Recursais"',
          'Cole o prompt completo acima e salve',
          'Na conversa: cole a sentença favorável e o recurso adverso',
          'Peça: "Faça a contextualização completa do caso"',
          'Revise → peça: "Identifique as fragilidades do recurso"',
          'Revise → peça: "Monte a arquitetura das contrarrazões"',
          'Com o roteiro aprovado → peça: "Redija as contrarrazões completas"',
        ],
        flowSteps: [
          { title: 'Contextualização', description: 'Mapeia fatos consolidados, direito aplicado e pontos sob ataque recursal' },
          { title: 'Fragilidades do Recurso', description: 'Disseca falhas técnicas, contradições, omissões e vulnerabilidades' },
          { title: 'Arquitetura Estratégica', description: 'Roteiro: preliminares → reforço sentença → desconstrução → pedidos' },
          { title: 'Redação Final', description: 'Com o plano aprovado, o Claude redige a peça que blinda a sentença' },
        ],
      },
      {
        title: 'Skill de Jurisprudência Estratégica',
        subtitle: 'O método dos 3 prompts para usar precedentes com precisão',
        level: 'avancado',
        icon: 'search',
        analogy: {
          text: 'A maioria dos advogados trata jurisprudência como **decoração de petição** — copia ementas e reza para impressionar pelo volume. Este Skill ensina o Claude a tratar cada precedente como **munição cirúrgica**: classifica por autoridade, conecta aos fatos e integra à tese com hierarquia lógica.',
        },
        content: `Jurisprudência desconectada não fortalece argumento — **enfraquece**. O Judiciário opera sob sobrecarga crônica. Assessores fazem leitura dinâmica. Magistrados decidem com base no que ficou **claro**, não no que estava enterrado entre citações desconexas.

**O método em 3 etapas:**

| Etapa | Função | Resultado |
|-------|--------|-----------|
| **Triagem e Hierarquia** | Classificação por autoridade e relevância | Mapa de relevância dos precedentes |
| **Contextualização** | Conexão do precedente aos fatos do caso | Precedente transformado em argumento vivo |
| **Integração à Tese** | Montagem do bloco argumentativo final | Cadeia argumentativa completa e persuasiva |

**Classificação hierárquica que o Skill aplica:**

| Tipo | Exemplos | Peso |
|------|----------|------|
| **Vinculante** | Súmulas vinculantes, temas de repercussão geral, IACs, IRDRs | Máximo |
| **Orientadora** | Jurisprudência dominante de tribunais superiores (STF, STJ, TST) | Alto |
| **Reforço secundário** | Decisões monocráticas, turmas recursais, tribunais estaduais | Complementar |

**Parametrização por área do direito:**
- **Previdenciário:** Temas STF → Súmulas TNU → Turmas recursais
- **Consumidor:** Súmulas STJ → IACs dos TJs → Turmas recursais
- **Trabalhista:** Súmulas TST → OJs das SDIs → TRTs
- **Tributário:** Repercussão geral → Repetitivos → CARF

**O que muda na prática:**
Quando o juiz não precisa se esforçar para entender o que você quer, a probabilidade de deferimento aumenta drasticamente. Clareza argumentativa é, em si mesma, uma forma de persuasão.`,
        prompt: `SKILL: Jurisprudência Estratégica — Método dos 3 Prompts Sequenciais

Quando o usuário pedir para trabalhar com jurisprudência, SEMPRE execute as 3 etapas abaixo em sequência. NÃO pule etapas. Cada etapa alimenta a próxima.

═══ ETAPA 1 — TRIAGEM E HIERARQUIA ═══

Analise as jurisprudências fornecidas e classifique por grau de hierarquia e relevância para o caso:

VINCULANTES:
- Súmulas vinculantes, temas de repercussão geral, IACs, IRDRs
- Indicar número, tribunal e tese fixada

ORIENTADORAS:
- Jurisprudência dominante de tribunais superiores (STF, STJ, TST, TNU)
- Indicar turma/seção, se é entendimento consolidado ou recente

REFORÇO SECUNDÁRIO:
- Decisões monocráticas, turmas recursais, tribunais estaduais
- Indicar por que servem como suporte adicional

Para cada precedente classificado, explique brevemente o critério de classificação aplicado e a relevância específica para a tese central do caso.

═══ ETAPA 2 — CONTEXTUALIZAÇÃO FÁTICA E JURÍDICA ═══

Para cada precedente relevante (começando pelos vinculantes), escreva um parágrafo de contextualização que:

(1) Explique o que o tribunal decidiu e o fundamento central da decisão
(2) Estabeleça a conexão direta com os fatos do caso, apontando semelhanças fáticas e jurídicas relevantes
(3) Destaque o trecho mais relevante do precedente para o argumento, explicando por que ele se aplica

O precedente deve operar como ARGUMENTO VIVO dentro da narrativa — não como bloco de texto isolado que o assessor precisa interpretar sozinho.

═══ ETAPA 3 — INTEGRAÇÃO À TESE JURÍDICA ═══

Integre as jurisprudências contextualizadas à tese jurídica, criando um bloco argumentativo com hierarquia lógica:

1. Comece pela fundamentação normativa (lei, artigo, princípio)
2. Passe pelo precedente vinculante ou de maior autoridade
3. Reforce com a jurisprudência orientadora contextualizada
4. Conclua conectando tudo diretamente ao pedido

Use linguagem objetiva, adequada para petição, sem redundâncias ou adjetivações desnecessárias. O bloco final deve ser copiável diretamente para a peça processual.`,
        tips: [
          'Sempre forneça contexto fático detalhado — quanto mais preciso, mais relevante a contextualização',
          'Antes de usar qualquer jurisprudência, confirme que o entendimento permanece vigente e não foi superado',
          'Adapte a linguagem ao tribunal: STJ exige maior formalidade; Juizados comportam linguagem mais direta',
          'Combine com o Skill de Visual Law para tabelas de jurisprudência com hierarquia visual',
          'Use a classificação do Prompt 1 para decidir quais precedentes merecem destaque na petição',
        ],
        steps: [
          'Abra Claude → Personalizar → Skills → Criar Skill "Jurisprudência Estratégica"',
          'Cole o prompt completo acima e salve',
          'Na conversa: cole as ementas/trechos dos precedentes + descreva a tese central',
          'Peça: "Faça a triagem e hierarquia dessas jurisprudências"',
          'Revise → peça: "Agora contextualize cada precedente com os fatos do meu caso"',
          'Revise → peça: "Integre tudo à minha tese jurídica"',
          'O bloco final pode ser copiado diretamente para a petição',
        ],
        flowSteps: [
          { title: 'Triagem e Hierarquia', description: 'Classifica precedentes: vinculantes → orientadores → reforço secundário' },
          { title: 'Contextualização', description: 'Conecta cada precedente aos fatos do caso — transforma citação em argumento' },
          { title: 'Integração à Tese', description: 'Monta bloco: norma → precedente vinculante → orientador → conexão com pedido' },
        ],
      },
      {
        title: 'Skill de Estratégia de Caso',
        subtitle: 'Análise estratégica completa antes de peticionar',
        level: 'avancado',
        icon: 'target',
        analogy: {
          text: 'Antes de redigir qualquer peça, o advogado experiente faz uma **análise estratégica silenciosa**: mapeia teses, avalia riscos, antecipa objeções e escolhe o melhor caminho processual. Este Skill faz o Claude operar como um **estrategista de caso** — ele analisa antes de executar.',
        },
        content: `A maioria dos advogados pede ao Claude "faça uma petição" sem antes pensar estrategicamente. Este Skill força uma etapa de análise estratégica antes de qualquer redação.

**O que o Skill gera:**

| Documento | Conteúdo |
|-----------|---------|
| **Mapa de Teses** | Todas as teses possíveis classificadas por probabilidade de êxito |
| **Análise de Risco** | Pontos fortes e fracos do caso — sem otimismo |
| **Cenários** | Melhor caso, caso provável e pior caso — com fundamentação |
| **Estratégia Processual** | Tipo de ação, competência, rito, pedidos, provas necessárias |
| **Timeline Estratégica** | Cronograma de ações e decisões estratégicas |
| **Antecipação de Defesa** | O que a outra parte provavelmente vai argumentar |

**Por que funciona:**
O Skill separa o **pensar** do **fazer**. Primeiro o Claude analisa todas as variáveis e gera um diagnóstico honesto. Só depois, com a estratégia aprovada, parte para a redação.

**Diferencial:**
O Skill instrui o Claude a ser **criticamente honesto** — se o caso é fraco, ele diz. Se há risco de perda, ele quantifica. Isso protege o advogado de viés de confirmação e melhora a qualidade da orientação ao cliente.`,
        prompt: `SKILL: Estratégia de Caso — Análise Antes de Redigir

Quando o usuário apresentar um caso novo ou pedir para avaliar uma situação jurídica, ANTES de redigir qualquer peça, execute esta análise estratégica completa:

═══ FASE 1 — DIAGNÓSTICO DO CASO ═══

1. RESUMO FÁTICO: Sintetize os fatos em ordem cronológica, separando fatos provados de fatos alegados.

2. ENQUADRAMENTO JURÍDICO: Identifique as áreas do direito aplicáveis, legislação incidente e competência.

3. MAPA DE TESES (tabela obrigatória):
| Tese | Fundamento Legal | Probabilidade de Êxito | Jurisprudência | Observações |
Inclua TODAS as teses possíveis — principais e subsidiárias.

═══ FASE 2 — ANÁLISE DE RISCO ═══

4. PONTOS FORTES DO CASO: O que favorece o cliente — provas, legislação, jurisprudência.

5. PONTOS FRACOS E VULNERABILIDADES: Onde o caso é fraco — seja honesto e direto. Inclua riscos de sucumbência e honorários.

6. ANTECIPAÇÃO DA DEFESA: Os 3-5 argumentos mais prováveis da parte adversa e como respondê-los.

7. CENÁRIOS (tabela obrigatória):
| Cenário | Probabilidade | Resultado | Impacto Financeiro |
- Melhor caso, Caso provável, Pior caso

═══ FASE 3 — ESTRATÉGIA PROCESSUAL ═══

8. RECOMENDAÇÃO DE AÇÃO: Tipo de ação, rito, foro, pedidos recomendados.

9. PROVAS NECESSÁRIAS: Lista de documentos e provas que devem ser produzidos.

10. TIMELINE ESTRATÉGICA: Cronograma com marcos e decisões.

11. RECOMENDAÇÃO AO CLIENTE: Resumo objetivo para apresentar ao cliente, incluindo riscos e custos estimados.

REGRA: Seja criticamente honesto. Se o caso é fraco, diga. Se há risco alto de perda, quantifique. O advogado precisa de diagnóstico real, não de confirmação de viés.`,
        tips: [
          'Use ANTES de iniciar qualquer petição — a análise estratégica melhora drasticamente a qualidade da peça',
          'Compartilhe o diagnóstico com o cliente para alinhar expectativas desde o início',
          'Se o Claude indicar probabilidade baixa de êxito, considere seriamente alternativas (acordo, mediação)',
          'Combine com o Skill de Jurisprudência para fundamentar cada tese do mapa',
          'Reutilize o diagnóstico como base para proposta de honorários (caso complexo = valor maior)',
        ],
        steps: [
          'Abra Claude → Personalizar → Skills → Criar Skill "Estratégia de Caso"',
          'Cole o prompt completo acima e salve',
          'Na conversa: descreva o caso do cliente com todos os fatos e documentos disponíveis',
          'O Claude gera o diagnóstico completo com mapa de teses, riscos e cenários',
          'Revise o diagnóstico → ajuste a estratégia → só então peça a petição',
        ],
        flowSteps: [
          { title: 'Diagnóstico', description: 'Resumo fático, enquadramento jurídico e mapa completo de teses' },
          { title: 'Análise de Risco', description: 'Pontos fortes, fracos, defesa antecipada e cenários com probabilidades' },
          { title: 'Estratégia', description: 'Tipo de ação, provas, timeline e recomendação ao cliente' },
          { title: 'Execução', description: 'Com estratégia aprovada, redige a peça processual adequada' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // SEÇÃO 6: PLUGINS
  // ═══════════════════════════════════════════════════════════
  {
    id: 'plugins',
    title: 'Plugins',
    description: 'Kits prontos que especializam o Claude',
    icon: 'plug',
    cards: [
      {
        title: 'O que são Plugins?',
        subtitle: 'Pacotes de especialização',
        level: 'intermediario',
        icon: 'layout-grid',
        analogy: {
          text: 'Imagine um **armário com pastas etiquetadas**: "Trabalhista", "Consumidor", "Previdenciário". Cada pasta tem tudo: modelos, checklists, legislação, fluxos. **Sem a pasta = genérico. Com a pasta = especialista.**',
        },
        content: `Um plugin é um "pacote de especialização" que transforma o Claude de um assistente genérico em um especialista numa área.

**Cada plugin contém:**
- **Skills:** Conhecimento que o Claude usa automaticamente
- **Slash commands:** Atalhos com "/" para tarefas específicas (ex: /review-contract)
- **Connectors:** Ligações com ferramentas como Google Drive, Slack, etc.

**Todos os 11 plugins oficiais são gratuitos** e de código aberto. Você só precisa ter um plano pago.

| Plugin | Foco | Utilidade para Advogados |
|--------|------|-------------------------|
| **Legal** | Jurídico | Revisão de contratos, NDAs, compliance |
| **Productivity** | Produtividade | Tarefas, calendário, fluxos |
| **Enterprise Search** | Busca | Encontrar em emails, docs, chats |
| **Finance** | Financeiro | Análises, reconciliação |
| **Data** | Dados | SQL, dashboards, jurimetria |
| **Marketing** | Marketing | Conteúdo, campanhas |
| **Plugin Create** | Meta | Criar seus próprios plugins |`,
        steps: [
          'Abra o Claude Desktop e vá para a aba Cowork',
          'No menu lateral, clique em "Customize" (Personalizar)',
          'Clique em "Browse plugins" (Navegar plugins)',
          'Encontre o plugin desejado e clique em "Install"',
          'Pronto! Use os comandos digitando "/" na conversa',
        ],
      },
      {
        title: 'Plugin Legal (Jurídico)',
        subtitle: 'O mais importante para advogados',
        level: 'intermediario',
        icon: 'scale',
        analogy: {
          text: 'O plugin Legal transforma o Claude de "assistente genérico" em **advogado júnior especializado**: revisa contratos com semáforo, classifica NDAs por risco, e gera briefings jurídicos — tudo com comandos simples.',
        },
        content: `Automatiza revisão de contratos, triagem de NDAs, compliance, briefings e respostas padronizadas.

**Comandos disponíveis:**

| Comando | O que faz |
|---------|-----------|
| \`/review-contract\` | Revisão cláusula por cláusula com cores (verde/amarelo/vermelho) |
| \`/triage-nda\` | Triagem de NDAs: aprovação padrão, revisão jurídica ou completa |
| \`/vendor-check\` | Verifica status de contratos com fornecedores |
| \`/brief\` | Gera briefings jurídicos contextuais |
| \`/respond\` | Cria respostas padronizadas (LGPD, discovery, etc.) |

**Conectores do Plugin Legal:** Slack, Box, Egnyte, Jira, Microsoft 365

**Exemplo prático:** Advogado recebe 3 NDAs para revisar. Digita /triage-nda para cada um. O Claude classifica: "NDA 1: aprovação padrão. NDA 2: precisa revisar cláusula de não-concorrência. NDA 3: cláusulas não-padrão, revisão completa necessária."`,
        tips: [
          'O Claude não busca apenas palavras-chave — ele entende contexto entre cláusulas',
          'Personalize o plugin para seguir regras do direito brasileiro',
          'Combine com conectores para acessar contratos direto do Drive ou Office 365',
        ],
      },
      {
        title: 'Plugin Productivity',
        subtitle: 'Organize sua rotina',
        level: 'intermediario',
        icon: 'briefcase',
        analogy: {
          text: 'Sua **secretária digital**: gerencia tarefas, monitora prazos, organiza agenda e puxa dados do Notion, Asana ou Monday — tudo dentro do Claude.',
        },
        content: `Gerencia tarefas, calendários, fluxos de trabalho e contexto pessoal.

**Integra com:** Slack, Notion, Asana, Linear, Jira, Monday, ClickUp, Microsoft 365.

**Exemplo prático para advogados:**
"Organize minhas tarefas da semana: audiência na terça (TJ-SP), prazo de contestação na quarta, reunião com cliente na sexta. Crie subtarefas para preparação de cada uma."

O plugin puxa dados do Calendar, cria tarefas no Notion/Asana e organiza tudo numa visão consolidada.`,
        tips: [
          'É o plugin mais versátil — útil para qualquer advogado',
          'Conecte seu gerenciador de tarefas preferido',
          'Use para manter controle de prazos processuais',
        ],
      },
      {
        title: 'Plugin Enterprise Search',
        subtitle: 'Encontre tudo em um só lugar',
        level: 'intermediario',
        icon: 'search',
        analogy: {
          text: 'Como ter um **Google interno** do escritório: busca em emails, Drive, Slack, Notion — tudo de uma vez. "Contrato João Silva 2024" retorna resultados de todas as plataformas.',
        },
        content: `Busca em emails, chats, documentos e wikis — uma consulta única em todas as ferramentas.

Imagine buscar **"contrato João Silva 2024"** e encontrar resultados no email, Drive, Slack e notas — tudo de uma vez.

**Para advogados:** Encontre rapidamente aquele e-mail do cliente, aquele contrato no Drive, aquela anotação no Notion — sem abrir cada ferramenta separadamente.

**Exemplo prático:** "Encontre todas as comunicações e documentos relacionados ao caso nº 0001234 nos últimos 6 meses." O plugin busca em Gmail, Drive, Slack e Notion simultaneamente.`,
        tips: [
          'Enterprise Search economiza horas procurando informações espalhadas',
          'Ideal para escritórios com informações em múltiplas plataformas',
          'Funciona simultaneamente com outros plugins',
        ],
      },
      {
        title: 'Plugins Finance e Data',
        subtitle: 'Análise financeira e jurimetria',
        level: 'avancado',
        icon: 'bar-chart',
        analogy: {
          text: 'Finance é o **contador do escritório** (analisa balanços, reconcilia valores). Data é o **estatístico** (consulta bases, cria dashboards). Juntos, são essenciais para due diligence e jurimetria.',
        },
        content: `**Plugin Finance:**
Análise financeira, reconciliação, demonstrações. Essencial para direito empresarial e due diligence. Integra com QuickBooks, Stripe, Plaid, PostgreSQL.

**Exemplo:** "Analise as demonstrações financeiras dos últimos 3 anos desta empresa-alvo e identifique contingências ocultas."

**Plugin Data:**
Consulta, visualiza e interpreta dados. Escreve SQL, cria dashboards. Para jurimetria e análise de grandes volumes.

**Exemplo:** "Com base nos dados desta planilha de 500 processos, crie um dashboard com: taxa de êxito por vara, tempo médio de tramitação, distribuição de valores condenatórios."

Ambos são especialmente úteis para:
- Due diligence em M&A
- Recuperação judicial (análise de créditos)
- Jurimetria e análise de probabilidade
- Compliance financeiro`,
      },
      {
        title: 'Criando Plugins Personalizados',
        subtitle: 'Sem precisar programar',
        level: 'avancado',
        icon: 'wrench',
        analogy: {
          text: 'Não encontrou o manual que precisa? **Escreva o seu.** O Plugin Create permite criar plugins sob medida — como montar um kit de ferramentas personalizado para sua especialidade.',
        },
        content: `Use o **Plugin Create** para criar plugins sob medida para sua área de atuação. O Claude monta o plugin completo para você — sem código.

**Exemplo — Plugin Previdenciário:**
Comandos para analisar benefícios, calcular tempo de contribuição, gerar checklists de documentos e criar pareceres.

**Exemplo — Plugin de Recuperação Judicial:**
Comandos para analisar créditos, classificar credores, gerar habilitações e acompanhar assembleias.`,
        steps: [
          'Instale o plugin "Plugin Create" no Cowork',
          'Digite: "Quero criar um plugin para [sua área]"',
          'Responda as perguntas do Claude sobre o que precisa',
          'O Claude monta o plugin completo para você',
          'Teste e refine os comandos conforme necessário',
        ],
        prompt: `Crie um plugin para advogados previdenciaristas brasileiros. Preciso de comandos para:
- /analise-beneficio — Analisar se o cliente tem direito a um benefício específico
- /calcular-tempo — Calcular tempo de contribuição a partir de CNIS
- /checklist-docs — Gerar checklist de documentos necessários para o benefício
- /parecer-previd — Gerar parecer sobre viabilidade do pedido
- /recursos-inss — Sugerir estratégia recursal contra indeferimento

Considere a Lei 8.213/91, EC 103/2019, Decreto 3.048/99, IN 128 INSS e jurisprudência do STJ e TNU.`,
      },
      {
        title: 'Plugin Contencioso Estratégico',
        subtitle: 'Réplica, contrarrazões e jurisprudência em um único kit',
        level: 'avancado',
        icon: 'scale',
        analogy: {
          text: 'Imagine um **kit tático completo** para o contencioso: um plugin que reúne réplica estratégica, contrarrazões recursais e jurisprudência organizada — tudo com comandos prontos. É como ter um **estrategista processual** integrado ao Claude que sabe exatamente o método a seguir para cada peça.',
        },
        content: `Este plugin combina 3 fluxos de trabalho contenciosos em um único pacote de comandos, cada um baseado em cadeias de prompts sequenciais testados e otimizados.

**Os 3 fluxos reunidos:**

| Comando | Função | Etapas |
|---------|--------|--------|
| **/replica** | Réplica à contestação | Diagnóstico → Desconstrução → Arquitetura |
| **/contrarrazoes** | Contrarrazões recursais | Contextualização → Fragilidades → Estruturação |
| **/jurisprudencia** | Jurisprudência estratégica | Triagem → Contextualização → Integração |

**Comandos auxiliares:**

| Comando | Descrição |
|---------|-----------|
| **/diagnostico** | Apenas o diagnóstico tático (Etapa 1 da réplica) |
| **/desconstruir** | Apenas a desconstrução técnica (Etapa 2 da réplica) |
| **/blindar-sentenca** | Reforço específico da sentença favorável |
| **/classificar-juris** | Apenas a triagem hierárquica de precedentes |
| **/contextualizar** | Conectar um precedente específico aos fatos do caso |

**Vantagem sobre Skills individuais:**
O plugin mantém todos os comandos disponíveis simultaneamente, permite combiná-los livremente e pode ser usado com atalhos rápidos. Não é preciso configurar 3 Skills separados.

**Fluxo completo de uma réplica com o plugin:**
1. Cole a petição inicial e a contestação
2. Digite **/replica** — o Claude executa as 3 etapas automaticamente
3. Revise o roteiro gerado
4. Peça a redação final
5. Use **/jurisprudencia** para reforçar os pontos fracos com precedentes classificados`,
        prompt: `Crie um plugin para advogados contenciosos brasileiros com os seguintes comandos:

/replica — Executa a cadeia completa de réplica estratégica:
  Etapa 1: Diagnóstico tático (análise comparativa inicial vs. contestação)
  Etapa 2: Desconstrução técnica (fragilidades jurídicas, fáticas, preliminares)
  Etapa 3: Arquitetura da réplica (roteiro: preliminares → reforço → desconstrução → pedidos)
  O plugin deve apresentar cada etapa e aguardar aprovação antes da próxima.

/contrarrazoes — Executa a cadeia completa de contrarrazões recursais:
  Etapa 1: Contextualização (sentença, recurso, visão geral)
  Etapa 2: Fragilidades do recurso (técnicas, fáticas, mapa estratégico)
  Etapa 3: Arquitetura das contrarrazões (preliminares → reforço sentença → desconstrução → pedidos)
  Adaptável: apelação, agravo, REsp, RE, recurso inominado, embargos.

/jurisprudencia — Executa o método dos 3 prompts para jurisprudência:
  Etapa 1: Triagem e hierarquia (vinculante → orientadora → reforço)
  Etapa 2: Contextualização fática e jurídica de cada precedente
  Etapa 3: Integração à tese com hierarquia lógica (norma → precedente → orientador → pedido)

/diagnostico — Apenas a análise comparativa inicial vs. contestação
/desconstruir — Apenas a identificação de fragilidades de uma peça adversa
/blindar-sentenca — Análise focada em reforçar fundamentos da sentença favorável
/classificar-juris — Apenas a triagem hierárquica de precedentes fornecidos
/contextualizar — Conectar um precedente específico aos fatos do caso

Cada comando deve seguir rigorosamente a sequência de etapas. O plugin deve solicitar os documentos necessários antes de iniciar a análise. Linguagem técnica, objetiva, adequada para petições.`,
        tips: [
          'Use /replica como fluxo completo ou /diagnostico + /desconstruir separadamente para controle granular',
          'Para contrarrazões de REsp, adicione: "foco em direito federal e prequestionamento"',
          'Combine /jurisprudencia com qualquer outro comando para reforçar a fundamentação',
          'O plugin funciona melhor quando você fornece os documentos completos, não apenas resumos',
        ],
        steps: [
          'No Cowork: clique em "Plugin Create" ou peça ao Claude para criar o plugin',
          'Cole o prompt acima como especificação do plugin',
          'O Claude monta todos os comandos automaticamente',
          'Teste com /replica fornecendo uma inicial e contestação reais',
          'Ajuste os comandos conforme sua área de atuação',
        ],
        commandList: [
          { command: '/replica', description: 'Cadeia completa: diagnóstico → desconstrução → arquitetura da réplica' },
          { command: '/contrarrazoes', description: 'Cadeia completa: contextualização → fragilidades → arquitetura das contrarrazões' },
          { command: '/jurisprudencia', description: 'Método completo: triagem → contextualização → integração à tese' },
          { command: '/diagnostico', description: 'Análise comparativa isolada entre inicial e contestação' },
          { command: '/desconstruir', description: 'Dissecação de fragilidades de qualquer peça adversa' },
          { command: '/blindar-sentenca', description: 'Reforço estratégico dos fundamentos da sentença favorável' },
          { command: '/classificar-juris', description: 'Triagem hierárquica de precedentes: vinculante → orientador → reforço' },
          { command: '/contextualizar', description: 'Conexão de um precedente específico aos fatos do caso' },
        ],
      },
      {
        title: 'Estratégia Expert de Plugins',
        subtitle: 'Combinando plugins para fluxos avançados',
        level: 'expert',
        icon: 'cpu',
        analogy: {
          text: 'Sozinho, cada plugin resolve uma tarefa. **Combinados**, eles criam fluxos automatizados que transformam horas de trabalho em minutos — como uma linha de montagem jurídica.',
        },
        content: `No nível Expert, você combina múltiplos plugins num único fluxo de trabalho:

**Fluxo "Compliance Completo":**
1. **Legal** → /review-contract em todos os contratos ativos
2. **Enterprise Search** → Buscar comunicações relacionadas a cada contrato
3. **Data** → Dashboard de vencimentos, valores e riscos
4. **Productivity** → Criar tarefas para cada pendência identificada

**Fluxo "Prospecção Jurídica":**
1. **Enterprise Search** → Identificar leads em comunicações recebidas
2. **Marketing** → Gerar conteúdo jurídico para LinkedIn
3. **Productivity** → Agendar follow-ups no CRM

**Fluxo "Jurimetria":**
1. **Data** → Consultar base de processos (SQL)
2. **Finance** → Analisar valores condenatórios
3. **Legal** → Gerar briefing com estatísticas para o cliente

**Dica Expert:** Documente seus fluxos favoritos num CLAUDE.md. Assim, basta dizer "execute o fluxo de compliance" e o Claude sabe exatamente o que fazer.`,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // SEÇÃO 7: CONECTORES
  // ═══════════════════════════════════════════════════════════
  {
    id: 'conectores',
    title: 'Conectores',
    description: 'Conecte o Claude às suas ferramentas',
    icon: 'link',
    cards: [
      {
        title: 'Google Drive',
        subtitle: 'Acesse seus documentos diretamente',
        level: 'iniciante',
        icon: 'folder-open',
        analogy: {
          text: 'Imagine o **sistema telefônico** do escritório. Cada conector é uma **linha telefônica individual** que conecta o Claude a um lugar: Google Drive, Gmail, Slack. Basta ativar a linha e a comunicação acontece automaticamente.',
        },
        content: `Permite que o Claude acesse, leia e referencie documentos do seu Google Drive — sem precisar baixar e subir manualmente.

**Exemplo prático:** "Leia o contrato de locação que está na pasta 'Cliente João Silva' no Drive e identifique as cláusulas de rescisão antecipada, multas e garantias." O Claude vai direto no arquivo.

**Outro exemplo:** "Compare o contrato 'v1' com o 'v2' na pasta do Drive e liste todas as alterações feitas entre as versões."`,
        steps: [
          'Acesse claude.ai → avatar/iniciais → Configurações → Conectores',
          'Encontre Google Drive e clique em Conectar',
          'Faça a autenticação com sua conta Google',
          'Pronto — o Claude acessa seus arquivos do Drive',
        ],
        tips: [
          'Organize documentos por pastas de clientes no Drive',
          'O Claude só acessa arquivos que você tem permissão para ver',
          'Use para revisar documentos sem tirá-los do Drive',
          'Avalie a política de dados do escritório antes de conectar',
        ],
      },
      {
        title: 'Gmail',
        subtitle: 'Resuma e responda emails',
        level: 'iniciante',
        icon: 'mail',
        analogy: {
          text: 'O estagiário lê suas **100 emails do dia**, separa o que é urgente, resume as threads longas e rascunha respostas formais — você só revisa e envia.',
        },
        content: `O Claude lê, analisa e rascunha respostas para seus e-mails do Gmail.

**Exemplos práticos:**
- "Leia os e-mails da última semana sobre o processo do cliente X e faça um resumo executivo"
- "Rascunhe uma resposta formal ao escritório adversário sobre o prazo do recurso"
- "Encontre todos os e-mails sobre prazos processuais dos últimos 30 dias e organize numa lista"
- "Identifique e-mails urgentes não respondidos relacionados a processos"`,
        steps: [
          'Acesse Configurações → Conectores',
          'Encontre Gmail e clique em Conectar',
          'Autorize o acesso com sua conta Google',
        ],
        tips: [
          'Peça resumos de threads longas',
          'Use para rascunhar respostas com tom formal',
          'Extraia prazos e compromissos mencionados em e-mails',
          'Avalie a política de privacidade do escritório para dados sigilosos',
        ],
      },
      {
        title: 'Google Calendar',
        subtitle: 'Gerencie sua agenda',
        level: 'iniciante',
        icon: 'calendar',
        analogy: {
          text: 'Sua **agenda inteligente**: o Claude vê suas audiências, identifica conflitos e sugere horários para preparação. Combine com Gmail para criar eventos direto do e-mail.',
        },
        content: `O Claude vê e interage com sua agenda. Pergunte: "Quais são minhas audiências esta semana?", "Tenho algo conflitante na quinta?" ou "Agende reunião com o cliente Y para terça, 14h."

**Exemplo prático:** "Olhe minha agenda da próxima semana, identifique as audiências, e para cada uma me diga: o processo envolvido, o que preciso preparar e se tenho tempo livre antes para preparação."`,
        steps: [
          'Acesse Configurações → Conectores',
          'Encontre Google Calendar e clique em Conectar',
          'Autorize o acesso',
        ],
        tips: [
          'Liste compromissos da semana e identifique janelas livres',
          'Combine com Gmail: "Leia o e-mail sobre a perícia e adicione na agenda"',
          'Planeje sessões de trabalho logo após o reset de 5 horas',
        ],
      },
      {
        title: 'DocuSign',
        subtitle: 'Contratos e assinaturas digitais',
        level: 'intermediario',
        icon: 'file-key',
        analogy: {
          text: 'O Claude vira seu **gerente de contratos digitais**: lista pendências de assinatura, resume o conteúdo de cada contrato e alerta sobre urgências.',
        },
        content: `O Claude interage com documentos no DocuSign — resumindo contratos pendentes de assinatura, sugerindo alterações e gerenciando fluxos de envio.

**Exemplo prático:** "Liste todos os contratos pendentes de assinatura no DocuSign, classifique por urgência e gere um resumo de cada um com os pontos de atenção."`,
        steps: [
          'Acesse Configurações → Conectores',
          'Encontre DocuSign e clique em Conectar',
          'Autorize com sua conta DocuSign',
        ],
      },
      {
        title: 'Slack, Microsoft 365 e Outros',
        subtitle: 'Comunicação e gestão integradas',
        level: 'intermediario',
        icon: 'globe',
        analogy: {
          text: 'Cada conector é uma **porta aberta** para uma ferramenta. Slack para comunicação da equipe, Microsoft 365 para documentos, Notion para wiki — o Claude circula livremente entre todas.',
        },
        content: `**Slack:** Leia mensagens, resuma discussões, rascunhe respostas para a equipe.

**Microsoft 365:** Acesse Word, Excel, Outlook e SharePoint — ideal para escritórios que usam o ecossistema Microsoft.

**Outros conectores relevantes:**

| Conector | Utilidade para advogados |
|----------|-------------------------|
| **Notion** | Base de conhecimento, wiki interna do escritório |
| **Asana / Monday** | Gestão de tarefas e controle de prazos |
| **WordPress** | Blog e site do escritório |
| **Jira** | Gestão de projetos para equipes maiores |
| **Harvey** | Pesquisa jurídica assistida por IA |
| **Intercom** | Atendimento a clientes |`,
        tips: [
          'Conecte apenas as ferramentas que usa regularmente',
          'Cada conector ativo consome tokens — desative os que não precisa',
          'Para escritórios: Microsoft 365 é essencial se usam Outlook/Word/Excel',
        ],
      },
      {
        title: 'Orquestrando Conectores',
        subtitle: 'Fluxos automatizados entre ferramentas',
        level: 'expert',
        icon: 'workflow',
        content: `No nível Expert, os conectores viram peças de um fluxo automatizado:

**Fluxo "Gestão de Prazos Integrada":**
Gmail (identifica intimações) → Calendar (cria eventos com alertas) → Slack (notifica a equipe) → Notion (atualiza base de processos)

**Fluxo "Relatório Semanal Automático":**
Gmail (extrai novidades dos processos) → Drive (acessa documentos atualizados) → Cowork (gera relatório) → Gmail (envia ao cliente)

**Fluxo "Preparação de Audiência":**
Calendar (identifica audiência) → Drive (busca peças do processo) → Cowork (gera resumo e roteiro) → Slack (compartilha com equipe)

Para cada fluxo, documente no CLAUDE.md do Projeto: quais conectores usar, em que ordem, e o que esperar de resultado.`,
        flowSteps: [
          { title: 'Trigger', description: 'Evento dispara o fluxo (email, prazo, agenda)' },
          { title: 'Coleta', description: 'Conectores buscam dados das ferramentas' },
          { title: 'Processamento', description: 'Cowork analisa e gera outputs' },
          { title: 'Distribuição', description: 'Resultado é salvo, enviado ou notificado' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // SEÇÃO 8: CLAUDE IN CHROME
  // ═══════════════════════════════════════════════════════════
  {
    id: 'chrome',
    title: 'Claude in Chrome',
    description: 'Navegação e automação direto no navegador',
    icon: 'chrome',
    cards: [
      {
        title: 'O que é o Claude in Chrome?',
        subtitle: 'Seu agente no navegador',
        level: 'intermediario',
        icon: 'chrome',
        analogy: {
          text: 'O **boy que vai ao fórum**. Extensão do Chrome onde o Claude **navega na internet**, acessa sites, lê páginas e busca informações — como parte da sua tarefa.',
        },
        content: `Uma extensão para Google Chrome (e Edge) que coloca o Claude trabalhando **dentro do seu navegador**. Em vez de alternar entre abas, o Claude aparece em um painel lateral e pode ver e interagir com os sites.

**O que ele pode fazer:**
- Navegar por sites, clicar em botões, preencher formulários
- Ler e resumir conteúdo de páginas
- Automatizar tarefas repetitivas
- Gravar fluxos de trabalho (faz uma vez, repete depois)
- Agendar tarefas automáticas (diário, semanal, mensal)
- Gerenciar múltiplas abas simultaneamente

**Modos de permissão:**
- "Perguntar antes de agir" (recomendado para começar)
- "Agir sem perguntar" (só quando estiver confortável)`,
        steps: [
          'Tenha um plano pago do Claude (Pro, Max, Team ou Enterprise)',
          'Na Chrome Web Store, pesquise "Claude" e instale a extensão oficial',
          'Faça login com suas credenciais',
          'Fixe a extensão: ícone de quebra-cabeça → alfinete ao lado de "Claude"',
          'Clique no ícone do Claude na barra para abrir o painel lateral',
          'No Claude Desktop: Configurações → ative o conector "Claude in Chrome"',
        ],
        links: [
          { label: 'Chrome Web Store', url: 'https://chromewebstore.google.com/' },
        ],
      },
      {
        title: 'Proteção de Dados e LGPD',
        subtitle: 'O que o Claude vê, o que não vê e como se proteger',
        level: 'intermediario',
        icon: 'shield',
        analogy: {
          text: 'O Claude in Chrome funciona como um **estagiário que só enxerga a folha que está na sua mesa**. Ele não abre gavetas, não lê documentos de outras mesas e só age quando você manda. Mas — como qualquer estagiário — você precisa supervisionar o que ele vê.',
        },
        content: `Todo advogado que usa IA deve entender a proteção de dados. Não usar por medo é tão arriscado quanto usar sem informação. O caminho inteligente é **configurar corretamente**.

**O que o Chrome Agent pode fazer:**

| Capacidade | Detalhe |
|-----------|---------|
| Ler aba ativa | Apenas o conteúdo da aba que está na sua tela |
| Interagir com páginas | Clicar, preencher, navegar — com sua permissão |
| Capturar screenshots | Da aba atual para interpretar texto e layout |

**O que ele NÃO faz:**

| Limitação | Detalhe |
|----------|---------|
| Abas em segundo plano | Não acessa abas fechadas ou minimizadas |
| Arquivos locais | Não lê documentos do seu computador |
| Sites financeiros | Bloqueado automaticamente pela Anthropic |
| Agir sem permissão | Cada domínio exige autorização individual |

**Seus dados treinam a IA?**

| Plano | Treinamento | Retenção | Ação necessária |
|-------|------------|----------|----------------|
| Free / Pro / Max | Pode ser ativado (opt-in desde Out/2025) | 30 dias (ou 5 anos se ativar) | Desativar em Configurações → Privacidade |
| **Team / Enterprise** | **Nunca** | **Mínima** | **Nenhuma — proteção automática** |
| Modo Incógnito | Nunca | Reduzida | Ativar para sessões sensíveis |
| Conectores (Drive, MCP) | Nunca | — | Dados de conectores são isolados |

**Conversas deletadas nunca são usadas para treinamento.**`,
        tips: [
          'Plano Team é a recomendação para escritórios — zero treinamento com dados + controle centralizado',
          'Modo Incógnito garante que aquela sessão específica nunca treina modelos',
          'Dados de conectores (Google Drive, MCPs) nunca entram no treinamento',
          'Conversas deletadas são excluídas de qualquer pipeline de dados',
        ],
      },
      {
        title: 'Boas Práticas LGPD para Advogados',
        subtitle: '6 regras de ouro + configuração essencial',
        level: 'intermediario',
        icon: 'scale',
        content: `A LGPD exige controle sobre dados pessoais que você processa. Estas 6 práticas garantem conformidade ao usar o Claude:

**1. Anonimize antes de consultar**
Nunca insira dados pessoais identificáveis diretamente. Troque nomes por letras, omita CPFs, use hipóteses. A IA não precisa saber quem é o cliente para ajudar com a tese.

**2. Use o modo "Pedir antes de agir"**
Mantenha ativada a confirmação antes de cada ação. Isso cria a camada de **supervisão humana** que a LGPD espera de quem usa ferramentas automatizadas.

**3. Restrinja permissões de site**
Conceda acesso apenas aos domínios necessários: tribunais, PJe, bases de jurisprudência. Menos permissões = menor superfície de risco.

**4. Evite sites de credenciais**
A Anthropic bloqueia categorias sensíveis automaticamente, mas se o site lida com senhas ou dados bancários, não use o agente ali.

**5. Modo Incógnito para sessões sensíveis**
Quando trabalhar com informações particularmente delicadas, use conversas incógnitas — nunca treinam modelos.

**6. Considere o plano Team**
Para escritórios com mais de 1 pessoa: zero treinamento, controle administrativo e termos comerciais dedicados.`,
        steps: [
          'Configurações → Privacidade → desative "Ajudar a melhorar o Claude" (planos individuais)',
          'Claude in Chrome → revise permissões de site e remova domínios desnecessários',
          'Ative o modo "Pedir antes de agir" para supervisão de cada ação',
          'Use Modo Incógnito para dados particularmente sensíveis de clientes',
          'Avalie migração para plano Team se lida regularmente com dados pessoais',
        ],
      },
      {
        title: 'Segurança e Riscos Reais',
        subtitle: 'Camadas de proteção e o que ficar atento',
        level: 'avancado',
        icon: 'alert-triangle',
        content: `A Anthropic implementa proteções técnicas verificáveis. Mas riscos existem e você deve conhecê-los.

**Camadas de proteção ativas:**

| Proteção | Como funciona |
|---------|--------------|
| Permissão por domínio | Cada site exige autorização separada e explícita |
| Confirmação de ações | Publicar, compartilhar ou transacionar exige OK do usuário |
| Bloqueio de categorias | Sites financeiros, adultos e piratas bloqueados por padrão |
| Conectores isolados | Google Drive e MCPs não entram no treinamento |
| Conversas deletadas | Exclusão real — nunca usadas para treinar |
| Filtros de dados | Bloqueia tokens de autenticação e API keys nos retornos |
| Red teaming contínuo | Pesquisadores testam vulnerabilidades constantemente |

**Riscos reais que merecem atenção:**

**Prompt Injection:**
Instruções maliciosas escondidas em páginas podem induzir ações não autorizadas. A Anthropic reduz significativamente a taxa de sucesso, mas o risco nunca será zero.

**O agente vê sua tela:**
Se há informações confidenciais visíveis na aba ativa, o Claude as processa. Tenha consciência do que está exposto antes de ativar o agente.

**Ações irreversíveis:**
O Claude pode errar a interpretação. Revise cuidadosamente antes de permitir ações que modifiquem dados ou realizem operações permanentes.

**A proteção mais eficaz:** supervisão humana ativa. Use confirmação, revise ações propostas e mantenha o agente restrito ao escopo necessário.

**Advogado que entende de proteção de dados não tem medo de IA. Tem estratégia.**`,
        tips: [
          'O modo "Pedir antes de agir" é sua principal defesa contra prompt injection',
          'Feche abas com informações sensíveis antes de ativar o agente em outra aba',
          'Nunca permita ações automáticas em sites que modificam dados sem reversão',
          'O plano Team adiciona camadas extras de proteção documental e contratual',
        ],
      },
      {
        title: 'Pesquisa Jurisprudencial',
        subtitle: 'Pesquise tribunais automaticamente',
        level: 'avancado',
        icon: 'search',
        analogy: {
          text: 'O boy que vai ao fórum agora vai ao **STJ, TJ-SP, JusBrasil e PJe** — tudo ao mesmo tempo. Pesquisa ementas, extrai decisões e organiza num relatório. Você não abre nenhum site.',
        },
        content: `O Claude in Chrome pode pesquisar jurisprudência **diretamente nos sites dos tribunais**:

**STJ:** Acesse o site, pesquise por tese, extraia ementas e organize num relatório.
**TJ-SP, TJ-RJ, TJ-MG:** Consulte jurisprudência local por tema.
**JusBrasil:** Busque precedentes e doutrina.
**PJe / PROJUDI:** Consulte andamentos processuais.

**Exemplo prático:** "Acesse o site do STJ, pesquise jurisprudência sobre 'dano moral em relação de consumo com valor até 20 salários mínimos' dos últimos 2 anos, extraia as 10 decisões mais relevantes e organize num relatório com: número do processo, relator, ementa, tese fixada e data."`,
        tips: [
          'Comece com sites de consulta pública antes de sites com login',
          'O Claude pode navegar em múltiplas abas simultaneamente',
          'Para sites que exigem login (PJe), certifique-se de estar logado antes',
          'Sempre supervisione as ações — a extensão está em evolução',
          'Nunca use para transações financeiras ou operações bancárias',
        ],
        prompt: `Acesse o site do TJ-SP (esaj.tjsp.jus.br) e pesquise jurisprudência sobre "[seu tema]". Extraia as 10 decisões mais recentes e organize numa tabela com: Número do Processo, Câmara, Relator, Data, Ementa (resumida) e Resultado (procedente/improcedente). Salve os resultados.`,
      },
      {
        title: 'Automação de Consultas',
        subtitle: 'Extraia dados de sites automaticamente',
        level: 'avancado',
        icon: 'bot',
        analogy: {
          text: 'Consultar andamentos de 15 processos todo dia? **Automatize.** O Claude navega, extrai dados e monta a planilha — igual um boy dedicado que faz a ronda nos tribunais todos os dias.',
        },
        content: `Automatize tarefas repetitivas de consulta:

**Consulta de Andamentos:**
"Acesse o PJe com minha sessão logada e verifique os últimos andamentos dos processos: [lista de números]. Para cada um, registre: última movimentação, data e prazo pendente."

**Extração de Dados de Diários:**
"Acesse o Diário de Justiça Eletrônico do TJ-MG, busque publicações em nome do escritório [nome] nos últimos 7 dias, e organize numa lista com: data, processo, conteúdo e prazo decorrente."

**Pesquisa de Legislação:**
"Acesse o Planalto.gov.br, busque todas as alterações da CLT nos últimos 12 meses, e organize cronologicamente com: lei, data, artigos alterados e resumo da mudança."`,
        tips: [
          'Grave fluxos repetitivos para reutilizar depois',
          'Agende consultas diárias de andamentos processuais',
          'Combine Chrome (pesquisa) + Cowork (relatório formatado)',
        ],
        flowSteps: [
          { title: 'Chrome Pesquisa', description: 'Navega nos sites e extrai dados' },
          { title: 'Dados Coletados', description: 'Informações brutas de múltiplas fontes' },
          { title: 'Cowork Processa', description: 'Organiza e formata em Word/Excel' },
          { title: 'Relatório Final', description: 'Documento pronto na sua pasta' },
        ],
      },
      {
        title: 'Download de Processos no PJe/e-SAJ',
        subtitle: 'Baixe e organize todos os documentos automaticamente',
        level: 'avancado',
        icon: 'download',
        analogy: {
          text: 'Baixar documentos do PJe é como ir ao cartório: você espera, clica várias vezes, e os arquivos vêm com nomes sem sentido. O Chrome faz essa **ronda no cartório digital** — baixa tudo e ainda organiza os nomes para você.',
        },
        content: `Um dos fluxos mais úteis para advogados: acessar o PJe ou e-SAJ, baixar TODOS os documentos de um processo e receber tudo organizado.

**O problema real:**
Abrir o PJe, clicar em cada documento, baixar um por um, renomear manualmente... Para um processo com 50+ documentos, isso leva horas.

**A solução com Chrome + Cowork:**

**Passo 1 — Chrome acessa e baixa:**
O Chrome navega no PJe (com sua sessão logada), acessa o processo e baixa todos os documentos disponíveis.

**Passo 2 — Cowork organiza:**
O Cowork lê cada PDF baixado, identifica o tipo (petição, sentença, ata, documento) e renomeia com o padrão do escritório.

**Resultado final na sua pasta:**
- /Processo_1234567-89.2024.8.26.0100/
  - /Peticoes/
    - 001_PETICAO-INICIAL_2024-01-15.pdf
    - 005_CONTESTACAO_2024-03-20.pdf
  - /Decisoes/
    - 008_DESPACHO-CITACAO_2024-02-10.pdf
    - 015_SENTENCA_2024-08-05.pdf
  - /Documentos/
    - 002_RG-AUTOR.pdf
    - 003_CONTRATO-LOCACAO.pdf
  - INDICE_PROCESSUAL.xlsx

**Sites compatíveis:**
- PJe (todos os tribunais)
- e-SAJ (SP)
- PROJUDI (vários estados)
- e-Proc (Justiça Federal 4ª Região)
- Qualquer portal de tribunal com acesso web`,
        prompt: `Acesse o sistema [PJe/e-SAJ/PROJUDI] com minha sessão logada e:

1. Navegue até o processo número [NÚMERO DO PROCESSO]
2. Acesse a seção de documentos/autos digitais
3. Baixe TODOS os documentos disponíveis no processo
4. Para cada documento baixado, identifique:
   - Tipo (petição, contestação, sentença, despacho, etc.)
   - Data do documento
   - Partes mencionadas
5. Renomeie seguindo o padrão: [SEQUÊNCIA]_[TIPO]_[DATA].pdf
6. Organize em subpastas: Peticoes, Decisoes, Documentos, Audiencias
7. Gere um INDICE_PROCESSUAL.xlsx com todos os documentos listados

Salve tudo na pasta "Processo_[NÚMERO]".`,
        tips: [
          'Certifique-se de estar logado no PJe/e-SAJ ANTES de iniciar o fluxo',
          'Para processos com sigilo, verifique se sua permissão permite acesso',
          'Combine este fluxo com a Análise de Contratos ou Auditoria Processual do Cowork',
          'Funciona melhor em processos digitais — processos físicos digitalizados podem ter OCR limitado',
        ],
        flowSteps: [
          { title: 'Login', description: 'Certifique-se de estar logado no sistema do tribunal' },
          { title: 'Chrome Navega', description: 'Acessa o processo e baixa todos os documentos' },
          { title: 'Cowork Organiza', description: 'Identifica, renomeia e classifica cada arquivo' },
          { title: 'Pasta Pronta', description: 'Documentos organizados com índice em Excel' },
        ],
      },
      {
        title: 'Monitoramento de Diários Oficiais',
        subtitle: 'Receba alertas de publicações sem abrir o DJe',
        level: 'avancado',
        icon: 'eye',
        analogy: {
          text: 'Ler o Diário de Justiça todo dia é como procurar agulha no palheiro. O Chrome funciona como um **clipping jurídico automático**: varre o DJe, encontra publicações do seu escritório e monta o resumo do dia.',
        },
        content: `O monitoramento diário de publicações é uma obrigação de todo escritório. O Chrome automatiza essa tarefa completamente.

**O que o Chrome faz:**
1. Acessa o Diário de Justiça Eletrônico (DJe) do tribunal
2. Busca publicações por nome do escritório, advogado ou número de processo
3. Extrai: data, processo, teor da publicação e prazo decorrente
4. Organiza tudo numa planilha ou envia para o Cowork

**Diários compatíveis:**
- DJe de todos os TJs estaduais
- Diários da Justiça Federal
- Diários da Justiça do Trabalho
- DOU (Diário Oficial da União)
- Diários municipais

**Exemplo prático — Monitoramento no TJ-SP:**
"Acesse o DJe do TJ-SP, busque publicações nos últimos 3 dias com o nome 'Silva & Associados Advogados', e extraia: data da publicação, número do processo, tipo (intimação/citação/sentença), resumo do conteúdo e prazo decorrente."

**Fluxo automatizado com Cowork:**
Após a extração, o Cowork pode:
- Classificar por urgência (prazo vencendo em 1-5 dias / 6-15 dias / 15+ dias)
- Atualizar a planilha de controle de prazos
- Gerar um e-mail resumo para a equipe
- Disparar alertas para os advogados responsáveis`,
        prompt: `Acesse o Diário de Justiça Eletrônico do [TRIBUNAL] e:

1. Busque todas as publicações dos últimos [N] dias contendo:
   - Nome do escritório: "[NOME DO ESCRITÓRIO]"
   - Nome dos advogados: "[LISTA DE ADVOGADOS]"
   - OU os números dos processos: [LISTA DE PROCESSOS]

2. Para cada publicação encontrada, extraia:
   - Data da publicação
   - Número do processo
   - Tipo: intimação, citação, sentença, despacho, edital
   - Resumo do conteúdo (2-3 linhas)
   - Prazo decorrente (se houver)
   - Data limite do prazo (calculando dias úteis)

3. Organize numa planilha Excel com:
   - Aba "PUBLICAÇÕES" — todas as encontradas
   - Aba "PRAZOS URGENTES" — apenas as com prazo < 15 dias úteis
   - Formatação: vermelho (< 5 dias), amarelo (5-10 dias), verde (> 10 dias)

4. Gere um resumo em texto (formato de e-mail) listando as publicações do dia por urgência.`,
        tips: [
          'Configure esse fluxo para rodar toda manhã como rotina do escritório',
          'Inclua todos os nomes pelos quais o escritório pode ser encontrado (razão social, nome fantasia, advogados)',
          'Combine com o card "Controle de Prazos" do Cowork para atualizar a planilha automaticamente',
          'Para escritórios maiores, separe os resultados por equipe/advogado responsável',
        ],
      },
      {
        title: 'Consulta de Certidões e Cadastros',
        subtitle: 'Receita Federal, CNPJ, certidões negativas em lote',
        level: 'intermediario',
        icon: 'shield',
        analogy: {
          text: 'Precisar de 10 certidões negativas para uma due diligence? O Chrome vai em **cada site oficial**, consulta o CNPJ/CPF e baixa as certidões — enquanto você toma café.',
        },
        content: `Consultas repetitivas em sites governamentais são perfeitas para automação com Chrome.

**Consultas que o Chrome automatiza:**

**Receita Federal (CNPJ/CPF):**
- Consulta de situação cadastral
- Download de comprovante de inscrição
- Consulta de QSA (quadro societário)
- Certidão de regularidade fiscal

**Certidões Negativas em Lote:**
- CND Federal (Receita + PGFN)
- CND Estadual (SEFAZ)
- CND Municipal (Prefeitura)
- CND Trabalhista (TST)
- Certidão do FGTS (CEF)
- Certidão de distribuição cível e criminal

**Consulta de Processos em Lote:**
- Verificar existência de processos contra um CPF/CNPJ em múltiplos tribunais simultaneamente

**Exemplo prático — Due Diligence de empresa:**
"Consulte o CNPJ 12.345.678/0001-90 nos seguintes sites: Receita Federal (situação cadastral), PGFN (certidão negativa), TST (certidão trabalhista), TJ-SP (distribuição cível), TJ-SP (distribuição criminal). Baixe todas as certidões e salve com o nome do órgão emissor."

**Consultas em lote:**
Forneça uma lista de CNPJs/CPFs e o Chrome consulta todos sequencialmente, salvando os resultados organizados.`,
        prompt: `Acesse os seguintes sites e faça consultas para o [CPF/CNPJ]:

1. Receita Federal (solucoes.receita.fazenda.gov.br):
   - Consulta de situação cadastral
   - Baixe o comprovante de inscrição em PDF

2. PGFN (servicos.receita.fazenda.gov.br):
   - Emita Certidão Negativa de Débitos Federais
   - Salve em PDF

3. TST (cndt-certidao.tst.jus.br):
   - Emita Certidão Negativa de Débitos Trabalhistas
   - Salve em PDF

4. TJ-[ESTADO] (portal do tribunal):
   - Consulta de distribuição cível
   - Consulta de distribuição criminal
   - Salve os resultados

5. Organize tudo numa pasta "[NOME/CNPJ]_CERTIDOES_[DATA]" com:
   - Cada certidão nomeada: [ORGAO]_[TIPO]_[DATA].pdf
   - Um resumo em texto: situação de cada certidão (positiva/negativa)`,
        tips: [
          'Alguns sites exigem captcha — o Chrome pode pausar para você resolver manualmente',
          'Certidões têm validade: anote a data de emissão e de vencimento',
          'Para due diligence completa, combine com a busca de processos nos tribunais',
          'Salve o fluxo para reutilizar com outros CPFs/CNPJs',
        ],
      },
      {
        title: 'Fluxos Avançados Chrome + Cowork',
        subtitle: 'O poder da combinação',
        level: 'expert',
        icon: 'sparkles',
        analogy: {
          text: 'Chrome **coleta informações** (pesquisa, navega, extrai). Cowork **processa e entrega** (relatórios, planilhas, documentos). Juntos: pesquisa jurisprudencial completa sem abrir um único site manualmente.',
        },
        content: `Combine Chrome e Cowork para fluxos end-to-end:

**Fluxo "Pesquisa Jurisprudencial Completa":**
1. Chrome pesquisa em STJ, TJ-SP, TJ-RJ sobre o tema
2. Extrai ementas e decisões relevantes
3. Cowork organiza num relatório analítico em Word
4. Inclui: tabela resumo, análise de tendências, teses dominantes

**Fluxo "Monitoramento de Processos":**
1. Chrome acessa PJe/PROJUDI diariamente
2. Extrai novos andamentos de todos os processos ativos
3. Cowork atualiza planilha de controle
4. Identifica prazos e gera alertas

**Fluxo "Due Diligence Online":**
1. Chrome pesquisa CNPJs na Receita Federal
2. Consulta certidões negativas online
3. Busca processos nos tribunais
4. Cowork consolida tudo num relatório de riscos

**Dica Expert:** Crie um CLAUDE.md com instruções de cada fluxo. Depois, basta dizer: "Execute o fluxo de monitoramento" e o Claude sabe exatamente o que fazer.`,
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // SEÇÃO 9: OTIMIZAÇÃO DE USO
  // ═══════════════════════════════════════════════════════════
  {
    id: 'otimizacao',
    title: 'Otimização de Uso',
    description: 'Renda até 3x mais com o mesmo plano',
    icon: 'trending-up',
    cards: [
      {
        title: 'Entendendo Tokens',
        subtitle: 'Por que seu limite acaba rápido',
        level: 'intermediario',
        icon: 'hash',
        analogy: {
          tag: 'Analogia da Torneira',
          text: 'O Claude é como uma **torneira de água potável** — a água (tokens) é limitada e cara. Cada vez que você abre, ela flui. Se abrir uma conversa longa sem fechar, a água corre sem parar. Se jogar um balde de lama (PDF pesado), precisa de mais água para limpar.',
        },
        content: `O Claude processa **tokens** — pequenos pedaços de texto. Uma palavra equivale a 1-2 tokens. O custo varia pela quantidade de tokens, não por mensagem.

**O detalhe que muda tudo:** a cada nova mensagem, o Claude **reprocessa todo o histórico** da conversa. A 10ª mensagem custa muito mais tokens que a 1ª, mesmo sendo do mesmo tamanho.

**Os 5 vilões do consumo:**

| Vilão | Impacto |
|-------|---------|
| PDFs e arquivos grandes | ~15.000+ tokens por PDF de 10 páginas |
| Conversas longas | ~8.000+ tokens na 15ª mensagem |
| Ferramentas ativas (web, conectores) | +tokens a cada mensagem |
| Raciocínio estendido | Multiplica o processamento |
| Iterações de ajuste | Reprocessa todo o histórico a cada correção |`,
        flowSteps: [
          { title: 'Mensagem 1', description: 'Processa apenas sua mensagem (~200 tokens)' },
          { title: 'Mensagem 5', description: 'Reprocessa mensagens 1-4 + a nova (~2.000 tokens)' },
          { title: 'Mensagem 15', description: 'Reprocessa TUDO (~8.000+ tokens por mensagem)' },
          { title: 'Mensagem 30+', description: 'Limite atingido — conversa travou!' },
        ],
      },
      {
        title: 'Pré-processe Documentos',
        subtitle: 'Economia de 60-80% dos tokens',
        level: 'intermediario',
        icon: 'file-text',
        analogy: {
          text: 'Antes de levar um processo enorme ao advogado sênior, o estagiário faz um **resumo dos pontos principais**. Não entrega 50 páginas cruas — entrega 3 páginas com o essencial. Faça o mesmo com o Claude: pré-processe com ferramentas gratuitas.',
        },
        content: `**O problema:** Subir um PDF de 30 páginas faz o Claude processar formatação, metadados, imagens — puro desperdício.

**A solução:** Use ferramentas gratuitas para extrair só o que importa ANTES de usar o Claude:

| Ferramenta | Gratuita? | O que faz |
|------------|-----------|-----------|
| **NotebookLM** (Google) | Sim | Resumir PDFs, extrair pontos-chave, criar podcast |
| **Google AI Studio** | Sim | Testar prompts, resumir textos longos |
| **ilovepdf.com** | Sim | Converter PDF → TXT (remove formatação pesada) |
| **Google Docs** | Sim | OCR para PDFs escaneados + converter formatos |

**Exemplo prático:** Em vez de subir um processo trabalhista de 50 páginas, extraia apenas: fatos relevantes, pedidos, valores, argumentos e provas-chave. Leve esse resumo de 2-3 páginas para análise.`,
        flowSteps: [
          { title: 'PDF (50 pág.)', description: 'Documento original pesado' },
          { title: 'NotebookLM / AI Studio', description: 'Extraia resumo + pontos-chave (GRÁTIS)' },
          { title: 'TXT (3 pág.)', description: 'Texto limpo, só o essencial' },
          { title: 'Claude', description: 'Analisa com 80% menos tokens!' },
        ],
        links: [
          { label: 'NotebookLM', url: 'https://notebooklm.google.com' },
          { label: 'Google AI Studio', url: 'https://aistudio.google.com' },
          { label: 'ilovepdf.com', url: 'https://www.ilovepdf.com/pt' },
          { label: 'Google Docs', url: 'https://docs.google.com' },
        ],
        tips: [
          'NotebookLM é gratuito e excelente para resumir documentos longos',
          'Converta PDFs escaneados com OCR antes de enviar',
          'Para contratos longos: extraia apenas as cláusulas relevantes',
          'PDF → TXT economiza até 50% dos tokens automaticamente',
        ],
      },
      {
        title: 'Nova Conversa por Tarefa',
        subtitle: 'A dica mais simples e mais ignorada',
        level: 'iniciante',
        icon: 'copy',
        analogy: {
          text: 'Cada pasta de processo deve ter **uma capa limpa**. Se você empilha 10 processos numa pasta só, ninguém acha nada e o trabalho fica lento. O mesmo vale para o Claude: **uma conversa por tarefa** = contexto limpo = resultado melhor.',
        },
        content: `**O problema:** Usar uma única conversa para tudo infla o consumo exponencialmente. Uma conversa com 40 mensagens pode consumir **10x mais tokens por mensagem**.

**A solução:**
- Use **Projetos** para guardar contexto permanente
- Inicie uma **nova conversa** para cada tarefa específica
- O Projeto mantém a "memória" — a conversa mantém o contexto limpo

**Exemplo prático:** Não faça petição, parecer e revisão de contrato na mesma conversa. Abra uma conversa para cada, dentro do mesmo Projeto. Resultado: cada conversa começa "leve" e consome menos.`,
        relationship: {
          title: 'Regra de Ouro',
          items: [
            { label: 'Projeto', value: 'Memória permanente', sub: 'Instruções, estilo, dados fixos' },
            { label: 'Conversa', value: 'Sessão descartável', sub: 'Uma tarefa, contexto limpo', highlight: true },
          ],
          symbols: ['≠'],
        },
      },
      {
        title: 'Desative Ferramentas Ociosas',
        subtitle: 'Elimine consumo silencioso',
        level: 'intermediario',
        icon: 'eye',
        analogy: {
          text: 'Imagine deixar **todas as luzes do escritório acesas** — até as salas vazias. Conectores e busca web são como lâmpadas: ficam consumindo mesmo quando ninguém usa. **Apague o que não precisa.**',
        },
        content: `Ferramentas como busca na web e conectores (Drive, Gmail) consomem tokens **mesmo sem uso ativo** — ficam "ouvindo" no contexto.

**Como resolver:**
1. Acesse Configurações → Pesquisa e ferramentas
2. Desative busca, pesquisa avançada e conectores quando não precisar
3. Reative **apenas quando a tarefa exigir**

**Dica:** Se precisa fazer uma pesquisa rápida na web, faça numa conversa separada e leve o resultado (texto copiado) para sua conversa principal.

**Economia estimada:** Desativar conectores e busca pode economizar **15-25% dos tokens** por conversa.`,
      },
      {
        title: 'Economize com IAs Gratuitas',
        subtitle: 'Use outras ferramentas para gastar menos tokens do Claude',
        level: 'intermediario',
        icon: 'sparkles',
        analogy: {
          tag: 'O Segredo dos Power Users',
          text: 'Advogados inteligentes não pedem para o sênior fazer **TODO** o trabalho. Usam o estagiário (ferramentas gratuitas) para preparar, resumir e organizar — e só levam o material **pronto** para o sênior (Claude). Resultado: mesmo plano, **3x mais produtividade**.',
        },
        content: `O maior segredo para economizar tokens do Claude (e do Lovable, e de qualquer IA paga): **use ferramentas gratuitas para o trabalho pesado de preparação**.

Cada ferramenta abaixo é **100% gratuita** e pode fazer o trabalho pesado ANTES de você usar o Claude:`,
        elementGrid: [
          { icon: 'brain', name: 'NotebookLM', tech: 'Google (Grátis)', description: 'Suba PDFs, documentos e áudios. O NotebookLM **resume, extrai pontos-chave e até cria podcasts**. Perfeito para processar processos longos antes de levar ao Claude.', whenToUse: 'Resumir processos, contratos e documentos longos', highlight: true },
          { icon: 'zap', name: 'Google AI Studio', tech: 'Google (Grátis)', description: 'Teste prompts, resuma textos e processe documentos com o Gemini — **sem gastar nada**. Use para descobrir se seu prompt funciona antes de usar no Claude.', whenToUse: 'Testar prompts, resumir textos, pré-análise' },
          { icon: 'search', name: 'Perplexity', tech: 'Grátis (com limite)', description: 'Pesquisa jurisprudencial e doutrinária com fontes citadas. Use para **pesquisar antes** e leve os resultados prontos ao Claude para análise.', whenToUse: 'Pesquisa de jurisprudência, legislação, doutrina' },
          { icon: 'file-text', name: 'ilovepdf.com', tech: 'Grátis', description: 'Converte PDF → TXT, comprime, junta e divide PDFs. **Remove formatação pesada** que desperdiça tokens.', whenToUse: 'Converter PDFs antes de enviar ao Claude' },
          { icon: 'bot', name: 'DeepSeek', tech: 'Grátis', description: 'IA gratuita com qualidade similar ao Claude para tarefas simples. Use para **rascunhos iniciais** e leve ao Claude só para refinar.', whenToUse: 'Rascunhos, brainstorming, tarefas simples' },
          { icon: 'globe', name: 'Google Docs', tech: 'Google (Grátis)', description: 'OCR automático para PDFs escaneados. Abra o PDF no Drive → "Abrir com Google Docs" → texto extraído. **Economiza 50% dos tokens.**', whenToUse: 'OCR de PDFs escaneados, conversão de formatos' },
          { icon: 'message-square', name: 'Microsoft Copilot', tech: 'Grátis', description: 'IA da Microsoft com acesso à web em tempo real. Excelente para **pesquisa com fontes atualizadas**, verificação de legislação vigente e busca de notícias jurídicas.', whenToUse: 'Pesquisa atualizada, verificação de legislação, notícias' },
          { icon: 'presentation', name: 'Gamma.app', tech: 'Grátis (com limite)', description: 'Cria **apresentações profissionais** a partir de texto. Ideal para sustentações orais, reuniões com cliente e apresentações de caso. Design automático.', whenToUse: 'Slides para audiências, reuniões e sustentações orais' },
          { icon: 'sparkles', name: 'ChatGPT Free', tech: 'Grátis (com limite)', description: 'Versão gratuita do ChatGPT com GPT-4o mini. Útil para **tarefas complementares** e rascunhos quando os tokens do Claude acabam.', whenToUse: 'Rascunhos rápidos, brainstorming quando tokens acabam' },
        ],
        flowSteps: [
          { title: 'Trabalho Pesado (Grátis)', description: 'NotebookLM resume, Perplexity pesquisa, ilovepdf converte' },
          { title: 'Material Pronto', description: 'Texto limpo, resumo, pesquisa organizada' },
          { title: 'Claude (Pago)', description: 'Só analisa, refina e gera o produto final' },
          { title: 'Economia', description: '60-80% menos tokens por tarefa!' },
        ],
        links: [
          { label: 'NotebookLM', url: 'https://notebooklm.google.com' },
          { label: 'Google AI Studio', url: 'https://aistudio.google.com' },
          { label: 'Perplexity', url: 'https://www.perplexity.ai' },
          { label: 'ilovepdf.com', url: 'https://www.ilovepdf.com/pt' },
          { label: 'DeepSeek', url: 'https://chat.deepseek.com' },
          { label: 'Google Docs', url: 'https://docs.google.com' },
          { label: 'Microsoft Copilot', url: 'https://copilot.microsoft.com' },
          { label: 'Gamma.app', url: 'https://gamma.app' },
          { label: 'ChatGPT Free', url: 'https://chatgpt.com' },
        ],
        tips: [
          'NotebookLM + Claude é a combinação mais poderosa para advogados',
          'Pesquise jurisprudência no Perplexity ANTES de pedir ao Claude analisar',
          'Google AI Studio é ótimo para testar se o prompt vai funcionar',
          'DeepSeek serve para rascunhos — refine no Claude depois',
          'Microsoft Copilot pesquisa com fontes em tempo real — ótimo para verificar legislação',
          'Gamma.app cria apresentações profissionais em minutos — ideal para sustentações',
          'Essa mesma estratégia funciona para Lovable e qualquer IA paga',
        ],
      },
      {
        title: 'Prompts Completos',
        subtitle: 'Uma instrução vale mais que dez ajustes',
        level: 'intermediario',
        icon: 'target',
        analogy: {
          text: 'Quando você despacha com o juiz, vai **preparado**: sabe o processo, o pedido, os fundamentos e os limites. Não improvisa. Faça o mesmo com o Claude: um prompt bem preparado evita 5 rodadas de "não era isso que eu queria".',
        },
        content: `Invista 2 minutos a mais no prompt inicial e economize 5 mensagens de ajuste.

**Exemplo ruim:** "Faça uma petição trabalhista."
**Exemplo bom:** Veja o prompt abaixo.`,
        elementGrid: [
          { icon: 'users', name: 'C — Contexto', description: 'Quem é você e qual o cenário. "Sou advogado trabalhista, represento bancário demitido..."', highlight: true },
          { icon: 'target', name: 'T — Tarefa', description: 'O que quer, de forma clara e específica. "Elabore petição inicial requerendo horas extras..."' },
          { icon: 'file-text', name: 'F — Formato', description: 'Como a saída deve ser estruturada. "Estrutura: Fatos → Direito → Pedidos. 8-12 páginas. Word."' },
          { icon: 'shield', name: 'R — Restrições', description: 'O que NÃO fazer, limites, observações. "Não invente jurisprudência. Base: CLT + TST."' },
        ],
        prompt: `## Contexto
Sou advogado trabalhista com 8 anos de experiência, OAB/MG.
Represento empregado bancário (12 anos de casa) demitido sem justa causa.

## Tarefa
Elabore petição inicial de reclamação trabalhista requerendo:
- Horas extras (7ª e 8ª diárias, art. 224 CLT)
- Equiparação salarial (paradigma: João da Silva, mesmo cargo)
- Indenização por danos morais (assédio moral do gerente)
- Multas dos arts. 467 e 477 CLT

## Formato
- Estrutura: Fatos → Direito → Pedidos → Valor da causa
- Extensão: 8-12 páginas
- Tom: técnico e formal
- Incluir: jurisprudência do TST para cada pedido

## Restrições
- Base legal: CLT + Reforma Trabalhista + Súmulas TST
- Não invente jurisprudência — cite apenas precedentes reais
- Considere prescrição quinquenal`,
        tips: [
          'Salve este modelo nas Instruções do Projeto para reutilizar',
          'Uma mensagem bem estruturada substitui três rodadas de ajuste',
          'Inclua exemplos do resultado esperado quando possível',
        ],
      },
      {
        title: 'Monitore seu Uso',
        subtitle: 'O limite reseta a cada 5 horas',
        level: 'iniciante',
        icon: 'bar-chart',
        analogy: {
          text: 'Planeje seu dia como um advogado planeja audiências: **tarefas pesadas de manhã** (quando o limite está cheio), **consultas rápidas à tarde** (quando está quase no limite). O reset de 5h é seu "próximo expediente".',
        },
        content: `O Claude tem um painel de uso que mostra quanto do limite foi consumido e quando reseta.`,
        relationship: {
          title: 'Estratégia por Nível de Uso',
          items: [
            { label: '~25% uso', value: 'Tarefas pesadas', sub: 'Petições, análises, pareceres', highlight: true },
            { label: '~50% uso', value: 'Tarefas médias', sub: 'Revisões, pesquisas, relatórios' },
            { label: '~85% uso', value: 'Tarefas leves', sub: 'Dúvidas rápidas ou aguarde o reset' },
          ],
          symbols: ['→', '→'],
        },
        checklist: [
          {
            title: 'Checklist Antes de Abrir o Claude',
            items: [
              'Documento grande? Pré-processe com NotebookLM/AI Studio primeiro',
              'É um PDF? Converta em .txt (ilovepdf.com ou Google Docs)',
              'Mesma conversa de antes? Abra uma NOVA conversa',
              'Busca na web ativa? Desative se não precisa',
              'Conectores ligados? Desative os que não vai usar',
              'Prompt completo? Use o padrão C-T-F-R',
            ],
          },
        ],
      },
      {
        title: 'O Que NÃO Fazer',
        subtitle: '5 erros que desperdiçam tokens',
        level: 'iniciante',
        icon: 'alert-triangle',
        analogy: {
          text: 'Assim como um advogado experiente sabe **o que NÃO colocar na petição**, você precisa saber o que NÃO fazer com o Claude. Esses 5 erros são os maiores vilões do desperdício.',
        },
        content: `Evite estes erros comuns que multiplicam o consumo de tokens:`,
        checklist: [
          {
            title: 'Os 5 Erros Fatais',
            items: [
              'NÃO suba PDFs pesados direto — pré-processe com NotebookLM ou ilovepdf primeiro',
              'NÃO use uma conversa única para tudo — abra uma nova para cada tarefa',
              'NÃO deixe conectores e busca web ligados quando não precisa — consomem tokens em silêncio',
              'NÃO faça prompts vagos como "faça uma petição" — use o padrão C-T-F-R',
              'NÃO ative Raciocínio Estendido para tarefas simples — reserve para análises complexas',
            ],
          },
        ],
        tips: [
          'Cada erro acima pode desperdiçar 20-50% dos seus tokens',
          'A combinação de todos os erros pode reduzir seu plano Pro a 1/5 da capacidade',
          'Siga o Checklist antes de abrir o Claude para evitar todos eles',
        ],
      },
      {
        title: 'Técnicas Expert de Otimização',
        subtitle: 'Maximize cada token investido',
        level: 'expert',
        icon: 'cpu',
        analogy: {
          text: 'Advogado sênior não faz tudo sozinho. Ele **delega, organiza e supervisiona**. Use o Claude da mesma forma: prepare com ferramentas gratuitas, organize em etapas, e use o Claude só para o trabalho final de alto valor.',
        },
        content: `Técnicas avançadas para quem quer extrair o máximo:

**1. Chunking Estratégico:**
Para documentos muito grandes, divida em pedaços temáticos. Em vez de enviar o processo inteiro, envie: "Apenas os fatos" → "Apenas as provas" → "Apenas os pedidos". Analise em conversas separadas e consolide.

**2. Templates no Projeto:**
Crie Projetos com templates pré-configurados. Nas instruções: "Quando eu disser 'petição', use o template X. Quando disser 'parecer', use o template Y." Economiza explicação a cada nova conversa.

**3. Raciocínio Estendido Seletivo:**
Só ative para análises que realmente precisam de profundidade. Para redação com estrutura definida, o modo normal é suficiente e consome menos.

**4. Pipeline de Processamento:**
Para grandes volumes, processe em etapas:
Conversa 1: Extração de dados → Salve o resultado
Conversa 2: Análise dos dados extraídos → Salve
Conversa 3: Geração do relatório final
Cada conversa começa limpa, sem carregar o histórico das anteriores.

**5. Instruções Globais Otimizadas:**
Mantenha seu Personalizar conciso. Informações demais no perfil global são carregadas em CADA conversa. Mova detalhes específicos para Skills ou instruções de Projeto.`,
      },
      {
        title: 'Anti-Alucinação: Blindagem do Advogado',
        subtitle: 'Técnicas para eliminar jurisprudência fabricada e informações inventadas',
        level: 'intermediario',
        icon: 'shield',
        analogy: {
          tag: 'Controle de Qualidade',
          text: 'Toda fábrica tem controle de qualidade na saída da linha de produção. Na advocacia com IA, o controle de qualidade é a **verificação anti-alucinação** — um conjunto de técnicas que impede que jurisprudência fabricada, artigos inexistentes ou dados inventados cheguem à sua petição.',
        },
        content: `O maior risco no uso de IA para advocacia é a fabricação de informações — especialmente jurisprudência que parece real mas não existe. Advogados já foram sancionados por apresentar citações fabricadas por IA. Estas técnicas eliminam esse risco.

**Nível 1 — Instrução Preventiva (coloque no Skill/Project):**

\`\`\`
REGRA ABSOLUTA SOBRE JURISPRUDÊNCIA:
- Cite apenas decisões com alta confiança
- Para cada citação, indique: [ALTA], [MÉDIA] ou [VERIFICAR]
- Nunca invente números de processo, relatores ou datas
- Se não encontrar precedente: "Não localizei precedente específico. Recomendo busca nos sistemas oficiais."
- Prefira Súmulas e teses repetitivas a decisões monocráticas
\`\`\`

**Nível 2 — Verificação Pós-Geração:**
Após gerar a peça, peça: *"Liste todas as jurisprudências e referências legais citadas. Para cada uma, indique se tem certeza de que existe ou se é inferência."*

**Nível 3 — Conferência nos Sistemas Oficiais:**
SEMPRE verifique nos sites do STJ, TST, TRFs antes de protocolar. A verificação final é responsabilidade intransferível do advogado.

**Nível 4 — Auditoria de Legislação:**
Peça ao Claude: *"Verifique se todos os artigos de lei citados estão vigentes e com a redação atual. Algum foi revogado ou alterado?"*

**O que o Claude pode fabricar (e você deve conferir):**
→ Números de processo e REsp/RE
→ Nomes de relatores e datas de julgamento
→ Artigos de lei com redação incorreta
→ Súmulas que "parecem" existir mas não existem
→ Dados estatísticos e percentuais`,
        prompt: `[INSTRUÇÃO ANTI-ALUCINAÇÃO — ADICIONE AO SEU SKILL OU PROJECT]

REGRA ABSOLUTA SOBRE JURISPRUDÊNCIA:
- Cite apenas decisões que tenha alta confiança de que existem
- Para cada jurisprudência, classifique:
  [ALTA] = Súmulas, teses repetitivas, decisões notórias
  [MÉDIA] = Padrão jurisprudencial provável
  [VERIFICAR] = Não tenho certeza — recomendo busca nos sistemas oficiais
- Nunca invente números de processos, relatores ou datas de julgamento
- Se não encontrar jurisprudência específica, diga: "Não localizei precedente específico. Recomendo busca no [tribunal]."
- Prefira citar Súmulas e teses firmadas em repetitivos/IRDR a decisões monocráticas

[APÓS GERAR QUALQUER PEÇA, EXECUTE:]
"Liste todas as jurisprudências e referências legais citadas. Para cada uma, indique seu nível de confiança e se recomenda verificação."`,
        tips: [
          'Coloque a instrução anti-alucinação em TODOS os seus Projects e Skills',
          'A regra "prefira Súmulas" reduz drasticamente o risco de fabricação',
          'Peça confiança explícita: "[ALTA], [MÉDIA] ou [VERIFICAR]" para cada citação',
          'Nunca pule a conferência nos sites oficiais — é sua responsabilidade profissional',
          'O Claude é excelente para rascunhos e argumentação, mas a verificação é SUA',
        ],
        checklist: [
          {
            title: 'Antes de Protocolar — Verificação Obrigatória',
            items: [
              'Toda jurisprudência conferida nos sites oficiais (STJ/TST/TRFs)',
              'Artigos de lei verificados quanto à vigência e redação atual',
              'Números de processo e REsp/RE confirmados',
              'Nomes de relatores e datas de julgamento conferidos',
              'Dados estatísticos verificados em fontes oficiais',
              'Súmulas e teses repetitivas confirmadas',
              'Legislação revogada ou alterada identificada e corrigida',
            ],
          },
        ],
        relationship: {
          title: 'Hierarquia de Confiança — O que Confiar vs Verificar',
          items: [
            { label: 'Estrutura e Argumentação', value: 'Alta Confiança', sub: 'O Claude é excelente em construir argumentos lógicos', highlight: true },
            { label: 'Legislação Conhecida', value: 'Média-Alta', sub: 'Leis mais conhecidas geralmente estão corretas' },
            { label: 'Jurisprudência Específica', value: 'Baixa — SEMPRE VERIFICAR', sub: 'Números, relatores e datas podem ser fabricados', highlight: true },
            { label: 'Dados Estatísticos', value: 'Baixa', sub: 'Percentuais e valores devem ser conferidos em fontes oficiais' },
          ],
        },
      },
      {
        title: 'Ética e IA na Advocacia: OAB e CNJ',
        subtitle: 'Regulamentação brasileira que todo advogado precisa conhecer',
        level: 'iniciante',
        icon: 'scale',
        analogy: {
          text: 'Usar IA sem conhecer as regras é como dirigir sem conhecer a legislação de trânsito — pode funcionar por um tempo, mas a **infração é questão de tempo**. A OAB e o CNJ já estabeleceram as regras do jogo. Conhecê-las é obrigação profissional.',
        },
        content: `O uso de IA na advocacia brasileira já possui regulamentação específica. Desconhecê-la é risco ético e disciplinar.

**Recomendações da OAB para uso de IA:**

| Princípio | Obrigação | Consequência |
|-----------|-----------|-------------|
| **Legislação Aplicável** | Cumprir LGPD e normas vigentes | Sanções administrativas e cíveis |
| **Confidencialidade** | Manter sigilo profissional ao usar IA | Processo disciplinar por violação |
| **Prática Ética** | Advogado é 100% responsável pelo conteúdo gerado por IA | Responsabilidade pessoal integral |
| **Transparência** | Informar clientes sobre o uso de IA | Dever de comunicação |
| **Supervisão** | Supervisionar todo o processo e garantir precisão | Responsabilidade por erros da IA |

**Resolução 615/2025 do CNJ:**

Estabelece diretrizes para o uso de IA no Poder Judiciário:
- Transparência nos atos praticados com auxílio de IA
- Responsabilidade humana sobre decisões judiciais
- Proteção de dados pessoais
- Não discriminação algorítmica
- Supervisão humana obrigatória

**Decisão de Nova York (Fevereiro 2026) — Alerta importante:**

Um tribunal de Nova York decidiu que comunicações com Claude AI sobre estratégia jurídica **NÃO são protegidas pelo sigilo advogado-cliente** (na versão consumidor). Motivo: a política de privacidade permite coleta e compartilhamento de dados com terceiros.

**Implicações para advogados brasileiros:**
- Versões gratuitas/Pro podem não garantir sigilo pleno
- Planos Enterprise oferecem provisões de confidencialidade
- NUNCA insira dados sensíveis de clientes sem anonimização
- Documente o uso de IA no caso para transparência processual

**O que você DEVE fazer:**

| Ação | Prioridade |
|------|-----------|
| Ler as recomendações da OAB | Imediata |
| Anonimizar dados antes de usar IA | Sempre |
| Informar clientes sobre uso de IA | Sempre |
| Revisar 100% do conteúdo gerado | Sempre |
| Verificar jurisprudência citada pela IA | Sempre |
| Considerar plano Team/Enterprise para casos sensíveis | Recomendado |
| Documentar uso de IA nos autos (quando exigido) | Conforme tribunal |`,
        tips: [
          'A responsabilidade por qualquer erro da IA é EXCLUSIVAMENTE do advogado — sempre revise',
          'Verifique TODA jurisprudência citada pelo Claude — alucinações existem e podem custar caro',
          'Para casos sensíveis: use plano Enterprise ou anonimize completamente os dados',
          'Mantenha-se atualizado: OAB e CNJ estão em constante evolução regulatória sobre IA',
        ],
        links: [
          { label: 'Recomendações OAB sobre IA', url: 'https://www.oab.org.br/noticia/62704/oab-aprova-recomendacoes-para-uso-de-ia-na-pratica-juridica' },
        ],
      },
      {
        title: 'Sigilo Profissional: Qual Plano Escolher?',
        subtitle: 'A relação entre plano contratado e proteção de dados',
        level: 'intermediario',
        icon: 'file-key',
        analogy: {
          text: 'Usar o plano gratuito para casos confidenciais é como discutir estratégia do cliente no **saguão do fórum** — qualquer um pode ouvir. O plano Enterprise é a **sala de reunião fechada com isolamento acústico**. Escolha o ambiente certo para a sensibilidade da informação.',
        },
        content: `A escolha do plano impacta diretamente o nível de proteção dos dados do seu cliente. Entenda as diferenças:

**Comparativo de segurança por plano:**

| Proteção | **Gratuito** | **Pro** | **Team** | **Enterprise** |
|----------|------------|--------|---------|---------------|
| **Dados usados para treino?** | Exceções possíveis | Excluídos por padrão | Excluídos | Garantia contratual |
| **Sigilo profissional** | Não garantido | Parcial | Adequado | Completo |
| **Controle de dados** | Limitado | Moderado | Bom | Total |
| **Retenção de dados** | Padrão Anthropic | Padrão Anthropic | Configurável | Customizável |
| **SOC 2 / HIPAA** | Não | Não | Parcial | Completo |
| **SSO / Admin central** | Não | Não | Sim | Sim |
| **Adequado para dados sensíveis?** | Não | Com ressalvas | Sim | Sim |

**Recomendação por tipo de uso:**

| Situação | Plano Mínimo | Justificativa |
|----------|-------------|---------------|
| Pesquisa jurídica genérica | Gratuito/Pro | Sem dados de clientes envolvidos |
| Redação com dados fictícios | Pro | Dados anonimizados, sem risco |
| Análise de contratos reais | Team | Dados confidenciais de terceiros |
| Estratégia de caso com nomes reais | Enterprise | Sigilo advogado-cliente em jogo |
| Due diligence corporativa | Enterprise | Dados empresariais sensíveis |
| Escritório com 5+ advogados | Team | Controle centralizado + colaboração |

**Estratégia prática (custo-benefício):**

A melhor abordagem para a maioria dos escritórios:
1. **Pro** para uso pessoal com dados anonimizados
2. **Team** para equipe com processos padronizados
3. **Anonimização rigorosa** como camada extra em qualquer plano

**Anonimização inteligente:**
Substitua: nomes reais → "Parte Autora / Parte Ré", CPF → "XXX.XXX.XXX-XX", endereços → "[endereço omitido]", valores → mantenha (são necessários para análise).`,
        tips: [
          'Na dúvida, anonimize SEMPRE — é a camada de proteção mais simples e eficaz',
          'Para escritórios: o plano Team ($25/usuário) é o melhor custo-benefício com segurança',
          'Enterprise é obrigatório para due diligence, M&A e casos de alta confidencialidade',
          'Mantenha uma política interna de uso de IA no escritório — documente regras',
        ],
      },
      {
        title: 'Roadmap: Implementando IA no Escritório',
        subtitle: 'Plano de adoção progressiva de 30 a 90 dias',
        level: 'expert',
        icon: 'rocket',
        analogy: {
          text: 'Nenhum escritório se transforma da noite para o dia. A adoção de IA é como a **implantação de um novo sistema processual**: começa com piloto, expande gradualmente e se torna parte da rotina. Este roadmap é o seu **plano de implantação**.',
        },
        content: `Um plano estruturado para integrar o Claude na operação do escritório sem disrupção, com marcos claros e resultados mensuráveis.

**Fase 1 — Fundação (Dias 1-15):**

| Semana | Ação | Responsável | Resultado |
|--------|------|------------|-----------|
| **1** | Criar contas Pro para todos os advogados | Gestão | Acesso configurado |
| **1** | Personalizar perfil de cada advogado | Individual | Instruções base salvas |
| **1** | Definir política interna de uso de IA | Sócio + compliance | Documento aprovado |
| **2** | Criar Projetos por cliente/caso ativo | Cada advogado | Contexto organizado |
| **2** | Configurar Estilos de escrita do escritório | Sócio sênior | Padrão de escrita unificado |

**Fase 2 — Adoção Inicial (Dias 16-45):**

| Semana | Ação | Ferramenta | Resultado |
|--------|------|-----------|-----------|
| **3** | Instalar Cowork em todas as máquinas | Cowork | Desktop agent ativo |
| **3** | Conectar Google Drive/Gmail | Conectores | Documentos acessíveis |
| **4** | Criar Skills por área de atuação | Skills | Workflows padronizados |
| **4** | Treinar equipe em prompts estruturados | Chat | Qualidade de output elevada |
| **5-6** | Piloto: 1 petição + 1 contrato por semana com IA | Cowork | Métricas de economia de tempo |

**Fase 3 — Expansão (Dias 46-75):**

| Semana | Ação | Ferramenta | Resultado |
|--------|------|-----------|-----------|
| **7** | Ativar Plugin Legal para contratos | Plugins | Revisão automatizada |
| **7** | Implementar Skills contenciosos (Réplica, Contrarrazões) | Skills | Workflow processual completo |
| **8** | Configurar automações recorrentes | Cowork | Relatórios semanais automáticos |
| **9** | Integrar Claude in Chrome para PJe/tribunais | Chrome | Pesquisa automatizada |
| **10** | Medir resultados: tempo economizado, qualidade, satisfação | Gestão | Relatório de ROI |

**Fase 4 — Maturidade (Dias 76-90+):**

| Semana | Ação | Ferramenta | Resultado |
|--------|------|-----------|-----------|
| **11** | Avaliar upgrade para Team (se equipe > 3) | Planos | Colaboração + segurança |
| **11** | Criar MCPs personalizados para APIs (DataJud, PJe) | MCP | Automação total |
| **12** | Documentar processos otimizados em CLAUDE.md | Todos | Knowledge base do escritório |
| **12+** | Expansão contínua: novos Skills, Plugins e automações | Todos | Escritório AI-first |

**Métricas de sucesso:**

| Métrica | Meta 30 dias | Meta 90 dias |
|---------|-------------|-------------|
| Tempo médio por petição | -30% | -50% |
| Tempo de pesquisa jurisprudencial | -40% | -70% |
| Erros em revisão de contratos | -20% | -40% |
| Satisfação da equipe com IA | 7/10 | 9/10 |
| Adoção (uso diário) | 60% da equipe | 90% da equipe |`,
        tips: [
          'Comece pelo advogado mais receptivo a tecnologia — ele será o "embaixador" do projeto',
          'Documente economia de tempo desde o dia 1 — dados de ROI convencem sócios céticos',
          'Não force adoção — mostre resultados e deixe a equipe se interessar naturalmente',
          'Revise a política de uso de IA a cada 90 dias — a tecnologia evolui rápido',
        ],
        flowSteps: [
          { title: 'Fundação (Dias 1-15)', description: 'Contas, perfis, política de uso, Projetos e Estilos configurados' },
          { title: 'Adoção (Dias 16-45)', description: 'Cowork instalado, conectores ativos, Skills criados, equipe treinada' },
          { title: 'Expansão (Dias 46-75)', description: 'Plugins, automações recorrentes, Chrome, medição de resultados' },
          { title: 'Maturidade (Dias 76-90+)', description: 'Team/Enterprise, MCPs personalizados, escritório AI-first' },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════
  // SEÇÃO 10: AVANÇADO (Claude Code e MCP)
  // ═══════════════════════════════════════════════════════════
  {
    id: 'avancado',
    title: 'Claude Code & MCP',
    description: 'Ferramentas avançadas para poder total',
    icon: 'wrench',
    cards: [
      {
        title: 'O que é o Claude Code?',
        subtitle: 'A versão "engenheiro" do Claude',
        level: 'avancado',
        icon: 'terminal',
        analogy: {
          text: 'Se o Cowork é o **estagiário amigável** (faz tudo por você com interface visual), o Claude Code é o **engenheiro de TI** (tela preta, comandos, poder total). A maioria dos advogados não precisa — mas se tiver suporte técnico, é absurdamente poderoso.',
        },
        content: `O Claude Code roda no **terminal** (tela de comandos). Enquanto o Cowork é o "colega de escritório" (interface amigável), o Claude Code é o "técnico especialista" (mais poderoso, mais técnico).

**O que ele faz além do Cowork:**
- Editar código em projetos inteiros
- Rodar testes automatizados
- Gerenciar Git (controle de versões)
- Criar e configurar servidores MCP
- Conectar-se ao Chrome para testes automatizados
- Criar agents (assistentes especializados)

**Para advogados:** A maioria não precisará do Claude Code diretamente. Mas se quiser criar automações avançadas, sites ou tem suporte técnico, é extremamente poderoso.

**Instalação:**
- **macOS:** \`brew install claude-code\` ou \`npm install -g @anthropic-ai/claude-code\`
- **Windows:** \`npm install -g @anthropic-ai/claude-code\` (requer Node.js)
- **Linux:** \`npm install -g @anthropic-ai/claude-code\``,
        tips: [
          'Se você não é técnico, o Cowork resolve 95% das necessidades',
          'Se tem TI no escritório, o Claude Code pode criar automações incríveis',
          'É a mesma IA — só com interface diferente (terminal vs desktop)',
        ],
      },
      {
        title: 'O que é MCP?',
        subtitle: 'A tecnologia por trás dos conectores',
        level: 'avancado',
        icon: 'network',
        analogy: {
          text: 'MCP é como o **padrão USB**: você não precisa entender a engenharia, só precisa saber que **qualquer dispositivo compatível funciona quando plugado**. Os conectores (Drive, Gmail) são os "dispositivos USB" — plug and play.',
        },
        content: `MCP (Model Context Protocol) é a tecnologia que permite ao Claude se conectar a ferramentas externas. É como o padrão USB para computadores — uma "tomada universal" que qualquer ferramenta pode usar.

**Níveis de dificuldade:**

| Ação | Dificuldade | Programar? |
|------|-------------|------------|
| Usar conectores no Claude.ai | Fácil (1/5) | Não |
| Instalar plugins no Cowork | Fácil (1/5) | Não |
| Instalar extensão no Desktop | Fácil (2/5) | Não |
| Configurar MCP no Claude Code | Médio (3/5) | Um pouco |
| Criar MCP do zero | Difícil (5/5) | Sim |

**Para advogados:** A grande maioria só precisa USAR os MCPs prontos (conectar Gmail, Drive, etc). Saber que "MCP" existe por trás é útil para entender o potencial, mas não precisa configurar nada manualmente.`,
      },
      {
        title: 'Fluxos Combinados',
        subtitle: 'O verdadeiro poder do ecossistema',
        level: 'avancado',
        icon: 'git-branch',
        analogy: {
          text: 'Cada ferramenta sozinha é útil. **Combinadas**, criam uma linha de montagem: Drive busca → Cowork processa → Word entrega → Gmail envia. Como montar uma **operação jurídica automatizada**.',
        },
        content: `O verdadeiro poder aparece quando você **combina** ferramentas:

**Fluxo 1 — Análise Completa de Processo:**
Google Drive acessa documentos → Cowork extrai fatos e analisa → Skill de Word gera parecer → Salvo na pasta do cliente

**Fluxo 2 — Pesquisa + Relatório:**
Chrome pesquisa jurisprudência em tribunais → Cowork organiza resultados → Word gera relatório analítico

**Fluxo 3 — Controle de Prazos:**
Gmail identifica intimações → Calendar cria eventos com alertas → Cowork gera planilha de prazos atualizada

**Fluxo 4 — Revisão de Contrato:**
DocuSign acessa contrato pendente → Cowork analisa cláusula por cláusula → Drive salva versão revisada → Gmail rascunha resumo para o cliente`,
        tips: [
          'Comece com fluxos simples (1-2 ferramentas) e vá combinando',
          'Cada fluxo economiza horas de trabalho manual',
          'Documente seus fluxos favoritos no CLAUDE.md para replicar facilmente',
        ],
        flowSteps: [
          { title: 'Entrada', description: 'Documentos, e-mails ou dados da web' },
          { title: 'Processamento', description: 'Cowork + Skills analisam e transformam' },
          { title: 'Output', description: 'Documentos formatados, planilhas, relatórios' },
          { title: 'Distribuição', description: 'Drive, e-mail ou pasta local' },
        ],
      },
      {
        title: 'Criando Automações com MCP',
        subtitle: 'Visão geral e arquitetura',
        level: 'expert',
        icon: 'key-round',
        analogy: {
          text: 'Um MCP é como instalar um **ramal telefônico direto** entre o Claude e os sistemas do Judiciário. Em vez de copiar e colar dados do PJe, o Claude consulta diretamente — como se tivesse um funcionário dedicado fazendo buscas para você em tempo real.',
        },
        content: `MCPs (Model Context Protocol) permitem que o Claude acesse APIs externas como se fossem ferramentas nativas. Para advogados, isso significa conectar o Claude diretamente aos sistemas do Judiciário brasileiro.

**O que você vai construir:**

| Categoria | Ferramentas | API Utilizada |
|-----------|------------|---------------|
| 🔍 **Consulta** | buscar_processo, buscar_por_parte, listar_documentos, listar_movimentacoes | DataJud (CNJ) + MNI PJE |
| 📊 **Análise** | analisar_processo, analisar_decisao, cronologia_detalhada, argumentos_por_polo | DataJud + IA do Claude |
| 📋 **Produção** | parecer_juridico, analise_risco, extrair_pedidos, identificar_prazos | Processamento com IA |

**APIs Públicas que vamos usar:**

| API | Acesso | O que faz |
|-----|--------|-----------|
| **DataJud (CNJ)** | Público (API Key gratuita) | Metadados de processos de todos os tribunais |
| **Comunica PJE** | Institucional (via tribunal) | Comunicações processuais (intimações, citações) |
| **MNI PJE** | Institucional (via tribunal) | Consulta e peticionamento em processos |
| **Pangea/BNP** | Institucional (via CNJ) | Jurisprudência qualificada (precedentes, repetitivos) |

**Pré-requisitos:**
- Claude Code instalado (npm, Node.js 18+)
- Conta no plano Pro ou superior
- Conhecimento básico de terminal (copiar e colar comandos)
- Para APIs institucionais: credenciais obtidas via tribunal

**Estrutura de um MCP jurídico:**
Todo MCP que vamos criar segue a mesma arquitetura simples: um servidor Node.js que recebe pedidos do Claude, consulta a API do tribunal e devolve os dados formatados.`,
        tips: [
          'Comece pelo MCP do DataJud — é 100% público e gratuito, sem burocracia',
          'Você não precisa saber programar: o Claude Code gera todo o código para você',
          'MCPs rodam localmente no seu computador — seus dados não passam por terceiros',
          'Sempre teste com um processo público antes de usar com processos de clientes',
        ],
        flowSteps: [
          { title: '1. Descrever', description: 'Você diz ao Claude Code o que quer conectar' },
          { title: '2. Gerar', description: 'O Claude cria o código do MCP automaticamente' },
          { title: '3. Configurar', description: 'Adicionar o MCP ao Claude Desktop' },
          { title: '4. Usar', description: 'O Claude agora tem acesso direto à API' },
        ],
      },
      {
        title: 'MCP DataJud — Consulta Processual',
        subtitle: 'Passo a passo completo com API pública do CNJ',
        level: 'expert',
        icon: 'search',
        analogy: {
          text: 'O DataJud é como ter acesso à **recepção de todos os 90+ tribunais do Brasil ao mesmo tempo**. Você pergunta sobre um processo e recebe a resposta instantaneamente — sem precisar entrar em cada site separadamente.',
        },
        content: `O DataJud é a API mais acessível para advogados: é **100% pública, gratuita e não precisa de cadastro**. Veja como criar seu MCP passo a passo:

**Passo 1 — Abra o Claude Code e peça para criar o MCP:**

No terminal, abra o Claude Code e cole este prompt:

\`\`\`
Crie um MCP Server em Node.js/TypeScript chamado "mcp-datajud"
que conecta à API pública do DataJud do CNJ.

Base URL: https://api-publica.datajud.cnj.jus.br/
Auth: Header "Authorization: APIKey cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw=="

Crie estas ferramentas:

1. buscar_processo(numero_cnj, tribunal)
   - POST em /{tribunal_alias}/_search
   - Query: { "query": { "match": { "numeroProcesso": "{numero_sem_pontuacao}" } } }
   - tribunal_alias exemplo: "api_publica_tjsp", "api_publica_trf1"
   - Retornar: classe, assuntos, órgão julgador, últimas movimentações

2. buscar_por_parte(nome_parte, tribunal)
   - POST em /{tribunal_alias}/_search
   - Query usando match em campo de partes
   - Retornar lista de processos encontrados

3. listar_movimentacoes(numero_cnj, tribunal)
   - Mesma consulta do buscar_processo
   - Retornar apenas o array de movimentos, formatado como timeline

4. analisar_processo(numero_cnj, tribunal)
   - Busca os dados via buscar_processo
   - Retorna análise estruturada: resumo, status atual,
     próximos passos prováveis, pontos de atenção

Use o SDK @modelcontextprotocol/sdk para criar o server.
Formato de saída: JSON formatado e legível.
\`\`\`

**Passo 2 — O Claude Code vai gerar os arquivos:**

Ele criará automaticamente:
- \`package.json\` com dependências
- \`src/index.ts\` com o servidor MCP
- Ferramentas de consulta ao DataJud

**Passo 3 — Instale e compile:**

\`\`\`bash
cd mcp-datajud
npm install
npm run build
\`\`\`

**Passo 4 — Configure no Claude Desktop:**

Abra as configurações do Claude Desktop → MCP Servers e adicione:

\`\`\`json
{
  "mcpServers": {
    "datajud": {
      "command": "node",
      "args": ["C:/caminho/para/mcp-datajud/dist/index.js"]
    }
  }
}
\`\`\`

**Passo 5 — Teste com um processo público:**

Reinicie o Claude Desktop e pergunte:
- *"Busque o processo 0000832-35.2018.4.01.3202 no TRF1"*
- *"Quais as últimas movimentações desse processo?"*
- *"Faça uma análise completa deste processo"*

**Tribunais disponíveis (88+):**

| Sigla | Alias da API | Exemplo |
|-------|-------------|---------|
| TJSP | api_publica_tjsp | Tribunal de Justiça de São Paulo |
| TJRJ | api_publica_tjrj | Tribunal de Justiça do Rio de Janeiro |
| TRF1 | api_publica_trf1 | Tribunal Regional Federal 1ª Região |
| TST | api_publica_tst | Tribunal Superior do Trabalho |
| TRT2 | api_publica_trt2 | TRT da 2ª Região (SP) |
| STJ | api_publica_stj | Superior Tribunal de Justiça |`,
        tips: [
          'A API Key do DataJud é pública e fornecida pelo próprio CNJ — não é senha pessoal',
          'Use search_after para paginar resultados quando houver muitos processos',
          'Comece testando com processos públicos conhecidos antes de usar em produção',
          'O Claude Code gera 100% do código — você só precisa copiar o prompt acima',
        ],
        steps: [
          'Abra o Claude Code no terminal (digite "claude" no terminal)',
          'Cole o prompt do Passo 1 e aguarde o Claude gerar o projeto',
          'Execute "npm install && npm run build" na pasta criada',
          'Adicione a configuração JSON no Claude Desktop → Configurações → MCP',
          'Reinicie o Claude Desktop e teste: "Busque o processo X no TJSP"',
        ],
        links: [
          { label: 'Wiki DataJud — API Pública', url: 'https://datajud-wiki.cnj.jus.br/api-publica/' },
          { label: 'Lista de Endpoints (Tribunais)', url: 'https://datajud-wiki.cnj.jus.br/api-publica/endpoints/' },
        ],
      },
      {
        title: 'MCP Jurisprudência — Pangea/BNP',
        subtitle: 'Pesquisa de precedentes e jurisprudência qualificada',
        level: 'expert',
        icon: 'book-open',
        analogy: {
          text: 'O Pangea/BNP é como ter um **bibliotecário especializado em jurisprudência** disponível 24h. Ele conhece todos os precedentes vinculantes, recursos repetitivos e repercussões gerais — e entrega a pesquisa pronta para seu caso.',
        },
        content: `O Pangea/BNP (Banco Nacional de Precedentes) do CNJ centraliza jurisprudência qualificada de todos os tribunais. Com um MCP, o Claude pesquisa precedentes diretamente.

**Acesso:** Requer credenciais institucionais (solicitar via integracaopdpj@cnj.jus.br). Se você trabalha em tribunal ou escritório conveniado, provavelmente já pode solicitar.

**Passo 1 — Solicite acesso:**

Envie e-mail para \`integracaopdpj@cnj.jus.br\` com:
- Nome do escritório/instituição
- Justificativa de uso (pesquisa jurisprudencial)
- CPF do responsável técnico

Você receberá um \`client_id\` e \`client_secret\`.

**Passo 2 — Peça ao Claude Code para criar o MCP:**

\`\`\`
Crie um MCP Server em Node.js/TypeScript chamado "mcp-pangea-bnp"
para pesquisa de jurisprudência no Pangea/BNP do CNJ.

Autenticação OAuth2 (Keycloak):
- Token URL: https://sso.cloud.pje.jus.br/auth/realms/pje/protocol/openid-connect/token
- grant_type: client_credentials
- client_id e client_secret serão variáveis de ambiente

Base URL da API: https://bnp-sempj.cloud.pje.jus.br

Crie estas ferramentas:

1. buscar_precedentes(tema, tipo_recurso)
   - GET /v1/recurso-repetitivo?pageNumber=1&pageSize=20
   - Filtrar por tema
   - tipo_recurso: "repetitivo" | "repercussao_geral"

2. buscar_repercussao_geral(tema)
   - GET /v1/repercussao-geral
   - Retornar: número do tema, tese firmada, situação

3. analisar_decisao(texto_decisao)
   - Recebe texto de uma decisão
   - Usa o Claude para identificar: tipo, dispositivo,
     fundamentação principal, precedentes citados

4. argumentos_por_polo(numero_cnj)
   - Analisa dados do processo
   - Separa teses do autor vs réu (ou acusação vs defesa)

O MCP deve ler client_id e client_secret de variáveis
de ambiente PANGEA_CLIENT_ID e PANGEA_CLIENT_SECRET.
Renovar o token automaticamente quando expirar.
\`\`\`

**Passo 3 — Configure com suas credenciais:**

\`\`\`json
{
  "mcpServers": {
    "pangea-bnp": {
      "command": "node",
      "args": ["C:/caminho/para/mcp-pangea-bnp/dist/index.js"],
      "env": {
        "PANGEA_CLIENT_ID": "seu_client_id_aqui",
        "PANGEA_CLIENT_SECRET": "seu_client_secret_aqui"
      }
    }
  }
}
\`\`\`

**Passo 4 — Use no Claude Desktop:**

- *"Pesquise precedentes sobre responsabilidade civil por erro médico"*
- *"Quais recursos repetitivos existem sobre dano moral em relações de consumo?"*
- *"Analise esta decisão e identifique os precedentes citados: [cole o texto]"*

**Alternativa sem credenciais — Web Scraping do portal público:**

Se não conseguir credenciais da API, o Claude Code pode criar um MCP que consulta o portal público do Pangea:

\`\`\`
Crie um MCP que faz web scraping do portal
https://pangeabnp.pdpj.jus.br/ para pesquisar
jurisprudência. Use puppeteer/playwright para
automatizar a busca no site e retornar os resultados.
\`\`\``,
        tips: [
          'Enquanto aguarda credenciais do Pangea, use o DataJud para buscar movimentações que incluem decisões',
          'Combine o MCP Pangea + DataJud para pesquisa completa: precedentes + dados processuais',
          'Salve pesquisas frequentes como Skills do Claude para reutilizar',
          'O portal público pangeabnp.pdpj.jus.br pode ser consultado manualmente enquanto configura o MCP',
        ],
        links: [
          { label: 'Portal Pangea/BNP', url: 'https://pangeabnp.pdpj.jus.br/' },
          { label: 'Manual do Usuário (PDF)', url: 'https://www.cnj.jus.br/wp-content/uploads/2023/11/manual-de-usuario-pangea-bnp.pdf' },
        ],
      },
      {
        title: 'MCP Comunicações — PJE e MNI',
        subtitle: 'Intimações, citações e peticionamento',
        level: 'expert',
        icon: 'mail',
        analogy: {
          text: 'Imagine que o Claude monitora sua **caixa postal jurídica** automaticamente. Toda intimação, citação ou notificação é lida, analisada e resumida antes mesmo de você abrir o PJe pela manhã.',
        },
        content: `O Comunica PJE e o MNI PJE permitem acessar comunicações processuais e peticionar. Ambos requerem credenciais institucionais.

**Comunica PJE — Monitoramento de intimações:**

API: \`https://comunicaapi.pje.jus.br/api/v1\`
Acesso: Solicitar ao administrador regional do seu tribunal via CNJ Corporativo.

\`\`\`
Crie um MCP Server chamado "mcp-comunica-pje"
para monitorar comunicações processuais.

API Base: https://comunicaapi.pje.jus.br/api/v1
Auth: POST /api/v1/autenticacao com username e password

Ferramentas:

1. listar_comunicacoes(data_inicio, data_fim, numero_processo?)
   - GET /api/v1/comunicacao com filtros
   - Parâmetros: dataInicio, dataFim, numeroProcesso,
     tipoComunicacao, statusCiente
   - Retornar lista formatada com tipo, processo, prazo

2. detalhar_comunicacao(id_comunicacao)
   - GET /api/v1/comunicacao/{id}
   - Retornar conteúdo completo da comunicação

3. identificar_prazos(data_inicio, data_fim)
   - Busca comunicações no período
   - Classifica: prazos vencidos, em curso, futuros
   - Calcula dias restantes considerando dias úteis

4. resumo_diario()
   - Busca comunicações das últimas 24h
   - Gera resumo executivo: novas intimações,
     prazos próximos, ações necessárias

Credenciais via variáveis de ambiente:
COMUNICA_USERNAME e COMUNICA_PASSWORD
\`\`\`

**MNI PJE — Consulta avançada e peticionamento:**

API: \`https://mni-client.prd.cnj.cloud\`
Acesso: Via Keycloak SSO do PJe (credenciais institucionais).

\`\`\`
Crie um MCP Server chamado "mcp-mni-pje"
para consulta e peticionamento via MNI.

API Base: https://mni-client.prd.cnj.cloud
Auth: Keycloak SSO com headers X-API-KEY, X-MNI-CPF, X-MNI-SENHA

Ferramentas:

1. consultar_processo_completo(numero_cnj)
   - GET /api/v1/processo/{numero}
   - Retorna dados completos do processo

2. listar_documentos(numero_cnj)
   - GET /api/v1/processo/{numero}/documentos/ids
   - Lista todos os documentos com IDs

3. baixar_documento(numero_cnj, documento_id)
   - GET /api/v1/processo/{numero}/documento/{id}
   - Baixa o documento para análise

4. consultar_peticao_inicial(numero_cnj)
   - GET /api/v1/processo/{numero}/peticao-inicial
   - Retorna a petição inicial para análise

Credenciais via variáveis de ambiente:
MNI_API_KEY, MNI_CPF, MNI_SENHA
\`\`\`

**Configuração combinada (todos os MCPs juntos):**

\`\`\`json
{
  "mcpServers": {
    "datajud": {
      "command": "node",
      "args": ["C:/mcps/mcp-datajud/dist/index.js"]
    },
    "comunica-pje": {
      "command": "node",
      "args": ["C:/mcps/mcp-comunica-pje/dist/index.js"],
      "env": {
        "COMUNICA_USERNAME": "seu_usuario",
        "COMUNICA_PASSWORD": "sua_senha"
      }
    },
    "mni-pje": {
      "command": "node",
      "args": ["C:/mcps/mcp-mni-pje/dist/index.js"],
      "env": {
        "MNI_API_KEY": "sua_api_key",
        "MNI_CPF": "seu_cpf",
        "MNI_SENHA": "sua_senha"
      }
    }
  }
}
\`\`\``,
        tips: [
          'Comece pelo Comunica PJE se receber muitas intimações — o resumo diário economiza horas',
          'O MNI permite baixar documentos: combine com a análise de IA do Claude para extrair informações',
          'Nunca configure peticionamento automático sem revisão humana — use apenas para consulta inicialmente',
          'Mantenha suas credenciais em variáveis de ambiente, nunca no código-fonte',
        ],
        links: [
          { label: 'Documentação MNI PJE', url: 'https://docs.pje.jus.br/servicos-auxiliares/servico-mni-client/' },
          { label: 'Swagger Comunica PJE', url: 'https://app.swaggerhub.com/apis-docs/cnj/pcp/1.0.0' },
        ],
      },
      {
        title: 'MCP Análise e Produção com IA',
        subtitle: 'Ferramentas que combinam dados + inteligência artificial',
        level: 'expert',
        icon: 'brain',
        analogy: {
          text: 'Os MCPs anteriores trazem os **dados brutos**. Este MCP adiciona a **inteligência**: analisa decisões, gera pareceres, avalia riscos e extrai prazos. É como ter um estagiário que pesquisa E analisa ao mesmo tempo.',
        },
        content: `Este MCP combina os dados obtidos das APIs (DataJud, MNI, Comunica) com o poder de análise do Claude para gerar produtos jurídicos prontos.

**Peça ao Claude Code:**

\`\`\`
Crie um MCP Server chamado "mcp-analise-juridica" com
ferramentas de análise que usam os dados dos outros MCPs.

Ferramentas:

1. analisar_processo(numero_cnj, tribunal)
   - Busca dados via DataJud
   - Gera análise completa: resumo, partes, status,
     classe, assuntos, histórico de movimentações,
     pontos de atenção, próximos passos prováveis

2. analisar_decisao(texto_decisao)
   - Recebe texto de sentença, acórdão ou despacho
   - Identifica: tipo de decisão, dispositivo,
     fundamentação, precedentes citados,
     consequências práticas

3. cronologia_detalhada(numero_cnj, tribunal, tipo)
   - tipo: "cpc" (cível) ou "cpp" (criminal)
   - Busca movimentações via DataJud
   - Gera timeline estruturada com marcos processuais
     relevantes para o tipo de procedimento

4. parecer_juridico(numero_cnj, tribunal, questao)
   - Busca dados processuais + jurisprudência
   - Gera parecer estruturado: ementa, relatório,
     fundamentação jurídica, conclusão
   - questao: o ponto específico a ser analisado

5. analise_risco(numero_cnj, tribunal)
   - Avalia probabilidade de êxito
   - Lista riscos e fatores favoráveis/desfavoráveis
   - Sugere estratégias alternativas

6. extrair_pedidos(texto_peticao)
   - Recebe texto da petição inicial
   - Lista pedidos principais e subsidiários
   - Identifica valores envolvidos

7. identificar_prazos(numero_cnj, tribunal)
   - Analisa movimentações recentes
   - Mapeia prazos: vencidos, em curso, futuros
   - Calcula dias úteis restantes
   - Alerta sobre prazos críticos

Cada ferramenta deve retornar output formatado
em Markdown para fácil leitura no Claude.
\`\`\`

**Exemplos de uso no Claude Desktop (após instalar os MCPs):**

| Você pergunta... | O Claude faz... |
|-------------------|-----------------|
| "Analise o processo 1234567-89.2024.8.26.0100 do TJSP" | Busca no DataJud → Gera análise completa |
| "Faça um parecer sobre a prescrição neste caso" | Busca dados + jurisprudência → Gera parecer estruturado |
| "Quais os riscos de recorrer desta decisão?" | Analisa decisão + histórico → Avalia probabilidade |
| "Monte a cronologia deste processo criminal" | Busca movimentações → Timeline no formato CPP |
| "Tenho prazos vencendo esta semana?" | Consulta comunicações → Lista prazos por urgência |

**Fluxo completo integrado:**

Com todos os MCPs instalados, você pode fazer pedidos complexos:

*"Busque o processo 1234567-89.2024.8.26.0100 no TJSP, analise a última decisão, pesquise jurisprudência sobre o tema no Pangea, e me dê um parecer sobre as chances de êxito em recurso — tudo com sugestão de tese recursal."*

O Claude usa cada MCP como uma ferramenta: consulta o DataJud, pesquisa no Pangea, analisa com IA e gera o parecer completo.`,
        tips: [
          'Sempre revise pareceres e análises gerados — a IA é ferramenta, não substituta do advogado',
          'Combine múltiplos MCPs em um único pedido para análises completas',
          'Salve análises frequentes como Skills para padronizar a qualidade',
          'Para prazos críticos, configure o resumo diário do Comunica PJE como rotina matinal',
        ],
        elementGrid: [
          {
            icon: 'search',
            name: 'DataJud',
            tech: 'Consulta',
            description: 'Busca processual em 88+ tribunais',
            whenToUse: 'Localizar processos por número ou parte',
            highlight: true,
          },
          {
            icon: 'book-open',
            name: 'Pangea/BNP',
            tech: 'Jurisprudência',
            description: 'Precedentes vinculantes e repetitivos',
            whenToUse: 'Fundamentar peças com jurisprudência qualificada',
          },
          {
            icon: 'mail',
            name: 'Comunica PJE',
            tech: 'Comunicações',
            description: 'Intimações, citações e notificações',
            whenToUse: 'Monitorar prazos e comunicações diárias',
          },
          {
            icon: 'brain',
            name: 'Análise IA',
            tech: 'Produção',
            description: 'Pareceres, riscos e cronologias',
            whenToUse: 'Gerar documentos jurídicos a partir dos dados',
          },
        ],
      },
      {
        title: 'MCP Visual Law / Legal Design',
        subtitle: 'Automação completa de documentos visuais',
        level: 'expert',
        icon: 'palette',
        analogy: {
          text: 'Imagine combinar todos os MCPs anteriores (DataJud, Pangea, Comunica PJE) com Visual Law: o Claude **busca os dados do processo, pesquisa jurisprudência e gera a peça processual com todos os elementos visuais** — tudo automaticamente.',
        },
        content: `Este MCP combina o poder das APIs jurídicas com as técnicas de Visual Law, gerando documentos completos e visualmente superiores.

**O que este MCP faz:**
Ao receber um número de processo, ele busca todos os dados, aplica Visual Law e gera peças prontas.

**Peça ao Claude Code:**

\`\`\`
Crie um MCP Server chamado "mcp-visual-law" que combina
dados processuais com técnicas de Visual Law.

Ferramentas:

1. peticao_visual(numero_cnj, tribunal, tipo_peca)
   - Busca dados do processo via DataJud
   - Gera peça processual com:
     * Quadro resumo no topo
     * Timeline dos fatos (extraída das movimentações)
     * Mapa de provas (tabela fato → documento)
     * Checklist de requisitos legais
     * Pedidos hierarquicamente estruturados
   - Formato: Markdown estruturado

2. proposta_honorarios(dados_cliente, tipo_demanda, valores)
   - Gera proposta de honorários completa
   - Estrutura: capa, resumo, escopo, tabela de honorários,
     condições de pagamento, aceite
   - Aplica Visual Law: tabelas, ícones, hierarquia clara

3. pasta_cliente(dados_cliente, tipo_demanda)
   - Gera estrutura de pastas e documentos:
     * Ficha cadastral
     * Procuração ad judicia
     * Contrato de honorários
     * Carta de boas-vindas
     * Checklist de documentos pendentes

4. relatorio_visual(numero_cnj, tribunal, tipo_relatorio)
   - tipo: "andamento" | "risco" | "parecer" | "cliente"
   - Busca dados via DataJud
   - Gera relatório com Visual Law:
     * Quadro resumo executivo
     * Timeline de andamentos
     * Matriz de riscos (quando aplicável)
     * Quadro de teses e argumentos
     * Conclusão e recomendações

5. email_profissional(contexto, destinatario, tipo)
   - tipo: "atualizacao" | "documentos" | "resultado" |
     "proposta" | "acordo"
   - Gera e-mail profissional adaptado ao destinatário
   - Tom adequado: cliente (acessível) vs advogado (técnico)

Cada ferramenta deve retornar Markdown bem estruturado
com tabelas, listas hierárquicas e formatação Visual Law.
\`\`\`

**Configuração:**

\`\`\`json
{
  "mcpServers": {
    "visual-law": {
      "command": "node",
      "args": ["C:/mcps/mcp-visual-law/dist/index.js"],
      "env": {
        "DATAJUD_API_KEY": "cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw=="
      }
    }
  }
}
\`\`\`

**Exemplos de uso no Claude Desktop:**

| Você pede... | O que recebe... |
|-------------|-----------------|
| "Gere uma contestação visual do processo X no TJSP" | Contestação com quadro resumo, timeline, mapa de provas |
| "Monte proposta de honorários para caso trabalhista de R$ 200k" | Proposta profissional com tabelas, escopo e aceite |
| "Crie pasta de cliente para Maria Silva, caso de divórcio" | 5+ documentos + estrutura de pastas organizadas |
| "Relatório visual de risco do processo X" | Relatório com matriz de riscos, timeline e recomendações |
| "E-mail de atualização para cliente sobre sentença favorável" | E-mail profissional com próximos passos |`,
        tips: [
          'Este MCP é o mais completo: combine com DataJud e Pangea para resultado máximo',
          'Os documentos saem em Markdown — copie para Word e ajuste a formatação final',
          'Salve os prompts de cada tipo de documento como Skills para usar sem o MCP',
          'Para escritórios: personalize o MCP com o logotipo e padrão visual do escritório',
        ],
        elementGrid: [
          {
            icon: 'file-text',
            name: 'Petições',
            tech: 'Visual Law',
            description: 'Peças processuais com quadro resumo, timeline e mapa de provas',
            whenToUse: 'Petições iniciais, contestações, recursos',
            highlight: true,
          },
          {
            icon: 'presentation',
            name: 'Propostas',
            tech: 'Honorários',
            description: 'Propostas profissionais com tabelas, escopo e condições',
            whenToUse: 'Novos clientes e novos casos',
          },
          {
            icon: 'folder-open',
            name: 'Pasta do Cliente',
            tech: 'Onboarding',
            description: 'Estrutura completa com 5+ documentos gerados',
            whenToUse: 'Entrada de novo cliente no escritório',
          },
          {
            icon: 'mail',
            name: 'E-mails',
            tech: 'Comunicação',
            description: 'E-mails profissionais adaptados ao destinatário',
            whenToUse: 'Comunicação diária com clientes e colegas',
          },
        ],
      },
      {
        title: 'MCP Contencioso Estratégico',
        subtitle: 'Réplica, contrarrazões e jurisprudência como ferramentas programáticas',
        level: 'expert',
        icon: 'shield',
        analogy: {
          text: 'Imagine um **escritório de advocacia automatizado** onde você fala "analise esta contestação" e o sistema executa diagnóstico tático, desconstrução técnica e monta o roteiro da réplica — tudo via ferramentas programáticas. Este MCP transforma os 3 fluxos contenciosos em **APIs reutilizáveis**.',
        },
        content: `Este MCP Server expõe 3 pipelines contenciosos como ferramentas programáticas que o Claude Code pode chamar automaticamente. Cada pipeline segue a cadeia de prompts sequenciais testada e otimizada.

**Ferramentas disponíveis:**

| Ferramenta | Input | Output |
|-----------|-------|--------|
| \`analise_comparativa\` | Inicial + Contestação | Diagnóstico tático completo |
| \`desconstrucao_tecnica\` | Contestação + Diagnóstico | Mapa de fragilidades classificado |
| \`arquitetura_replica\` | Diagnóstico + Desconstrução | Roteiro estratégico da réplica |
| \`contextualizacao_recurso\` | Sentença + Recurso + Autos | Cenário processual organizado |
| \`fragilidades_recurso\` | Recurso + Contexto | Vulnerabilidades do recurso classificadas |
| \`arquitetura_contrarrazoes\` | Contexto + Fragilidades | Roteiro das contrarrazões |
| \`triagem_jurisprudencia\` | Jurisprudências + Tese | Precedentes classificados por hierarquia |
| \`contextualizar_precedente\` | Fatos + Jurisprudência | Precedente como argumento contextualizado |
| \`integrar_tese\` | Tese + Pedido + Precedentes | Bloco argumentativo completo |

**Pipelines completos (executam a cadeia inteira):**

| Pipeline | Etapas | Uso |
|----------|--------|-----|
| \`pipeline_replica\` | 3 etapas sequenciais | "Analise e monte a réplica deste caso" |
| \`pipeline_contrarrazoes\` | 3 etapas sequenciais | "Analise e monte as contrarrazões" |
| \`pipeline_jurisprudencia\` | 3 etapas sequenciais | "Organize estas jurisprudências para a petição" |

**Peça ao Claude Code:**

\`\`\`
Crie um MCP Server chamado "mcp-contencioso" com as seguintes
ferramentas:

1. analise_comparativa(peticao_inicial, contestacao)
   - Compara: pedidos, teses, narrativa fática, provas, fundamentos
   - Identifica: teses atacadas, argumentos frágeis, contradições,
     fatos não impugnados (art. 341 CPC)
   - Retorna: diagnóstico tático em JSON estruturado

2. desconstrucao_tecnica(contestacao, diagnostico)
   - Classifica: fragilidades jurídicas, fáticas, preliminares
   - Monta: mapa estratégico com prioridades de ataque
   - Retorna: vulnerabilidades ordenadas por impacto

3. arquitetura_replica(diagnostico, desconstrucao)
   - Estrutura: preliminares → reforço → desconstrução → pedidos
   - NÃO redige — monta o roteiro com argumentos e provas
   - Retorna: roteiro estratégico completo

4. contextualizacao_recurso(sentenca, recurso, autos_relevantes)
   - Organiza: fatos consolidados, direito aplicado, pontos atacados
   - Retorna: cenário processual categorizado

5. fragilidades_recurso(recurso, contextualizacao)
   - Identifica: erros, contradições, omissão de vinculantes
   - Monta: estratégia de defesa com prioridades
   - Retorna: mapa de fragilidades classificado

6. arquitetura_contrarrazoes(contextualizacao, fragilidades)
   - Estrutura: preliminares → reforço sentença → desconstrução
     → teses subsidiárias → pedidos
   - Retorna: roteiro estratégico das contrarrazões

7. triagem_jurisprudencia(jurisprudencias[], tese_central)
   - Classifica: vinculante / orientadora / reforço secundário
   - Retorna: precedentes hierarquizados com critério

8. contextualizar_precedente(fatos_caso, jurisprudencia)
   - Conecta: decisão + fundamento + fatos do caso + trecho-chave
   - Retorna: parágrafo de contextualização pronto

9. integrar_tese(tese, pedido, precedentes_contextualizados[])
   - Monta: norma → vinculante → orientador → conexão ao pedido
   - Retorna: bloco argumentativo copiável para petição

Pipelines (executam cadeia completa):
10. pipeline_replica(peticao_inicial, contestacao)
11. pipeline_contrarrazoes(sentenca, recurso, autos)
12. pipeline_jurisprudencia(jurisprudencias[], tese, pedido)

Parâmetros globais opcionais:
- area_direito: previdenciario | consumidor | trabalhista |
  tributario | bancario | familia | saude | administrativo
- tipo_recurso: apelacao | agravo | resp | re | inominado |
  embargos (para contrarrazões)
- formato_saida: json | markdown | texto

Cada ferramenta deve validar inputs e retornar erros claros.
Os pipelines devem passar o output de cada etapa como input
da próxima automaticamente.
\`\`\`

**Configuração:**

\`\`\`json
{
  "mcpServers": {
    "contencioso": {
      "command": "node",
      "args": ["C:/mcps/mcp-contencioso/dist/index.js"],
      "env": {
        "OPENAI_API_KEY": "opcional-para-embeddings",
        "AREA_PADRAO": "civil"
      }
    }
  }
}
\`\`\`

**Exemplos de uso no Claude Desktop:**

| Você pede... | O que acontece... |
|-------------|-------------------|
| "Analise esta contestação e monte a réplica" | Pipeline completo: diagnóstico → desconstrução → roteiro |
| "Monte contrarrazões para esta apelação" | Pipeline: contextualização → fragilidades → arquitetura |
| "Organize estas jurisprudências para minha petição previdenciária" | Triagem hierárquica → contextualização → bloco argumentativo |
| "Identifique as fragilidades desta contestação" | Ferramenta isolada: desconstrução técnica |
| "Classifique estes precedentes por hierarquia" | Ferramenta isolada: triagem de jurisprudência |`,
        tips: [
          'Use os pipelines para fluxo completo ou as ferramentas isoladas para controle granular',
          'O parâmetro area_direito ajusta automaticamente a hierarquia de fontes jurídicas',
          'Combine com o MCP Visual Law para gerar peças com formatação visual automática',
          'Para escritórios: parametrize o area_direito conforme a especialidade do caso',
          'Os pipelines executam todas as etapas sequencialmente — ideal para automação completa',
        ],
        elementGrid: [
          {
            icon: 'shield',
            name: 'Réplica',
            tech: '3 ferramentas',
            description: 'Diagnóstico tático, desconstrução técnica e arquitetura da réplica',
            whenToUse: 'Réplica à contestação em qualquer área do direito',
            highlight: true,
          },
          {
            icon: 'lock',
            name: 'Contrarrazões',
            tech: '3 ferramentas',
            description: 'Contextualização, fragilidades do recurso e arquitetura estratégica',
            whenToUse: 'Contrarrazões a apelação, agravo, REsp, RE, embargos',
            highlight: true,
          },
          {
            icon: 'search',
            name: 'Jurisprudência',
            tech: '3 ferramentas',
            description: 'Triagem hierárquica, contextualização e integração à tese',
            whenToUse: 'Organizar precedentes para qualquer peça processual',
          },
          {
            icon: 'zap',
            name: 'Pipelines',
            tech: 'Automação',
            description: 'Execução completa das 3 etapas em cadeia automática',
            whenToUse: 'Quando deseja o fluxo completo sem intervenção entre etapas',
          },
        ],
      },
      {
        title: 'O Futuro: Agents e Automação Total',
        subtitle: 'O que está por vir para a advocacia',
        level: 'expert',
        icon: 'sparkles',
        analogy: {
          text: 'Estamos no início de uma revolução. Hoje o Claude é um **estagiário poderoso**. Em breve será um **escritório inteiro automatizado** — com agents que monitoram processos, preparam audiências e geram relatórios sozinhos.',
        },
        content: `O ecossistema Claude está evoluindo rapidamente. As tendências para advogados:

**Agents Especializados:**
Claude Code já permite criar "agents" — assistentes que executam tarefas complexas autonomamente. Imagine um agent que monitora todos os seus processos diariamente e te envia um resumo toda manhã.

**Multi-modal:**
O Claude já lê imagens, PDFs, planilhas. Em breve: análise de áudio (gravações de audiências), vídeo (documentação de provas) e interação por voz.

**Integrações mais profundas:**
Conexão direta com sistemas como PJe, e-Proc, PROJUDI. O Claude poderá peticionar diretamente (com sua supervisão e aprovação).

**O que fazer agora para se preparar:**
1. Domine o ecossistema atual (Chat + Cowork + Chrome)
2. Organize seus dados (pastas, projetos, CLAUDE.md)
3. Crie Skills para suas tarefas mais frequentes
4. Documente seus fluxos de trabalho
5. Acompanhe atualizações no blog da Anthropic

**Lembrete importante:** A IA é ferramenta, não substituta. O julgamento profissional, a ética e a responsabilidade continuam sendo exclusivamente do advogado.`,
        links: [
          { label: 'Blog da Anthropic', url: 'https://www.anthropic.com/news' },
          { label: 'Documentação Claude', url: 'https://docs.anthropic.com' },
        ],
      },
    ],
  },
]
