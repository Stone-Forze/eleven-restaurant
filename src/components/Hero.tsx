import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2574&auto=format&fit=crop"
          alt="Restaurant Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-secondary text-xs uppercase tracking-[0.4em] mb-4 italic font-serif block drop-shadow-lg">
            Welcome to
          </span>
          <h1 className="font-serif text-[80px] sm:text-[110px] md:text-[130px] lg:text-[150px] leading-[0.9] font-light tracking-tighter text-accent mb-6 drop-shadow-2xl">
            ELE<span className="text-secondary">V</span>ENS
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-soft-beige/80 leading-relaxed max-w-md font-light mb-10 drop-shadow-lg mx-auto"
        >
          Where Great Food Meets Great Moments. Experience culinary excellence in an atmosphere of refined elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#menu"
            className="bg-secondary text-primary px-10 py-4 text-[11px] uppercase tracking-widest font-bold hover:bg-accent transition-colors flex items-center justify-center gap-2"
          >
            View Menu <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="border border-secondary/50 text-secondary px-10 py-4 text-[11px] uppercase tracking-widest hover:bg-secondary/10 transition-all flex items-center justify-center"
          >
            Call Now
          </a>
        </motion.div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-soft-beige/60 uppercase tracking-widest font-sans">Scroll</span>
        <div className="w-[1px] h-12 bg-soft-beige/30 overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-full h-1/2 bg-secondary"
          />
        </div>
      </motion.div>
    </section>
  );
}
