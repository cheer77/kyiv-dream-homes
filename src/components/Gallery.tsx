
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from "../context/LanguageContext";

const Gallery = () => {
  const { t } = useLanguage();

  const apartments = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      alt: "Kyiv Apartment 1"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840",
      alt: "Kyiv Apartment 2"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      alt: "Kyiv Apartment 3"
    }
  ];

  return (
    <section className="py-20 bg-white" id="gallery">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          {t("gallery.title")}
        </h2>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {apartments.map((apartment) => (
              <CarouselItem key={apartment.id}>
                <div className="p-1">
                  <img
                    src={apartment.image}
                    alt={apartment.alt}
                    className="w-full h-[600px] object-cover rounded-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery;

