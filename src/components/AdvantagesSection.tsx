import AdvantageCard from "./AdvantageCard";
import { Building2, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Building2,
      title: "Soluções para Empresas",
      description: "Parceiro logístico ideal: retiradas e entregas em transportadoras de Itajaí e região, incluindo transportadoras aéreas no Aeroporto de Navegantes, além de protocolos em prefeituras, cartórios e repartições."
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
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
                y: index < advantages.length / 2 ? -60 : 60,
              }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            >
              <AdvantageCard
                icon={advantage.icon}
                title={advantage.title}
                description={advantage.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
