export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre os serviços do Lavínia Reis Ateliê.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5584992068288?text=${encodedMessage}`, "_blank");
  };
  return <button onClick={handleWhatsAppClick} aria-label="Falar no WhatsApp" className="">
      <img src="/lovable-uploads/1a9ba389-f69b-4232-91b9-3be45cc5a955.png" alt="WhatsApp" className="w-12 h-12 transition-transform duration-300 group-hover:rotate-12" />
    </button>;
};