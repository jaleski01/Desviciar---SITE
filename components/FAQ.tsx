
import React from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#020408] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.05)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 relative z-10">
        
        <div className="flex flex-col items-center text-center mb-24 sm:mb-32">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1a1a1a] border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-12 shadow-2xl">
             Base de Conhecimento & Suporte
          </div>
          <h2 className="text-6xl md:text-8xl lg:text-[100px] font-display font-black text-[#c084fc] tracking-tighter leading-none mb-4">
            Perguntas <br />Frequentes
          </h2>
          <p className="text-gray-500 font-light text-xl">Tudo o que você precisa saber sobre o protocolo e sua privacidade.</p>
        </div>
        
        <div className="space-y-24 max-w-5xl mx-auto">
          {FAQS.map((item, index) => (
            <div key={index} className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="flex items-start gap-6">
                <span className="text-purple-500/30 font-display font-black text-2xl lg:text-4xl shrink-0 mt-1">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-4xl font-display font-black text-white leading-tight tracking-tight">
                    {item.question}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
