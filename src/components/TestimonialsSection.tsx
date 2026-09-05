import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Paulo",
    text: "Muito bom serviço. Rápido, com muita transparência."
  },
  {
    name: "Bruno",
    text: "Trabalho muito profissional. Ágil, responde rápido, tira fotos da mercadoria na origem e no destino, passa muita segurança de que tudo está sendo feito certinho. Preço justo."
  },
  {
    name: "Daniela",
    text: "Rapidez e confiança! Excelente serviço! Recomendo!"
  },
  {
    name: "Caroline",
    text: "Segunda vez que uso e só tenho a agradecer, agilidade, rapidez e cuidado com a entrega. Parabéns pelo profissionalismo, super recomendo vocês!"
  },
  {
    name: "Gutê",
    text: "De confiança, solicitei uma coleta e entrega… fez pra mim no fim de semana. Mandou foto coletando e entregando… Recomendo!"
  },
  {
    name: "Gian",
    text: "Excelente profissional, honesto e prestativo…atendimento impecável recomendo gratidão"
  },
  {
    name: "Léia",
    text: "Contratei esse serviço para ir a Itapema colher assinatura de um contrato, foram atenciosos e muito rápido o atendimento. Super indico!"
  },
  {
    name: "Douglas",
    text: "Recomendo, muito eficiente e de extrema Confiança!"
  }
];

// Duplicamos a lista para criar o efeito de loop contínuo e sem emendas.
const loopedTestimonials = [...testimonials, ...testimonials];

const AUTO_SCROLL_SPEED = 40; // pixels por segundo

const TestimonialsSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [singleSetWidth, setSingleSetWidth] = useState(0);
  const x = useMotionValue(0);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setSingleSetWidth(trackRef.current.scrollWidth / 2);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useAnimationFrame((_, delta) => {
    if (!singleSetWidth) return;

    if (!isPausedRef.current && !isDraggingRef.current) {
      x.set(x.get() - (delta / 1000) * AUTO_SCROLL_SPEED);
    }

    // Envolve a posição (mesmo após saltos grandes) para que o arrasto livre
    // também gere um loop perfeito e contínuo.
    let current = x.get();
    while (current <= -singleSetWidth) current += singleSetWidth;
    while (current > 0) current -= singleSetWidth;
    if (current !== x.get()) x.set(current);
  });

  return (
    <section className="py-16 px-5 bg-ice">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confiança e qualidade comprovadas pelos nossos clientes em Itajaí e região
          </p>
        </div>

        <div
          className="w-full max-w-5xl mx-auto overflow-hidden"
          onMouseEnter={() => { isPausedRef.current = true; }}
          onMouseLeave={() => { isPausedRef.current = false; }}
          onTouchStart={() => { isPausedRef.current = true; }}
          onTouchEnd={() => { isPausedRef.current = false; }}
        >
          <motion.div
            ref={trackRef}
            className="flex gap-4 md:gap-6 cursor-grab active:cursor-grabbing"
            style={{ x }}
            drag="x"
            dragMomentum={false}
            dragElastic={0}
            onDragStart={() => { isDraggingRef.current = true; }}
            onDragEnd={() => { isDraggingRef.current = false; }}
          >
            {loopedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="shrink-0 w-[280px] md:w-[340px]"
              >
                <Card className="h-full shadow-card hover:shadow-card-hover transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>

                    <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-primary font-semibold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Cliente verificado
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
