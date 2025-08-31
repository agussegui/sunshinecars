"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "./ui/Button"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-black/95 backdrop-blur-lg" : "lg:bg-transparent bg-black/90"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <button
                  onClick={scrollToTop}
                  className="bg-gradient-radial from-pink-500 via-purple-600 to-black px-4 py-2 md:px-8 md:py-4 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300"
                >
                  <h1
                    className="font-contrail-one text-white tracking-wider leading-tight"
                    style={{ fontFamily: "var(--font-contrail-one)", fontWeight: 200 }}
                  >
                    <span className="text-2xl md:text-4xl font-bold">SUNSHINE</span>{" "}
                    <span className="text-lg md:text-2xl font-contrail-one italic">CARS</span>
                  </h1>
                </button>
                <div className="absolute inset-0 bg-gradient-radial from-pink-500 via-purple-600 to-black rounded-xl blur-xl opacity-40 -z-10"></div>
              </div>
            </div>
            <nav className="hidden lg:flex space-x-8 xl:space-x-12">
              {[
                { name: "NOSOTROS", id: "nosotros" },
                { name: "SERVICIOS", id: "servicios" },
                { name: "FAQ", id: "faq" },
                { name: "GALERÍA", id: "galeria" },
                { name: "CONTACTO", id: "contacto" },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-orange-400 hover:scale-105 transition-all duration-500 ease-in-out text-lg font-medium tracking-wide font-raleway transform hover:-translate-y-0.5 cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <Button
              size="sm"
              className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 xl:px-6 xl:py-2 rounded-full font-medium transition-all duration-300 font-raleway text-md cursor-pointer"
              onClick={() =>
                window.open(
                  "https://wa.me/5491173665464?text=Hola! Quiero coordinar un turno para el lavado de mi auto",
                  "_blank",
                )
              }
            >
              Pedir turno 
            </Button>
            
            <button
              className="lg:hidden text-white p-2 relative z-60"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-lg z-40 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-24 px-6">
          <nav className="space-y-4">
            {[
              { name: "NOSOTROS", id: "nosotros" },
              { name: "SERVICIOS", id: "servicios" },
              { name: "FAQ", id: "faq" },
              { name: "GALERÍA", id: "galeria" },
              { name: "CONTACTO", id: "contacto" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="block text-gray-300 hover:text-orange-400 hover:bg-gray-800/50 transition-all duration-300 py-4 px-4 w-full text-left font-raleway rounded-md text-lg"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-6">
              <Button
                size="sm"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full font-medium transition-all duration-300 font-raleway text-lg"
              >
                RESERVAR
              </Button>
            </div>
          </nav>
        </div>
      </div>
      {isMenuOpen && <div className="lg:hidden fixed inset-0 bg-black/50 z-30" onClick={() => setIsMenuOpen(false)} />}
    </>
  )
}

export default Header
