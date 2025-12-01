import React from 'react';
import { SectionId } from '../types';

const LOGOS = [
  "Allianz", "Bobcat", "ČSOB", "Teva", "Lear Corporation", 
  "Siemens", "Brumlovka", "Karlovy Vary", "Škoda", "DHL",
  "Hanon Systems", "Veolia", "Witte", "Oregon House"
];

export const References: React.FC = () => {
  return (
    <section id={SectionId.REFERENCES} className="py-20 bg-stone-900 text-white border-t border-stone-800">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl font-bold mb-16 relative inline-block">
            Důvěřují nám
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-fresca-bronze"></span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
           {/* Visual representation of client logos */}
           {LOGOS.map((logo, idx) => (
             <div key={idx} className="flex items-center justify-center w-32 h-16 md:w-40 md:h-20 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
               <span className="text-xl md:text-2xl font-bold tracking-tighter text-stone-300 hover:text-fresca-bronze cursor-default">
                 {logo}
               </span>
             </div>
           ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-stone-800 p-10 relative border-l-4 border-fresca-bronze">
          <div className="text-6xl text-fresca-bronze/20 absolute top-4 left-4 font-serif leading-none">"</div>
          <p className="text-lg md:text-xl italic text-stone-300 mb-8 relative z-10 font-light">
            Firemní stravování neděláme jako průmyslovou službu. Děláme ho tak, jak bychom ho chtěli mít sami – čerstvé, poctivé, s respektem k lidem, kteří si ho každý den zaslouží.
          </p>
          <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-stone-700 rounded-full overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Jan Mičkal" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                  <div className="text-white font-bold uppercase tracking-widest text-sm">Jan Mičkal</div>
                  <div className="text-fresca-bronze text-xs">Jednatel společnosti</div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};