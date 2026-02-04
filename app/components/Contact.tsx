'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';

const contactDetails = [
  { icon: Phone, title: "Call Us", value: "+91 8882824948", color: "from-blue-500 to-cyan-400" },
  { icon: Mail, title: "Email Us", value: "info@infocera.in", color: "from-purple-500 to-indigo-600" },
  { icon: MapPin, title: "Visit Us", value: "First Floor, L29-L34, Block L, Connaught Place, New Delhi - 110001", color: "from-fuchsia-500 to-purple-600" }
];

export default function ModernContactSection() {
  return (
    <section className="relative py-24 bg-[#0a0118] overflow-hidden text-white font-sans">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Contact Info */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic uppercase leading-none">
                Ready to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-fuchsia-400">
                  Transform?
                </span>
              </h2>
              <p className="text-gray-400 text-lg font-medium max-w-md mb-12 leading-relaxed">
                Let's discuss how our innovative IT solutions can drive your business forward. Get in touch with our experts today.
              </p>

              <div className="space-y-6">
                {contactDetails.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg transition-transform group-hover:scale-110`}>
                      <item.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-1">{item.title}</h4>
                      <p className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Glassmorphic Form */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MessageSquare size={120} />
              </div>

              <h3 className="text-2xl font-black text-white mb-10 tracking-tight flex items-center gap-3">
                Get Started Today <div className="w-12 h-1 bg-blue-500 rounded-full" />
              </h3>

              <form className="space-y-8">
                {[
                  { label: "Name", type: "text" },
                  { label: "Email", type: "email" },
                  { label: "Phone Number", type: "tel" }
                ].map((field) => (
                  <div key={field.label} className="relative group">
                    <input 
                      type={field.type}
                      placeholder=" " 
                      className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors peer"
                    />
                    <label className="absolute left-0 top-3 text-gray-500 font-bold uppercase text-[10px] tracking-widest transition-all peer-focus:-top-4 peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-top-4">
                      {field.label}
                    </label>
                  </div>
                ))}

                <div className="relative">
                  <textarea 
                    placeholder=" "
                    rows={3}
                    className="w-full bg-transparent border-b-2 border-white/10 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors peer resize-none"
                  />
                  <label className="absolute left-0 top-3 text-gray-500 font-bold uppercase text-[10px] tracking-widest transition-all peer-focus:-top-4 peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-top-4">
                    Tell us about your project
                  </label>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full group relative overflow-hidden py-5 bg-white rounded-2xl text-black font-black uppercase tracking-[0.2em] text-xs transition-all"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Send Message <Send size={16} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}