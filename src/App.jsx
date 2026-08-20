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

function LandingPage({ darkMode, setDarkMode, openAuth, openDemo }) {
  const location = useLocation();

  // اسکرول خودکار به بخش مربوطه در صورت تغییر مسیر
  useEffect(() => {
    const sectionId = location.pathname.replace('/', '');
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="bg-[#FDFBF9] dark:bg-[#0A0A0C] text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        openAuth={openAuth}
      />

      <main>
        <Hero openAuth={() => openAuth('signup')} openDemo={openDemo} />
        <div id="features"><FeaturesBoard /></div>
        <div id="phases"><Phases /></div>
        <div id="pricing"><Pricing openAuth={() => openAuth('signup')} /></div>
      </main>

      <div id="contact">
        <Contact openAuth={() => openAuth('signup')} />
      </div>
    </div>
  );
}

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

  const handleOpenAuth = (type) => setAuthModal({ isOpen: true, type });

  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element={
            <LandingPage 
              darkMode={darkMode} 
              setDarkMode={setDarkMode} 
              openAuth={handleOpenAuth} 
              openDemo={() => setIsDemoOpen(true)} 
            />
          } 
        />
        <Route 
          path="/features" 
          element={
            <LandingPage 
              darkMode={darkMode} 
              setDarkMode={setDarkMode} 
              openAuth={handleOpenAuth} 
              openDemo={() => setIsDemoOpen(true)} 
            />
          } 
        />
        <Route 
          path="/phases" 
          element={
            <LandingPage 
              darkMode={darkMode} 
              setDarkMode={setDarkMode} 
              openAuth={handleOpenAuth} 
              openDemo={() => setIsDemoOpen(true)} 
            />
          } 
        />
        <Route 
          path="/pricing" 
          element={
            <LandingPage 
              darkMode={darkMode} 
              setDarkMode={setDarkMode} 
              openAuth={handleOpenAuth} 
              openDemo={() => setIsDemoOpen(true)} 
            />
          } 
        />
        <Route path="/board" element={<Board />} />
        <Route 
          path="*" 
          element={
            <LandingPage 
              darkMode={darkMode} 
              setDarkMode={setDarkMode} 
              openAuth={handleOpenAuth} 
              openDemo={() => setIsDemoOpen(true)} 
            />
          } 
        />
      </Routes>

      {authModal.isOpen && (
        <AuthModal 
          type={authModal.type} 
          onClose={() => setAuthModal({ isOpen: false, type: 'signup' })} 
        />
      )}

      {isDemoOpen && (
        <DemoModal onClose={() => setIsDemoOpen(false)} />
      )}
    </>
  );
}