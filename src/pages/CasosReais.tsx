import { Helmet } from "react-helmet-async";
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
      title: "A Imobiliária Fantasma",
      subtitle: "Golpe de Aluguel Evitado",
      description: "Um profissional liberal de outra cidade queria alugar uma sala comercial em prédio de luxo. A imobiliária parecia legítima, mas algo não batia.",
      resultado: "Nossa diligência confirmou: a sala estava completamente vazia e a imobiliária não existia. O cliente evitou perder o valor que seria depositado como caução.",
      tipo: "Verificação de Endereço",
      cor: "destructive"
    },
    {
      icon: Car,
      title: "O Anúncio Clonado",
      subtitle: "Carro já Vendido",
      description: "Um cliente de fora do estado queria reservar um veículo específico anunciado online. Pediu para confirmarmos se o carro realmente estava disponível.",
      resultado: "A vistoria provou que o anúncio era clone - o veículo já havia sido vendido há semanas. Golpe evitado antes da transferência.",
      tipo: "Diligência Anti-Golpe",
      cor: "destructive"
    },
    {
      icon: Package,
      title: "O Pátio Vazio",
      subtitle: "Containers Inexistentes",
      description: "Um cliente buscava um container para sua obra e encontrou um anúncio com preço atrativo. Solicitou verificação antes de pagar.",
      resultado: "Em visita ao endereço, constatamos que a empresa estava encerrando suas atividades. O pátio já não tinha nenhum container, com mato alto, e os funcionários não souberam explicar sobre o vídeo anunciado como atual mostrando o pátio cheio.",
      tipo: "Verificação de Estoque",
      cor: "destructive"
    },
    {
      icon: Radio,
      title: "Inspeção de Torres",
      subtitle: "Documentação para Licenciamento",
      description: "Empresa de telecomunicações precisava de registro fotográfico de torres para licenciamento ambiental.",
      resultado: "Realizamos inspeção visual de 12 torres na região, documentando condições estruturais. Relatório técnico aceito pelo órgão ambiental.",
      tipo: "Vistoria Técnica",
      cor: "accent"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Casos Reais de Diligências em Itajaí | Entregas Itajaí</title>
        <meta name="description" content="Histórias reais de diligências que evitaram golpes: imobiliárias fantasmas, anúncios clonados de veículos, estoques fictícios. Verificação de endereço e combate a fraudes em Itajaí." />
        <meta name="keywords" content="diligência anti-golpe, verificação anúncio veículo, imobiliária fantasma, combate fraude itajaí, verificação endereço" />
        <link rel="canonical" href="https://entregasitajai.com.br/casos-reais" />
        <meta property="og:title" content="Casos Reais de Diligências - Golpes Evitados" />
        <meta property="og:description" content="Veja como nossas diligências evitaram prejuízos reais: imobiliárias fantasmas, anúncios clonados e estoques fictícios." />
      </Helmet>
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
                Cada diligência conta uma história. Veja casos reais onde nossa 
                verificação de endereço e combate a golpes fez a diferença.
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
              ))}
            </div>
          </div>
        </section>

        {/* Alerta */}
        <section className="py-12 px-5 bg-accent/10">
          <div className="max-w-4xl mx-auto text-center">
            <ShieldCheck className="w-16 h-16 text-accent mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Segurança e Transparência para os Seus Negócios
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              <strong>Proteção de interesses</strong> através de verificação profissional. 
              Solicite uma diligência para <strong>garantia de veracidade</strong> de anúncios de veículos, 
              imóveis ou empresas antes de fechar negócio.
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
