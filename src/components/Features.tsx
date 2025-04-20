
import { useLanguage } from "../context/LanguageContext";
import { MapPin, Home, BadgeDollarSign, PhoneCall } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";

const Features = () => {
  const { t } = useLanguage();
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);

  const features = [
    {
      icon: Home,
      title: t("features.quality"),
      description: t("features.qualityDesc"),
    },
    {
      icon: MapPin,
      title: t("features.location"),
      description: t("features.locationDesc"),
    },
    {
      icon: BadgeDollarSign,
      title: t("features.price"),
      description: t("features.priceDesc"),
    },
    {
      icon: PhoneCall,
      title: t("features.support"),
      description: t("features.supportDesc"),
    },
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
              onClick={() => setSelectedFeature(index)}
              className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-105"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
          ))}
        </div>

        <Dialog open={selectedFeature !== null} onOpenChange={() => setSelectedFeature(null)}>
          {selectedFeature !== null && (
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <div className="flex items-center justify-center mb-4">
                  {selectedFeature !== null && (
                    <div className="text-blue-600">
                      {(() => {
                        const FeatureIcon = features[selectedFeature].icon;
                        return <FeatureIcon className="w-16 h-16" />;
                      })()}
                    </div>
                  )}
                </div>
                <DialogTitle className="text-center text-2xl mb-4">
                  {features[selectedFeature].title}
                </DialogTitle>
              </DialogHeader>
              <div className="text-center text-gray-600">
                {features[selectedFeature].description}
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
};

export default Features;
