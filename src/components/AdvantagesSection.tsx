import AdvantageCard from "./AdvantageCard";
import { Clock, Building2, MapPin, MessageCircle } from "lucide-react";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Clock,
      title: "Ganhe Tempo",
      description: "Oferecemos agilidade e confiabilidade em Itajaí e região. Entregas expressas de documentos e pequenos objetos (até 50 kg) com rapidez e segurança."
    },
    {
      icon: Building2,
      title: "Soluções para Empresas",
      description: "Parceiro logístico ideal: retiradas e entregas em transportadoras de Itajaí e região, incluindo transportadoras aéreas no Aeroporto de Navegantes, além de protocolos em prefeituras, cartórios e repartições."
    },
    {
      icon: MapPin,
      title: "Cobertura Regional",
      description: "Itajaí, Navegantes, Penha, Piçarras, Balneário Camboriú, Camboriú, Itapema e cidades próximas."
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