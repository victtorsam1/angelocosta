import React, { useState } from 'react';
import { CANDIDATE } from '../data/candidateData';
import { PsolLogo } from './PsolSunIcon';
import { ArrowUp, Mail, Copy, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    if (CANDIDATE.email) {
      navigator.clipboard.writeText(CANDIDATE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
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
              className="inline-flex items-center gap-1 bg-blue-800 hover:bg-blue-700 active:bg-blue-900 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition-colors border border-blue-600 touch-manipulation cursor-pointer min-h-[38px]"
            >
              <span>Topo</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Legal & Contact Transparency Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-4">
        
        {/* Contact & CNPJ Box */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-center md:text-left">
          <div>
            <div className="text-slate-200 font-bold text-sm">Angelo Costa • Deputado Federal</div>
            <div className="text-[11px] text-slate-400">Partido Socialismo e Liberdade (PSOL 50) • Minas Gerais</div>
          </div>

          {/* Email and CNPJ */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5">
            {CANDIDATE.email && (
              <div className="flex items-center gap-1 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                <a 
                  href={`mailto:${CANDIDATE.email}`}
                  className="inline-flex items-center gap-1.5 text-yellow-400 hover:text-yellow-300 font-semibold text-xs transition-colors"
                  title="Enviar mensagem para o e-mail de contato"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{CANDIDATE.email}</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1 hover:bg-slate-700 rounded text-slate-400 hover:text-white transition-colors ml-1"
                  title="Copiar e-mail"
                  aria-label="Copiar e-mail de contato"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            )}

            <div className="bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700 font-mono text-slate-300 text-[11px]">
              CNPJ: <strong className="text-yellow-400">{CANDIDATE.cnpj}</strong>
            </div>
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
