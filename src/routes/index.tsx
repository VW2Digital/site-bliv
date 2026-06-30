import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  Sparkles,
  TrendingUp,
  Settings2,
  LayoutGrid,
  Headphones,
  MessageCircle,
  Bot,
  Webhook,
  Plus,
  Minus,
  Star,
  Instagram,
  Facebook,
  Linkedin,
  BarChart3,
  Users,
  Bell,
} from "lucide-react";

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
function TopBar() {
  return (
    <div className="w-full bg-gradient-cta text-white text-xs">
      <div className="mx-auto max-w-7xl px-6 h-9 flex items-center justify-center gap-3">
        <span className="inline-flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          Aproveite o lote fundador — economize até 40% no primeiro ano
        </span>
        <a href="#planos" className="font-semibold underline underline-offset-2">
          Ver planos
        </a>
      </div>
    </div>
  );
}

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
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground hidden sm:block">
            Entrar
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-cta text-white text-sm font-semibold px-4 py-2 shadow-glow hover:opacity-95 transition"
          >
            Comece agora
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="inicio" className="relative pt-20 pb-16 overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight">
          CRM com WhatsApp para empresas:
          <br />
          <span className="text-gradient-brand">sem burocracia</span> e sem complicação
        </h1>
        <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          Centralize WhatsApp, Instagram e Facebook num só funil. A Bliv responde, qualifica e vende
          enquanto seu time foca no que importa.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-cta text-white text-base font-semibold px-7 py-4 shadow-glow hover:opacity-95 transition"
          >
            Comece agora <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <DashboardMockup />
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative mt-14 mx-auto max-w-5xl">
      <div className="relative rounded-2xl border border-border/60 bg-gradient-card shadow-card overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/60">
          <span className="w-3 h-3 rounded-full bg-destructive/80" />
          <span className="w-3 h-3 rounded-full bg-orange/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
          <span className="ml-3 text-xs text-muted-foreground">app.blivcrm.com / painel</span>
        </div>
        <div className="grid grid-cols-12 gap-3 p-4">
          <aside className="col-span-3 rounded-lg bg-background/60 p-3 space-y-1.5">
            <div className="text-[10px] uppercase text-muted-foreground/60 px-2 mb-2">Conta Matriz</div>
            {[
              { l: "Início", a: false },
              { l: "Conversas", a: true },
              { l: "Funil", a: false },
              { l: "Contatos", a: false },
              { l: "Automações", a: false },
              { l: "Relatórios", a: false },
            ].map((i) => (
              <div
                key={i.l}
                className={`text-xs px-2 py-1.5 rounded-md ${
                  i.a ? "bg-gradient-cta text-white" : "text-muted-foreground"
                }`}
              >
                {i.l}
              </div>
            ))}
          </aside>
          <main className="col-span-9 space-y-3">
            <div className="grid grid-cols-3 gap-3">
              {[
                { l: "Leads hoje", v: "84", d: "+18%" },
                { l: "Em conversa", v: "126", d: "+9%" },
                { l: "Convertidos", v: "37", d: "+24%" },
              ].map((s) => (
                <div key={s.l} className="rounded-lg bg-background/60 p-3">
                  <div className="text-[10px] text-muted-foreground">{s.l}</div>
                  <div className="text-2xl font-bold mt-1">{s.v}</div>
                  <div className="text-[10px] text-orange mt-0.5">{s.d}</div>
                </div>
              ))}
            </div>
            <div className="rounded-lg bg-background/60 p-4 h-32 flex items-end gap-2">
              {[40, 65, 50, 80, 55, 90, 70, 95, 60, 88, 72, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-cta opacity-80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </main>
        </div>
      </div>

      <FloatingCard className="hidden md:flex absolute -top-4 -left-10" icon={<Bell className="w-4 h-4" />}>
        <div>
          <div className="text-xs font-semibold">8 novas conversas</div>
          <div className="text-[10px] text-muted-foreground">aguardando resposta</div>
        </div>
      </FloatingCard>
      <FloatingCard className="hidden md:flex absolute top-20 -left-12" icon={<Users className="w-4 h-4" />}>
        <div>
          <div className="text-xs font-semibold">+312 leads</div>
          <div className="text-[10px] text-muted-foreground">qualificados pela IA</div>
        </div>
      </FloatingCard>
      <FloatingCard className="hidden md:flex absolute -bottom-4 -left-6" icon={<BarChart3 className="w-4 h-4" />}>
        <div>
          <div className="text-xs font-semibold">R$ 84k em pipeline</div>
          <div className="text-[10px] text-muted-foreground">+24% no mês</div>
        </div>
      </FloatingCard>
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
function TrustedBy() {
  const brands = ["Loovi", "Husky", "Beep", "OmniBonus", "Mailus", "Avante", "Pres.", "Tinga", "Lika"];
  return (
    <section className="py-14 px-6">
      <p className="text-center text-sm text-muted-foreground">
        Mais de 10.000 times de vendas já operam com a Bliv
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
        {brands.map((b) => (
          <span key={b} className="text-lg font-semibold tracking-tight text-foreground/70">
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- BIG FEATURES (sticky left col) ---------------- */
function StickyFeatures() {
  const cards = [
    {
      tag: "Reduza custos",
      icon: TrendingUp,
      title: "Reduza custos",
      desc:
        "Pare de pagar 3 ferramentas (CRM, chatbot, atendimento). Com a Bliv, tudo num só lugar — e por uma fração do preço.",
      visual: (
        <div className="grid grid-cols-3 gap-2 mt-5">
          {["−42%", "−28%", "1 só"].map((t, i) => (
            <div
              key={i}
              className="rounded-lg border border-border/60 bg-background/40 py-3 text-center"
            >
              <div className="text-lg font-bold text-gradient-brand">{t}</div>
              <div className="text-[10px] text-muted-foreground">
                {i === 0 ? "no CAC" : i === 1 ? "no churn" : "ferramenta"}
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      tag: "Gestão simples",
      icon: Settings2,
      title: "Gestão simples",
      desc:
        "Painel claro, funil visual e relatórios que qualquer gestor entende. Sem planilha, sem retrabalho.",
      visual: (
        <div className="mt-5 space-y-2">
          {[
            { n: "Maria S.", c: "Atendendo agora", t: "online" },
            { n: "João P.", c: "Qualificando lead", t: "online" },
            { n: "Ana R.", c: "Em pausa", t: "away" },
          ].map((u) => (
            <div
              key={u.n}
              className="flex items-center justify-between rounded-lg border border-border/60 bg-background/40 px-3 py-2"
            >
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-gradient-cta" />
                <div>
                  <div className="text-xs font-semibold">{u.n}</div>
                  <div className="text-[10px] text-muted-foreground">{u.c}</div>
                </div>
              </div>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full ${
                  u.t === "online" ? "bg-emerald-500/15 text-emerald-400" : "bg-orange/15 text-orange"
                }`}
              >
                {u.t}
              </span>
            </div>
          ))}
        </div>
      ),
    },
    {
      tag: "Tudo no mesmo lugar",
      icon: LayoutGrid,
      title: "Tudo no mesmo lugar",
      desc:
        "WhatsApp, Instagram, Facebook e formulário do site num único inbox. Seu time responde sem trocar de aba.",
      visual: (
        <div className="mt-5 rounded-lg border border-border/60 bg-background/40 p-3 space-y-2">
          {[
            { i: MessageCircle, c: "WhatsApp · Maria", m: "Oi, recebi o orçamento…" },
            { i: Instagram, c: "Instagram · João", m: "Tem desconto pra anual?" },
            { i: Facebook, c: "Messenger · Ana", m: "Quero falar com um humano." },
          ].map((m) => (
            <div key={m.c} className="flex items-center gap-2 text-xs">
              <span className="w-7 h-7 rounded-md bg-gradient-cta text-white flex items-center justify-center">
                <m.i className="w-3.5 h-3.5" />
              </span>
              <div className="flex-1">
                <div className="font-semibold">{m.c}</div>
                <div className="text-[11px] text-muted-foreground truncate">{m.m}</div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      tag: "Suporte de verdade",
      icon: Headphones,
      title: "Suporte de verdade",
      desc:
        "Gente real, em português, no WhatsApp. Resposta em minutos — não em dias. Sem chat-bot da concorrência.",
      visual: (
        <div className="mt-5 space-y-2">
          <div className="rounded-2xl rounded-tl-sm bg-background/60 border border-border/60 px-3 py-2 text-xs max-w-[80%]">
            Oi! Travou minha automação, consegue dar uma olhada?
          </div>
          <div className="rounded-2xl rounded-tr-sm bg-gradient-cta text-white px-3 py-2 text-xs max-w-[80%] ml-auto">
            Já tô olhando! Resolvido em 3 min ✨
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-24 px-6 bg-card/30 border-y border-border/40">
      <div className="mx-auto max-w-6xl grid md:grid-cols-[1fr_1.4fr] gap-12">
        <div className="md:sticky md:top-24 self-start">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            Por que a Bliv
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
            O CRM que acompanha o <span className="text-gradient-brand">ritmo da sua empresa</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Construído pra times brasileiros que vendem por WhatsApp e cansaram de gambiarra.
          </p>
          <a
            href="#contato"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-cta text-white text-sm font-semibold px-5 py-3 shadow-glow hover:opacity-95 transition"
          >
            Começar agora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="space-y-5">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-border/60 bg-gradient-card p-7 shadow-card"
            >
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-gradient-cta text-white flex items-center justify-center">
                  <c.icon className="w-4 h-4" />
                </span>
                <span className="text-xs uppercase tracking-wide text-muted-foreground">{c.tag}</span>
              </div>
              <h3 className="mt-4 text-2xl font-bold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              {c.visual}
            </div>
          ))}
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
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            Canais & API
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Times <span className="text-gradient-brand">sempre conectados</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Conecte WhatsApp Cloud API oficial ou número virtual via integração. Sua operação não para.
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
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-cta text-white text-sm font-semibold px-5 py-3 shadow-glow hover:opacity-95 transition"
          >
            Conectar agora <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const items = [
    {
      n: "Vitor Leal",
      r: "CMO · Holos",
      q: "Trocamos 3 ferramentas pela Bliv e cortamos R$ 4k/mês. Em duas semanas o time já tava no funil novo.",
    },
    {
      n: "Guilherme Azevedo",
      r: "Head de Vendas · Nexa",
      q: "A IA da Bliv qualifica os leads antes do humano. Nosso tempo médio de resposta caiu de 6h pra 4min.",
    },
    {
      n: "Luana Góes",
      r: "Sócia · BPM",
      q: "Suporte rápido, painel simples e o WhatsApp oficial funcionando. Era exatamente isso que faltava.",
    },
  ];
  return (
    <section className="py-24 px-6 bg-card/30 border-y border-border/40">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            Clientes
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Um <span className="text-gradient-brand">bliv</span> dos nossos clientes
          </h2>
          <p className="mt-3 text-muted-foreground">A gente preferia que eles falassem por nós.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {items.map((t) => (
            <div
              key={t.n}
              className="rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-card"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-gradient-cta" />
                <div>
                  <div className="text-sm font-semibold">{t.n}</div>
                  <div className="text-[11px] text-muted-foreground">{t.r}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mt-4 text-orange">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">"{t.q}"</p>
            </div>
          ))}
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
        <div className="text-center mb-10">
          <span className="inline-flex items-center rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            Planos & Preços
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Planos sem <span className="text-gradient-brand">burocracia</span> e sem fidelidade
          </h2>
          <p className="mt-3 text-muted-foreground">Cancele quando quiser. Sem taxa de adesão.</p>
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
                <a
                  href="#contato"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gradient-cta text-white text-xs font-semibold px-4 py-2.5 hover:opacity-95"
                >
                  Quero o {p.name}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-cta text-white text-sm font-semibold px-5 py-3 shadow-glow hover:opacity-95 transition"
          >
            Falar com vendas <ArrowRight className="w-4 h-4" />
          </a>
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
          <span className="inline-flex items-center rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-muted-foreground">
            FAQ
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-bold leading-tight">
            Tudo que você <span className="text-gradient-brand">precisa saber</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm">
            Não achou sua resposta? Fala com a gente no WhatsApp.
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
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-cta text-white text-base font-semibold px-7 py-4 shadow-glow hover:opacity-95 transition"
          >
            Comece agora <ArrowRight className="w-4 h-4" />
          </a>
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
      <TopBar />
      <Nav />
      <Hero />
      <TrustedBy />
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
