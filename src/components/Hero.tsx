import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import heroImage from "@/assets/hero-motoboy-new.jpg";
import MotoboyAnimationSection from "@/components/MotoboyAnimationSection";

const Hero = () => {
  const whatsappUrl = "https://wa.me/5547991508563?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

  return (
    <section 
      className="relative bg-primary text-primary-foreground text-center py-20 px-5 min-h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(26, 42, 68, 0.8), rgba(26, 42, 68, 0.8)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-label="Motoboy para coletar assinatura em Itajaí - Diligências e vistorias técnicas"
    >
      <div className="max-w-4xl mx-auto z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 uppercase tracking-wide">
          MOTOBOY EM ITAJAÍ
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-4 leading-relaxed">
          Você com mais tempo para o que realmente importa. Somos seu braço externo, 
          seu assistente de confiança para a correria do dia a dia.
        </p>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed text-secondary font-semibold">
          Especialistas em Diligências In Loco, Apoio Jurídico e Vistorias Técnicas de Edificações.
        </p>
        <Button 
          variant="hero" 
          size="lg"
          asChild
          className="text-lg px-8 py-4"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => { const w = window as any; if (typeof w.gtag === 'function') { w.gtag('event', 'conversion', {'send_to': 'AW-871515514/hF_WCNj04IEcEPqKyZ8D'}); } }}>
            <MessageCircle size={24} />
            Chamar no WhatsApp
          </a>
        </Button>
      </div>
      <MotoboyAnimationSection />
    </section>
  );
};

export default Hero;