import AudioPlayer from "./components/AudioPlayer";

// ——— DATA ———
const manchetes = [
  {
    num: "01",
    title: "NVIDIA entra de volta no mercado de laptops com chips de IA próprios para Windows",
    desc: "Chip N1X desafia Intel e AMD diretamente no território deles, chegando em laptops Dell e ASUS.",
    tag: "HARDWARE",
    color: "#0af0ff",
  },
  {
    num: "02",
    title: "Anthropic acusa empresas chinesas de usar o Claude para treinar modelos rivais",
    desc: "A guerra tecnológica entre EUA e China ganha mais um capítulo com violação flagrante de termos de uso.",
    tag: "INTELIGÊNCIA ARTIFICIAL",
    color: "#9d4edd",
  },
  {
    num: "03",
    title: "PayPal confirma brecha de segurança que expôs dados por quase 6 meses",
    desc: "Erro no próprio aplicativo deixou informações pessoais de clientes expostas por meio ano inteiro.",
    tag: "SEGURANÇA",
    color: "#ff0066",
  },
  {
    num: "04",
    title: "OpenAI planeja investir $600 bilhões em infraestrutura de computação até 2030",
    desc: "Investimento diretamente ligado ao IPO que pode avaliar a empresa em cifras estratosféricas.",
    tag: "BIG TECHS",
    color: "#ffaa00",
  },
];

const iaNews = [
  {
    title: "Claude Code Security: IA que varre código em busca de vulnerabilidades",
    desc: "A Anthropic lançou ferramenta que escaneia bases de código, classifica vulnerabilidades críticas e sugere patches prontos. Disponível para Enterprise, Team e projetos open source. Ações de empresas de cibersegurança despencaram na noite do anúncio.",
    badge: "ANTHROPIC",
  },
  {
    title: "Engenheiro do Claude Code: 'IA vai assumir quase todos os empregos na internet nos EUA'",
    desc: "Boris Cherny, criador do Claude Code, disse em entrevista polêmica que a nova geração de agentes de IA vai transformar completamente o mercado de trabalho digital. Suas palavras: 'Vai ser doloroso'.",
    badge: "IMPACTO SOCIAL",
  },
  {
    title: "Pesquisa do MIT: grande maioria dos agentes de IA está fora de controle",
    desc: "Estudo aponta que agentes atuais são rápidos demais, com pouca supervisão e dependentes de apenas três modelos proprietários: GPT, Claude e Gemini. Pesquisadores pedem mais cautela e governança urgente.",
    badge: "PESQUISA",
  },
  {
    title: "OpenAI no AI Summit da Índia: apresenta Sora e fecha acordo com Tata",
    desc: "A empresa confirmou que será o primeiro cliente do negócio de data centers da Tata Consultancy Services, enquanto apresentou o modelo de geração de vídeo Sora para lideranças do setor.",
    badge: "OPENAI",
  },
  {
    title: "EUA lança 'Tech Corps' para exportar pilha de IA americana ao mundo",
    desc: "Iniciativa inspirada no Peace Corps busca ajudar outros países a adotarem tecnologia americana de IA — jogada geopolítica direta para reduzir influência chinesa no mercado global.",
    badge: "GEOPOLÍTICA",
  },
];

const bigTechsNews = [
  {
    title: "Apple prepara virada na estratégia de IA com foco em Visual Intelligence",
    desc: "Tim Cook sinalizou que a câmera que entende o mundo ao redor será o grande diferencial dos próximos wearables. Apple também confirma pelo menos 5 lançamentos na semana de 2 a 4 de março — incluindo novos MacBooks.",
    badge: "APPLE",
    emoji: "🍎",
  },
  {
    title: "Microsoft, Meta, Amazon e Alphabet: $670bi em infraestrutura de IA em 2026",
    desc: "As quatro gigantes anunciaram planos conjuntos de investimento para o ano. Para ter escala: mais do que o custo total do programa Artemis da NASA multiplicado várias vezes.",
    badge: "INVESTIMENTO",
    emoji: "💰",
  },
  {
    title: "Meta sob pressão: 1 em cada 5 usuários de 13-15 anos viu nudez no Instagram",
    desc: "Documento judicial revelou números alarmantes sobre exposição de menores a conteúdo inapropriado. O caso reforça debates sobre responsabilidade das plataformas na proteção de adolescentes.",
    badge: "META",
    emoji: "⚠️",
  },
  {
    title: "Michael Burry critica ritmo de gastos das Big Techs com IA",
    desc: "O famoso investidor de 'A Grande Aposta' questiona quando esse gasto vai parar e alerta que Amazon, Google, Meta, Microsoft e NVIDIA estão queimando caixa a um ritmo preocupante.",
    badge: "MERCADO",
    emoji: "📉",
  },
];

const cloudNews = [
  {
    title: "Claude Sonnet 4.6 chega ao Amazon Bedrock; Kiro disponível no GovCloud",
    desc: "AWS publicou roundup semanal com novidades: modelo mais recente da Anthropic integrado ao Bedrock e IDE de IA Kiro expandida para regiões governamentais dos EUA.",
    tag: "AWS",
    color: "#ffaa00",
  },
  {
    title: "AWS e Google firmam parceria incomum para prevenir grandes quedas de rede",
    desc: "Colaboração surgiu após outage em dezembro que impactou Ring, Disney+ e bancos de dados empresariais simultaneamente. AWS ainda representa 57% do lucro operacional total da Amazon.",
    tag: "PARCERIA",
    color: "#0af0ff",
  },
  {
    title: "Azure investe em infraestrutura isolada exclusiva para cargas de trabalho de IA",
    desc: "Microsoft aposta em arquitetura separada da nuvem de propósito geral como diferencial competitivo frente às recentes quedas de serviço da AWS.",
    tag: "MICROSOFT",
    color: "#9d4edd",
  },
];

const hardwareNews = [
  {
    title: "NVIDIA lança chip N1X para laptops Windows — desafio direto à Intel e AMD",
    desc: "Processadores ARM para laptops chegam hoje em modelos Dell e ASUS na linha 'AI PC'. Projetados para executar modelos de IA on-device com melhor autonomia. A NVIDIA planeja expandir para workstations e servidores em 2026–2027.",
    destaque: true,
  },
  {
    title: "Próxima geração NVIDIA: arquitetura 'Vera Rubin'",
    desc: "Nome homenageia a astrônoma americana que descobriu a matéria escura. A nova arquitetura sucede a atual e promete saltos significativos em performance para IA.",
    destaque: false,
  },
];

const segurancaNews = [
  {
    title: "PayPal: 6 meses com dados de clientes expostos por erro no app",
    desc: "A empresa confirmou falha no próprio aplicativo que deixou informações pessoais vazando por meio ano. A brecha já resultou em transações fraudulentas e a empresa está sendo investigada por reguladores.",
    nivel: "CRÍTICO",
    color: "#ff0066",
  },
  {
    title: "IA automatiza ataque: +600 dispositivos Fortinet FortiGate comprometidos em 55 países",
    desc: "Ator malicioso potencializado por IA explorou credenciais fracas e portas expostas em larga escala. Segundo a Amazon, a IA está sendo usada para automatizar ataques — o que muda completamente o jogo da cibersegurança.",
    nivel: "ALERTA",
    color: "#ffaa00",
  },
  {
    title: "Vikor Scientific: 140 mil pessoas com dados médicos expostos",
    desc: "Empresa americana de diagnóstico médico revelou violação de dados que afetou quase 140 mil pessoas. Informações de saúde são extremamente sensíveis e podem ter consequências devastadoras para as vítimas.",
    nivel: "GRAVE",
    color: "#ff0066",
  },
  {
    title: "Ransomware Hellcat invade Ascom e exfiltra 44 GB de dados",
    desc: "O grupo invadiu sistemas da empresa e roubou dados sensíveis da infraestrutura de ticketing. A Ascom está investigando o incidente.",
    nivel: "ALERTA",
    color: "#ffaa00",
  },
];

const startupsNews = [
  { nome: "Flinn.ai", valor: "$20M", tipo: "Série A", desc: "IA para saúde · Startup austríaca liderada pelo fundo alemão HV Capital. Expansão de equipe e adoção em clínicas europeias." },
  { nome: "Stacks", valor: "$35M", tipo: "Total captado", desc: "Automação financeira empresarial · Seed de $12M há menos de um ano, agora alcança $35M total." },
  { nome: "Upwind", valor: "$250M", tipo: "Série B", desc: "Cibersegurança em cloud · Liderada pela Bessemer Venture Partners. Status: unicórnio." },
  { nome: "Europa 2026", valor: "$6,18bi", tipo: "YTD em 374 rodadas", desc: "Mercado europeu · Dados Tracxn até fevereiro. O ano mal começou." },
];

const openSourceNews = [
  {
    title: "PostgreSQL: atualizações críticas de segurança — atualize agora",
    desc: "Versões 18.2, 17.8, 16.12, 15.16 e 14.21 lançadas com correções urgentes. Se você roda Postgres em produção, atualize imediatamente.",
    urgente: true,
  },
  {
    title: "Python 2026: Polars, PyTorch, TensorFlow e imports preguiçosos",
    desc: "Avanços importantes em bibliotecas de análise de dados e ML. Novidades na linguagem como imports preguiçosos e free-threading prometem performance superior para aplicações concorrentes.",
    urgente: false,
  },
  {
    title: "Anthony Fu: 'Open source é maratona, não corrida de 100m'",
    desc: "Maintainer de vários projetos populares publicou lembrete importante sobre sustentabilidade e burnout na comunidade open source. Um recado que toda a comunidade tech deveria ouvir.",
    urgente: false,
  },
];

const brasilNews = [
  "Big Techs planejam investir $670bi em infraestrutura de IA em 2026 — parte dos data centers está sendo construída em países emergentes, e o Brasil compete ativamente com incentivos fiscais e capacidade energética.",
  "Apple reformula estratégia de IA com foco em dispositivos vestíveis e visual intelligence. O mercado brasileiro de iPhones é um dos maiores do mundo — as novidades chegam aqui com força total.",
  "Google anunciou parcerias no India AI Summit e há expectativa de acordos similares com universidades brasileiras ao longo de 2026.",
  "OpenAI planeja $600bi em capacidade computacional até 2030 — anúncio amplamente repercutido nos meios especializados brasileiros, ligado ao IPO que pode acontecer ainda este ano.",
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
              Edição Nº 001 · Segunda-feira · 23 fev 2026
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
                NVIDIA · Anthropic · OpenAI · PayPal
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
