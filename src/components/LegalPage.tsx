import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";

interface LegalPageProps {
  title: string;
  metaTitle: string;
  description: string;
  path: string;
  updatedAt: string;
  children: ReactNode;
}

// Layout compartilhado das páginas legais (privacidade, termos de uso).
// Os estilos dos elementos internos ficam aqui para o conteúdo ser só HTML semântico.
const LegalPage = ({ title, metaTitle, description, path, updatedAt, children }: LegalPageProps) => {
  const url = `https://www.entregasitajai.com${path}`;

  return (
    <div className="min-h-dvh bg-background">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://www.entregasitajai.com/entregasitajai-og-image.jpg" />
      </Helmet>
      <Header />
      <main>
        <section className="bg-primary text-primary-foreground py-16 px-5">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wide">{title}</h1>
            <p className="text-secondary font-semibold">Atualizado em {updatedAt}</p>
          </div>
        </section>

        <article
          className="max-w-3xl mx-auto px-5 py-12 text-foreground leading-relaxed
            [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-10 [&_h2]:mb-4
            [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2
            [&_p]:mb-4 [&_p]:text-muted-foreground
            [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-1 [&_li]:text-muted-foreground
            [&_a]:text-accent [&_a]:underline [&_a:hover]:opacity-80
            [&_strong]:text-foreground"
        >
          {children}
        </article>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};

export default LegalPage;
