import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };
  return <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection("home")} className="font-inter text-sm lg:text-base text-elegant-black hover:text-elegant-charcoal transition-colors duration-200">
              Início
            </button>
            <button onClick={() => scrollToSection("services")} className="font-inter text-sm lg:text-base text-elegant-black hover:text-elegant-charcoal transition-colors duration-200">
              Serviços
            </button>
            <button onClick={() => scrollToSection("about")} className="font-inter text-sm lg:text-base text-elegant-black hover:text-elegant-charcoal transition-colors duration-200">
              Sobre
            </button>
            <button onClick={() => scrollToSection("contact")} className="font-inter text-sm lg:text-base text-elegant-black hover:text-elegant-charcoal transition-colors duration-200">
              Contato
            </button>
          </nav>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-md text-elegant-black hover:text-elegant-charcoal transition-colors duration-200">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
            <nav className="px-4 py-6 space-y-4">
              <button onClick={() => scrollToSection("home")} className="block w-full text-left font-inter text-elegant-black hover:text-elegant-charcoal transition-colors duration-200 py-2">
                Início
              </button>
              <button onClick={() => scrollToSection("services")} className="block w-full text-left font-inter text-elegant-black hover:text-elegant-charcoal transition-colors duration-200 py-2">
                Serviços
              </button>
              <button onClick={() => scrollToSection("about")} className="block w-full text-left font-inter text-elegant-black hover:text-elegant-charcoal transition-colors duration-200 py-2">
                Sobre
              </button>
              <button onClick={() => scrollToSection("contact")} className="block w-full text-left font-inter text-elegant-black hover:text-elegant-charcoal transition-colors duration-200 py-2">
                Contato
              </button>
            </nav>
          </div>}
      </div>
    </header>;
};