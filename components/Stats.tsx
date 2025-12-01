import React from 'react';
import { EditableText } from './Editable';

export const Stats: React.FC = () => {
  return (
    <div className="bg-white py-16 border-b border-stone-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-stone-100">
          <div className="p-4">
            <EditableText id="stat-1-num" as="div" defaultText="20 000+" className="text-4xl md:text-5xl font-bold text-fresca-dark mb-2 font-sans" />
            <EditableText id="stat-1-label" as="div" defaultText="Strávníků denně" className="text-fresca-bronze text-sm uppercase tracking-widest font-bold font-sans" />
          </div>
          <div className="p-4">
             <EditableText id="stat-2-num" as="div" defaultText="45" className="text-4xl md:text-5xl font-bold text-fresca-dark mb-2 font-sans" />
             <EditableText id="stat-2-label" as="div" defaultText="Provozů v ČR" className="text-fresca-bronze text-sm uppercase tracking-widest font-bold font-sans" />
          </div>
          <div className="p-4">
            <EditableText id="stat-3-num" as="div" defaultText="550" className="text-4xl md:text-5xl font-bold text-fresca-dark mb-2 font-sans" />
            <EditableText id="stat-3-label" as="div" defaultText="Kolegů v týmu" className="text-fresca-bronze text-sm uppercase tracking-widest font-bold font-sans" />
          </div>
          <div className="p-4">
             <EditableText id="stat-4-num" as="div" defaultText="193k" className="text-4xl md:text-5xl font-bold text-fresca-dark mb-2 font-sans" />
             <EditableText id="stat-4-label" as="div" defaultText="Káv měsíčně" className="text-fresca-bronze text-sm uppercase tracking-widest font-bold font-sans" />
          </div>
        </div>
      </div>
    </div>
  );
};
