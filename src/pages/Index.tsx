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
        <title>Motoboy em Itajaí | Entregas Rápidas e Logística Inteligente</title>
        <meta name="description" content="O melhor serviço de motoboy em Itajaí para empresas e advogados. Especialistas em logística corporativa, diligências para levantamento de informações e entregas rápidas." />
        <meta name="keywords" content="motoboy itajaí, motoboy em itajaí, coletar assinatura itajaí, diligência verificação anúncio, vistoria técnica obra, entrega contrato bancário, verificação endereço, combate golpes itajaí, logística corporativa" />
        <link rel="canonical" href="https://www.entregasitajai.com.br/" />
        <meta property="og:title" content="Motoboy em Itajaí | Entregas Rápidas e Logística Inteligente" />
        <meta property="og:description" content="O melhor serviço de motoboy em Itajaí para empresas e advogados. Especialistas em logística corporativa, diligências para levantamento de informações e entregas rápidas." />
        <meta property="og:url" content="https://www.entregasitajai.com.br/" />
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
