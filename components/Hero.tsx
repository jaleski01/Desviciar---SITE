
import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import { 
  X, Brain, Loader2, Activity, Library, UserCheck, 
  Smartphone, Home, Moon, BookOpen, Users, LayoutGrid,
  Zap, ChevronRight, BarChart3, Heart, Star,
  Signal, Wifi, Battery, User, AlertCircle, LogOut, ChevronDown, Award,
  Wind, Droplets, Flame, ShieldAlert, CheckCircle2, TrendingUp, Timer, Binary, Target, Volume2, VolumeX
} from 'lucide-react';

const Hero: React.FC = () => {
  const [simStep, setSimStep] = useState<'dashboard' | 'debug' | 'loading' | 'response' | 'profile' | 'evolution' | 'breathing'>('dashboard');
  const [selectedTrigger, setSelectedTrigger] = useState('');
  const [breathPhase, setBreathPhase] = useState<'Inspire...' | 'Segure...' | 'Expire...'>('Inspire...');
  const [isAudioStarted, setIsAudioStarted] = useState(false);
  
  const audioCtxRef = useRef<AudioContext | null>(null);
  const noiseSourceRef = useRef<AudioBufferSourceNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const scrollToPlans = () => {
    const el = document.querySelector('#planos');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const startWhiteNoise = async () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      const bufferSize = 2 * ctx.sampleRate;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 1000;

      const gain = ctx.createGain();
      gain.gain.value = 0.05;
      gainNodeRef.current = gain;

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      
      whiteNoise.start();
      noiseSourceRef.current = whiteNoise;
      setIsAudioStarted(true);

      // Safari requirement: resume context on click
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }
    } catch (e) {
      console.error("Audio initialization blocked or failed:", e);
    }
  };

  const stopWhiteNoise = () => {
    if (noiseSourceRef.current) {
      try {
        noiseSourceRef.current.stop();
      } catch (e) {}
      noiseSourceRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.close();
      audioCtxRef.current = null;
    }
    setIsAudioStarted(false);
  };

  useEffect(() => {
    let interval: number | undefined;
    if (simStep === 'breathing') {
      interval = window.setInterval(() => {
        setBreathPhase(prev => {
          if (prev === 'Inspire...') return 'Segure...';
          if (prev === 'Segure...') return 'Expire...';
          return 'Inspire...';
        });
      }, 4000);
    }

    return () => {
      if (interval) clearInterval(interval);
      stopWhiteNoise();
    };
  }, [simStep]);

  const triggers = [
    { label: "Estresse", icon: Zap },
    { label: "Tédio", icon: Smartphone },
    { label: "Solidão", icon: Moon },
    { label: "Ansiedade", icon: AlertCircle },
  ];

  const powerRituals = [
    { label: "Hacking de Dopamina", icon: Binary },
    { label: "Check-in de Foco", icon: Target },
    { label: "Treino Estruturado", icon: Activity },
    { label: "Protocolo de Sono", icon: Moon },
  ];

  const navItems = [
    { id: 'dashboard', icon: LayoutGrid, label: 'Painel' },
    { id: 'evolution', icon: Activity, label: 'Vida' },
    { id: 'base', icon: BookOpen, label: 'Base' },
    { id: 'profile', icon: User, label: 'Perfil' }
  ];

  const handleTriggerSelect = (t: string) => {
    setSelectedTrigger(t);
    setSimStep('breathing');
  };

  return (
    <section 
      id="hero-simulator" 
      className="relative pt-24 pb-12 lg:pt-48 lg:pb-32 overflow-hidden bg-[#020408]"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.08) 0%, transparent 70%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 animate-in fade-in duration-1000 shadow-lg backdrop-blur-md">
            <span className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-5 h-5 rounded-full border border-[#020408] object-cover" alt="user" />
              ))}
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.1em] text-white/80">58.4k+ utilizando o sistema</span>
          </div>

          <h1 className="text-[54px] sm:text-7xl lg:text-[110px] font-display font-black tracking-tighter text-white mb-6 leading-[0.85] animate-in slide-in-from-bottom-8 duration-700">
            Retome a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">liberdade.</span>
          </h1>
          
          <p className="max-w-xl text-lg sm:text-xl lg:text-2xl text-gray-400 mb-10 font-light leading-relaxed animate-in fade-in duration-1000 delay-300">
            Hackeie sua química cerebral e vença o vício em 90 dias com o protocolo definitivo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full max-w-sm sm:max-w-none animate-in fade-in duration-1000 delay-500">
            <Button 
              variant="dark-outline" 
              className="w-full sm:w-auto h-16 sm:h-18 px-10 rounded-2xl text-[10px] bg-purple-600/10 border-purple-500/30 text-white hover:bg-purple-600/20 shadow-[0_20px_40px_rgba(168,85,247,0.1)] uppercase"
              onClick={scrollToPlans}
            >
              COMEÇAR PROTOCOLO 90 DIAS
            </Button>
            <Button 
              variant="dark-outline" 
              className="w-full sm:w-auto h-16 sm:h-18 px-10 rounded-2xl text-[10px] border-white/10 hover:bg-white/5"
            >
              ASSISTIR DEMO
            </Button>
          </div>

          <div className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[320px] animate-in slide-in-from-bottom-16 duration-1000 delay-700">
            <div className="relative z-20 aspect-[9/18.5] bg-[#020408] rounded-[3rem] sm:rounded-[3.5rem] border-[8px] sm:border-[12px] border-[#1a1a1a] shadow-[0_60px_120px_-30px_rgba(0,0,0,1)] overflow-hidden">
               
               <div className={`absolute inset-0 z-0 transition-colors duration-1000 ${simStep === 'breathing' ? 'bg-[#000000]' : 'bg-[#04040a]'}`} />

               <div className="relative z-10 w-full h-full flex flex-col">
                  <div className="h-10 flex items-center justify-between px-8 pt-4">
                     <span className="text-[10px] text-white font-bold">9:41</span>
                     <div className="w-16 h-5 bg-black rounded-full" />
                     <div className="flex items-center gap-1.5 text-white/60">
                        <Signal size={8} />
                        <Wifi size={8} />
                        <Battery size={12} />
                     </div>
                  </div>

                  <div className="flex-1 flex flex-col overflow-hidden relative">
                     {simStep === 'dashboard' && (
                       <div className="p-5 sm:p-7 animate-in fade-in slide-in-from-bottom-6 duration-700 h-full flex flex-col fill-mode-both">
                          <div className="flex justify-between items-center mb-6">
                             <div className="flex items-center gap-2">
                                <img src="https://i.imgur.com/tlJh49d.png" className="w-6 h-6 object-contain" alt="mini logo" />
                                <span className="text-[10px] font-black text-white tracking-widest uppercase">DESVICIAR</span>
                             </div>
                             <div className="px-2 py-0.5 bg-green-500/10 border border-green-500/20 rounded-full text-[7px] font-black tracking-widest text-green-400 uppercase">SISTEMA ATIVO</div>
                          </div>
                          
                          <div className="bg-white/5 backdrop-blur-md rounded-[1.5rem] p-5 border border-white/10 mb-5 text-left">
                             <span className="text-[8px] text-gray-500 font-black uppercase tracking-widest block mb-1">STREAK ATUAL</span>
                             <div className="text-2xl font-display font-black text-white mb-3">14 Dias</div>
                             <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full w-2/3 bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                             </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3 mb-4">
                             <div className="p-3 bg-white/5 rounded-2xl border border-white/5 text-left">
                                <Activity size={14} className="text-indigo-400 mb-1" />
                                <div className="text-base font-black text-white">84%</div>
                                <div className="text-[6px] text-gray-500 uppercase tracking-widest font-black">Recuperação</div>
                             </div>
                             <div className="p-3 bg-white/5 rounded-2xl border border-white/5 text-left">
                                <Heart size={14} className="text-purple-400 mb-1" />
                                <div className="text-base font-black text-white">Alta</div>
                                <div className="text-[6px] text-gray-500 uppercase tracking-widest font-black">Energia</div>
                             </div>
                          </div>

                          <div className="flex-1 flex flex-col items-center justify-center py-6">
                             <div className="relative group">
                                <div className="absolute inset-0 bg-purple-600/10 blur-[40px] rounded-full scale-125" />
                                <div className="relative z-10 p-2 rounded-full border border-white/5 bg-black/40 backdrop-blur-sm shadow-2xl">
                                   <img 
                                     src="https://i.imgur.com/tlJh49d.png" 
                                     className="w-24 h-24 object-contain drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]" 
                                     alt="Logo" 
                                   />
                                </div>
                             </div>
                             
                             <div className="mt-8 text-center">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-2">
                                   <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                                   <span className="text-[7px] font-black text-white/60 uppercase tracking-[0.2em]">PROTOCOLADO</span>
                                </div>
                                <p className="text-[8px] font-black text-gray-700 uppercase tracking-[0.4em]">90 DIAS DE FOCO</p>
                             </div>
                          </div>

                          <button onClick={() => setSimStep('debug')} className="mt-auto w-full py-4 bg-purple-600 text-white font-black text-[10px] uppercase tracking-[0.3em] rounded-xl shadow-[0_15px_30px_rgba(147,51,234,0.3)] active:scale-95 transition-all">
                             Scanner de Gatilhos
                          </button>
                       </div>
                     )}

                     {simStep === 'debug' && (
                       <div className="animate-in fade-in slide-in-from-bottom-8 duration-500 h-full flex flex-col bg-black overflow-hidden relative">
                          <div className="flex-1 overflow-y-auto scrollbar-hide p-5 sm:p-7">
                            <div className="flex flex-col items-start mb-8 text-left">
                               <div className="flex items-center gap-2 mb-4">
                                  <div className="w-2 h-2 rounded-full bg-green-500" />
                                  <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Scanner Ativo</span>
                               </div>
                               <div className="flex gap-4 items-baseline">
                                  <div className="flex flex-col items-center">
                                     <span className="text-3xl font-display font-black text-white leading-none">14</span>
                                     <span className="text-[6px] font-black text-gray-600 uppercase tracking-widest mt-1">Dias</span>
                                  </div>
                               </div>
                            </div>

                            <div className="mb-8 text-left">
                               <div className="flex items-center gap-2 mb-5">
                                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                  <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">IDENTIFICAR RISCO</span>
                               </div>
                               <div className="grid grid-cols-2 gap-2.5">
                                  {triggers.map((t) => (
                                    <button 
                                      key={t.label} 
                                      onClick={() => handleTriggerSelect(t.label)}
                                      className="p-4 bg-[#1a1c22] border border-white/5 rounded-2xl text-center active:scale-95 transition-all group"
                                    >
                                       <span className="text-[9px] font-black text-white uppercase tracking-widest group-hover:text-purple-400 transition-colors">{t.label}</span>
                                    </button>
                                  ))}
                               </div>
                            </div>

                            <div className="mb-8 text-left">
                               <div className="flex items-center gap-2 mb-5">
                                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                  <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">PROTOCOLO DIÁRIO</span>
                               </div>
                               <div className="space-y-3">
                                  {powerRituals.map((ritual, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-white/[0.03] border border-white/5 rounded-2xl group cursor-pointer hover:bg-white/[0.05] transition-all">
                                       <div className="flex items-center gap-3">
                                          <div className="w-8 h-8 rounded-lg bg-purple-600/10 flex items-center justify-center text-purple-400">
                                             <ritual.icon size={16} />
                                          </div>
                                          <span className="text-[10px] font-bold text-white uppercase tracking-tighter">{ritual.label}</span>
                                       </div>
                                       <CheckCircle2 size={16} className="text-gray-800 group-hover:text-purple-500 transition-colors" />
                                    </div>
                                  ))}
                               </div>
                            </div>
                          </div>

                          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/95 to-transparent flex flex-col gap-3 z-30">
                             <button onClick={scrollToPlans} className="w-full py-5 bg-black border border-white/10 text-white font-black text-[11px] uppercase tracking-[0.2em] rounded-full active:scale-95 transition-all shadow-2xl flex items-center justify-center">
                                COMEÇAR PROTOCOLO 90 DIAS
                             </button>
                          </div>
                       </div>
                     )}

                     {simStep === 'breathing' && (
                       <div className="p-5 sm:p-7 animate-in fade-in duration-700 h-full flex flex-col items-center justify-center bg-black">
                          <div className="relative w-48 h-48 flex items-center justify-center mb-16">
                             <div className={`absolute inset-0 border-2 border-purple-400 rounded-full transition-all duration-[4000ms] ease-in-out ${breathPhase === 'Inspire...' ? 'scale-110 opacity-100' : breathPhase === 'Segure...' ? 'scale-110 opacity-60' : 'scale-90 opacity-40'}`} />
                             <span className="text-xl font-display font-black text-purple-400 tracking-[0.2em] uppercase animate-pulse">
                                {breathPhase === 'Inspire...' ? 'INSPIRE...' : breathPhase === 'Segure...' ? 'SEGURE...' : 'EXPIRE...'}
                             </span>
                          </div>
                          
                          <div className="flex flex-col items-center gap-4">
                            {!isAudioStarted ? (
                              <button 
                                onClick={startWhiteNoise}
                                className="flex items-center gap-3 px-6 py-3 bg-purple-600/20 border border-purple-500/30 rounded-xl text-purple-400 text-[10px] font-black uppercase tracking-widest hover:bg-purple-600/30 transition-all"
                              >
                                <Volume2 size={14} /> Ativar Som SOS
                              </button>
                            ) : (
                              <button 
                                onClick={stopWhiteNoise}
                                className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-gray-500 text-[10px] font-black uppercase tracking-widest"
                              >
                                <VolumeX size={14} /> Mutar
                              </button>
                            )}
                            <p className="text-[9px] text-gray-500 font-medium text-center uppercase tracking-widest">Protocolo SOS Ativo.</p>
                          </div>

                          <button onClick={() => setSimStep('debug')} className="mt-8 text-[8px] font-black text-gray-600 uppercase tracking-widest hover:text-white transition-colors">Voltar ao Scanner</button>
                       </div>
                     )}

                     {simStep === 'evolution' && (
                       <div className="p-5 sm:p-7 animate-in fade-in slide-in-from-bottom-8 duration-500 h-full flex flex-col bg-black overflow-y-auto scrollbar-hide">
                          <h3 className="text-lg font-display font-black text-white mb-1 text-left">Vida Recuperada</h3>
                          <p className="text-[9px] text-gray-500 font-medium mb-6 text-left">Ganhos em 14 dias de protocolo</p>

                          <div className="grid grid-cols-2 gap-3 mb-8">
                             <div className="p-5 bg-white/[0.03] border border-white/5 rounded-3xl text-center">
                                <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-2 block">Dopamina</span>
                                <div className="text-3xl font-display font-black text-green-500">+84%</div>
                             </div>
                             <div className="p-5 bg-white/[0.03] border border-white/5 rounded-3xl text-center">
                                <span className="text-[8px] font-black text-gray-600 uppercase tracking-widest mb-2 block">Clareza</span>
                                <div className="text-3xl font-display font-black text-white">Alta</div>
                             </div>
                          </div>
                       </div>
                     )}

                     {simStep === 'profile' && (
                       <div className="animate-in fade-in slide-in-from-bottom-12 duration-700 h-full flex flex-col fill-mode-both bg-black/40 overflow-y-auto scrollbar-hide">
                          <div className="p-5 sm:p-6 pb-20">
                             <div className="bg-red-950/20 border border-red-500/20 rounded-3xl p-6 mb-8 text-left">
                                <div className="flex items-center gap-2 mb-4">
                                   <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                   <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.2em]">Zona de Perigo</span>
                                </div>
                                <p className="text-[11px] text-gray-400 font-medium mb-8 leading-relaxed">
                                   Se você caiu, seja honesto. A recuperação exige verdade absoluta. Zere o contador para reiniciar com honra.
                                </p>
                                <button className="w-full py-4 bg-red-600 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl shadow-xl shadow-red-900/20 active:scale-95 transition-all">
                                   Registrar Recaída
                                </button>
                             </div>
                          </div>
                       </div>
                     )}
                  </div>

                  <div className={`h-20 shrink-0 transition-colors duration-1000 ${simStep === 'breathing' || simStep === 'debug' ? 'bg-black/95' : 'bg-black/80'} backdrop-blur-xl border-t border-white/5 flex justify-around items-center px-4`}>
                     {navItems.map((item) => {
                        const isActive = (item.id === 'dashboard' && simStep === 'dashboard') || 
                                       (item.id === 'profile' && simStep === 'profile') ||
                                       (item.id === 'evolution' && (simStep === 'evolution' || simStep === 'profile'));
                        return (
                          <div 
                            key={item.id} 
                            className="group relative flex flex-col items-center cursor-pointer" 
                            onClick={() => {
                               if (item.id === 'dashboard') setSimStep('dashboard');
                               if (item.id === 'profile') setSimStep('profile');
                               if (item.id === 'evolution') setSimStep('evolution');
                            }}
                          >
                             <div className={`p-2.5 rounded-xl transition-all duration-500 ${isActive ? 'bg-purple-600/20 text-purple-400 scale-110' : 'text-white/30 group-hover:text-white group-hover:bg-white/5'}`}>
                                <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                             </div>
                             <span className={`text-[6px] font-black uppercase tracking-widest mt-1 transition-colors ${isActive ? 'text-purple-400' : 'text-transparent group-hover:text-white/40'}`}>
                                {item.label}
                             </span>
                          </div>
                        );
                     })}
                  </div>
               </div>
            </div>
            <div className="absolute -inset-10 bg-purple-600/5 blur-[100px] -z-10 rounded-full opacity-100 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
