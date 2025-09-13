import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Localização / Contato</h2>
        
        <div className="space-y-6 mb-8">
          <div className="flex items-center justify-center gap-3 text-lg">
            <MapPin size={24} className="text-secondary" />
            <span><strong>Local:</strong> Itajaí, SC</span>
          </div>
          
          <div className="flex items-center justify-center gap-3 text-lg">
            <Mail size={24} className="text-secondary" />
            <span>
              <strong>Email:</strong>{" "}
              <a 
                href="mailto:contato@entregasitajai.com.br" 
                className="text-secondary hover:text-secondary/80 transition-colors"
              >
                contato@entregasitajai.com.br
              </a>
            </span>
          </div>
          
          <div className="flex items-center justify-center gap-3 text-lg">
            <Phone size={24} className="text-secondary" />
            <span>
              <strong>Telefone/WhatsApp:</strong>{" "}
              <a 
                href="tel:+5547991508563" 
                className="text-secondary hover:text-secondary/80 transition-colors"
              >
                55 (47) 99150-8563
              </a>
            </span>
          </div>
        </div>

        <div className="text-sm opacity-80 mb-8">
          CNPJ 25.340.232/0001-10 Entregas Itajaí
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-sm opacity-80">
          © 2025 Entregas Itajaí - Todos os direitos reservados.
          <br />
          <a 
            href="#" 
            className="text-secondary hover:text-secondary/80 transition-colors"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;