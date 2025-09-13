import { MessageCircle } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon-2.png";

const FloatingWhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/5547991508563?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse-whatsapp-smooth overflow-hidden"
      aria-label="Falar no WhatsApp"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="w-full h-full object-cover"
      />
    </a>
  );
};

export default FloatingWhatsAppButton;