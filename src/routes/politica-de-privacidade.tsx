import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";
import { useEffect } from "react";

export const Route = createFileRoute("/politica-de-privacidade")({
  component: PoliticaPrivacidade,
});

function PoliticaPrivacidade() {
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
          Política de <span className="text-gradient-brand italic font-bold">Privacidade</span>
        </h1>
        <p className="text-muted-foreground text-sm">Última atualização: 30 de Junho de 2026</p>
        
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">1. Coleta de Informações</h2>
            <p>
              Coletamos informações pessoais que você nos fornece diretamente, como nome, endereço de e-mail,
              número de telefone (WhatsApp) e o nome da sua empresa quando você se cadastra ou entra em contato conosco.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">2. Uso das Informações</h2>
            <p>
              Usamos os dados coletados para fornecer, manter e melhorar nossos serviços comerciais, processar cadastros,
              enviar comunicações importantes e oferecer suporte técnico ou comercial personalizado.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">3. Compartilhamento de Dados</h2>
            <p>
              Não compartilhamos, vendemos ou alugamos suas informações pessoais para terceiros. Seus dados são utilizados
              estritamente para viabilizar as comunicações entre você e a equipe do Bliv CRM.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">4. Integração com APIs Oficiais da Meta</h2>
            <p>
              Nossa ferramenta funciona em conformidade com as políticas de privacidade da Meta. As conversas, números de telefone
              e dados de clientes trafegados por meio das integrações do WhatsApp, Instagram e Messenger seguem os padrões de
              criptografia e segurança exigidos pela Meta.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-foreground">5. Seus Direitos</h2>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de acessar, corrigir, portar ou solicitar
              a exclusão definitiva dos seus dados pessoais armazenados em nossos sistemas.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
