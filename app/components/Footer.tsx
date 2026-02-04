'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Phone, Mail, MapPin, ChevronRight, 
  Facebook, Twitter, Linkedin, Instagram,
  ArrowUpRight
} from 'lucide-react';

const footerLinks = [
  {
    title: "Services",
    links: ["Online Marketing", "Web Design & Development", "Mobile Application", "Software", "Creative Design", "Consultant", "Data Science", "Testing"]
  },
  {
    title: "Products",
    links: ["CloudSync Pro", "SecureGuard Enterprise", "AI Analytics Suite", "MobileFlow Builder", "DataVault Pro", "DevOps Accelerator", "TeamConnect Hub", "BusinessIntel Dashboard"]
  },
  {
    title: "Company",
    links: ["About Us", "Team", "Culture", "Careers", "Portfolio", "Contact", "Privacy Policy", "Terms of Service"]
  }
];

export default function ModernFooter() {
  // Explicitly typed variants to pass TypeScript validation on Vercel
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        staggerChildren: 0.1, 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { ease: "easeOut" as const } 
    }
  };

  return (
    <footer className="relative bg-[#050505] pt-24 pb-12 overflow-hidden text-white font-sans border-t border-white/5">
      {/* Background Aura - Decorative Blur Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand & Identity Column */}
          <div className="lg:col-span-4">
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-4xl font-black tracking-tighter italic flex items-center gap-2">
                INFOCERA
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              </h2>
              <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-blue-400 mt-1">
                Seamless Connections
              </p>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-gray-400 font-medium leading-relaxed mb-10 max-w-sm">
              Leading IT services provider delivering <span className="text-white">innovative technology solutions</span> that drive business growth and digital transformation.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-6">
              <a href="tel:+918882824948" className="flex items-center gap-4 group hover:text-blue-400 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="font-bold">+91 8882824948</span>
              </a>
              <a href="mailto:info@infocera.in" className="flex items-center gap-4 group hover:text-purple-400 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-purple-500/10 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="font-bold">info@infocera.in</span>
              </a>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <span className="text-sm text-gray-400 font-medium leading-tight">
                  First Floor, L29-L34, Block L, Connaught Place, New Delhi - 110001
                </span>
              </div>
            </motion.div>
          </div>

          {/* Link Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerLinks.map((section, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <h4 className="text-xs font-black uppercase tracking-widest text-white mb-8 border-l-2 border-blue-500 pl-4">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <motion.a 
                        href="#"
                        whileHover={{ x: 8 }}
                        className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors group"
                      >
                        <ChevronRight size={14} className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">
            © 2026 INFOCERA TECHNOLOGIES. ALL RIGHTS RESERVED.
          </div>

          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                className="w-10 h-10 rounded-full flex items-center justify-center border border-white/10 transition-all"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-black uppercase text-[10px] tracking-widest rounded-full"
          >
            Work with us <ArrowUpRight size={14} />
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  );
}