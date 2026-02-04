import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TechnicalReportBadge from "@/components/TechnicalReportBadge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Scale, FileSignature, Building, HandCoins, Clock, Shield } from "lucide-react";

const ApoioJuridico = () => {
  const whatsappUrl = "https://wa.me/5547991508563?text=Olá!%20Gostaria%20de%20saber%20sobre%20apoio%20jurídico.";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide">
              Apoio Jurídico Especializado
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Suporte operacional para advogados e assessorias jurídicas. 
              Notificações, protocolos e acompanhamento com documentação profissional.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              asChild
              className="text-lg px-8 py-4"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
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
                    <Shield className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
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
                    Protocolos e Coleta de Assinaturas
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Coleta de assinaturas em documentos jurídicos com protocolo detalhado e seguro.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <FileSignature className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Coleta presencial</strong> de assinaturas em contratos e termos
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
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
                    <Building className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    Acompanhamento Bancário
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Suporte para liberações de valores, alvarás e recebimento de honorários advocatícios.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <HandCoins className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Liberação de alvarás</strong> e acompanhamento de pagamentos
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Protocolo em bancos</strong> de documentos e solicitações
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FileSignature className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Retirada de documentos</strong> e comprovantes bancários
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

        <TechnicalReportBadge />

        {/* CTA */}
        <section className="bg-primary text-primary-foreground py-16 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Agilize seus Processos Jurídicos
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Apoio operacional confiável para seu escritório de advocacia
            </p>
            <Button 
              variant="hero" 
              size="lg"
              asChild
              className="text-lg px-8 py-4"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
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
