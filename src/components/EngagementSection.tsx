import React, { useState } from 'react';
import { CANDIDATE, MINAS_CITIES } from '../data/candidateData';
import { 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  HeartHandshake, 
  UserCheck, 
  Sparkles,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export const EngagementSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    city: 'Belo Horizonte',
    topic: 'Saúde e SUS',
    message: '',
    wantsVolunteering: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp) return;
    
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      city: 'Belo Horizonte',
      topic: 'Saúde e SUS',
      message: '',
      wantsVolunteering: false,
    });
  };

  return (
    <section id="participe" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct info & invitation */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5" />
              Gabinete Aberto & Popular
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white font-display">
              Construa o Mandato com a Gente!
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              O mandato de <strong>Angelo Costa (5078)</strong> pertence ao povo de Minas Gerais. Envie as demandas da sua cidade, do seu bairro ou junte-se aos comitês de voluntários em todo o estado.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                <MapPin className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white text-sm">Presença em todo o Estado de MG</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Articulação regional na capital, região metropolitana e interior de Minas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                <UserCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white text-sm">Voluntariado e Mobilização</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Receba materiais digitais, adesivos e convites para plenárias e encontros.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-slate-800/80 p-4 rounded-2xl border border-slate-700">
                <MessageSquare className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white text-sm">Emendas Participativas</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Suas propostas servirão de base direta para projetos de lei e destinação de verbas federais.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Participation Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-200">
              
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 font-display">
                    Mensagem Recebida com Sucesso!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Obrigado, <strong>{formData.name}</strong> de <strong>{formData.city}</strong>! Sua contribuição é fundamental para o desenvolvimento de Minas Gerais. A equipe de Angelo Costa (5078) entrará em contato.
                  </p>
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" id="form-demanda-participativa">
                  
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-xl font-black text-slate-900 font-display">
                      Envie sua Sugestão ou Seja Voluntário
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Preencha os campos abaixo para conectar-se diretamente com nossa equipe.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        Seu Nome Completo *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ex: Maria Silva"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label htmlFor="whatsapp" className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        WhatsApp (com DDD) *
                      </label>
                      <input
                        id="whatsapp"
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        placeholder="(31) 99999-9999"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        Cidade em Minas Gerais *
                      </label>
                      <select
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                      >
                        {MINAS_CITIES.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="topic" className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                        Tema Principal
                      </label>
                      <select
                        id="topic"
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 focus:outline-hidden"
                      >
                        <option value="Saúde e SUS">Saúde e SUS</option>
                        <option value="Emprego e Renda">Emprego e Renda</option>
                        <option value="Educação e Universidades">Educação e Universidades</option>
                        <option value="Estradas e Rodovias">Estradas e Rodovias</option>
                        <option value="Meio Ambiente e Rios">Meio Ambiente e Rios</option>
                        <option value="Agricultura Familiar">Agricultura Familiar</option>
                        <option value="Cultura e Patrimônio">Cultura e Patrimônio</option>
                        <option value="Outro">Outro Assunto</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-1">
                      Sua Mensagem ou Proposta para Minas
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte quais são os principais desafios do seu município e o que espera de um Deputado Federal..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-600 focus:outline-hidden resize-none"
                    />
                  </div>

                  {/* Volunteering Checkbox */}
                  <label className="flex items-center gap-3 p-3 bg-yellow-50 rounded-xl border border-yellow-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.wantsVolunteering}
                      onChange={(e) => setFormData({ ...formData, wantsVolunteering: e.target.checked })}
                      className="w-4 h-4 text-blue-700 rounded focus:ring-blue-600"
                    />
                    <span className="text-xs font-bold text-slate-800">
                      Quero ser voluntário(a) e ajudar na campanha de Angelo Costa 5078 na minha cidade!
                    </span>
                  </label>

                  <button
                    type="submit"
                    id="submit-demanda-btn"
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-black text-sm py-3.5 px-6 rounded-xl shadow-lg transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem para o Mandato</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
