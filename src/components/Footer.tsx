"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-24 border-t border-white/10 pt-12 pb-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f172a] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="text-2xl font-heading font-bold text-gradient">Vishal Sharma</h2>
          <p className="text-gray-400 text-sm">
            Building premium digital experiences.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
        </div>

        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 hover:text-cyan-400 transition-all border border-white/10 hover:border-cyan-500/50"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
      
      <div className="text-center text-xs text-gray-500 mt-12 relative z-10">
        &copy; {new Date().getFullYear()} Vishal Sharma. All rights reserved.
      </div>
    </footer>
  );
}
