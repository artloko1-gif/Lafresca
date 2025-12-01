import React, { useState } from 'react';
import { useContent } from '../contexts/ContentContext';
import { X, Lock, LogOut } from 'lucide-react';

interface AdminLoginProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ isOpen, onClose }) => {
  const { login, isAuthenticated, logout } = useContent();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      onClose();
      setEmail('');
      setPassword('');
      setError('');
    } else {
      setError('Nesprávný email nebo heslo');
    }
  };

  if (isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
        <div className="bg-white p-8 max-w-sm w-full shadow-2xl relative border-t-4 border-fresca-bronze">
           <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-800">
            <X size={24} />
          </button>
          <h3 className="text-2xl font-bold mb-4 font-sans text-fresca-dark">Administrace</h3>
          <p className="mb-6 text-stone-600">Jste přihlášeni jako administrátor. Můžete upravovat texty kliknutím a měnit obrázky.</p>
          <button 
            onClick={() => { logout(); onClose(); }}
            className="w-full bg-stone-800 text-white py-3 font-bold uppercase tracking-widest hover:bg-stone-900 flex items-center justify-center gap-2"
          >
            <LogOut size={16} /> Odhlásit se
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-white p-8 max-w-sm w-full shadow-2xl relative border-t-4 border-fresca-bronze">
        <button onClick={onClose} className="absolute top-4 right-4 text-stone-400 hover:text-stone-800">
          <X size={24} />
        </button>
        
        <div className="flex flex-col items-center mb-6">
          <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-fresca-bronze mb-4">
            <Lock size={24} />
          </div>
          <h3 className="text-2xl font-bold font-sans text-fresca-dark">Přihlášení</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase font-bold text-stone-500 mb-1">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full p-3 border border-stone-200 focus:outline-none focus:border-fresca-bronze"
              placeholder="marketing@cantina-lafresca.cz"
            />
          </div>
          <div>
            <label className="block text-xs uppercase font-bold text-stone-500 mb-1">Heslo</label>
            <input 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-3 border border-stone-200 focus:outline-none focus:border-fresca-bronze"
              placeholder="••••••••"
            />
          </div>
          
          {error && <p className="text-red-500 text-sm font-bold text-center">{error}</p>}
          
          <button 
            type="submit"
            className="w-full bg-fresca-bronze text-white py-3 font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors mt-2"
          >
            Přihlásit se
          </button>
        </form>
      </div>
    </div>
  );
};
