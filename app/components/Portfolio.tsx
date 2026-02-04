'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, Code2, Rocket } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    year: "2023",
    desc: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/e_commerce.avif", // Replace with your image paths
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Healthcare Mobile App",
    category: "Mobile Development",
    year: "2023",
    desc: "A comprehensive healthcare app for patient management and telemedicine consultations.",
    tags: ["React Native", "Firebase", "WebRTC"],
    image: "/health.webp",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "AI Analytics Dashboard",
    category: "AI & Analytics",
    year: "2022",
    desc: "Business intelligence dashboard with machine learning insights for predictive analytics.",
    tags: ["Python", "TensorFlow", "React"],
    image: "/ai_analytic.jpg",
    color: "from-amber-400 to-orange-600"
  }
];

export default function StylishPortfolio() {
  return (
    <section className="py-24 bg-[#0d0221] overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 italic uppercase">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Portfolio</span>
            </h2>
            <div className="w-24 h-2 bg-blue-500 mx-auto rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] mb-8" />
            <p className="text-gray-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
              Discover our latest projects and see how we've helped businesses achieve their digital transformation goals.
            </p>
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              whileHover={{ y: -15 }}
              className="group relative bg-[#1a0b36] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-500 shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0b36] to-transparent opacity-60" />
                
                {/* Floating Category Badge */}
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest">
                  {project.category}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-black tracking-tight group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-xs font-bold">
                    <Calendar size={14} className="mr-1" /> {project.year}
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {project.desc}
                </p>

                {/* Tech Tags - Animated Reveal */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-blue-300 uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Action */}
                <motion.button 
                  whileHover={{ gap: '12px' }}
                  className="mt-4 flex items-center gap-2 text-xs font-black uppercase tracking-tighter text-blue-400 group-hover:text-white transition-all"
                >
                  View Case Study <Rocket size={16} />
                </motion.button>
              </div>

              {/* Decorative Corner Glow */}
              <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${project.color} opacity-20 blur-[50px] group-hover:opacity-40 transition-opacity`} />
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <button className="relative px-12 py-5 bg-transparent border-2 border-blue-500 rounded-full text-white font-black uppercase tracking-widest text-xs group overflow-hidden">
            <span className="relative z-10 transition-colors group-hover:text-black">View All Projects</span>
            <div className="absolute inset-0 bg-blue-500 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}