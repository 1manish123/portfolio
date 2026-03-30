import './index.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`${isDark ? 'dark' : ''} relative min-h-screen bg-surface-light dark:bg-surface-dark text-neutral-900 dark:text-neutral-100 transition-colors duration-500 font-body`}>
      {/* Noise texture overlay */}
      <div className="fixed inset-0 pointer-events-none noise-overlay z-[1] opacity-30 dark:opacity-50" />
      
      {/* Ambient glow blobs */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/5 dark:bg-amber-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/5 dark:bg-orange-500/[0.02] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-[2]">
        <Header isDark={isDark} setIsDark={setIsDark} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
