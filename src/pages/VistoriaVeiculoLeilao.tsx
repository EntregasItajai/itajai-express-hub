import ServicePage from "@/components/ServicePage";

const VistoriaVeiculoLeilao = () => (
  <ServicePage
    path="/vistoria-veiculo-leilao-itajai"
    metaTitle="Vistoria de Veículo em Leilão em Itajaí | Inspeção com Fotos"
    metaDescription="Vistoria de veículo em pátio de leilão em Itajaí e região: fotos do estado real, conferência de placa e chassi e relatório em PDF antes de você dar o lance. Também visitamos imóveis em leilão."
    keywords="vistoria veículo leilão itajaí, inspeção carro pátio leilão, verificar veículo antes do leilão, vistoria pátio leilão navegantes, diligenciador leilão, visita imóvel leilão itajaí, comprador de leilão de outra cidade, vistoria presencial veículo"
    serviceName="Vistoria de Veículo em Leilão"
    serviceType={["Field Verification Service", "Vehicle Inspection"]}
    audience="Compradores de leilão de outras cidades, revendas de veículos e financeiras"
    h1="Vistoria de veículo em leilão em Itajaí e região"
    lead="Você não precisa viajar para ver o veículo antes do lance. Um diligenciador vai ao pátio, registra o estado real com fotos e entrega um relatório objetivo."
    ctaLabel="Solicitar vistoria de veículo em leilão"
    forWhom={{
      title: "Quem costuma pedir",
      items: [
        "Compradores de leilão que moram em outra cidade ou estado",
        "Revendas e lojistas que compram por leilão",
        "Financeiras e assessorias que avaliam o bem antes de operar",
        "Quem vai arrematar e quer ver o que as fotos do edital não mostram",
      ],
    }}
    problem={{
      title: "As fotos do leilão mostram tudo?",
      paragraphs: [
        "As fotos do edital são escolhidas por quem vende. Danos de lataria, sinais de colisão, vazamentos, o interior e a conferência de placa e chassi só aparecem com alguém olhando o veículo de perto.",
        "A vistoria presencial reduz a surpresa depois do arremate: você vê o veículo como ele está no pátio, antes de decidir o valor do lance.",
      ],
    }}
    method={{
      title: "O que verificamos no pátio",
      intro: "Inspeção visual com registro fotográfico. Vamos ao que você pediu e ao que costuma pesar na decisão.",
      items: [
        "Lataria, pintura e estrutura: amassados, diferenças de tom de pintura, alinhamento e sinais de colisão.",
        "Vazamentos de óleo e de outros fluidos sob o veículo e no compartimento do motor, quando acessível.",
        "Interior: painel, bancos, acabamentos e estado geral de conservação.",
        "Pneus, rodas e itens visíveis de freios e suspensão.",
        "Sinais de alagamento ou de incêndio, como marcas de água, mofo, resíduos e áreas queimadas.",
        "Placa e chassi visíveis, para você conferir com o lote do edital.",
        "Fotos gerais e de detalhe, e vídeo curto quando o pátio permitir.",
      ],
    }}
    extra={{
      title: "Imóvel em leilão: visita ao local",
      intro: "Também fazemos a visita a imóveis em leilão, para quem está decidindo se vale a pena participar.",
      items: [
        "Fotos externas, da fachada, da numeração e do entorno.",
        "Se o imóvel parece ocupado: conversa com portaria, zelador ou vizinhos e observação de sinais de moradia, como relógio de luz e água, carro na garagem e movimento.",
        "Contato da administração ou do síndico, quando alguém no local conseguir informar.",
        "O acesso ao interior depende de autorização. Em prédios com portaria remota, o registro costuma ser externo.",
      ],
    }}
    caso={{
      titulo: "Anúncio de veículo com dados de um bem já vendido",
      situacao:
        "Um investidor de fora do estado se interessou por um veículo anunciado online. A diligência foi pedida para confirmar se o veículo estava disponível e em posse do anunciante.",
      resultado:
        "A diligência de campo comprovou que o anúncio usava informações de um bem já comercializado. A verificação evitou uma transação insegura baseada em dados divergentes.",
    }}
    limits={{
      title: "O que a vistoria não é",
      intro: "É um registro de campo, e não substitui laudo técnico.",
      items: [
        "Não é laudo cautelar, perícia nem avaliação mecânica. Não desmontamos nem testamos o veículo, e não informamos se ele vale o lance.",
        "Cada pátio tem regras próprias de acesso e de horário. Confirmamos o que for possível antes de sair e informamos o que o pátio exigir.",
        "Quem decide o lance é você. O relatório separa o que foi constatado, o que foi declarado por alguém no local e o que não foi possível verificar.",
      ],
    }}
    steps={[
      "Envie pelo WhatsApp o endereço do pátio, o número do lote ou do veículo e o que você quer conferir.",
      "Informamos o valor, que varia conforme o local, e o pagamento é antecipado por PIX.",
      "Com o pagamento confirmado, a vistoria entra em rota.",
      "Você recebe as fotos e o relatório com o estado do veículo no pátio.",
    ]}
    faqs={[
      {
        q: "Quanto custa a vistoria de um veículo em leilão?",
        a: "O valor depende do local do pátio e do que precisa ser conferido. Envie o endereço e os dados do lote pelo WhatsApp e informamos o valor antes da visita. O pagamento é antecipado por PIX.",
      },
      {
        q: "Vocês fazem laudo cautelar ou teste mecânico?",
        a: "Não. A vistoria é uma inspeção visual com fotos, que mostra o estado real do veículo no pátio. Para laudo cautelar ou avaliação mecânica é preciso um profissional habilitado.",
      },
      {
        q: "Precisam de alguma autorização para entrar no pátio?",
        a: "Depende do pátio. Alguns pedem identificação ou autorização do arrematante. Informe o pátio no pedido, e confirmamos as exigências antes de ir.",
      },
      {
        q: "Em quanto tempo recebo as fotos?",
        a: "Depende do horário de funcionamento do pátio e da data do leilão. Informe o prazo no pedido, e confirmamos se é possível atender. Com o pagamento confirmado, a vistoria entra em rota.",
      },
      {
        q: "Servem para imóveis em leilão também?",
        a: "Sim. Fazemos a visita ao local para fotografar o exterior e levantar sinais de ocupação com quem estiver disponível. Entrar no imóvel depende de autorização.",
      },
      {
        q: "Quais cidades vocês atendem?",
        a: "Itajaí, Navegantes, Camboriú e Balneário Camboriú. Para outros pátios da região, consulte pelo WhatsApp.",
      },
    ]}
    related={[
      { to: "/diligencias", label: "Diligências e verificações técnicas" },
      { to: "/verificacao-de-endereco-itajai", label: "Verificação de endereço" },
      { to: "/apoio-juridico", label: "Apoio para escritórios de advocacia" },
      { to: "/casos-reais", label: "Casos reais" },
    ]}
    dateModified="2026-11-08"
  />
);

export default VistoriaVeiculoLeilao;
