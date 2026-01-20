
import React from 'react';
import { ShieldCheck, ArrowRight, Quote } from 'lucide-react';
import Button from './Button';

const ArchitectCard: React.FC = () => {
  // Imagem do João Scar (Close-up conforme solicitado)
  const architectImage = "https://scarx.com.br/images/scarterno2.jpeg"; 

  const scrollToPlans = () => {
    const el = document.querySelector('#planos');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-24 lg:py-48 bg-[#020408] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Card Principal - Estilo Quittrapp "The Architect" */}
        <div className="group relative bg-[#0b101b] border border-white/5 rounded-[3rem] lg:rounded-[4rem] overflow-hidden transition-all duration-1000 hover:border-purple-600/20 shadow-[0_80px_160px_-40px_rgba(0,0,0,1)]">
          <div className="flex flex-col lg:flex-row items-stretch">
            
            {/* Lado da Imagem - Foco na Autoridade */}
            <div className="lg:w-[45%] relative min-h-[450px] lg:min-h-[750px] overflow-hidden bg-black">
              <img 
                src={architectImage} 
                alt="João Scar" 
                className="absolute inset-0 w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b101b] via-transparent to-transparent opacity-60" />
              
              {/* Badge de Verificação Tática */}
              <div className="absolute bottom-10 left-10">
                <div className="px-5 py-3 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-900/40">
                    <ShieldCheck size={16} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Liderança ScarX</span>
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Protocolo Ativo</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado do Conteúdo - Tipografia de Elite */}
            <div className="lg:w-[55%] p-10 lg:p-24 flex flex-col justify-center text-left relative bg-[#0b101b]">
              {/* Ícone Quote de Background */}
              <div className="absolute top-20 right-20 opacity-[0.03] pointer-events-none">
                <Quote size={180} className="text-white" />
              </div>

              <div className="relative z-10">
                {/* Aba removida conforme solicitação */}
                
                <h3 className="text-5xl lg:text-[84px] font-display font-black text-white mb-10 leading-[0.85] tracking-tighter">
                  "Minha envergadura intelectual está aqui <br />
                  <span className="text-[#c084fc] italic font-medium">para te dar um novo padrão de vida.</span>"
                </h3>
                
                <p className="text-gray-400 text-lg lg:text-xl font-light leading-relaxed mb-12 max-w-xl">
                  Fundador da ScarX e Desviciar. Estrategista comportamental e treinador focado em alta performance. Como treinador do Peter Jordan, meu compromisso é projetar algo definitivo na sua jornada.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-10">
                  <Button 
                    variant="primary"
                    className="h-20 px-16 !bg-white !text-black font-black text-[11px] uppercase tracking-[0.3em] rounded-2xl hover:!bg-purple-600 hover:!text-white transition-all group flex items-center gap-4 shadow-[0_25px_50px_-12px_rgba(255,255,255,0.1)]"
                    onClick={scrollToPlans}
                  >
                    DESATIVAR VÍCIO <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                  </Button>
                  
                  <div className="flex flex-col">
                    <span className="text-[12px] font-black text-white uppercase tracking-[0.4em]">João Scar</span>
                    <span className="text-[9px] font-black text-gray-700 uppercase tracking-[0.4em] mt-1">Estrategista & Fundador</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorator Inferior */}
        <div className="mt-16 flex justify-center">
           <div className="flex items-center gap-3 text-gray-800">
              <div className="w-1 h-1 rounded-full bg-purple-600" />
              <span className="text-[8px] font-black uppercase tracking-[0.6em]">Acesso de Segurança Nível 5</span>
              <div className="w-1 h-1 rounded-full bg-purple-600" />
           </div>
        </div>

      </div>
    </section>
  );
};

export default ArchitectCard;
