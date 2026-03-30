import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiX } from 'react-icons/fi';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: 'Legacy Responsive Web Design V8',
      date: 'Dec 2, 2023',
      issuer: 'freeCodeCamp',
      description: 'Successfully completed the Developer Certification representing approximately 300 hours of coursework executing and solving web design and layout challenges.',
      image: '/images/cert_freecodecamp.png',
    },
    {
      title: 'Object Oriented Programming',
      date: 'Dec 2024',
      issuer: 'LPU & iamneo',
      description: 'Successfully completed 72 hours of comprehensive coursework exploring foundational principles and deep concepts of Object Oriented Programming methodologies.',
      image: '/images/cert_oop.png',
    },
    {
      title: 'Data Structures Algorithms',
      date: 'July 2025',
      issuer: 'CipherSchools',
      description: 'Successfully completed 70 hours of comprehensive training covering core data structures, advanced algorithms, and problem-solving techniques.',
      image: '/images/cert_dsa.png',
    },
  ];

  const rotations = [-3, 1, -2];

  return (
    <>
      <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm font-semibold tracking-[0.3em] uppercase text-amber-600 dark:text-amber-400 mb-3">
              Achievements
            </p>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-neutral-900 dark:text-white mb-4">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />
          </motion.div>

          {/* Polaroid-style tilted cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 40, rotate: rotations[index] }}
                whileInView={{ opacity: 1, y: 0, rotate: rotations[index] }}
                whileHover={{ rotate: 0, y: -10, scale: 1.03 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white dark:bg-surface-dark-card rounded-2xl overflow-hidden shadow-xl shadow-black/5 dark:shadow-black/30 border border-neutral-200/60 dark:border-white/10 hover:border-amber-300/50 dark:hover:border-amber-500/30 transition-all duration-500">
                  {/* Certificate Image - Polaroid style with padding */}
                  <div className="p-3 pb-0">
                    <div
                      className="relative h-48 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800/50 cursor-pointer group/image"
                      onClick={() => setSelectedCert(cert)}
                    >
                      {(cert.image.startsWith('http') || cert.image.startsWith('/')) ? (
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover group-hover/image:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div className="hidden absolute inset-0 items-center justify-center flex-col text-neutral-400 dark:text-neutral-500">
                        <span className="text-4xl mb-2">📜</span>
                        <span className="text-xs">{cert.issuer} Certificate</span>
                      </div>

                      {/* Hover Overlay - opens in modal now */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                        <span className="flex items-center gap-2 px-5 py-2 bg-amber-500 text-white rounded-full font-medium text-sm transform translate-y-4 group-hover/image:translate-y-0 transition-all duration-300 shadow-lg">
                          View Certificate
                          <FiExternalLink size={14} />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Content */}
                  <div className="p-5 pt-4">
                    <h3 className="text-base font-heading font-bold text-neutral-900 dark:text-white mb-2 line-clamp-2">
                      {cert.title}
                    </h3>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-full text-xs font-semibold border border-amber-200/50 dark:border-amber-500/20">
                        {cert.date}
                      </span>
                      <span className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                        {cert.issuer}
                      </span>
                    </div>

                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed line-clamp-3">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedCert(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              className="relative max-w-3xl w-full max-h-[85vh] bg-white dark:bg-surface-dark-card rounded-2xl overflow-hidden shadow-2xl border border-neutral-200/60 dark:border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors backdrop-blur-sm"
              >
                <FiX size={20} />
              </button>

              {/* Certificate Image */}
              <div className="w-full overflow-auto max-h-[70vh] bg-neutral-100 dark:bg-neutral-800/50">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Info bar */}
              <div className="p-4 sm:p-5 flex items-center justify-between gap-4 border-t border-neutral-200/60 dark:border-white/10">
                <div className="min-w-0">
                  <h4 className="font-heading font-bold text-neutral-900 dark:text-white text-sm sm:text-base truncate">
                    {selectedCert.title}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {selectedCert.issuer} • {selectedCert.date}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="flex-shrink-0 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-full text-sm font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
