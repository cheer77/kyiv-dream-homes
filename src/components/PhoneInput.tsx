
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Flag } from "lucide-react";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const countryCodes = [
  { code: "UA", dial: "+380", name: "Ukraine" },
  { code: "RU", dial: "+7", name: "Russia" },
];

export const PhoneInput = ({ value, onChange, error }: PhoneInputProps) => {
  // Split the value into country code and number parts
  const [countryCode, number = ""] = value.includes(" ") 
    ? value.split(" ", 2) 
    : ["+380", value];

  const handleCountryChange = (newCode: string) => {
    onChange(`${newCode} ${number}`);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(`${countryCode || "+380"} ${e.target.value}`);
  };

  return (
    <div className="flex gap-2">
      <Select value={countryCode || "+380"} onValueChange={handleCountryChange}>
        <SelectTrigger className="w-[140px]">
          <SelectValue>
            <div className="flex items-center gap-2">
              <Flag className="w-4 h-4" />
              {countryCode || "+380"}
            </div>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {countryCodes.map((country) => (
            <SelectItem key={country.code} value={country.dial}>
              <div className="flex items-center gap-2">
                <Flag className="w-4 h-4" />
                <span>{country.dial}</span>
                <span className="text-muted-foreground">({country.name})</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        type="tel"
        value={number}
        onChange={handleNumberChange}
        className={error ? "border-red-500" : ""}
        placeholder="123-456-789"
      />
    </div>
  );
};
