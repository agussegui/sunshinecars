import { Button } from "./ui/Button"

const partners = [
  {
    name: "Mostajo Verificaciones",
    description:
      "Taller mecánico de confianza. Trabajamos en conjunto: luego de reparaciones importantes, dejamos los vehículos en condiciones estéticas óptimas. Recomendamos Mostajo Mecánica como servicio mecánico confiable y profesional.",
    url: "https://mostajoverificaciones.com",
    logo: <img src="../LogoVerificaciones.jpg" alt="Mostajo Logo" className="max-h-36 object-contain" />,
  },
  {
    name: "V6",
    description: "La forma más segura de comprar y vender online.",
    url: "https://v6.com.ar",
    logo: <img src="../LogoV6.svg" alt="V6 Logo" className="max-h-24 object-contain p-4 bg-white rounded" />,
  },
  {
    name: "Rena Piermarini Autos",
    description:
      "Concesionaria y experiencias automotrices. Recibimos autos para dejarlos en excelente estado estético previo a la venta. Recomendamos Rena Piermarini a clientes que buscan vender su vehículo.",
    url: "https://linktr.ee/renapiermariniautos",
    logo: <img src="../logovonixxbranco.webp" alt="Rena Logo" className="max-h-24 object-contain" />,
  },
]

const PartnersSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-950 via-black to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-contrail-one mb-8 leading-tight text-white">Nuestros Aliados</h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed font-raleway mb-4">
            En Sunshine generamos convenios de colaboración estratégica con emprendedores y empresas que comparten
            nuestra visión: brindar un servicio integral, de confianza y de calidad.
          </p>
          <p className="text-gray-400 text-base max-w-3xl mx-auto leading-relaxed font-raleway">
            Así, cada aliado suma su especialidad y juntos potenciamos la experiencia de nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-gray-950 rounded-3xl border border-gray-800 p-8 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105 flex flex-col"
            >
              <div className="text-center mb-6">
                {/* Logo centrado con flex */}
                <div className="flex items-center justify-center h-32 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <h3 className="text-xl font-contrail-one pt-4 text-white mb-4 group-hover:text-orange-400 transition-colors duration-300">
                  {partner.name}
                </h3>
              </div>
              <div className="text-center flex flex-col flex-1 justify-between">
                <p className="text-gray-300 font-raleway text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {partner.description}
                </p>

                <Button
                  onClick={() => window.open(partner.url, "_blank")}
                  className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  Ver más
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
