import React, { useState } from 'react';
import { PsolLogo } from './PsolSunIcon';
import { CANDIDATE } from '../data/candidateData';
import { CheckCircle2, Share2, Vote, MapPin, Mail } from 'lucide-react';

interface HeaderProps {
  onOpenUrna: () => void;
  onShare: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenUrna, 
  onShare
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(CANDIDATE.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top minimal strip */}
      <div className="bg-slate-950 text-slate-300 text-xs py-1.5 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-1.5">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="inline-flex items-center gap-1 font-semibold text-slate-200 text-[11px] sm:text-xs">
              <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
              Minas Gerais (MG)
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300 text-[11px] sm:text-xs font-semibold">
              Eleições 2026 Oficial
            </span>
          </div>

          <div className="flex items-center gap-3 text-[10px] sm:text-[11px] text-slate-400">
            {CANDIDATE.email && (
              <a 
                href={`mailto:${CANDIDATE.email}`}
                className="hidden sm:inline-flex items-center gap-1 text-slate-300 hover:text-yellow-300 transition-colors"
                title="E-mail de Contato Oficial"
              >
                <Mail className="w-3 h-3 text-yellow-400" />
                <span>{CANDIDATE.email}</span>
              </a>
            )}
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="font-mono">CNPJ: {CANDIDATE.cnpj}</span>
          </div>
        </div>
      </div>

      {/* Main navigation & quick tools */}
      <div className="max-w-6xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-18">
          
          {/* Candidate identification */}
          <div className="flex items-center gap-2 sm:gap-3" id="header-candidate-brand">
            <div className="bg-blue-800 text-white w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex flex-col items-center justify-center font-black shadow-md shrink-0">
              <span className="text-[9px] sm:text-xs tracking-wider uppercase text-yellow-300 leading-none">VOTE</span>
              <span className="text-base sm:text-xl tracking-tight leading-none text-white font-mono">{CANDIDATE.number}</span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-base sm:text-2xl font-black text-slate-900 tracking-tight font-display">
                  {CANDIDATE.name}
                </span>
                <PsolLogo className="h-3.5 sm:h-5 shrink-0" variant="icon" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-blue-700 uppercase tracking-wider">
                Deputado Federal • PSOL 50
              </span>
            </div>
          </div>

          {/* Actions on the right */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick copy number */}
            <button
              onClick={handleCopyNumber}
              id="header-copy-number-btn"
              title="Copiar número de votação 5078"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg border border-slate-300 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 text-slate-800 transition-colors touch-manipulation cursor-pointer min-h-[38px]"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>5078 Copiado!</span>
                </>
              ) : (
                <>
                  <span>Número:</span>
                  <span className="font-mono bg-white px-1.5 py-0.5 rounded border border-slate-300 font-bold text-blue-700">5078</span>
                </>
              )}
            </button>

            {/* Test on Urna button */}
            <button
              onClick={onOpenUrna}
              id="header-urna-cta-btn"
              className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-black text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-lg shadow-sm transition-all touch-manipulation cursor-pointer min-h-[38px]"
            >
              <Vote className="w-4 h-4 text-yellow-300" />
              <span>Simular na Urna</span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};
