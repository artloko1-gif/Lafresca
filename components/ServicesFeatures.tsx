import React from 'react';
import { SectionId } from '../types';
import { Coffee, ShoppingBag, Smartphone, Utensils, Users, Palette } from 'lucide-react';
import { EditableText, EditableImage } from './Editable';

export const ServicesFeatures: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Core Pillars */}
        <div className="mb-24">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-fresca-dark mb-6">
              <EditableText id="services-main-title" defaultText="JÍDLO, LIDÉ, DESIGN" />
            </h2>
            <div className="w-24 h-1 bg-fresca-bronze mx-auto mb-8"></div>
            <div className="text-xl text-stone-600 max-w-3xl mx-auto">
              <EditableText id="services-main-desc" defaultText="Tři pilíře, na kterých stavíme moderní firemní stravování." />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center px-4 group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-stone-100 group-hover:bg-fresca-bronze transition-colors rounded-full flex items-center justify-center mx-auto mb-8 text-fresca-bronze group-hover:text-white">
                <Utensils size={36} />
              </div>
              <EditableText id="serv-1-title" as="h3" defaultText="Jídlo" className="text-2xl font-bold mb-4 text-fresca-dark" />
              <div className="text-stone-600 leading-relaxed">
                <EditableText id="serv-1-desc" as="p" defaultText="Dobré jídlo je víc než kalorie – je to energie, pohoda a kultura firmy. Vaříme čerstvě, lokálně a poctivě." />
              </div>
            </div>
            <div className="text-center px-4 group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-stone-100 group-hover:bg-fresca-bronze transition-colors rounded-full flex items-center justify-center mx-auto mb-8 text-fresca-bronze group-hover:text-white">
                <Users size={36} />
              </div>
              <EditableText id="serv-2-title" as="h3" defaultText="Lidé" className="text-2xl font-bold mb-4 text-fresca-dark" />
              <div className="text-stone-600 leading-relaxed">
                <EditableText id="serv-2-desc" as="p" defaultText="Tvoříme týmy srdcařů. Naši zaměstnanci jsou vyškolení profesionálové, kteří tvoří atmosféru." />
              </div>
            </div>
            <div className="text-center px-4 group hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-20 h-20 bg-stone-100 group-hover:bg-fresca-bronze transition-colors rounded-full flex items-center justify-center mx-auto mb-8 text-fresca-bronze group-hover:text-white">
                <Palette size={36} />
              </div>
              <EditableText id="serv-3-title" as="h3" defaultText="Design" className="text-2xl font-bold mb-4 text-fresca-dark" />
              <div className="text-stone-600 leading-relaxed">
                <EditableText id="serv-3-desc" as="p" defaultText="Promyšlené prostory zvyšují komfort. Design není jen o vzhledu, je to nástroj pro wellbeing." />
              </div>
            </div>
          </div>
        </div>

        {/* B2B Benefits & Innovations */}
        <div className="bg-stone-50 border border-stone-100 p-8 md:p-16 relative overflow-hidden">
            {/* Decorative BG element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-fresca-bronze opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h3 className="text-fresca-bronze font-bold tracking-widest uppercase mb-2">
                <EditableText id="feat-label" defaultText="Inovace & Budoucnost" />
              </h3>
              <h2 className="text-4xl font-bold text-fresca-dark mb-6">
                <EditableText id="feat-title" defaultText="Gastronomie jako benefit" />
              </h2>
              <div className="text-stone-600 mb-8 text-lg leading-relaxed">
                <EditableText id="feat-p" defaultText="Investice do stravování se vrací ve spokojenosti týmu. Nabízíme řešení od klasických restaurací až po plně automatizované provozy." />
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="shrink-0 w-14 h-14 bg-white shadow-md flex items-center justify-center text-fresca-bronze border border-stone-100">
                    <Coffee size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-fresca-dark">Restaurace & Kavárny</h4>
                    <p className="text-stone-500 text-sm mt-1">
                      <EditableText id="feat-1-desc" defaultText="Kompletní servis, teplá jídla, snídaně a výběrová káva s baristou." />
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="shrink-0 w-14 h-14 bg-white shadow-md flex items-center justify-center text-fresca-bronze border border-stone-100">
                    <ShoppingBag size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-fresca-dark">Firemní obchody & Vending</h4>
                    <p className="text-stone-500 text-sm mt-1">
                       <EditableText id="feat-2-desc" defaultText="Dostupnost kvalitního jídla 24/7. Chytré lednice a samoobslužné zóny." />
                    </p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="shrink-0 w-14 h-14 bg-white shadow-md flex items-center justify-center text-fresca-bronze border border-stone-100">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-fresca-dark">Digitalizace & Aplikace</h4>
                    <p className="text-stone-500 text-sm mt-1">
                      <EditableText id="feat-3-desc" defaultText="LF App pro objednávání, AI pokladny pro rychlé odbavení bez front." />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                 <div className="h-64 shadow-xl overflow-hidden">
                    <EditableImage 
                      id="feat-img-1" 
                      defaultSrc="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=1000&auto=format&fit=crop" 
                      alt="Coffee"
                      className="w-full h-full"
                    />
                 </div>
                 <div className="bg-fresca-dark p-6 text-white text-center">
                    <span className="text-3xl font-bold block mb-1">24/7</span>
                    <span className="text-xs uppercase tracking-widest text-stone-400">Dostupnost</span>
                 </div>
              </div>
              <div className="space-y-4 pt-12">
                 <div className="h-64 shadow-xl overflow-hidden">
                    <EditableImage 
                      id="feat-img-2" 
                      defaultSrc="https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=1000&auto=format&fit=crop" 
                      alt="Food"
                      className="w-full h-full"
                    />
                 </div>
                 <div className="bg-fresca-bronze p-6 text-white text-center">
                    <span className="text-3xl font-bold block mb-1">100%</span>
                    <span className="text-xs uppercase tracking-widest text-white/80">Čerstvost</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
