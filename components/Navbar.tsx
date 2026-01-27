
import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import Button from './Button';

interface NavbarProps {
  onNavigate: (view: 'home' | 'blog') => void;
  currentView: 'home' | 'blog';
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sistema', view: 'home', hash: '#hero-simulator' },
    { name: 'Como funciona', view: 'home', hash: '#features-grid' },
    { name: 'Blog', view: 'blog', hash: '' },
    { name: 'FAQ', view: 'home', hash: '#faq' },
  ];

  const handleLinkClick = (view: any, hash: string) => {
    onNavigate(view);
    setIsOpen(false);
    if (hash && view === 'home') {
      setTimeout(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const openScanner = () => {
    window.open('https://scanner.desviciar.com.br', '_blank');
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 will-change-transform ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-2' 
          : 'bg-transparent py-4 lg:py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          
          <div 
            onClick={() => handleLinkClick('home', '')}
            className="flex items-center gap-3 lg:gap-4 cursor-pointer group shrink-0"
          >
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <div className="absolute inset-0 bg-purple-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="https://i.imgur.com/tlJh49d.png" 
                alt="Desviciar Logo" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              />
            </div>
            <span className="text-xl lg:text-2xl font-display font-black tracking-tighter text-white leading-none uppercase">
              DESVICIAR
            </span>
          </div>
          
          <div className="hidden lg:flex items-center bg-white/5 px-4 py-1.5 rounded-full border border-white/5 backdrop-blur-md gap-1">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => handleLinkClick(link.view, link.hash)}
                className={`text-[12px] font-bold transition-all px-4 py-1.5 rounded-full ${
                  (currentView === link.view && (link.view === 'blog' || !link.hash))
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-900/20' 
                    : 'text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <Button 
              variant="outline" 
              size="sm"
              className="border-red-500/30 text-red-400 hover:bg-red-500/10 hover:text-red-300 flex"
              onClick={openScanner}
            >
              <Zap className="w-4 h-4 mr-2" />
              SCANNER DE GATILHOS
            </Button>
            <a href="#" className="text-[12px] font-bold text-gray-400 hover:text-white transition-colors">
              Login
            </a>
            <Button 
              variant="dark-outline"
              className="h-10 px-6 text-[10px] font-black rounded-xl border-white/10 hover:border-purple-500/50"
            >
              Começar agora
            </Button>
          </div>

          <div className="flex md:hidden items-center gap-4">
             <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-2xl text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden fixed inset-0 top-[80px] bg-[#020408]/98 backdrop-blur-3xl transition-all duration-500 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <div className="px-8 py-12 flex flex-col h-full overflow-y-auto">
          <div className="space-y-4 mb-8">
            {navLinks.map((link) => (
               <button 
                 key={link.name}
                 onClick={() => handleLinkClick(link.view, link.hash)} 
                 className={`block w-full text-left text-4xl font-display font-black transition-colors py-4 border-b border-white/5 ${
                   currentView === link.view ? 'text-purple-400' : 'text-gray-500'
                 }`}
               >
                 {link.name}
               </button>
            ))}
          </div>
          
          <div className="flex flex-col gap-4 mt-auto pb-12">
            <Button 
              variant="outline" 
              fullWidth
              className="border-red-500/30 text-red-400 py-6"
              onClick={openScanner}
            >
              <Zap className="w-5 h-5 mr-2" />
              SCANNER DE GATILHOS
            </Button>
            <Button 
              variant="secondary"
              fullWidth
              className="py-6"
            >
              Começar agora
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
