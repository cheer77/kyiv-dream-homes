
import { LanguageProvider } from "../context/LanguageContext";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Gallery from "../components/Gallery";
import Calculator from "../components/Calculator";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Features />
        <Gallery />
        <Calculator />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
