
import { Check, Star, Zap, ShieldCheck, Crown, Activity, Target, Shield, AlertCircle } from 'lucide-react';
import React from 'react';
import { PLANS } from '../constants';

const Pricing: React.FC = () => {
  const handleCheckout = (url?: string) => {
    if (url) {
      window.open(url, '_blank');
    } else {
      console.log("No specific link for this plan yet.");
    }
  };

  return (
    <section id="planos" className="py-24 lg:py-40 bg-[#020408] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/5 border border-white/10 text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">
            Investimento na sua Liberdade
          </div>
          <h2 className="text-5xl sm:text-7xl lg:text-[100px] font-display font-black text-white tracking-tighter leading-none mb-8">
            Escolha seu <br /><span className="text-purple-500">Nível Elite.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Do sistema básico de emergência à reconstrução física e mental completa com o acompanhamento ScarX.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-stretch mb-20 max-w-5xl mx-auto">
          {PLANS.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative flex flex-col p-10 lg:p-12 rounded-[3.5rem] border transition-all duration-700 ${
                plan.highlight 
                  ? 'bg-[#0b101b] border-purple-500/50 shadow-[0_40px_100px_-20px_rgba(147,51,234,0.3)] scale-[1.02] z-10' 
                  : plan.badgeColor === 'red'
                  ? 'bg-[#080c14] border-red-500/10 hover:border-red-500/30'
                  : 'bg-[#080c14] border-white/5 hover:border-purple-500/30'
              }`}
            >
              {plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                  <span className={`${
                    plan.badgeColor === 'red' 
                      ? 'bg-red-900/80 text-red-200 border-red-500/30' 
                      : 'bg-purple-600 text-white shadow-2xl'
                  } text-[10px] font-black px-6 py-2.5 rounded-full uppercase tracking-[0.2em] border inline-flex items-center gap-2 whitespace-nowrap shadow-xl backdrop-blur-md`}>
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-10 text-left">
                <h3 className="text-2xl font-display font-black text-white mb-4 uppercase tracking-widest leading-none">{plan.name}</h3>
                
                <div className="flex flex-col mb-6">
                  {plan.oldPrice && (
                    <span className="text-xs font-bold text-gray-500 line-through mb-1 uppercase tracking-widest">{plan.oldPrice}</span>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl lg:text-6xl font-display font-black text-white">{plan.price}</span>
                    {plan.periodicity && (
                      <span className={`text-xs font-black uppercase tracking-widest ${plan.periodicity === 'ÚNICO' ? 'text-purple-400' : 'text-gray-600'}`}>
                        {plan.periodicity}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-white text-sm font-medium leading-relaxed min-h-[50px]">{plan.description}</p>
              </div>

              <div className="flex-1 space-y-4 mb-12">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className={`mt-1 shrink-0 w-5 h-5 rounded-lg flex items-center justify-center ${
                      plan.highlight ? 'bg-purple-500/20 text-purple-400' : 
                      plan.badgeColor === 'red' ? 'bg-red-500/10 text-red-400' : 'bg-white/5 text-gray-500'
                    }`}>
                      <Check size={12} strokeWidth={4} />
                    </div>
                    <span className="text-[13px] font-medium text-gray-300 leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleCheckout(plan.checkoutUrl)}
                className={`h-20 w-full rounded-2xl font-black uppercase tracking-[0.25em] text-[10px] transition-all duration-300 flex items-center justify-center ${
                  plan.highlight 
                    ? '!bg-purple-600 !text-white shadow-[0_20px_40px_rgba(147,51,234,0.3)] hover:!bg-purple-500' 
                    : plan.badgeColor === 'red'
                      ? 'bg-red-600/10 border border-red-500/20 text-red-500 hover:bg-red-600 hover:text-white hover:shadow-[0_20px_40px_rgba(239,68,68,0.2)]'
                      : 'bg-transparent border border-white/10 text-white hover:bg-white/5 hover:border-purple-500/50'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-5xl mx-auto group mb-12">
          <div className="relative bg-[#0b101b] border border-white/10 rounded-[3rem] overflow-hidden transition-all duration-500 hover:border-indigo-500/30 shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
            <div className="p-10 lg:p-14 flex flex-col justify-center text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="px-2.5 py-1 rounded-lg bg-indigo-600/10 border border-indigo-500/20 flex items-center gap-2">
                  <Shield size={12} className="text-indigo-400" />
                  <span className="text-[9px] font-black text-white uppercase tracking-widest">Revitalização Elite</span>
                </div>
                <span className="text-[10px] font-black text-gray-700 uppercase tracking-[0.4em]">EXCLUSIVO NEW LIFE</span>
              </div>

              <h4 className="text-3xl lg:text-4xl font-display font-black text-white mb-6 leading-tight tracking-tighter uppercase">
                O que é a <br />Revitalização <span className="text-indigo-400">ScarX?</span>
              </h4>
              
              <p className="text-gray-400 text-base lg:text-lg font-light leading-relaxed mb-10">
                No New Life, você desbloqueia 3 meses de imersão na ScarX, a consultoria de elite baseada em personalização extrema. Integramos <span className="text-white font-bold">Treinamento de Performance, Nutrição Estratégica, Suporte Fisioterapêutico e Acompanhamento Psicológico</span> em uma metodologia 360°. Gestão completa da sua saúde com suporte concierge 24h para blindar sua rotina e garantir performance máxima.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-indigo-400">
                    <Target size={16} />
                  </div>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Foco 100% Individual</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-indigo-400">
                    <Zap size={16} />
                  </div>
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Suporte Concierge 24h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-24">
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 lg:p-14 relative overflow-hidden flex flex-col md:flex-row items-center gap-10">
             <div className="shrink-0 relative">
                <div className="absolute inset-0 bg-purple-600/40 blur-3xl rounded-full" />
                <div className="relative z-10 w-32 h-32 rounded-full border-4 border-purple-500/30 flex flex-col items-center justify-center text-white bg-black/40 backdrop-blur-md">
                   <span className="text-4xl font-display font-black leading-none">07</span>
                   <span className="text-[8px] font-black uppercase tracking-widest">DIAS</span>
                   <span className="text-[10px] font-black text-purple-400 uppercase tracking-widest">GARANTIA</span>
                </div>
             </div>
             <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl font-display font-black text-white mb-4 uppercase tracking-tighter">7 Dias de Garantia Incondicional.</h4>
                <p className="text-gray-400 font-light leading-relaxed text-base">
                  Nosso objetivo aqui é para além de uma empresa. Queremos realmente transformar sua vida. Teste nossos sistemas por <span className="text-white font-bold">7 dias</span>. Se não estiver satisfeito, peço seu dinheiro de volta e tenha <span className="text-white font-bold">100% de garantia</span>.
                </p>
             </div>
          </div>
        </div>

        <div className="mt-20 text-center flex flex-col items-center gap-12">
           <div className="flex flex-wrap items-center justify-center gap-6 py-4 px-8 bg-white/5 rounded-2xl border border-white/5">
              <div className="flex items-center gap-3 text-gray-400 text-[10px] font-black uppercase tracking-[0.4em]">
                <ShieldCheck size={18} className="text-purple-500" />
                Privacidade Absoluta
              </div>
              <div className="hidden md:block w-px h-4 bg-white/10" />
              <div className="flex items-center gap-3 text-gray-400 text-[10px] font-black uppercase tracking-[0.4em]">
                <AlertCircle size={18} className="text-indigo-400" />
                App & Fatura: <span className="text-white">DeSync</span>
              </div>
           </div>
           
           <p className="text-[11px] text-gray-500 font-bold uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
             Sua segurança é prioridade absoluta. <span className="text-white">O aplicativo é nomeado como "DeSync"</span> para garantir discrição total em seus dispositivos e extratos bancários.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
