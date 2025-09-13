import servicesImage from "@/assets/motoboy-with-documents-clean.png";

const DetailedServices = () => {
  const services = [
    {
      title: "DOCUMENTOS",
      description: "Coleta de assinatura, ida em cartórios e prefeituras, impressão de arquivos para anexar ou dar entrada em procedimentos. Retirada de documentos aduaneiros."
    },
    {
      title: "MERCADORIAS",
      description: "Coleta em lojas e transportadoras. Entrega em mãos ou despacho por via aérea, terrestre ou postagem."
    },
    {
      title: "ASSISTENTE PESSOAL",
      description: "Buscar um item na casa de um amigo. Levar um material para você onde for preciso. Retirar compras, levar presentes."
    }
  ];

  return (
    <section className="bg-card py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-5">
        <div className="text-center lg:order-2">
          <img 
            src={servicesImage} 
            alt="Serviços de Motoboy em Itajaí" 
            className="w-full h-auto rounded-xl shadow-card hover:shadow-card-hover transition-shadow duration-300"
          />
        </div>
        <div className="space-y-8 lg:order-1">
          {services.map((service, index) => (
            <div key={index} className="space-y-3">
              <h3 className="text-2xl font-bold text-accent">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;