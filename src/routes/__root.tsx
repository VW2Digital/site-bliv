import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import favicon from "../assets/favicon.png";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Bliv CRM — Sua operação omnichannel com WhatsApp, Instagram e IA" },
      { name: "description", content: "Integre WhatsApp, Instagram e Messenger em um único painel, crie campanhas de disparo em massa, monitore métricas, construa fluxos de bots e escale atendimentos com agentes de IA." },
      { name: "author", content: "Bliv CRM" },
      { property: "og:title", content: "Bliv CRM — Sua operação omnichannel com WhatsApp, Instagram e IA" },
      { property: "og:description", content: "Integre WhatsApp, Instagram e Messenger em um único painel, crie campanhas de disparo em massa, monitore métricas, construa fluxos de bots e escale atendimentos com agentes de IA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@blivcrm" },
      { name: "twitter:title", content: "Bliv CRM — Sua operação omnichannel com WhatsApp, Instagram e IA" },
      { name: "twitter:description", content: "Integre WhatsApp, Instagram e Messenger em um único painel, crie campanhas de disparo em massa, monitore métricas, construa fluxos de bots e escale atendimentos com agentes de IA." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b8eb7cf1-1d54-4867-806f-07514de8d143/id-preview-2c743c09--8824d971-1cfb-4b0a-ace2-6dffd98bf840.lovable.app-1782792827332.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b8eb7cf1-1d54-4867-806f-07514de8d143/id-preview-2c743c09--8824d971-1cfb-4b0a-ace2-6dffd98bf840.lovable.app-1782792827332.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/png",
        href: favicon,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function CookiesPopup() {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[9999] bg-card/95 border border-border/80 p-5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl animate-in fade-in slide-in-from-bottom-10 duration-500">
      <h3 className="text-sm font-semibold text-foreground">🍪 Nós valorizamos sua privacidade</h3>
      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
        Usamos cookies para melhorar sua experiência, analisar tráfego e personalizar conteúdo de acordo com nossa{" "}
        <a href="/politica-de-privacidade" className="text-orange hover:underline font-medium">
          Política de Privacidade
        </a>
        .
      </p>
      <div className="mt-4 flex items-center justify-end gap-4">
        <a href="/politica-de-privacidade" className="text-xs text-muted-foreground hover:text-foreground transition">
          Saber mais
        </a>
        <button
          onClick={handleAccept}
          className="rounded-lg bg-orange hover:bg-orange/90 text-background px-4 py-2 text-xs font-semibold transition"
        >
          Aceitar todos
        </button>
      </div>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <CookiesPopup />
    </QueryClientProvider>
  );
}
