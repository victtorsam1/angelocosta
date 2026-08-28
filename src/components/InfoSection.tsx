import React, { useState } from 'react';
import { CANDIDATE, PROPOSALS } from '../data/candidateData';
import { PsolLogo } from './PsolSunIcon';
import { 
  HeartPulse, 
  GraduationCap, 
  TrendingUp, 
  Truck, 
  Trees, 
  Scale, 
  MapPin, 
  CheckCircle2, 
  Share2,
  Download,
  Copy,
  Check
} from 'lucide-react';

interface InfoSectionProps {
  candidatePhoto: string;
}

export const InfoSection: React.FC<InfoSectionProps> = ({ candidatePhoto }) => {
  const [copiedNumber, setCopiedNumber] = useState(false);

  const getIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-blue-600" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-rose-600" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-amber-600" />;
      case 'Truck': return <Truck className="w-5 h-5 text-indigo-600" />;
      case 'Trees': return <Trees className="w-5 h-5 text-emerald-600" />;
      case 'Scale': return <Scale className="w-5 h-5 text-purple-600" />;
      default: return <CheckCircle2 className="w-5 h-5 text-blue-600" />;
    }
  };

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(CANDIDATE.number);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 2000);
  };

  return (
    <section className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* 1. Biografia e Apresentação Direta */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Foto e Card do Candidato */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="w-36 h-44 rounded-xl overflow-hidden border-2 border-slate-200 shadow-sm bg-slate-100 mb-3 relative">
                <img
                  src={candidatePhoto}
                  alt="Angelo Costa"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="flex items-center gap-1.5 justify-center mb-1">
                <h3 className="font-black text-slate-900 text-lg">{CANDIDATE.name}</h3>
                <PsolLogo variant="icon" className="h-4" />
              </div>
              <p className="text-xs font-bold text-blue-700 uppercase">Deputado Federal • 5078</p>
            </div>

            {/* Texto Biográfico */}
            <div className="md:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[11px] font-bold uppercase tracking-wider">
                <MapPin className="w-3 h-3 text-red-500" />
                Quem é Angelo Costa
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
                Baiano de nascimento, mineiro de coração e vida há mais de 15 anos.
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                <strong>Angelo Costa</strong> construiu suas raízes, sua família e sua trajetória de vida em <strong>Minas Gerais</strong>. Conhecendo a realidade das cidades históricas, da região metropolitana e do interior, coloca sua experiência a serviço da população trabalhadora mineira.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>15+ anos vivendo e atuando em MG</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span>Defesa do SUS e Hospitais Regionais</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  <span>Apoio aos Institutos e Universidades Federais</span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                  <span>Recuperação das Rodovias Mineiras</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Principais Propostas e Compromissos (Cards Informativos e Diretos) */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-6">
            <h2 className="text-2xl font-black text-slate-900 tracking-tight font-display">
              Principais Compromissos por Minas Gerais
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Conheça as prioridades de trabalho de Angelo Costa na Câmara dos Deputados em Brasília.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROPOSALS.map((p) => (
              <div 
                key={p.id}
                className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs hover:border-blue-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {p.category}
                    </span>
                    {getIcon(p.iconName)}
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-sm mb-1.5">
                    {p.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {p.shortDescription}
                  </p>
                </div>

                <ul className="space-y-1 text-[11px] text-slate-500 border-t border-slate-100 pt-2">
                  {p.details.slice(0, 2).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Santinho Digital Informativo para Salvar e Compartilhar */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-950 to-slate-950 rounded-2xl p-6 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400 text-slate-950 text-xs font-black uppercase tracking-wide">
              Santinho de Bolso Digital
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Guarde os dados de votação no seu celular
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              No dia da eleição, basta digitar <strong>5078</strong> na urna para confirmar seu voto em Angelo Costa (PSOL).
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-xl text-center">
              <div className="text-[10px] uppercase font-bold text-yellow-300">Número Oficial</div>
              <div className="text-2xl font-black font-mono text-white">5078</div>
            </div>

            <button
              onClick={handleCopyNumber}
              className="inline-flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-xs px-4 py-3 rounded-xl transition-all"
            >
              {copiedNumber ? <Check className="w-4 h-4 stroke-[3]" /> : <Copy className="w-4 h-4" />}
              <span>{copiedNumber ? "5078 Copiado!" : "Copiar Número"}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
