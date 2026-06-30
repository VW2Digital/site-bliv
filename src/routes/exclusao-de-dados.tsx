import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";
import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export const Route = createFileRoute("/exclusao-de-dados")({
  component: ExclusaoDados,
});

function ExclusaoDados() {
  useEffect(() => {
    if (window.location.hash === "#contato") {
      window.location.href = "/#contato";
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between relative">
      <Nav />
      
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 relative z-10 space-y-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Exclusão de <span className="text-gradient-brand italic font-bold">Dados</span>
        </h1>
        <p className="text-muted-foreground text-sm">Em conformidade com a LGPD e políticas da Meta.</p>
        
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6 text-sm leading-relaxed">
          <p>
            Valorizamos seu controle sobre seus dados pessoais. Se você utilizou nossa plataforma ou deseja remover suas
            informações, conversas ou dados de integração vinculados às APIs da Meta dos nossos servidores, você pode fazer a solicitação abaixo.
          </p>

          <div className="border border-border/60 bg-card/40 p-6 md:p-8 rounded-3xl max-w-lg">
            {success ? (
              <div className="text-center py-6 space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                <h3 className="text-lg font-bold text-foreground">Solicitação Recebida!</h3>
                <p className="text-xs text-muted-foreground">
                  Enviamos uma confirmação para <strong>{email}</strong>. Seus dados e históricos de integração serão totalmente removidos em até 48 horas úteis.
                </p>
              </div>
            ) : (
              <form onSubmit={handleRequest} className="space-y-4">
                <h3 className="text-base font-bold text-foreground mb-1">Solicitar Exclusão</h3>
                <p className="text-xs text-muted-foreground">
                  Insira o e-mail cadastrado ou vinculado ao seu painel comercial para remover todas as informações permanentemente.
                </p>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Seu e-mail</label>
                  <input
                    type="email"
                    required
                    placeholder="Ex: joao@empresa.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-border/60 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-orange focus:outline-none transition"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 group inline-flex items-center justify-between rounded-xl bg-orange hover:bg-orange/90 text-background font-medium py-3 px-5 transition duration-200 hover:scale-105 active:scale-95"
                >
                  <span className="text-sm font-semibold">{loading ? "Processando..." : "Confirmar Exclusão"}</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>

          <section className="space-y-3 pt-6">
            <h2 className="text-xl font-bold text-foreground">Como funciona o processo de exclusão?</h2>
            <p>
              Uma vez solicitada a exclusão, nosso sistema remove de forma irreversível: históricos de mensagens armazenados localmente,
              tokens de acesso vinculados às APIs do WhatsApp, Instagram e Messenger, informações cadastrais e dados analíticos da sua empresa.
              O processo leva no máximo 48 horas.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
