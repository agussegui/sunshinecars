
const GallerySection = () => {
  const galleryImages = [
    {
      src: "",
      title: "Transformación completa",
      description: "Antes y después de nuestro tratamiento Full Shine",
      category: "Full Shine",
      size: "large",
    },
    {
      src: "",
      title: "Interior impecable",
      description: "Limpieza profunda de tapizados y plásticos",
      category: "Eco Shine",
      size: "normal",
    },
    {
      src: "",
      title: "Brillo exterior",
      description: "Lavado y encerado profesional",
      category: "Quick Shine",
      size: "normal",
    },
    {
      src: "",
      title: "Llantas como nuevas",
      description: "Limpieza especializada de llantas y neumáticos",
      category: "Full Shine",
      size: "normal",
    },
    {
      src: "",
      title: "Servicio premium",
      description: "Tratamiento cerámico en vehículo de lujo",
      category: "Premium",
      size: "large",
    },
    {
      src: "",
      title: "Dashboard perfecto",
      description: "Limpieza y protección de superficies interiores",
      category: "Eco Shine",
      size: "normal",
    },
  ]

  return (
    <section
      id="galeria"
      className="py-32 bg-gradient-to-br from-black via-gray-950 to-black overflow-hidden transition-all duration-1000"
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="inline-block bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold mb-2">
                    {image.category}
                  </div>
                  <h4 className="text-white font-contrail-one text-lg mb-1 line-clamp-2">{image.title}</h4>
                  <p className="text-gray-300 text-sm line-clamp-2 font-raleway">{image.description}</p>
                </div>
              </div>
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
