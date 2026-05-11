'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@architectureportfolio.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Location', value: 'New York, USA' },
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-4">
              ARCH.
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Premium architecture studio crafting exceptional spaces and innovative designs for a better tomorrow.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Achievements'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">SERVICES</h4>
            <ul className="space-y-2">
              {['Residential', 'Commercial', 'Interior Design', 'Landscape'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4">CONTACT</h4>
            <ul className="space-y-3">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex items-start gap-2">
                  <item.icon className="w-4 h-4 text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" />
                  <span className="text-sm text-slate-600 dark:text-slate-400">{item.value}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800 my-8"></div>

        {/* Social Links & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {currentYear} Architecture Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
