'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Server, Database, Cloud } from 'lucide-react';

const techGroups = [
  {
    id: 'frontend',
    label: 'UI Design',
    icon: Layout,
    content: [
      { name: "HTML/HTML5", desc: "Markup language for structuring web content.", gradient: "from-[#ff5f6d] to-[#ffc371]", logo: "5" },
      { name: "CSS3", desc: "Stylesheet language for designing web pages.", gradient: "from-[#2193b0] to-[#6dd5ed]", logo: "3" },
      { name: "AngularJS", desc: "Framework for building dynamic web apps.", gradient: "from-[#ee0979] to-[#ff6a00]", logo: "A" },
      { name: "JavaScript", desc: "Interactive programming for web apps.", gradient: "from-[#f12711] to-[#f5af19]", logo: "JS" },
      { name: "jQuery", desc: "JavaScript library for DOM manipulation.", gradient: "from-[#00b4db] to-[#0083b0]", logo: "jq" },
      { name: "WordPress", desc: "Popular CMS for websites and blogs.", gradient: "from-[#2193b0] to-[#6dd5ed]", logo: "W" },
    ]
  },
  {
    id: 'backend',
    label: 'Server Side',
    icon: Server,
    content: [
      { name: "PHP", desc: "Server-side scripting for web development.", gradient: "from-[#6a11cb] to-[#2575fc]", logo: "php" },
      { name: "Java", desc: "Versatile programming for many platforms.", gradient: "from-[#f7971e] to-[#ffd200]", logo: "☕" },
      { name: "Spring", desc: "Java framework for enterprise apps.", gradient: "from-[#00b09b] to-[#96c93d]", logo: "🍃" },
      { name: "Python", desc: "Powerful, easy-to-learn programming.", gradient: "from-[#11998e] to-[#38ef7d]", logo: "🐍" },
      { name: "Shell", desc: "Command-line scripting for automation.", gradient: "from-[#485563] to-[#29323c]", logo: "$_" },
      { name: "Perl", desc: "Text processing and scripting language.", gradient: "from-[#e65c00] to-[#f9d423]", logo: "P" },
    ]
  },
  {
    id: 'cloud',
    label: 'Cloud & Database',
    icon: Cloud,
    content: [
      { name: "AWS", desc: "Cloud computing services by Amazon.", gradient: "from-[#ff9900] to-[#f5af19]", logo: "aws" },
      { name: "Google Cloud", desc: "Cloud platform by Google.", gradient: "from-[#4285f4] to-[#34a853]", logo: "G" },
      { name: "Docker", desc: "Containerization platform for apps.", gradient: "from-[#24c6dc] to-[#514a9d]", logo: "🐳" },
      { name: "MongoDB", desc: "NoSQL document-based database.", gradient: "from-[#134e5e] to-[#71b280]", logo: "🍃" },
      { name: "PostgreSQL", desc: "Advanced open-source relational database.", gradient: "from-[#336791] to-[#514a9d]", logo: "🐘" },
      { name: "Redis", desc: "In-memory data structure store.", gradient: "from-[#d13328] to-[#91241c]", logo: "R" },
    ]
  }
];

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('frontend');

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Creates the left-to-right sequence
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -100, // Starts off-screen to the left
      scale: 0.8 
    },
    show: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="py-24 bg-[#140429] min-h-screen text-white font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tighter mb-4 italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            TECHNOLOGY STACK
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {techGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActiveTab(group.id)}
              className={`flex items-center gap-3 px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                activeTab === group.id 
                ? 'bg-white text-black border-white shadow-xl scale-110' 
                : 'bg-white/5 text-white border-white/10 hover:bg-white/10'
              }`}
            >
              <group.icon className="w-4 h-4" />
              {group.label}
            </button>
          ))}
        </div>

        {/* Animated Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {techGroups.find(g => g.id === activeTab)?.content.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className={`relative group h-44 rounded-[2.5rem] p-8 overflow-hidden bg-gradient-to-br ${tech.gradient} shadow-2xl`}
                >
                  {/* Watermark Logo */}
                  <div className="absolute top-2 right-4 text-7xl font-black text-black/10 select-none group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                    {tech.logo}
                  </div>

                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-black mb-1 drop-shadow-md">{tech.name}</h3>
                      <p className="text-[10px] leading-relaxed text-white/90 font-bold max-w-[180px] uppercase tracking-wide">
                        {tech.desc}
                      </p>
                    </div>

                    <button className="w-fit px-6 py-2 bg-white text-black text-[9px] font-black uppercase tracking-tighter rounded-full shadow-lg transform transition-transform group-hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Custom Scroll Bar / Indicator */}
        <div className="mt-20 flex justify-center items-center gap-2">
           {techGroups.map(g => (
             <div key={g.id} className={`h-1 rounded-full transition-all duration-500 ${activeTab === g.id ? 'w-12 bg-blue-500' : 'w-4 bg-white/20'}`} />
           ))}
        </div>
      </div>
    </section>
  );
}