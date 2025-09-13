import AdvantageCard from "./AdvantageCard";
import { FileText, MapPin, User, Search, MessageCircle } from "lucide-react";

const MoreAdvantagesSection = () => {
  const advantages = [
    {
      icon: FileText,
      title: "Documentos",
      description: "Notificações, protocolos, diligências e coleta de assinaturas."
    },
    {
      icon: User,
      title: "Assistência Pessoal",
      description: "Buscamos itens pessoais por você: chave esquecida, celular com um amigo, retirada em lojas e presentes — praticidade e cuidado no seu dia a dia."
    },
    {
      icon: MapPin,
      title: "Cobertura Regional",
      description: "Itajaí, Navegantes, Penha, Piçarras, Balneário Camboriú, Camboriú, Itapema e cidades próximas."
    },
    {
      icon: Search,
      title: "Suporte Operacional",
      description: "Visitas in loco, diligências e levantamentos de informações — como se fosse o cliente vendo de perto cada detalhe."
    },
    {
      icon: MessageCircle,
      title: "Orçamento Imediato",
      description: "Acione pelo WhatsApp e receba retorno rápido, sem burocracia. Super simples!"
    }
  ];

  return (
    <section className="bg-primary py-16 px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary-foreground">
          Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
              variant="dark"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreAdvantagesSection;