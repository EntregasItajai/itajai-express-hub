import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MessageCircle, ShieldCheck, FileSignature, Building2, Camera, ClipboardCheck } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const sections = [
  {
    number: 1,
    icon: ShieldCheck,
    title: "O Que é uma Diligência Extrajudicial?",
    body: [
      "Diligência extrajudicial é a verificação presencial de um fato, endereço, imóvel ou situação, feita fora de um processo judicial — sem depender de um oficial de justiça ou de uma ordem do tribunal. É um serviço contratado diretamente por advogados, imobiliárias, financeiras ou empresas que precisam confirmar algo com segurança antes de tomar uma decisão.",
      "Na prática, um profissional vai até o local, registra fotos e vídeos com geolocalização, anota data e hora certificadas, e produz um relatório técnico que serve como prova daquilo que foi constatado. Não tem força de ato judicial, mas tem valor probatório real — é documento que pode embasar uma ação, uma negociação ou uma decisão de negócio.",
    ],
  },
  {
    number: 2,
    icon: FileSignature,
    title: "Quando Advogados Devem Solicitar uma Diligência",
    body: [
      "Escritórios de advocacia usam diligências extrajudiciais principalmente para três finalidades: entrega de notificações extrajudiciais com comprovação robusta (quando o correio não é suficiente ou rápido o bastante), coleta de assinaturas em contratos e procurações com verificação de identidade do assinante, e confirmação de endereço ou de atividade comercial de uma parte antes de protocolar uma ação.",
      "O diferencial está na comprovação: uma notificação entregue com foto do recebedor, geolocalização e horário certificado tem muito mais peso do que um simples aviso de recebimento dos Correios, principalmente quando o destinatário nega o recebimento depois.",
    ],
  },
  {
    number: 3,
    icon: Building2,
    title: "Como Imobiliárias Se Beneficiam desse Serviço",
    body: [
      "Para imobiliárias e corretores, a diligência extrajudicial funciona como um seguro contra negócios que não existem de fato. Antes de intermediar a locação ou venda de um imóvel fora da cidade, ou de fechar negócio com um proprietário que nunca foi visto pessoalmente, uma vistoria de constatação confirma se o imóvel realmente existe, está no endereço informado e corresponde ao que foi anunciado.",
      "O mesmo vale para confirmar se uma imobiliária ou escritório parceiro tem sede física de verdade antes de uma parceria — casos de escritórios fantasmas usados em golpes de aluguel são mais comuns do que parecem.",
    ],
  },
  {
    number: 4,
    icon: Camera,
    title: "O Que Diferencia uma Diligência Bem Feita",
    body: [
      "Nem toda visita presencial vira uma prova sólida. Uma diligência bem executada tem quatro elementos: registro fotográfico e em vídeo detalhado, geolocalização confirmando que a visita aconteceu no endereço correto, data e hora certificadas de forma que não possam ser contestadas depois, e um relatório escrito, claro e objetivo, descrevendo exatamente o que foi constatado — sem interpretação, só fatos.",
      "Faltando qualquer um desses elementos, o relatório perde força como prova e vira só um \"alguém foi lá e disse que viu\" — que não resiste a um questionamento sério.",
    ],
  },
  {
    number: 5,
    icon: ClipboardCheck,
    title: "Como Funciona o Processo com a Entregas Itajaí",
    body: [
      "Você descreve o que precisa verificar — um endereço, uma notificação a entregar, uma assinatura a coletar, um imóvel ou veículo a inspecionar — e combinamos prazo e escopo pelo WhatsApp, sem burocracia. Um profissional vai até o local em Itajaí, Navegantes, Camboriú, Balneário Camboriú ou região, realiza a diligência com registro fotográfico e geolocalização, e você recebe um relatório técnico completo, pronto para usar como prova ou para embasar sua decisão.",
      "Atendemos advogados, escritórios de advocacia, imobiliárias, financeiras e empresas que precisam de segurança antes de agir — com agilidade e sem deslocar ninguém do escritório.",
    ],
  },
];

const BlogPostPage = () => {
  const whatsappUrl =
    "https://wa.me/5547991508563?text=Olá!%20Li%20o%20artigo%20sobre%20diligência%20extrajudicial%20e%20gostaria%20de%20solicitar%20uma%20diligência.";

  return (
    <div className="min-h-dvh bg-background">
      <Helmet>
        <title>O Que é Diligência Extrajudicial? Guia para Advogados e Imobiliárias - Blog Entregas Itajaí</title>
        <meta
          name="description"
          content="Entenda o que é uma diligência extrajudicial, quando advogados e imobiliárias devem solicitar uma, e o que diferencia um relatório técnico confiável."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <main>
        <article>
          {/* Cabeçalho do post */}
          <section className="bg-primary text-primary-foreground py-16 px-5">
            <div className="max-w-3xl mx-auto">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-secondary transition-colors text-sm font-semibold mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar para Blog
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-5 text-balance">
                O Que é Diligência Extrajudicial? Guia para Advogados e Imobiliárias
              </h1>
              <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <Calendar className="w-4 h-4" />
                <time dateTime="2026-08-28">28 de agosto de 2026</time>
              </div>
            </div>
          </section>

          {/* Corpo do artigo — leitura estilo Medium */}
          <section className="py-14 px-5">
            <div className="max-w-2xl mx-auto">
              <motion.p
                {...fadeUp}
                className="text-xl leading-relaxed text-foreground/90 font-medium mb-12 border-l-4 border-secondary pl-5"
              >
                Se você já precisou confirmar se um imóvel, uma empresa ou um vendedor realmente existem antes de
                fechar negócio — ou já teve uma notificação extrajudicial contestada por falta de prova de entrega —
                este guia é para você.
              </motion.p>

              <div className="space-y-14">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <motion.div key={section.number} {...fadeUp}>
                      <div className="flex items-center gap-4 mb-5">
                        <span className="flex-shrink-0 w-11 h-11 rounded-full bg-soft-green flex items-center justify-center text-secondary font-bold text-lg">
                          {section.number}
                        </span>
                        <h2 className="text-2xl md:text-[1.75rem] font-bold text-foreground leading-snug">
                          {section.title}
                        </h2>
                      </div>
                      <div className="pl-[3.75rem] space-y-4">
                        {section.body.map((paragraph, i) => (
                          <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* CTA final */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-primary text-primary-foreground py-16 px-5"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Precisa de uma Diligência em Itajaí e Região?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Fale agora e receba um orçamento rápido, sem burocracia.
              </p>
              <Button variant="hero" size="lg" asChild className="text-lg px-8 py-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    const w = window as any;
                    if (typeof w.gtag === "function") {
                      w.gtag("event", "conversion", { send_to: "AW-871515514/hF_WCNj04IEcEPqKyZ8D" });
                    }
                  }}
                >
                  <MessageCircle size={24} />
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
          </motion.section>
        </article>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};

export default BlogPostPage;
