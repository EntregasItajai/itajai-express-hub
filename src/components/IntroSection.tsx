import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const IntroSection = () => {
  const whatsappUrl = "https://wa.me/5547991508563?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

  return (
    <section className="py-16 px-5 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
          Motoboy em Itajaí e Região: Sua Entrega Urgente, Simplificada.
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
          Levar um item, pode ser uma caixa, sacola, mochila, ou que precisar. Postar uma encomenda, ir no cartório. 
          Somos seu parceiro de confiança na região. Como podemos lhe ajudar? Deixe-nos saber suas necessidades 
          específicas e estaremos prontos para atendê-las rapidamente.
        </p>

        <p className="text-xl md:text-2xl font-semibold text-primary mb-8">
          Entre em contato! Sua entrega expressa está a um WhatsApp de distância.
        </p>

        <Button 
          size="lg" 
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            <MessageCircle size={24} />
            Solicitar Orçamento
          </a>
        </Button>
      </div>
    </section>
  );
};

export default IntroSection;