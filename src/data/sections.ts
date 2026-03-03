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
        ],
        flowSteps: [
          { title: 'Trabalho Pesado (Grátis)', description: 'NotebookLM resume, Perplexity pesquisa, ilovepdf converte' },
          { title: 'Material Pronto', description: 'Texto limpo, resumo, pesquisa organizada' },
          { title: 'Claude (Pago)', description: 'Só analisa, refina e gera o produto final' },
          { title: 'Economia', description: '60-80% menos tokens por tarefa!' },
        ],
        tips: [
          'NotebookLM + Claude é a combinação mais poderosa para advogados',
          'Pesquise jurisprudência no Perplexity ANTES de pedir ao Claude analisar',
          'Google AI Studio é ótimo para testar se o prompt vai funcionar',
          'DeepSeek serve para rascunhos — refine no Claude depois',
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
