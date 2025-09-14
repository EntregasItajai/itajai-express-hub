import { Phone } from "lucide-react";
import logoEscudo from "@/assets/logo-escudo.png";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-5 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={logoEscudo} 
            alt="Logo Entregas Itajaí" 
            className="h-12 w-auto"
          />
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-secondary tracking-wide">
              ENTREGAS ITAJAÍ
            </h1>
            <p className="text-sm text-primary-foreground/80 font-medium">
              Seu parceiro de confiança
            </p>
          </div>
        </div>
        
        <div className="text-right">
          <a 
            href="tel:+5547991508563" 
            className="text-primary-foreground no-underline text-xl font-bold hover:text-secondary transition-colors duration-300 flex items-center justify-end gap-2"
          >
            <Phone size={22} />
            (47) 99150-8563
          </a>
          <p className="mt-1 text-sm opacity-90">Clique aqui para ligar</p>
        </div>
      </div>
    </header>
  );
};

export default Header;