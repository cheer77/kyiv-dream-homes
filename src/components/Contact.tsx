
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";
import { PhoneInput } from "./PhoneInput";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "+380 ",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else {
      const phoneNumber = formData.phone.split(" ")[1];
      if (!phoneNumber || phoneNumber.length < 9) {
        newErrors.phone = "Invalid phone number";
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      // Handle form submission
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t("contact.title")}
        </h2>
        
        <div className="max-w-lg mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-2">
                {t("contact.name")}
              </label>
              <Input
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                {t("contact.phone")}
              </label>
              <PhoneInput
                value={formData.phone}
                onChange={(value) => handleChange("phone", value)}
                error={errors.phone}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                {t("contact.email")}
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                {t("contact.message")}
              </label>
              <Textarea
                rows={4}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors"
            >
              {t("contact.submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
