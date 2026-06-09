import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { ZoomIn } from 'lucide-react';
import { useState } from 'react';

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2670&auto=format&fit=crop", className: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2670&auto=format&fit=crop", className: "col-span-1 row-span-2" },
  { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2670&auto=format&fit=crop", className: "col-span-1 row-span-1" },
  { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop", className: "col-span-2 row-span-1" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop", className: "col-span-1 row-span-1" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-primary text-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-secondary font-sans tracking-[0.2em] uppercase text-sm mb-4 block">Visual Journey</span>
          <h2 className="font-serif text-4xl md:text-5xl text-accent mb-6">Gallery</h2>
          <div className="w-24 h-[1px] bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[300px]">
          {galleryImages.map((img, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={idx}
              className={cn("relative overflow-hidden group cursor-pointer", img.className)}
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                alt="Restaurant visual" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-10 h-10 drop-shadow-lg scale-50 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-primary/95 flex items-center justify-center p-4 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <img 
            src={selectedImage} 
            alt="Expanded view" 
            className="max-w-full max-h-full object-contain drop-shadow-2xl rounded-sm"
          />
        </div>
      )}
    </section>
  );
}
