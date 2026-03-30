import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineSun, HiOutlineMoon, HiBars3, HiXMark } from 'react-icons/hi2';
import { FiDownload } from 'react-icons/fi';

export default function Header({ isDark, setIsDark }) {
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'];

  return (
    <>
      <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${scrolled ? 'top-3' : 'top-5'}`}>
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className={`flex items-center gap-1 px-2 py-2 rounded-full backdrop-blur-xl transition-all duration-500 ${
            scrolled
              ? 'bg-white/80 dark:bg-neutral-900/80 shadow-lg shadow-black/5 dark:shadow-black/30 border border-neutral-200/50 dark:border-neutral-700/50'
              : 'bg-white/50 dark:bg-neutral-900/40 border border-neutral-200/30 dark:border-neutral-700/30'
          }`}
        >
          {/* Logo */}
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 font-heading font-bold text-lg bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent"
          >
            MKS
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === item.toLowerCase()
                    ? 'text-amber-700 dark:text-amber-400'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                }`}
              >
                {activeSection === item.toLowerCase() && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-amber-100 dark:bg-amber-500/15 rounded-full"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{item}</span>
              </a>
            ))}
          </div>

          {/* CV Download */}
          <motion.a
            href="/Manish.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-500/10 rounded-full transition-colors"
          >
            <FiDownload className="text-sm" />
            CV
          </motion.a>

          {/* Dark Mode Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: 180 }}
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-amber-100 dark:hover:bg-amber-900/30 transition-colors"
          >
            {isDark ? (
              <HiOutlineSun className="text-lg text-amber-500" />
            ) : (
              <HiOutlineMoon className="text-lg text-amber-700" />
            )}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 transition-colors"
          >
            {mobileOpen ? (
              <HiXMark className="text-lg text-neutral-700 dark:text-neutral-300" />
            ) : (
              <HiBars3 className="text-lg text-neutral-700 dark:text-neutral-300" />
            )}
          </motion.button>
        </motion.nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-neutral-950/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.05 }}
                className={`text-2xl font-heading font-semibold transition-colors ${
                  activeSection === item.toLowerCase()
                    ? 'text-amber-600 dark:text-amber-400'
                    : 'text-neutral-700 dark:text-neutral-300'
                }`}
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="/Manish.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 mt-4 px-6 py-3 bg-amber-500 text-white rounded-full font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              <FiDownload /> Download CV
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
