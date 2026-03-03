import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  const whatsappUrl = "https://wa.me/5547991508563?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

  return (
    <section className="bg-card py-16 px-5 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-card-foreground">
          Pronto para agilizar seu dia?
        </h2>
        <p className="text-xl mb-8 text-muted-foreground">
          Fale agora com nossa equipe pelo WhatsApp e o motoboy vai onde precisar para você.
        </p>
        <Button 
          variant="whatsapp" 
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
    </section>
  );
};

export default CTASection;