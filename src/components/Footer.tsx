import React from 'react';
import { CANDIDATE } from '../data/candidateData';
import { PsolLogo } from './PsolSunIcon';
import { ArrowUp, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      
      {/* Top Banner inside footer */}
      <div className="bg-blue-900 text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 text-slate-950 font-black text-xl px-2.5 py-1 rounded-lg font-mono">
              {CANDIDATE.number}
            </div>
            <div>
              <div className="text-base font-black tracking-tight">{CANDIDATE.name} • Deputado Federal (MG)</div>
              <div className="text-[11px] text-yellow-300 font-bold uppercase tracking-wider">{CANDIDATE.slogan}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <PsolLogo className="h-6" lightText />
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 bg-blue-800 hover:bg-blue-700 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-colors border border-blue-600"
            >
              <span>Topo</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Legal Transparency Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left border-b border-slate-800 pb-4">
          <div>
            <div className="text-slate-200 font-bold">Angelo Costa • Deputado Federal</div>
            <div className="text-[11px] text-slate-400">Partido Socialismo e Liberdade (PSOL 50) • Minas Gerais</div>
          </div>
          <div className="bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 font-mono text-yellow-400 text-[11px]">
            CNPJ: {CANDIDATE.cnpj}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-500 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Angelo Costa. Propaganda Eleitoral Oficial • Eleições 2026.</p>
          <p className="text-slate-400">Minas Gerais no coração.</p>
        </div>
      </div>
    </footer>
  );
};
