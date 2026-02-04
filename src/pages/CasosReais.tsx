import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TechnicalReportBadge from "@/components/TechnicalReportBadge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Building2, Car, Package, Radio, Shield, AlertTriangle, CheckCircle } from "lucide-react";

const CasosReais = () => {
  const whatsappUrl = "https://wa.me/5547991508563?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20diligências.";

  const casos = [
    {
      icon: Building2,
      title: "A Imobiliária Fantasma",
      subtitle: "Golpe de Aluguel Evitado",
      description: "Cliente estava prestes a depositar caução de R$ 8.000 para alugar apartamento de luxo. Solicitou nossa diligência antes da transferência.",
      resultado: "Encontramos sala comercial completamente vazia em prédio de alto padrão. O suposto corretor não existia no CRECI. Golpe evitado com relatório fotográfico e coordenadas GPS.",
      tipo: "Prevenção de Fraude",
      cor: "destructive"
    },
    {
      icon: Car,
      title: "O Vídeo Antigo",
      subtitle: "Revenda de Veículos Fraudulenta",
      description: "Investidor de São Paulo queria comprar lote de veículos de revenda em Itajaí. Vendedor enviava vídeos de estoque e funcionárias atendendo.",
      resultado: "Vistoria revelou loja fechada há meses. Vídeos eram gravações antigas. Coletamos fotos do local abandonado e contatos de vizinhos que confirmaram o fechamento.",
      tipo: "Verificação de Anúncio",
      cor: "destructive"
    },
    {
      icon: Package,
      title: "O Pátio Vazio",
      subtitle: "Estoque de Containers Inexistente",
      description: "Empresa de logística negociava compra de 50 containers usados. Vendedor alegava ter pátio repleto em Navegantes.",
      resultado: "Diligência encontrou terreno baldio com mato alto. Nenhum container, nenhuma estrutura. Relatório com geolocalização comprovou fraude antes do pagamento de R$ 150.000.",
      tipo: "Verificação de Estoque",
      cor: "destructive"
    },
    {
      icon: Radio,
      title: "Inspeção de Ninhos em Torres",
      subtitle: "Documentação para Licenciamento",
      description: "Empresa de telecomunicações precisava de registro fotográfico de torres para licenciamento ambiental, verificando presença de ninhos de aves.",
      resultado: "Realizamos inspeção visual de 12 torres na região, documentando condições estruturais e presença de fauna. Relatório técnico aceito pelo órgão ambiental.",
      tipo: "Inspeção Técnica",
      cor: "accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-20 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide">
              Casos Reais
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Histórias reais de como nossas diligências evitaram prejuízos 
              e garantiram segurança para nossos clientes.
            </p>
          </div>
        </section>

        {/* Estatísticas */}
        <section className="py-12 px-5 bg-accent/10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">150+</div>
                <div className="text-sm text-muted-foreground">Golpes Evitados</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">R$ 2M+</div>
                <div className="text-sm text-muted-foreground">Prejuízos Prevenidos</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Diligências Realizadas</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Relatórios Entregues</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards de Casos */}
        <section className="py-16 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Histórias que Fazem a Diferença
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cada diligência conta uma história. Conheça casos reais onde nossa atuação 
                fez a diferença na proteção dos nossos clientes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {casos.map((caso, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className={`${caso.cor === 'destructive' ? 'bg-destructive/10' : 'bg-accent/10'}`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        caso.cor === 'destructive' ? 'bg-destructive/20' : 'bg-accent/20'
                      }`}>
                        <caso.icon className={`w-6 h-6 ${
                          caso.cor === 'destructive' ? 'text-destructive' : 'text-accent'
                        }`} />
                      </div>
                      <div>
                        <div className={`text-xs font-semibold uppercase tracking-wide mb-1 ${
                          caso.cor === 'destructive' ? 'text-destructive' : 'text-accent'
                        }`}>
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
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Alerta */}
        <section className="py-12 px-5 bg-destructive/10">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-destructive mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Não Seja a Próxima Vítima
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Antes de transferir valores altos, solicite uma diligência. 
              O custo da verificação é infinitamente menor que o prejuízo de um golpe.
            </p>
          </div>
        </section>

        <TechnicalReportBadge />

        {/* CTA */}
        <section className="bg-primary text-primary-foreground py-16 px-5">
          <div className="max-w-4xl mx-auto text-center">
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
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={24} />
                Solicitar Verificação
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

export default CasosReais;
