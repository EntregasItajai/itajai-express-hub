import AdvantageCard from "./AdvantageCard";
import { FileSignature, User, ShieldCheck } from "lucide-react";

const MoreAdvantagesSection = () => {
  const advantages = [
    {
      icon: FileSignature,
      title: "Documentos",
      description: "Retiradas, envios, protocolos, visita técnica para coleta de assinaturas em contratos, notificações para jurídico, suporte a despachante veicular ou aduaneiro."
    },
    {
      icon: User,
      title: "Assistência Pessoal",
      description: "Buscamos itens pessoais por você: chave da casa ou escritório, celular na assistência, retirada em lojas, entregar um presente, buscar um item na casa de um amigo — praticidade e cuidado no seu dia a dia."
    },
    {
      icon: ShieldCheck,
      title: "Diligências Anti-Golpe",
      description: "Diligência para verificação de anúncio de veículo, imóvel ou empresa. Confirmação de existência de comércio presencial e verificação de endereço para combate a golpes."
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
