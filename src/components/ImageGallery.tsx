import { useState, useEffect, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

const galleryImages = [
  {
    id: 1,
    url: "https://syasans.com/wp-content/uploads/2024/09/Screenshot-2024-09-27-103541.png",
    title: "Performance Feedback ",
  },
  {
    id: 2,
    url: "https://syasans.com/wp-content/uploads/2024/09/Screenshot-2024-09-27-103902.png",
    title: "Performance Feedback ",
  },
  {
    id: 3,
    url: "https://syasans.com/wp-content/uploads/2024/09/syasans.png",
    title: "Performance Feedback ",
  },
  {
    id: 4,
    url: "https://syasans.com/wp-content/uploads/2024/09/Screenshot-2024-09-27-103554.png",
    title: "Performance Feedback ",
  },
  {
    id: 5,
    url: "https://syasans.com/wp-content/uploads/2024/09/Screenshot-2024-09-27-103621.png",
    title: "Performance Feedback ",
  },
  {
    id: 6,
    url: "https://syasans.com/wp-content/uploads/2024/09/Screenshot-2024-09-27-103516.png",
    title: "Performance Feedback ",
  },
];

export const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

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

  const handleNext = () => {
    setSelectedImage((prev) => {
      const nextIndex = prev === null ? 0 : (prev + 1) % galleryImages.length;
      setSelectedIndex(nextIndex);
      return nextIndex;
    });
  };

  const handlePrevious = () => {
    setSelectedImage((prev) => {
      const prevIndex = prev === null ? 0 : (prev - 1 + galleryImages.length) % galleryImages.length;
      setSelectedIndex(prevIndex);
      return prevIndex;
    });
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent, info: PanInfo) => {
    setIsDragging(true);
    setDragStartX('touches' in e ? e.touches[0].clientX : e.clientX);
  };

  const handleDragEnd = (e: MouseEvent | TouchEvent, info: PanInfo) => {
    if (!isDragging) return;
    
    const dragEndX = 'touches' in e ? e.changedTouches[0].clientX : (e as MouseEvent).clientX;
    const dragDistance = dragEndX - dragStartX;
    
    if (Math.abs(dragDistance) > 50) { // Minimum drag distance to trigger slide
      if (dragDistance > 0) {
        handlePrevious();
      } else {
        handleNext();
      }
    }
    
    setIsDragging(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") setSelectedImage(null);
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
  };

  // Handle keyboard events
  useEffect(() => {
    if (selectedImage !== null) {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
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

  // Get adjacent images for carousel view with additional styling properties
  const getAdjacentImages = (currentIndex: number) => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    
    return [
      { 
        ...galleryImages[prevIndex], 
        position: 'left' as const,
        rotation: -15,
        scale: 0.7,
        opacity: 0.4,
        z: -50
      },
      { 
        ...galleryImages[currentIndex], 
        position: 'center' as const,
        rotation: 0,
        scale: 1,
        opacity: 1,
        z: 10
      },
      { 
        ...galleryImages[nextIndex], 
        position: 'right' as const,
        rotation: 15,
        scale: 0.7,
        opacity: 0.4,
        z: -50
      }
    ];
  };

  return (
    <div className="py-12 md:py-24">
      <div
        ref={galleryRef}
        className={`grid ${getGridClass()} gap-6 px-4 md:px-8 transition-all duration-700`}
      >
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            className="relative group cursor-pointer overflow-hidden rounded-2xl glass border border-primary/20 hover:border-primary/50 transition-all duration-500"
            onClick={() => setSelectedImage(index)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: (scrollProgress < 0.3 && index > 0) || 
                      (scrollProgress >= 0.3 && scrollProgress < 0.6 && index > 1) 
                      ? 0 : 1,
              scale: (scrollProgress < 0.3 && index > 0) || 
                    (scrollProgress >= 0.3 && scrollProgress < 0.6 && index > 1)
                    ? 0.95 : 1,
              y: 0 
            }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <motion.img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-semibold text-lg md:text-xl">{image.title}</h3>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
              Click to view
            </div>
          </motion.div>
        ))}
      </div>

      {/* Carousel Overlay */}
      <AnimatePresence>
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50">
            {/* Gradient overlay with blur */}
            <motion.div 
              className="fixed inset-0 bg-blue-300/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedImage(null)}
            />
            
            {/* Carousel Container */}
            <div className="relative z-10 h-screen flex items-center justify-center p-4">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 transition-colors p-2 rounded-full shadow-lg z-50"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative w-full max-w-7xl h-[80vh] flex items-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                  className="absolute left-4 bg-white/90 hover:bg-white text-gray-800 transition-colors p-3 rounded-full shadow-lg z-10"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>

                <div 
                  ref={carouselRef}
                  className="relative w-full h-full mx-auto"
                >
                  {selectedImage !== null && getAdjacentImages(selectedImage).map((img) => (
                    <motion.div
                      key={`${img.id}-${img.position}`}
                      className="absolute inset-0 flex items-center justify-center"
                      initial={false}
                      animate={{
                        x: img.position === 'left' ? '-75%' : img.position === 'right' ? '75%' : '0%',
                        scale: img.scale,
                        opacity: img.opacity,
                        rotateY: img.rotation,
                        zIndex: img.z,
                        filter: img.position === 'center' ? 'none' : 'blur(1px)',
                        boxShadow: img.position === 'center' 
                          ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
                          : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                        duration: 0.6
                      }}
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        perspective: '1000px',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        <motion.div 
                          className="relative w-full h-full"
                          style={{
                            transformStyle: 'preserve-3d',
                            transform: `rotateY(${img.rotation}deg)`,
                          }}
                        >
                          <img
                            src={img.url}
                            alt={img.title}
                            className="w-full h-full object-contain"
                            style={{
                              transform: `scale(${img.position === 'center' ? 1 : 0.9})`,
                              transformStyle: 'preserve-3d',
                              backfaceVisibility: 'hidden',
                              transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                            }}
                          />
                        </motion.div>
                        {img.position === 'center' && (
                          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                            <div className="text-white text-center space-y-1">
                              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                                {img.title}
                              </h3>
                              <p className="text-sm opacity-90 text-blue-100">
                                {selectedImage !== null ? selectedIndex + 1 : 0} / {galleryImages.length}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-4 bg-white/90 hover:bg-white text-gray-800 transition-colors p-3 rounded-full shadow-lg z-10"
                  aria-label="Next"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
