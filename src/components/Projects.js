import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  const projects = [
    {
      title: 'Pehnava',
      description: 'An e-commerce store with modern UX. Features product filtering, cart management, wishlist functionality, and a smooth checkout experience.',
      tech: ['React.js', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '/images/pehnava.png',
      features: ['Product filtering', 'Cart system', 'Order tracking'],
      github: 'https://github.com/1manish123/Pehnava',
      live: 'https://pehnava-lyart.vercel.app/',
    },
    {
      title: 'Get-Together',
      description: 'A booking system that handles real-time availability, payment processing, and user authentication. Built to handle concurrent bookings with a reliable backend.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/images/get_together.png',
      features: ['Real-time availability', 'Secure payments', 'Email notifications'],
      github: 'https://github.com/1manish123/gettogether',
      live: 'https://get-together.tech/',
    },
    {
      title: 'Class-Connect',
      description: 'An educational platform that provides study materials, tracks progress, and enables peer collaboration. Focused on improving the learning experience for students.',
      tech: ['React.js', 'Express', 'Firebase', 'Tailwind'],
      image: '/images/class_connect.png',
      features: ['Resource library', 'Progress tracking', 'Peer collaboration'],
      github: 'https://github.com/1manish123/Class-Connect',
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-amber-600 dark:text-amber-400 mb-3">
            Selected Work
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-neutral-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="h-full flex flex-col rounded-2xl card-glass card-glass-hover transition-all duration-300 overflow-hidden"
                >
                  {/* Project Image */}
                  <div className="relative h-36 overflow-hidden bg-neutral-100 dark:bg-neutral-800/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-4">
                    <h3 className="text-lg font-heading font-bold text-neutral-900 dark:text-white mb-1.5">
                      {project.title}
                    </h3>

                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-3 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400"
                        >
                          <span className="w-1 h-1 rounded-full bg-amber-500" />
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-full text-xs font-medium border border-amber-200/50 dark:border-amber-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons — always visible */}
                    <div className="flex gap-3 mt-auto pt-4 border-t border-neutral-200/40 dark:border-white/5">
                      <motion.a
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity"
                      >
                        <FiGithub size={16} />
                        GitHub
                      </motion.a>

                      {project.live && (
                        <motion.a
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-amber-500/20 transition-shadow"
                        >
                          <FiExternalLink size={16} />
                          Live
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
