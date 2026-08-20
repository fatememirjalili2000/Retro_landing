import   { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesBoard from './components/FeaturesBoard';
import Phases from './components/Phases';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import AuthModal from './components/AuthModal';
import DemoModal from './components/DemoModal';
import Board from './pages/Board';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [authModal, setAuthModal] = useState({ isOpen: false, type: 'signup' });
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const LandingPage = (
    <div className="bg-[#FDFBF9] dark:bg-[#0A0A0C] text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        openAuth={(type) => setAuthModal({ isOpen: true, type })}
      />

      <main>
        <Hero 
          openAuth={() => setAuthModal({ isOpen: true, type: 'signup' })} 
          openDemo={() => setIsDemoOpen(true)} 
        />
        <div id="features">
          <FeaturesBoard />
        </div>
        <Phases />
        <div id="pricing">
          <Pricing openAuth={() => setAuthModal({ isOpen: true, type: 'signup' })} />
        </div>
      </main>

      <div id="contact">
        <Contact openAuth={() => setAuthModal({ isOpen: true, type: 'signup' })} />
      </div>

      {authModal.isOpen && (
        <AuthModal 
          type={authModal.type} 
          onClose={() => setAuthModal({ isOpen: false, type: 'signup' })} 
        />
      )}

      {isDemoOpen && (
        <DemoModal onClose={() => setIsDemoOpen(false)} />
      )}
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={LandingPage} />
      <Route path="/board" element={<Board />} />
      <Route path="*" element={LandingPage} />
    </Routes>
  );
}