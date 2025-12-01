import React from 'react';
import { SectionId } from '../types';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="bg-stone-900 text-white pt-24 pb-10 border-t border-fresca-bronze">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex flex-col">
                 <h3 className="text-3xl font-serif font-bold text-white tracking-wide">
                LA FRESCA
                </h3>
                <span className="text-fresca-bronze text-xs uppercase tracking-[0.3em] mt-1">Cantina & Café</span>
            </div>
           
            <p className="text-stone-400 leading-relaxed text-sm">
              Gastronomie 21. století pro vaši firmu. Propojujeme poctivé suroviny, kvalitní služby a funkční design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-stone-700 flex items-center justify-center hover:bg-fresca-bronze hover:border-fresca-bronze transition-all text-stone-400 hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-stone-700 flex items-center justify-center hover:bg-fresca-bronze hover:border-fresca-bronze transition-all text-stone-400 hover:text-white">
                <Instagram size={18} />
              </a>
               <a href="#" className="w-10 h-10 border border-stone-700 flex items-center justify-center hover:bg-fresca-bronze hover:border-fresca-bronze transition-all text-stone-400 hover:text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-wider">Kontakt pro firmy</h4>
            <ul className="space-y-6 text-stone-300">
               <li className="group">
                <div className="text-xs text-stone-500 uppercase mb-1">Obchodní ředitel</div>
                <div className="flex items-center gap-3">
                    <Phone className="shrink-0 text-fresca-bronze" size={18} />
                    <a href="tel:+420774539020" className="hover:text-white transition-colors font-bold">+420 774 539 020</a>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="shrink-0 text-fresca-bronze mt-1" size={18} />
                <span className="group-hover:text-white transition-colors">
                  Karlova 123<br/>
                  760 01 Zlín<br/>
                  Česká Republika
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="shrink-0 text-fresca-bronze" size={18} />
                <a href="mailto:info@cantina-lafresca.cz" className="hover:text-white transition-colors group-hover:underline">info@cantina-lafresca.cz</a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-white uppercase tracking-wider">Rychlé odkazy</h4>
            <ul className="space-y-4 text-stone-400">
              <li><button onClick={() => document.getElementById(SectionId.SERVICES)?.scrollIntoView({behavior: 'smooth'})} className="hover:text-fresca-bronze transition-colors">Náš koncept</button></li>
              <li><button onClick={() => document.getElementById(SectionId.REFERENCES)?.scrollIntoView({behavior: 'smooth'})} className="hover:text-fresca-bronze transition-colors">Reference</button></li>
              <li><button onClick={() => document.getElementById(SectionId.LOCATIONS)?.scrollIntoView({behavior: 'smooth'})} className="hover:text-fresca-bronze transition-colors">Najít restauraci</button></li>
              <li><a href="#" className="hover:text-fresca-bronze transition-colors">Kariéra</a></li>
              <li><a href="#" className="hover:text-fresca-bronze transition-colors">GDPR</a></li>
            </ul>
          </div>

           {/* CTA */}
           <div className="bg-stone-800 p-6 border-l-2 border-fresca-bronze">
              <h5 className="font-bold text-white mb-2">Chcete La Fresca ve vaší firmě?</h5>
              <p className="text-stone-400 text-sm mb-4">Napište nám a my pro vás připravíme nezávaznou nabídku.</p>
              <button onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({behavior: 'smooth'})} className="bg-fresca-bronze text-white px-6 py-3 w-full font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-stone-900 transition-colors">
                Napsat poptávku
              </button>
           </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-sm">
          <p>&copy; {new Date().getFullYear()} La Fresca Cantina & Café.</p>
          <p>Designed with <span className="text-fresca-bronze">♥</span> for good food.</p>
        </div>
      </div>
    </footer>
  );
};