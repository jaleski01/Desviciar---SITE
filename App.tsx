import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureGrid from './components/FeatureGrid';
import Testimonials from './components/Testimonials';
import AudioTestimony from './components/AudioTestimony';
import MissionMilestone from './components/MissionMilestone';
import ArchitectCard from './components/ArchitectCard';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import BlogPreview from './components/BlogPreview';
import BiologicalCost from './components/BiologicalCost';
import Footer from './components/Footer';
import BlogPostView from './components/BlogPostView';
import BlogPage from './components/BlogPage';
import Button from './components/Button';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'blog'>('home');
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  // Scroll to top when changing view
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-[#020408] text-white selection:bg-purple-600/40 font-sans antialiased pb-28 lg:pb-0">
      <Navbar onNavigate={(view) => {
        setCurrentView(view);
        setSelectedArticle(null);
      }} currentView={currentView} />
      
      <main>
        {currentView === 'home' ? (
          <>
            {/* 1. Hero: O Hook Visual (iPhone Simulator) */}
            <Hero />
            
            {/* 2. Mission: O Movimento e Meta Social */}
            <MissionMilestone />
            
            {/* 3. Features: O Sistema Tático (Bento Grid) */}
            <FeatureGrid />
            
            {/* 4. Architect: A Autoridade (João Scar) */}
            <ArchitectCard />
            
            {/* 5. Logic: O Custo Biológico (A Ciência) */}
            <BiologicalCost /> 
            
            {/* 6. Proof: Social (Reddit style) */}
            <Testimonials />
            
            {/* 7. Proof: Human (Audio Voice Notes) */}
            <AudioTestimony />
            
            {/* 8. Education: Blog/Recursos */}
            <BlogPreview onSelectArticle={setSelectedArticle} />
            
            {/* 9. Offer: Planos Elite */}
            <Pricing />
            
            {/* 10. Support: FAQ */}
            <FAQ />
          </>
        ) : (
          <BlogPage onSelectArticle={setSelectedArticle} />
        )}
      </main>

      <Footer />

      {/* Artigo View Modal */}
      {selectedArticle && (
        <BlogPostView 
          id={selectedArticle} 
          onClose={() => setSelectedArticle(null)} 
        />
      )}
      
      {/* Botão de Ação Flutuante Mobile */}
      <div className="fixed bottom-6 inset-x-6 lg:hidden z-[100] animate-in slide-in-from-bottom-12 duration-1000">
        <div className="absolute inset-0 bg-purple-600/30 blur-3xl rounded-full -z-10" />
        <Button 
          variant="primary" 
          fullWidth 
          className="shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/20 !text-[10px]"
          onClick={() => {
            const el = document.querySelector('#planos');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          COMEÇAR PROTOCOLO 90 DIAS
        </Button>
      </div>
    </div>
  );
}

export default App;