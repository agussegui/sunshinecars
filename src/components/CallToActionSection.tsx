import { Button } from "./ui/Button"

const CallToActionSection = () => {
  return (
    <section>
      <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-3xl md:text-4xl font-bold font-contrail-one mb-4">
            ¿Listo para coordinar?
          </h2>
          <p className="text-gray-300 text-lg font-raleway mb-8 max-w-2xl mx-auto">
            Escribinos y agendamos. Si tenés dudas, te ayudamos a elegir el plan en 1 minuto.
          </p>
          <Button
            size="default"
            onClick={() =>
              window.open(
                "https://wa.me/5491173665464?text=Hola! Quiero coordinar un turno para el lavado de mi auto",
                "_blank",
              )
            }
            className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg font-raleway transition-all duration-300 transform hover:scale-105"
          >
            Pedir turno ahora
          </Button>
        </div>
      </div>

      {/* Footer navigation */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm font-raleway">
            <p>Sunshine - Cuidamos tu auto como si fuera el nuestro</p>
            <div className="flex space-x-4 md:space-x-8 mt-4 md:mt-0">
              <a href="#servicios" className="hover:text-white transition-colors">Servicios</a>
              <a href="#nosotros" className="hover:text-white transition-colors">Quiénes somos</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQs</a>
              <a href="#galeria" className="hover:text-white transition-colors">Galería</a>
              <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToActionSection
