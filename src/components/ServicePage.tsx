import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, AlertCircle, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TechnicalReportBadge from "@/components/TechnicalReportBadge";
import { Button } from "@/components/ui/button";
import { whatsappUrlForPath } from "@/lib/whatsappMessages";

/**
 * Molde das páginas de serviço especializado (verificação de endereço, vistoria de veículo em leilão etc.).
 * O molde é igual, o conteúdo não: cada página traz seu próprio problema, método, limites e perguntas.
 * Os botões de WhatsApp usam a mensagem da página (src/lib/whatsappMessages.ts), e o clique já é medido
 * pelo rastreamento global (src/lib/tracking.ts), por isso não há gtag aqui dentro.
 */

export interface ServiceBlock {
  title: string;
  intro?: string;
  items: string[];
}

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ServicePageProps {
  path: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  serviceName: string;
  serviceType: string[];
  audience: string;
  h1: string;
  lead: string;
  ctaLabel: string;
  forWhom: { title: string; items: string[] };
  problem: { title: string; paragraphs: string[] };
  method: ServiceBlock;
  extra?: ServiceBlock;
  /** Caso real já publicado em /casos-reais, usado como evidência na página. */
  caso: { titulo: string; situacao: string; resultado: string };
  limits: ServiceBlock;
  steps: string[];
  faqs: ServiceFaq[];
  related: { to: string; label: string }[];
  dateModified: string;
}

const AREA_SERVED = ["Itajaí", "Navegantes", "Camboriú", "Balneário Camboriú"];

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

const ServicePage = (p: ServicePageProps) => {
  const url = `https://www.entregasitajai.com${p.path}`;
  const whatsappUrl = whatsappUrlForPath(p.path);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: p.serviceName,
      serviceType: p.serviceType,
      description: p.metaDescription,
      url,
      audience: { "@type": "Audience", audienceType: p.audience },
      provider: {
        "@type": "LocalBusiness",
        "@id": "https://www.entregasitajai.com/#organization",
        name: "Entregas Itajaí",
        telephone: "+55 47 99150-8563",
      },
      areaServed: AREA_SERVED.map((name) => ({ "@type": "City", name })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: p.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: "https://www.entregasitajai.com/" },
        { "@type": "ListItem", position: 2, name: "Diligências", item: "https://www.entregasitajai.com/diligencias" },
        { "@type": "ListItem", position: 3, name: p.serviceName, item: url },
      ],
    },
  ];

  return (
    <div className="min-h-dvh bg-background">
      <Helmet>
        <title>{p.metaTitle}</title>
        <meta name="description" content={p.metaDescription} />
        <meta name="keywords" content={p.keywords} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={p.metaTitle} />
        <meta property="og:description" content={p.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://www.entregasitajai.com/entregasitajai-og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="article:modified_time" content={p.dateModified} />
        {jsonLd.map((block, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(block)}
          </script>
        ))}
      </Helmet>
      <Header />
      <main>
        {/* Topo */}
        <section className="bg-primary text-primary-foreground py-20 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <nav aria-label="Você está em" className="text-sm opacity-80 mb-6">
              <Link to="/" className="hover:underline">Início</Link>
              {" / "}
              <Link to="/diligencias" className="hover:underline">Diligências</Link>
              {" / "}
              <span>{p.serviceName}</span>
            </nav>
            <h1 className="text-3xl md:text-5xl font-bold mb-5 uppercase tracking-wide">{p.h1}</h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">{p.lead}</p>
            <Button variant="hero" size="lg" asChild className="text-base md:text-lg px-6 md:px-8 py-4 h-auto whitespace-normal text-center">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={24} />
                {p.ctaLabel}
              </a>
            </Button>
          </div>
        </section>

        {/* Problema + para quem */}
        <section className="py-16 px-5">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
            <motion.div className="lg:col-span-2" {...fade}>
              <h2 className="text-3xl font-bold text-foreground mb-4">{p.problem.title}</h2>
              {p.problem.paragraphs.map((t) => (
                <p key={t} className="text-lg text-muted-foreground mb-4 leading-relaxed">{t}</p>
              ))}
            </motion.div>
            <motion.aside className="bg-card rounded-2xl p-8 shadow-lg h-fit" {...fade}>
              <h3 className="text-xl font-semibold text-foreground mb-4">{p.forWhom.title}</h3>
              <ul className="space-y-3 text-muted-foreground">
                {p.forWhom.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </motion.aside>
          </div>
        </section>

        {/* Como fazemos */}
        <section className="py-16 px-5 bg-muted/50">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fade}>
              <h2 className="text-3xl font-bold text-foreground mb-3">{p.method.title}</h2>
              {p.method.intro && (
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{p.method.intro}</p>
              )}
              <ul className="space-y-4">
                {p.method.items.map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">{i}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {p.extra && (
          <section className="py-16 px-5">
            <div className="max-w-5xl mx-auto">
              <motion.div {...fade}>
                <h2 className="text-3xl font-bold text-foreground mb-3">{p.extra.title}</h2>
                {p.extra.intro && (
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{p.extra.intro}</p>
                )}
                <ul className="space-y-4">
                  {p.extra.items.map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <span className="text-foreground">{i}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>
        )}

        <TechnicalReportBadge />

        {/* Caso real */}
        <section className="py-16 px-5">
          <div className="max-w-5xl mx-auto">
            <motion.div className="bg-card rounded-2xl p-8 shadow-lg border border-accent/30" {...fade}>
              <div className="text-xs font-semibold uppercase tracking-wide text-accent mb-2">Caso real</div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{p.caso.titulo}</h2>
              <p className="text-foreground mb-3">
                <strong>Situação: </strong>
                <span className="text-muted-foreground">{p.caso.situacao}</span>
              </p>
              <p className="text-foreground mb-4">
                <strong>Resultado: </strong>
                <span className="text-muted-foreground">{p.caso.resultado}</span>
              </p>
              <Link to="/casos-reais" className="text-accent font-semibold hover:underline">
                Ver todos os casos reais
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Limites */}
        <section className="py-16 px-5">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fade}>
              <h2 className="text-3xl font-bold text-foreground mb-3">{p.limits.title}</h2>
              {p.limits.intro && (
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{p.limits.intro}</p>
              )}
              <ul className="space-y-4">
                {p.limits.items.map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">{i}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Como contratar */}
        <section className="py-16 px-5 bg-muted/50">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fade}>
              <h2 className="text-3xl font-bold text-foreground mb-6">Como contratar</h2>
              <ol className="space-y-4">
                {p.steps.map((s, i) => (
                  <li key={s} className="flex items-start gap-4">
                    <span className="w-9 h-9 rounded-full bg-accent/20 text-accent font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-foreground pt-1">{s}</span>
                  </li>
                ))}
              </ol>
              <p className="text-muted-foreground mt-6">
                Atendemos {AREA_SERVED.slice(0, -1).join(", ")} e {AREA_SERVED[AREA_SERVED.length - 1]}.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Perguntas frequentes */}
        <section className="py-16 px-5">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Perguntas frequentes</h2>
            <div className="space-y-3">
              {p.faqs.map((f) => (
                <details key={f.q} className="group bg-card rounded-xl p-5 shadow-sm">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer font-semibold text-foreground list-none">
                    {f.q}
                    <ChevronDown className="w-5 h-5 flex-shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="text-muted-foreground mt-3 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Links internos */}
        <section className="py-10 px-5 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-semibold text-foreground mb-3">Veja também</h2>
            <ul className="flex flex-wrap gap-3">
              {p.related.map((r) => (
                <li key={r.to}>
                  <Link
                    to={r.to}
                    className="inline-block rounded-full border border-accent/40 px-4 py-2 text-foreground hover:bg-accent/10"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-primary text-primary-foreground py-16 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Peça um orçamento pelo WhatsApp</h2>
            <p className="text-xl mb-8 opacity-90">
              Informe o endereço e o que você precisa saber. O valor depende do bairro e da cidade.
            </p>
            <Button variant="hero" size="lg" asChild className="text-base md:text-lg px-6 md:px-8 py-4 h-auto whitespace-normal text-center">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={24} />
                {p.ctaLabel}
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};

export default ServicePage;
