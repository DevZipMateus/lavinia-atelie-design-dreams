
import { useState } from "react";
import { ImageModal } from "./ImageModal";

// Configuração das colunas - você pode reorganizar as imagens aqui
const imageColumns = {
  column1: [
    "/lovable-uploads/imagens/10061146540617369.jpeg",
    "/lovable-uploads/imagens/538570669192943.jpeg",
    "/lovable-uploads/imagens/709346575013413.jpeg",
    "/lovable-uploads/imagens/1011553054506257.jpeg",
  ],
  column2: [
    "/lovable-uploads/imagens/1223547896073528.jpeg",
    "/lovable-uploads/imagens/599272086525068.jpeg",
    "/lovable-uploads/imagens/1923785121783177.jpeg",
    "/lovable-uploads/imagens/1017411820372983.jpeg",
  ],
  column3: [
    "/lovable-uploads/imagens/2534173120256678.jpeg",
    "/lovable-uploads/imagens/612771871834628.jpeg",
    "/lovable-uploads/imagens/698816742881057.jpeg",
    "/lovable-uploads/imagens/1454726722544336.jpeg",
  ],
};

// Array único com todas as imagens para o modal
const allImages = [
  ...imageColumns.column1,
  ...imageColumns.column2,
  ...imageColumns.column3,
];

export const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (imagePath: string) => {
    const index = allImages.findIndex(img => img === imagePath);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const renderColumn = (images: string[], columnIndex: number) => (
    <div key={columnIndex} className="flex flex-col gap-6">
      {images.map((image, index) => (
        <div
          key={`${columnIndex}-${index}`}
          className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          onClick={() => openModal(image)}
        >
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src={image}
              alt={`Vestido ${columnIndex + 1}-${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm font-medium">Clique para ampliar</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl text-elegant-black mb-6">
            Nossa Galeria
          </h2>
          <p className="font-inter text-lg text-elegant-gray max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos de costura e ajustes realizados com dedicação e expertise.
          </p>
        </div>

        {/* Gallery Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {renderColumn(imageColumns.column1, 0)}
          {renderColumn(imageColumns.column2, 1)}
          {renderColumn(imageColumns.column3, 2)}
        </div>
      </div>

      {/* Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={allImages}
        currentIndex={currentImageIndex}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </section>
  );
};
