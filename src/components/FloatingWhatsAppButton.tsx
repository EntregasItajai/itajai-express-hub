import { MessageCircle } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const FloatingWhatsAppButton = () => {
  const whatsappUrl = "https://wa.me/5547991508563?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-20 h-20 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 animate-pulse-whatsapp-smooth"
      style={{
        backgroundColor: '#25D366'
      }}
      aria-label="Falar no WhatsApp"
    >
      <img 
        src={whatsappIcon} 
        alt="WhatsApp" 
        className="w-12 h-12"
      />
    </a>
  );
};

export default FloatingWhatsAppButton;