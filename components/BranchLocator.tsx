import React, { useState } from 'react';
import { SectionId, Branch, DailyMenuData } from '../types';
import { fetchDailyMenu } from '../services/geminiService';
import { Loader2, Soup, ChefHat, MapPin, Search } from 'lucide-react';

const BRANCHES: Branch[] = [
  { id: '1', name: 'Allianz', type: 'office', city: 'Praha' },
  { id: '2', name: 'Bobcat', type: 'industry', city: 'Dobříš' },
  { id: '3', name: 'Brumlovka', type: 'office', city: 'Praha' },
  { id: '4', name: 'ČSOB', type: 'office', city: 'Hradec Králové' },
  { id: '5', name: 'Enterprise Office Center', type: 'office', city: 'Praha' },
  { id: '6', name: 'UK FTVS', type: 'school', city: 'Praha' },
  { id: '7', name: 'Hanon Systems', type: 'industry', city: 'Kopřivnice' },
  { id: '8', name: 'Magistrát Karlovy Vary', type: 'office', city: 'Karlovy Vary' },
  { id: '9', name: 'Oregon House', type: 'office', city: 'Praha' },
  { id: '10', name: 'The Orchard', type: 'office', city: 'Ostrava' },
  { id: '11', name: 'UHKT', type: 'office', city: 'Praha' },
  { id: '12', name: 'Veolia', type: 'office', city: 'Praha' },
  { id: '13', name: 'Witte Automotive', type: 'industry', city: 'Ostrov' },
];

export const BranchLocator: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [menu, setMenu] = useState<DailyMenuData | null>(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const handleBranchSelect = async (branch: Branch) => {
    setSelectedBranch(branch);
    setLoading(true);
    setMenu(null);
    try {
      const data = await fetchDailyMenu(branch.name, branch.type);
      setMenu(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredBranches = BRANCHES.filter(b => 
    b.name.toLowerCase().includes(search.toLowerCase()) || 
    b.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id={SectionId.LOCATIONS} className="py-24 bg-fresca-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-fresca-dark mb-4">
            Vaše firemní restaurace
          </h2>
          <div className="w-24 h-1 bg-fresca-bronze mx-auto mb-6"></div>
          <p className="text-stone-600 max-w-xl mx-auto text-lg">
            Vyberte svou provozovnu a podívejte se, co jsme pro vás dnes uvařili.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Branch Selector */}
          <div className="bg-white p-6 shadow-xl lg:col-span-1 border-t-4 border-fresca-bronze">
            <div className="relative mb-6">
              <Search className="absolute left-3 top-3 text-stone-400" size={20} />
              <input 
                type="text" 
                placeholder="Hledat firmu..." 
                className="w-full pl-10 pr-4 py-3 border border-stone-200 focus:outline-none focus:border-fresca-bronze transition-colors bg-stone-50"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            <div className="space-y-1 max-h-[450px] overflow-y-auto pr-2 custom-scrollbar">
              {filteredBranches.map(branch => (
                <button
                  key={branch.id}
                  onClick={() => handleBranchSelect(branch)}
                  className={`w-full text-left p-4 transition-all border-l-2 flex justify-between items-center group ${
                    selectedBranch?.id === branch.id 
                      ? 'bg-orange-50/50 border-fresca-bronze pl-6 shadow-inner' 
                      : 'bg-white border-transparent hover:bg-stone-50 hover:pl-5'
                  }`}
                >
                  <div>
                    <div className={`font-bold ${selectedBranch?.id === branch.id ? 'text-fresca-bronze' : 'text-stone-800'}`}>
                      {branch.name}
                    </div>
                    <div className="text-xs text-stone-500 flex items-center gap-1 mt-1">
                      <MapPin size={12} /> {branch.city}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Menu Display */}
          <div className="lg:col-span-2 min-h-[400px]">
            {loading ? (
              <div className="h-full flex flex-col items-center justify-center bg-white shadow-xl p-12 text-stone-400">
                <Loader2 className="animate-spin mb-4 text-fresca-bronze" size={48} />
                <p>Náš šéfkuchař sestavuje menu pro {selectedBranch?.name}...</p>
              </div>
            ) : menu ? (
              <div className="bg-white p-8 md:p-12 shadow-2xl animate-fade-in relative">
                <div className="absolute top-0 left-0 w-2 h-full bg-fresca-bronze"></div>
                <div className="absolute top-6 right-6 bg-stone-900 text-white px-4 py-2 text-sm font-bold uppercase tracking-wider">
                   {selectedBranch?.name}
                </div>

                <div className="mb-10 border-b border-stone-100 pb-8 mt-4">
                  <h3 className="text-4xl font-bold text-fresca-dark mb-2">Denní Nabídka</h3>
                  <p className="text-fresca-bronze font-bold uppercase tracking-widest">{menu.date}</p>
                </div>
                
                {/* Soup */}
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-orange-50 rounded-full">
                        <Soup className="text-fresca-bronze" size={24} />
                    </div>
                    <h4 className="text-xl font-bold text-stone-800">Polévka</h4>
                  </div>
                  <div className="flex justify-between items-start group hover:bg-stone-50 p-2 -mx-2 transition-colors rounded">
                    <div>
                      <h5 className="text-lg font-bold text-stone-900">{menu.soup.name}</h5>
                      <p className="text-stone-600 text-sm mt-1 italic">{menu.soup.description}</p>
                      {menu.soup.allergens && <span className="text-xs text-stone-400 mt-1 block">Alergeny: {menu.soup.allergens}</span>}
                    </div>
                    <span className="text-lg font-bold text-fresca-bronze">{menu.soup.price}</span>
                  </div>
                </div>

                {/* Mains */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                     <div className="p-2 bg-orange-50 rounded-full">
                        <ChefHat className="text-fresca-bronze" size={24} />
                     </div>
                    <h4 className="text-xl font-bold text-stone-800">Hlavní chody</h4>
                  </div>
                  <div className="space-y-6">
                    {menu.mains.map((main, idx) => (
                      <div key={idx} className="flex justify-between items-start border-b border-stone-100 pb-4 last:border-0 last:pb-0 group hover:bg-stone-50 p-2 -mx-2 transition-colors rounded">
                        <div>
                          <h5 className="text-lg font-bold text-stone-900">{main.name}</h5>
                          <p className="text-stone-600 text-sm mt-1 italic">{main.description}</p>
                          {main.allergens && <span className="text-xs text-stone-400 mt-1 block">Alergeny: {main.allergens}</span>}
                        </div>
                        <span className="text-lg font-bold text-fresca-bronze whitespace-nowrap ml-4">{main.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center bg-stone-100 border-2 border-dashed border-stone-200 p-12 text-stone-500 text-center">
                <ChefHat size={48} className="mb-4 opacity-20 text-stone-800" />
                <h3 className="text-xl font-bold mb-2 text-stone-700">Vyberte provozovnu</h3>
                <p>Klikněte na název vaší firmy v seznamu a zobrazte si dnešní menu.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};