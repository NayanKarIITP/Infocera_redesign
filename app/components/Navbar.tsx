'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Search, User } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
      scrolled 
        ? 'bg-slate-900/80 backdrop-blur-md border-slate-700 py-4' 
        : 'bg-transparent border-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white tracking-tight">
              Infocera<span className="text-blue-500">.</span>
            </span>
          </div>

          {/* Desktop Links (Matches screenshot) */}
          <div className="hidden xl:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <Link href="#" className="text-white hover:text-blue-400 transition-colors">Home</Link>
            <Link href="#about" className="hover:text-white transition-colors">About Us</Link>
            <Link href="#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="#tech" className="hover:text-white transition-colors">Technologies</Link>
            <Link href="#industries" className="hover:text-white transition-colors">Industries</Link>
            <Link href="#portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-slate-300 hover:text-white">
              <Search className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              <User className="w-4 h-4" /> My Account
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="xl:hidden text-white">
            <Menu className="w-6 h-6" />
          </div>
        </div>
      </div>
    </nav>
  );
}