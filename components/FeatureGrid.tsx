
import React from 'react';
import { 
  ShieldAlert, 
  ShieldCheck, 
  Smartphone, 
  Users2,
  ArrowRight
} from 'lucide-react';

const FeatureGrid: React.FC = () => {
  const scrollToPlans = () => {
    const el = document.querySelector('#planos');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="features-grid" className="py-24 lg:py-40 bg-[#020408] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-7xl lg:text-[100px] font-display font-black text-white leading-none tracking-tighter mb-8">
            Explore o <span className="text-purple-500">Sistema.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Tudo o que você precisa para retomar o controle total da sua vida e da sua química cerebral.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
           
           {/* Card: Botão de Pânico */}
           <div className="group relative min-h-[450px] md:min-h-[500px] bg-[#0b101b] rounded-[3.5rem] border border-white/5 p-8 sm:p-12 overflow-hidden flex flex-col justify-end text-left transition-all duration-700 hover:border-red-500/20 shadow-2xl">
              <div className="absolute inset-0 z-0 opacity-[0.03] flex items-center justify-center rotate-[-15deg] pointer-events-none">
                 <div className="flex flex-wrap gap-4 w-[140%]">
                    {Array.from({length: 30}).map((_, i) => (
                      <div key={i} className="px-6 py-2.5 border border-white/20 rounded-full text-[12px] font-black text-white uppercase tracking-widest">Urgência</div>
                    ))}
                 </div>
              </div>
              <div className="relative z-10">
                 <div className="inline-flex items-center gap-3 px-6 py-3 bg-red-600 rounded-2xl text-white font-black uppercase text-xs mb-8 shadow-2xl">
                    <ShieldAlert size={18} fill="white" />
                    Botão de Pânico
                 </div>
                 <h3 className="text-3xl sm:text-5xl font-display font-black text-white mb-4 tracking-tighter">Resgate Tático.</h3>
                 <p className="text-lg sm:text-xl text-gray-500 font-light max-w-sm leading-relaxed mb-10">Interrompa impulsos instantaneamente com protocolos de emergência guiados.</p>
                 <button 
                  onClick={scrollToPlans}
                  className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-red-600 hover:border-red-500 transition-all flex items-center gap-3"
                 >
                    COMEÇAR PROTOCOLO 90 DIAS
                    <ArrowRight size={14} />
                 </button>
              </div>
           </div>

           {/* Card: Comunidade */}
           <div className="group relative min-h-[450px] md:min-h-[500px] bg-[#0b101b] rounded-[3.5rem] border border-white/5 p-8 sm:p-12 overflow-hidden flex flex-col justify-end text-left transition-all duration-700 hover:border-purple-500/20 shadow-2xl">
              <div className="absolute inset-0 z-0 p-12 flex flex-col gap-6 pointer-events-none opacity-5">
                 <Users2 size={300} className="text-white" />
              </div>
              <div className="relative z-10">
                 <h3 className="text-3xl sm:text-5xl font-display font-black text-white mb-4 tracking-tighter">Comunidade.</h3>
                 <p className="text-lg sm:text-xl text-gray-500 font-light max-w-sm leading-relaxed mb-10">Conecte-se com outros homens em busca da liberdade. Você nunca mais lutará sozinho.</p>
                 <button 
                  onClick={scrollToPlans}
                  className="px-8 py-4 bg-purple-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl shadow-xl hover:bg-purple-500 transition-all flex items-center gap-3"
                 >
                    JUNTAR-SE À TRIBO <ArrowRight size={14} />
                 </button>
              </div>
           </div>

           {/* Bloqueio DNS */}
           <div className="group relative min-h-[450px] md:min-h-[500px] bg-[#0b101b] rounded-[3.5rem] border border-white/5 p-8 sm:p-12 overflow-hidden flex flex-col justify-end text-left transition-all duration-700 hover:border-indigo-500/20 shadow-2xl">
              <div className="absolute top-10 right-10 opacity-[0.02] pointer-events-none">
                 <ShieldCheck size={200} className="text-white" />
              </div>
              <div className="relative z-10">
                 <div className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-600/20 border border-indigo-500/30 rounded-xl text-indigo-400 font-black uppercase text-[10px] mb-8 tracking-widest">
                    <ShieldCheck size={14} />
                    Blindagem Digital
                 </div>
                 <h3 className="text-3xl sm:text-5xl font-display font-black text-white mb-4 tracking-tighter">Bloqueio DNS.</h3>
                 <p className="text-lg sm:text-xl text-gray-500 font-light max-w-sm leading-relaxed mb-10">Bloqueie conteúdo pornográfico nas redes sociais e web na raiz da conexão.</p>
                 <button 
                  onClick={scrollToPlans}
                  className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-indigo-600 hover:border-indigo-500 transition-all flex items-center gap-3"
                 >
                    ATIVAR ESCUDO <ArrowRight size={14} />
                 </button>
              </div>
           </div>

           {/* Aplicativo DeSync */}
           <div className="group relative min-h-[450px] md:min-h-[500px] bg-[#0b101b] rounded-[3.5rem] border border-white/5 p-8 sm:p-12 overflow-hidden flex flex-col justify-end text-left transition-all duration-700 hover:border-purple-500/20 shadow-2xl">
              <div className="absolute top-12 right-12 opacity-[0.03] pointer-events-none">
                 <Smartphone size={150} className="text-purple-500" />
              </div>
              <div className="relative z-10">
                 <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-600/20 border border-purple-500/30 rounded-xl text-purple-400 font-black uppercase text-[10px] mb-8 tracking-widest">
                    <Smartphone size={14} />
                    Interface Profissional
                 </div>
                 <h3 className="text-3xl sm:text-5xl font-display font-black text-white mb-4 tracking-tighter">Aplicativo DeSync.</h3>
                 <p className="text-lg sm:text-xl text-gray-500 font-light max-w-sm leading-relaxed mb-10">Um app profissional para você trackear e ter o controle total da sua jornada.</p>
                 <button 
                  onClick={scrollToPlans}
                  className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-purple-600 hover:border-purple-500 transition-all flex items-center gap-3"
                 >
                    BAIXAR APP <ArrowRight size={14} />
                 </button>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
