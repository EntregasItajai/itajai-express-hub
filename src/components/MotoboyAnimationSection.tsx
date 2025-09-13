import { useEffect, useState } from "react";
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
      className="py-16 px-5 bg-muted overflow-hidden relative"
    >
      <div className="max-w-6xl mx-auto relative h-40">
        <div 
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 transition-all duration-[2000ms] ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <img 
            src={motoboyMoving} 
            alt="Motoboy em movimento" 
            className="h-32 w-auto"
          />
        </div>
        
        <div 
          className={`absolute left-1/2 top-1/2 transform -translate-y-1/2 transition-all duration-[2500ms] ease-out delay-500 ${
            isVisible ? '-translate-x-1/2 opacity-100' : 'translate-x-full opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center whitespace-nowrap">
            Motoboy vai onde precisar
          </h2>
        </div>
      </div>
    </section>
  );
};

export default MotoboyAnimationSection;