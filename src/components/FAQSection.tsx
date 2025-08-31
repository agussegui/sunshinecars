
import { useState } from "react"

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  return (
    <section id="faq" className="py-32 bg-gradient-to-br from-gray-950 via-black to-gray-950 transition-all duration-1000">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-contrail-one mb-8 leading-tight text-white">Preguntas frecuentes</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              question: "¿Qué necesito para el servicio a domicilio?",
              answer:
                "Solo necesitamos acceso a una canilla de agua y un enchufe eléctrico. Nosotros llevamos todos los productos, herramientas y equipos necesarios.",
            },
            {
              question: "¿Cuánto tarda cada plan?",
              answer:
                "Quick Shine: ~1 hora, Eco Shine: ~1h 45min, Full Shine: ~2h 30min, Shine a tu medida: 1h 45min a 2h 30min según lo que elijas.",
            },
            {
              question: "¿El lavado en seco sirve para cualquier vehículo?",
              answer:
                "Sí, es ideal para suciedad leve a moderada y lugares sin canilla. Perfecto para cocheras, oficinas o cuando querés mantener el auto limpio entre lavados completos.",
            },
            {
              question: "¿Con qué frecuencia conviene lavar?",
              answer:
                "Recomendamos cada 15-20 días para uso normal, cada 7-10 días si usás mucho el auto o está expuesto a mucha suciedad.",
            },
          ].map((faq, index) => (
            <div key={index} className="bg-gray-900/50 rounded-xl border border-gray-800/50 overflow-hidden">
              <button
                className="w-full text-left p-6 hover:bg-gray-800/30 transition-colors duration-300"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-contrail-one text-white">{faq.question}</h4>
                  <span
                    className={`text-orange-400 text-xl transition-transform duration-300 ${openFAQ === index ? "rotate-90" : ""}`}
                  >
                    ▶
                  </span>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-300 font-raleway leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-sm text-gray-400 font-raleway">
          Los tiempos son estimados y pueden variar según el estado del vehículo.
        </div>
      </div>
    </section>
  )
}

export default FAQSection
