import { Button } from "./ui/Button";

const ServicesSection = () => {
  const services = [
    {
      title: "Quick Shine",
      duration: "~ 1 hora",
      description: "Lo esencial, bien hecho → ideal si tenés poco tiempo.",
      details: [
        "Lavado exterior",
        "Limpieza de llantas",
        "Aspirado rápido del habitáculo",
      ],
      result: "auto limpio y listo para usar.",
      color: "from-blue-500 to-blue-600",
      icon: "🚗",
      image: "../audirueda.jpeg",
    },
    {
      title: "Eco Shine",
      duration: "~ 1 h 45 min",
      description:
        "Una puesta a punto completa con productos amigables con tu auto.",
      details: [
        "Limpieza de paneles y plásticos",
        "Aspirado de habitáculo y baúl",
        "Lavado exterior con shampoo pH neutro",
        "Llantas con desengrasante",
        "Revitalizador de cubiertas",
      ],
      result: "interior ordenado + exterior con buen brillo.",
      color: "from-green-500 to-green-600",
      icon: "🌿",
      image: "../limpiador.jpeg",
    },
    {
      title: "Full Shine",
      duration: "~ 2 h 30 min",
      description: "El plus de detalle y protección para que se note.",
      details: [
        "Llantas con limpiador férrico",
        "Descontaminación de pintura",
        "Limpieza de salidas de aire",
        "Revitalizador de plásticos exterior",
        "Encerado a mano",
      ],
      result: "brillo marcado y pintura protegida.",
      color: "from-purple-500 to-purple-600",
      icon: "✨",
      image: "../fullshine.jpeg",
    },
    {
      title: "Shine a tu medida",
      duration: "entre 1 h 45 min y 2 h 30 min",
      description: "Elegís qué querés priorizar y lo armamos con vos.",
      details: [
        "Exterior → lavado, llantas, cera",
        "Interior → aspirado, plásticos, vidrios",
        "Específico → pelos de mascotas, manchas, etc.",
      ],
      result: "tu necesidad puntual está resuelta.",
      color: "from-orange-500 to-orange-600",
      icon: "🔧",
      image: "../shinetumedida.jpeg",
    },
    {
      title: "Lavado en seco",
      duration: "Variable",
      description: "Usa poca o nada de agua → ideal para lugares sin canilla.",
      details: [
        "Funciona mejor en: suciedad leve a moderada",
        "Enviás 3–5 fotos por vehículo",
        "Fotos necesarias: frente, laterales, trasera y detalle de suciedad",
        "Confirmamos si es apto; si no, recomendamos la mejor alternativa",
      ],
      result: "limpieza efectiva sin agua.",
      color: "from-orange-500 to-orange-600",
      icon: "💧",
      image: "../lavadoseco.jpeg",
      action: "SOLICITAR EVALUACIÓN PARA FLOTAS",
    },
  ];

  return (
    <section
      id="servicios"
      className="py-36 bg-gradient-to-br from-gray-950 via-black to-gray-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-2 font-contrail-one leading-tight">
            SERVICIOS
          </h2>
          <h3 className="text-lg md:text-xl font-contrail-one mb-8 text-orange-400">
            Servicios para particulares
          </h3>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* First 4 services in 2x2 grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {services.slice(0, 4).map((service, index) => (
              <div key={index}>
                <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-[#920563] transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10 h-full flex flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover bg-gray-800"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                      <div className="bg-black/60 backdrop-blur-sm rounded-full p-2">
                        <div className="text-2xl">{service.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-contrail-one text-white mb-1 drop-shadow-lg bg-slate-900/90 px-3 py-1 rounded-2xl ">
                          {service.title}
                        </h3>
                        <div className="bg-[#920563] backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold font-raleway">
                          {service.duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 text-center flex flex-col flex-1 justify-between">
                    <p className="text-gray-300 text-sm font-raleway mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mb-4 flex-1">
                      <h4 className="text-orange-400 font-semibold mb-3 font-raleway">
                        Incluye:
                      </h4>
                      <ul className="text-sm text-gray-300 space-y-2">
                        {service.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <span className="text-[#8b044c] mr-3 mt-1">●</span>
                            <span className="font-raleway leading-relaxed">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4 p-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-xl border border-orange-500/20">
                      <p className="text-sm text-gray-200 font-raleway">
                        <span className="text-orange-400 font-semibold">
                          Resultado:
                        </span>{" "}
                        {service.result}
                      </p>
                    </div>

                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#920563] to-[#8b044c] hover:from-[#920563] hover:to-[#8b044c] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                      onClick={() => {
                        const message = `Hola! Me interesa el ${service.title}. ¿Podrían darme más información?`;
                        const whatsappUrl = `https://wa.me/5491173665464?text=${encodeURIComponent(
                          message
                        )}`;
                        window.open(whatsappUrl, "_blank");
                      }}
                    >
                      PEDIR TURNO
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Fifth service centered */}
          {services[4] && (
            <div className="flex justify-center">
              <div className="w-full max-w-xl">
                <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-[#920563] transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10 h-full">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={services[4].image || "/placeholder.svg"}
                      alt={services[4].title}
                      className="w-full h-full object-cover bg-gray-800"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                      <div className="bg-black/60 backdrop-blur-sm rounded-full p-2">
                        <div className="text-2xl">{services[4].icon}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-contrail-one text-white mb-1 drop-shadow-lg bg-slate-900/90 rounded-xl px-3 py-1">
                          {services[4].title}
                        </h3>
                        <div className="bg-[#920563] backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-bold font-raleway">
                          {services[4].duration}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col">
                    <p className="text-gray-300 text-sm font-raleway mb-4 leading-relaxed">
                      {services[4].description}
                    </p>

                    <div className="mb-4 flex-1">
                      <h4 className="text-orange-400 font-semibold mb-3 font-raleway">
                        Cómo avanzamos:
                      </h4>
                      <ul className="text-sm text-gray-300 space-y-2">
                        {services[4].details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <span className="text-[#8b044c] mr-3 mt-1">●</span>
                            <span className="font-raleway leading-relaxed">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4 p-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-xl border border-orange-500/20">
                      <p className="text-sm text-gray-200 font-raleway">
                        <span className="text-orange-400 font-semibold">
                          Resultado:
                        </span>{" "}
                        {services[4].result}
                      </p>
                    </div>

                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#920563] to-[#8b044c] hover:from-[#920563] hover:to-[#8b044c] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
                      onClick={() => {
                        const message = `Hola! Me interesa el ${services[4].title}. ¿Podrían darme más información?`;
                        const whatsappUrl = `https://wa.me/5491173665464?text=${encodeURIComponent(
                          message
                        )}`;
                        window.open(whatsappUrl, "_blank");
                      }}
                    >
                      {services[4].action || "Pedir Turno"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
