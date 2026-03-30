import React from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNodedotjs, SiCplusplus, SiTailwindcss, SiMongodb, SiExpress, SiJavascript } from 'react-icons/si';

export default function Skills() {
  const allSkills = [
    {
      name: 'C++',
      icon: SiCplusplus,
      color: '#00599C',
      description: 'Data structures, algorithms, and competitive programming',
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
      color: '#F7DF1E',
      description: 'Core language for web development',
    },
    {
      name: 'React',
      icon: SiReact,
      color: '#61DAFB',
      description: 'Building interactive interfaces with hooks and state management',
    },
    {
      name: 'Node.js',
      icon: SiNodedotjs,
      color: '#339933',
      description: 'Server-side development with Express and REST APIs',
    },
    {
      name: 'Express',
      icon: SiExpress,
      color: '#888888',
      description: 'Minimal and flexible web framework for Node.js',
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      color: '#47A248',
      description: 'NoSQL database for flexible data storage',
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: '#06B6D4',
      description: 'Modern styling for responsive designs',
    },
  ];

  // Duplicate for seamless marquee
  const marqueeSkills = [...allSkills, ...allSkills];

  return (
    <section id="skills" className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-amber-600 dark:text-amber-400 mb-3">
            What I Work With
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-neutral-900 dark:text-white mb-4">
            Skills & Tech
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />
        </motion.div>
      </div>

      {/* Marquee Track */}
      <div className="relative">
        {/* Gradient fades on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-surface-light dark:from-surface-dark to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-surface-light dark:from-surface-dark to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex gap-6 animate-marquee hover:[animation-play-state:paused]"
          style={{ width: 'max-content' }}
        >
          {marqueeSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={`${skill.name}-${index}`}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative flex-shrink-0 w-64 p-6 rounded-2xl card-glass card-glass-hover transition-all duration-300 cursor-default"
              >
                {/* Glow border on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                  style={{ boxShadow: `0 0 30px ${skill.color}15, inset 0 0 30px ${skill.color}05` }} 
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {IconComponent && <IconComponent className="text-2xl" style={{ color: skill.color }} />}
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-neutral-900 dark:text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Static Grid for mobile */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:hidden">
        <div className="grid grid-cols-2 gap-4">
          {allSkills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl card-glass text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-100 dark:bg-white/5 flex items-center justify-center mx-auto mb-3">
                  {IconComponent && <IconComponent className="text-xl" style={{ color: skill.color }} />}
                </div>
                <h3 className="text-sm font-heading font-semibold text-neutral-900 dark:text-white">
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
