const AboutSection = () => {
  return (
    <section id="nosotros" className="py-32 bg-gradient-to-br from-gray-950 via-black to-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-contrail-one mb-8 leading-tight text-white">¿Quiénes somos?</h2>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-lg max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed sm:leading-loose font-raleway mb-12 px-4 sm:px-6 md:px-8 lg:px-0">
            En Sunshine creemos que un auto impecable no tiene por qué ser complicado. Somos un equipo joven y
            apasionado por el detalle, que decidió llevar el car detailing a la puerta de tu casa. Nuestra misión es
            simple: cuidar tu vehículo como si fuera el nuestro, combinando precisión técnica, productos de calidad y un
            trato humano y cercano. Nos importa tanto el resultado como tu experiencia: queremos que disfrutes la
            comodidad de no moverte de tu casa, con la tranquilidad de saber que tu auto queda en manos expertas.
          </p>
        </div>

        <div className="mb-20">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 shadow-2xl">
              <img
                src="/professional-car-detailing-team-working-together--.png"
                alt="Equipo de Sunshine Cars trabajando en detailing automotriz"
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-contrail-one text-white mb-2">Nuestro Equipo</h3>
                <p className="text-gray-200 font-raleway text-sm md:text-base">
                  Profesionales apasionados por el detalle y comprometidos con la excelencia
                </p>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-500/20 rounded-full blur-sm"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-orange-500/10 rounded-full blur-md"></div>
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl font-contrail-one mb-12 text-center text-white">¿Qué nos diferencia?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Vamos donde estés",
                description: "Ahorramos tu tiempo y simplificamos tu rutina.",
                icon: "🚗",
              },
              {
                title: "Ahorro de tiempo",
                description: "Coordinás fácil y sin moverte de tu casa.",
                icon: "⏱",
              },
              {
                title: "Explicamos lo técnico sin vueltas",
                description: "En palabras claras, sin jerga innecesaria.",
                icon: "🔧",
              },
              {
                title: "Resultados premium",
                description: "Nos enfocamos en los detalles que otros pasan por alto.",
                icon: "✨",
              },
              {
                title: "Confianza y transparencia",
                description: "Tratamos cada auto con responsabilidad y respeto.",
                icon: "✅",
              },
              {
                title: "Atención cercana",
                description: "Construimos confianza desde el primer contacto.",
                icon: "🤝",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-slate-700/30 to-slate-800/30 rounded-3xl border border-slate-600/30 hover:border-orange-500/50 transition-all duration-700 hover:transform hover:scale-105"
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
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-contrail-one mb-12 text-white">Nuestros valores</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Precisión", icon: "🎯" },
              { name: "Cuidado", icon: "💎" },
              { name: "Responsabilidad", icon: "🛡️" },
              { name: "Cercanía", icon: "❤️" },
              { name: "Comodidad", icon: "🏠" },
              { name: "Confianza", icon: "🤝" },
            ].map((value, index) => (
              <div
                key={index}
                className="group p-4 bg-gradient-to-br from-orange-500/10 to-orange-600/10 rounded-2xl border border-orange-500/20 hover:border-orange-400/50 transition-all duration-500 hover:transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h5 className="text-sm font-contrail-one text-white group-hover:text-orange-400 transition-colors duration-300">
                    {value.name}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
