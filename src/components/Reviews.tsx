import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Sarah Jenkins",
    text: "An absolutely stunning dining experience. Every dish was a work of art, and the ambience is perfectly curated for a special evening.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    text: "The Wagyu Ribeye was cooked to absolute perfection. ELEVENS brings a level of sophistication to Gola Gokaran Nath that we desperately needed.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    text: "Impeccable service! The staff anticipated our every need without being intrusive. The Truffle Arancini is a must-try.",
    rating: 4
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-dark-gray relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 text-9xl font-serif text-white">"</div>
        <div className="absolute bottom-10 right-10 text-9xl font-serif text-white rotate-180">"</div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="mb-12">
          <span className="text-secondary font-sans tracking-[0.2em] uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="font-serif text-4xl md:text-5xl text-accent mb-4">What Our Guests Say</h2>
          
          <div className="flex justify-center gap-12 mt-8">
            <div className="flex flex-col items-center">
              <div className="text-secondary text-2xl font-serif">4.0<span className="text-xs ml-1">★</span></div>
              <div className="text-[10px] uppercase tracking-widest text-soft-beige/40">Average Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-secondary text-2xl font-serif">257</div>
              <div className="text-[10px] uppercase tracking-widest text-soft-beige/40">Verified Reviews</div>
            </div>
          </div>
        </div>

        <div className="relative h-[300px] sm:h-[250px] md:h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute w-full"
            >
              <div className="glass p-8 md:p-12 rounded-xl border-white/5 relative mx-auto max-w-2xl">
                <Quote className="absolute top-6 left-6 w-8 h-8 text-secondary/20" />
                <p className="font-serif text-xl md:text-2xl text-accent leading-relaxed mb-8 italic">
                  "{reviews[currentIndex].text}"
                </p>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-1px bg-secondary/50 mb-3 block"></div>
                  <h4 className="font-sans font-semibold tracking-widest text-secondary uppercase text-sm">
                    {reviews[currentIndex].name}
                  </h4>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-secondary scale-125" : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
