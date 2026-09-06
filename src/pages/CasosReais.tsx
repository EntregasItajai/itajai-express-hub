import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TechnicalReportBadge from "@/components/TechnicalReportBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Building2, Car, Package, Radio, ShieldCheck, AlertTriangle, CheckCircle, BadgeCheck } from "lucide-react";

const CasosReais = () => {
  const whatsappUrl = "https://wa.me/5547991508563?text=Vi%20os%20casos%20reais%20no%20site%20e%20gostaria%20de%20um%20orçamento%20para%20uma%20vistoria%20similar.";

  const casos = [
    {
      icon: Building2,
      title: "Auditoria de Existência Física e Legitimidade Cadastral",
      subtitle: "Validação de Sede Administrativa em Edifício Empresarial",
      description: "Um profissional liberal de outra cidade buscava locar uma sala em um renomado Edifício Empresarial no centro de Itajaí. Antes da formalização contratual, solicitou nossa Diligência de Campo para atestar a existência física da imobiliária e da unidade negociada.",
      resultado: "Nossa Vistoria In Loco revelou uma inconsistência crítica: a numeração da sala informada sequer constava na planta do edifício, e não havia registro da referida empresa no local. O relatório técnico detalhado serviu como prova de Check de Risco, impedindo que o cliente avançasse em uma negociação sem lastro real e protegendo seu investimento.",
      tipo: "Auditoria de Campo",
      cor: "accent"
    },
    {
      icon: Car,
      title: "Vistoria de Constatação de Ativos",
      subtitle: "Validação de Ofertas e Veículos em Plataformas Digitais",
      description: "Um investidor de fora do estado demonstrou interesse em um veículo anunciado online. A diligência foi acionada para confirmar se o ativo estava disponível e em posse do anunciante.",
      resultado: "Através da Diligência de Campo, comprovamos que o anúncio utilizava informações de um bem já comercializado anteriormente. A verificação de legitimidade evitou uma transação insegura baseada em dados divergentes.",
      tipo: "Vistoria de Constatação",
      cor: "accent"
    },
    {
      icon: Package,
      title: "Auditoria de Capacidade Operacional e Estoque",
      subtitle: "Check de Risco para Aquisição de Equipamentos",
      description: "Uma empresa buscava a aquisição de containers para um projeto de engenharia. A vistoria foi solicitada para atestar a existência do estoque e a saúde operacional do fornecedor.",
      resultado: "A inspeção presencial revelou que o pátio não possuía os itens anunciados e apresentava sinais de inatividade. O relatório técnico reportou a divergência entre o vídeo comercial e a realidade atual, garantindo a conformidade da compra.",
      tipo: "Check de Risco",
      cor: "accent"
    },
    {
      icon: Radio,
      title: "Vistoria Técnica: Monitoramento e Licenciamento Ambiental",
      subtitle: "Licenciamento Ambiental para Telecomunicações",
      description: "Uma empresa de telecomunicações necessitava de um levantamento detalhado e registro fotográfico de torres de transmissão para instruir um processo de licenciamento ambiental. O objetivo era identificar a presença de ninhos que afetavam a estrutura e o funcionamento dos equipamentos.",
      resultado: "Realizamos vistorias técnicas presenciais em 12 torres na região, produzindo fotos e vídeos detalhados com metadados de geolocalização e data. O relatório de constatação documentou as condições estruturais e a presença de fauna sinantrópica. O relatório técnico foi aceito integralmente pelo órgão ambiental, permitindo o sucesso na solicitação de licença para remanejo adequado e manutenção das torres.",
      tipo: "Vistoria Técnica",
      cor: "accent"
    }
  ];

  return (
    <div className="min-h-dvh bg-background">
      <Helmet>
        <title>Diligenciador em Itajaí: Casos Reais de Inteligência de Campo | Entregas Itajaí</title>
        <meta name="description" content="Veja casos reais de um diligenciador em Itajaí: vistorias técnicas, auditorias de campo e verificações de conformidade para decisões estratégicas e corporativas." />
        <meta name="keywords" content="diligenciador, diligenciador itajaí, auditoria de campo itajaí, vistoria de constatação, check de risco, validação de ativos, inteligência de campo, verificação corporativa, motoboy itajaí" />
        <link rel="canonical" href="https://www.entregasitajai.com/casos-reais" />
        <meta property="og:title" content="Diligenciador em Itajaí: Casos Reais de Inteligência de Campo" />
        <meta property="og:description" content="Veja como nosso diligenciador em Itajaí garante segurança para decisões estratégicas e corporativas com vistorias técnicas e auditorias de campo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.entregasitajai.com/casos-reais" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.entregasitajai.com/casos-reais#service",
            "serviceType": ["Private Investigation Service", "Field Verification Service", "Risk Assessment Service"],
            "name": "Diligenciador e Auditoria de Campo em Itajaí",
            "alternateName": "Diligenciador em Itajaí",
            "description": "Diligenciador em Itajaí para auditorias de campo, vistorias de constatação e checagem de risco, com casos reais de validação de ativos e verificação corporativa.",
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://www.entregasitajai.com/#organization",
              "name": "Entregas Itajaí",
              "telephone": "+55 47 99150-8563"
            },
            "areaServed": [
              { "@type": "City", "name": "Itajaí" },
              { "@type": "City", "name": "Navegantes" },
              { "@type": "City", "name": "Camboriú" },
              { "@type": "City", "name": "Balneário Camboriú" }
            ]
          })}
        </script>
      </Helmet>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, x: -100, y: -40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide"
            >
              Casos Reais: Inteligência de Campo em Ação
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 100, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Cada diligência é um compromisso com a verdade. Veja como nossas vistorias
              e levantamentos técnicos fornecem a segurança necessária para decisões estratégicas e corporativas.
            </motion.p>
          </div>
        </section>

        {/* Estatísticas */}
        <section className="py-12 px-5 bg-accent/10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "150+", label: "Riscos Identificados" },
                { value: "R$ 2M+", label: "Capital Protegido" },
                { value: "500+", label: "Vistorias Realizadas" },
                { value: "100%", label: "Relatórios Entregues" },
              ].map(({ value, label }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{value}</div>
                  <div className="text-sm text-muted-foreground">{label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cards de Casos */}
        <section className="py-16 px-5">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Diligências que Fazem a Diferença
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cada vistoria conta uma história. Veja casos reais onde nossa
                inteligência de campo garantiu segurança e conformidade.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {casos.map((caso, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -70 : 70, y: 50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: (index % 2) * 0.15, ease: "easeOut" }}
                >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className="bg-accent/10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-accent/20">
                        <caso.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide mb-1 text-accent">
                          {caso.tipo}
                        </div>
                        <CardTitle className="text-xl">{caso.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{caso.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-semibold text-foreground">Situação:</span>
                        </div>
                        <p className="text-muted-foreground text-sm">{caso.description}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          <span className="text-sm font-semibold text-foreground">Resultado:</span>
                        </div>
                        <p className="text-muted-foreground text-sm">{caso.resultado}</p>
                      </div>
                      {/* Selo de História Real */}
                      <div className="pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <BadgeCheck className="w-4 h-4 text-accent" />
                          <span className="italic">História real baseada em diligência executada pela Entregas Itajaí</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Alerta */}
        <section className="py-12 px-5 bg-accent/10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ShieldCheck className="w-16 h-16 text-accent mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Segurança e Transparência para os Seus Negócios
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              <strong>Proteção de interesses</strong> através de verificação profissional.
              Solicite uma diligência para <strong>garantia de veracidade</strong> de anúncios de veículos,
              imóveis ou empresas antes de fechar negócio.
            </p>
          </motion.div>
        </section>

        <TechnicalReportBadge />

        {/* CTA */}
        <section className="bg-primary text-primary-foreground py-16 px-5">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proteja seu Investimento
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Solicite uma diligência antes de fechar negócio
            </p>
            <Button
              variant="hero"
              size="lg"
              asChild
              className="text-lg px-8 py-4"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => { const w = window as any; if (typeof w.gtag === 'function') { w.gtag('event', 'conversion', {'send_to': 'AW-871515514/hF_WCNj04IEcEPqKyZ8D'}); } }}>
                <MessageCircle size={24} />
                Solicitar Verificação
              </a>
            </Button>
          </motion.div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};

export default CasosReais;
