import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TechnicalReportBadge from "@/components/TechnicalReportBadge";
import { Button } from "@/components/ui/button";
import { MessageCircle, CreditCard, ShieldCheck, Building2, FileSignature, Smartphone, MapPin, Binoculars, Car, Wrench, Eye } from "lucide-react";

const fadeLeft = {
  initial: { opacity: 0, x: -60, y: 30 },
  whileInView: { opacity: 1, x: 0, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const fadeRight = {
  initial: { opacity: 0, x: 60, y: 30 },
  whileInView: { opacity: 1, x: 0, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

const Diligencias = () => {
  const whatsappUrl = "https://wa.me/5547991508563?text=Olá!%20Gostaria%20de%20solicitar%20uma%20diligência%20técnica%20na%20região%20de%20Itajaí.";

  return (
    <div className="min-h-dvh bg-background">
      <Helmet>
        <title>Diligenciador em Itajaí | Motoboy para Diligências e Verificações Técnicas</title>
        <meta name="description" content="Diligenciador em Itajaí: verificação de veículos em leilão, vistoria de obras, coleta de assinaturas e entregar notificação. Navegantes e Balneário Camboriú." />
        <meta name="keywords" content="motoboy itajaí, motoboy em itajaí, diligenciador em itajaí, diligenciador, diligências itajaí, motoboy advogado itajaí, apoio a imobiliária itajaí, verificação veículo leilão itajaí, inspeção carro pátio leilão navegantes, vistoria técnica obra, motoboy coleta assinatura, verificação endereço itajaí, motoboy navegantes, motoboy balneário camboriú, investigação particular, levantamento de informações" />
        <link rel="canonical" href="https://www.entregasitajai.com/diligencias" />
        <meta property="og:title" content="Diligenciador em Itajaí | Motoboy para Diligências e Verificações Técnicas" />
        <meta property="og:description" content="Diligenciador em Itajaí: verificação de veículos em leilão, vistoria de obras, coleta de assinaturas e entregar notificação. Navegantes e Balneário Camboriú." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.entregasitajai.com/diligencias" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.entregasitajai.com/diligencias#service",
            "serviceType": ["Legal Support Services", "Private Investigation Service", "Field Verification Service"],
            "name": "Diligências e Verificações Técnicas em Itajaí",
            "alternateName": "Diligenciador em Itajaí",
            "description": "Diligenciador e motoboy em Itajaí para diligências técnicas, verificação de veículos em pátios de leilão, vistoria de obras, coleta de assinaturas, entregar notificação e levantamento de informações.",
            "knowsAbout": [
              "Motoboy em Itajaí",
              "Diligenciador em Itajaí",
              "Motoboy Advogado em Itajaí",
              "Apoio a Imobiliária em Itajaí"
            ],
            "audience": {
              "@type": "Audience",
              "audienceType": "Advogados, Imobiliárias, Financeiras e Revendas de Veículos"
            },
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
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços de Diligências",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Verificação de Veículos em Pátios de Leilão",
                    "description": "Inspeção minuciosa de veículos antes da compra em leilão"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Coleta de Assinaturas",
                    "description": "Visita técnica para coleta de assinaturas em contratos"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Vistoria Técnica de Obras",
                    "description": "Registro fotográfico profissional de obras e edificações"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Levantamento de Informações",
                    "description": "Verificação de anúncios, empresas e endereços para prevenção de fraudes"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                <Binoculars className="w-8 h-8 text-secondary" />
              </div>
            </div>
            <motion.h1
              initial={{ opacity: 0, x: -100, y: -40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide"
            >
              Motoboy em Itajaí para Diligências e Verificações Técnicas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 100, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Visita técnica para coleta de assinaturas em contratos, digitalização de documentos
              para operações bancárias e confirmação de existência de comércio presencial.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <Button
                variant="hero"
                size="lg"
                asChild
                className="text-lg px-8 py-4"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => { const w = window as any; if (typeof w.gtag === 'function') { w.gtag('event', 'conversion', {'send_to': 'AW-871515514/hF_WCNj04IEcEPqKyZ8D'}); } }}>
                  <MessageCircle size={24} />
                  Solicitar Diligência
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Operações de Crédito */}
        <section className="py-16 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeLeft}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    Operações de Crédito e Veículos
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Visita técnica especializada para agentes de crédito, financeiras e revendas de veículos.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FileSignature className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Visita técnica para coleta de assinaturas</strong> em contratos com verificação de identidade
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Smartphone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Digitalização de documentos</strong> para operações bancárias com qualidade certificada
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Fotos técnicas de fachada e rua</strong> para comprovação de residência e verificação de endereço
                    </span>
                  </li>
                </ul>
              </motion.div>
              <motion.div className="bg-card rounded-2xl p-8 shadow-lg" {...fadeRight}>
                <h3 className="text-xl font-semibold text-foreground mb-4">Ideal para:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Correspondentes bancários</li>
                  <li>• Financeiras e fintechs</li>
                  <li>• Revendas de veículos</li>
                  <li>• Despachantes documentais</li>
                  <li>• Assessorias de crédito</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Análise de Conformidade */}
        <section className="py-16 px-5 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div className="lg:order-2" {...fadeRight}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    Análise de Conformidade e Segurança
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Realizamos diligências técnicas para a validação de anúncios e empresas antes da formalização de negócios. Nosso foco é fornecer um relatório preciso sobre a realidade local.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Confirmação de Atividade:</strong> Verificação presencial para atestar se a empresa ou estabelecimento possui operação ativa conforme declarado.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Inspeção In Loco:</strong> Visita técnica detalhada a veículos, imóveis e ativos em Itajaí e região para assegurar a integridade da oferta.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Diligência Cadastral:</strong> Coleta de evidências e dados oficiais diretamente no local para suporte à tomada de decisão segura.
                    </span>
                  </li>
                </ul>
              </motion.div>
              <motion.div className="bg-card rounded-2xl p-8 shadow-lg lg:order-1" {...fadeLeft}>
                <h3 className="text-xl font-semibold text-foreground mb-4">Garantia de Autenticidade:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Validação de Ativos e Veículos</li>
                  <li>• Certificação de Sede Física Comercial</li>
                  <li>• Auditoria de Existência de Estoque</li>
                  <li>• Verificação de Legitimidade Empresarial</li>
                  <li>• Confirmação de Identidade de Vendedores</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Edificações */}
        {/* Pátios de Leilão */}
        <section className="py-16 px-5 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div className="lg:order-2" {...fadeRight}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Car className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    Verificação em Pátios de Leilão
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Inspeção minuciosa de veículos em pátios de leilão antes da compra, garantindo segurança na sua decisão.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Wrench className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Verificação de vazamentos</strong> de óleo, fluidos e sinais de problemas mecânicos
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Inspeção de danos estruturais</strong>, lataria, pintura e sinais de colisão
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Car className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Avaliação da conservação interna</strong>, painel, bancos, acabamentos e funcionamento geral
                    </span>
                  </li>
                </ul>
              </motion.div>
              <motion.div className="bg-card rounded-2xl p-8 shadow-lg lg:order-1" {...fadeLeft}>
                <h3 className="text-xl font-semibold text-foreground mb-4">O que verificamos:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Vazamentos de óleo e fluidos</li>
                  <li>• Danos na estrutura e chassi</li>
                  <li>• Estado da pintura e lataria</li>
                  <li>• Conservação do interior</li>
                  <li>• Pneus, freios e suspensão</li>
                  <li>• Sinais de alagamento ou incêndio</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Edificações */}
        <section className="py-16 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeLeft}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    Vistoria Técnica de Obra e Edificação
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Registro fotográfico profissional de obras, estruturas metálicas e edificações para diversos fins.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Fotos de progresso</strong> de obras para investidores e construtores
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Inspeção de estruturas</strong> metálicas, torres e instalações
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileSignature className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Trabalho de campo</strong> para apoio documental em licenciamento e fiscal com serviço técnico sob medida para sua demanda.
                    </span>
                  </li>
                </ul>
              </motion.div>
              <motion.div className="bg-card rounded-2xl p-8 shadow-lg" {...fadeRight}>
                <h3 className="text-xl font-semibold text-foreground mb-4">Aplicações:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Acompanhamento de obras</li>
                  <li>• Inspeção de torres e antenas</li>
                  <li>• Licenciamento ambiental</li>
                  <li>• Laudos técnicos</li>
                  <li>• Documentação para seguros</li>
                </ul>
              </motion.div>
            </div>
          </div>
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
              Solicite sua Diligência Agora
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Relatório técnico completo com geolocalização e certificação temporal
            </p>
            <Button
              variant="hero"
              size="lg"
              asChild
              className="text-lg px-8 py-4"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => { const w = window as any; if (typeof w.gtag === 'function') { w.gtag('event', 'conversion', {'send_to': 'AW-871515514/hF_WCNj04IEcEPqKyZ8D'}); } }}>
                <MessageCircle size={24} />
                Falar com Especialista
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

export default Diligencias;
