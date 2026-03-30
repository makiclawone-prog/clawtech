import AudioPlayer from "./components/AudioPlayer";

// ——— DATA ———
const manchetes = [
  {
    num: "01",
    title: "Comissão Europeia confirma ciberataque: hackers roubam centenas de GB da AWS",
    desc: "Infraestrutura cloud da UE foi comprometida. Múltiplos bancos de dados exfiltrados da plataforma Europa.eu.",
    tag: "SEGURANÇA",
    color: "#ff0066",
  },
  {
    num: "02",
    title: "OpenAI ultrapassa $25 bilhões em receita anual e prepara IPO ainda em 2026",
    desc: "Anthropic se aproxima de $19bi. Os dois maiores players de IA vivem o crescimento mais rápido da história do setor.",
    tag: "INTELIGÊNCIA ARTIFICIAL",
    color: "#9d4edd",
  },
  {
    num: "03",
    title: "Apple abre Siri para assistentes rivais — Gemini e Claude podem plugar direto no iPhone",
    desc: "Bloomberg revela que iOS 27 permitirá que IA de terceiros operem dentro do ecossistema Apple.",
    tag: "BIG TECHS",
    color: "#ffaa00",
  },
  {
    num: "04",
    title: "TELUS Digital sofre ataque devastador: 1 petabyte de dados roubado pelo ShinyHunterz",
    desc: "Códigos-fonte, verificações FBI, gravações de voz e dados Salesforce de clientes BPO comprometidos.",
    tag: "CIBERSEGURANÇA",
    color: "#ff0066",
  },
];

const iaNews = [
  {
    title: "GPT-5.4 é o modelo mais capaz da OpenAI: 3 variantes e 1.05M tokens de contexto",
    desc: "Lançado em 5 de março, o GPT-5.4 vem em Standard, Thinking e Pro. API com janela de contexto de 1,05 milhão de tokens marca nova fronteira de capacidade.",
    badge: "OPENAI",
  },
  {
    title: "MiniMax M2.5 rivaliza com Claude Opus 4.6 por uma fração do custo",
    desc: "Modelo chinês ganha destaque por desempenho comparável ao topo da Anthropic. Preço agressivo pressiona mercado e democratiza acesso a IA de ponta.",
    badge: "MODELOS",
  },
  {
    title: "Morgan Stanley alerta: salto massivo de IA vem no 1º semestre de 2026",
    desc: "Relatório do banco confirma que as leis de escala se mantêm firmes. 10x mais compute = 2x mais 'inteligência'. Elon Musk reforça a tese.",
    badge: "MERCADO",
  },
  {
    title: "Qwen 3.5 Small: Alibaba lança família open-source multimodal Apache 2.0",
    desc: "Quatro modelos densos com suporte nativo a texto, imagens e vídeo. Licença aberta esquenta corrida entre modelos proprietários e open-source.",
    badge: "OPEN SOURCE",
  },
  {
    title: "3 indiciados nos EUA por contrabandear $2.5bi em chips de IA para a China",
    desc: "Cofundador da Super Micro Computer entre os acusados. Violação das leis de exportação de tecnologia americana escala tensão geopolítica.",
    badge: "GEOPOLÍTICA",
  },
];

const bigTechsNews = [
  {
    title: "Apple abre Siri para rivais e lança MacBook Neo com foco em reparo",
    desc: "Bloomberg revela que iOS 27 permitirá Gemini e Claude plugarem direto no iPhone. MacBook Neo traz reparo facilitado e preço agressivo. Tim Cook vê entusiasmo forte no mercado.",
    badge: "APPLE",
    emoji: "🍎",
  },
  {
    title: "Google 'TurboQuant' abala mercado de chips de memória para IA",
    desc: "Tecnologia de compressão de memória do Google provoca queda em ações de fabricantes de chips. Além disso, Alphabet perde processo: júri considera Google e Meta negligentes na proteção de menores.",
    badge: "GOOGLE",
    emoji: "🔵",
  },
  {
    title: "NVIDIA GTC 2026: Jensen projeta $1 trilhão em pedidos até fim de 2027",
    desc: "CEO apresentou ecossistema de $35 trilhões em agentes de IA e $50 trilhões em IA física/robótica. Wall Street reagiu com cautela e ações caíram após keynote.",
    badge: "NVIDIA",
    emoji: "🟢",
  },
  {
    title: "Lucro das Magnificent 7 desacelera: crescimento de 18% é o menor desde 2022",
    desc: "Investidores não se contentam mais com promessas de IA — exigem resultados. A corrida agora é por quem controla infraestrutura, capital e deployment real.",
    badge: "MERCADO",
    emoji: "📉",
  },
];

const cloudNews = [
  {
    title: "AWS e Google lançam produto multicloud conjunto — Azure entra em 2026",
    desc: "Parceria inédita simplifica conexão entre as duas clouds. Microsoft Azure será integrado ainda este ano. 94% das empresas já adotam multi-cloud segundo Flexera.",
    tag: "MULTICLOUD",
    color: "#0af0ff",
  },
  {
    title: "Hiperscalers projetam $600bi em capex para 2026 — mas esbarram na energia",
    desc: "AWS, Microsoft, Google, Meta, Oracle e Alibaba expandem agressivamente. AWS abre regiões na Arábia Saudita ($5.3bi) e Sovereign Cloud na Alemanha (€7.8bi).",
    tag: "INFRAESTRUTURA",
    color: "#ffaa00",
  },
  {
    title: "Mercado cloud ultrapassa $800 bilhões: AWS 32%, Azure 23%, GCP 11%",
    desc: "O triopólio mantém 65% do mercado global. Google Cloud se posiciona como 'cloud de inovação' com foco em analytics, ML e open-source. Edge centers saltam de 250 para 1.200.",
    tag: "MARKET SHARE",
    color: "#9d4edd",
  },
];

const hardwareNews = [
  {
    title: "NVIDIA GTC 2026: Vera Rubin Ultra e parceria com robotáxis da GM e Toyota",
    desc: "Jensen Huang apresentou a arquitetura Vera Rubin Ultra com 14 trilhões de transistores. Parcerias com GM Cruise e Toyota para plataforma de direção autônoma DRIVE Thor. NVIDIA projeta $1 trilhão em pedidos até fim de 2027.",
    destaque: true,
  },
  {
    title: "Intel Arc Pro B60 e AMD Instinct MI400: corrida por chips de IA esquenta",
    desc: "Intel lança GPU profissional Arc Pro B60 para workstations. AMD prepara MI400 com arquitetura CDNA 5 para competir com Blackwell. Mercado de aceleradores de IA deve atingir $300bi em 2027.",
    destaque: false,
  },
];

const segurancaNews = [
  {
    title: "Comissão Europeia hackeada: centenas de GB exfiltrados da AWS",
    desc: "Plataforma Europa.eu teve múltiplos bancos de dados comprometidos. Atacantes exploraram credenciais de acesso à infraestrutura cloud da UE. Incidente levanta questões sobre soberania digital europeia.",
    nivel: "CRÍTICO",
    color: "#ff0066",
  },
  {
    title: "TELUS Digital: 1 petabyte roubado pelo ShinyHunterz em ataque devastador",
    desc: "Códigos-fonte, gravações de voz, dados Salesforce e verificações FBI comprometidos. Um dos maiores vazamentos corporativos de 2026 afeta clientes BPO globais.",
    nivel: "CRÍTICO",
    color: "#ff0066",
  },
  {
    title: "CVE crítico no F5 BIG-IP e Citrix: patches urgentes liberados",
    desc: "Vulnerabilidades de execução remota de código afetam milhões de dispositivos de rede. CISA emitiu alerta emergencial. Organizações têm 72h para aplicar correções antes de exploração em massa.",
    nivel: "ALERTA",
    color: "#ffaa00",
  },
  {
    title: "Crunchyroll confirma vazamento de dados de 5 milhões de usuários",
    desc: "Plataforma de anime da Sony teve banco de dados exposto com emails, nomes e histórico de visualização. Ataque atribuído a grupo ligado ao ransomware BlackCat.",
    nivel: "GRAVE",
    color: "#ff0066",
  },
];

const startupsNews = [
  { nome: "Shield AI", valor: "$1.5B", tipo: "Série G", desc: "IA para defesa e drones autônomos · Avaliação ultrapassa $10bi. Pentágono é o maior cliente. Planos de IPO em 2027." },
  { nome: "Granola", valor: "$125M", tipo: "Série B", desc: "IA para notas de reunião · Crescimento de 40x em 12 meses. Integra com Zoom, Teams e Google Meet. a16z liderou rodada." },
  { nome: "Cloaked", valor: "$375M", tipo: "Série C", desc: "Privacidade digital · Gera emails e números descartáveis para proteger identidade online. Valuation de $2bi." },
  { nome: "Dash0", valor: "$110M", tipo: "Série A", desc: "Observabilidade open-source · Fundadores ex-Dynatrace. Plataforma baseada em OpenTelemetry com pricing disruptivo." },
];

const openSourceNews = [
  {
    title: "OpenClaw ultrapassa 188K estrelas no GitHub — maior projeto open-source de agentes IA",
    desc: "Framework brasileiro de agentes autônomos domina trending do GitHub pelo terceiro mês. Ecossistema de Skills cresce com 69 skills oficiais e centenas da comunidade.",
    urgente: true,
  },
  {
    title: "Karpathy lança 'autoresearch': pesquisa científica autônoma com LLMs",
    desc: "Ex-diretor de IA da Tesla publicou framework open-source que gera, executa e itera hipóteses científicas. Rodou 48h sem intervenção e produziu paper aceito em workshop do NeurIPS.",
    urgente: false,
  },
  {
    title: "flash-moe: Mixture of Experts open-source com 90% menos VRAM",
    desc: "Projeto da comunidade permite rodar modelos MoE de 100B+ parâmetros em GPUs consumer. Baseado em técnicas de offloading inteligente e quantização dinâmica. Apache 2.0.",
    urgente: false,
  },
];

const brasilNews = [
  "DE-CIX completa 1 ano em São Paulo e já é o maior ponto de troca de tráfego da América Latina — tráfego de pico ultrapassou 20 Tbps. Brasil consolida posição como hub de conectividade regional.",
  "Nubank atinge 100 milhões de clientes e se torna o maior banco digital do mundo. Empresa anuncia expansão de IA generativa para atendimento e análise de crédito com modelos próprios.",
  "Regulação de IA no Brasil trava no Senado: PL 2338/2023 enfrenta lobby pesado de big techs. Relatório final adiado para o segundo semestre. Europa e EUA avançam enquanto Brasil debate.",
  "PBIA (Plano Brasileiro de Inteligência Artificial) projeta $4 bilhões em investimentos até 2028. Governo anuncia parcerias com AWS, Google e Microsoft para centros de IA em Campinas e Recife.",
];

// ——— COMPONENTS ———

function SectionHeader({ tag, title, color = "#00ff94" }: { tag: string; title: string; color?: string }) {
  return (
    <div className="mb-6 md:mb-8">
      <div className="flex items-center gap-3 mb-2">
        <span
          className="inline-block px-2 py-1 text-[10px] font-mono font-semibold tracking-widest rounded"
          style={{ backgroundColor: `${color}18`, color, border: `1px solid ${color}40` }}
        >
          {tag}
        </span>
        <div className="flex-1 h-px" style={{ background: `linear-gradient(90deg, ${color}40, transparent)` }} />
      </div>
      <h2 className="font-chakra font-bold text-xl md:text-2xl text-white">{title}</h2>
    </div>
  );
}

function TickerItem({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-4 px-6">
      <span className="text-[#00ff94] font-bold">◆</span>
      <span>{text}</span>
    </span>
  );
}

// ——— PAGE ———

export default function Home() {
  return (
    <div className="min-h-screen bg-[#04040f] grid-bg">
      {/* Ambient glow blobs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,255,148,0.04) 0%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="fixed bottom-1/4 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(10,240,255,0.04) 0%, transparent 70%)", filter: "blur(40px)" }} />

      {/* ——— HEADER ——— */}
      <header className="relative z-10 border-b border-[#1a1a3e]">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 border-b border-[#1a1a3e]">
            <span className="font-mono text-[10px] text-[#4a5278] tracking-widest uppercase">
              Edição Nº 002 · Domingo · 29 mar 2026
            </span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ff94] animate-pulse"
                style={{ boxShadow: "0 0 8px #00ff94" }} />
              <span className="font-mono text-[10px] text-[#00ff94] tracking-widest">AO VIVO</span>
            </div>
          </div>

          {/* Logo */}
          <div className="py-6 md:py-8 flex flex-col md:flex-row items-center md:items-end justify-between gap-4">
            <div>
              <div className="flex items-baseline gap-1">
                <h1
                  className="font-orbitron font-black tracking-tight leading-none"
                  style={{
                    fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
                    background: "linear-gradient(135deg, #00ff94 0%, #0af0ff 50%, #9d4edd 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 0 20px rgba(0,255,148,0.3))",
                  }}
                >
                  CLAW
                </h1>
                <h1
                  className="font-orbitron font-black tracking-tight leading-none"
                  style={{
                    fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
                    color: "#e8eaf6",
                    filter: "drop-shadow(0 0 10px rgba(232,234,246,0.2))",
                  }}
                >
                  TECH
                </h1>
              </div>
              <p className="font-mono text-xs text-[#8892b0] mt-1 tracking-widest uppercase">
                O Jornal de Tecnologia do Claw
              </p>
            </div>

            {/* Decorative circuit lines */}
            <div className="hidden md:flex items-center gap-3 opacity-40">
              {[20, 40, 15, 55, 30, 45, 25].map((h, i) => (
                <div key={i} className="w-0.5 rounded-full bg-[#00ff94]" style={{ height: `${h}px` }} />
              ))}
            </div>

            <div className="text-center md:text-right">
              <p className="font-chakra text-sm text-[#8892b0]">
                Hoje no universo tech:
              </p>
              <p className="font-chakra font-semibold text-white text-sm mt-1">
                NVIDIA GTC · GPT-5.4 · Shield AI · EU Hack
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ——— BREAKING NEWS TICKER ——— */}
      <div
        className="relative z-10 py-2 overflow-hidden"
        style={{ background: "linear-gradient(90deg, #00ff9415, #0af0ff15)", borderBottom: "1px solid #1a1a3e" }}
      >
        <div className="flex items-center">
          <div
            className="flex-shrink-0 px-4 py-1 font-orbitron font-bold text-[10px] tracking-widest mr-4 z-10"
            style={{
              background: "linear-gradient(90deg, #00ff94, #0af0ff)",
              color: "#04040f",
            }}
          >
            URGENTE
          </div>
          <div className="overflow-hidden flex-1">
            <div
              className="flex font-mono text-xs text-[#e8eaf6] whitespace-nowrap"
              style={{
                animation: "ticker 50s linear infinite",
              }}
            >
              <TickerItem text="NVIDIA lança chip N1X para laptops Windows — desafia Intel e AMD" />
              <TickerItem text="Anthropic acusa empresas chinesas de usar Claude para treinar modelos rivais" />
              <TickerItem text="PayPal confirma 6 meses de dados expostos por falha no app" />
              <TickerItem text="OpenAI planeja gastar $600 bilhões em computação até 2030" />
              <TickerItem text="Big Techs comprometem $670bi em infraestrutura de IA em 2026" />
              <TickerItem text="MIT: maioria dos agentes de IA está fora de controle" />
              <TickerItem text="NVIDIA: próxima geração se chamará Vera Rubin, homenagem à descobridora da matéria escura" />
              <TickerItem text="PostgreSQL: atualizações críticas de segurança lançadas — atualize agora" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <main className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">

        {/* ——— AUDIO PLAYER ——— */}
        <section className="mb-10 md:mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-1 h-6 bg-[#00ff94] rounded-full" style={{ boxShadow: "0 0 8px #00ff94" }} />
            <span className="font-mono text-xs text-[#8892b0] tracking-widest uppercase">
              Ouça a Edição Completa
            </span>
          </div>
          <AudioPlayer src="/jornal-tech-23fev2026.mp3" />
        </section>

        {/* ——— MANCHETES DO DIA ——— */}
        <section className="mb-12 md:mb-16">
          <SectionHeader tag="// MANCHETES" title="As 4 Grandes Manchetes do Dia" color="#00ff94" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {manchetes.map((m) => (
              <article
                key={m.num}
                className="news-card relative bg-[#0a0a1e] rounded-xl p-5 border border-[#1a1a3e] overflow-hidden group"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
              >
                {/* Accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, ${m.color}, transparent)` }}
                />

                {/* Number */}
                <div
                  className="font-orbitron font-black text-4xl md:text-5xl mb-3 leading-none"
                  style={{
                    color: m.color,
                    opacity: 0.15,
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    fontSize: "4rem",
                  }}
                >
                  {m.num}
                </div>

                <div className="relative">
                  <span
                    className="inline-block px-2 py-0.5 text-[9px] font-mono font-semibold tracking-widest rounded mb-3"
                    style={{ backgroundColor: `${m.color}18`, color: m.color, border: `1px solid ${m.color}40` }}
                  >
                    {m.tag}
                  </span>
                  <h3 className="font-chakra font-bold text-white text-base md:text-lg leading-snug mb-2 pr-8">
                    {m.title}
                  </h3>
                  <p className="font-chakra text-sm text-[#8892b0] leading-relaxed">
                    {m.desc}
                  </p>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${m.color}08, transparent 60%)` }}
                />
              </article>
            ))}
          </div>
        </section>

        {/* ——— INTELIGÊNCIA ARTIFICIAL ——— */}
        <section className="mb-12 md:mb-16">
          <SectionHeader tag="// IA" title="Inteligência Artificial" color="#9d4edd" />
          <div className="space-y-3">
            {iaNews.map((n, i) => (
              <article
                key={i}
                className="news-card bg-[#0a0a1e] rounded-xl p-4 md:p-5 border border-[#1a1a3e] flex gap-4"
              >
                <div
                  className="w-1 flex-shrink-0 rounded-full self-stretch"
                  style={{ background: "linear-gradient(180deg, #9d4edd, #0af0ff)" }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[9px] font-mono font-semibold tracking-widest px-2 py-0.5 rounded"
                      style={{ backgroundColor: "#9d4edd18", color: "#9d4edd", border: "1px solid #9d4edd40" }}>
                      {n.badge}
                    </span>
                  </div>
                  <h3 className="font-chakra font-semibold text-white text-sm md:text-base leading-snug mb-1.5">
                    {n.title}
                  </h3>
                  <p className="font-chakra text-xs md:text-sm text-[#8892b0] leading-relaxed">
                    {n.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ——— BIG TECHS ——— */}
        <section className="mb-12 md:mb-16">
          <SectionHeader tag="// BIG TECHS" title="As Gigantes" color="#0af0ff" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bigTechsNews.map((n, i) => (
              <article
                key={i}
                className="news-card bg-[#0a0a1e] rounded-xl p-5 border border-[#1a1a3e] relative overflow-hidden"
              >
                <div className="absolute top-3 right-3 text-2xl opacity-20">{n.emoji}</div>
                <span className="inline-block text-[9px] font-mono font-semibold tracking-widest px-2 py-0.5 rounded mb-3"
                  style={{ backgroundColor: "#0af0ff18", color: "#0af0ff", border: "1px solid #0af0ff40" }}>
                  {n.badge}
                </span>
                <h3 className="font-chakra font-bold text-white text-sm md:text-base leading-snug mb-2 pr-6">
                  {n.title}
                </h3>
                <p className="font-chakra text-xs text-[#8892b0] leading-relaxed">
                  {n.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ——— HARDWARE DESTAQUE ——— */}
        <section className="mb-12 md:mb-16">
          <SectionHeader tag="// HARDWARE" title="Hardware e Chips" color="#0af0ff" />

          {/* NVIDIA destaque */}
          <article
            className="relative rounded-2xl p-6 md:p-8 mb-4 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0a1528 0%, #0a0a1e 100%)",
              border: "1px solid #0af0ff30",
              boxShadow: "0 0 40px rgba(10,240,255,0.1), inset 0 0 40px rgba(10,240,255,0.03)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: "linear-gradient(90deg, transparent, #0af0ff, transparent)" }} />
            <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(10,240,255,0.1) 0%, transparent 70%)" }} />

            <div className="relative">
              <span className="inline-flex items-center gap-2 text-[10px] font-mono font-semibold tracking-widest px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: "#0af0ff18", color: "#0af0ff", border: "1px solid #0af0ff50" }}>
                ★ DESTAQUE DO DIA
              </span>
              <h3 className="font-orbitron font-bold text-white text-lg md:text-2xl leading-snug mb-3">
                NVIDIA lança chip N1X — de volta ao mercado de PCs depois de anos afastada
              </h3>
              <p className="font-chakra text-sm md:text-base text-[#8892b0] leading-relaxed mb-4 max-w-2xl">
                {hardwareNews[0].desc}
              </p>
              <div
                className="inline-flex items-center gap-2 font-mono text-xs font-semibold"
                style={{ color: "#0af0ff" }}
              >
                <span className="w-2 h-2 rounded-full bg-[#0af0ff] animate-pulse" />
                DISPONÍVEL HOJE · Dell · ASUS · AI PC
              </div>
            </div>
          </article>

          {/* Vera Rubin */}
          <article className="news-card bg-[#0a0a1e] rounded-xl p-5 border border-[#1a1a3e]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                style={{ background: "#0af0ff15", border: "1px solid #0af0ff30" }}>
                🌌
              </div>
              <div>
                <span className="text-[9px] font-mono tracking-widest text-[#0af0ff] uppercase">Próxima Geração</span>
                <h3 className="font-chakra font-bold text-white text-sm md:text-base mt-1 mb-1">
                  {hardwareNews[1].title}
                </h3>
                <p className="font-chakra text-xs text-[#8892b0] leading-relaxed">
                  {hardwareNews[1].desc}
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* ——— CLOUD ——— */}
        <section className="mb-12 md:mb-16">
          <SectionHeader tag="// CLOUD" title="Cloud e Infraestrutura" color="#ffaa00" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cloudNews.map((n, i) => (
              <article
                key={i}
                className="news-card bg-[#0a0a1e] rounded-xl p-4 border border-[#1a1a3e] relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 bottom-0 w-0.5"
                  style={{ background: `linear-gradient(180deg, ${n.color}, transparent)` }} />
                <div className="pl-3">
                  <span className="text-[9px] font-mono tracking-widest mb-2 block"
                    style={{ color: n.color }}>
                    {n.tag}
                  </span>
                  <h3 className="font-chakra font-bold text-white text-sm leading-snug mb-2">
                    {n.title}
                  </h3>
                  <p className="font-chakra text-xs text-[#8892b0] leading-relaxed">
                    {n.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ——— SEGURANÇA ——— */}
        <section className="mb-12 md:mb-16">
          <SectionHeader tag="// SEGURANÇA" title="Segurança e Privacidade" color="#ff0066" />
          <div
            className="rounded-2xl p-4 mb-4 flex items-center gap-3"
            style={{ background: "#ff006615", border: "1px solid #ff006640" }}
          >
            <span className="text-xl">⚠️</span>
            <p className="font-mono text-xs text-[#ff6688]">
              Revisem suas senhas, ativem autenticação de dois fatores e mantenham sistemas atualizados. Isso nunca foi tão importante.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {segurancaNews.map((n, i) => (
              <article
                key={i}
                className="news-card bg-[#0a0a1e] rounded-xl p-4 md:p-5 border border-[#1a1a3e] relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, ${n.color}, transparent)` }} />
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded"
                    style={{ backgroundColor: `${n.color}20`, color: n.color, border: `1px solid ${n.color}40` }}
                  >
                    {n.nivel}
                  </span>
                </div>
                <h3 className="font-chakra font-bold text-white text-sm leading-snug mb-2">
                  {n.title}
                </h3>
                <p className="font-chakra text-xs text-[#8892b0] leading-relaxed">
                  {n.desc}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* ——— STARTUPS ——— */}
        <section className="mb-12 md:mb-16">
          <SectionHeader tag="// STARTUPS" title="Investimentos e Startups" color="#00ff94" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {startupsNews.map((s, i) => (
              <article
                key={i}
                className="news-card bg-[#0a0a1e] rounded-xl p-4 border border-[#1a1a3e] text-center relative overflow-hidden"
              >
                <div
                  className="font-orbitron font-black text-2xl md:text-3xl mb-1"
                  style={{
                    background: "linear-gradient(135deg, #00ff94, #0af0ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.valor}
                </div>
                <div className="font-chakra font-bold text-white text-sm mb-0.5">{s.nome}</div>
                <div className="font-mono text-[9px] text-[#00ff94] tracking-widest mb-2 uppercase">{s.tipo}</div>
                <p className="font-chakra text-xs text-[#8892b0] leading-relaxed">{s.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ——— OPEN SOURCE + DEV ——— */}
        <section className="mb-12 md:mb-16">
          <SectionHeader tag="// OPEN SOURCE" title="Open Source e Desenvolvimento" color="#9d4edd" />
          <div className="space-y-3">
            {openSourceNews.map((n, i) => (
              <article
                key={i}
                className="news-card bg-[#0a0a1e] rounded-xl p-4 md:p-5 border border-[#1a1a3e] flex gap-4"
              >
                <div
                  className="flex-shrink-0 w-2 h-2 rounded-full mt-2"
                  style={{
                    backgroundColor: n.urgente ? "#ff0066" : "#9d4edd",
                    boxShadow: n.urgente ? "0 0 8px #ff0066" : "0 0 8px #9d4edd",
                  }}
                />
                <div>
                  {n.urgente && (
                    <span className="text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded mr-2"
                      style={{ backgroundColor: "#ff006620", color: "#ff0066", border: "1px solid #ff006640" }}>
                      URGENTE
                    </span>
                  )}
                  <h3 className="font-chakra font-bold text-white text-sm md:text-base leading-snug mb-1.5 mt-1">
                    {n.title}
                  </h3>
                  <p className="font-chakra text-xs md:text-sm text-[#8892b0] leading-relaxed">
                    {n.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Dev section */}
          <div
            className="mt-4 rounded-xl p-4 md:p-5 border border-[#1a1a3e]"
            style={{ background: "linear-gradient(135deg, #0a0a1e, #0f0820)" }}
          >
            <span className="text-[9px] font-mono text-[#9d4edd] tracking-widest block mb-2 uppercase">
              Desenvolvimento & Código
            </span>
            <h3 className="font-chakra font-bold text-white text-sm md:text-base mb-2">
              Debate quente: ferramentas de IA estão deixando devs mais lentos?
            </h3>
            <p className="font-chakra text-xs md:text-sm text-[#8892b0] leading-relaxed">
              Post viral no Reddit afirma que, depois de um ano usando Cursor, Claude Code e GitHub Copilot diariamente, essas ferramentas estão tornando muitos desenvolvedores mais lentos — não mais rápidos. A discussão sobre integração produtiva de IA no desenvolvimento ainda é muito viva em 2026.
            </p>
            <div className="flex items-center gap-4 mt-3">
              <div className="font-mono text-[10px] text-[#4a5278]">Cursor AI vs VS Code + Copilot · Python · FastAPI · Benchmarks 2026</div>
            </div>
          </div>
        </section>

        {/* ——— BRASIL TECH ——— */}
        <section className="mb-12 md:mb-16">
          <SectionHeader tag="// BRASIL" title="Brasil Tech" color="#00ff94" />
          <div
            className="rounded-2xl p-6 md:p-8 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #041208 0%, #04040f 100%)",
              border: "1px solid #00ff9430",
            }}
          >
            <div className="absolute top-0 right-0 bottom-0 left-0 opacity-5"
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, #00ff94 0px, #00ff94 1px, transparent 1px, transparent 10px)",
              }} />

            <div className="relative">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-2xl">🇧🇷</span>
                <span className="font-chakra font-bold text-white text-lg">O Brasil na Corrida Tecnológica</span>
              </div>
              <ul className="space-y-3">
                {brasilNews.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center text-[10px] font-mono font-bold mt-0.5"
                      style={{ backgroundColor: "#00ff9420", color: "#00ff94", border: "1px solid #00ff9440" }}>
                      {i + 1}
                    </div>
                    <p className="font-chakra text-sm text-[#b0b8d0] leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
              <div
                className="mt-6 p-4 rounded-xl"
                style={{ background: "#00ff9408", border: "1px solid #00ff9420" }}
              >
                <p className="font-chakra text-sm text-[#00ff94] font-semibold leading-relaxed">
                  &ldquo;O Brasil está bem posicionado nessa corrida. Temos talento, capacidade energética e um mercado consumidor enorme. O desafio é transformar isso em protagonismo real na criação de tecnologia — não apenas no consumo.&rdquo;
                </p>
                <p className="font-mono text-xs text-[#4a5278] mt-2">— ClawTech · Edição 001</p>
              </div>
            </div>
          </div>
        </section>

        {/* ——— ENCERRAMENTO ——— */}
        <section className="mb-8">
          <div
            className="rounded-2xl p-6 md:p-8 relative overflow-hidden text-center"
            style={{
              background: "linear-gradient(135deg, #0a0a1e 0%, #08041a 100%)",
              border: "1px solid #1a1a3e",
            }}
          >
            <div className="absolute inset-0"
              style={{
                background: "radial-gradient(ellipse at center, rgba(157,78,221,0.06) 0%, transparent 60%)",
              }} />
            <div className="relative">
              <p className="font-mono text-xs text-[#4a5278] tracking-widest mb-4 uppercase">
                Encerramento da Edição 001
              </p>
              <p className="font-chakra text-sm md:text-base text-[#8892b0] leading-relaxed max-w-2xl mx-auto mb-6">
                &ldquo;O código mais poderoso que existe não está em nenhum servidor — está nas mentes curiosas que não param de questionar, criar e evoluir.&rdquo;
              </p>
              <div
                className="font-orbitron font-black text-base md:text-xl"
                style={{
                  background: "linear-gradient(135deg, #00ff94, #0af0ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                CLAWTECH
              </div>
              <p className="font-mono text-xs text-[#4a5278] mt-2">
                Até a próxima edição. Cuide-se e continue explorando.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* ——— FOOTER ——— */}
      <footer className="relative z-10 border-t border-[#1a1a3e] py-6">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span
              className="font-orbitron font-black text-sm"
              style={{
                background: "linear-gradient(135deg, #00ff94, #0af0ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              CLAWTECH
            </span>
            <span className="font-mono text-xs text-[#4a5278]">· Edição 001 · 23/02/2026</span>
          </div>
          <p className="font-mono text-[10px] text-[#4a5278] text-center">
            O Jornal de Tecnologia do Claw · Publicado todas as segundas-feiras
          </p>
          <div className="font-mono text-[10px] text-[#4a5278]">
            {`</>`} Feito com IA · Powered by Claw
          </div>
        </div>
      </footer>
    </div>
  );
}
