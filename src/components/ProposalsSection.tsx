import React, { useState } from 'react';
import { PROPOSALS } from '../data/candidateData';
import { Proposal } from '../types';
import { 
  TrendingUp, 
  HeartPulse, 
  GraduationCap, 
  Truck, 
  Trees, 
  Scale, 
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  Search,
  ArrowUpRight
} from 'lucide-react';

export const ProposalsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedProposalId, setExpandedProposalId] = useState<string | null>(PROPOSALS[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Truck': return <Truck className="w-5 h-5" />;
      case 'Trees': return <Trees className="w-5 h-5" />;
      case 'Scale': return <Scale className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const categories = [
    { id: 'all', label: 'Todas as Propostas' },
    { id: 'Economia e Trabalho', label: 'Emprego & Renda' },
    { id: 'Saúde e Vida', label: 'Saúde & SUS' },
    { id: 'Educação e Juventude', label: 'Educação & Universidades' },
    { id: 'Mobilidade e Obras', label: 'Estradas & Infraestrutura' },
    { id: 'Sustentabilidade e Clima', label: 'Meio Ambiente & Rios' },
    { id: 'Transparência e Direitos', label: 'Gabinete Participativo' },
  ];

  const filteredProposals = PROPOSALS.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.details.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="propostas" className="py-20 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            Plano de Ação para Minas Gerais
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950 font-display">
            Pelo Desenvolvimento de Minas!
          </h2>

          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
            Conheça os pilares fundamentais e os compromissos que <strong>Angelo Costa (5078)</strong> levará à Câmara dos Deputados em Brasília.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          
          {/* Search input */}
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar propostas por palavra-chave (ex: estradas, saúde, hospitais, agricultura, UFMG)..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-blue-600 focus:border-transparent shadow-xs"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Proposals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProposals.map((proposal) => {
            const isExpanded = expandedProposalId === proposal.id;
            return (
              <div
                key={proposal.id}
                id={`proposal-card-${proposal.id}`}
                className={`bg-white rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden shadow-xs hover:shadow-md ${
                  isExpanded ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-slate-200'
                }`}
              >
                <div className="p-6 space-y-4">
                  {/* Top Category Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                      {proposal.category}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                      {getIcon(proposal.iconName)}
                    </div>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight font-display">
                      {proposal.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                      {proposal.shortDescription}
                    </p>
                  </div>

                  {/* Detailed actions / points */}
                  <div className="pt-3 border-t border-slate-100 space-y-2.5">
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Ações Práticas em Brasília:
                    </span>
                    <ul className="space-y-2 text-xs text-slate-600">
                      {proposal.details.slice(0, isExpanded ? proposal.details.length : 2).map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Toggle Footer */}
                <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setExpandedProposalId(isExpanded ? null : proposal.id)}
                    className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 transition-colors"
                  >
                    <span>{isExpanded ? 'Mostrar Menos' : 'Ver Todos os Compromissos'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>

                  <span className="text-[11px] font-mono font-bold text-slate-400">
                    VOTE 5078
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProposals.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-8 max-w-lg mx-auto">
            <p className="text-slate-600 text-sm">
              Nenhuma proposta encontrada para a busca "<strong>{searchQuery}</strong>".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs font-bold text-blue-700 underline"
            >
              Limpar filtros de busca
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
