import React from 'react';
import { ACHIEVEMENTS } from '../constants';

const Achievements: React.FC = () => {
  return (
    <section className="py-24 bg-[#05080f] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-brand-500/5 blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
          Sua Evolução em <span className="text-brand-500">Orbes</span>
        </h2>
        <p className="text-gray-400 mb-20 text-lg font-light">Desbloqueie conquistas conforme sua jornada avança.</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8">
          {ACHIEVEMENTS.map((orb, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className="relative w-20 h-20 mb-4 transition-all duration-500 group-hover:-translate-y-2">
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${orb.color} opacity-20 blur-2xl rounded-full group-hover:opacity-60 transition-opacity`} />
                
                {/* The Orb */}
                <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${orb.color} shadow-inner flex items-center justify-center border border-white/10 overflow-hidden`}>
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20 blur-md rounded-t-full" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 bg-white/40 blur-sm rounded-full" />
                </div>
              </div>
              
              <h3 className="text-white font-bold text-sm mb-1">{orb.name}</h3>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest font-black">{orb.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
