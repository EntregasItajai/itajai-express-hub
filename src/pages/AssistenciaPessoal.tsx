import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Button } from "@/components/ui/button";
import { MessageCircle, Key, Smartphone, ShoppingBag, Gift, Home, Hotel } from "lucide-react";

const floatingIcons = [
  { icon: Key, label: "Chave", top: "12%", left: "6%", delay: "0s" },
  { icon: ShoppingBag, label: "Bolsa", top: "20%", right: "8%", delay: "0.5s" },
  { icon: ShoppingBag, label: "Caixa", bottom: "30%", left: "4%", delay: "1s" },
  { icon: Smartphone, label: "Celular", top: "35%", right: "5%", delay: "1.5s" },
  { icon: Gift, label: "Presente", bottom: "18%", right: "10%", delay: "0.8s" },
  { icon: Hotel, label: "Hotel", bottom: "22%", left: "9%", delay: "1.2s" },
];

const services = [
  {
    icon: Key,
    title: "Chaves e Documentos",
    description: "Buscamos onde você quiser, entregamos onde você precisa.",
  },
  {
    icon: Smartphone,
    title: "Retirada em Assistência Técnica",
    description: "Seu celular ou eletrônico pronto, sem você sair do lugar.",
  },
  {
    icon: ShoppingBag,
    title: "Retirada em Lojas",
    description: "Comprou online ou reservou na loja? A gente busca pra você.",
  },
  {
    icon: Gift,
    title: "Entrega de Presentes",
    description: "Com cuidado e pontualidade, seu presente chega na hora certa.",
  },
  {
    icon: Home,
    title: "Busca em Casa de Terceiros",
    description: "Buscamos onde você quiser, com discrição e agilidade.",
  },
  {
    icon: Hotel,
    title: "Item Esquecido no Hotel",
    description: "Buscamos e enviamos para você via Sedex ou PAC, onde quer que você esteja.",
  },
];

const AssistenciaPessoal = () => {
  const whatsappUrl = "https://wa.me/5547991508563?text=Olá!%20Gostaria%20de%20solicitar%20uma%20Assistência%20Pessoal.";

  return (
    <div className="min-h-dvh bg-background">
      <Helmet>
        <title>Assistência Pessoal | Motoboy Express em Itajaí — Entregas Itajaí</title>
        <meta name="description" content="Motoboy express em Itajaí: entrega rápida de itens pessoais, retirada em leilões e lojas, apoio ao comprador. Navegantes e Balneário Camboriú." />
        <meta name="keywords" content="motoboy itajaí, motoboy em itajaí, motoboy express, entrega rápida, tele entrega, assistência pessoal itajaí, buscar chaves motoboy, retirada loja motoboy, entrega presente itajaí, motoboy leilão itajaí, apoio comprador itajaí, motoboy navegantes, motoboy balneário camboriú" />
        <link rel="canonical" href="https://www.entregasitajai.com/assistencia-pessoal" />
        <meta property="og:title" content="Assistência Pessoal | Motoboy Express em Itajaí — Entregas Itajaí" />
        <meta property="og:description" content="Motoboy express em Itajaí: entrega rápida de itens pessoais, retirada em leilões e lojas, apoio ao comprador. Navegantes e Balneário Camboriú." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.entregasitajai.com/assistencia-pessoal" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.entregasitajai.com/assistencia-pessoal#service",
            "serviceType": ["Personal Assistant Service", "Courier Service", "Errand Service"],
            "name": "Assistência Pessoal com Motoboy Express em Itajaí",
            "alternateName": "Tele-entrega de Itens Pessoais em Itajaí",
            "description": "Motoboy express em Itajaí para entrega rápida e tele-entrega de itens pessoais: chaves, celular na assistência técnica, retirada em lojas e leilões, entrega de presentes e apoio ao comprador.",
            "knowsAbout": [
              "Motoboy Leilão em Itajaí",
              "Apoio ao Comprador em Itajaí",
              "Motoboy Balneário Camboriú"
            ],
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
            "audience": {
              "@type": "Audience",
              "audienceType": "Compradores em leilões, consumidores e clientes de lojas físicas ou online"
            }
          })}
        </script>
      </Helmet>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary text-primary-foreground py-20 px-5 overflow-hidden min-h-[500px] flex items-center">
          {/* Floating neon icons */}
          {floatingIcons.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="absolute hidden md:flex items-center justify-center opacity-20 text-secondary animate-float-icon"
                style={{
                  top: item.top,
                  left: item.left,
                  right: item.right,
                  bottom: item.bottom,
                  animationDelay: item.delay,
                  filter: "drop-shadow(0 0 8px hsl(142 70% 49% / 0.6))",
                }}
              >
                <Icon className="w-10 h-10" />
              </div>
            );
          })}

          <div className="max-w-4xl mx-auto text-center z-10">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center">
                <Gift className="w-8 h-8 text-secondary" />
              </div>
            </div>
            <motion.h1
              initial={{ opacity: 0, x: -100, y: -40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide"
            >
              Assistência Pessoal com Motoboy em Itajaí
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 100, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-lg md:text-xl text-secondary font-semibold mb-2"
            >
              Praticidade e cuidado no seu dia a dia
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -80, y: 40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed"
            >
              Conte com nosso motoboy em Itajaí para buscar itens pessoais por você:
              chave da casa ou escritório, celular na assistência técnica, retirada
              em lojas, entrega de presentes, busca de itens onde você precisar —
              tudo com discrição, agilidade e cuidado.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            >
              <Button
                variant="hero"
                size="lg"
                asChild
                className="text-lg px-8 py-4"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => { const w = window as any; if (typeof w.gtag === 'function') { w.gtag('event', 'conversion', {'send_to': 'AW-871515514/hF_WCNj04IEcEPqKyZ8D'}); } }}>
                  <MessageCircle size={24} />
                  Solicitar Assistência Pessoal
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-16 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -70 : 70, y: 50 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: (index % 3) * 0.15, ease: "easeOut" }}
                  >
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-5">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

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
              Precisa de Praticidade no Dia a Dia?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Nosso motoboy resolve pra você com agilidade e cuidado
            </p>
            <Button
              variant="hero"
              size="lg"
              asChild
              className="text-lg px-8 py-4"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => { const w = window as any; if (typeof w.gtag === 'function') { w.gtag('event', 'conversion', {'send_to': 'AW-871515514/hF_WCNj04IEcEPqKyZ8D'}); } }}>
                <MessageCircle size={24} />
                Solicitar Assistência Pessoal
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

export default AssistenciaPessoal;
