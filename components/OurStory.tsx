import React from 'react';
import { Quote } from 'lucide-react';

const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-32 bg-[#020408] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-900/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Visual Side */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80" 
                alt="Reunião estratégica" 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="inline-flex items-center gap-2 bg-brand-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg mb-4">
                    <Quote size={16} className="fill-current" />
                    <span className="text-xs font-bold uppercase tracking-wider">Manifesto</span>
                 </div>
                 <p className="text-xl md:text-2xl font-display font-bold text-white leading-tight">
                   "Não é fraqueza. É falta de estratégia."
                 </p>
              </div>
            </div>
            
            {/* Decor Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-500/10 blur-[50px] rounded-full" />
          </div>

          {/* Content Side */}
          <div>
             <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
               Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-200 to-brand-500">Guerra Silenciosa.</span>
             </h2>
             
             <div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
               <p>
                 <strong className="text-white font-bold">O problema não é você.</strong> É o algoritmo.
               </p>
               <p>
                 Criamos o Desviciar porque cansamos de ver homens brilhantes perderem sua vitalidade, seus casamentos e sua ambição para uma tela brilhante. A pornografia moderna não é "natural". É uma superestimulação projetada por engenheiros de dados para sequestrar seu sistema de dopamina.
               </p>
               <p>
                 Tentativas baseadas apenas em "força de vontade" falham porque você está lutando com uma faca contra um tanque de guerra.
               </p>
               <p>
                 João Scar (Estrategista) e Grace Tomal (Psicanalista) uniram forças para criar algo que não existia: <strong className="text-white">um sistema tático.</strong> Unimos a profundidade da terapia com a agressividade da tecnologia de bloqueio para te dar a única coisa que importa: vantagem injusta contra o vício.
               </p>
             </div>

             <div className="mt-10 pt-10 border-t border-white/5 flex gap-8">
                <div>
                   <div className="text-3xl font-bold text-white font-display">2018</div>
                   <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Início do Projeto</div>
                </div>
                <div>
                   <div className="text-3xl font-bold text-white font-display">1.2k+</div>
                   <div className="text-sm text-gray-500 uppercase tracking-wider mt-1">Alunos Livres</div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;