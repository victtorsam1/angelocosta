import React, { useState } from 'react';
import { CANDIDATE, MINAS_CITIES } from '../data/candidateData';
import { PsolLogo } from './PsolSunIcon';
import candidateImg from '../assets/images/angelo_costa_official_1787908673958.jpg';
import { 
  Share2, 
  Download, 
  Copy, 
  Check, 
  MessageCircle, 
  Sparkles, 
  Printer,
  QrCode,
  MapPin
} from 'lucide-react';

export const DigitalFlyerSection: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('Belo Horizonte');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  const shareText = `🇧🇷 Olá! Nestas eleições para DEPUTADO FEDERAL por Minas Gerais, meu voto é em ANGELO COSTA - VOTE 5078! 
🌟 PELO DESENVOLVIMENTO de Minas com saúde, educação e empregos para o nosso povo!
🏛️ Partido: PSOL | CNPJ: ${CANDIDATE.cnpj}
Acesse o site oficial e conheça as propostas: ${window.location.href}`;

  const handleShareWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(shareText);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="santinho" className="py-20 bg-slate-100 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Share2 className="w-3.5 h-3.5" />
            Material Oficial de Campanha
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 font-display">
            Santinho Digital & Compartilhamento
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3">
            Envie para amigos, familiares e grupos do WhatsApp. Ajude a multiplicar a mensagem pelo desenvolvimento de Minas Gerais!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          
          {/* Left: The Digital Card Cardboard */}
          <div className="lg:col-span-6 flex justify-center">
            <div 
              id="printable-santinho-card"
              className="w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-300 transition-all hover:shadow-blue-900/20"
            >
              {/* Blue Header */}
              <div className="bg-blue-700 text-white pt-4 pb-3 px-4 text-center">
                <span className="text-xs font-bold text-blue-200 uppercase tracking-widest block mb-0.5">
                  ELEIÇÕES OFICIAIS
                </span>
                <div className="text-2xl sm:text-3xl font-black tracking-tight uppercase leading-none font-display">
                  DEPUTADO FEDERAL
                </div>
              </div>

              {/* Photo & Candidate Details */}
              <div className="relative aspect-[4/4.8] bg-slate-900 overflow-hidden">
                <img
                  src={candidateImg}
                  alt="Angelo Costa"
                  className="w-full h-full object-cover"
                />

                {/* Overlaid Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  <div className="bg-slate-950/85 backdrop-blur-xs text-white text-xs font-black px-2.5 py-1 rounded tracking-tight uppercase shadow-md">
                    POR MINAS GERAIS!
                  </div>
                  {selectedCity && (
                    <div className="bg-yellow-400 text-slate-950 text-[11px] font-bold px-2 py-0.5 rounded shadow-sm inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-900" />
                      {selectedCity}
                    </div>
                  )}
                </div>

                <div className="absolute bottom-10 left-3">
                  <div className="bg-blue-600 text-white font-black text-lg px-2.5 py-0.5 rounded shadow tracking-tight">
                    {CANDIDATE.name}
                  </div>
                </div>

                <div className="absolute bottom-3 left-3">
                  <div className="bg-yellow-400 text-slate-950 font-black text-xs px-2 py-0.5 rounded shadow tracking-tight uppercase">
                    {CANDIDATE.slogan}
                  </div>
                </div>
              </div>

              {/* Green Vote Area */}
              <div className="bg-emerald-600 text-white text-center py-3.5 px-4">
                <div className="text-xs font-black tracking-widest uppercase text-emerald-100">
                  VOTE
                </div>
                <div className="text-5xl font-black tracking-wider leading-none text-white font-mono my-1 drop-shadow">
                  {CANDIDATE.number}
                </div>
                <div className="text-xs font-black uppercase text-yellow-300 tracking-wider">
                  {CANDIDATE.slogan}
                </div>
              </div>

              {/* Yellow Footer with PSOL + CNPJ */}
              <div className="bg-yellow-400 text-slate-950 px-4 py-2.5 flex items-center justify-between text-xs font-bold">
                <PsolLogo className="h-5" />
                <div className="text-[10px] font-mono font-semibold text-slate-900">
                  CNPJ: {CANDIDATE.cnpj}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Customization and Sharing Controls */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* City Selector */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <label htmlFor="city-select" className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block">
                1. Personalize com o seu Município de MG:
              </label>
              <div className="relative">
                <select
                  id="city-select"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full py-2.5 px-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-medium focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                >
                  {MINAS_CITIES.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-xs text-slate-500">
                O santinho exibirá seu município de Minas Gerais para fortalecer o apoio regional!
              </p>
            </div>

            {/* Sharing actions */}
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block">
                2. Compartilhe com 1 Clique:
              </span>

              {/* Big WhatsApp Share CTA */}
              <button
                onClick={handleShareWhatsApp}
                id="santinho-share-whatsapp-btn"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-black text-sm py-3.5 px-4 rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5 text-white" />
                <span>Enviar Santinho no WhatsApp</span>
              </button>

              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={handleCopyText}
                  id="santinho-copy-text-btn"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl border border-slate-200 transition-colors"
                >
                  {copiedText ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-slate-600" />}
                  <span>{copiedText ? 'Texto Copiado!' : 'Copiar Texto'}</span>
                </button>

                <button
                  onClick={handleCopyLink}
                  id="santinho-copy-link-btn"
                  className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl border border-slate-200 transition-colors"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4 text-slate-600" />}
                  <span>{copiedLink ? 'Link Copiado!' : 'Copiar Link'}</span>
                </button>
              </div>

              <button
                onClick={handlePrint}
                id="santinho-print-btn"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs rounded-xl border border-dashed border-slate-300 transition-colors"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                <span>Imprimir / Salvar como PDF para Distribuição</span>
              </button>
            </div>

            {/* Quick Summary of Campaign Data */}
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-xs space-y-1.5 text-slate-800">
              <div className="font-bold text-slate-950 uppercase">Informações Oficiais para o Eleitor:</div>
              <div>• <strong>Cargo:</strong> Deputado Federal (4 dígitos)</div>
              <div>• <strong>Número:</strong> <span className="font-mono font-bold text-blue-800 text-sm">5078</span></div>
              <div>• <strong>Candidato:</strong> Angelo Costa</div>
              <div>• <strong>Partido:</strong> PSOL (50)</div>
              <div>• <strong>Estado:</strong> Minas Gerais (MG)</div>
              <div>• <strong>CNPJ da Campanha:</strong> {CANDIDATE.cnpj}</div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
