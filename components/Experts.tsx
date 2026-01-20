
import React from 'react';
import { EXPERTS } from '../constants';
import { ShieldCheck, Award } from 'lucide-react';

const Experts: React.FC = () => {
  return (
    <section className="py-24 lg:py-40 bg-[#020408] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(147,51,234,0.1)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="mb-24 lg:mb-32">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-purple-600/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-widest">
            <ShieldCheck size={12} />
            Comando Estratégico
          </div>
          <h2 className="text-5xl md:text-8xl lg:text-[100px] font-display font-black text-white leading-[0.9] tracking-tighter mb-10">
            Mentes por trás do <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Protocolo.</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-3xl">
            A união rara entre a profundidade da psicanálise clínica e a estratégia comportamental moderna.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {EXPERTS.map((expert, idx) => (
            <div key={idx} className="group relative bg-[#0b101b] rounded-[3.5rem] overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.5)] flex flex-col h-full">
              
              <div className="relative h-[400px] lg:h-[500px] w-full overflow-hidden bg-[#121212]">
                <img 
                  src={expert.image} 
                  alt={expert.name} 
                  className="w-full h-full object-cover object-center grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b101b] via-[#0b101b]/10 to-transparent opacity-90" />
                
                <div className="absolute bottom-10 left-10 right-10">
                   <div className="flex items-center gap-2 text-purple-400 text-[10px] font-black tracking-[0.3em] uppercase mb-3">
                      <Award size={14} />
                      {expert.role}
                   </div>
                   <h3 className="text-4xl lg:text-5xl font-display font-black text-white tracking-tighter">{expert.name}</h3>
                </div>
              </div>
              
              <div className="p-10 lg:p-14 flex flex-col flex-1 relative bg-[#0b101b]">
                <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-12 flex-1 font-light italic">
                  "{expert.description}"
                </p>
                
                <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/5">
                  {expert.stats.map((stat, i) => (
                    <div key={i} className="flex flex-col min-w-0">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-white break-words">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest font-black mt-2">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
