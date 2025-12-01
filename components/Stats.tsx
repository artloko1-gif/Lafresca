import React from 'react';

export const Stats: React.FC = () => {
  return (
    <div className="bg-white py-16 border-b border-stone-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-stone-100">
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-fresca-dark mb-2 font-sans">20 000+</div>
            <div className="text-fresca-bronze text-sm uppercase tracking-widest font-bold font-sans">Strávníků denně</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-fresca-dark mb-2 font-sans">45</div>
            <div className="text-fresca-bronze text-sm uppercase tracking-widest font-bold font-sans">Provozů v ČR</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-fresca-dark mb-2 font-sans">550</div>
            <div className="text-fresca-bronze text-sm uppercase tracking-widest font-bold font-sans">Kolegů v týmu</div>
          </div>
          <div className="p-4">
            <div className="text-4xl md:text-5xl font-bold text-fresca-dark mb-2 font-sans">193k</div>
            <div className="text-fresca-bronze text-sm uppercase tracking-widest font-bold font-sans">Káv měsíčně</div>
          </div>
        </div>
      </div>
    </div>
  );
};