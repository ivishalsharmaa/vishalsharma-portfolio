"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Code2, BrainCircuit, Rocket, Database } from "lucide-react";

export default function About() {
  const education = [
    {
      degree: "B.Tech in Computer Science and Information Technology",
      institution: "SOA University",
      year: "2023–2027",
      score: "CGPA: 8.11",
      description: "Focusing on Software Engineering, Data Structures & Algorithms, and Machine Learning.",
    },
    {
      degree: "Higher Secondary (XII)",
      institution: "St. Mary’s Higher Secondary School",
      year: "Completed",
      score: "84%",
      description: "Science stream with a strong foundation in Mathematics and Physics.",
    },
    {
      degree: "Secondary (X)",
      institution: "St. Mary’s Higher Secondary School",
      year: "Completed",
      score: "77%",
      description: "Core subjects forming the base of analytical thinking.",
    },
  ];

  const passions = [
    { icon: <Code2 size={24} />, title: "Web Development", desc: "Building scalable MERN stack apps." },
    { icon: <Database size={24} />, title: "DSA", desc: "Solving complex computational problems." },
    { icon: <BrainCircuit size={24} />, title: "AI & ML", desc: "Exploring intelligent systems." },
    { icon: <Rocket size={24} />, title: "Prompt Engineering", desc: "Optimizing AI interactions." },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading title="About Me" subtitle="My Journey & Passions" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
          {/* Intro & Passions */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="glass-card p-8 rounded-3xl border border-white/10">
              <p className="text-gray-300 text-lg leading-relaxed">
                I am currently pursuing my B.Tech at SOA University, blending academic rigor with hands-on project experience. 
                My passion lies in crafting seamless web applications using the <span className="text-cyan-400 font-semibold">MERN stack</span> and exploring the cutting-edge fields of <span className="text-purple-400 font-semibold">Machine Learning and Prompt Engineering</span>. 
                I believe in continuous learning and solving real-world problems through code.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {passions.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 rounded-2xl flex flex-col gap-3 group hover:border-cyan-500/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full opacity-50" />

            <div className="flex flex-col gap-8">
              {education.map((edu, i) => (
                <div key={i} className="relative pl-16">
                  {/* Timeline Node */}
                  <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)] border-2 border-[#0f172a]" />
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 rounded-2xl"
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold mb-3">
                      {edu.year}
                    </span>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <h4 className="text-cyan-400 font-medium mt-1">{edu.institution}</h4>
                    <p className="text-white/90 font-semibold mt-2">{edu.score}</p>
                    <p className="text-gray-400 text-sm mt-2">{edu.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
