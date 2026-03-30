import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight } from 'react-icons/hi2';

export default function About() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nameLetters = "Manish Kumar Singh".split('');

  return (
    <section id="about" className="min-h-screen flex items-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 relative"
          >
            {/* Vertical amber accent line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -left-6 top-0 w-0.5 h-full bg-gradient-to-b from-amber-400 via-amber-500 to-transparent origin-top hidden lg:block"
            />

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm font-semibold tracking-[0.3em] uppercase text-amber-600 dark:text-amber-400"
            >
              Full-Stack Developer
            </motion.p>

            {/* Name with staggered letter animation */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold leading-[1.1]">
              {nameLetters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.03, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block text-neutral-900 dark:text-white"
                  style={{ whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </h1>

            {/* Animated amber line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
            />

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-lg">
                I'm a Computer Science student passionate about building full-stack web applications. I transform ideas into functional, beautiful digital experiences using modern technologies.
              </p>
              <p className="text-base text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-lg">
                Specializing in React, Node.js, and everything in between. I believe in writing clean code, solving complex problems, and creating products that truly matter.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="group px-7 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-shadow"
              >
                View My Work
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="px-7 py-3.5 border-2 border-amber-400/50 dark:border-amber-500/30 text-amber-700 dark:text-amber-400 rounded-full font-semibold hover:bg-amber-50 dark:hover:bg-amber-500/10 transition-all"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end relative"
          >
            {/* Floating amber geometric shape */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -z-10 w-80 h-80 sm:w-96 sm:h-96"
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
              <div className="w-full h-full rounded-[40px] border-2 border-amber-400/20 dark:border-amber-500/10" />
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute -z-10 w-72 h-72 sm:w-80 sm:h-80"
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
              <div className="w-full h-full rounded-[30px] border border-orange-400/15 dark:border-orange-500/10" />
            </motion.div>

            {/* Profile image */}
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-[2rem] overflow-hidden border-2 border-amber-200/50 dark:border-amber-500/20 shadow-2xl shadow-amber-500/10 dark:shadow-amber-500/5 bg-surface-light-card dark:bg-surface-dark-card">
                <picture>
                  <source srcSet="/images/dp.png" type="image/png" />
                  <img
                    src="/images/dp.png"
                    alt="Profile of Manish Kumar Singh"
                    className="w-full h-full object-cover transition-transform duration-700 scale-[1.15] hover:scale-[1.25] object-[center_60%]"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
              </div>

              {/* Glowing dot */}
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        {!hasScrolled && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex flex-col items-center mt-16 gap-3"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-8 rounded-full border-2 border-amber-400/40 dark:border-amber-500/30 flex justify-center pt-1.5"
            >
              <motion.div
                animate={{ opacity: [0, 1, 0], y: [0, 6, 12] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-1 bg-amber-500 rounded-full"
              />
            </motion.div>
            <p className="text-xs text-neutral-400 dark:text-neutral-500 tracking-widest uppercase">Scroll</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
