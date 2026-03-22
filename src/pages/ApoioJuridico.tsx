import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TechnicalReportBadge from "@/components/TechnicalReportBadge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Scale, FileSignature, Building2, HandCoins, Clock, ShieldCheck, Smartphone, Users } from "lucide-react";

const ApoioJuridico = () => {
  const whatsappUrl = "https://wa.me/5547991508563?text=Olá!%20Gostaria%20de%20solicitar%20uma%20diligência%20jurídica%20na%20região%20de%20Itajaí.";

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Motoboy em Itajaí para Apoio Jurídico e Coleta de Assinaturas | Entregas Itajaí</title>
        <meta name="description" content="Motoboy em Itajaí para apoio jurídico: coleta de assinaturas, entrega de notificações extrajudiciais e acompanhamento bancário. Serviço especializado para advogados e assessorias em Itajaí e região." />
        <meta name="keywords" content="motoboy itajaí, motoboy em itajaí, apoio jurídico itajaí, motoboy coletar assinatura, notificação extrajudicial itajaí, motoboy advocacia, coleta assinatura contrato, motoboy navegantes, motoboy camboriú, apoio operacional jurídico" />
        <link rel="canonical" href="https://www.entregasitajai.com.br/apoio-juridico" />
        <meta property="og:title" content="Motoboy em Itajaí para Apoio Jurídico Especializado" />
        <meta property="og:description" content="Motoboy em Itajaí para escritórios de advocacia: coleta de assinaturas, notificações extrajudiciais e acompanhamento bancário com relatório profissional." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.entregasitajai.com.br/apoio-juridico" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.entregasitajai.com.br/apoio-juridico#service",
            "serviceType": ["Legal Support Services", "Process Server", "Document Delivery Service"],
            "name": "Apoio Jurídico Operacional em Itajaí",
            "description": "Motoboy em Itajaí especializado em apoio jurídico: coleta de assinaturas, entrega de notificações extrajudiciais, acompanhamento bancário e protocolo de documentos para advogados.",
            "provider": {
              "@type": "LocalBusiness",
              "@id": "https://www.entregasitajai.com.br/#organization",
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
              "name": "Serviços de Apoio Jurídico",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Notificações Extrajudiciais",
                    "description": "Entrega de notificações com comprovação robusta e fé pública digital"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Coleta de Assinaturas",
                    "description": "Visita técnica para coleta de assinaturas em contratos e procurações"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Acompanhamento Bancário",
                    "description": "Suporte para liberações de alvarás e protocolo em bancos"
                  }
                }
              ]
            },
            "audience": {
              "@type": "Audience",
              "audienceType": "Advogados, Escritórios de Advocacia, Assessorias Jurídicas"
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
                <Scale className="w-8 h-8 text-secondary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide">
              Logística de Apoio para Escritórios Jurídicos
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Motoboy experiente para realizar a coleta de assinaturas, protocolos e transporte de documentos com o profissionalismo que o setor jurídico exige.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              asChild
              className="text-lg px-8 py-4"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => { const w = window as any; if (typeof w.gtag === 'function') { w.gtag('event', 'conversion', {'send_to': 'AW-871515514/hF_WCNj04IEcEPqKyZ8D'}); } }}>
                <MessageCircle size={24} />
                Contratar Apoio Jurídico
              </a>
            </Button>
          </div>
        </section>

        {/* Notificações Extrajudiciais */}
        <section className="py-16 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <FileSignature className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    Notificações Extrajudiciais
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Entrega de notificações com comprovação robusta e fé pública digital para seus processos.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Fé pública digital</strong> com registro fotográfico e geolocalização
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Data e hora certificada</strong> para validade jurídica
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileSignature className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Comprovante de entrega</strong> com assinatura ou foto do recebedor
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-foreground mb-4">Tipos de Notificação:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Notificações de cobrança</li>
                  <li>• Intimações extrajudiciais</li>
                  <li>• Notificações de rescisão</li>
                  <li>• Comunicados formais</li>
                  <li>• Cartas de advertência</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Coleta de Assinaturas */}
        <section className="py-16 px-5 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Scale className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    Visita Técnica para Coleta de Assinaturas
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Visita técnica para coleta de assinaturas em contratos, procurações e documentos jurídicos com protocolo detalhado.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FileSignature className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Coleta presencial</strong> de assinaturas em contratos e termos
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Verificação de identidade</strong> com foto do documento
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Protocolo completo</strong> com data, hora e local
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-lg lg:order-1">
                <h3 className="text-xl font-semibold text-foreground mb-4">Documentos atendidos:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Procurações e termos</li>
                  <li>• Contratos particulares</li>
                  <li>• Acordos extrajudiciais</li>
                  <li>• Declarações e anuências</li>
                  <li>• Documentos de inventário</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Acompanhamento Bancário */}
        <section className="py-16 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    Acompanhamento Bancário
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Entrega de contrato bancário com digitalização, suporte para liberações de alvarás e recebimento de honorários.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <HandCoins className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Liberação de alvarás</strong> e acompanhamento de pagamentos
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Protocolo em bancos</strong> de documentos e solicitações
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Smartphone className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Digitalização de documentos</strong> para operações bancárias
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-foreground mb-4">Serviços bancários:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Liberação de honorários</li>
                  <li>• Recebimento de alvarás</li>
                  <li>• Depósitos judiciais</li>
                  <li>• Protocolo de documentos</li>
                  <li>• Acompanhamento de processos</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-16 px-5 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Por que Escritórios nos Escolhem
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <Clock className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Agilidade</h3>
                <p className="text-sm text-muted-foreground">Atendimento no mesmo dia para demandas urgentes</p>
              </div>
              <div className="text-center p-6">
                <Scale className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Confiabilidade</h3>
                <p className="text-sm text-muted-foreground">Protocolos detalhados aceitos juridicamente</p>
              </div>
              <div className="text-center p-6">
                <Smartphone className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Digitalização</h3>
                <p className="text-sm text-muted-foreground">Documentos digitalizados com qualidade profissional</p>
              </div>
              <div className="text-center p-6">
                <Users className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Experiência</h3>
                <p className="text-sm text-muted-foreground">Equipe treinada para demandas jurídicas</p>
              </div>
            </div>
          </div>
        </section>

        <TechnicalReportBadge />

        {/* CTA */}
        <section className="bg-primary text-primary-foreground py-16 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Agilize seus Processos Jurídicos
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Apoio operacional confiável para seu escritório
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
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};

export default ApoioJuridico;
