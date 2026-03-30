import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiTrophy, HiSparkles, HiChartBar } from 'react-icons/hi2';

export default function Experience() {
  const experiences = [
    {
      type: 'Education',
      title: 'B.Tech Computer Science',
      organization: 'Currently 3rd Year',
      period: '2023 - ongoing',
      description: 'Pursuing a degree with focus on data structures, algorithms, web development, and databases. Building practical skills alongside theoretical knowledge.',
      icon: HiAcademicCap,
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      type: 'Focus',
      title: 'Data Structures & Algorithms',
      organization: 'Competitive Programming',
      period: 'Ongoing',
      description: 'Strong foundation in DSA using C++. Regular problem-solving to build better programming fundamentals and optimization skills.',
      icon: HiChartBar,
      gradient: 'from-emerald-500 to-teal-400',
    },
    {
      type: 'Development',
      title: 'Full-Stack Development',
      organization: 'Self-Directed Learning',
      period: 'Ongoing',
      description: 'Built multiple production-ready applications using React, Node.js, and various databases. Learned by doing, from frontend to backend architecture.',
      icon: HiSparkles,
      gradient: 'from-purple-500 to-pink-400',
    },
    {
      type: 'Skills',
      title: 'Soft Skills & Leadership',
      organization: 'Team Collaboration',
      period: 'Ongoing',
      description: 'Effective communicator and team player with a strong problem-solving mindset. Proven ability to collaborate actively, adapt quickly, and lead initiatives.',
      icon: HiTrophy,
      gradient: 'from-amber-500 to-orange-400',
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-amber-600 dark:text-amber-400 mb-3">
            My Journey
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-neutral-900 dark:text-white mb-4">
            Experience & Growth
          </h2>
          <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
            My journey as a developer, student, and learner. Building skills through education, achievements, and hands-on development.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-400 via-amber-500/50 to-transparent" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative flex items-start gap-6 ${
                    // On desktop, alternate left/right
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                      viewport={{ once: true }}
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-white shadow-lg`}
                    >
                      <IconComponent className="text-xl" />
                    </motion.div>
                  </div>

                  {/* Content card */}
                  <div className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="p-6 rounded-2xl card-glass card-glass-hover transition-all duration-300"
                    >
                      {/* Type badge */}
                      <span className={`inline-block px-3 py-1 bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent text-xs font-bold uppercase tracking-wider mb-3`}>
                        {exp.type}
                      </span>

                      <h3 className="text-xl font-heading font-bold text-neutral-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>

                      <p className="text-sm text-amber-600 dark:text-amber-400 font-medium mb-3">
                        {exp.period}
                      </p>

                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
