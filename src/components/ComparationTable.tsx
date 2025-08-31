// Datos de la tabla comparativa
const comparisonPlans = [
  {
    plan: "Quick Shine",
    simple: "Lavado exterior + llantas + aspirado rápido.",
    result: "Auto limpio y presentable para el día a día.",
    duration: "~ 1:00 h",
  },
  {
    plan: "Eco Shine",
    simple: "Completo adentro y afuera con productos suaves.",
    result: "Interior ordenado + exterior con brillo.",
    duration: "~ 1:45 h",
  },
  {
    plan: "Full Shine",
    simple: "Detalle más profundo + encerado a mano.",
    result: "Brillo marcado y sensación 'recién detallado'.",
    duration: "~ 2:30 h",
  },
  {
    plan: "Shine a tu medida",
    simple: "Armá tu combo: interior, exterior o puntual.",
    result: "Solución a TU necesidad específica.",
    duration: "1:45 ~ 2:30 h",
  },
]

const ComparisonTable = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-950 via-black to-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-contrail-one mb-8 leading-tight text-white">
            Servicios Particulares
          </h2>
          <h3 className="text-lg md:text-xl font-raleway mb-8 leading-tight text-orange-400">
             Elegí el plan que mejor se adapte a vos.
          </h3>
        </div>

        <div className="bg-gray-950 rounded-3xl border border-gray-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900 border-b border-gray-800">
                  <th className="text-left p-6 text-white font-contrail-one text-lg">Plan</th>
                  <th className="text-left p-6 text-white font-contrail-one text-lg">En palabras simples</th>
                  <th className="text-left p-6 text-white font-contrail-one text-lg">Resultado</th>
                  <th className="text-left p-6 text-white font-contrail-one text-lg">Duración</th>
                </tr>
              </thead>
              <tbody>
                {comparisonPlans.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-800 hover:bg-gray-900 transition-colors duration-300"
                  >
                    <td className="p-6">
                      <span className="text-white font-contrail-one text-lg font-semibold">{row.plan}</span>
                    </td>
                    <td className="p-6 text-gray-300 font-raleway">{row.simple}</td>
                    <td className="p-6 text-gray-300 font-raleway">{row.result}</td>
                    <td className="p-6 text-white font-raleway font-semibold">{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ComparisonTable
