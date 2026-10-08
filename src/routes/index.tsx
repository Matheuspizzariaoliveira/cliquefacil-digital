import { createFileRoute } from "@tanstack/react-router";
import heroPreview from "@/assets/hero-preview.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CliqueFácil Digital — Seu negócio digital em poucos cliques" },
      {
        name: "description",
        content:
          "Criação de sites, lojas e apps para pequenos negócios. Design sob medida, publicação em dias e suporte contínuo — sem burocracia.",
      },
      {
        property: "og:title",
        content: "CliqueFácil Digital — Seu negócio digital em poucos cliques",
      },
      {
        property: "og:description",
        content:
          "Criação de sites, lojas e apps para pequenos negócios. Design sob medida, publicação em dias e suporte contínuo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-ink">
      {/* Soft gradient blobs */}
      <div className="pointer-events-none absolute -left-24 -top-32 h-[38rem] w-[38rem] rounded-full bg-brand/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-28 top-40 h-[34rem] w-[34rem] rounded-full bg-mint/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-violet-soft/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-7">
        {/* Header */}
        <header className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-light text-lg font-extrabold text-primary-foreground shadow-lg shadow-brand/30">
              f
            </div>
            <span className="text-[1.35rem] font-extrabold tracking-tight">
              cliquefacil<span className="text-brand">digital</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-[0.95rem] font-medium text-ink/70 md:flex">
            <a href="#servicos" className="transition hover:text-brand">
              Serviços
            </a>
            <a href="#como-funciona" className="transition hover:text-brand">
              Como funciona
            </a>
            <a href="#planos" className="transition hover:text-brand">
              Planos
            </a>
            <a href="#contato" className="transition hover:text-brand">
              Contato
            </a>
          </nav>
          <a
            href="#contato"
            className="rounded-full bg-ink px-5 py-2.5 text-[0.9rem] font-semibold text-primary-foreground shadow-lg shadow-ink/20 transition hover:bg-brand"
          >
            Fazer orçamento
          </a>
        </header>

        {/* Hero */}
        <section className="mt-16 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-card/60 px-4 py-1.5 text-[0.8rem] font-semibold text-brand outline-1 -outline-offset-1 outline-card/70 backdrop-blur-md">
              Digital, simples e rápido
            </span>
            <h1 className="mt-6 text-[2.6rem] font-extrabold leading-[1.05] tracking-tight sm:text-[3.4rem]">
              Seu negócio <span className="text-brand">digital</span> em poucos
              cliques.
            </h1>
            <p className="mt-5 text-[1.15rem] leading-relaxed text-ink/65">
              Do site institucional ao seu primeiro app, a cliquefacildigital
              cuida da criação, do design e da publicação — sem burocracia.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contato"
                className="rounded-full bg-gradient-to-r from-brand to-brand-light px-7 py-3.5 font-semibold text-primary-foreground shadow-xl shadow-brand/30 transition hover:opacity-90"
              >
                Quero meu site
              </a>
              <a
                href="#planos"
                className="rounded-full bg-card/70 px-7 py-3.5 font-semibold text-ink outline-1 -outline-offset-1 outline-card/80 backdrop-blur-md transition hover:outline-brand/40"
              >
                Ver planos
              </a>
            </div>
            <div className="mt-9 flex gap-8 text-sm font-medium text-ink/55">
              <span>
                <b className="block text-xl text-ink">+320</b>projetos entregues
              </span>
              <span>
                <b className="block text-xl text-ink">4,9/5</b>nota dos clientes
              </span>
              <span>
                <b className="block text-xl text-ink">7 dias</b>para publicar
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] bg-card/45 p-5 shadow-2xl shadow-brand/15 outline-1 -outline-offset-1 outline-card/70 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-destructive" />
                <span className="h-3 w-3 rounded-full bg-[oklch(0.8_0.15_85)]" />
                <span className="h-3 w-3 rounded-full bg-mint" />
                <span className="ml-3 text-xs font-semibold text-ink/40">
                  cliquefacildigital.com
                </span>
              </div>
              <img
                src={heroPreview}
                alt="Prévia de site criado pela CliqueFácil Digital"
                width={1200}
                height={720}
                className="aspect-[5/3] w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-ink/5"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card/55 px-5 py-4 shadow-xl shadow-brand/15 outline-1 -outline-offset-1 outline-card/70 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-mint/15 text-xl font-extrabold text-mint">
                  ✓
                </div>
                <div className="text-sm">
                  <b className="block">Site publicado</b>
                  <span className="text-ink/55">em 6 dias</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-5 -right-4 rounded-2xl bg-card/55 px-5 py-3 text-sm shadow-xl shadow-brand/15 outline-1 -outline-offset-1 outline-card/70 backdrop-blur-xl">
              <b className="text-brand">+180%</b>{" "}
              <span className="text-ink/55">contatos</span>
            </div>
          </div>
        </section>

        {/* Como funciona */}
        <section id="como-funciona" className="mt-24 grid gap-6 md:grid-cols-3">
          <div className="glass-card rounded-3xl p-7 shadow-xl shadow-brand/10">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-2xl font-extrabold text-brand">
              1
            </div>
            <h3 className="text-[1.25rem] font-bold">Escolha seu plano</h3>
            <p className="mt-2 leading-relaxed text-ink/60">
              Site, loja ou app — você define o objetivo e a gente monta a
              solução certa.
            </p>
          </div>
          <div className="glass-card rounded-3xl p-7 shadow-xl shadow-brand/10">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-violet-soft/10 text-2xl font-extrabold text-violet-soft">
              2
            </div>
            <h3 className="text-[1.25rem] font-bold">Design sob medida</h3>
            <p className="mt-2 leading-relaxed text-ink/60">
              Um time cria identidade, textos e telas alinhados com a sua
              marca.
            </p>
          </div>
          <div className="glass-card rounded-3xl p-7 shadow-xl shadow-brand/10">
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-mint/10 text-2xl font-extrabold text-mint">
              3
            </div>
            <h3 className="text-[1.25rem] font-bold">Publicação e suporte</h3>
            <p className="mt-2 leading-relaxed text-ink/60">
              Colocamos no ar, ajustamos e acompanhamos a evolução do seu
              projeto.
            </p>
          </div>
        </section>

        {/* CTA / Footer */}
        <footer
          id="contato"
          className="mt-24 flex flex-col items-center justify-between gap-6 rounded-[2rem] bg-ink px-10 py-12 text-primary-foreground shadow-2xl shadow-ink/25 md:flex-row"
        >
          <div className="max-w-lg">
            <h2 className="text-[1.9rem] font-extrabold tracking-tight">
              Pronto para aparecer na internet?
            </h2>
            <p className="mt-2 text-primary-foreground/60">
              Conte sua ideia e receba um plano de projeto digital em até 24h.
            </p>
          </div>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-card px-8 py-4 font-semibold text-ink shadow-xl transition hover:opacity-90"
          >
            Começar agora
          </a>
        </footer>

        <p className="mt-8 text-center text-sm text-ink/45">
          © 2026 CliqueFácil Digital — feito no Brasil.
        </p>
      </div>
    </div>
  );
}
