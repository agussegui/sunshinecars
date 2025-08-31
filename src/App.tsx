import AboutSection from "./components/AboutSection"
import CallToActionSection from "./components/CallToActionSection"
import ComparisonTable from "./components/ComparationTable"
import ContactSection from "./components/ContactSection"
import FAQSection from "./components/FAQSection"
import FleetServicesSection from "./components/FleetServiceSection"
import GallerySection from "./components/GallerySection"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import HowWeWorkSection from "./components/HowWeWorkSection"
import PartnersSection from "./components/PartnersSection"
import ServicesSection from "./components/ServiceSection"
import "./index.css"


function App() {

  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <HeroSection />
        <AboutSection/>
        <ComparisonTable/>
        <ServicesSection/>
        <FleetServicesSection/>
        <HowWeWorkSection/>
        <FAQSection/>
        <PartnersSection/>
        <GallerySection/>
        <ContactSection/>
        <CallToActionSection/>
      </div>
    </>
  )
}

export default App
