import { Button } from "./ui/Button";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
         <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 md:mt-0 mt-14">
        <div className="text-center">
          <h1 className="text-4xl md:text-7xl font-contrail-one mb-6 leading-tight">
            <span className="block text-white">Lavados a domicilio,</span>
            <span className="block text-orange-400">simples de entender</span>
          </h1>
          <p className="text-gray-300 md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed font-raleway">
            Hacemos que tu auto (o tu flota) quede prolijo sin complicaciones.
            Elegí un plan y te contamos en claro qué hacemos, cuánto tarda y
            cómo queda.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-gray-900/70 px-4 py-2 rounded-full text-sm font-raleway">
              A domicilio
            </div>
            <div className="bg-gray-900/70 px-4 py-2 rounded-full text-sm font-raleway">
              Sin letra chica
            </div>
            <div className="bg-gray-900/70 px-4 py-2 rounded-full text-sm font-raleway">
              Duración estimada
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="sm"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              onClick={() => {
                const message = `Hola! Quiero solicitar un turno`;
                const whatsappUrl = `https://wa.me/5491173665464?text=${encodeURIComponent(
                  message
                )}`;
                window.open(whatsappUrl, "_blank");
              }}
            >
              Pedir turno por WhatsApp
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold text-md transition-all duration-300 bg-transparent"
              onClick={() =>
                document
                  .getElementById("servicios")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
