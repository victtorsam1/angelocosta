import React, { useState } from 'react';
import { CANDIDATE } from '../data/candidateData';
import { PsolLogo } from './PsolSunIcon';
import { 
  Check, 
  Copy, 
  Share2, 
  ShieldCheck, 
  Vote, 
  MapPin
} from 'lucide-react';

interface HeroSectionProps {
  onScrollToUrna: () => void;
  onShareWhatsApp: () => void;
  candidatePhoto: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScrollToUrna,
  onShareWhatsApp,
  candidatePhoto
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CANDIDATE.number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="inicio" className="relative overflow-hidden pt-6 pb-10 sm:pt-10 sm:pb-14 bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white">
      {/* Background ambient accents */}
      <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* Left Column: Direct Candidate info */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
            
            {/* Official Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-blue-600/30 text-blue-200 border border-blue-500/40 text-[11px] sm:text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-300 shrink-0" />
                Candidatura Oficial
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 text-[11px] sm:text-xs font-black">
                <PsolLogo variant="icon" className="h-3.5 shrink-0" />
                PSOL 50
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] sm:text-xs font-bold">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                Minas Gerais
              </span>
            </div>

            {/* Main Header & Name */}
            <div className="space-y-1 sm:space-y-1.5">
              <p className="text-blue-400 font-extrabold tracking-widest text-xs sm:text-sm uppercase">
                Eleições 2026 • Por Minas Gerais
              </p>
              
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white font-display leading-tight">
                DEPUTADO <span className="text-blue-400">FEDERAL</span>
              </h1>

              <div className="pt-1 sm:pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3">
                <span className="text-2xl sm:text-4xl font-extrabold text-white">
                  {CANDIDATE.name}
                </span>
                <span className="bg-yellow-400 text-slate-950 font-black text-sm sm:text-base px-3 py-0.5 sm:py-1 rounded-md font-mono shadow-sm">
                  5078
                </span>
              </div>

              <div className="pt-1.5">
                <span className="inline-block bg-yellow-400 text-slate-950 font-black text-xs sm:text-sm px-3.5 py-1 rounded-lg tracking-tight uppercase shadow-md">
                  ★ {CANDIDATE.slogan}
                </span>
              </div>
            </div>

            {/* Clear Concise Slogan / Mission */}
            <p className="text-slate-300 text-xs sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Baiano de nascimento e mineiro de coração há mais de 15 anos. Uma voz firme em Brasília pela saúde pública (SUS), educação técnica e superior, infraestrutura e emprego para as famílias de Minas Gerais.
            </p>

            {/* Prominent Vote 5078 Box */}
            <div className="bg-emerald-800/90 hover:bg-emerald-800 transition-colors p-3.5 sm:p-4 rounded-2xl shadow-xl border border-emerald-500/50 flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-center sm:text-left">
                <span className="text-[10px] sm:text-[11px] uppercase font-bold tracking-wider text-emerald-200 block">
                  Para Deputado Federal, vote:
                </span>
                <div className="flex items-baseline justify-center sm:justify-start gap-2">
                  <span className="text-xs font-bold text-white uppercase">VOTE</span>
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono tracking-wider">
                    {CANDIDATE.number}
                  </span>
                </div>
                <span className="text-[10px] sm:text-[11px] text-emerald-200 font-medium">
                  Angelo Costa • PSOL • Minas Gerais
                </span>
              </div>

              <div className="flex sm:flex-col gap-2 w-full sm:w-auto">
                <button
                  onClick={handleCopy}
                  id="hero-copy-number-btn"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-white text-emerald-900 hover:bg-emerald-50 active:bg-slate-100 font-black px-4 py-2.5 rounded-xl text-xs shadow-md transition-all active:scale-95 touch-manipulation cursor-pointer min-h-[42px]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Copiar 5078</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onScrollToUrna}
                  id="hero-test-urna-btn"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-emerald-950/80 hover:bg-emerald-950 text-emerald-100 font-bold px-3 py-2.5 rounded-xl text-xs border border-emerald-400/30 transition-colors touch-manipulation cursor-pointer min-h-[42px]"
                >
                  <Vote className="w-3.5 h-3.5 text-yellow-300" />
                  <span>Simular Voto</span>
                </button>
              </div>
            </div>

            {/* Quick Share Action */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-0.5">
              <button
                onClick={onShareWhatsApp}
                id="hero-share-btn"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-4 py-2.5 sm:py-3 rounded-xl shadow-md transition-all touch-manipulation cursor-pointer min-h-[44px]"
              >
                <Share2 className="w-4 h-4" />
                <span>Compartilhar Candidatura no WhatsApp</span>
              </button>
            </div>

          </div>

          {/* Right Column: Clean Candidate Card with Image */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-xs sm:max-w-sm bg-slate-800/80 rounded-2xl p-2.5 sm:p-3 border border-slate-700 shadow-2xl relative">
              
              {/* Photo Frame */}
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 border-2 border-slate-600 relative group shadow-inner">
                <img
                  src={candidatePhoto}
                  alt="Foto Oficial de Angelo Costa"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  decoding="async"
                />

                {/* Badge over photo */}
                <div className="absolute bottom-2 left-2 right-2 bg-slate-950/85 backdrop-blur-sm border border-slate-700/80 rounded-lg p-2 flex items-center justify-between text-white">
                  <div>
                    <div className="text-xs font-black leading-none">{CANDIDATE.name}</div>
                    <div className="text-[10px] text-blue-400 font-semibold mt-0.5">Deputado Federal • PSOL</div>
                  </div>
                  <div className="bg-yellow-400 text-slate-950 font-mono font-black text-xs px-2 py-0.5 rounded">
                    5078
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
