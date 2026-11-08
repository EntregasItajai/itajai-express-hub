import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import whatsappIcon from "@/assets/whatsapp-icon-2.png";
import { whatsappUrlForPath } from "@/lib/whatsappMessages";

const FloatingWhatsAppButton = () => {
  // A mensagem acompanha a página aberta (diligências, apoio jurídico etc.).
  const { pathname } = useLocation();
  const whatsappUrl = whatsappUrlForPath(pathname);

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