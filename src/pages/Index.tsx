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
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Motoboy em Itajaí | Diligências, Coleta de Assinaturas e Vistorias Técnicas</title>
        <meta name="description" content="Motoboy para coletar assinatura em Itajaí. Diligências in loco, verificação de anúncios, vistoria técnica de obra e entrega de contrato bancário com digitalização. Combate a golpes e verificação de endereço." />
        <meta name="keywords" content="motoboy itajaí, coletar assinatura itajaí, diligência verificação anúncio, vistoria técnica obra, entrega contrato bancário, verificação endereço, combate golpes itajaí" />
        <link rel="canonical" href="https://entregasitajai.com.br/" />
        <meta property="og:title" content="Motoboy em Itajaí | Diligências e Vistorias Técnicas" />
        <meta property="og:description" content="Especialistas em diligências in loco, coleta de assinaturas, verificação de anúncios e vistorias técnicas de edificações em Itajaí e região." />
        <meta property="og:url" content="https://entregasitajai.com.br/" />
        <meta property="og:type" content="website" />
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
