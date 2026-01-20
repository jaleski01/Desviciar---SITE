
import React, { useEffect, useRef, useState } from 'react';
/* Added ZapOff to imports to fix the reference error on line 255 */
import { ArrowLeft, Brain, Share2, Zap, ZapOff, AlertTriangle, TrendingUp, ShieldAlert, Timer, Target, ChevronRight, Wind, History, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

interface BlogPostViewProps {
  id: string;
  onClose: () => void;
}

const BlogPostView: React.FC<BlogPostViewProps> = ({ id, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const togglePlay = () => {
    if (videoRef.current && videoRef.current.readyState >= 3) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      // If no video source is available, just toggle UI state for demonstration
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const p = (videoRef.current.currentTime / (videoRef.current.duration || 1)) * 100;
      setProgress(p);
    }
  };

  if (id === 'coolidge') {
    return (
      <div className="fixed inset-0 z-[200] bg-[#020408] overflow-y-auto font-article selection:bg-purple-500/30">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full purple-glow pointer-events-none z-0" />
        
        {/* Nav Bar Premium */}
        <nav className="sticky top-0 w-full z-50 border-b border-white/5 bg-[#020408]/80 backdrop-blur-md">
          <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
            <button onClick={onClose} className="flex items-center gap-3 text-gray-400 hover:text-white transition-all group">
              <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:bg-white/5 transition-all">
                <ArrowLeft size={18} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest">Sair do Artigo</span>
            </button>
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-900/20">
                  <Zap size={16} className="text-white fill-white" />
               </div>
               <span className="font-display font-black text-lg tracking-tighter text-white">DESVICIAR</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="hidden md:block text-[9px] font-black text-gray-500 uppercase tracking-widest">Protocolo: V1.0.4</span>
              <button className="text-gray-400 hover:text-white"><Share2 size={18} /></button>
            </div>
          </div>
        </nav>

        <main className="relative z-10 pt-16 pb-40">
          {/* Hero Section */}
          <div className="max-w-5xl mx-auto px-6 mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[10px] font-black tracking-widest mb-10 uppercase">
              Masterclass em Vídeo • Nível de Acesso: Máximo
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-black mb-10 leading-[0.85] text-white tracking-tighter">
              Efeito Coolidge: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-300 to-purple-600">O Segredo do Vício</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light mb-12">
              Assista à explicação completa sobre o mecanismo que sequestra sua vontade e aprenda a desativá-lo.
            </p>
          </div>

          {/* MASTERCLASS VIDEO PLAYER */}
          <div className="max-w-5xl mx-auto px-6 mb-32 group">
            <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-white/10 bg-black shadow-[0_50px_100px_-20px_rgba(0,0,0,1)]">
              {/* Vídeo - Placeholder image used to prevent source errors */}
              <div className="absolute inset-0 bg-[#0b101b] flex items-center justify-center">
                 <img 
                    src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-full object-cover opacity-40 grayscale"
                    alt="Masterclass Background"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              </div>
              
              <video 
                ref={videoRef}
                onTimeUpdate={handleTimeUpdate}
                className="w-full h-full object-cover transition-all duration-700 relative z-10 hidden"
                src="" // Source removed to fix error, can be re-added when valid URL exists
                muted={isMuted}
                playsInline
              />

              {/* Scanlines / Noise Overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.05]" />
              
              {/* Botão Play Gigante (Center) */}
              {!isPlaying && (
                <div onClick={togglePlay} className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer">
                  <div className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.3)] hover:scale-110 transition-transform">
                    <Play size={32} fill="black" className="ml-1" />
                  </div>
                </div>
              )}

              {/* Custom Controls Bar */}
              <div className="absolute bottom-0 left-0 right-0 z-30 p-8 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full h-1 bg-white/10 rounded-full mb-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-full bg-purple-500 transition-all" style={{ width: `${progress}%` }} />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <button onClick={togglePlay} className="text-white hover:text-purple-400 transition-colors">
                      {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
                    </button>
                    <button onClick={() => setIsMuted(!isMuted)} className="text-white hover:text-purple-400 transition-colors">
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                  </div>
                  <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Masterclass: 04:58 MIN</div>
                  <button className="text-white hover:text-purple-400 transition-colors">
                    <Maximize2 size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
               <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Transmitindo em 4K Decriptado</span>
               </div>
               <div className="text-[9px] font-black text-gray-600 uppercase tracking-[0.4em]">Propriedade de desviciar.com.br</div>
            </div>
          </div>

          {/* Seção 01: Descompasso Evolutivo */}
          <div className="max-w-5xl mx-auto px-6 mb-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4 text-purple-500">
                  <History size={24} />
                  <h2 className="text-3xl font-display font-black text-white uppercase tracking-tighter">01. O Grande Descompasso</h2>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                    <h4 className="text-white font-bold mb-2">A Tese</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">Estamos rodando um <span className="text-purple-400">"software da Idade da Pedra"</span> em um ambiente digital de superabundância artificial.</p>
                  </div>
                  <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                    <h4 className="text-white font-bold mb-2">O Cenário</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">O cérebro evoluiu na escassez. O objetivo biológico era garantir sobrevivência através da novidade rara.</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#0b101b] border border-white/5 p-10 rounded-[3rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-10"><Zap size={100} /></div>
                <p className="text-2xl text-white font-light italic leading-relaxed relative z-10">
                  "O cérebro não sabe que os pixels na tela não são oportunidades reais. Ele reage quimicamente como se você tivesse ganado na <span className="text-purple-500 font-bold">loteria genética</span>."
                </p>
                <div className="mt-12 h-2 w-full bg-white/5 rounded-full relative">
                   <div className="absolute left-0 top-0 h-full w-[95%] bg-indigo-500/40 rounded-full" />
                   <div className="absolute right-0 top-[-20px] text-[10px] font-black text-purple-400">ERA DIGITAL (ABUNDÂNCIA)</div>
                   <div className="absolute left-0 top-[-20px] text-[10px] font-black text-gray-700">200.000 ANOS (ESCASSEZ)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Seção 02: O Mecanismo Central */}
          <div className="bg-white/[0.01] border-y border-white/5 py-32 mb-32">
            <div className="max-w-5xl mx-auto px-6">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6 tracking-tighter">O que é o Efeito Coolidge?</h2>
                <div className="inline-flex items-center gap-6 px-8 py-4 bg-white/5 rounded-2xl border border-white/10 italic text-gray-400">
                   "A dopamina reseta não pela recuperação física, mas pela novidade."
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="bg-[#0b101b] rounded-[3rem] p-10 border border-white/5 shadow-2xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-5"><TrendingUp size={120} /></div>
                   <div className="flex justify-between items-center mb-10">
                      <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Excitação vs Tempo</span>
                      <div className="flex gap-2">
                         <div className="w-2 h-2 rounded-full bg-indigo-500" />
                         <div className="w-2 h-2 rounded-full bg-red-500" />
                      </div>
                   </div>
                   <div className="h-64 flex items-end justify-between gap-4 relative">
                      <div className="flex-1 flex flex-col items-center justify-end h-full">
                         <div className="w-full bg-indigo-500/20 border-t-2 border-indigo-400 rounded-t-lg h-[60%] animate-in slide-in-from-bottom duration-1000" />
                         <span className="text-[8px] font-black text-gray-600 mt-4 uppercase">Parceira A</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-end h-full">
                         <div className="w-full bg-red-500/10 border-t-2 border-red-500/30 rounded-t-lg h-[15%] opacity-50" />
                         <span className="text-[8px] font-black text-gray-600 mt-4 uppercase tracking-tighter">Saciedade</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center justify-end h-full">
                         <div className="w-full bg-purple-600 border-t-2 border-purple-400 rounded-t-lg h-[90%] shadow-[0_0_40px_rgba(147,51,234,0.4)] animate-in slide-in-from-bottom duration-1000 delay-500" />
                         <span className="text-[8px] font-black text-purple-400 mt-4 uppercase">Parceira B (Novidade)</span>
                      </div>
                   </div>
                </div>

                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                      <Target size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Definição Evolutiva</h4>
                      <p className="text-gray-500 leading-relaxed">Fenômeno biológico onde a introdução de um novo parceiro renova automaticamente a excitação, eliminando o período refratário.</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                      <Brain size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Loop Infinito Digital</h4>
                      <p className="text-gray-500 leading-relaxed">A pornografia de alta velocidade nos prende em um ciclo infinito de novidade artificial que o cérebro nunca processa como "saciedade".</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Soluções Táticas Final */}
          <div className="max-w-5xl mx-auto px-6">
            <div className="mt-24 p-12 bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/30 rounded-[3rem] text-center shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-10 opacity-5"><Zap size={200} /></div>
               <h3 className="text-3xl md:text-5xl font-display font-black text-white mb-6 tracking-tighter">Pronto para Reconfigurar?</h3>
               <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">Não lute contra sua biologia; use as ferramentas táticas do Desviciar para redirecionar seu hardware.</p>
               <button onClick={onClose} className="px-12 py-6 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-[0_20px_50px_rgba(255,255,255,0.2)]">
                  INICIAR PROTOCOLO 90 DIAS
               </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[200] bg-[#020408] p-10 flex flex-col items-center justify-center text-center">
       <button onClick={onClose} className="absolute top-10 left-10 text-gray-500 hover:text-white flex items-center gap-2">
          <ArrowLeft size={20} /> Voltar
       </button>
       {/* Added ZapOff to imports from lucide-react above */}
       <ZapOff size={60} className="text-purple-500 mb-8 animate-pulse" />
       <h1 className="text-4xl font-display font-black text-white mb-4 uppercase tracking-tighter">Relatório em Processamento</h1>
    </div>
  );
};

export default BlogPostView;
