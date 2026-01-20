
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { MessageSquare, ArrowBigUp, Share2, MoreHorizontal } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 lg:py-40 bg-[#020408] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-7xl lg:text-[100px] font-display font-black text-white tracking-tighter leading-none mb-8">
            Vozes da <br /><span className="text-purple-500">Comunidade.</span>
          </h2>
          <p className="text-xl text-gray-500 font-light max-w-xl mx-auto">Relatos reais de homens que pararam de lutar sozinhos e assumiram o controle.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-[#0b101b] border border-white/5 rounded-[2.5rem] p-10 hover:border-purple-500/30 transition-all duration-500 flex flex-col group">
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center text-xs text-white font-black">
                  r/
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-black text-white">{t.user}</span>
                  <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">{t.streakDay} dias limpo</span>
                </div>
                <button className="ml-auto text-gray-700 hover:text-white transition-colors"><MoreHorizontal size={20} /></button>
              </div>

              <h3 className="text-2xl font-display font-black text-white mb-4 leading-tight group-hover:text-purple-400 transition-colors">{t.title}</h3>
              <p className="text-base text-gray-400 leading-relaxed mb-8 flex-1 font-light italic">
                "{t.content}"
              </p>

              <div className="flex items-center gap-6 text-gray-600 pt-8 border-t border-white/5">
                 <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-[10px] font-black text-gray-400 group-hover:text-purple-400 transition-colors">
                    <ArrowBigUp size={16} />
                    <span>84</span>
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
                    <MessageSquare size={14} />
                    <span>24</span>
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ml-auto">
                    <Share2 size={14} />
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
