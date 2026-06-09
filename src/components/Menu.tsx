import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const categories = ['All', 'Starters', 'Main Course', 'Desserts', 'Beverages'];

const menuItems = [
  {
    id: 1,
    category: 'Starters',
    name: 'Truffle Arancini',
    description: 'Crispy risotto balls with wild mushroom and truffle aioli',
    price: '$18',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'Starters',
    name: 'Tuna Tartare',
    description: 'Yellowfin tuna, avocado, citrus ponzu, sesame crisps',
    price: '$22',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dd36?q=80&w=2669&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'Main Course',
    name: 'Wagyu Ribeye',
    description: '12oz prime cut, roasted garlic mash, seasonal vegetables, red wine jus',
    price: '$65',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'Main Course',
    name: 'Pan-Seared Scallops',
    description: 'Cauliflower purée, crispy pancetta, brown butter caper sauce',
    price: '$38',
    image: 'https://images.unsplash.com/photo-1626779836362-e61a646c0bce?q=80&w=2618&auto=format&fit=crop'
  },
  {
    id: 5,
    category: 'Desserts',
    name: 'Dark Chocolate Lava',
    description: 'Molten center, Madagascar vanilla bean gelato, berry coulis',
    price: '$14',
    image: 'https://images.unsplash.com/photo-1563805042-7684c8a9e9ce?q=80&w=2614&auto=format&fit=crop'
  },
  {
    id: 6,
    category: 'Beverages',
    name: 'Signature Smoked Old Fashioned',
    description: 'Bourbon, house-made bitters, orange peel, hickory smoke',
    price: '$18',
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=2574&auto=format&fit=crop'
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-primary relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-sans tracking-[0.2em] uppercase text-sm mb-4 block">Our Offerings</span>
          <h2 className="font-serif text-4xl md:text-5xl text-accent mb-6">Featured Menu</h2>
          <div className="w-24 h-[1px] bg-secondary mx-auto mb-10"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-6 py-2 rounded-full font-sans text-sm tracking-wider uppercase transition-all duration-300",
                  activeCategory === category 
                    ? "bg-secondary text-primary font-semibold" 
                    : "bg-transparent text-soft-beige/70 border border-white/10 hover:border-secondary hover:text-secondary"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-4 p-8 bg-white/5 border border-white/5 backdrop-blur-sm"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className="flex flex-col group cursor-pointer transition-colors"
              >
                <div className="flex justify-between items-center gap-6 py-4">
                  <div className="w-16 h-16 shrink-0 overflow-hidden rounded-full border border-white/10 hidden sm:block">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <div className="text-sm font-light text-accent group-hover:text-secondary transition-colors">{item.name}</div>
                      <div className="text-sm text-secondary font-serif">{item.price}</div>
                    </div>
                    <div className="text-[10px] text-soft-beige/30 uppercase tracking-tighter line-clamp-2">
                      {item.description}
                    </div>
                  </div>
                </div>
                {i !== filteredItems.length - 1 && i !== filteredItems.length - 2 && (
                  <div className="h-px bg-white/5 w-full block lg:hidden"></div>
                )}
                {i < filteredItems.length - 2 && (
                  <div className="h-px bg-white/5 w-full hidden lg:block"></div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="text-center mt-12">
          <button className="border border-secondary/50 text-secondary px-10 py-4 text-[11px] uppercase tracking-widest hover:bg-secondary/10 transition-all flex justify-center w-full sm:w-auto sm:mx-auto">
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
