import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground text-center py-4 px-5">
      <a 
        href="tel:+5547991508563" 
        className="text-primary-foreground no-underline text-2xl font-bold hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-2"
      >
        <Phone size={24} />
        (47) 99150-8563
      </a>
      <p className="mt-1 text-sm opacity-90">Clique aqui para ligar</p>
    </header>
  );
};

export default Header;