const steps = [
  {
    title: "Coordinamos",
    description: "Elegís servicio, fecha y lugar.",
    icon: "📅",
  },
  {
    title: "Llegamos",
    description: "Solo necesitamos canilla y enchufe.",
    icon: "🚐",
  },
  {
    title: "Manos a la obra",
    description: "Técnicas y productos profesionales.",
    icon: "🧽",
  },
  {
    title: "Listo",
    description: "Revisamos juntos y te damos tips.",
    icon: "✨",
  },
]

const HowWeWorkSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-950 to-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-contrail-one mb-8 leading-tight text-white">
            Cómo trabajamos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-slate-700/30 to-slate-800/30 rounded-3xl border border-slate-600/30 hover:border-orange-500/50 transition-all duration-700 hover:transform hover:scale-105"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-contrail-one text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-raleway">
                  {item.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeWorkSection
