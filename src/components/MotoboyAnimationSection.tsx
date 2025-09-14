import { useEffect, useState } from "react";
import LazyImage from "@/components/LazyImage";
import motoboyMoving from "@/assets/motoboy-moving.png";

const MotoboyAnimationSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('motoboy-animation');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section 
      id="motoboy-animation"
      className="absolute bottom-0 left-0 right-0 py-2 px-5 overflow-hidden pointer-events-none z-20"
    >
      <div className="max-w-full mx-auto relative h-20">
        <div 
          className={`absolute -bottom-2 left-0 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100 moto-loop' : 'opacity-0'
          }`}
        >
          <LazyImage 
            src={motoboyMoving} 
            alt="Motoboy em movimento" 
            className="h-24 w-auto transform scale-x-[-1]"
          />
        </div>
        
        <div 
          className={`absolute bottom-2 left-0 transition-opacity duration-1000 ${
            isVisible ? 'opacity-100 text-loop' : 'opacity-0'
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground text-center whitespace-nowrap drop-shadow-lg">
            Motoboy vai onde precisar
          </h2>
        </div>
      </div>
    </section>
  );
};

export default MotoboyAnimationSection;