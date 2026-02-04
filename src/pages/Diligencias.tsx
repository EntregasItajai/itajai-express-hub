import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TechnicalReportBadge from "@/components/TechnicalReportBadge";
import { Button } from "@/components/ui/button";
import { MessageCircle, CreditCard, Shield, Building2, FileCheck, Camera, MapPin } from "lucide-react";

const Diligencias = () => {
  const whatsappUrl = "https://wa.me/5547991508563?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20diligências.";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide">
              Diligências e Verificações Técnicas
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Vistorias in loco com documentação profissional para operações de crédito, 
              prevenção de fraudes e inspeções técnicas de edificações.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              asChild
              className="text-lg px-8 py-4"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={24} />
                Solicitar Diligência
              </a>
            </Button>
          </div>
        </section>

        {/* Operações de Crédito */}
        <section className="py-16 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
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
                    <FileCheck className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Coleta de assinaturas</strong> em contratos com verificação de identidade
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Camera className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Digitalização profissional</strong> de documentos com qualidade certificada
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Fotos técnicas</strong> de fachada e rua para comprovação de residência
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-foreground mb-4">Ideal para:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Correspondentes bancários</li>
                  <li>• Financeiras e fintechs</li>
                  <li>• Revendas de veículos</li>
                  <li>• Despachantes documentais</li>
                  <li>• Assessorias de crédito</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Prevenção de Fraudes */}
        <section className="py-16 px-5 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-destructive/20 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-destructive" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    Prevenção de Fraudes (Anti-Golpe)
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Verificação presencial para evitar golpes e anúncios fraudulentos antes de fechar negócios.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Verificação física</strong> de empresas, lojas e estabelecimentos
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Constatação de anúncios</strong> de veículos, imóveis e containers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Coleta de contatos oficiais</strong> no local para validação
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-lg lg:order-1">
                <h3 className="text-xl font-semibold text-foreground mb-4">Evite golpes como:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Anúncios clonados de veículos</li>
                  <li>• Imobiliárias fantasmas</li>
                  <li>• Empresas inexistentes</li>
                  <li>• Estoques fictícios</li>
                  <li>• Vendedores fraudulentos</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Edificações */}
        <section className="py-16 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    Vistoria de Edificações e Estruturas
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Registro fotográfico profissional de obras, estruturas metálicas e edificações para diversos fins.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Camera className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
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
                    <FileCheck className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">
                      <strong>Documentação</strong> para licenciamento ambiental e fiscal
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-card rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-foreground mb-4">Aplicações:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Acompanhamento de obras</li>
                  <li>• Inspeção de torres e antenas</li>
                  <li>• Licenciamento ambiental</li>
                  <li>• Laudos técnicos</li>
                  <li>• Documentação para seguros</li>
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

export default Diligencias;
