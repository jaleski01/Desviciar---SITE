import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold text-white">DESVICIAR</div>
          
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Sobre</a>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
            <a href="#" className="hover:text-white transition-colors">Contato</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
          
          <div className="text-xs text-gray-600">
            © {new Date().getFullYear()} Desviciar. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;