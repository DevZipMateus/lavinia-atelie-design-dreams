
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      info: "(84) 9 9206-8288",
      action: () => window.open("tel:+5584992068288", "_blank")
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "laviniareisatelie@gmail.com",
      action: () => window.open("mailto:laviniareisatelie@gmail.com", "_blank")
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram",
      info: "@laviniareisatelie",
      action: () => window.open("https://instagram.com/laviniareisatelie", "_blank")
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Endereço",
      info: "Rua Aníbal Correia 2519, Lagoa Nova\nChalita Empresarial - Natal/RN",
      action: () => window.open("https://g.co/kgs/6KS2hpy", "_blank")
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-elegant-black mb-6">
            Entre em Contato
          </h2>
          <p className="font-inter text-lg text-elegant-gray max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para criar o vestido dos seus sonhos. Entre em contato conosco 
            e vamos conversar sobre como tornar seu momento especial ainda mais único.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-elegant-black mb-8">
              Informações de Contato
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-elegant-gray/20 hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={item.action}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-elegant-charcoal mt-1">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-inter font-semibold text-elegant-black mb-1">
                          {item.title}
                        </h4>
                        <p className="font-inter text-elegant-gray whitespace-pre-line">
                          {item.info}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Operating Hours */}
            <Card className="border-elegant-gray/20">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-elegant-charcoal mt-1" />
                  <div>
                    <h4 className="font-inter font-semibold text-elegant-black mb-2">
                      Horário de Atendimento
                    </h4>
                    <p className="font-inter text-elegant-gray">
                      Segunda a Sexta: 9h às 18h<br />
                      Sábado: 9h às 12h<br />
                      Domingo: Fechado
                    </p>
                    <p className="font-inter text-sm text-elegant-gray mt-2 italic">
                      Atendimento por agendamento
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map and CTA */}
          <div>
            <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-elegant-black mb-8">
              Nossa Localização
            </h3>
            
            {/* Map */}
            <div className="bg-elegant-lightgray rounded-lg p-8 mb-8 text-center">
              <MapPin className="w-16 h-16 text-elegant-charcoal mx-auto mb-4" />
              <h4 className="font-playfair text-xl font-semibold text-elegant-black mb-2">
                Visite Nosso Ateliê
              </h4>
              <p className="font-inter text-elegant-gray mb-4">
                Rua Aníbal Correia 2519<br />
                Lagoa Nova - Chalita Empresarial<br />
                Natal/RN
              </p>
              <Button 
                onClick={() => window.open("https://g.co/kgs/6KS2hpy", "_blank")}
                variant="outline"
                className="border-elegant-charcoal text-elegant-charcoal hover:bg-elegant-charcoal hover:text-white"
              >
                Ver no Mapa
              </Button>
            </div>

            {/* WhatsApp CTA */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-8 text-center">
                <h4 className="font-playfair text-xl font-semibold text-elegant-black mb-4">
                  Agende sua Consulta
                </h4>
                <p className="font-inter text-elegant-gray mb-6">
                  Entre em contato via WhatsApp para agendar uma consulta personalizada 
                  e conhecer nosso ateliê.
                </p>
                <Button 
                  onClick={() => window.open("https://wa.me/5584992068288", "_blank")}
                  className="bg-green-600 hover:bg-green-700 text-white w-full"
                >
                  Falar no WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
