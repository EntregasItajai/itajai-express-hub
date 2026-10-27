import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import VideoSection from "@/components/VideoSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const VIDEO_TITLE = "Entregas Itajaí — Motoboy Express em Itajaí, SC";
const VIDEO_DESCRIPTION =
  "Vídeo institucional da Entregas Itajaí: a apresentadora Gabi explica como funcionam as entregas, coletas e diligências feitas por nossas equipes de motoboys em Itajaí, Navegantes, Balneário Camboriú e região. Entregamos mais que objetos, entregamos tempo de volta para você.";

// Página de exibição do vídeo institucional. Existe para o Google ter uma página
// em que o vídeo é o conteúdo principal; na home o vídeo segue sem schema.
const Video = () => {
  return (
    <div className="min-h-dvh bg-background">
      <Helmet>
        <title>Vídeo: Motoboy em Itajaí | Entregas Itajaí</title>
        <meta name="description" content={VIDEO_DESCRIPTION} />
        <link rel="canonical" href="https://www.entregasitajai.com/video" />
        <meta property="og:title" content={VIDEO_TITLE} />
        <meta property="og:description" content={VIDEO_DESCRIPTION} />
        <meta property="og:type" content="video.other" />
        <meta property="og:url" content="https://www.entregasitajai.com/video" />
        <meta property="og:image" content="https://www.entregasitajai.com/motoboy-video-cover.png" />
        <meta property="og:video" content="https://www.entregasitajai.com/motoboy-video.mp4" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": VIDEO_TITLE,
            "description": VIDEO_DESCRIPTION,
            "inLanguage": "pt-BR",
            "thumbnailUrl": [
              "https://www.entregasitajai.com/motoboy-video-cover.png"
            ],
            "uploadDate": "2025-09-20T08:00:00-03:00",
            "contentUrl": "https://www.entregasitajai.com/motoboy-video.mp4",
            "duration": "PT1M6S",
            "publisher": {
              "@type": "Organization",
              "@id": "https://www.entregasitajai.com/#organization",
              "name": "Entregas Itajaí"
            }
          })}
        </script>
      </Helmet>
      <Header />
      <main>
        <section className="bg-primary text-primary-foreground pt-16 pb-4 px-5 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wide">
              Motoboy em Itajaí: conheça a Entregas Itajaí
            </h1>
            <p className="text-lg md:text-xl leading-relaxed opacity-90">{VIDEO_DESCRIPTION}</p>
          </div>
        </section>
        <VideoSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};

export default Video;
