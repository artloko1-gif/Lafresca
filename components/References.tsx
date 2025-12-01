import React from 'react';
import { SectionId } from '../types';
import { EditableText, EditableImage } from './Editable';

const LOGOS = [
  "Allianz", "Bobcat", "ČSOB", "Teva", "Lear Corporation", 
  "Siemens", "Brumlovka", "Karlovy Vary", "Škoda", "DHL",
  "Hanon Systems", "Veolia", "Witte", "Oregon House"
];

export const References: React.FC = () => {
  return (
    <section id={SectionId.REFERENCES} className="py-20 bg-stone-50 text-fresca-dark border-t border-stone-100">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <h2 className="text-3xl font-bold mb-16 relative inline-block font-sans text-fresca-dark">
            <EditableText id="ref-title" defaultText="Důvěřují nám" />
            <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-fresca-bronze"></span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
           {/* Visual representation of client logos - dark grey on light bg */}
           {LOGOS.map((logo, idx) => (
             <div key={idx} className="flex items-center justify-center w-32 h-16 md:w-40 md:h-20 grayscale opacity-40 hover:opacity-100 transition-all duration-300">
               <span className="text-xl md:text-2xl font-bold tracking-tighter text-stone-600 hover:text-fresca-bronze cursor-default font-sans">
                 {logo}
               </span>
             </div>
           ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto bg-white shadow-xl p-10 relative border-l-4 border-fresca-bronze">
          <div className="text-6xl text-fresca-bronze/20 absolute top-4 left-4 font-serif leading-none">"</div>
          <div className="text-lg md:text-xl italic text-stone-600 mb-8 relative z-10 font-light font-sans">
             <EditableText 
               id="ref-quote" 
               as="p"
               defaultText="Firemní stravování neděláme jako průmyslovou službu. Děláme ho tak, jak bychom ho chtěli mít sami – čerstvé, poctivé, s respektem k lidem, kteří si ho každý den zaslouží." 
             />
          </div>
          <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-stone-200 rounded-full overflow-hidden">
                 <EditableImage 
                   id="ref-person-img"
                   defaultSrc="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" 
                   alt="Jan Mičkal"
                   className="w-full h-full"
                 />
              </div>
              <div className="text-left">
                  <div className="text-fresca-dark font-bold uppercase tracking-widest text-sm font-sans">
                    <EditableText id="ref-person-name" defaultText="Jan Mičkal" />
                  </div>
                  <div className="text-fresca-bronze text-xs font-sans">
                    <EditableText id="ref-person-role" defaultText="Jednatel společnosti" />
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};
