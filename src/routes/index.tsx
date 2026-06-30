import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
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
  Kanban,
  Inbox,
} from "lucide-react";
import dashboardHero from "@/assets/dashboard-hero.png";
import dashboardBliv from "@/assets/dashboard-bliv.png.asset.json";
import logo from "@/assets/logo.png";
import clientAmazon from "@/assets/client-amazon.png.asset.json";
import clientGranfruto from "@/assets/client-granfruto.png.asset.json";
import clientAltamed from "@/assets/client-altamed.jpg.asset.json";
import clientEgua from "@/assets/client-egua.jpg.asset.json";
import metaPartner from "@/assets/meta-partner.webp.asset.json";
import iconWhatsapp from "@/assets/icon-whatsapp.png.asset.json";
import iconInstagram from "@/assets/icon-instagram.png.asset.json";
import iconMessenger from "@/assets/icon-messenger.png.asset.json";
import iconWebhook from "@/assets/icon-webhook.png.asset.json";

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
      className={`group inline-flex items-center rounded-xl border border-orange/40 bg-transparent font-medium text-foreground hover:border-orange hover:bg-orange/10 hover:scale-105 active:scale-95 transition-[background-color,border-color,transform] duration-200 pl-4 pr-1 py-1 gap-3 text-xs ${className}`}
    >
      <span className="transition-colors duration-200 group-hover:text-orange">{children}</span>
      <span className="flex items-center justify-center rounded-lg bg-orange text-background shadow-[0_6px_20px_-6px_var(--brand-orange)] p-1.5 transition-transform duration-300">
        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-rotate-45" />
      </span>
    </a>
  );
}

function PixelGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const tileSize = 12;
    const gap = 6;
    
    // We update columns and rows dynamically during resize or draw
    const draw = () => {
      const cols = Math.ceil(width / (tileSize + gap));
      const rows = Math.ceil(height / (tileSize + gap));
      ctx.clearRect(0, 0, width, height);

      const time = Date.now() * 0.001;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * (tileSize + gap);
          const y = r * (tileSize + gap);

          // Distance-based vignette from top-center of hero
          const dx = x - width / 2;
          const dy = y - 100; // bias towards hero text
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = Math.sqrt((width / 2) * (width / 2) + height * height);
          
          // Steeper vignette for localized center glow
          const vignette = Math.max(0, 1 - dist / (maxDist * 0.5));
          
          if (vignette <= 0) continue;

          // Pseudo-random blinking based on coordinates and time
          const noise = Math.sin(c * 12.9898 + r * 78.233 + time * (1.5 + Math.sin(c * r))) * 0.5 + 0.5;
          
          // Max opacity scale
          const opacity = 0.12 * noise * vignette;

          if (opacity > 0.01) {
            // Mix orange and pink tones
            ctx.fillStyle = `rgba(249, 115, 22, ${opacity})`;
            ctx.fillRect(x, y, tileSize, tileSize);
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none opacity-60" />;
}


function SmokeTextReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({
    filter: "blur(20px)",
    opacity: 0,
    transform: "translateY(30px) scale(0.92)",
    letterSpacing: "14px",
    textShadow: "0 0 20px rgba(255, 255, 255, 0)",
    transition: "filter 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), letter-spacing 0.6s cubic-bezier(0.16, 1, 0.3, 1), text-shadow 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "filter, opacity, transform, letter-spacing, text-shadow"
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const entryPoint = viewportHeight * 0.95;
      const fullyInViewPoint = viewportHeight * 0.65;
      
      let progress = (entryPoint - rect.top) / (entryPoint - fullyInViewPoint);
      progress = Math.max(0, Math.min(1, progress));
      
      const blurVal = 20 * (1 - progress);
      const opacityVal = progress;
      const scaleVal = 0.92 + 0.08 * progress;
      const translateYVal = 30 * (1 - progress);
      const letterSpacingVal = 14 * (1 - progress);
      const shadowAlpha = 0.5 * (1 - progress);
      
      setStyle({
        filter: `blur(${blurVal}px)`,
        opacity: opacityVal,
        transform: `translateY(${translateYVal}px) scale(${scaleVal})`,
        letterSpacing: `${letterSpacingVal}px`,
        textShadow: `0 0 10px rgba(255, 255, 255, ${shadowAlpha}), 0 0 20px rgba(255, 255, 255, ${shadowAlpha * 0.5})`,
        transition: "filter 0.2s ease-out, opacity 0.2s ease-out, transform 0.2s ease-out, letter-spacing 0.2s ease-out, text-shadow 0.2s ease-out",
        willChange: "filter, opacity, transform, letter-spacing, text-shadow"
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bliv CRM — CRM com WhatsApp para vender mais" },
      {
        name: "description",
        content:
          "Bliv CRM unifica WhatsApp, Instagram e Messenger num só funil. Disparo em massa, automação e agentes de IA. Comece em minutos.",
      },
      { property: "og:title", content: "Bliv CRM — CRM com WhatsApp para vender mais" },
      {
        property: "og:description",
        content:
          "CRM com WhatsApp Cloud API oficial, agente de IA e funil de vendas. Comece grátis por 7 dias.",
      },
      { property: "og:url", content: "https://pixel-perfect-clone-99477.lovable.app/" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b8eb7cf1-1d54-4867-806f-07514de8d143/id-preview-2c743c09--8824d971-1cfb-4b0a-ace2-6dffd98bf840.lovable.app-1782792827332.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b8eb7cf1-1d54-4867-806f-07514de8d143/id-preview-2c743c09--8824d971-1cfb-4b0a-ace2-6dffd98bf840.lovable.app-1782792827332.png" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-perfect-clone-99477.lovable.app/" }],
  }),
  component: Index,
});

/* ---------------- NAV ---------------- */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.521.074-.794.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function Nav() {
  return (
    <header className="sticky top-0 inset-x-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Bliv logo" className="h-8 sm:h-[42px] w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="/#inicio" className="hover:text-foreground transition">Início</a>
          <a href="/#funcionalidades" className="hover:text-foreground transition">Funcionalidades</a>
          <a href="/#planos" className="hover:text-foreground transition">Planos</a>
          <a href="/#faq" className="hover:text-foreground transition">FAQ</a>
          <a href="/#contato" className="hover:text-foreground transition">Contato</a>
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <PillButton href="/#contato" size="sm">Falar com Consultor</PillButton>
        </div>
      </div>
    </header>

  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="inicio" className="relative pt-10 sm:pt-24 pb-10 sm:pb-20 overflow-hidden bg-background">
      <PixelGridBackground />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(70% 90% at 10% 50%, oklch(0.6 0.28 340 / 30%), transparent 65%),
            radial-gradient(70% 90% at 90% 50%, oklch(0.65 0.22 30 / 30%), transparent 65%)
          `,
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display mt-4 sm:mt-7 text-[2.3125rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7.5xl font-extrabold tracking-tight">
            Sua operação
            <br className="md:hidden" /> omnichannel com{" "}
            <br className="md:hidden" />
            <span className="text-[#25D366] italic font-bold">WhatsApp</span>,{" "}
            <span className="text-gradient-brand italic font-bold">Instagram</span>,{" "}
            <br className="md:hidden" />
            <span className="text-[#0084FF] italic font-bold">Messenger</span>{" "}
            <span className="text-orange italic font-bold">e IA.</span>
          </h1>
          <p className="mt-4 sm:mt-7 text-sm sm:text-lg text-muted-foreground max-w-4xl leading-relaxed mx-auto">
            Integre WhatsApp, Instagram e Messenger em um único painel, crie campanhas de disparo em massa, <br className="hidden md:block" />
            monitore métricas, construa fluxos de bots e escale atendimentos com agentes de IA ilimitados.
          </p>
          <div className="mt-5 sm:mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <PillButton href="#contato" size="lg">Falar com Consultor</PillButton>
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState("perspective(1200px) rotateX(15deg) scale(0.95) translateY(30px)");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Position of element relative to viewport
      const elementTop = rect.top;
      const elementHeight = rect.height;
      
      // Calculate scroll progress (0 when entering from bottom, 1 when leaving from top)
      const start = viewportHeight;
      const end = -elementHeight;
      const progress = Math.max(0, Math.min(1, (start - elementTop) / (start - end)));
      
      // We map the entry phase (from progress 0 to 0.4) to animate the entrance
      const entryProgress = Math.min(1, progress / 0.4);
      
      // Calculate values based on scroll entry progress
      const rotateX = 15 * (1 - entryProgress); // 15deg down to 0deg
      const scale = 0.95 + (0.05 * entryProgress); // 0.95 up to 1.0
      const translateY = 30 * (1 - entryProgress); // 30px up to 0px
      const opacity = 0.6 + (0.4 * entryProgress); // fade in slightly

      setTransformStyle(
        `perspective(1200px) rotateX(${rotateX}deg) scale(${scale}) translateY(${translateY}px)`
      );
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial calculate
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative mt-8 sm:mt-14 mx-auto w-full transition-all duration-300 ease-out will-change-transform"
      style={{ transform: transformStyle }}
    >
      <div className="w-full rounded-xl sm:rounded-2xl border border-white/10 bg-[#111111] shadow-2xl overflow-hidden select-none">
        <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-2.5 sm:px-4 sm:py-3 border-b border-white/5">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="aspect-[1908/907] bg-[#111111]">
          <img
            src={dashboardBliv.url}
            alt="Painel da Bliv CRM com métricas de campanhas, contatos, taxa de entrega e notificações"
            className="w-full h-full object-contain object-center select-none"
            draggable={false}
          />
        </div>

      </div>

      {/* Floating: integrations (left) — desktop */}
      <div
        tabIndex={0}
        className="hidden md:block absolute left-[-3.5rem] lg:left-[-5.5rem] top-1/2 -translate-y-1/2 z-10 w-[17rem] lg:w-[19rem] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-foreground shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] p-4 lg:p-5 outline-none transition-all duration-300 ease-out hover:-translate-y-[calc(50%+4px)] hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.55)] focus-visible:-translate-y-[calc(50%+4px)] focus-visible:ring-2 focus-visible:ring-orange/60"
      >
        <ul className="space-y-2.5 lg:space-y-3">
          {[
            { icon: iconWhatsapp.url, title: "Atendimento e campanhas pelo WhatsApp Oficial", desc: "Envie mensagens, atenda clientes e acompanhe métricas pela API oficial." },
            { icon: iconInstagram.url, title: "Leads e conversas do Instagram no CRM", desc: "Centralize mensagens e transforme interações em oportunidades." },
            { icon: iconMessenger.url, title: "Atendimento integrado pelo Messenger", desc: "Gerencie conversas do Facebook em um só painel." },
            { icon: iconWebhook.url, title: "Conecte formulários e sistemas ao CRM", desc: "Receba leads automaticamente de sites e landing pages." },
          ].map((it) => (
            <li key={it.title} className="flex items-start gap-2.5">
              <img src={it.icon} alt="" className="w-6 h-6 shrink-0 mt-[2px]" />
              <div className="min-w-0">
                <p className="text-left text-[0.75rem] lg:text-[0.8rem] font-semibold leading-[1.3] tracking-[-0.005em]">{it.title}</p>
                <p className="text-left text-[0.68rem] lg:text-[0.72rem] font-normal text-muted-foreground leading-[1.4] mt-0.5">{it.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Floating: Meta Business Partner (right) — desktop */}
      <div
        tabIndex={0}
        className="hidden md:flex absolute right-[-1.5rem] lg:right-[-3rem] bottom-[-1.25rem] z-10 items-center justify-center rounded-xl bg-white shadow-[0_24px_60px_-20px_rgba(0,0,0,0.45)] p-2 lg:p-2.5 w-[5rem] lg:w-[6rem] outline-none transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.55)] focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-orange/60"
      >
        <img src={metaPartner.url} alt="Meta Business Partner" className="w-full h-auto" />
      </div>

      {/* Mobile: stacked below mockup, same alignment, no overlap */}
      <div className="md:hidden mt-5 grid gap-4">
        <div className="rounded-2xl border border-black/5 bg-white text-neutral-900 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)] p-5 transition-all duration-300 ease-out active:scale-[0.99]">
          <ul className="space-y-3.5">
            {[
              { icon: iconWhatsapp.url, title: "Atendimento e campanhas pelo WhatsApp Oficial", desc: "Envie mensagens, atenda clientes e acompanhe métricas pela API oficial." },
              { icon: iconInstagram.url, title: "Leads e conversas do Instagram no CRM", desc: "Centralize mensagens e transforme interações em oportunidades." },
              { icon: iconMessenger.url, title: "Atendimento integrado pelo Messenger", desc: "Gerencie conversas do Facebook em um só painel." },
              { icon: iconWebhook.url, title: "Conecte formulários e sistemas ao CRM", desc: "Receba leads automaticamente de sites e landing pages." },
            ].map((it) => (
              <li key={it.title} className="flex items-start gap-3">
                <img src={it.icon} alt="" className="w-6 h-6 shrink-0 mt-[2px]" />
                <div className="min-w-0">
                  <p className="text-[0.8rem] font-semibold leading-[1.3] tracking-[-0.005em]">{it.title}</p>
                  <p className="text-[0.72rem] text-neutral-600 leading-[1.4] mt-1">{it.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center rounded-xl bg-white shadow-[0_18px_40px_-18px_rgba(0,0,0,0.45)] p-2 mx-auto w-[5rem] transition-all duration-300 ease-out active:scale-[0.99]">
          <img src={metaPartner.url} alt="Meta Business Partner" className="w-full h-auto" />
        </div>
      </div>

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
    <section id="funcionalidades" className="relative py-10 sm:py-28 px-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section header — editorial, assimétrico */}
        <div className="grid md:grid-cols-12 gap-6 sm:gap-8 items-end mb-10 sm:mb-14">
          <div className="md:col-span-7">
            <SmokeTextReveal>
              <span className="eyebrow"><span className="text-orange">01 —</span> Por que a Bliv</span>
              <h2 className="font-display mt-4 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.05]">
                Menos abas abertas, <br />
                <span className="text-gradient-brand italic">mais negócios fechados.</span>
              </h2>
            </SmokeTextReveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <SmokeTextReveal>
              <p className="text-muted-foreground leading-relaxed">
                A gente construiu a Bliv ouvindo times de vendas brasileiros que cansaram de
                gambiarra com planilha, bot pirata e três assinaturas pra fazer uma coisa só.
              </p>
            </SmokeTextReveal>
          </div>
        </div>

        {/* Bento assimétrico */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-5">
          {/* Card grande — funil visual */}
          <article className="md:col-span-8 group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-card p-4 sm:p-8 shadow-card">
            <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-orange/10 blur-3xl group-hover:bg-orange/20 transition-colors" />
            <div className="relative z-10 max-w-md">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-orange/10 border border-orange/30 text-orange flex items-center justify-center">
                  <Kanban className="w-5 h-5" />
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
            <div className="relative z-10 mt-7 grid grid-cols-2 gap-[0.45rem]">
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
          <article className="md:col-span-4 group relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-4 sm:p-8 flex flex-col justify-between">
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
          <article className="md:col-span-4 group relative overflow-hidden rounded-3xl border border-border/60 bg-card/40 p-4 sm:p-8">
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
          <article className="md:col-span-8 group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-tr from-pink/[0.06] to-transparent p-4 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl bg-pink/10 border border-pink/30 text-pink flex items-center justify-center">
                    <Inbox className="w-5 h-5" />
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
                  { i: WhatsAppIcon, l: "WhatsApp", c: "text-emerald-400" },
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
    <section className="py-10 sm:py-24 px-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-4 sm:gap-8 items-end mb-6 sm:mb-12">
          <div className="md:col-span-7">
            <SmokeTextReveal>
              <span className="eyebrow"><span className="text-orange">02 —</span> Canais & API</span>
              <h2 className="font-display mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.05]">
                Seu time <span className="text-gradient-brand italic">sempre conectado</span>
              </h2>
            </SmokeTextReveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <SmokeTextReveal>
              <p className="text-muted-foreground leading-relaxed">
                WhatsApp Cloud API oficial da Meta, número virtual ou as duas coisas. Sua operação
                não cai porque um canal cair.
              </p>
            </SmokeTextReveal>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-3 sm:gap-5">
          <div className="rounded-2xl border border-border/60 bg-gradient-card p-5 sm:p-7 shadow-card">
            <h3 className="text-lg sm:text-xl font-bold">WhatsApp oficial ou número virtual</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Conecte o número da empresa direto na API oficial da Meta ou crie um número virtual pra cada
              vertical. Sem risco de banimento.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-lg border border-border/60 bg-background/40 p-3 text-center">
                <WhatsAppIcon className="w-5 h-5 mx-auto text-emerald-400" />
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

          <div className="rounded-2xl border border-border/60 bg-gradient-card p-5 sm:p-7 shadow-card">
            <h3 className="text-lg sm:text-xl font-bold">Painel de uso e cobrança</h3>
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
          <PillButton href="#contato">Falar com Consultor</PillButton>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    {
      n: "Diogo",
      r: "Diretor de Operações · Amazon Polpas",
      q: "Trocamos três ferramentas pela Bliv e cortamos R$ 4 mil por mês. Em duas semanas o time inteiro já estava no funil novo — sem treinamento longo, sem dor.",
      img: clientAmazon.url,
    },
    {
      n: "Adriane",
      r: "Fundador · Granfruto",
      q: "O agente de IA qualifica os leads antes de chegarem ao time comercial. Nosso tempo médio de resposta no WhatsApp despencou de 6h para menos de 4 minutos.",
      img: clientGranfruto.url,
    },
    {
      n: "Bruno Guimarães",
      r: "Gestora de Atendimento · Altamed",
      q: "Suporte rápido, painel simples e WhatsApp oficial funcionando perfeitamente. Conseguimos centralizar o atendimento de todas as unidades sem instabilidade.",
      img: clientAltamed.url,
    },
    {
      n: "Carla Luz",
      r: "CEO · Égua do Celular",
      q: "Disparos de campanhas em massa e fluxos de bots integrados mudaram nosso jogo. Escalar o atendimento com a IA da Bliv foi a melhor decisão do ano.",
      img: clientEgua.url,
    },
  ];
  return (
    <section className="py-10 sm:py-28 px-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-4 sm:gap-8 items-end mb-6 sm:mb-14">
          <div className="md:col-span-7">
            <SmokeTextReveal>
              <span className="eyebrow"><span className="text-orange">03 —</span> Quem já usa</span>
              <h2 className="font-display mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.05]">
                A gente preferia que <br/>
                <span className="text-gradient-brand italic">eles falassem por nós.</span>
              </h2>
            </SmokeTextReveal>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-5">
          {reviews.map((t, idx) => (
            <article key={t.n} className={`relative rounded-3xl border border-border/60 p-4 sm:p-8 shadow-card overflow-hidden ${idx === 0 ? "bg-gradient-card" : "bg-card/40"}`}>
              {idx === 0 && <Quote className="absolute -top-2 -left-2 w-24 h-24 text-orange/10" />}
              <p className={`relative leading-relaxed text-foreground/95 ${idx === 0 ? "font-display text-lg md:text-xl font-bold" : "text-sm"}`}>
                "{t.q}"
              </p>
              <div className="relative mt-6 flex items-center gap-3">
                <img src={t.img} alt={t.r} loading="lazy" className="w-10 h-10 rounded-full object-cover bg-white ring-1 ring-border/60" />
                <div>
                  <div className="text-sm font-semibold">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PRICING ---------------- */
function Pricing() {
  const plans = [
    { name: "Solo", price: "49", bullets: ["1 atendente", "1 número WhatsApp", "500 contatos", "Funil básico"] },
    { name: "Start", price: "147", tag: "popular", bullets: ["3 atendentes (R$49/usuário)", "1 número WhatsApp", "3k contatos", "Funil + tags"] },
    { name: "Start +", price: "245", bullets: ["5 atendentes (R$49/usuário)", "2 números", "10k contatos", "Webhooks"] },
  ];

  return (
    <section id="planos" className="py-10 sm:py-24 px-5 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-12 gap-4 sm:gap-8 items-end mb-6 sm:mb-10">
          <div className="md:col-span-7">
            <SmokeTextReveal>
              <span className="eyebrow"><span className="text-orange">04 —</span> Planos & Preços</span>
              <h2 className="font-display mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.05]">
                Mensal, sem multa, <br/>
                <span className="text-gradient-brand italic">sem letra miúda.</span>
              </h2>
            </SmokeTextReveal>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <SmokeTextReveal>
              <p className="text-muted-foreground leading-relaxed">
                Cancele direto pelo painel quando quiser. Sem taxa de adesão, sem contrato anual.
              </p>
            </SmokeTextReveal>
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-gradient-card shadow-card p-5 md:p-8">
          <div className="flex items-end justify-between mb-6">
            <div>
              <div className="text-xs text-muted-foreground">Escolha o tamanho do time</div>
              <div className="text-sm text-muted-foreground/80">
                Todos os planos incluem WhatsApp Cloud API oficial, funil de vendas e suporte humano.
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`relative rounded-xl border p-4 ${
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
                <ul className="mt-3 space-y-1 text-sm">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="w-3.5 h-3.5 text-orange shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-5">
                  <PillButton href="#contato" className="w-full justify-center">Falar com Consultor</PillButton>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <PillButton href="#contato">Falar com Consultor</PillButton>
        </div>
      </div>
    </section>
  );
}

/* ---------------- MEDIA ---------------- */
function Media() {
  return (
    <section className="py-10 sm:py-16 px-5 sm:px-6 bg-card/30 border-y border-border/40">
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
    <section id="faq" className="py-10 sm:py-24 px-5 sm:px-6">
      <div className="mx-auto max-w-5xl grid md:grid-cols-[1fr_1.6fr] gap-8">
        <div>
          <SmokeTextReveal>
            <span className="eyebrow"><span className="text-orange">05 —</span> Dúvidas frequentes</span>
            <h2 className="font-display mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.05]">
              Tudo que você <span className="text-gradient-brand italic">precisa saber</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-sm leading-relaxed">
              Não achou sua resposta? Chama a gente no WhatsApp — gente de verdade responde em
              poucos minutos.
            </p>
          </SmokeTextReveal>
        </div>

        <div className="space-y-1.5">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <button
                key={it.q}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left rounded-xl border border-border/60 bg-card/60 px-4 py-3 hover:border-orange/40 transition"
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
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    empresa: "",
  });
  const [loading, setLoading] = useState(false);

  const formatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 10) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate({ to: "/obrigado" });
    }, 1000);
  };

  return (
    <section id="contato" className="py-10 sm:py-24 px-5 sm:px-6 bg-card/30 border-y border-border/40">
      <div className="mx-auto max-w-3xl text-center">
        <SmokeTextReveal>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight italic">
            <span className="text-gradient-brand">bliv</span>, bliv!
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            Deixe seus dados abaixo para que um consultor de inteligência e processos comerciais entre em contato.
          </p>
        </SmokeTextReveal>

        <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto text-left space-y-3 bg-card/60 p-5 md:p-8 rounded-3xl border border-border/60 backdrop-blur-xl shadow-card">
          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Seu Nome</label>
            <input
              type="text"
              required
              placeholder="Ex: João Silva"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-orange focus:outline-none transition"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">E-mail corporativo</label>
            <input
              type="email"
              required
              placeholder="Ex: joao@empresa.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-orange focus:outline-none transition"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">WhatsApp</label>
            <input
              type="tel"
              required
              placeholder="Ex: (11) 99999-9999"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: formatWhatsApp(e.target.value) })}
              className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-orange focus:outline-none transition"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Nome da Empresa</label>
            <input
              type="text"
              required
              placeholder="Ex: Bliv S/A"
              value={formData.empresa}
              onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
              className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-orange focus:outline-none transition"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 group inline-flex items-center justify-between rounded-xl bg-orange hover:bg-orange/90 text-background font-medium py-3 px-5 transition duration-200 hover:scale-105 active:scale-95"
          >
            <span className="text-sm font-semibold">{loading ? "Processando..." : "Falar com Consultor"}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  const cols = [
    {
      t: "Produto",
      l: [
        { n: "Funcionalidades", h: "#funcionalidades" },
        { n: "Planos", h: "#planos" },
        { n: "WhatsApp Cloud API", h: "#" },
        { n: "Agente de IA", h: "#" },
        { n: "Integrações", h: "#" },
      ],
    },
    {
      t: "Empresa",
      l: [
        { n: "Sobre", h: "#" },
        { n: "Carreiras", h: "#" },
        { n: "Blog", h: "#" },
        { n: "Imprensa", h: "#" },
      ],
    },
    {
      t: "Recursos",
      l: [
        { n: "Documentação", h: "#" },
        { n: "Status", h: "#" },
        { n: "Central de ajuda", h: "#" },
        { n: "Comparativo", h: "#" },
      ],
    },
    {
      t: "Legal",
      l: [
        { n: "Termos de uso", h: "/termos-de-uso" },
        { n: "Política de privacidade", h: "/politica-de-privacidade" },
        { n: "Exclusão de dados", h: "/exclusao-de-dados" },
        { n: "Contato", h: "#contato" },
      ],
    },
  ];
  return (
    <footer className="px-5 sm:px-6 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-[1.4fr_repeat(4,1fr)] gap-6 sm:gap-10">
          <div className="col-span-2 md:col-span-1">

            <img src={logo} alt="Bliv logo" className="h-[42px] w-auto mb-4" />
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Sua operação omnichannel com WhatsApp, Instagram, Messenger e IA.
            </p>
            <div className="mt-5 flex items-center gap-3 text-muted-foreground">
            <a href="#" aria-label="Siga a Bliv CRM no Instagram" className="hover:text-foreground"><Instagram className="w-4 h-4" /></a>
            <a href="#" aria-label="Siga a Bliv CRM no Facebook" className="hover:text-foreground"><Facebook className="w-4 h-4" /></a>
            <a href="#" aria-label="Siga a Bliv CRM no LinkedIn" className="hover:text-foreground"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.t}>
              <div className="text-sm font-semibold mb-3">{c.t}</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {c.l.map((item) => (
                  <li key={item.n}>
                    <a href={item.h} className="hover:text-foreground transition">{item.n}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-5 border-t border-border/40 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Bliv CRM. Um produto VW2 Digital.</span>
          <span>Feito no Brasil 🇧🇷</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- ROOT ---------------- */
function Index() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://bliv.com.br/#organization",
        "name": "Bliv CRM",
        "url": "https://bliv.com.br",
        "logo": "https://bliv.com.br/assets/logo.png",
        "sameAs": [
          "https://www.instagram.com",
          "https://www.facebook.com",
          "https://www.linkedin.com"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://bliv.com.br/#software",
        "name": "Bliv CRM",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "197.00",
          "priceCurrency": "BRL"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://bliv.com.br/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "A Bliv usa WhatsApp oficial?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. Conectamos seu número diretamente na API Oficial da Meta (Cloud API), sem risco de banimento."
            }
          },
          {
            "@type": "Question",
            "name": "Preciso ter equipe técnica pra implantar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Não. Em qualquer plano pago, o time da Bliv faz o onboarding completo: conexão, primeiro funil e treinamento."
            }
          },
          {
            "@type": "Question",
            "name": "Posso testar antes de assinar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim — 7 dias grátis, sem cartão de crédito. Você só paga se decidir continuar."
            }
          },
          {
            "@type": "Question",
            "name": "Tem fidelidade ou multa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Zero. É mensal e você cancela direto pelo painel quando quiser."
            }
          },
          {
            "@type": "Question",
            "name": "Funciona com Instagram e Facebook também?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim. Bliv é omnichannel: WhatsApp, Instagram Direct, Messenger e formulário do site num só inbox."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Nav />
      <main>
        <Hero />
        <StickyFeatures />
        <Channels />
        <Testimonials />
        <Pricing />
        <Media />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
