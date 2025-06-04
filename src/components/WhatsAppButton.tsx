
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre os serviços do Lavínia Reis Ateliê.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5584992068288?text=${encodedMessage}`, "_blank");
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
};
