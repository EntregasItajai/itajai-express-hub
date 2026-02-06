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
      title: "Diligências para Levantamento de Informações e Validação Local",
      description: "Oferecemos um serviço especializado de inteligência de campo para validação de dados e segurança em negócios. Nossa equipe realiza visitas técnicas presenciais para verificar a existência de estabelecimentos físicos, validar endereços e realizar registros fotográficos detalhados. Além da constatação visual, executamos levantamentos de informações locais, incluindo entrevistas discretas com vizinhos e verificação de ambiente (investigação social), garantindo que sua tomada de decisão seja baseada em fatos reais apurados in loco."
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
