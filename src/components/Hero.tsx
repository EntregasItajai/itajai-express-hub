import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-motoboy-new.jpg";
import MotoboyAnimationSection from "@/components/MotoboyAnimationSection";

const Hero = () => {
  const whatsappUrl = "https://wa.me/5547991508563?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

  return (
    <section
      className="relative overflow-hidden bg-primary text-primary-foreground text-center py-16 md:py-20 px-5 min-h-[540px] sm:min-h-[580px] md:min-h-[600px] flex items-center justify-center"
      aria-label="Motoboy para coletar assinatura em Itajaí - Diligências e vistorias técnicas"
    >
      {/* Foto de fundo: mais escurecida/dessaturada no mobile para reduzir poluição visual atrás do texto */}
      <div
        className="absolute inset-0 bg-cover bg-[position:50%_35%] sm:bg-[position:50%_30%] md:bg-center brightness-[0.8] saturate-[0.85] md:brightness-100 md:saturate-100"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />

      {/* Overlay em gradiente (mais forte embaixo, onde fica o texto e a faixa animada) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(15,23,42,0.72) 0%, rgba(26,42,68,0.68) 45%, rgba(15,23,42,0.85) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mx-auto max-w-2xl rounded-2xl bg-primary/35 md:bg-transparent backdrop-blur-sm md:backdrop-blur-0 px-5 py-7 sm:px-6 sm:py-8 md:p-0">
          <motion.h1
            initial={{ opacity: 0, x: -100, y: -60 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 uppercase tracking-wide leading-tight"
          >
            MOTOBOY EM ITAJAÍ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 100, y: -40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-base sm:text-xl md:text-2xl max-w-3xl mx-auto mb-4 leading-relaxed"
          >
            Você com mais tempo para o que realmente importa. Somos seu braço externo,
            seu assistente de confiança para a correria do dia a dia.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -80, y: 60 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="text-sm sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed text-secondary font-semibold"
          >
            Especialistas em Diligências In Loco, Constatação de Conformidade e Levantamento de Informações.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: 80, y: 80 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          >
            <Button
              variant="hero"
              size="lg"
              asChild
              className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => { const w = window as any; if (typeof w.gtag === 'function') { w.gtag('event', 'conversion', {'send_to': 'AW-871515514/hF_WCNj04IEcEPqKyZ8D'}); } }}>
                <MessageCircle size={24} />
                Chamar no WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
      <MotoboyAnimationSection />
    </section>
  );
};

export default Hero;
