
import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Heart, Sparkles, Crown } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Scissors className="w-12 h-12 text-elegant-charcoal" />,
      title: "Vestidos Sob Medida",
      description: "Criamos vestidos únicos e personalizados, desenvolvidos especialmente para você. Cada peça é pensada nos mínimos detalhes para realçar sua beleza natural.",
      features: ["Consultoria personalizada", "Tecidos premium", "Acabamento exclusivo", "Prova de vestido"]
    },
    {
      icon: <Heart className="w-12 h-12 text-elegant-charcoal" />,
      title: "Aluguel de Vestidos",
      description: "Nossa coleção exclusiva de vestidos de festa para aluguel. Peças elegantes e sofisticadas para seus momentos especiais.",
      features: ["Coleção exclusiva", "Diversos tamanhos", "Preços acessíveis", "Atendimento especializado"]
    }
  ];

  const advantages = [
    {
      icon: <Sparkles className="w-8 h-8 text-elegant-charcoal" />,
      title: "Qualidade Premium",
      description: "Utilizamos apenas tecidos e materiais da mais alta qualidade"
    },
    {
      icon: <Crown className="w-8 h-8 text-elegant-charcoal" />,
      title: "Design Exclusivo",
      description: "Cada vestido é uma obra de arte única e personalizada"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-elegant-black mb-6">
            Nossos Serviços
          </h2>
          <p className="font-inter text-lg text-elegant-gray max-w-3xl mx-auto leading-relaxed">
            Especializados em criar momentos únicos através de vestidos que contam histórias de amor e elegância.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8 lg:p-10">
                <div className="text-center mb-6">
                  {service.icon}
                </div>
                <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-elegant-black mb-4 text-center">
                  {service.title}
                </h3>
                <p className="font-inter text-elegant-gray mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center font-inter text-elegant-charcoal">
                      <div className="w-2 h-2 bg-elegant-charcoal rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Advantages */}
        <div className="grid md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-elegant-lightgray rounded-lg">
              {advantage.icon}
              <div>
                <h4 className="font-playfair text-xl font-semibold text-elegant-black mb-2">
                  {advantage.title}
                </h4>
                <p className="font-inter text-elegant-gray">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
