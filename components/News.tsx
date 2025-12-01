import React from 'react';
import { SectionId, NewsItem } from '../types';
import { ArrowRight, Calendar } from 'lucide-react';

const NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Otevíráme novou pobočku v Brně',
    date: '12. 10. 2023',
    summary: 'Rozšiřujeme naši síť o další moderní kantýnu v technologickém parku. Těšit se můžete na live cooking a salátový bar.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Nové podzimní menu od Karla Kaše',
    date: '05. 09. 2023',
    summary: 'Náš Executive Chef připravil sezónní menu plné dýní, zvěřiny a kořenové zeleniny. Přijďte ochutnat podzim.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Získali jsme ocenění Kantýna roku',
    date: '20. 08. 2023',
    summary: 'Děkujeme za vaši přízeň! Díky vašim hlasům jsme obhájili titul nejlepšího firemního stravování.',
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop'
  }
];

export const News: React.FC = () => {
  return (
    <section id={SectionId.NEWS} className="py-24 bg-white border-t border-stone-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-fresca-dark mb-4">Aktuality</h2>
            <div className="w-24 h-1 bg-fresca-bronze"></div>
          </div>
          <button className="hidden md:flex items-center gap-2 text-fresca-bronze font-bold hover:text-stone-800 transition-colors">
            Všechny články <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {NEWS.map(item => (
            <div key={item.id} className="bg-white group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100">
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white text-stone-900 text-xs font-bold px-3 py-1 uppercase flex items-center gap-1 shadow-md">
                  <Calendar size={12} className="text-fresca-bronze" /> {item.date}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-fresca-dark mb-3 group-hover:text-fresca-bronze transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  {item.summary}
                </p>
                <span className="text-sm font-bold text-fresca-bronze uppercase tracking-wide group-hover:text-stone-800 transition-colors flex items-center gap-2">
                    Číst více <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <button className="md:hidden mt-8 w-full py-4 border border-fresca-bronze text-fresca-bronze font-bold uppercase tracking-widest">
          Všechny články
        </button>
      </div>
    </section>
  );
};