"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Live Projects", value: "2+" },
  { label: "Users Served", value: "100+" },
  { label: "CGPA", value: "8.11" },
  { label: "Athletic Medals", value: "4" },
];

export default function Hero() {
  const text = "Aspiring Full Stack Developer | MERN Stack Developer | Prompt Engineer | ML Engineer | Tech Enthusiast.";
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full glass-card border-purple-500/30 text-cyan-300 font-medium text-sm w-max"
          >
            Welcome to my portfolio
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight">
            Hi, I&apos;m <br />
            <span className="text-gradient">Vishal Sharma</span>
          </h1>
          
          <div className="h-16 md:h-12">
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 font-light"
              initial={{ opacity: 1 }}
            >
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.05, delay: index * 0.03 + 0.5 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <a href="#projects" className="group relative px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium flex items-center gap-2 overflow-hidden hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]">
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full glass hover:bg-white/10 text-white font-medium flex items-center gap-2 transition-all duration-300 border border-white/20">
              <Download size={18} />
              Resume
            </a>

            <a href="#contact" className="px-6 py-3 rounded-full glass hover:bg-white/10 text-white font-medium flex items-center gap-2 transition-all duration-300 border border-white/20">
              <Mail size={18} />
              Contact
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-sm text-cyan-400 font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image / Visuals */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full p-2 glass-card animate-float before:absolute before:inset-0 before:rounded-full before:animate-glow">
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/10 bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 m-2">
              <Image 
                src="/profile.jpg" 
                alt="Vishal Sharma" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full blur-xl opacity-50 animate-pulse-slow" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-cyan-500 rounded-full blur-2xl opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
