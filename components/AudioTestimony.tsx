
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, Mic, CheckCheck } from 'lucide-react';

interface AudioRelato {
  id: number;
  user: string;
  duration: string;
  streak: string;
  date: string;
  avatar: string;
}

const RELATOS: AudioRelato[] = [
  {
    id: 1,
    user: "Ricardo M.",
    duration: "1:24",
    streak: "120 Dias",
    date: "Hoje, 14:20",
    avatar: "https://i.pravatar.cc/100?img=11"
  },
  {
    id: 2,
    user: "Carlos Eduardo",
    duration: "0:45",
    streak: "45 Dias",
    date: "Ontem, 09:15",
    avatar: "https://i.pravatar.cc/100?img=12"
  },
  {
    id: 3,
    user: "Felipe S.",
    duration: "2:10",
    streak: "90 Dias",
    date: "2 dias atrás",
    avatar: "https://i.pravatar.cc/100?img=13"
  }
];

const VoiceNote: React.FC<{ relato: AudioRelato }> = ({ relato }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = window.setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 50);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  return (
    <div className="group relative bg-[#0b101b] border border-white/5 rounded-[2.5rem] p-6 transition-all duration-500 hover:border-purple-500/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      <div className="flex items-start gap-4 mb-6">
        <div className="relative">
          <img src={relato.avatar} className="w-12 h-12 rounded-full border-2 border-purple-500/20 object-cover" alt={relato.user} />
          <div className="absolute -bottom-1 -right-1 bg-green-500 w-3 h-3 rounded-full border-2 border-[#0b101b]" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h4 className="text-sm font-black text-white">{relato.user}</h4>
            <span className="text-[10px] font-bold text-gray-600">{relato.date}</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
             <span className="text-[9px] font-black text-purple-400 uppercase tracking-widest">{relato.streak} Limpo</span>
             <CheckCheck size={12} className="text-blue-500" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 bg-black/40 rounded-2xl p-4 border border-white/5">
        <button 
          onClick={togglePlay}
          className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-900/40 hover:scale-105 active:scale-95 transition-all"
        >
          {isPlaying ? <Pause size={16} fill="white" /> : <Play size={16} fill="white" className="ml-0.5" />}
        </button>
        
        <div className="flex-1 space-y-2">
          <div className="h-1 w-full bg-white/5 rounded-full relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full bg-purple-500" style={{ width: `${progress}%` }} />
            {/* Fake waveform visualizer */}
            <div className="absolute inset-0 flex items-center justify-between px-1 opacity-20">
               {Array.from({length: 30}).map((_, i) => (
                 <div key={i} className="w-0.5 bg-white rounded-full" style={{ height: `${Math.random() * 80 + 20}%` }} />
               ))}
            </div>
          </div>
          <div className="flex justify-between text-[8px] font-black text-gray-500 uppercase tracking-widest">
            <span>{isPlaying ? 'Ouvindo...' : relato.duration}</span>
            <Volume2 size={10} />
          </div>
        </div>
      </div>
      
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/10">
           <Mic size={10} className="text-red-500 animate-pulse" />
           <span className="text-[7px] font-black text-gray-400 uppercase tracking-tighter">Audio Verificado</span>
        </div>
      </div>
    </div>
  );
};

const AudioTestimony: React.FC = () => {
  return (
    <section className="py-24 bg-[#020408] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-widest">
              <Mic size={12} />
              Audio Logs de Sucesso
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white leading-none tracking-tighter">
              Relatos <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">em Áudio.</span>
            </h2>
          </div>
          <p className="max-w-md text-gray-500 font-light text-lg leading-relaxed text-left md:text-right">
            Ouça as histórias de quem já esteve onde você está e hoje vive o protocolo da liberdade absoluta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RELATOS.map((relato) => (
            <VoiceNote key={relato.id} relato={relato} />
          ))}
        </div>

        <div className="mt-20 p-10 bg-white/[0.02] border border-white/5 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                 <Mic size={32} />
              </div>
              <div className="text-left">
                 <h4 className="text-xl font-bold text-white">Quer enviar seu relato?</h4>
                 <p className="text-gray-500 text-sm">Ajude outros homens a encontrarem o caminho.</p>
              </div>
           </div>
           <button className="px-10 py-5 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-xl">
              ENVIAR DEPOIMENTO
           </button>
        </div>
      </div>
    </section>
  );
};

export default AudioTestimony;
