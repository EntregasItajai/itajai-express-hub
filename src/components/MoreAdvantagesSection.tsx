import AdvantageCard from "./AdvantageCard";
import { FileSignature, User, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

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
      title: "Diligência de Campo e Vistoria de Constatação",
      shortDescription: "Diligenciador experiente faz a verificação presencial no lugar do cliente — em qualquer situação que exija presença física no local.",
      description: "Nosso diligenciador tem ampla experiência em atividades comerciais e diligências externas, e vai pessoalmente ao local para ser os olhos do cliente que não pode (ou não quer) ir até lá conferir — um estabelecimento, um veículo, um container, uma obra, uma empresa em processo judicial ou qualquer situação que exija presença física no local.\n\nMais do que uma visita ao endereço: é uma abordagem profissional, com comunicação adequada a cada ambiente e interlocutor, observação atenta e levantamento de informações que não aparecem numa consulta cadastral ou documental.\n\nAtendemos Vistorias de Constatação, Verificação de Endereço, Inspeção de Veículos e Bens, Levantamento de Informações Cadastrais e diligências de apoio à análise de conformidade em Itajaí, Navegantes, Balneário Camboriú e região — com relatório objetivo e registro fotográfico para subsidiar decisões comerciais e jurídicas.",
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
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
                y: 60,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            >
              <AdvantageCard
                icon={advantage.icon}
                title={advantage.title}
                description={advantage.description}
                shortDescription={advantage.shortDescription}
                collapsible={advantage.collapsible}
                variant="dark"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreAdvantagesSection;
