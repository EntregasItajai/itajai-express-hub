import { Phone } from "lucide-react";
import logoEscudo from "@/assets/logo-escudo.png";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4 px-5">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
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
              Motoboy & Serviços sob Demanda
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;