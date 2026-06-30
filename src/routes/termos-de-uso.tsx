import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";
import { useEffect } from "react";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Bliv CRM" },
      { name: "description", content: "Condições de uso da plataforma Bliv CRM: responsabilidades, propriedade intelectual e limitações." },
      { property: "og:title", content: "Termos de Uso — Bliv CRM" },
      { property: "og:description", content: "Regras e condições para usar a plataforma Bliv CRM." },
      { property: "og:url", content: "https://pixel-perfect-clone-99477.lovable.app/termos-de-uso" },
    ],
    links: [{ rel: "canonical", href: "https://pixel-perfect-clone-99477.lovable.app/termos-de-uso" }],
  }),
  component: TermosUso,
});

function TermosUso() {
  useEffect(() => {
    if (window.location.hash === "#contato") {
      window.location.href = "/#contato";
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between relative">
      <Nav />
      
      <main className="flex-1 max-w-4xl mx-auto px-6 py-16 relative z-10 space-y-8">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Termos de <span className="text-gradient-brand italic font-bold">Uso</span>
        </h1>
        <p className="text-muted-foreground text-sm">Última atualização: 30 de Junho de 2026</p>
        
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar ou utilizar a plataforma Bliv CRM, você concorda em cumprir e estar vinculado a estes Termos de Uso.
              Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">2. Uso Permitido</h2>
            <p>
              Você concorda em utilizar a plataforma de forma ética, em conformidade com as leis vigentes e sem violar direitos
              de terceiros. O envio de spam ou mensagens não autorizadas através das integrações de WhatsApp e redes sociais é
              estritamente proibido.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">3. Responsabilidade pelas Contas</h2>
            <p>
              Você é responsável por manter a confidencialidade de suas credenciais de login e por todas as atividades que ocorrem sob
              sua conta comercial. Notifique-nos imediatamente sobre qualquer uso não autorizado ou quebra de segurança.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">4. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo, marcas, logotipos, códigos de software e designs da plataforma Bliv CRM são de propriedade exclusiva
              nossa ou de nossos licenciadores e são protegidos pelas leis de propriedade intelectual.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">5. Limitação de Responsabilidade</h2>
            <p>
              O Bliv CRM não se responsabiliza por eventuais perdas financeiras, bloqueios de números devido ao uso indevido de APIs,
              ou interrupções temporárias de serviços que decorram de falhas em servidores terceiros da Meta.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
