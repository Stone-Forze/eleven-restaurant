import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10 mx-auto max-w-md lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2670&auto=format&fit=crop"
                alt="Chef preparing signature dish"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-secondary/50 z-20 hidden md:block"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-secondary/50 z-20 hidden md:block"></div>
            
            {/* Floating Glass Card */}
            <div className="absolute -right-8 bottom-12 z-30 glass p-6 max-w-[200px] hidden md:block backdrop-blur-md bg-dark-gray/60 border border-white/10 shadow-2xl">
              <p className="font-serif text-4xl text-secondary mb-1">10+</p>
              <p className="text-soft-beige text-xs font-sans uppercase tracking-wider">Years of Culinary Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col text-center lg:text-left items-center lg:items-start"
          >
            <span className="text-secondary font-sans tracking-[0.2em] uppercase text-sm mb-4 block">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-accent mb-8 leading-tight">
              A Symphony of <br className="hidden lg:block"/>Flavors & Elegance
            </h2>
            
            <p className="text-soft-beige/80 font-light leading-relaxed mb-6 font-sans text-lg">
              ELEVENS is a modern restaurant dedicated to serving delicious food, memorable dining experiences, and exceptional hospitality.
            </p>
            <p className="text-soft-beige/80 font-light leading-relaxed mb-10 font-sans text-lg">
              Whether you're enjoying a family dinner, celebrating special occasions, or catching up with friends, ELEVENS provides the perfect atmosphere where every detail is meticulously crafted.
            </p>

            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Signature_Line.svg" 
              alt="Chef Signature" 
              className="h-12 opacity-50 invert"
            />
            <p className="mt-4 text-sm text-soft-beige/60 uppercase tracking-widest font-sans">Executive Chef</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
