'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Replace these placeholders with your actual client logo paths
const clientLogos = [
  { id: 1, name: "Freshworks", color: "from-orange-400 to-red-500" },
  { id: 2, name: "Deloitte", color: "from-green-400 to-emerald-600" },
  { id: 3, name: "Pipedrive", color: "from-blue-400 to-indigo-600" },
  { id: 4, name: "Company D", color: "from-purple-400 to-pink-600" },
  { id: 5, name: "Company E", color: "from-yellow-400 to-orange-500" },
  { id: 6, name: "Company F", color: "from-cyan-400 to-blue-500" },
];

// Doubling the array to create a seamless infinite loop
const infiniteLogos = [...clientLogos, ...clientLogos];

export default function StylishClients() {
  return (
    <section className="py-24 bg-[#0a0118] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Clients</span>
        </motion.h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-8" />
        <p className="text-gray-400 max-w-xl mx-auto font-medium">
          Trusted by industry leaders and innovative companies worldwide.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group">
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0118] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0a0118] to-transparent z-10" />

        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          whileHover={{ transition: { duration: 50 } }} // Slows down on hover
        >
          {infiniteLogos.map((logo, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-center min-w-[250px] px-8"
            >
              <div className="relative w-full h-32 group/card">
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${logo.color} opacity-0 group-hover/card:opacity-20 blur-2xl transition-opacity duration-500`} />
                
                {/* Logo Card */}
                <div className="relative h-full w-full flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                   {/* Placeholder for Logo Image */}
                   <span className="text-white/40 font-bold group-hover/card:text-white transition-colors">
                     {logo.name}
                   </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Pagination Indicators (Visual only for style) */}
      <div className="flex justify-center gap-2 mt-12">
        <div className="w-2 h-2 rounded-full bg-purple-500" />
        <div className="w-2 h-2 rounded-full bg-white/20" />
      </div>
    </section>
  );
}