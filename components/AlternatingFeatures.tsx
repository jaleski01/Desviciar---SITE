
import React from 'react';
import { PRODUCT_PILLARS } from '../constants';
// Added missing ChevronRight import
import { LayoutDashboard, Users, BookOpen, BarChart3, ShieldCheck, Zap, MessageSquare, Play, Heart, Signal, Wifi, Battery, ChevronRight } from 'lucide-react';

const AlternatingFeatures: React.FC = () => {
  // Mockup da Barra de Status para todos os celulares
  const renderStatusBar = () => (
    <div className="h-10 flex items-center justify-between px-8 pt-4">
      <span className="text-[10px] text-white/50 font-bold">9:41</span>
      <div className="flex items-center gap-1.5 text-white/30">
        <Signal size={10} />
        <Wifi size={10} />
        <Battery size={14} />
      </div>
    </div>
  );

  // Função para renderizar o mockup interno de cada celular baseado no ID
  const renderPhoneContent = (id: string) => {
    switch (id) {
      case 'dashboard':
        return (
          <div className="p-6 h-full flex flex-col gap-4 animate-in fade-in duration-1000">
            <div className="flex justify-between items-center mb-4">
              <div className="h-3 w-20 bg-white/10 rounded-full" />
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"><Zap size={14} className="text-purple-500" /></div>
            </div>
            
            <div className="bg-[#0b101b] border border-white/5 rounded-[2rem] p-6 shadow-inner">
              <span className="text-[8px] font-black uppercase tracking-widest text-gray-500 block mb-2">Contador Ativo</span>
              <span className="text-3xl font-display font-black text-white tracking-tighter">14 Dias</span>
              <div className="mt-4 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-square bg-white/5 rounded-3xl border border-white/5 p-4 flex flex-col justify-end">
                <Heart size={16} className="text-red-400 mb-2" />
                <div className="h-1.5 w-8 bg-white/20 rounded-full" />
              </div>
              <div className="aspect-square bg-white/5 rounded-3xl border border-white/5 p-4 flex flex-col justify-end">
                <BarChart3 size={16} className="text-indigo-400 mb-2" />
                <div className="h-1.5 w-12 bg-white/20 rounded-full" />
              </div>
            </div>

            <div className="mt-auto h-12 w-full bg-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <div className="h-1.5 w-1/3 bg-white/30 rounded-full" />
            </div>
          </div>
        );
      case 'community':
        return (
          <div className="p-6 h-full flex flex-col gap-6 animate-in fade-in duration-1000">
            <div className="flex items-center justify-between">
               <div className="h-4 w-28 bg-white/10 rounded-full" />
               <Users size={18} className="text-indigo-400" />
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex gap-3 items-start animate-in slide-in-from-left duration-500" style={{ animationDelay: `${i*150}ms` }}>
                  <div className={`w-10 h-10 rounded-2xl shrink-0 ${i === 1 ? 'bg-purple-600' : 'bg-indigo-600/20'}`} />
                  <div className="flex-1 bg-[#0b101b] rounded-2xl rounded-tl-none p-4 border border-white/5 shadow-sm">
                    <div className="h-2 w-16 bg-white/10 rounded-full mb-3" />
                    <div className="space-y-2">
                       <div className="h-1.5 w-full bg-white/5 rounded-full" />
                       <div className="h-1.5 w-2/3 bg-white/5 rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto flex gap-3">
               <div className="flex-1 h-12 bg-white/5 rounded-2xl border border-white/10" />
               <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                 <MessageSquare size={16} className="text-white" />
               </div>
            </div>
          </div>
        );
      case 'learn':
        return (
          <div className="p-6 h-full flex flex-col gap-5 animate-in fade-in duration-1000">
            <div className="h-4 w-32 bg-white/10 rounded-full mb-2" />
            
            <div className="aspect-video bg-[#0b101b] rounded-[1.5rem] border border-white/10 flex items-center justify-center relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent" />
               <Play size={28} className="text-white fill-white shadow-2xl relative z-10" />
               <div className="absolute bottom-3 left-3 right-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                 <div className="h-full w-2/5 bg-purple-500" />
               </div>
            </div>

            <div className="space-y-4 pt-2">
              {[1, 2].map(i => (
                <div key={i} className="flex gap-4 items-center p-3 bg-white/5 rounded-2xl border border-white/5">
                   <div className="w-10 h-10 bg-indigo-500/10 rounded-xl border border-indigo-500/20" />
                   <div className="flex-1 space-y-2">
                      <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                      <div className="h-1.5 w-1/2 bg-white/5 rounded-full" />
                   </div>
                </div>
              ))}
            </div>

            <div className="mt-auto p-4 bg-purple-600/10 border border-purple-500/20 rounded-2xl">
               <div className="flex justify-between items-center text-[8px] font-black uppercase text-purple-400 tracking-widest mb-3">
                  <span>Próxima Lição</span>
                  <ChevronRight size={10} />
               </div>
               <div className="h-2 w-2/3 bg-white/20 rounded-full" />
            </div>
          </div>
        );
      case 'progress':
        return (
          <div className="p-6 h-full flex flex-col gap-6 animate-in fade-in duration-1000">
            <div className="flex items-center justify-between">
               <div className="flex items-center gap-2">
                  <BarChart3 size={20} className="text-indigo-400" />
                  <span className="text-[10px] font-black uppercase text-white tracking-widest">Estatísticas</span>
               </div>
               <div className="h-4 w-12 bg-white/10 rounded-full" />
            </div>

            <div className="flex-1 flex items-end justify-between gap-2 px-1">
               {[40, 70, 55, 95, 65, 85, 100].map((h, i) => (
                 <div key={i} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-indigo-600/20 border-t border-indigo-500/30 rounded-t-lg transition-all duration-1000 delay-300" style={{ height: `${h}%` }}>
                       <div className="w-full h-1/3 bg-gradient-to-b from-indigo-500/40 to-transparent" />
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full" />
                 </div>
               ))}
            </div>

            <div className="grid grid-cols-1 gap-3 mt-4">
               <div className="p-5 bg-[#0b101b] rounded-2xl border border-white/5 flex items-center justify-between">
                 <div className="flex flex-col gap-2">
                    <div className="h-1.5 w-16 bg-white/10 rounded-full" />
                    <div className="text-xl font-display font-black text-white">96%</div>
                 </div>
                 <div className="w-10 h-10 rounded-full border-4 border-purple-500/20 border-t-purple-500 rotate-45" />
               </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="features" className="py-32 bg-[#020408] overflow-hidden space-y-48 lg:space-y-64">
      {PRODUCT_PILLARS.map((pillar, idx) => (
        <div key={pillar.id} className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className={`flex flex-col ${pillar.align === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-40`}>
            
            {/* Visual Side: 3D Angled Phone */}
            <div className="flex-1 w-full relative group">
               <div className={`absolute inset-0 blur-[120px] rounded-full transition-colors duration-1000 ${pillar.id === 'learn' ? 'bg-indigo-600/5 group-hover:bg-indigo-600/10' : 'bg-purple-600/5 group-hover:bg-purple-600/10'}`} />
               <div className="relative flex items-center justify-center py-20">
                  {/* Phone Mockup Case */}
                  <div className={`relative w-[280px] sm:w-[340px] aspect-[9/19] bg-[#020408] rounded-[3.5rem] border-[10px] border-[#1a1a1a] shadow-[0_60px_100px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-1000 ${pillar.align === 'right' ? 'rotate-[-10deg] group-hover:rotate-[-5deg]' : 'rotate-[10deg] group-hover:rotate-[5deg]'}`}>
                     <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent pointer-events-none" />
                     {/* iOS Details */}
                     {renderStatusBar()}
                     
                     {/* Dynamic Content based on Pillar ID */}
                     <div className="h-full w-full">
                        {renderPhoneContent(pillar.id)}
                     </div>
                  </div>
               </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 text-center lg:text-left">
               <h2 className="text-5xl sm:text-7xl font-display font-black text-white mb-10 leading-[0.9] tracking-tighter">
                  {pillar.title}
               </h2>
               <p className="text-xl sm:text-2xl text-gray-500 font-light leading-relaxed max-w-xl">
                  {pillar.description}
               </p>
               <div className="mt-12 flex justify-center lg:justify-start">
                  <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:text-purple-400 transition-colors group">
                    Explorar Funcionalidade
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 transition-all">
                       <ChevronRight size={14} />
                    </div>
                  </button>
               </div>
            </div>

          </div>
        </div>
      ))}
    </section>
  );
};

export default AlternatingFeatures;
