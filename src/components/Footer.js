import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Gradient divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent mb-8" />

        {/* Bottom info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-400 dark:text-neutral-500"
        >
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-amber-600 dark:text-amber-400">MKS</span>
            <span>•</span>
            <span>Full-stack developer & problem solver</span>
          </div>

          <p>© {currentYear} Manish Kumar Singh</p>

          <p className="text-xs">
            Built with React, Tailwind & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
