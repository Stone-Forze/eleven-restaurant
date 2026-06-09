import { MapPin, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="font-serif text-3xl tracking-widest text-secondary uppercase font-bold mb-6">
              Elevens
            </h2>
            <p className="font-sans text-soft-beige/60 font-light text-sm leading-relaxed mb-6">
              Where Great Food Meets Great Moments. Experience culinary excellence in an atmosphere of refined elegance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-soft-beige/80 hover:text-secondary hover:border-secondary transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-soft-beige/80 hover:text-secondary hover:border-secondary transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-soft-beige/80 hover:text-secondary hover:border-secondary transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-semibold tracking-widest text-accent uppercase text-sm mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-soft-beige/60 hover:text-secondary transition-colors font-sans text-sm font-light">Home</a></li>
              <li><a href="#about" className="text-soft-beige/60 hover:text-secondary transition-colors font-sans text-sm font-light">Our Story</a></li>
              <li><a href="#menu" className="text-soft-beige/60 hover:text-secondary transition-colors font-sans text-sm font-light">Menus</a></li>
              <li><a href="#gallery" className="text-soft-beige/60 hover:text-secondary transition-colors font-sans text-sm font-light">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-sans font-semibold tracking-widest text-accent uppercase text-sm mb-6">Visit Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-soft-beige/60 font-sans text-sm font-light leading-relaxed">
                <MapPin className="w-5 h-5 shrink-0 text-secondary" />
                Lakhimpur Rd, opposite Maya Hospital, Badal Nagar, Gola Gokaran Nath, UP 262802
              </li>
              <li className="flex items-center gap-3 text-soft-beige/60 font-sans text-sm font-light">
                <Phone className="w-5 h-5 shrink-0 text-secondary" />
                084298 91601
              </li>
            </ul>
          </div>

          {/* Newsletter / Timings */}
          <div>
             <h4 className="font-sans font-semibold tracking-widest text-accent uppercase text-sm mb-6">Business Hours</h4>
             <ul className="space-y-2 text-soft-beige/60 font-sans text-sm font-light mb-6">
                <li className="flex justify-between"><span>Monday - Friday</span> <span>11:00 - 23:00</span></li>
                <li className="flex justify-between border-t border-white/5 pt-2 mt-2"><span>Saturday - Sunday</span> <span>11:00 - 23:00</span></li>
             </ul>
          </div>

        </div>
      </div>
      
      {/* Decorative large BG text */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 text-[15vw] font-serif font-bold text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
        ELEVENS
      </div>
      
      {/* Sub-Footer / Decorative */}
      <div className="relative z-10 w-full mt-20 h-auto py-6 sm:py-0 sm:h-12 bg-[#0a0a0a] border-t border-secondary/5 px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between text-[9px] uppercase tracking-[0.3em] text-soft-beige/30 gap-4 sm:gap-0">
        <span className="text-center sm:text-left">© {new Date().getFullYear()} ELEVENS RESTAURANT GROUP</span>
        <span className="text-center">PRIVACY POLICY / ACCESSIBILITY</span>
        <span className="text-center sm:text-right">CRAFTED IN GOLA GOKARAN NATH</span>
      </div>
    </footer>
  );
}
