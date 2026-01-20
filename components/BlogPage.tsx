
import React from 'react';
import { BookOpen, Clock, ChevronRight, Zap, TrendingUp, ShieldCheck, Brain, PlayCircle, Headphones } from 'lucide-react';

interface BlogPageProps {
  onSelectArticle: (id: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onSelectArticle }) => {
  const articles = [
    {
      id: 'coolidge',
      category: 'NEUROCIÊNCIA',
      type: 'MASTERCLASS',
      title: 'O Efeito Coolidge: A Biologia por trás do Loop Infinito',
      excerpt: 'Uma análise profunda sobre como a novidade visual sequestra seu sistema de recompensa e o que fazer para reverter.',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800',
      isMasterclass: true,
      icon: Brain
    },
    {
      id: 'dessensibilizacao',
      category: 'BIO-HACKING',
      type: 'ARTIGO',
      title: 'Dessensibilização Dopaminérgica',
      excerpt: 'Por que coisas normais perderam a graça? Entenda o processo de downregulation dos receptores D2.',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800',
      icon: TrendingUp
    },
    {
      id: 'libido',
      category: 'ARTIGO',
      type: 'PSICOLOGIA',
      title: 'O Mito da Libido e a Fissura Química',
      excerpt: 'Como diferenciar o desejo sexual saudável da urgência química causada pelo vício.',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      icon: ShieldCheck
    },
    {
      id: 'huberman',
      category: 'VÍDEO AULA',
      type: 'RECURSO PREMIUM',
      title: 'Huberman: Controle de Impulso',
      excerpt: 'Ferramentas baseadas em Stanford para gerenciar a urgência no calor do momento.',
      readTime: '15 min',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      icon: PlayCircle
    },
    {
      id: 'resgate',
      category: 'AUDIO',
      type: 'PODCAST',
      title: 'Protocolo de Resgate: Primeiras 24h',
      excerpt: 'O que fazer imediatamente após uma queda para evitar o efeito bola de neve.',
      readTime: '20 min',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800',
      icon: Headphones
    }
  ];

  return (
    <div className="pt-32 lg:pt-48 pb-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header da Página */}
        <div className="mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-purple-600/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-widest">
            Relatórios Estratégicos
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-display font-black text-white leading-[0.85] tracking-tighter mb-10">
            Base de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-white">Conhecimento.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-2xl">
            A ciência como sua principal arma. Explore nossos protocolos e Masterclasses sobre neurociência e comportamento.
          </p>
        </div>

        {/* Categorias / Filtros */}
        <div className="flex flex-wrap gap-3 mb-16">
          {['Tudo', 'Neurociência', 'Bio-hacking', 'Psicologia', 'Estratégia'].map((cat, i) => (
            <button 
              key={cat} 
              className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                i === 0 ? 'bg-purple-600 border-purple-500 text-white' : 'bg-white/5 border-white/10 text-gray-500 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Artigo em Destaque (Coolidge) */}
        <div 
          onClick={() => onSelectArticle('coolidge')}
          className="group relative bg-[#0b101b] rounded-[3.5rem] border border-white/5 overflow-hidden mb-20 cursor-pointer hover:border-purple-500/30 transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-8">
                 <div className="px-3 py-1 bg-purple-600 text-white text-[9px] font-black uppercase tracking-widest rounded-md">MASTERCLASS</div>
                 <div className="text-[10px] font-black text-gray-600 uppercase tracking-widest flex items-center gap-2">
                   <Clock size={12} /> 12 MIN DE LEITURA
                 </div>
              </div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-8 tracking-tighter leading-[0.9]">
                O Efeito Coolidge: A Biologia por trás do Loop Infinito.
              </h2>
              <p className="text-xl text-gray-500 font-light leading-relaxed mb-12">
                Descubra como a pornografia digital sequestra circuitos de recompensa ancestrais e o plano tático para retomar o controle.
              </p>
              <button className="flex items-center gap-4 text-[11px] font-black text-purple-400 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                LER MASTERCLASS AGORA <ChevronRight size={16} />
              </button>
            </div>
            <div className="relative h-[400px] lg:h-auto overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                alt="Brain visualization"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0b101b] via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b101b] via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </div>

        {/* Grid de Artigos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {articles.filter(a => a.id !== 'coolidge').map((article) => (
            <div 
              key={article.id}
              onClick={() => onSelectArticle(article.id)}
              className="group bg-[#0b101b] rounded-[2.5rem] border border-white/5 overflow-hidden cursor-pointer hover:border-purple-500/30 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={article.image} 
                  className="w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                  alt={article.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b101b] to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="w-10 h-10 rounded-xl bg-purple-600/20 backdrop-blur-md border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <article.icon size={20} />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{article.category}</span>
                  <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest flex items-center gap-2">
                    <Clock size={10} /> {article.readTime}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-black text-white mb-4 tracking-tighter group-hover:text-purple-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 font-light text-sm leading-relaxed mb-8">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-black text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Ler relatório <ChevronRight size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter / CTA Final do Blog */}
        <div className="mt-32 p-12 lg:p-20 bg-white/[0.02] border border-white/5 rounded-[4rem] text-center relative overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-5">
             <Zap size={200} />
           </div>
           <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6 tracking-tighter">Mantenha-se Blindado.</h2>
           <p className="text-gray-500 max-w-xl mx-auto mb-12 font-light text-lg">
             Receba relatórios de inteligência diretamente no seu email. Sem spam, apenas ciência e estratégia pura.
           </p>
           <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
             <input 
               type="email" 
               placeholder="Seu melhor email"
               className="flex-1 px-8 py-5 bg-black border border-white/10 rounded-2xl text-white text-sm focus:outline-none focus:border-purple-500 transition-all"
             />
             <button className="px-10 py-5 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-2xl hover:scale-105 transition-transform">
               INSCREVER
             </button>
           </div>
        </div>

      </div>
    </div>
  );
};

export default BlogPage;
