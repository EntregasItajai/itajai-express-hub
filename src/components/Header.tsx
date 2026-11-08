import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import logoEscudo from "@/assets/logo-escudo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const update = () => setHeaderHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("orientationchange", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  const navLinks: { to: string; label: string; children?: { to: string; label: string }[] }[] = [
    { to: "/", label: "Início" },
    {
      to: "/diligencias",
      label: "Diligências",
      children: [
        { to: "/verificacao-de-endereco-itajai", label: "Verificação de endereço" },
        { to: "/vistoria-veiculo-leilao-itajai", label: "Vistoria de veículo em leilão" },
      ],
    },
    { to: "/apoio-juridico", label: "Apoio Jurídico" },
    { to: "/assistencia-pessoal", label: "Assistência Pessoal" },
    { to: "/casos-reais", label: "Casos Reais" },
  ];

  return (
    <>
    <div style={{ height: headerHeight }} aria-hidden="true" />
    <header
      ref={headerRef}
      className="bg-primary text-primary-foreground py-4 px-5 fixed top-0 left-0 right-0 z-50 shadow-lg [transform:translateZ(0)] [backface-visibility:hidden] will-change-transform"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoEscudo}
            alt="Logo Entregas Itajaí"
            className="h-12 w-auto"
          />
          <div className="flex flex-col">
            <p className="text-2xl font-bold text-secondary tracking-wide">
              ENTREGAS ITAJAÍ
            </p>
            <p className="text-sm text-primary-foreground/80 font-medium hidden sm:block">
              Motoboy & Serviços sob Demanda
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.to} className="relative group">
                <Link
                  to={link.to}
                  className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium"
                >
                  {link.label} ▾
                </Link>
                <div className="absolute left-0 top-full hidden group-hover:block group-focus-within:block pt-3 z-50">
                  <div className="bg-primary border border-primary-foreground/20 rounded-lg shadow-lg py-2 min-w-[17rem]">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block px-4 py-2 text-primary-foreground/90 hover:text-secondary hover:bg-primary-foreground/10 transition-colors font-medium whitespace-nowrap"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary-foreground p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20 pt-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <div key={link.to} className="flex flex-col">
                <Link
                  to={link.to}
                  className="text-primary-foreground/90 hover:text-secondary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link
                    key={child.to}
                    to={child.to}
                    className="text-primary-foreground/75 hover:text-secondary transition-colors py-2 pl-5 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
    </>
  );
};

export default Header;