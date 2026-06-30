import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  MessageCircle,
  Bot,
  GitBranch,
  Webhook,
  Sparkles,
  Lock,
  Megaphone,
  Gift,
  Rocket,
  TrendingDown,
  AlertTriangle,
  EyeOff,
  Clock,
  Shield,
  Zap,
  Users,
  BarChart3,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bliv CRM — Pare de perder leads no WhatsApp e Instagram" },
      {
        name: "description",
        content:
          "Bliv CRM unifica WhatsApp, Instagram e Facebook num só funil com bots, IA e relatórios. Comece grátis por 7 dias.",
      },
      { property: "og:title", content: "Bliv CRM — Pare de perder leads" },
      {
        property: "og:description",
        content:
          "CRM com WhatsApp Cloud API oficial, agente de IA e funil de vendas. Garanta sua vaga no lote fundador.",
      },
    ],
  }),
  component: Index,
});

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-gradient-brand">Bliv</span>
            <span className="text-foreground/80 text-sm font-medium ml-1">CRM</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#funcionalidades" className="hover:text-foreground transition">Funcionalidades</a>
          <a href="#planos" className="hover:text-foreground transition">Planos</a>
          <a href="#acesso" className="hover:text-foreground transition">Acesso</a>
          <a href="#contato" className="hover:text-foreground transition">Contato</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground hidden sm:block">Entrar</a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-cta text-white text-sm font-semibold px-4 py-2 shadow-glow hover:opacity-95 transition"
          >
            <Sparkles className="w-4 h-4" /> Começar agora
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute inset-0 hero-glow pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-muted-foreground mb-8">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange" />
          Aproveite que tem mais lote grátis · use por 7 dias
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
          Sua empresa está <span className="text-gradient-brand">perdendo leads</span>
          <br /> todos os dias.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          O lead que perdeu resposta no Instagram ou WhatsApp, a Bliv resolve. Um CRM com IA pronto pra vender mais, sem
          robotizar.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-cta text-white text-base font-semibold px-7 py-4 shadow-glow hover:opacity-95 transition"
          >
            Comece gratuitamente por 7 dias <ArrowRight className="w-4 h-4" />
          </a>
          <div className="flex items-center gap-6 text-xs text-muted-foreground mt-2">
            <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-orange" /> Sem cartão de crédito</span>
            <span className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-orange" /> 7 dias grátis</span>
          </div>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative mt-16 mx-auto max-w-4xl">
      <div className="relative rounded-2xl border border-border/60 bg-gradient-card shadow-card overflow-hidden">
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border/60">
          <span className="w-3 h-3 rounded-full bg-destructive/80" />
          <span className="w-3 h-3 rounded-full bg-orange/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
          <span className="ml-3 text-xs text-muted-foreground">app.blivcrm.com / dashboard</span>
        </div>
        <div className="grid grid-cols-12 gap-3 p-4">
          <aside className="col-span-3 rounded-lg bg-background/60 p-3 space-y-2">
            {["Início", "Conversas", "Funil", "Contatos", "Automações", "Relatórios"].map((i, idx) => (
              <div
                key={i}
                className={`text-xs px-2 py-1.5 rounded-md ${
                  idx === 1 ? "bg-gradient-cta text-white" : "text-muted-foreground"
                }`}
              >
                {i}
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
            <div className="rounded-lg bg-background/60 p-3 grid grid-cols-2 gap-2">
              {["Maria S. · WhatsApp", "João P. · Instagram", "Ana R. · Facebook", "Carlos M. · WhatsApp"].map((c) => (
                <div key={c} className="text-[11px] flex items-center gap-2 text-muted-foreground py-1">
                  <span className="w-5 h-5 rounded-full bg-gradient-cta" /> {c}
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      <FloatingCard className="hidden md:flex absolute -top-6 -right-6" icon={<MessageCircle className="w-4 h-4" />}>
        <div>
          <div className="text-xs font-semibold">WhatsApp API Oficial</div>
          <div className="text-[10px] text-muted-foreground">Conexão estável e sem bloqueios</div>
        </div>
      </FloatingCard>
      <FloatingCard className="hidden md:flex absolute -bottom-4 -left-8" icon={<Bot className="w-4 h-4" />}>
        <div>
          <div className="text-xs font-semibold">IA integrada</div>
          <div className="text-[10px] text-muted-foreground">Atende e qualifica em segundos</div>
        </div>
      </FloatingCard>
      <FloatingCard className="hidden md:flex absolute bottom-10 -right-10" icon={<BarChart3 className="w-4 h-4" />}>
        <div>
          <div className="text-xs font-semibold">Omnichannel</div>
          <div className="text-[10px] text-muted-foreground">WhatsApp · Instagram · Facebook</div>
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

function ProblemSection() {
  const items = [
    {
      icon: TrendingDown,
      title: "Leads sumindo no Instagram Direct",
      desc: "Mensagens que ficam sem resposta por horas. Enquanto você demora, a concorrência fecha.",
      stat: "−34%",
      statLabel: "de conversão sem resposta em até 5min",
    },
    {
      icon: AlertTriangle,
      title: "Formulários do site que vão pro limbo",
      desc: "Lead chega por e-mail, vai pra spam, ninguém vê. Conversão volta a zero.",
      stat: "67%",
      statLabel: "dos formulários nunca recebem follow-up",
    },
    {
      icon: EyeOff,
      title: "Time de vendas sem visibilidade",
      desc: "Cada vendedor responde no WhatsApp pessoal. Sem funil, sem gestão.",
      stat: "3x",
      statLabel: "mais tempo perdido em CRM colado",
    },
    {
      icon: Clock,
      title: "WhatsApp que pode ser banido amanhã",
      desc: "Usar número não oficial é apostar a empresa. Um ban e você fica sem histórico.",
      stat: "0",
      statLabel: "garantia ao usar WhatsApp não oficial",
    },
  ];
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <Badge>O problema real</Badge>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">Cada hora sem resposta é dinheiro indo embora</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Enquanto você tenta operar a empresa em 4 apps diferentes, seu lead tá conversando com a concorrência ou
            esquecendo de você.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-card"
            >
              <div className="flex items-start gap-4">
                <span className="w-10 h-10 rounded-lg bg-destructive/15 text-destructive flex items-center justify-center shrink-0">
                  <it.icon className="w-5 h-5" />
                </span>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{it.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{it.desc}</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-gradient-brand">{it.stat}</span>
                    <span className="text-xs text-muted-foreground">{it.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: MessageCircle,
      tag: "WhatsApp Oficial",
      title: "WhatsApp Cloud API Oficial",
      desc: "Integração direta com a API oficial da Meta. Sem bloqueios, sem bots clonados — sua operação no padrão da Meta.",
      bullets: ["Número oficial verificado", "Sem risco de banimento", "Templates aprovados"],
    },
    {
      icon: Bot,
      tag: "Inteligência Artificial",
      title: "Bot de Fluxo & Agente de IA",
      desc: "Monte fluxos no drag-and-drop ou deixe a IA conversar, qualificar e direcionar o lead pra um humano só na hora certa.",
      bullets: ["Atendimento 24/7", "Qualificação automática", "Transferência inteligente pra humanos"],
    },
    {
      icon: GitBranch,
      tag: "CRM Nativo",
      title: "Funil de Vendas integrado",
      desc: "Não é um CRM colado no WhatsApp. É um funil nativo, com etapas, gestão de equipe e relatórios.",
      bullets: ["Pipeline visual", "Histórico completo do contato", "Tags e segmentação de leads"],
    },
    {
      icon: Webhook,
      tag: "Conexões",
      title: "Webhooks & Omnicanalidade",
      desc: "Conecta com a sua stack. RD Station, Hubspot, Make, Zapier — e atende todos os canais num só lugar.",
      bullets: ["API pública e webhooks", "Integração com Make / Zapier", "Instagram, Messenger e WhatsApp"],
    },
  ];
  return (
    <section id="funcionalidades" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <Badge>Funcionalidades</Badge>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Tudo que você precisa, <span className="text-gradient-brand">numa só plataforma</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Do primeiro contato ao fechamento, a Bliv opera com você — ou sem você.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border/60 bg-gradient-card p-7 shadow-card">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-gradient-cta text-white flex items-center justify-center">
                  <f.icon className="w-5 h-5" />
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-wide">{f.tag}</span>
              </div>
              <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              <ul className="mt-4 space-y-2">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-orange" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3 text-xs text-muted-foreground">
          {[
            { i: Shield, t: "LGPD ready" },
            { i: Zap, t: "Tempo real" },
            { i: Users, t: "Múltiplos atendentes" },
            { i: BarChart3, t: "Relatórios avançados" },
            { i: Sparkles, t: "IA nativa" },
          ].map((b) => (
            <span
              key={b.t}
              className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/40 px-3 py-1.5"
            >
              <b.i className="w-3.5 h-3.5" /> {b.t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs text-muted-foreground">
      {children}
    </span>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Start",
      desc: "Para começar com o pé direito.",
      price: "197",
      cta: "Quero o Start",
      highlight: false,
      bullets: [
        "1 conta de WhatsApp",
        "Gestão de contatos completa",
        "Lista de Tags e segmentação",
        "Templates aprovados pela Meta",
        "5 usuários no WhatsApp",
        "Até 1 conta agendamento",
      ],
    },
    {
      name: "Growth",
      desc: "Pro time que já tem operação.",
      price: "397",
      cta: "Quero o Growth",
      highlight: true,
      bullets: [
        "Tudo do Start incluso",
        "Funil de Vendas CRM nativo",
        "Bot de Fluxo — Chatbot visual",
        "Webhooks · Integração Hubspot",
        "Agente de Atendimento Virtual",
        "15 usuários no WhatsApp",
        "API & casos avançados",
      ],
    },
    {
      name: "Enterprise",
      desc: "Pra operações sob medida.",
      price: "797",
      cta: "Quero o Enterprise",
      highlight: false,
      bullets: [
        "Tudo do Growth incluso",
        "Agente de Inteligência Artificial",
        "Auditoria completa de operações",
        "Relatórios avançados de performance",
        "Usuários ilimitados (atendimento)",
        "Onboarding assistido pro time",
      ],
    },
  ];
  return (
    <section id="planos" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <Badge>Planos & Preços</Badge>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Invista menos do que custa <span className="text-gradient-brand">perder um lead</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Pra cada time, o foco no cliente é o mesmo — em qualquer plano que você escolher.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl border p-7 shadow-card ${
                p.highlight
                  ? "border-orange/50 bg-gradient-card ring-1 ring-orange/30"
                  : "border-border/60 bg-gradient-card"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-cta text-white text-xs font-semibold px-3 py-1 shadow-glow">
                    <Sparkles className="w-3 h-3" /> Mais popular
                  </span>
                </div>
              )}
              <div className="text-sm font-semibold">{p.name}</div>
              <div className="text-xs text-muted-foreground mt-1">{p.desc}</div>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-xs text-muted-foreground">R$</span>
                <span className="text-5xl font-bold text-gradient-brand">{p.price}</span>
                <span className="text-xs text-muted-foreground">/mês</span>
              </div>
              <div className="text-[11px] text-muted-foreground mt-1">Cobrado mensalmente</div>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-orange mt-0.5 shrink-0" /> <span>{b}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contato"
                className={`mt-7 block text-center rounded-full px-4 py-3 text-sm font-semibold transition ${
                  p.highlight
                    ? "bg-gradient-cta text-white shadow-glow hover:opacity-95"
                    : "border border-border/60 text-foreground hover:bg-card/60"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-border/60 bg-card/30 p-5 text-center">
          <div className="text-sm font-medium">Garantia de Mídia (somente WhatsApp)</div>
          <div className="text-xs text-muted-foreground mt-1">
            O faturamento dos custos de API da Meta é repassado direto pra Meta, sem markup pela Bliv. Mensagem e
            anúncios saem direto pela sua conta.
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { icon: Lock, tag: "Etapa atual", title: "Beta Fechado", desc: "Selecionamos os 50 primeiros clientes pra rodar a versão estável da Bliv. Onboarding 1:1 com o time fundador e suporte direto.", highlight: false },
    { icon: Megaphone, tag: "Em breve", title: "Geração de Demanda", desc: "Lançamento aberto pro público com campanhas reais. Quem entrar como fundador, fica com o preço travado pra sempre.", highlight: false },
    { icon: Gift, tag: "Lote Fundador", title: "Oferta Fundadora", desc: "Apenas 30 vagas com condições únicas pra quem chegar primeiro: preço congelado, suporte direto e prioridade em features.", highlight: true, cta: "Quero entrar agora" },
    { icon: Rocket, tag: "Operação no ar", title: "Onboarding Assistido", desc: "Implementação pra você não ter que pensar em integrações. Migramos seus dados, configuramos seus fluxos e te entregamos rodando.", highlight: false },
  ];
  return (
    <section id="acesso" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <Badge>Acesso & Programa</Badge>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">Como funciona o acesso</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Um lançamento estruturado em 4 fases pra garantir que cada cliente entra com a melhor experiência possível.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-5">
          {steps.map((s, idx) => (
            <div
              key={s.title}
              className={`rounded-2xl border p-6 shadow-card ${
                s.highlight ? "border-orange/50 bg-gradient-card ring-1 ring-orange/30" : "border-border/60 bg-gradient-card"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`w-10 h-10 rounded-lg flex items-center justify-center ${s.highlight ? "bg-gradient-cta text-white" : "bg-card/60 text-orange"}`}>
                  <s.icon className="w-5 h-5" />
                </span>
                <span className="text-xs text-muted-foreground">0{idx + 1}</span>
              </div>
              <div className="mt-5 text-[11px] uppercase tracking-wide text-muted-foreground">{s.tag}</div>
              <h3 className="mt-1 font-bold text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              {s.cta && (
                <a href="#contato" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-orange hover:underline">
                  {s.cta} <ArrowRight className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaForm() {
  return (
    <section id="contato" className="py-24 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <Badge>Oferta fundadora · acaba em poucos dias</Badge>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold">
          Garanta sua vaga no <span className="text-gradient-brand">lote fundador</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          As últimas 30 vagas vêm com condições travadas pra sempre: desconto permanente, onboarding assistido e
          atendimento direto.
        </p>

        <form className="mt-10 rounded-2xl border border-border/60 bg-gradient-card p-6 shadow-card text-left">
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Seu nome" placeholder="João Silva" />
            <Field label="E-mail" placeholder="joao@empresa.com" type="email" />
          </div>
          <div className="mt-4">
            <Field label="Nome da empresa" placeholder="Empresa Ltda." />
          </div>
          <button
            type="button"
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-cta text-white text-base font-semibold py-4 shadow-glow hover:opacity-95 transition"
          >
            Quero minha vaga fundadora <ArrowRight className="w-4 h-4" />
          </button>
          <div className="mt-4 flex items-center justify-center gap-6 text-[11px] text-muted-foreground">
            <span>✓ 7 dias grátis</span>
            <span>✓ Preço travado pra sempre</span>
            <span>✓ Suporte direto</span>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground">{label} *</span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-border/60 bg-background/60 px-3 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/40 py-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">
            <span className="text-gradient-brand">Bliv</span>
            <span className="text-foreground/80 text-xs font-medium ml-1">CRM</span>
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
          <a href="#funcionalidades" className="hover:text-foreground">Funcionalidades</a>
          <a href="#planos" className="hover:text-foreground">Planos</a>
          <a href="#acesso" className="hover:text-foreground">Acesso</a>
          <a href="#contato" className="hover:text-foreground">Contato</a>
          <a href="#" className="hover:text-foreground">Política de Privacidade</a>
        </div>
        <div className="text-[11px] text-muted-foreground">© 2026 Bliv CRM. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <ProblemSection />
        <Features />
        <Pricing />
        <HowItWorks />
        <CtaForm />
      </main>
      <Footer />
    </div>
  );
}
