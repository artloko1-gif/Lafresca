import React, { useState } from 'react';
import { SectionId } from '../types';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Settings } from 'lucide-react';
import { AdminLogin } from './AdminLogin';
import { EditableText } from './Editable';

export const Footer: React.FC = () => {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <footer id={SectionId.CONTACT} className="bg-white text-stone-700 pt-24 pb-10 border-t-2 border-fresca-bronze">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex flex-col">
                 <h3 className="text-3xl font-serif font-bold text-fresca-dark tracking-wide">
                LA FRESCA
                </h3>
                <span className="text-fresca-bronze text-xs uppercase tracking-[0.3em] mt-1 font-sans">Cantina & Café</span>
            </div>
           
            <EditableText 
              id="footer-desc"
              as="p"
              className="text-stone-500 leading-relaxed text-sm font-sans"
              defaultText="Gastronomie 21. století pro vaši firmu. Propojujeme poctivé suroviny, kvalitní služby a funkční design."
            />
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-stone-200 flex items-center justify-center hover:bg-fresca-bronze hover:border-fresca-bronze transition-all text-stone-400 hover:text-white">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-stone-200 flex items-center justify-center hover:bg-fresca-bronze hover:border-fresca-bronze transition-all text-stone-400 hover:text-white">
                <Instagram size={18} />
              </a>
               <a href="#" className="w-10 h-10 border border-stone-200 flex items-center justify-center hover:bg-fresca-bronze hover:border-fresca-bronze transition-all text-stone-400 hover:text-white">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-fresca-dark uppercase tracking-wider font-sans">Kontakt pro firmy</h4>
            <ul className="space-y-6 text-stone-600">
               <li className="group">
                <div className="text-xs text-stone-400 uppercase mb-1 font-sans">Obchodní ředitel</div>
                <div className="flex items-center gap-3">
                    <Phone className="shrink-0 text-fresca-bronze" size={18} />
                    <EditableText 
                      id="footer-phone"
                      as="a"
                      defaultText="+420 774 539 020"
                      className="hover:text-fresca-bronze transition-colors font-bold font-sans"
                    />
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <MapPin className="shrink-0 text-fresca-bronze mt-1" size={18} />
                <EditableText
                  id="footer-address"
                  as="span"
                  className="group-hover:text-fresca-bronze transition-colors font-sans"
                  defaultText="Karlova 123, 760 01 Zlín, Česká Republika"
                />
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="shrink-0 text-fresca-bronze" size={18} />
                <EditableText 
                  id="footer-email"
                  as="a"
                  defaultText="info@cantina-lafresca.cz"
                  className="hover:text-fresca-bronze transition-colors group-hover:underline font-sans"
                />
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-fresca-dark uppercase tracking-wider font-sans">Rychlé odkazy</h4>
            <ul className="space-y-4 text-stone-500 font-sans">
              <li><button onClick={() => document.getElementById(SectionId.SERVICES)?.scrollIntoView({behavior: 'smooth'})} className="hover:text-fresca-bronze transition-colors">Náš koncept</button></li>
              <li><button onClick={() => document.getElementById(SectionId.REFERENCES)?.scrollIntoView({behavior: 'smooth'})} className="hover:text-fresca-bronze transition-colors">Reference</button></li>
              <li><button onClick={() => document.getElementById(SectionId.LOCATIONS)?.scrollIntoView({behavior: 'smooth'})} className="hover:text-fresca-bronze transition-colors">Najít restauraci</button></li>
              <li><a href="#" className="hover:text-fresca-bronze transition-colors">Kariéra</a></li>
              <li><a href="#" className="hover:text-fresca-bronze transition-colors">GDPR</a></li>
            </ul>
          </div>

           {/* CTA */}
           <div className="bg-stone-50 p-6 border-l-2 border-fresca-bronze shadow-sm">
              <EditableText 
                id="footer-cta-title"
                as="h5"
                className="font-bold text-fresca-dark mb-2 font-sans"
                defaultText="Chcete La Fresca ve vaší firmě?"
              />
              <EditableText 
                id="footer-cta-text"
                as="p"
                className="text-stone-500 text-sm mb-4 font-sans"
                defaultText="Napište nám a my pro vás připravíme nezávaznou nabídku."
              />
              <button onClick={() => document.getElementById(SectionId.CONTACT)?.scrollIntoView({behavior: 'smooth'})} className="bg-fresca-bronze text-white px-6 py-3 w-full font-bold uppercase text-xs tracking-widest hover:bg-stone-800 transition-colors font-sans">
                Napsat poptávku
              </button>
           </div>
        </div>

        <div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-400 text-sm font-sans">
          <p>&copy; {new Date().getFullYear()} La Fresca Cantina & Café.</p>
          <div className="flex items-center gap-4">
             <button 
              onClick={() => setShowAdmin(true)}
              className="flex items-center gap-1 text-stone-300 hover:text-fresca-bronze transition-colors text-xs uppercase font-bold"
            >
              <Settings size={12} /> Admin
            </button>
          </div>
        </div>
      </div>
      
      <AdminLogin isOpen={showAdmin} onClose={() => setShowAdmin(false)} />
    </footer>
  );
};
