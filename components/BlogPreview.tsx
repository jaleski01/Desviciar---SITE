
import React from 'react';
import { ShieldCheck, Headphones, PlayCircle, ChevronRight, BookOpen, Lock } from 'lucide-react';

interface BlogPreviewProps {
  onSelectArticle?: (id: string) => void;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ onSelectArticle }) => {
  const deliveryItems = [
    {
      id: 'coolidge',
      category: 'NEUROCIÊNCIA & COMPORTAMENTO',
      title: 'O Efeito Coolidge: A Biologia por trás do Loop Infinito',
      excerpt: 'Por que a saciedade é impossível na era digital e como reverter a busca biológica por novidade para curar o seu cérebro.',
      icon: BookOpen,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      isFree: true
    },
    {
      id: 'dessensibilizacao',
      category: 'BIO-HACKING',
      title: 'Dessensibilização Dopaminérgica',
      excerpt: 'A biologia por trás da perda de prazer em coisas simples e como reverter o processo.',
      icon: BookOpen,
      color: 'text-gray-400',
      bgColor: 'bg-white/5',
      isFree: true
    },
    {
      id: 'dns',
      category: 'BLOQUEIO TÉCNICO',
      title: 'O Escudo Invisível (DNS)',
      excerpt: 'Bloqueio de conteúdo adulto na raiz da rede para proteção automática.',
      icon: ShieldCheck,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      isFree: false
    },
    {
      id: 'libido',
      category: 'ARTIGO',
      title: 'O Mito da Libido',
      excerpt: 'Diferenciando vontade sexual real de fissura química no cérebro viciado.',
      icon: BookOpen,
      color: 'text-gray-400',
      bgColor: 'bg-white/5',
      isFree: true
    },
    {
      id: 'resgate',
      category: 'PODCAST EXCLUSIVO',
      title: 'Protocolo de Resgate: Dia 1',
      excerpt: 'O que fazer nas primeiras 24h de abstinência para evitar o colapso.',
      icon: Headphones,
      color: 'text-purple-400',
      bgColor: 'bg-purple-600/20',
      isFree: false
    },
    {
      id: 'huberman',
      category: 'VÍDEO AULA',
      title: 'Huberman: Controle de Impulso',
      excerpt: 'Ferramentas visuais baseadas em Stanford para parar a recaída.',
      icon: PlayCircle,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      isFree: false
    }
  ];

  return (
    <section id="blog" className="py-24 bg-[#020408] border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(circle_at_center,_rgba(168,85,247,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        
        <div className="text-left mb-14">
          <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-4 tracking-tighter leading-tight">
            O que você vai receber
          </h2>
          <p className="text-gray-500 font-medium text-base leading-relaxed max-w-md">
            Ferramentas táticas e conhecimento científico para sua liberdade. Clique para ler os artigos abertos.
          </p>
        </div>

        <div className="flex flex-col gap-4">
           {deliveryItems.map((item) => (
             <div 
               key={item.id} 
               onClick={() => item.isFree && onSelectArticle && onSelectArticle(item.id)}
               className={`group relative bg-[#0b101b]/60 border border-white/5 rounded-[2rem] p-5 flex items-center gap-6 cursor-pointer hover:border-purple-500/30 hover:bg-[#0b101b] transition-all duration-500 ${!item.isFree ? 'opacity-70 grayscale-[0.5]' : ''}`}
             >
                <div className={`shrink-0 w-16 h-16 rounded-2xl ${item.bgColor} border border-white/5 flex items-center justify-center ${item.color} group-hover:scale-105 group-hover:bg-purple-600/20 group-hover:text-white transition-all duration-500 shadow-lg relative`}>
                   <item.icon size={28} strokeWidth={1.5} />
                   {!item.isFree && (
                     <div className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center border-[3px] border-[#0b101b] shadow-xl">
                        <Lock size={10} className="text-white" />
                     </div>
                   )}
                </div>

                <div className="flex-1 min-w-0 py-1">
                   <div className="flex items-center gap-2 mb-1">
                     <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${item.isFree ? 'text-gray-600' : 'text-purple-500/80'} group-hover:text-purple-400 transition-colors`}>
                        {item.category}
                     </span>
                     {item.isFree ? (
                       <span className="text-[8px] font-black bg-white/5 text-gray-500 px-2 py-0.5 rounded-md border border-white/5 uppercase tracking-wider">GRATUITO</span>
                     ) : (
                       <span className="text-[8px] font-black bg-purple-600/10 text-purple-500 px-2 py-0.5 rounded-md border border-purple-500/20 uppercase tracking-wider">EXCLUSIVO</span>
                     )}
                   </div>
                   <h3 className="text-lg font-bold text-white mb-0.5 transition-colors truncate tracking-tight">
                      {item.title}
                   </h3>
                   <p className="text-sm text-gray-500 font-medium leading-snug truncate group-hover:text-gray-400 transition-colors">
                      {item.excerpt}
                   </p>
                </div>

                <div className="shrink-0 text-gray-800 group-hover:text-purple-400 transition-all duration-300 pr-2">
                   <ChevronRight size={22} strokeWidth={2.5} />
                </div>

                <div className="absolute inset-0 bg-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem] pointer-events-none" />
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
