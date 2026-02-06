import AdvantageCard from "./AdvantageCard";
import { Building2, MapPin, MessageCircle } from "lucide-react";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Building2,
      title: "Soluções para Empresas",
      description: "Parceiro logístico ideal: vistoria técnica de obra e edificação, protocolos em prefeituras, cartórios, repartições e confirmação de existência de comércio presencial."
    },
    {
      icon: MapPin,
      title: "Cobertura Regional",
      description: "Itajaí, Navegantes, Penha, Piçarras, Balneário Camboriú, Camboriú, Itapema e cidades próximas. Verificação de endereço e combate a golpes em toda região."
    },
    {
      icon: MessageCircle,
      title: "Orçamento Imediato",
      description: "Acione pelo WhatsApp e receba retorno rápido, sem burocracia. Super simples!"
    }
  ];

  return (
    <section className="py-16 px-5 bg-ice">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
