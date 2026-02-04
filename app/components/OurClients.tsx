'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Priya Singh",
    role: "Product Manager, HealthSync",
    company: "HealthSync Solutions",
    text: "From concept to launch, Infocera's team was proactive, creative, and always available. Our healthcare platform is now faster and more secure than ever.",
    stars: 5,
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "CTO, EduFlow",
    company: "EduFlow Systems",
    text: "The technical expertise provided was unparalleled. They didn't just build what we asked for; they built what we actually needed to scale.",
    stars: 5,
    gradient: "from-purple-600 to-indigo-500"
  },
  // Add more testimonials here...
];

export default function StylishTestimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 bg-[#0a0d17] overflow-hidden">
      {/* Dynamic Background Orbs */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0] 
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0] 
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight"
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Clients Say</span>
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about our services.
          </p>
        </div>

        <div className="relative h-[450px] flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, x: 100, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: -100, rotateY: -20 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="absolute w-full max-w-3xl"
            >
              <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-2xl">
                {/* Large Quote Decoration */}
                <Quote className="absolute top-8 left-8 text-blue-500/20 w-24 h-24 -z-10" />
                
                <div className="flex flex-col items-center text-center">
                  <div className="flex gap-1 mb-8">
                    {[...Array(testimonials[index].stars)].map((_, i) => (
                      <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium mb-10 italic">
                    "{testimonials[index].text}"
                  </p>

                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-[2px] mb-4">
                      <div className="w-full h-full rounded-full bg-[#0a0d17] flex items-center justify-center text-white font-bold text-xl">
                        {testimonials[index].name[0]}
                      </div>
                    </div>
                    <h4 className="text-white text-xl font-bold">{testimonials[index].name}</h4>
                    <p className="text-blue-400 font-semibold text-sm mb-2">{testimonials[index].role}</p>
                    <span className="px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-300 uppercase tracking-widest">
                      {testimonials[index].company}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 md:-px-12 pointer-events-none">
            <button 
              onClick={prev}
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all pointer-events-auto backdrop-blur-md"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all pointer-events-auto backdrop-blur-md"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Custom Pagination */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === i ? 'w-12 bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'w-3 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}