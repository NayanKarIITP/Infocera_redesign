'use client';

import { useState, useEffect } from 'react';
import { Play, ArrowRight, Lightbulb, ShieldCheck, Clock, Users } from 'lucide-react';

const slides = [
  {
    id: 1,
    headline: "Accelerate Growth with Digital Innovation",
    subtext: "We deliver innovative technology solutions to help your business thrive in a digital world.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 2,
    headline: "Empower Your Future with Smart Technology",
    subtext: "Leverage AI and automation to stay ahead of the curve and define the future of your industry.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
  },
  {
    id: 3,
    headline: "Transform Business with Cutting-Edge Tech",
    subtext: "Modernize your legacy systems with scalable, cloud-native architectures built for performance.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 4,
    headline: "Innovative IT Solutions for Modern Enterprises",
    subtext: "End-to-end software development services tailored for large-scale enterprise needs.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-12 overflow-hidden bg-slate-900 pt-32">
      
      {/* 1. BACKGROUND LAYER */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className={`absolute inset-0 bg-cover bg-center ${index === currentSlide ? 'animate-slow-zoom' : ''}`}
            style={{ backgroundImage: `url("${slide.image}")` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/30"></div>
        </div>
      ))}

      {/* 2. MAIN CONTENT CONTAINER (Centered & Compact) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center flex-grow">
        
        {/* Badge - Smaller and centered */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Leading IT Services Provider
          </div>
        </div>

        {/* TEXT STACK - Grid trick to prevent layout shifts, but with constrained width */}
        <div className="grid grid-cols-1 mb-10 w-full max-w-4xl text-center">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`col-start-1 row-start-1 transition-all duration-700 ease-in-out transform ${
                index === currentSlide 
                  ? 'opacity-100 translate-y-0 relative z-10' 
                  : 'opacity-0 translate-y-4 pointer-events-none'
              }`}
            >
              {/* Reduced size: text-4xl on mobile, text-6xl on desktop (was 8xl) */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
                {slide.headline}
              </h1>
              <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed opacity-90">
                {slide.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* BUTTONS - Perfectly Centered */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in relative z-20">
          <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
          
          <button className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all hover:-translate-y-0.5">
            <Play className="w-4 h-4 fill-current" />
            Watch Demo
          </button>
        </div>

        {/* 3. BOTTOM GLASS CARDS - Compact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-6xl animate-fade-in relative z-20">
          {[
            { title: "Innovation", desc: "Creative Solutions", icon: Lightbulb, color: "text-blue-400" },
            { title: "Secure & Reliable", desc: "Enterprise Security", icon: ShieldCheck, color: "text-blue-400" },
            { title: "24/7 Support", desc: "Round-the-clock", icon: Clock, color: "text-blue-400" },
            { title: "Expert Team", desc: "Industry Pros", icon: Users, color: "text-blue-400" },
          ].map((item, idx) => (
            <div key={idx} className="group p-5 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/10 hover:border-blue-500/40 hover:bg-slate-900/60 transition-all duration-300">
              <item.icon className={`w-6 h-6 ${item.color} mb-3 group-hover:scale-110 transition-transform`} />
              <h3 className="text-base font-bold text-white mb-0.5">{item.title}</h3>
              <p className="text-xs text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}