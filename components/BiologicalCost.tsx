
import React from 'react';
import { ArrowDown, ArrowUp, Brain, Target } from 'lucide-react';

const BiologicalCost: React.FC = () => {
  return (
    <section id="biologia" className="py-24 lg:py-40 bg-[#020408] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow Profundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.04)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10 text-center">
        
        {/* Header Centralizado */}
        <div className="flex flex-col items-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-purple-600/10 border border-purple-500/20 text-purple-400 mb-8 shadow-[0_10px_30px_rgba(168,85,247,0.15)]">
            <Brain size={20} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Painel de Energia e Foco</span>
          </div>
          
          <div className="flex items-center justify-center gap-5 mb-6">
            <span className="text-purple-500 font-display font-black text-5xl lg:text-7xl opacity-20">02.</span>
            <h2 className="text-4xl lg:text-7xl font-display font-black text-white tracking-tighter leading-none">
              O Custo Biológico
            </h2>
          </div>
          
          <h3 className="text-2xl lg:text-3xl font-display font-black text-white/80 mb-6 tracking-tight">
            Dessensibilização & Anedonia
          </h3>

          <p className="text-lg lg:text-xl text-gray-500 font-light leading-relaxed max-w-3xl">
            O consumo crônico não gera apenas "costume", gera <span className="text-white font-medium">alteração física</span>. A proteína <span className="text-red-500 font-bold italic">DeltaFosB</span> se acumula no núcleo accumbens, cimentando o vício em seu hardware biológico.
          </p>
        </div>

        {/* Cards de Análise Simplificados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[#0b101b] border border-white/5 rounded-[2.5rem] p-10 text-left group hover:border-red-500/30 transition-all duration-500 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20 group-hover:scale-110 transition-transform">
                <ArrowDown size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">Biomarcador #1</span>
                <h4 className="text-white font-bold text-xl tracking-tight">Downregulation</h4>
              </div>
            </div>
            <p className="text-gray-500 font-medium leading-relaxed mb-6">
              O cérebro reduz os receptores de dopamina para se proteger do excesso. O resultado é a apatia absoluta pela vida real.
            </p>
            <div className="bg-white/[0.02] rounded-2xl p-4 border border-white/5">
               <div className="flex justify-between items-center">
                  <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Dopamina Livre</span>
                  <span className="text-lg font-black text-red-500">-40%</span>
               </div>
            </div>
          </div>

          <div className="bg-[#0b101b] border border-white/5 rounded-[2.5rem] p-10 text-left group hover:border-purple-500/30 transition-all duration-500 shadow-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-purple-600/10 flex items-center justify-center text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform">
                <ArrowUp size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-purple-500 uppercase tracking-widest">Biomarcador #2</span>
                <h4 className="text-white font-bold text-xl tracking-tight">Hiperativação</h4>
              </div>
            </div>
            <p className="text-gray-500 font-medium leading-relaxed mb-6">
              Você passa a precisar de estímulos cada vez mais bizarros e extremos apenas para conseguir sentir o "normal".
            </p>
            <div className="bg-white/[0.02] rounded-2xl p-4 border border-white/5">
               <div className="flex justify-between items-center">
                  <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest">Delta FosB</span>
                  <span className="text-lg font-black text-green-500">+300%</span>
               </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-3xl mx-auto p-10 bg-white/[0.02] border-l-4 border-purple-600 rounded-r-[2.5rem] italic animate-in fade-in duration-1000 delay-500">
          <p className="text-gray-400 text-xl lg:text-2xl leading-relaxed font-light">
            "Não é falta de caráter. É um cérebro recondicionado para ignorar o sutil e caçar o extremo."
          </p>
          <div className="absolute top-4 right-8 opacity-5">
            <Target size={60} className="text-purple-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiologicalCost;
