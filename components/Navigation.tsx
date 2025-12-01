import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SectionId } from '../types';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: SectionId) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navClass = `fixed w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
  }`;

  const textClass = scrolled ? 'text-fresca-dark' : 'text-fresca-dark lg:text-white';

  const menuItems = [
    { id: SectionId.SERVICES, label: 'Koncept' },
    { id: SectionId.REFERENCES, label: 'Reference' },
    { id: SectionId.LOCATIONS, label: 'Najít jídelnu' },
    { id: SectionId.NEWS, label: 'Novinky' },
    { id: SectionId.CONTACT, label: 'Kontakt' },
  ];

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className={`font-serif text-3xl font-bold tracking-wider cursor-pointer ${textClass}`}
          onClick={() => scrollTo(SectionId.HOME)}
        >
          LA FRESCA
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-sm font-bold uppercase tracking-widest hover:text-fresca-bronze transition-colors ${textClass}`}
            >
              {item.label}
            </button>
          ))}
          <button 
            className="bg-fresca-bronze text-white px-6 py-2 rounded-none font-bold text-sm uppercase tracking-wide hover:bg-stone-800 transition-colors shadow-lg"
            onClick={() => scrollTo(SectionId.CONTACT)}
          >
            Pro firmy
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden ${textClass}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-stone-100 flex flex-col p-6 gap-4 animate-fade-in">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-left text-fresca-dark font-bold text-lg py-3 border-b border-stone-100"
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollTo(SectionId.CONTACT)}
            className="bg-fresca-bronze text-white w-full py-4 font-bold uppercase mt-2"
          >
            Chci nabídku pro firmu
          </button>
        </div>
      )}
    </nav>
  );
};