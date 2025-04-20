
import { useState } from 'react';
import { useLanguage } from "../context/LanguageContext";
import { Calculator as CalculatorIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Calculator = () => {
  const { t } = useLanguage();
  const [squareMeters, setSquareMeters] = useState("");
  const [pricePerMeter, setPricePerMeter] = useState("");
  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    const meters = parseFloat(squareMeters);
    const price = parseFloat(pricePerMeter);
    
    if (!isNaN(meters) && !isNaN(price)) {
      setTotalPrice(meters * price);
    }
  };

  return (
    <section className="py-20 bg-gray-50" id="calculator">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <CalculatorIcon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
          <h2 className="text-4xl font-bold mb-6">{t("calculator.title")}</h2>
          <p className="text-gray-600 mb-8">{t("calculator.description")}</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-left">
                {t("calculator.squareMeters")}
              </label>
              <Input
                type="number"
                value={squareMeters}
                onChange={(e) => setSquareMeters(e.target.value)}
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-left">
                {t("calculator.pricePerMeter")}
              </label>
              <Input
                type="number"
                value={pricePerMeter}
                onChange={(e) => setPricePerMeter(e.target.value)}
                placeholder="0"
              />
            </div>
          </div>
          
          <Button 
            onClick={calculatePrice}
            className="w-full md:w-auto"
          >
            {t("calculator.calculate")}
          </Button>

          {totalPrice !== null && (
            <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">{t("calculator.totalPrice")}</h3>
              <p className="text-3xl font-bold text-blue-600">
                ${totalPrice.toLocaleString()}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
