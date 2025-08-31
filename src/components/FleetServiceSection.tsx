import { Button } from "./ui/Button"

// Datos de la tabla de servicios
const fleetServices = [
  {
    service: "Quick Shine",
    autos: "✓",
    motos: "✓",
    duration: "~ 1:00 h",
    notes: "Ideal rotación frecuente",
  },
  {
    service: "Eco Shine",
    autos: "✓",
    motos: "–",
    duration: "~ 1:45 h",
    notes: "Interior/Exterior completos",
  },
  {
    service: "Full Shine",
    autos: "✓",
    motos: "–",
    duration: "~ 2:30 h",
    notes: "Fechas clave / presentación",
  },
  {
    service: "Lavado en seco (piloto)",
    autos: "✓",
    motos: "✓",
    duration: "Variable",
    notes: "Requiere fotos para validar",
  },
]

// Lista de puntos para “¿Qué incluye?”
const dryWashIncludes = [
  "Limpieza exterior completa sin agua a presión",
  "Productos que atraen la suciedad + microfibra",
  "Finalización con cera líquida protectora",
  "Aplicable a carrocería, vidrios y llantas (según estado)",
]

const FleetServicesSection = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-contrail-one mb-8 leading-tight text-white">
            Servicios para flotas
          </h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed font-raleway">
            Optimizamos tiempos y rutas para que tu operación siga en marcha. Elegí Quick, Eco o Full por unidad y
            definí frecuencia semanal, quincenal o mensual.
          </p>
        </div>

        {/* Tabla de servicios */}
        <div className="bg-gray-950 rounded-3xl border border-gray-800 overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900 border-b border-gray-800">
                  <th className="text-left p-6 text-white font-contrail-one text-lg">Servicio</th>
                  <th className="text-center p-6 text-white font-contrail-one text-lg">Autos/Combis</th>
                  <th className="text-center p-6 text-white font-contrail-one text-lg">Motos</th>
                  <th className="text-center p-6 text-white font-contrail-one text-lg">Duración/unidad</th>
                  <th className="text-left p-6 text-white font-contrail-one text-lg">Notas</th>
                </tr>
              </thead>
              <tbody>
                {fleetServices.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-800 hover:bg-gray-900 transition-colors duration-300"
                  >
                    <td className="p-6">
                      <span className="text-white font-contrail-one text-lg font-semibold">{row.service}</span>
                    </td>
                    <td className="p-6 text-center text-gray-300 font-raleway text-lg">{row.autos}</td>
                    <td className="p-6 text-center text-gray-300 font-raleway text-lg">{row.motos}</td>
                    <td className="p-6 text-center text-white font-raleway font-semibold">{row.duration}</td>
                    <td className="p-6 text-gray-300 font-raleway">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Lavado en seco */}
        <div className="bg-gray-950 rounded-3xl border border-gray-800 p-8">
          <h3 className="text-2xl font-contrail-one text-white mb-6">Lavado en seco (etapa de prueba)</h3>
          <p className="text-gray-300 font-raleway mb-6 leading-relaxed">
            Usa poco o nada de agua. Ideal para suciedad leve a moderada y lugares sin canilla.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-contrail-one text-white mb-4">¿Qué incluye?</h4>
              <ul className="space-y-2 text-gray-300 font-raleway">
                {dryWashIncludes.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-orange-400 mr-3 mt-1">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-contrail-one text-white mb-4">¿Cómo avanzamos?</h4>
              <p className="text-gray-300 font-raleway mb-4">
                Enviá 3-5 fotos por vehículo (frente, laterales, trasera y detalle de suciedad). Confirmamos si aplica;
                si no, sugerimos la mejor alternativa.
              </p>
              <Button 
              size="default"
              onClick={() => {
                        const message = `Hola! Me interesa el Lavado en seco. ¿Podrían hacer una evaluación?`
                        const whatsappUrl = `https://wa.me/5491173665464?text=${encodeURIComponent(message)}`
                        window.open(whatsappUrl, "_blank")
                      }}
              className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Solicitar evaluación
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FleetServicesSection
