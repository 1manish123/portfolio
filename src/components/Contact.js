import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoUrl = `mailto:manishsingh10838@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/1manish123',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/hereismanish/',
      color: '#0A66C2',
    },
    {
      name: 'X',
      icon: FaXTwitter,
      url: 'https://x.com/Pachauri__HaRsh',
    },
  ];

  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'manishsingh10838@gmail.com',
      link: 'mailto:manishsingh10838@gmail.com',
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91 7970612646',
      link: 'tel:+917970612646',
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'India',
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Ambient background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-amber-500/[0.04] dark:bg-amber-500/[0.02] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-amber-600 dark:text-amber-400 mb-3">
            Say Hello
          </p>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-neutral-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
            Have an exciting project or opportunity? I'd love to hear from you. Let's create something amazing together.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.a
                  key={method.title}
                  href={method.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-4 p-4 rounded-xl card-glass card-glass-hover transition-all duration-300 cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-amber-500/10 flex items-center justify-center text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
                    <IconComponent className="text-lg" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                      {method.title}
                    </p>
                    <p className="text-sm font-semibold text-neutral-900 dark:text-white truncate">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-4">
                Follow Me
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4, scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-11 h-11 rounded-xl card-glass flex items-center justify-center text-neutral-600 dark:text-neutral-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                      title={social.name}
                    >
                      <IconComponent className="text-lg" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="p-6 sm:p-8 rounded-2xl card-glass relative overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-400/10 to-transparent rounded-bl-[60px]" />

              <h3 className="text-xl font-heading font-bold mb-6 text-neutral-900 dark:text-white relative">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5 relative">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 bg-neutral-50 dark:bg-white/5 border-2 rounded-xl transition-all text-neutral-900 dark:text-white placeholder-neutral-300 dark:placeholder-neutral-600 focus:outline-none ${
                      focusedField === 'name'
                        ? 'border-amber-400 dark:border-amber-500 shadow-lg shadow-amber-500/10'
                        : 'border-neutral-200/60 dark:border-white/10'
                    }`}
                    placeholder="Manish Kumar Singh"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full px-4 py-3 bg-neutral-50 dark:bg-white/5 border-2 rounded-xl transition-all text-neutral-900 dark:text-white placeholder-neutral-300 dark:placeholder-neutral-600 focus:outline-none ${
                      focusedField === 'email'
                        ? 'border-amber-400 dark:border-amber-500 shadow-lg shadow-amber-500/10'
                        : 'border-neutral-200/60 dark:border-white/10'
                    }`}
                    placeholder="you@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows="4"
                    className={`w-full px-4 py-3 bg-neutral-50 dark:bg-white/5 border-2 rounded-xl transition-all text-neutral-900 dark:text-white placeholder-neutral-300 dark:placeholder-neutral-600 focus:outline-none resize-none ${
                      focusedField === 'message'
                        ? 'border-amber-400 dark:border-amber-500 shadow-lg shadow-amber-500/10'
                        : 'border-neutral-200/60 dark:border-white/10'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FiSend className="text-sm" />
                  Send Message
                </motion.button>

                <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center mt-3">
                  I'll get back to you as soon as possible.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
