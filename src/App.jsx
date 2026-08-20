import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesBoard from './components/FeaturesBoard';
import Phases from './components/Phases';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import AuthModal from './components/AuthModal';
import DemoModal from './components/DemoModal';
import Board from './pages/Board';

function MainLayout() {
  const [darkMode, setDarkMode] = useState(false);
  const [authModal, setAuthModal] = useState({ isOpen: false, type: 'signup' });
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // اسکرول هوشمند به بخش‌ها حتی اگر آدرس مرورگر تغییر کرد
  useEffect(() => {
    const id = location.pathname.replace('/', '');
    if (id) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
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
        <div id="features"><FeaturesBoard /></div>
        <div id="phases"><Phases /></div>
        <div id="pricing"><Pricing openAuth={() => setAuthModal({ isOpen: true, type: 'signup' })} /></div>
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
}

export default function App() {
  return (
    <Routes>
      <Route path="/board" element={<Board />} />
      {/* تمام آدرس‌های دیگر (شامل /pricing و /features) به لندینگ هدایت می‌شوند */}
      <Route path="*" element={<MainLayout />} />
    </Routes>
  );
}