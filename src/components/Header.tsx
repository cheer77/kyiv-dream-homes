import { useLanguage } from "../context/LanguageContext";
import { HomeIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const languages = [
    { code: "uk", label: "Українська", flag: "🇺🇦" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },
  ];

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

        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="w-[140px]">
            <SelectValue>
              <span className="flex items-center">
                {languages.find(lang => lang.code === language)?.flag}&nbsp;
                {languages.find(lang => lang.code === language)?.label}
              </span>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {languages.map((lang) => (
              <SelectItem key={lang.code} value={lang.code}>
                <span className="flex items-center">
                  {lang.flag}&nbsp;{lang.label}
                </span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </header>
  );
};

export default Header;
