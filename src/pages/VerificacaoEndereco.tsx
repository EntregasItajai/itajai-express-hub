import ServicePage from "@/components/ServicePage";

const VerificacaoEndereco = () => (
  <ServicePage
    path="/verificacao-de-endereco-itajai"
    metaTitle="Verificação de Endereço em Itajaí | Confirmação no Local com Fotos"
    metaDescription="Verificação de endereço em Itajaí, Navegantes e Balneário Camboriú: confirmamos no local se o endereço existe e se alguém mora ou opera ali, com fotos e relatório em PDF."
    keywords="verificação de endereço itajaí, comprovação de residência itajaí, confirmar endereço comercial, diligência cadastral, correspondente bancário itajaí, diligenciador em itajaí, verificação de empresa no endereço, visita técnica endereço, navegantes, balneário camboriú"
    serviceName="Verificação de Endereço em Itajaí"
    serviceType={["Field Verification Service", "Address Verification"]}
    audience="Financeiras, fintechs, correspondentes bancários, imobiliárias e escritórios de advocacia"
    h1="Verificação de endereço em Itajaí e região"
    lead="Um diligenciador vai até o endereço, confirma o que existe no local e entrega fotos e relatório. Você decide com base no que foi visto, não no que foi declarado no cadastro."
    ctaLabel="Solicitar verificação de endereço"
    forWhom={{
      title: "Quem costuma pedir",
      items: [
        "Financeiras, fintechs e correspondentes bancários",
        "Imobiliárias e administradoras de condomínio",
        "Escritórios de advocacia e assessorias",
        "Revendas e empresas que vão fechar negócio com alguém de fora",
        "Quem vai alugar, comprar ou contratar sem conhecer o local",
        "Quem está em outra cidade, estado ou país, ou não pode se deslocar",
      ],
    }}
    problem={{
      title: "O endereço do cadastro existe e confere?",
      paragraphs: [
        "Endereço digitado em formulário nem sempre corresponde a um imóvel real, a uma empresa em funcionamento ou à pessoa que se apresentou. Conferir por mapa ou telefone não mostra o que está na rua.",
        "Na verificação presencial você recebe a resposta objetiva: o endereço existe, há alguém morando ou operando ali, o que a fachada e a vizinhança indicam e o que não foi possível confirmar.",
      ],
    }}
    method={{
      title: "O que fazemos no local",
      intro: "Cada visita segue o mesmo roteiro, adaptado ao que você precisa saber.",
      items: [
        "Fotografamos a fachada com a numeração legível, a rua e a placa ou o painel de identificação, quando houver.",
        "Perguntamos pelo nome exato do morador ou da empresa na portaria, no comércio ao lado ou aos vizinhos, e registramos se o nome é reconhecido.",
        "Observamos sinais de moradia ou de atividade: movimento, veículo na garagem, relógio de luz e água, letreiros, horário de funcionamento e outras empresas no mesmo endereço.",
        "Quando o endereço não existe ou a numeração não confere, registramos isso com fotos da numeração da rua e com o que os moradores informaram.",
        "Durante a visita, passamos as informações na hora, para você conferir em tempo real e pedir um detalhe a mais antes de sairmos do local.",
        "Entregamos relatório em PDF com fotos, geolocalização e data e hora. O texto separa o que foi constatado pelo diligenciador, o que foi declarado por alguém no local e o que não foi possível verificar.",
      ],
    }}
    caso={{
      titulo: "Sala que não existia na planta do edifício",
      situacao:
        "Um profissional liberal de outra cidade queria alugar uma sala em um edifício empresarial no centro de Itajaí. Antes de fechar o contrato, pediu a diligência de campo para confirmar que a imobiliária e a unidade existiam.",
      resultado:
        "A vistoria no local mostrou que a numeração da sala informada não constava na planta do edifício e que não havia registro da empresa ali. O relatório serviu de prova para o cliente não avançar na negociação.",
    }}
    limits={{
      title: "O que a verificação não faz",
      intro: "Deixamos os limites claros antes de a visita acontecer, para o relatório ser aceito como prova de campo.",
      items: [
        "Não entramos no imóvel sem autorização de quem responde por ele. Em casas, o registro é da frente e do entorno. Em prédios com portaria remota ou sem acesso a moradores, o registro é externo.",
        "Não emitimos opinião nem conclusão sobre a pessoa ou a empresa. Entregamos evidência, e a decisão é sua.",
        "Não perguntamos sobre dívidas, processos ou situação financeira de ninguém.",
        "Não fotografamos pessoas de forma constrangedora nem coletamos dados de terceiros sem motivo legítimo.",
      ],
    }}
    steps={[
      "Envie pelo WhatsApp o endereço completo, o nome do morador ou da empresa e o que você precisa saber.",
      "Informamos o valor, que varia conforme o bairro e a cidade, e o pagamento é antecipado por PIX.",
      "Com o pagamento confirmado, a diligência entra em rota.",
      "Você recebe fotos e o relatório com o que foi constatado no local.",
    ]}
    faqs={[
      {
        q: "Quanto custa uma verificação de endereço?",
        a: "O valor depende do bairro e da cidade onde fica o endereço e do que precisa ser conferido. Envie o endereço pelo WhatsApp e informamos o valor antes de qualquer visita. O pagamento é antecipado por PIX.",
      },
      {
        q: "Vocês entram no imóvel?",
        a: "Não sem autorização de quem responde pelo imóvel. Nas casas, registramos a frente, os sinais de moradia e o que os vizinhos informam. Em prédios com portaria remota, o registro costuma ser externo, mais a conversa com zelador ou funcionários que estiverem disponíveis.",
      },
      {
        q: "Servem para confirmar se uma empresa funciona no endereço?",
        a: "Sim. Confirmamos se a empresa é reconhecida no local, se há operação (movimento, letreiro, horário, outras empresas no mesmo endereço) e registramos tudo com fotos. Quem conclui sobre a empresa é você.",
      },
      {
        q: "O que acontece se o endereço não existir?",
        a: "Isso também é resultado. O relatório registra a numeração da rua com fotos, o que os moradores informaram e que o endereço não foi localizado, para você usar como evidência.",
      },
      {
        q: "O relatório pode ser anexado a um processo ou a um dossiê de crédito?",
        a: "O relatório traz fotos com data, hora e geolocalização e separa o que foi visto, o que foi dito por alguém no local e o que não foi verificado. Isso facilita o uso como evidência de campo, e a avaliação jurídica é de quem o apresenta.",
      },
      {
        q: "Quais cidades vocês atendem?",
        a: "Itajaí, Navegantes, Camboriú e Balneário Camboriú. Para outros endereços da região, consulte pelo WhatsApp.",
      },
    ]}
    related={[
      { to: "/diligencias", label: "Diligências e verificações técnicas" },
      { to: "/vistoria-veiculo-leilao-itajai", label: "Vistoria de veículo em leilão" },
      { to: "/apoio-juridico", label: "Apoio para escritórios de advocacia" },
      { to: "/casos-reais", label: "Casos reais" },
    ]}
    dateModified="2026-11-08"
  />
);

export default VerificacaoEndereco;
