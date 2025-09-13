import { Phone } from "lucide-react";
import logoEscudo from "@/assets/logo-escudo.png";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-5 relative">
      <img 
        src={logoEscudo} 
        alt="Logo Entregas Itajaí" 
        className="absolute left-5 top-1/2 transform -translate-y-1/2 h-12 w-auto"
      />
      <div className="text-center">
        <a 
          href="tel:+5547991508563" 
          className="text-primary-foreground no-underline text-2xl font-bold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2"
        >
          <Phone size={24} />
          (47) 99150-8563
        </a>
        <p className="mt-1 text-sm opacity-90">Clique aqui para ligar</p>
      </div>
    </header>
  );
};

export default Header;