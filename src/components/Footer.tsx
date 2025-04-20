
import { MapPin, Mail, Phone, HomeIcon } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-8">
          <HomeIcon className="w-10 h-10 mr-3 text-blue-400" />
          <h3 className="text-3xl font-bold">Kyiv Homes</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">{t("footer.about")}</h4>
            <p className="text-gray-400">
              {t("footer.description")}
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">{t("footer.contact")}</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-400" />
                <span>вул. Хрещатик 22, Київ, 01001</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-400" />
                <a href="tel:+380441234567">+38 (044) 123-45-67</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-blue-400" />
                <a href="mailto:info@kyivhomes.ua">info@kyivhomes.ua</a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">{t("footer.hours")}</h4>
            <div className="space-y-2 text-gray-400">
              <p>{t("footer.workdays")}: 9:00 - 18:00</p>
              <p>{t("footer.weekend")}: 10:00 - 16:00</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Kyiv Homes. {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
