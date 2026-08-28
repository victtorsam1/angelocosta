import React from 'react';
import { CANDIDATE } from '../data/candidateData';
import { PsolLogo } from './PsolSunIcon';
import { 
  CheckCircle2, 
  MapPin, 
  Award, 
  Users, 
  Building2, 
  Quote,
  Sparkles
} from 'lucide-react';
import candidateImg from '../assets/images/angelo_costa_full_1787908698588.jpg';
import mgLandscape from '../assets/images/minas_gerais_banner_1787908228403.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="biografia" className="py-20 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photographic Presentation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative">
              {/* Decorative accent frames */}
              <div className="absolute -top-4 -left-4 w-28 h-28 bg-yellow-400/30 rounded-3xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-36 h-36 bg-blue-700/10 rounded-3xl -z-10" />

              {/* Main Photo Card */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200">
                <img
                  src={candidateImg}
                  alt="Angelo Costa - Deputado Federal por Minas Gerais"
                  className="w-full aspect-[4/5] object-cover object-center"
                />

                {/* Bottom mini-banner on card */}
                <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                  <div>
                    <div className="font-extrabold text-white text-base">Angelo Costa</div>
                    <div className="text-xs text-yellow-400 font-semibold uppercase">Deputado Federal • 5078</div>
                  </div>
                  <PsolLogo className="h-6" lightText />
                </div>
              </div>
            </div>

            {/* Minas Gerais Context Banner */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs relative">
              <img
                src={mgLandscape}
                alt="Paisagem de Minas Gerais"
                className="w-full h-28 object-cover brightness-75"
              />
              <div className="absolute inset-0 p-3.5 flex flex-col justify-end text-white bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent">
                <div className="flex items-center gap-1.5 text-xs font-bold text-yellow-300 uppercase">
                  <MapPin className="w-3.5 h-3.5" />
                  Minas Gerais do Campo à Cidade
                </div>
                <div className="text-[11px] text-slate-200 leading-tight">
                  Compromisso com todas as regiões: Central, Zona da Mata, Triângulo, Norte, Sul e Vales.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Content & Principles */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                Trajetória e Compromisso
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-950 font-display">
                Quem é Angelo Costa?
              </h2>

              <p className="text-lg font-bold text-blue-700">
                Baiano de berço, mineiro de coração e vida há mais de 15 anos.
              </p>
            </div>

            {/* Main bio text */}
            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              <p>
                <strong>Angelo Costa</strong> é baiano, mas escolheu Minas Gerais para fincar suas raízes, construir sua família e dedicar mais de <strong>15 anos de sua vida e atuação comunitária</strong> ao povo mineiro.
              </p>
              
              <p>
                Conhecendo de perto as necessidades dos nossos municípios — da Região Metropolitana ao interior, das cidades históricas às áreas rurais — Angelo caminha lado a lado com os trabalhadores, os movimentos sociais, os profissionais da saúde e da educação pública.
              </p>
              
              <p>
                Como <strong>Deputado Federal (VOTE 5078)</strong> pelo PSOL, Angelo Costa leva a Brasília a voz de quem produz e vive em Minas, defendendo o fortalecimento do SUS, mais verbas para as escolas e institutos federais, a recuperação urgente das rodovias mineiras e oportunidades reais de emprego e dignidade para as famílias do estado.
              </p>
            </div>

            {/* Quote block */}
            <div className="bg-slate-50 border-l-4 border-yellow-400 p-4 sm:p-5 rounded-r-2xl space-y-2">
              <Quote className="w-6 h-6 text-yellow-500" />
              <p className="text-slate-800 font-semibold italic text-sm sm:text-base">
                "Minas Gerais não aceita mais retrocessos nem descaso com as nossas estradas, com nossos rios e com a vida do povo. O nosso mandato será um instrumento popular pelo desenvolvimento real e pela dignidade de cada família mineira."
              </p>
              <div className="text-xs font-bold text-slate-900 uppercase">
                — Angelo Costa (5078 • PSOL)
              </div>
            </div>

            {/* Key Pillars Checklist */}
            <div className="pt-2">
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-slate-900 mb-3">
                Valores e Compromissos Inegociáveis:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {CANDIDATE.pillars.map((pillar, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 bg-slate-100/80 px-3 py-2 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
