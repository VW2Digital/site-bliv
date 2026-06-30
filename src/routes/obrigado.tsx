import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

export const Route = createFileRoute("/obrigado")({
  component: Obrigado,
});

function Obrigado() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between overflow-hidden relative">
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <header className="border-b border-border/40 backdrop-blur-xl bg-background/70">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="Bliv logo" className="h-[42px] w-auto" />
          </a>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-md w-full text-center space-y-6 bg-card/40 border border-border/60 p-8 rounded-3xl backdrop-blur-xl shadow-card">
          <div className="flex justify-center">
            <CheckCircle2 className="w-16 h-16 text-emerald-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Obrigado pelo <br />
            <span className="text-gradient-brand italic font-bold">interesse!</span>
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Recebemos seus dados com sucesso. Clique no botão abaixo para iniciar o atendimento imediato via WhatsApp com o nosso time de especialistas.
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/5511999999999?text=Ol%C3%A1,%20gostaria%20de%20falar%20com%20um%20consultor%20do%20Bliv%20CRM!"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full inline-flex items-center justify-between rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-medium py-3.5 px-5 transition duration-200 hover:scale-105 active:scale-95 shadow-[0_6px_20px_-6px_#25D366]"
            >
              <span>Falar no WhatsApp</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </main>

      <footer className="py-6 border-t border-border/40 text-center text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Bliv CRM. Todos os direitos reservados.</span>
      </footer>
    </div>
  );
}
