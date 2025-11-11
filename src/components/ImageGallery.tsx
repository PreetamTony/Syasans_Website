import { useState, useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",
    title: "Team Collaboration",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop",
    title: "Learning Excellence",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop",
    title: "Career Success",
  },
];

export const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current) {
        const rect = galleryRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.max(
          0,
          Math.min(1, (windowHeight - rect.top) / (windowHeight * 0.5))
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") setSelectedImage(null);
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
  };

  useEffect(() => {
    if (selectedImage !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
      };
    }
  }, [selectedImage]);

  // Calculate grid layout based on scroll
  const getGridClass = () => {
    if (scrollProgress < 0.3) {
      return "grid-cols-1";
    } else if (scrollProgress < 0.6) {
      return "grid-cols-2";
    } else {
      return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <>
      <div
        ref={galleryRef}
        className={`grid ${getGridClass()} gap-6 transition-all duration-700 scroll-reveal`}
      >
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className={`relative group cursor-pointer overflow-hidden rounded-2xl glass border border-primary/20 hover:border-primary/50 transition-all duration-500 ${
              scrollProgress < 0.3 && index > 0 ? "opacity-0 scale-95" : "opacity-100 scale-100"
            } ${
              scrollProgress >= 0.3 && scrollProgress < 0.6 && index > 1 ? "opacity-0 scale-95" : ""
            }`}
            onClick={() => setSelectedImage(index)}
            style={{
              transitionDelay: `${index * 100}ms`,
              transform: scrollProgress < 0.3 && index === 0 ? "scale(1.1)" : "",
            }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              Click to view
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2 hover:bg-white/10 rounded-full"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={handlePrevious}
            className="absolute left-4 text-white hover:text-primary transition-colors p-3 hover:bg-white/10 rounded-full"
            aria-label="Previous"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 text-white hover:text-primary transition-colors p-3 hover:bg-white/10 rounded-full"
            aria-label="Next"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="max-w-6xl max-h-[90vh] mx-4">
            <img
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-fade-in-scale"
            />
            <div className="text-center mt-4">
              <h3 className="text-white text-2xl font-semibold">
                {galleryImages[selectedImage].title}
              </h3>
              <p className="text-white/60 mt-2">
                {selectedImage + 1} / {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
