
import React from 'react';
import { Target, Users, TrendingUp, Zap, Shield } from 'lucide-react';

const MissionMilestone: React.FC = () => {
  const currentCount = 58432;
  const targetCount = 1000000;
  const progressPercentage = (currentCount / targetCount) * 100;

  return (
    <section className="py-24 lg:py-40 bg-[#020408] relative overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.03)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-purple-600/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-widest">
            <Target size={12} />
            OBJETIVO ESTRATÉGICO // 2026
          </div>
          <h2 className="text-5xl md:text-8xl font-display font-black text-white leading-none tracking-tighter mb-8">
            Nossa Missão: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">1 Milhão de Vidas.</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Estamos em uma guerra contra a epidemia de dopamina artificial. Nosso compromisso é libertar 1 milhão de homens do vício até o final de 2026.
          </p>
        </div>

        {/* Tracker Card */}
        <div className="bg-[#0b101b] border border-white/10 rounded-[3.5rem] p-10 lg:p-16 relative overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
              <div className="text-left">
                <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] block mb-2">Impacto Atual</span>
                <div className="flex items-baseline gap-3">
                  <span className="text-6xl md:text-8xl font-display font-black text-white leading-none">58.4k</span>
                  <span className="text-purple-500 font-black text-xl">+</span>
                </div>
              </div>
              <div className="text-left md:text-right">
                <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.3em] block mb-2">Meta Final 2026</span>
                <div className="text-4xl md:text-6xl font-display font-black text-gray-400 opacity-40 leading-none">1.000.000</div>
              </div>
            </div>

            {/* Progress Bar Container */}
            <div className="relative h-6 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-1">
               <div 
                 className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400 rounded-full relative group transition-all duration-1000 ease-out shadow-[0_0_30px_rgba(147,51,234,0.4)]"
                 style={{ width: `${Math.max(progressPercentage, 5.8)}%` }}
               >
                 <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[gradient-move_2s_linear_infinite]" />
               </div>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-between items-center gap-6">
               <div className="flex items-center gap-3">
                  <TrendingUp size={16} className="text-green-500" />
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">+2.4k novos membros/mês</span>
               </div>
               <div className="flex -space-x-3">
                 {[1, 2, 3, 4, 5].map(i => (
                   <img key={i} src={`https://i.pravatar.cc/100?img=${i+20}`} className="w-10 h-10 rounded-full border-4 border-[#0b101b] object-cover grayscale group-hover:grayscale-0 transition-all" alt="user" />
                 ))}
                 <div className="w-10 h-10 rounded-full border-4 border-[#0b101b] bg-purple-600 flex items-center justify-center text-[10px] font-black text-white">
                    +
                 </div>
               </div>
            </div>
          </div>

          {/* Background Elements */}
          <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
             <Users size={300} />
          </div>
        </div>

        {/* Stats Grid Under Tracker */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
           <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] text-center">
              <Zap size={20} className="text-purple-500 mx-auto mb-4" />
              <div className="text-2xl font-display font-black text-white mb-1">90 Dias</div>
              <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Protocolo de Limpeza</p>
           </div>
           <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] text-center">
              <Shield size={20} className="text-purple-500 mx-auto mb-4" />
              <div className="text-2xl font-display font-black text-white mb-1">100% Seguro</div>
              <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Privacidade Absoluta</p>
           </div>
           <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem] text-center">
              <TrendingUp size={20} className="text-purple-500 mx-auto mb-4" />
              <div className="text-2xl font-display font-black text-white mb-1">Recuperação</div>
              <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Engenharia Reversa</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default MissionMilestone;
