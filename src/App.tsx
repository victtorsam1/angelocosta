import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { UrnaSimulator } from './components/UrnaSimulator';
import { InfoSection } from './components/InfoSection';
import { Footer } from './components/Footer';
import { CANDIDATE } from './data/candidateData';
import { Vote, MessageCircle } from 'lucide-react';
export default function App() {
  const candidatePhoto = '/foto-angelo-costa.jpg';

  const scrollToUrna = () => {
    const el = document.getElementById('urna-virtual');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleShareWhatsApp = () => {
    const text = `🇧🇷 Conheça a candidatura de ANGELO COSTA para Deputado Federal por Minas Gerais! 
⭐ VOTE 5078 - PELO DESENVOLVIMENTO!
🏛️ PSOL | CNPJ: ${CANDIDATE.cnpj}
Acesse e simule seu voto na urna eletrônica: ${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-yellow-400 selection:text-slate-950 font-sans pb-16 md:pb-0">
      
      {/* 1. Clean Top Header */}
      <Header 
        onOpenUrna={scrollToUrna}
        onShare={handleShareWhatsApp}
      />

      {/* Main Streamlined Content */}
      <main className="flex-1">
        
        {/* 2. Hero Section: Direct candidate presentation & Number */}
        <HeroSection 
          onScrollToUrna={scrollToUrna}
          onShareWhatsApp={handleShareWhatsApp}
          candidatePhoto={candidatePhoto}
        />

        {/* 3. Interactive Electronic Ballot (Urna Eletrônica) */}
        <UrnaSimulator 
          onShareWhatsApp={handleShareWhatsApp}
          candidatePhoto={candidatePhoto}
        />

        {/* 4. Streamlined Informative Section: Bio, Key Proposals, and Santinho */}
        <InfoSection 
          candidatePhoto={candidatePhoto}
        />

      </main>

      {/* 5. Minimal Legal Footer */}
      <Footer />

      {/* Floating Bottom Sticky Bar for Mobile Quick Action */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2 px-3 sm:px-4 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-2xl flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-600 text-white font-mono font-black text-sm px-2.5 py-1 rounded-md">
            5078
          </div>
          <div className="text-xs font-bold text-slate-800 leading-tight">
            Angelo Costa
            <span className="block text-[10px] text-blue-700 font-semibold uppercase">Dep. Federal</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={scrollToUrna}
            className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white text-xs font-black px-3 py-2 rounded-lg shadow-xs flex items-center gap-1 touch-manipulation cursor-pointer min-h-[38px]"
          >
            <Vote className="w-3.5 h-3.5 text-yellow-300" />
            <span>Urna</span>
          </button>

          <button
            onClick={handleShareWhatsApp}
            className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-xs font-black px-3 py-2 rounded-lg shadow-xs flex items-center gap-1 touch-manipulation cursor-pointer min-h-[38px]"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Zap</span>
          </button>
        </div>
      </div>

    </div>
  );
}
