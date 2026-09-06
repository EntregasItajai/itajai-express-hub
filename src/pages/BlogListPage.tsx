import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Calendar, ArrowRight, Scale, Car, Building2 } from "lucide-react";

interface BlogPost {
  slug: string | null;
  icon: typeof Scale;
  title: string;
  date: string;
  excerpt: string;
}

const posts: BlogPost[] = [
  {
    slug: "diligencia-exemplo",
    icon: Scale,
    title: "O Que é Diligência Extrajudicial? Guia para Advogados e Imobiliárias",
    date: "28 de agosto de 2026",
    excerpt:
      "Diligência extrajudicial é a verificação presencial de um fato, endereço ou situação, feita fora do processo judicial, com registro fotográfico, geolocalização e horário certificado. Advogados usam para notificações e coleta de assinaturas; imobiliárias, para confirmar a existência real de imóveis e vendedores antes de fechar negócio.",
  },
  {
    slug: null,
    icon: Car,
    title: "Como Verificar Se um Vendedor de Leilão é Confiável",
    date: "12 de agosto de 2026",
    excerpt:
      "Comprar em leilão à distância tem um risco real: anúncios com fotos antigas, veículos já vendidos ou pátios que nem existem no endereço informado. Neste guia, mostramos os sinais de alerta e como uma vistoria presencial independente confirma se o veículo, o vendedor e o pátio realmente existem antes da compra.",
  },
  {
    slug: null,
    icon: Building2,
    title: "Inspeção Técnica: Guia Completo para Imobiliárias",
    date: "30 de julho de 2026",
    excerpt:
      "Antes de fechar uma locação ou venda à distância, imobiliárias precisam confirmar que o imóvel existe, está ocupado ou vago conforme o anunciado, e em que estado de conservação. Explicamos como uma inspeção técnica com fotos, vídeo e relatório datado protege a imobiliária e o cliente de fraudes e surpresas.",
  },
];

const cardMotion = (index: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, delay: index * 0.15, ease: "easeOut" as const },
});

const BlogListPage = () => {
  return (
    <div className="min-h-dvh bg-background">
      <Helmet>
        <title>Blog - Entregas Itajaí | Diligências, Vistorias e Motoboy</title>
        <meta
          name="description"
          content="Conteúdo sobre diligências extrajudiciais, vistorias técnicas e verificações de segurança para advogados, imobiliárias e empresas em Itajaí e região."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Header />
      <main>
        <section className="bg-primary text-primary-foreground py-20 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide"
            >
              Blog <span className="text-secondary">-</span> Entregas Itajaí
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              className="text-lg md:text-xl max-w-2xl mx-auto text-primary-foreground/85"
            >
              Guias práticos sobre diligências, vistorias e verificações para advogados, imobiliárias e empresas.
            </motion.p>
          </div>
        </section>

        <section className="py-16 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post, index) => {
                const Icon = post.icon;
                const CardInner = (
                  <div className="group h-full flex flex-col bg-card rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="h-1.5 bg-gradient-to-r from-secondary via-yellow-400 to-secondary" />
                    <div className="p-7 flex flex-col flex-1">
                      <div className="w-12 h-12 rounded-full bg-soft-green flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </div>
                      <h2 className="text-lg font-bold text-foreground mb-3 leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                        {post.excerpt}
                      </p>
                      {post.slug ? (
                        <span className="inline-flex items-center gap-2 text-secondary font-semibold text-sm group-hover:gap-3 transition-all">
                          Ler mais
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2 text-muted-foreground/70 font-semibold text-sm">
                          Em breve
                        </span>
                      )}
                    </div>
                  </div>
                );

                return (
                  <motion.div key={post.title} {...cardMotion(index)} className="h-full">
                    {post.slug ? (
                      <Link to={`/blog/${post.slug}`} className="block h-full">
                        {CardInner}
                      </Link>
                    ) : (
                      <div className="h-full cursor-default opacity-90">{CardInner}</div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};

export default BlogListPage;
