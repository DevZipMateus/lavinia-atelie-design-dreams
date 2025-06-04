import { Instagram, Phone, Mail, MapPin } from "lucide-react";
export const Footer = () => {
  return <footer className="bg-elegant-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            
            <p className="font-playfair text-lg italic mb-4">
              Desenvolvendo histórias de amor
            </p>
            <p className="font-inter text-gray-300 text-sm">
              Ateliê especializado em vestidos de festa sob medida e aluguel em Natal/RN.
            </p>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-xl font-semibold mb-6">Contato</h3>
            <div className="space-y-3">
              <a href="tel:+5584992068288" className="flex items-center justify-center md:justify-start space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="font-inter">(84) 9 9206-8288</span>
              </a>
              <a href="mailto:laviniareisatelie@gmail.com" className="flex items-center justify-center md:justify-start space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span className="font-inter">laviniareisatelie@gmail.com</span>
              </a>
              <a href="https://g.co/kgs/6KS2hpy" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start space-x-3 text-gray-300 hover:text-white transition-colors duration-200">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="font-inter text-sm">Rua Aníbal Correia 2519, Lagoa Nova</span>
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="text-center md:text-left">
            <h3 className="font-playfair text-xl font-semibold mb-6">Redes Sociais</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://instagram.com/laviniareisatelie" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition-all duration-200">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="font-inter text-gray-300 text-sm mt-4">
              @laviniareisatelie
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="font-inter text-gray-400 text-sm">
            © 2024 Lavínia Reis Ateliê. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>;
};