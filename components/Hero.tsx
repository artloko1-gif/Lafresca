import React from 'react';
import { SectionId } from '../types';
import { ChevronDown } from 'lucide-react';
import { EditableText, EditableImage } from './Editable';

// Single static image as requested (Steak/Fine Dining)
const HERO_IMAGE = "https://images.unsplash.com/photo-1546241072-48010ad28d5a?q=80&w=2400&auto=format&fit=crop";

export const Hero: React.FC = () => {
  return (
    <section 
      id={SectionId.HOME} 
      className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-stone-900"
    >
      {/* Background Image - Editable */}
      <div className="absolute inset-0">
        <EditableImage 
          id="hero-bg"
          defaultSrc={HERO_IMAGE}
          alt="Gurmánský zážitek"
          className="w-full h-full"
        />
      </div>

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-stone-900/80 via-stone-900/30 to-transparent"></div>

      <div className="relative z-20 w-full container mx-auto px-6">
        <div className="max-w-4xl border-l-4 border-fresca-bronze pl-8 md:pl-12">
          <EditableText 
            id="hero-subtitle"
            as="h2"
            defaultText="Cantina & Café"
            className="text-white/90 font-bold tracking-[0.2em] uppercase mb-6 text-sm md:text-base animate-slide-up font-sans"
          />
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] animate-slide-up animation-delay-100 font-sans shadow-black/10 drop-shadow-lg">
             <EditableText 
               id="hero-title-1" 
               defaultText="JÍDLO" 
               as="div" 
             />
             <EditableText 
               id="hero-title-2" 
               defaultText="LIDÉ" 
               as="div" 
             />
             <EditableText 
               id="hero-title-3" 
               defaultText="DESIGN" 
               as="div" 
             />
          </h1>

          <div className="text-white text-lg md:text-2xl mb-10 font-medium leading-relaxed animate-slide-up animation-delay-200 max-w-2xl drop-shadow-md font-sans text-shadow">
            <EditableText 
              id="hero-desc"
              as="p"
              defaultText="Gastronomie 21. století. Stravování, které mění atmosféru ve firmě. Protože vaši zaměstnanci si zaslouží víc než jen oběd."
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-300">
            <button 
              onClick={() => document.getElementById(SectionId.LOCATIONS)?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-fresca-bronze text-white px-10 py-4 rounded-none uppercase tracking-widest font-bold hover:bg-white hover:text-fresca-bronze transition-all shadow-lg font-sans border-2 border-fresca-bronze"
            >
              Aktuální Menu firem
            </button>
            <button 
               onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-10 py-4 rounded-none uppercase tracking-widest font-bold hover:bg-white hover:text-stone-900 transition-all font-sans backdrop-blur-sm"
            >
              Stát se klientem
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce drop-shadow-md z-20">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};
