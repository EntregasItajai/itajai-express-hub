import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import CTASection from "@/components/CTASection";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MoreAdvantagesSection from "@/components/MoreAdvantagesSection";
import HoursSection from "@/components/HoursSection";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const Index = () => {
  return (
    <div className="min-h-dvh bg-background">
      <Helmet>
        <title>Motoboy em Itajaí | Entrega Rápida, Motoboy Express e Tele-Entrega</title>
        <meta name="description" content="Motoboy em Itajaí para entrega rápida, motoboy express e tele-entrega de documentos. Diligenciador de confiança em Itajaí, Navegantes e Balneário Camboriú." />
        <meta name="keywords" content="motoboy itajaí, motoboy em itajaí, entrega rápida, motoboy express, tele entrega, diligenciador, entregar notificação, motoboy navegantes, motoboy balneário camboriú, coletar assinatura itajaí, diligência verificação anúncio, vistoria técnica obra, entrega contrato bancário, verificação endereço, combate golpes itajaí, logística corporativa" />
        <link rel="canonical" href="https://www.entregasitajai.com/" />
        <meta property="og:title" content="Motoboy em Itajaí | Entrega Rápida, Motoboy Express e Tele-Entrega" />
        <meta property="og:description" content="Motoboy em Itajaí para entrega rápida, motoboy express e tele-entrega de documentos. Diligenciador de confiança em Itajaí, Navegantes e Balneário Camboriú." />
        <meta property="og:url" content="https://www.entregasitajai.com/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.entregasitajai.com/#service",
            "serviceType": ["Courier Service", "Delivery Service", "Motorcycle Courier"],
            "name": "Entrega Rápida e Motoboy Express em Itajaí",
            "alternateName": "Tele-entrega em Itajaí",
            "description": "Motoboy em Itajaí para entrega rápida e tele-entrega de documentos, encomendas e pequenos volumes, com diligenciador especializado para entregar notificação e apoio jurídico.",
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://www.entregasitajai.com/#organization",
              "name": "Entregas Itajaí",
              "telephone": "+55 47 99150-8563"
            },
            "areaServed": [
              { "@type": "City", "name": "Itajaí" },
              { "@type": "City", "name": "Navegantes" },
              { "@type": "City", "name": "Camboriú" },
              { "@type": "City", "name": "Balneário Camboriú" }
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços de Motoboy em Itajaí",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Entrega Rápida / Motoboy Express",
                    "description": "Entregas expressas de documentos e pequenos volumes no mesmo dia"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Tele-entrega",
                    "description": "Coleta e entrega solicitadas por telefone ou WhatsApp, sem burocracia"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Diligenciador / Entrega de Notificação",
                    "description": "Diligenciador para entregar notificação extrajudicial, protocolos e coleta de assinaturas"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <Header />
      <main>
        <Hero />
        <IntroSection />
        <MoreAdvantagesSection />
        <AdvantagesSection />
        <CTASection />
        <VideoSection />
        <TestimonialsSection />
        <HoursSection />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
