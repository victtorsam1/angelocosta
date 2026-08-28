import React, { useState, useEffect, useRef } from 'react';
import { CANDIDATE } from '../data/candidateData';
import { PsolLogo } from './PsolSunIcon';
import { 
  Volume2, 
  VolumeX, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  Share2
} from 'lucide-react';

interface UrnaSimulatorProps {
  onShareWhatsApp: () => void;
  candidatePhoto: string;
}

// Lazy AudioContext Singleton for instant, zero-lag sound playback on Mobile and Desktop
let sharedAudioCtx: AudioContext | null = null;
function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!sharedAudioCtx) {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioCtx) {
      sharedAudioCtx = new AudioCtx();
    }
  }
  if (sharedAudioCtx && sharedAudioCtx.state === 'suspended') {
    sharedAudioCtx.resume().catch(() => {});
  }
  return sharedAudioCtx;
}

export const UrnaSimulator: React.FC<UrnaSimulatorProps> = ({ 
  onShareWhatsApp,
  candidatePhoto
}) => {
  const [digits, setDigits] = useState<string[]>([]);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isWhiteVote, setIsWhiteVote] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const MAX_DIGITS = 4; // Federal Deputy has 4 digits in Brazil

  // Authentic electronic ballot synthesizer using Web Audio API
  const playBeep = (type: 'key' | 'confirm' | 'error') => {
    if (!soundEnabled) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;

      if (type === 'key') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.07);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.07);
      } else if (type === 'confirm') {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(659, now + 0.14);
        osc.frequency.setValueAtTime(880, now + 0.32);

        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(now + 0.85);
      } else if (type === 'error') {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, ctx.currentTime);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.18);
      }
    } catch {
      // Audio context fallback
    }
  };

  const handleKeyPress = (num: string) => {
    if (isConfirmed) return;
    if (isWhiteVote) setIsWhiteVote(false);

    if (digits.length < MAX_DIGITS) {
      playBeep('key');
      setDigits((prev) => [...prev, num]);
    }
  };

  const handleCorrige = () => {
    playBeep('key');
    setDigits([]);
    setIsWhiteVote(false);
    setIsConfirmed(false);
  };

  const handleBranco = () => {
    if (isConfirmed) return;
    playBeep('key');
    setDigits([]);
    setIsWhiteVote(true);
  };

  const handleConfirma = () => {
    if (isConfirmed) return;

    if (isWhiteVote || digits.length === MAX_DIGITS) {
      playBeep('confirm');
      setIsConfirmed(true);
    } else {
      playBeep('error');
    }
  };

  const fillAngeloNumber = () => {
    playBeep('key');
    setIsWhiteVote(false);
    setIsConfirmed(false);
    setDigits(['5', '0', '7', '8']);
  };

  // Keyboard shortcut listener for desktop users
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is in an input or text area
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key >= '0' && e.key <= '9') {
        handleKeyPress(e.key);
      } else if (e.key === 'Enter') {
        handleConfirma();
      } else if (e.key === 'Backspace' || e.key === 'Escape') {
        handleCorrige();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [digits, isConfirmed, isWhiteVote]);

  const currentNumberStr = digits.join('');
  const isAngeloCosta = currentNumberStr === '5078';
  const isPsolLegenda = currentNumberStr.length === 2 && currentNumberStr === '50';
  const isCandidateEntered = digits.length === MAX_DIGITS;

  return (
    <section id="urna-virtual" className="py-10 sm:py-14 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-3 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Simulador Interativo
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white font-display">
            Simulador da Urna Eletrônica
          </h2>
          
          <p className="text-slate-300 text-xs sm:text-sm mt-2 max-w-md mx-auto">
            Digite <strong className="text-yellow-400 font-mono text-base bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700">5078</strong> e aperte <strong className="text-emerald-400">CONFIRMA</strong> para simular seu voto em Angelo Costa para Deputado Federal (MG).
          </p>

          {/* Quick Auto-fill & sound controls */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
            <button
              onClick={fillAngeloNumber}
              id="urna-auto-fill-btn"
              className="inline-flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-xs px-3.5 py-2 rounded-lg shadow-sm transition-transform active:scale-95 touch-manipulation cursor-pointer min-h-[38px]"
            >
              <span>Preencher 5078</span>
            </button>

            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 active:bg-slate-700 touch-manipulation min-h-[38px] cursor-pointer"
              title="Ativar/Desativar sons da urna"
            >
              {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> : <VolumeX className="w-3.5 h-3.5 text-rose-400" />}
              <span>{soundEnabled ? "Som Ativo" : "Mudo"}</span>
            </button>
          </div>
        </div>

        {/* Urna Case Container */}
        <div className="max-w-3xl mx-auto bg-slate-200 rounded-2xl p-3 sm:p-6 shadow-2xl border-2 sm:border-4 border-slate-400 text-slate-900">
          
          {/* Header of Urna machine */}
          <div className="flex items-center justify-between border-b-2 border-slate-300 pb-2 mb-3 sm:mb-4">
            <div className="flex items-center gap-1.5 sm:gap-2 font-bold text-slate-800 text-[10px] sm:text-xs uppercase tracking-wider">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
              JUSTIÇA ELEITORAL • SIMULAÇÃO
            </div>
            <div className="text-[10px] sm:text-xs font-mono text-slate-600 font-bold">
              MINAS GERAIS (MG)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-5">
            
            {/* Screen Box (Left side of Urna) */}
            <div className="md:col-span-7 bg-[#fbfdfa] rounded-xl border-2 sm:border-4 border-slate-700 shadow-inner p-3 sm:p-4 flex flex-col justify-between min-h-[290px] sm:min-h-[330px] relative overflow-hidden font-sans">
              
              {isConfirmed ? (
                /* FIM Screen */
                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-3 py-4 sm:py-6 animate-in fade-in duration-200">
                  <div className="text-5xl sm:text-6xl font-black text-slate-900 tracking-wider font-display">
                    FIM
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 px-3 py-1.5 rounded-full font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>VOTO CONFIRMADO!</span>
                  </div>
                  <p className="text-xs text-slate-600 max-w-xs leading-relaxed">
                    Você votou em <strong>Angelo Costa (5078)</strong> para Deputado Federal por Minas Gerais!
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2 pt-1 w-full max-w-xs">
                    <button
                      onClick={handleCorrige}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-800 text-white rounded-lg text-xs font-bold hover:bg-slate-900 active:bg-slate-950 touch-manipulation min-h-[40px]"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Votar Novamente</span>
                    </button>
                    <button
                      onClick={onShareWhatsApp}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 active:bg-emerald-800 touch-manipulation min-h-[40px] shadow-xs"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Compartilhar</span>
                    </button>
                  </div>
                </div>
              ) : isWhiteVote ? (
                /* Voto em Branco Screen */
                <div className="flex-1 flex flex-col justify-center items-center text-center py-6">
                  <div className="text-2xl font-black text-slate-800 tracking-tight uppercase">
                    VOTO EM BRANCO
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    Pressione <strong className="text-emerald-700">CONFIRMA</strong> para registrar ou <strong className="text-amber-700">CORRIGE</strong> para reiniciar.
                  </p>
                </div>
              ) : (
                /* Active Ballot Screen */
                <>
                  {/* Screen Header */}
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                      SEU VOTO PARA
                    </div>
                    <div className="text-base sm:text-xl font-black text-slate-900 uppercase tracking-tight font-display">
                      DEPUTADO FEDERAL
                    </div>
                  </div>

                  {/* Number Boxes Row & Candidate Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 my-2 items-center">
                    
                    {/* Left: Inputs & Info */}
                    <div className="sm:col-span-7 space-y-1.5">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="text-xs font-bold text-slate-700 uppercase">Número:</span>
                        <div className="flex gap-1">
                          {[0, 1, 2, 3].map((index) => {
                            const digit = digits[index];
                            const isCurrent = digits.length === index;
                            return (
                              <div
                                key={index}
                                className={`w-7 h-9 sm:w-8 sm:h-10 border-2 flex items-center justify-center text-lg sm:text-xl font-black font-mono rounded ${
                                  digit 
                                    ? 'bg-slate-900 text-white border-slate-900' 
                                    : isCurrent 
                                      ? 'border-blue-600 bg-blue-50 animate-pulse' 
                                      : 'border-slate-400 bg-white text-slate-400'
                                }`}
                              >
                                {digit || ''}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Candidate info if 5078 */}
                      {isAngeloCosta ? (
                        <div className="space-y-0.5 text-xs pt-1 border-t border-slate-200">
                          <div>
                            <span className="font-semibold text-slate-500">Nome: </span>
                            <span className="font-black text-slate-900 uppercase">ANGELO COSTA</span>
                          </div>
                          <div>
                            <span className="font-semibold text-slate-500">Partido: </span>
                            <span className="font-bold text-slate-800 uppercase">PSOL (50)</span>
                          </div>
                          <div>
                            <span className="font-semibold text-slate-500">Estado: </span>
                            <span className="font-bold text-slate-800">Minas Gerais</span>
                          </div>
                          <div className="text-emerald-700 font-bold text-[10px] uppercase tracking-wide">
                            ★ PELO DESENVOLVIMENTO!
                          </div>
                        </div>
                      ) : isPsolLegenda ? (
                        <div className="space-y-0.5 text-xs pt-1 border-t border-slate-200 text-slate-700">
                          <div><span className="font-semibold">Legenda: </span><strong>PSOL (50)</strong></div>
                          <p className="text-[10px] text-amber-700 font-medium">Digite 78 para votar em Angelo Costa.</p>
                        </div>
                      ) : isCandidateEntered ? (
                        <div className="text-xs text-rose-700 font-bold pt-1 border-t border-slate-200">
                          NÚMERO NÃO REGISTRADO.<br/>
                          <button onClick={fillAngeloNumber} className="text-blue-700 underline text-xs font-bold mt-0.5">
                            Votar em Angelo Costa (5078)
                          </button>
                        </div>
                      ) : (
                        <div className="text-[11px] text-slate-400 italic pt-1 border-t border-slate-100">
                          Digite 5078
                        </div>
                      )}
                    </div>

                    {/* Right: Candidate Photo Box */}
                    <div className="sm:col-span-5 flex flex-col items-center justify-center">
                      {isAngeloCosta ? (
                        <div className="w-18 h-22 sm:w-24 sm:h-28 border-2 border-slate-800 bg-slate-100 rounded overflow-hidden shadow-sm flex flex-col">
                          <img
                            src={candidatePhoto}
                            alt="Foto Oficial de Angelo Costa"
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      ) : (
                        <div className="w-18 h-22 sm:w-24 sm:h-28 border-2 border-dashed border-slate-300 bg-slate-50 rounded flex flex-col items-center justify-center text-slate-400 p-1 text-center text-[9px]">
                          <span>FOTO</span>
                        </div>
                      )}
                      <span className="text-[9px] text-slate-600 font-bold mt-1">DEP. FEDERAL</span>
                    </div>

                  </div>

                  {/* Screen Instructions Footer */}
                  <div className="border-t border-slate-300 pt-1 text-[9px] text-slate-600 flex justify-between">
                    <span><strong className="text-emerald-700">CONFIRMA</strong> para votar</span>
                    <span><strong className="text-amber-700">CORRIGE</strong> para reiniciar</span>
                  </div>
                </>
              )}

            </div>

            {/* Keypad Box (Right side of Urna) */}
            <div className="md:col-span-5 bg-slate-900 rounded-xl p-3 sm:p-3.5 flex flex-col justify-between shadow-xl border-2 border-slate-700">
              
              <div className="text-center mb-1.5 sm:mb-2">
                <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-slate-400">
                  TECLADO DA URNA
                </span>
              </div>

              {/* Numeric Pad */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 max-w-[210px] mx-auto w-full">
                {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleKeyPress(num)}
                    id={`urna-key-${num}`}
                    className="h-11 sm:h-11 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white font-mono font-bold text-xl rounded shadow-md border-b-2 border-slate-950 active:translate-y-0.5 transition-all flex items-center justify-center touch-manipulation cursor-pointer select-none"
                    aria-label={`Tecla ${num}`}
                  >
                    {num}
                  </button>
                ))}
                
                {/* Empty cell for zero alignment */}
                <div />
                <button
                  onClick={() => handleKeyPress('0')}
                  id="urna-key-0"
                  className="h-11 sm:h-11 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-white font-mono font-bold text-xl rounded shadow-md border-b-2 border-slate-950 active:translate-y-0.5 transition-all flex items-center justify-center touch-manipulation cursor-pointer select-none"
                  aria-label="Tecla 0"
                >
                  0
                </button>
                <div />
              </div>

              {/* Action Buttons: BRANCO, CORRIGE, CONFIRMA */}
              <div className="grid grid-cols-3 gap-1.5 mt-2.5 sm:mt-3 pt-2 border-t border-slate-800">
                <button
                  onClick={handleBranco}
                  id="urna-btn-branco"
                  className="min-h-[44px] py-2 px-1 bg-white hover:bg-slate-100 active:bg-slate-200 text-slate-900 font-black text-[9px] sm:text-[10px] rounded shadow-md border-b-2 border-slate-400 active:translate-y-0.5 uppercase tracking-tight touch-manipulation cursor-pointer flex items-center justify-center"
                >
                  BRANCO
                </button>

                <button
                  onClick={handleCorrige}
                  id="urna-btn-corrige"
                  className="min-h-[44px] py-2 px-1 bg-amber-600 hover:bg-amber-500 active:bg-amber-700 text-white font-black text-[9px] sm:text-[10px] rounded shadow-md border-b-2 border-amber-800 active:translate-y-0.5 uppercase tracking-tight touch-manipulation cursor-pointer flex items-center justify-center"
                >
                  CORRIGE
                </button>

                <button
                  onClick={handleConfirma}
                  id="urna-btn-confirma"
                  className="min-h-[44px] py-2 px-1 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-black text-[11px] sm:text-xs rounded shadow-lg border-b-2 border-emerald-800 active:translate-y-0.5 uppercase tracking-tight touch-manipulation cursor-pointer flex items-center justify-center"
                >
                  CONFIRMA
                </button>
              </div>

            </div>

          </div>

          {/* Quick instructions under Urna */}
          <div className="mt-2.5 pt-2 border-t border-slate-300 text-center text-[11px] sm:text-xs text-slate-700 font-medium">
            <span>💡 Digite <strong>5078</strong> e clique no botão verde <strong>CONFIRMA</strong>.</span>
          </div>

        </div>

      </div>
    </section>
  );
};
