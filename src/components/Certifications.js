import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

export default function Certifications() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-black border-y border-neutral-200 dark:border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-black dark:bg-white"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group flex flex-col bg-white dark:bg-neutral-950 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-700 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              {/* Certificate Image */}
              <div className="relative h-48 bg-neutral-200 dark:bg-neutral-800 overflow-hidden flex items-center justify-center border-b border-neutral-200 dark:border-neutral-800 group/image">
                {cert.image.startsWith('http') || cert.image.startsWith('/') ? (
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
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                  <a
                    href={cert.link || cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full font-semibold text-sm transform translate-y-4 group-hover/image:translate-y-0 transition-all duration-300 hover:scale-105 shadow-xl"
                  >
                    View Certificate
                    <FiExternalLink />
                  </a>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-bold mb-3 text-black dark:text-white transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded text-xs font-semibold">
                    {cert.date}
                  </span>
                  <span className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                </div>

                <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-auto line-clamp-3 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
