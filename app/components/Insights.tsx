'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const insights = [
  {
    category: "TECHNOLOGY",
    date: "17-06-2025",
    title: "Logistics For Leaders: Smart Strategies For Vehicle Relocation",
    desc: "For business leaders and fleet managers, vehicle relocation is a recurring challenge that requires business intelligence and strategic planning...",
    tags: ["Logistics", "Vehicle", "Strategy"],
    image: "/logistics.jpg",
    // Triple color combo: Blue -> Purple -> Teal
    gradient: "from-blue-600 via-purple-600 to-emerald-400"
  },
  {
    category: "SOFTWARE TRAINING",
    date: "12-06-2025",
    title: "Discover Key Insights About The Automation Software Testing...",
    desc: "Key Things To Know About Automation Software Testing Course. There has been a huge demand for automation testing professionals in the industry...",
    tags: ["Testing", "Automation", "Training"],
    image: "/code.jpg",
    // Triple color combo: Purple -> Fuchsia -> Pink
    gradient: "from-indigo-600 via-purple-600 to-pink-500"
  }
];

export default function StylishTriColorInsights() {
  return (
    <section className="bg-[#05010d] py-24 overflow-hidden relative">
      {/* Background Mesh Gradient (Matches image_5c12c0) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#3b82f6_0%,#8b5cf6_50%,#10b981_100%)] blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16">
        
        {/* Left Header Section */}
        <div className="w-full lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6 text-blue-400 font-black uppercase tracking-[0.3em] text-xs">
              <Sparkles size={16} /> Knowledge Hub
            </div>
            <h2 className="text-6xl font-black text-white tracking-tighter leading-[0.9] mb-8">
              OUR <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400">
                INSIGHTS
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium">
              Explore the latest trends and technical breakthroughs in the industry.
            </p>
            
            <button className="relative overflow-hidden group px-10 py-4 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-xs transition-all hover:pr-14">
              <span className="relative z-10">View All Insights</span>
              <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" />
            </button>
          </motion.div>
        </div>

        {/* Right Cards Section */}
        <div className="w-full lg:w-2/3 flex flex-col md:flex-row gap-8">
          {insights.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -12 }}
              className="flex-1 group relative rounded-[2.5rem] bg-[#110c1d] border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-500"
            >
              {/* Image with Gradient Overlay */}
              <div className="relative h-60">
                <img src={card.image} className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-t from-[#110c1d] via-transparent to-transparent`} />
                
                {/* Category Badge using Multi-color Gradient */}
                <div className={`absolute top-6 left-6 px-5 py-1.5 rounded-full bg-gradient-to-r ${card.gradient} text-[9px] font-black text-white uppercase tracking-widest shadow-xl`}>
                  {card.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-10">
                <div className="flex items-center gap-2 text-gray-500 text-[10px] font-bold mb-4">
                  <Calendar size={14} className="text-purple-500" /> {card.date}
                </div>
                <h3 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-teal-400 transition-all">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                  {card.desc}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {card.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-[9px] font-bold text-gray-400 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-white group-hover:text-black transition-colors cursor-pointer"
                  >
                    <ChevronRight size={20} />
                  </motion.div>
                </div>
              </div>

              {/* Bottom Glow Effect */}
              <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-20 blur-[60px] transition-opacity duration-700`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}