'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Users, Award, TrendingUp, Globe } from 'lucide-react';

// Reusable Counter Component
const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Spring config: mass, stiffness, damping
  const springValue = useSpring(0, {
    stiffness: 40,
    damping: 20,
    duration: 2000,
  });

  const displayValue = useTransform(springValue, (latest) => 
    Math.floor(latest).toLocaleString() + suffix
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const stats = [
  { label: "Happy Clients", value: 100, suffix: "+", icon: Users, color: "from-blue-400 to-indigo-500" },
  { label: "Projects Completed", value: 250, suffix: "+", icon: Award, color: "from-purple-400 to-pink-500" },
  { label: "Success Rate", value: 98, suffix: "%", icon: TrendingUp, color: "from-emerald-400 to-teal-500" },
  { label: "Countries Served", value: 20, suffix: "+", icon: Globe, color: "from-cyan-400 to-blue-500" },
];

export default function AnimatedStats() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#8e44ad] via-[#3498db] to-[#1abc9c]">
      {/* Decorative Floating Orbs */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 left-[10%] w-24 h-24 bg-white/20 rounded-full blur-xl" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0] }} 
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-10 right-[15%] w-32 h-32 bg-white/20 rounded-full blur-2xl" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Animated Icon Container */}
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-xl"
              >
                <item.icon className="w-8 h-8 text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all" />
                
                {/* Outer Pulse Effect */}
                <div className="absolute inset-0 rounded-full border border-white/5 animate-ping opacity-20" />
              </motion.div>

              {/* Number with Counter Animation */}
              <h3 className="text-4xl md:text-6xl font-black text-white mb-2 tracking-tighter drop-shadow-lg">
                <Counter value={item.value} suffix={item.suffix} />
              </h3>

              {/* Label */}
              <p className="text-sm md:text-base font-bold text-white/80 uppercase tracking-widest">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}