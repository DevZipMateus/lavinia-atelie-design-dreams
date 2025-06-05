

export const About = () => {
  return <section id="about" className="py-20 lg:py-32 bg-elegant-lightgray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-playfair text-3xl lg:text-5xl font-bold text-elegant-black mb-6">
              Sobre Lavínia Reis
            </h2>
            <p className="font-inter text-lg text-elegant-gray mb-6 leading-relaxed">
              Com paixão pela alta costura e atenção aos detalhes, Lavínia Batista dos Reis criou 
              um ateliê dedicado a desenvolver histórias de amor através de vestidos únicos e exclusivos.
            </p>
            <p className="font-inter text-lg text-elegant-gray mb-6 leading-relaxed">
              Cada peça é cuidadosamente pensada e desenvolvida para destacar a beleza única de cada cliente, 
              criando momentos inesquecíveis em datas especiais.
            </p>
            <p className="font-inter text-lg text-elegant-gray leading-relaxed">
              Nossa missão é transformar sonhos em realidade, oferecendo vestidos que não apenas vestem, 
              mas que contam histórias e criam memórias eternas.
            </p>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white p-8 lg:p-12 shadow-xl">
              <div className="text-center">
                <img alt="Lavínia Reis Ateliê" src="/lovable-uploads/32f8f303-b240-456f-bde3-9816bcdb73b0.png" className="h-96 lg:h-40 w-auto mx-auto object-contain mb-6" />
                <blockquote className="font-playfair text-xl lg:text-2xl text-elegant-charcoal italic mb-4">
                  "Desenvolvendo histórias de amor"
                </blockquote>
                <p className="font-inter text-elegant-gray">
                  - Lavínia Batista dos Reis
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-elegant-gray/30 hidden lg:block"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-elegant-gray/30 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </section>;
};

