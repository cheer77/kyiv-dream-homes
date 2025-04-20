
import { useLanguage } from "../context/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t("contact.title")}
        </h2>
        
        <div className="max-w-lg mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                {t("contact.name")}
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                {t("contact.phone")}
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                {t("contact.email")}
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                {t("contact.message")}
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              ></textarea>
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
