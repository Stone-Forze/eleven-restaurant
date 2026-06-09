import { motion } from 'motion/react';
import { Leaf, ChefHat, Sparkles, Heart } from 'lucide-react';

const features = [
  {
    title: "Fresh Ingredients",
    description: "Sourced daily from local markets to ensure the highest quality and taste.",
    icon: Leaf
  },
  {
    title: "Expert Chefs",
    description: "Our culinary masters bring years of fine dining experience to every plate.",
    icon: ChefHat
  },
  {
    title: "Premium Ambience",
    description: "An elegantly designed space perfect for your most special occasions.",
    icon: Sparkles
  },
  {
    title: "Excellent Service",
    description: "Attentive, warm hospitality that makes you feel right at home.",
    icon: Heart
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-dark-gray relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h3 className="text-xs uppercase tracking-[0.2em] text-secondary mb-8 font-semibold flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-secondary/30"></span>
            The Experience
            <span className="h-px w-8 bg-secondary/30"></span>
          </h3>
          <h2 className="font-serif text-4xl md:text-5xl text-accent text-center">Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={feature.title}
                className="group relative bg-primary/20 p-8 border border-white/5 hover:bg-white/5 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm shadow-xl"
              >
                {/* Gold Highlight Line */}
                <div className="absolute top-0 left-0 w-0 h-1 bg-secondary transition-all duration-500 group-hover:w-full"></div>
                
                <div className="w-14 h-14 font-serif italic flex items-center mb-6 text-secondary text-2xl group-hover:scale-110 transition-transform duration-500">
                  0{index + 1}
                </div>
                
                <h3 className="font-sans text-sm font-semibold tracking-wide text-accent mb-3">{feature.title}</h3>
                <p className="font-sans text-[11px] text-soft-beige/50 uppercase leading-relaxed tracking-wider">
                  {feature.description}
                </p>
                <div className="mt-6 opacity-20 transition-opacity duration-500 group-hover:opacity-100">
                   <Icon className="w-12 h-12 stroke-[0.5] text-secondary" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
