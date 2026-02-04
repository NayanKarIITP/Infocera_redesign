'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Car, ShoppingCart, GraduationCap, Landmark, 
  Gamepad2, Activity, Factory, Building2, 
  Store, Truck 
} from 'lucide-react';

const industries = [
  { name: "Automotive", icon: Car },
  { name: "Ecommerce", icon: ShoppingCart },
  { name: "Education", icon: GraduationCap },
  { name: "Finance", icon: Landmark },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Healthcare", icon: Activity },
  { name: "Manufacturing", icon: Factory },
  { name: "Real Estate", icon: Building2 },
  { name: "Retail", icon: Store },
  { name: "Logistics", icon: Truck },
];

// Added explicit Variants type to prevent build errors
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 12 
    }
  }
};

export default function IndustriesSection() {
  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background Decorative Elements - Updated to match modern dark theme */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight italic"
          >
            INDUSTRIES <span className="text-blue-500">WE SERVE</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-blue-500 mx-auto rounded-full mb-8"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium"
          >
            We deliver tailored solutions for a wide range of industries, helping businesses innovate and grow.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {industries.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderColor: "rgba(59, 130, 246, 0.3)" 
              }}
              className="group relative flex flex-col items-center justify-center p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl transition-all duration-300 cursor-default"
            >
              {/* Icon Container */}
              <div className="mb-4 p-4 rounded-2xl bg-white/5 text-blue-400 group-hover:scale-110 group-hover:text-blue-300 group-hover:bg-blue-500/10 transition-all duration-500">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              
              {/* Text */}
              <h3 className="text-white font-bold text-sm uppercase tracking-widest group-hover:text-blue-200 transition-colors">
                {item.name}
              </h3>

              {/* Decorative hover indicator */}
              <div className="absolute top-4 right-4 w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-500 group-hover:w-full rounded-b-2xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}