
import { LanguageProvider } from "../context/LanguageContext";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Features />
        <Contact />
      </div>
    </LanguageProvider>
  );
};

export default Index;
