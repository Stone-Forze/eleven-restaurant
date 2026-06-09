import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark-gray relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-sans tracking-[0.2em] uppercase text-sm mb-4 block">Reservation & Info</span>
          <h2 className="font-serif text-4xl md:text-5xl text-accent mb-6">Contact Us</h2>
          <div className="w-24 h-[1px] bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 bg-primary border border-white/10 rounded-full flex items-center justify-center text-secondary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans font-semibold tracking-widest text-accent uppercase text-sm mb-2">Location</h4>
                <p className="font-sans text-soft-beige/70 font-light leading-relaxed max-w-sm">
                  Lakhimpur Rd, opposite Maya Hospital, Badal Nagar, Gola Gokaran Nath, Gola, Uttar Pradesh 262802
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 bg-primary border border-white/10 rounded-full flex items-center justify-center text-secondary">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans font-semibold tracking-widest text-accent uppercase text-sm mb-2">Reservations</h4>
                <p className="font-sans text-soft-beige/70 font-light mb-4">
                  084298 91601
                </p>
                <a 
                  href="tel:08429891601"
                  className="px-6 py-2 bg-secondary text-primary font-sans font-semibold tracking-wider uppercase hover:bg-secondary/90 transition-colors inline-block text-xs"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 bg-primary border border-white/10 rounded-full flex items-center justify-center text-secondary">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans font-semibold tracking-widest text-accent uppercase text-sm mb-2">Opening Hours</h4>
                <p className="font-sans text-soft-beige/70 font-light">
                  Mon - Sun: 11:00 AM - 11:00 PM
                </p>
              </div>
            </div>

             <div className="flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 bg-primary border border-white/10 rounded-full flex items-center justify-center text-secondary">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-sans font-semibold tracking-widest text-accent uppercase text-sm mb-2">Email</h4>
                <p className="font-sans text-soft-beige/70 font-light">
                  info@elevensrestaurant.com <br/> <span className="text-xs opacity-50">(Not Available - For inquiries please call)</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Interactive Map Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full h-[400px] lg:h-full min-h-[400px] bg-primary rounded-xl overflow-hidden border border-white/5 relative group"
          >
            {/* Minimal generic map image */}
            <div className="absolute inset-0 bg-[#222] grayscale opacity-80 z-0 flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22f0b?q=80&w=2674&auto=format&fit=crop" className="w-full h-full object-cover opacity-20" alt="map" />
              <div className="absolute inset-0 bg-primary/60 backdrop-blur-[2px]"></div>
            </div>
            
            <div className="relative z-10 w-full h-full flex items-center justify-center flex-col">
               <div className="text-secondary mb-2 animate-bounce">
                  <MapPin className="w-10 h-10" />
               </div>
               <h3 className="font-serif text-accent text-2xl mb-2 drop-shadow-md">ELEVENS</h3>
               <p className="font-sans text-soft-beige text-xs tracking-wider max-w-[200px] text-center drop-shadow-md">
                 Gola Gokaran Nath, <br/> Uttar Pradesh
               </p>

               <a 
                href="https://maps.google.com/?q=Lakhimpur+Rd,+opposite+Maya+Hospital,+Badal+Nagar,+Gola+Gokaran+Nath,+Gola,+Uttar+Pradesh+262802"
                target="_blank"
                rel="noreferrer"
                className="mt-6 px-6 py-2 border border-secondary text-secondary font-sans text-xs tracking-wider uppercase hover:bg-secondary hover:text-primary transition-colors backdrop-blur-md"
               >
                 Get Directions
               </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
