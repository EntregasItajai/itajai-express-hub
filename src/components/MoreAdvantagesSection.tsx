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
      title: "Validação Local",
      shortDescription: "Diligência de Campo (Field Research) para validação de dados e segurança em negócios.",
      description: "Oferecemos um serviço especializado de Diligência de Campo (Field Research) para validação de dados e segurança em negócios. Nossa equipe realiza Vistorias de Constatação presenciais para confirmar a existência física de estabelecimentos e validar se os dados declarados são reais antes do fechamento de contratos. Executamos o Levantamento de Informações Cadastrais e Check de Risco, identificando possíveis inconsistências ou endereços fictícios. É uma solução completa de Diligência de Compliance que garante que sua empresa parceira segue normas legais e possui sede ativa conforme anunciado.",
      collapsible: true
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
              shortDescription={advantage.shortDescription}
              collapsible={advantage.collapsible}
              variant="dark"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreAdvantagesSection;
