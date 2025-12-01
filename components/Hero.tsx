import React from 'react';
import { SectionId } from '../types';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id={SectionId.HOME} 
      className="relative h-[85vh] min-h-[600px] flex items-center justify-center bg-stone-900 overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=2000&auto=format&fit=crop" 
          alt="Modern Corporate Canteen" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/60 to-stone-900/20"></div>
      </div>

      <div className="relative z-10 w-full container mx-auto px-6">
        <div className="max-w-4xl border-l-4 border-fresca-bronze pl-8 md:pl-12">
          <h2 className="text-fresca-bronze font-bold tracking-[0.2em] uppercase mb-6 text-sm md:text-base animate-slide-up">
            Cantina & Café
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] animate-slide-up animation-delay-100">
            JÍDLO<br/>
            LIDÉ<br/>
            DESIGN
          </h1>
          <p className="text-stone-200 text-lg md:text-2xl mb-10 font-light leading-relaxed animate-slide-up animation-delay-200 max-w-2xl">
            Gastronomie 21. století. Stravování, které mění atmosféru ve firmě.
            Protože vaši zaměstnanci si zaslouží víc než jen oběd.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-300">
            <button 
              onClick={() => document.getElementById(SectionId.LOCATIONS)?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-fresca-bronze text-white px-10 py-4 rounded-none uppercase tracking-widest font-bold hover:bg-white hover:text-fresca-bronze transition-all shadow-lg"
            >
              Aktuální Menu firem
            </button>
            <button 
               onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-10 py-4 rounded-none uppercase tracking-widest font-bold hover:bg-white hover:text-stone-900 transition-all"
            >
              Stát se klientem
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};