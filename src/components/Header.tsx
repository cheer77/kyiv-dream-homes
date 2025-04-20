
import { useLanguage } from "../context/LanguageContext";
import { HomeIcon } from "lucide-react";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <HomeIcon className="w-8 h-8 mr-3 text-blue-600" />
          <div className="text-2xl font-bold text-blue-600">Kyiv Homes</div>
        </div>
        
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-blue-600 transition-colors">
            {t("nav.home")}
          </a>
          <a href="#about" className="hover:text-blue-600 transition-colors">
            {t("nav.about")}
          </a>
          <a href="#apartments" className="hover:text-blue-600 transition-colors">
            {t("nav.apartments")}
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">
            {t("nav.contact")}
          </a>
        </nav>

        <div className="flex space-x-4">
          <button
            onClick={() => setLanguage("uk")}
            className={`px-3 py-1 rounded ${
              language === "uk" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            UA
          </button>
          <button
            onClick={() => setLanguage("ru")}
            className={`px-3 py-1 rounded ${
              language === "ru" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            RU
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
