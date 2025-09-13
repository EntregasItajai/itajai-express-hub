import AdvantageCard from "./AdvantageCard";
import { Clock, Building2, User, Headphones } from "lucide-react";

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
      icon: User,
      title: "Assistência Pessoal",
      description: "Buscamos itens pessoais por você: chave esquecida, celular com um amigo, retirada em lojas e presentes — praticidade e cuidado no seu dia a dia."
    },
    {
      icon: Headphones,
      title: "Suporte Profissional",
      description: "Coleta de assinaturas, visitas técnicas para levantamento de informações, registro fotográfico de locais e suporte operacional sob demanda."
    }
  ];

  return (
    <section className="py-16 px-5">
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