
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-elegant-lightgray via-white to-elegant-lightgray"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-elegant-gray/20 rounded-full hidden lg:flex items-center justify-center bg-white/50">
        <img 
          src="/lovable-uploads/6b15e74c-74a3-40ca-baed-96ea07d42f06.png" 
          alt="Lavínia Reis Ateliê" 
          className="h-16 w-auto object-contain"
        />
      </div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-elegant-gray/20 rounded-full hidden lg:block"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/6b15e74c-74a3-40ca-baed-96ea07d42f06.png" 
              alt="Lavínia Reis Ateliê" 
              className="h-20 lg:h-32 w-auto mx-auto object-contain"
            />
          </div>

          {/* Main heading */}
          <h1 className="font-playfair text-4xl lg:text-6xl xl:text-7xl font-bold text-elegant-black mb-6 leading-tight">
            Lavínia Reis
            <span className="block text-elegant-charcoal">Ateliê</span>
          </h1>

          {/* Slogan */}
          <p className="font-playfair text-xl lg:text-2xl text-elegant-gray mb-4 italic">
            Desenvolvendo histórias de amor
          </p>

          {/* Description */}
          <p className="font-inter text-base lg:text-lg text-elegant-charcoal mb-12 max-w-3xl mx-auto leading-relaxed">
            Vestidos de festa únicos e exclusivos. Criamos peças sob medida e oferecemos aluguel 
            de vestidos elegantes para tornar seus momentos especiais ainda mais memoráveis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToServices}
              className="bg-elegant-black hover:bg-elegant-charcoal text-white font-inter font-medium px-8 py-3 rounded-none transition-all duration-300 transform hover:scale-105"
            >
              Nossos Serviços
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open("https://wa.me/5584992068288", "_blank")}
              className="border-elegant-black text-elegant-black hover:bg-elegant-black hover:text-white font-inter font-medium px-8 py-3 rounded-none transition-all duration-300"
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-elegant-gray rounded-full flex justify-center">
          <div className="w-1 h-3 bg-elegant-gray rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
