
const GallerySection = () => {
  const galleryImages = [
    {
      src: "../audi.jpeg",
      title: "Transformación completa",
      description: "Antes y después de nuestro tratamiento Full Shine",
      category: "Full Shine",
      size: "large",
    },
    {
      src: "../focus.jpg",
      title: "Interior impecable",
      description: "Limpieza profunda de tapizados y plásticos",
      category: "Eco Shine",
      size: "normal",
    },
    {
      src: "../cruze-frente.jpeg",
      title: "Brillo exterior",
      description: "Lavado y encerado profesional",
      category: "Quick Shine",
      size: "normal",
    },
    {
      src: "../nissan.jpeg",
      title: "Llantas como nuevas",
      description: "Limpieza especializada de llantas y neumáticos",
      category: "Full Shine",
      size: "normal",
    },
    {
      src: "../rangerdentro.jpg",
      title: "Servicio premium",
      description: "Tratamiento cerámico en vehículo de lujo",
      category: "Premium",
      size: "normal",
    },
    {
      src: "../ruedavol.jpg",
      title: "Dashboard perfecto",
      description: "Limpieza y protección de superficies interiores",
      category: "Eco Shine",
      size: "normal",
    },
    {
      src: "../ranger.jpg",
      title: "Dashboard perfecto",
      description: "Limpieza y protección de superficies interiores",
      category: "Eco Shine",
      size: "normal",
    },
    {
      src: "../territorycorte.jpeg",
      title: "Dashboard perfecto",
      description: "Limpieza y protección de superficies interiores",
      category: "Eco Shine",
      size: "normal",
    },
  ]

  return (
    <section
      id="galeria"
      className="py-36 bg-gradient-to-br from-black via-gray-950 to-black overflow-hidden transition-all duration-1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-7xl mb-2 font-contrail-one leading-tight">Galería</h2>
          <h3 className=" flex justify-center">
            <span className="block pr-2 text-white text-lg md:text-xl font-raleway mb-8">NUESTROS </span>
            <span className="block text-orange-400 text-lg md:text-xl font-raleway mb-8"> TRABAJOS</span>
          </h3>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto font-raleway">
            Descubre la transformación que logramos en cada vehículo con nuestros tratamientos profesionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gray-950 cursor-pointer transform transition-all duration-700 hover:scale-105 hover:z-10 ${
                image.size === "large" ? "row-span-2 col-span-1 md:col-span-1" : "row-span-1 col-span-1"
              } ${index % 7 === 0 ? "md:col-span-2" : ""}`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              
              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
