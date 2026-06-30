import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,

  LayoutGrid,
  Headphones,
  MessageCircle,
  Bot,
  Webhook,
  Plus,
  Minus,
  Instagram,
  Facebook,
  Linkedin,
  BarChart3,
  Users,
  Bell,
  Quote,
} from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.png.asset.json";

/* ---------------- Shared CTA button ---------------- */
function PillButton({
  children,
  href = "#",
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "ghost";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center rounded-2xl border border-orange/40 bg-transparent font-medium text-foreground hover:border-orange hover:bg-orange/10 active:scale-95 transition-[background-color,border-color,transform] duration-200 pl-5 pr-2 py-2 gap-4 text-sm ${className}`}
    >
      <span className="transition-colors duration-200 group-hover:text-orange">{children}</span>
      <span className="flex items-center justify-center rounded-xl bg-orange text-background shadow-[0_6px_20px_-6px_var(--brand-orange)] p-2 transition-transform duration-300 group-hover:rotate-45">
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-45" />
      </span>
    </a>
  );
}


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bliv CRM — O CRM com WhatsApp que acompanha o ritmo da sua empresa" },
      {
        name: "description",
        content:
          "Bliv CRM unifica WhatsApp, Instagram e Facebook em um só funil. Sem burocracia, sem fidelidade. Mais de 10.000 times já vendem mais com a Bliv.",
      },
      { property: "og:title", content: "Bliv CRM — Venda mais sem burocracia" },
      {
        property: "og:description",
        content:
          "CRM com WhatsApp Cloud API oficial, agente de IA e funil de vendas. Comece grátis por 7 dias.",
      },
    ],
  }),
  component: Index,
});

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="sticky top-0 inset-x-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/70">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight italic">
            <span className="text-gradient-brand">bliv</span>
            <span className="text-foreground/70">.</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#inicio" className="hover:text-foreground transition">Início</a>
          <a href="#funcionalidades" className="hover:text-foreground transition">Funcionalidades</a>
          <a href="#planos" className="hover:text-foreground transition">Planos</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
          <a href="#contato" className="hover:text-foreground transition">Contato</a>
        </nav>
        <div className="flex items-center gap-3">
          <PillButton href="#contato" size="sm">Comece agora</PillButton>
        </div>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="inicio" className="relative pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange/60 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-orange" />
            </span>
            Lote fundador aberto · até 40% off no 1º ano
          </span>
          <h1 className="font-display mt-7 text-5xl md:text-7xl font-extrabold leading-[0.95]">
            O CRM com WhatsApp <br className="hidden md:block" />
            que <span className="text-gradient-brand italic font-bold">vende enquanto você dorme.</span>
          </h1>
          <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed mx-auto">
            Unifique WhatsApp, Instagram e Facebook num funil só. A Bliv qualifica, responde e
            agenda — seu time só entra na hora de fechar.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
            <PillButton href="#contato" size="lg">Começar grátis</PillButton>
            <a href="#planos" className="text-sm text-muted-foreground hover:text-foreground transition inline-flex items-center gap-2">
              Ver planos
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
        <DashboardMockup />
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative mt-14 mx-auto max-w-6xl">
      <img
        src={dashboardHero.url}
        alt="Painel da Bliv CRM mostrando métricas de campanhas, taxa de entrega e omnichannel"
        className="w-full h-auto select-none"
        draggable={false}
      />
    </div>
  );
}


function FloatingCard({
  children,
  icon,
  className = "",
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border border-border/60 bg-card/90 backdrop-blur px-3 py-2 shadow-card ${className}`}
    >
      <span className="w-8 h-8 rounded-lg bg-gradient-cta text-white flex items-center justify-center">{icon}</span>
      {children}
    </div>
  );
}

/* ---------------- TRUSTED ---------------- */

/* ---------------- BIG FEATURES (sticky left col) ---------------- */
function StickyFeatures() {
  return (
    <section id="funcionalidades" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header — editorial, assimétrico */}
        <div className="grid md:grid-cols-12 gap-8 items-end mb-14">
          <div className="md:col-span-7">
            <span className="eyebrow"><span className="text-orange">01 —</span> Por que a Bliv</span>
            <h2 className="font-display mt-4 text-4xl md:text-6xl font-extrabold leading-[1]">
              Menos abas abertas, <br />
              <span className="text-gradient-brand italic">mais negócios fechados.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-muted-foreground leading-relaxed">
              A gente construiu a Bliv ouvindo times de vendas brasileiros que cansaram de
              gambiarra com planilha, bot pirata e três assinaturas pra fazer uma coisa só.
            </p>
          </div>
        </div>

        {/* Bento assimétrico */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Card grande — funil visual */}
          <article className="md:col-span-8 group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-card p-8 shadow-card">
            <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-orange/10 blur-3xl group-hover:bg-orange/20 transition-colors" />
            <div className="relative z-10 max-w-md">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-orange/10 border border-orange/30 text-orange flex items-center justify-center">
                  <LayoutGrid className="w-5 h-5" />
                </span>
                <span className="eyebrow">Funil visual</span>
              </div>
              <h3 className="font-display mt-5 text-2xl font-bold">
                Arraste, solte, feche. Sem treinar ninguém.
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Um kanban honesto, com etapas que o seu time entende no primeiro dia. Sem 47
                campos obrigatórios, sem onboarding de 3 semanas.
              </p>
            </div>
            <div className="relative z-10 mt-7 grid grid-cols-4 gap-2">
              {["Novo", "Qualificado", "Proposta", "Fechado"].map((s, i) => (
                <div key={s} className="rounded-xl border border-border/60 bg-background/40 p-3">
                  <div className="text-[10px] text-muted-foreground">{s}</div>
                  <div className="mt-2 space-y-1.5">
                    {Array.from({ length: 3 - (i % 2) }).map((_, k) => (
                      <div key={k} className={`h-6 rounded-md ${i === 1 ? "bg-orange/15 border border-orange/30" : "bg-card/80 border border-border/60"}`} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>

          {/* Card vertical — IA */}
          <article className="md:col-span-4 group relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-pink/10 border border-pink/30 text-pink flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </span>
                <span className="eyebrow">Agente de IA</span>
              </div>
              <h3 className="font-display mt-5 text-2xl font-bold">
                Qualifica enquanto o time dorme.
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Responde, faz perguntas, agenda na agenda real do vendedor. Em português de gente,
                não de bot.
              </p>
            </div>
            <div className="mt-8">
              <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-2">
                <span>Leads qualificados sem humano</span>
                <span className="text-foreground font-semibold">73%</span>
              </div>
              <div className="h-1.5 rounded-full bg-background/80 overflow-hidden">
                <div className="h-full w-[73%] bg-gradient-cta" />
              </div>
            </div>
          </article>

          {/* Card pequeno — Suporte */}
          <article className="md:col-span-4 group relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-8">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-orange/10 border border-orange/30 text-orange flex items-center justify-center">
                <Headphones className="w-5 h-5" />
              </span>
              <span className="eyebrow">Suporte humano</span>
            </div>
            <h3 className="font-display mt-5 text-xl font-bold">Gente real, no WhatsApp.</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Resposta em minutos, não em tickets. Sem fila gringa, sem bot da própria empresa.
            </p>
          </article>

          {/* Card largo — Omnichannel */}
          <article className="md:col-span-8 group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-tr from-pink/[0.06] to-transparent p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-pink/10 border border-pink/30 text-pink flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </span>
                  <span className="eyebrow">Omnichannel de verdade</span>
                </div>
                <h3 className="font-display mt-5 text-2xl font-bold">
                  WhatsApp, Instagram e Messenger no mesmo inbox.
                </h3>
                <p className="mt-3 text-sm text-muted-foreground max-w-md">
                  Histórico unificado por contato. O cliente muda de canal, o seu time não perde o
                  fio da conversa.
                </p>
              </div>
              <div className="flex md:flex-col gap-3">
                {[
                  { i: MessageCircle, l: "WhatsApp", c: "text-emerald-400" },
                  { i: Instagram, l: "Instagram", c: "text-pink" },
                  { i: Facebook, l: "Messenger", c: "text-orange" },
                ].map((ch) => (
                  <div key={ch.l} className="flex items-center gap-2 rounded-xl border border-border/60 bg-background/40 px-3 py-2">
                    <ch.i className={`w-4 h-4 ${ch.c}`} />
                    <span className="text-xs">{ch.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COLLABORATORS / CHANNELS ---------------- */
function Channels() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-12">
          <div className="md:col-span-7">
            <span className="eyebrow"><span className="text-orange">02 —</span> Canais & API</span>
            <h2 className="font-display mt-4 text-4xl md:text-5xl font-extrabold leading-[1]">
              Seu time <span className="text-gradient-brand italic">sempre conectado</span>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-muted-foreground leading-relaxed">
            WhatsApp Cloud API oficial da Meta, número virtual ou as duas coisas. Sua operação
            não cai porque um canal cair.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-border/60 bg-gradient-card p-7 shadow-card">
            <h3 className="text-xl font-bold">WhatsApp oficial ou número virtual</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Conecte o número da empresa direto na API oficial da Meta ou crie um número virtual pra cada
              vertical. Sem risco de banimento.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-border/60 bg-background/40 p-3 text-center">
                <MessageCircle className="w-5 h-5 mx-auto text-orange" />
                <div className="text-xs font-semibold mt-2">Número oficial</div>
                <div className="text-[10px] text-muted-foreground">verificação Meta</div>
              </div>
              <div className="rounded-lg border border-border/60 bg-background/40 p-3 text-center">
                <Webhook className="w-5 h-5 mx-auto text-orange" />
                <div className="text-xs font-semibold mt-2">Virtual / API</div>
                <div className="text-[10px] text-muted-foreground">multi-canal</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-gradient-card p-7 shadow-card">
            <h3 className="text-xl font-bold">Painel de uso e cobrança</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Acompanhe consumo de mensagens, sessões e conversões em tempo real. Tudo num painel simples.
            </p>
            <div className="mt-6 rounded-lg border border-border/60 bg-background/40 p-3">
              <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-2">
                <span>Consumo do mês</span>
                <span>84%</span>
              </div>
              <div className="h-2 rounded-full bg-background overflow-hidden">
                <div className="h-full w-[84%] bg-gradient-cta" />
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                {[
                  { l: "Sessões", v: "12.4k" },
                  { l: "Templates", v: "3.1k" },
                  { l: "Convert.", v: "8.2%" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-sm font-bold">{s.v}</div>
                    <div className="text-[10px] text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <PillButton href="#contato">Conectar agora</PillButton>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const featured = {
    n: "Vitor Leal",
    r: "CMO · Holos",
    q: "Trocamos três ferramentas pela Bliv e cortamos R$ 4 mil por mês. Em duas semanas o time inteiro já estava no funil novo — sem treinamento longo, sem dor.",
  };
  const others = [
    {
      n: "Guilherme Azevedo",
      r: "Head de Vendas · Nexa",
      q: "O agente de IA qualifica antes do humano. Tempo médio de resposta caiu de 6h pra 4min.",
    },
    {
      n: "Luana Góes",
      r: "Sócia · BPM",
      q: "Suporte rápido, painel simples, WhatsApp oficial funcionando. Era exatamente isso que faltava.",
    },
  ];
  return (
    <section className="py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-14">
          <div className="md:col-span-7">
            <span className="eyebrow"><span className="text-orange">03 —</span> Quem já usa</span>
            <h2 className="font-display mt-4 text-4xl md:text-5xl font-extrabold leading-[1]">
              A gente preferia que <br/>
              <span className="text-gradient-brand italic">eles falassem por nós.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-5">
          {/* Depoimento principal — editorial */}
          <article className="md:col-span-7 relative rounded-3xl border border-border/60 bg-gradient-card p-10 shadow-card overflow-hidden">
            <Quote className="absolute -top-2 -left-2 w-28 h-28 text-orange/10" />
            <p className="font-display relative text-2xl md:text-3xl leading-snug font-bold text-foreground/95">
              {featured.q}
            </p>
            <div className="relative mt-8 flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-gradient-cta" />
              <div>
                <div className="text-sm font-semibold">{featured.n}</div>
                <div className="text-xs text-muted-foreground">{featured.r}</div>
              </div>
            </div>
          </article>

          {/* Coluna lateral — dois depoimentos curtos + métrica */}
          <div className="md:col-span-5 grid gap-5">
            {others.map((t) => (
              <article key={t.n} className="rounded-3xl border border-border/60 bg-card/40 p-6">
                <p className="text-sm text-foreground/90 leading-relaxed">{t.q}</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-gradient-cta" />
                  <div>
                    <div className="text-xs font-semibold">{t.n}</div>
                    <div className="text-[11px] text-muted-foreground">{t.r}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
function Pricing() {
  const [tab, setTab] = useState<"start" | "team" | "scale">("team");

  const tableByTab: Record<string, { name: string; price: string; bullets: string[]; tag?: string }[]> = {
    start: [
      { name: "Solo", price: "97", bullets: ["1 atendente", "1 número WhatsApp", "500 contatos", "Funil básico"] },
      { name: "Start", price: "197", tag: "popular", bullets: ["3 atendentes", "1 número WhatsApp", "3k contatos", "Funil + tags"] },
      { name: "Start +", price: "297", bullets: ["5 atendentes", "2 números", "10k contatos", "Webhooks"] },
    ],
    team: [
      { name: "Growth", price: "397", bullets: ["10 atendentes", "Funil avançado", "Bot de fluxo", "Integrações"] },
      { name: "Growth +", price: "597", tag: "popular", bullets: ["15 atendentes", "Agente de IA", "API pública", "Onboarding"] },
      { name: "Pro", price: "897", bullets: ["25 atendentes", "Multi-conta", "SLA garantido", "Relatórios avançados"] },
    ],
    scale: [
      { name: "Scale", price: "1.297", bullets: ["50 atendentes", "Multi-marca", "IA dedicada", "CSM dedicado"] },
      { name: "Enterprise", price: "1.997", tag: "popular", bullets: ["Ilimitado", "SSO + auditoria", "SLA 99,9%", "Onboarding white-glove"] },
      { name: "Custom", price: "sob consulta", bullets: ["Sob medida", "Infra dedicada", "Compliance", "Contrato anual"] },
    ],
  };

  const tabs: { id: typeof tab; label: string }[] = [
    { id: "start", label: "Começando" },
    { id: "team", label: "Times de vendas" },
    { id: "scale", label: "Escala" },
  ];

  return (
    <section id="planos" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-8 items-end mb-10">
          <div className="md:col-span-7">
            <span className="eyebrow"><span className="text-orange">04 —</span> Planos & Preços</span>
            <h2 className="font-display mt-4 text-4xl md:text-5xl font-extrabold leading-[1]">
              Mensal, sem multa, <br/>
              <span className="text-gradient-brand italic">sem letra miúda.</span>
            </h2>
          </div>
          <p className="md:col-span-4 md:col-start-9 text-muted-foreground leading-relaxed">
            Cancele direto pelo painel quando quiser. Sem taxa de adesão, sem contrato anual.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-card/60 p-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`text-xs sm:text-sm px-4 py-2 rounded-full transition ${
                  tab === t.id
                    ? "bg-gradient-cta text-white shadow-glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-gradient-card shadow-card p-6 md:p-8">
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="text-xs text-muted-foreground">Escolha o tamanho do time</div>
              <div className="text-sm text-muted-foreground/80">
                Todos os planos incluem WhatsApp Cloud API oficial, funil de vendas e suporte humano.
              </div>
            </div>
            <a href="#contato" className="hidden sm:inline text-xs text-orange hover:underline">
              Ver comparativo completo →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {tableByTab[tab].map((p) => (
              <div
                key={p.name}
                className={`relative rounded-xl border p-5 ${
                  p.tag
                    ? "border-orange/50 bg-background/60 ring-1 ring-orange/30"
                    : "border-border/60 bg-background/40"
                }`}
              >
                {p.tag && (
                  <span className="absolute -top-2 right-4 bg-gradient-cta text-white text-[10px] font-semibold rounded-full px-2 py-0.5">
                    mais popular
                  </span>
                )}
                <div className="text-sm text-muted-foreground">{p.name}</div>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-xs text-muted-foreground">R$</span>
                  <span className="text-3xl font-bold">{p.price}</span>
                  <span className="text-xs text-muted-foreground">/mês</span>
                </div>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-orange shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <PillButton href="#contato" size="sm" className="w-full justify-center">Quero o {p.name}</PillButton>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <PillButton href="#contato">Falar com vendas</PillButton>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MEDIA ---------------- */
function Media() {
  return (
    <section className="py-16 px-6 bg-card/30 border-y border-border/40">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm text-muted-foreground">Bliv na mídia</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-70">
          <span className="text-xl font-serif italic">Brazil Journal</span>
          <span className="text-2xl font-serif font-bold tracking-tight">Valor</span>
          <span className="text-xl font-semibold">startups<span className="text-orange">.</span></span>
          <span className="text-lg font-semibold tracking-tight">NeoFeed</span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const items = [
    {
      q: "A Bliv usa WhatsApp oficial?",
      a: "Sim. Conectamos seu número diretamente na API Oficial da Meta (Cloud API), sem risco de banimento.",
    },
    {
      q: "Preciso ter equipe técnica pra implantar?",
      a: "Não. Em qualquer plano pago, o time da Bliv faz o onboarding completo: conexão, primeiro funil e treinamento.",
    },
    {
      q: "Posso testar antes de assinar?",
      a: "Sim — 7 dias grátis, sem cartão de crédito. Você só paga se decidir continuar.",
    },
    {
      q: "Tem fidelidade ou multa?",
      a: "Zero. É mensal e você cancela direto pelo painel quando quiser.",
    },
    {
      q: "Funciona com Instagram e Facebook também?",
      a: "Sim. Bliv é omnichannel: WhatsApp, Instagram Direct, Messenger e formulário do site num só inbox.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 px-6">
      <div className="mx-auto max-w-5xl grid md:grid-cols-[1fr_1.6fr] gap-12">
        <div>
          <span className="eyebrow"><span className="text-orange">05 —</span> Dúvidas frequentes</span>
          <h2 className="font-display mt-4 text-4xl md:text-5xl font-extrabold leading-[1]">
            Tudo que você <span className="text-gradient-brand italic">precisa saber</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-sm leading-relaxed">
            Não achou sua resposta? Chama a gente no WhatsApp — gente de verdade responde em
            poucos minutos.
          </p>
        </div>

        <div className="space-y-2">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <button
                key={it.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left rounded-xl border border-border/60 bg-card/60 px-5 py-4 hover:border-orange/40 transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-medium">{it.q}</span>
                  {isOpen ? (
                    <Minus className="w-4 h-4 text-orange shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-muted-foreground shrink-0" />
                  )}
                </div>
                {isOpen && <p className="mt-3 text-sm text-muted-foreground">{it.a}</p>}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section id="contato" className="py-24 px-6 bg-card/30 border-y border-border/40">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight italic">
          <span className="text-gradient-brand">bliv</span>, bliv!
        </h2>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
          Junte-se a milhares de times que pararam de perder leads no WhatsApp. Comece grátis em
          menos de 5 minutos.
        </p>
        <div className="mt-8 flex justify-center">
          <PillButton href="#" size="lg">Comece agora</PillButton>
        </div>
        <div className="mt-4 flex items-center justify-center gap-6 text-xs text-muted-foreground">
          <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-orange" /> Sem cartão</span>
          <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-orange" /> 7 dias grátis</span>
          <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-orange" /> Cancele quando quiser</span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  const cols = [
    {
      t: "Produto",
      l: ["Funcionalidades", "Planos", "WhatsApp Cloud API", "Agente de IA", "Integrações"],
    },
    { t: "Empresa", l: ["Sobre", "Carreiras", "Blog", "Imprensa"] },
    { t: "Recursos", l: ["Documentação", "Status", "Central de ajuda", "Comparativo"] },
    { t: "Legal", l: ["Termos de uso", "Política de privacidade", "LGPD", "Contato"] },
  ];
  return (
    <footer className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-[1.4fr_repeat(4,1fr)] gap-10">
          <div>
            <span className="text-2xl font-bold tracking-tight italic">
              <span className="text-gradient-brand">bliv</span>
              <span className="text-foreground/70">.</span>
            </span>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              O CRM com WhatsApp que acompanha o ritmo da sua empresa.
            </p>
            <div className="mt-5 flex items-center gap-3 text-muted-foreground">
              <a href="#" className="hover:text-foreground"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:text-foreground"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="hover:text-foreground"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.t}>
              <div className="text-sm font-semibold mb-3">{c.t}</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {c.l.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-foreground transition">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Bliv CRM. Todos os direitos reservados.</span>
          <span>Feito no Brasil 🇧🇷</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- ROOT ---------------- */
function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      
      <Nav />
      <Hero />
      <StickyFeatures />
      <Channels />
      <Testimonials />
      <Pricing />
      <Media />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
