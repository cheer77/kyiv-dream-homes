
import { useLanguage } from "../context/LanguageContext";
import { MapPin, Home, BadgeDollarSign, PhoneCall } from "lucide-react";

const Features = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Home, title: t("features.quality") },
    { icon: MapPin, title: t("features.location") },
    { icon: BadgeDollarSign, title: t("features.price") },
    { icon: PhoneCall, title: t("features.support") },
  ];

  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t("features.title")}
        </h2>
        
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
