import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrolled / maxHeight) * 100;
      
      // Aparece quando está a 80% do final da página ou mais
      if (scrollPercentage > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 rounded-full p-3 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-all duration-300 hover:scale-110"
      aria-label="Voltar ao topo"
    >
      <ChevronUp size={24} />
    </Button>
  );
};

export default ScrollToTopButton;