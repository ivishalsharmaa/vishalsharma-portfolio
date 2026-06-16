"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Trophy, Timer, Users, Lightbulb, ShieldCheck, BarChart } from "lucide-react";

export default function ExperienceAndMore() {
  const achievements = [
    { icon: <Lightbulb size={24} />, title: "Prompt Engineering Challenge", desc: "Top participant among 100+; created 5+ high-quality prompts." },
    { icon: <Trophy size={24} />, title: "4 Athletic Medals", desc: "Demonstrated physical endurance and competitive spirit." },
    { icon: <Timer size={24} />, title: "24-Hour Hackathon", desc: "Built a working prototype in a 4-member team under pressure." },
    { icon: <Users size={24} />, title: "Cricket Team Captain", desc: "Led the school cricket team, showcasing leadership and strategy." },
  ];

  const certifications = [
    { icon: <BrainCircuitIcon />, title: "AI & Generative AI", desc: "Advanced concepts in AI and generative modeling." },
    { icon: <Lightbulb />, title: "Prompt Engineering", desc: "Mastered effective prompt design and optimization." },
    { icon: <BarChart />, title: "Deloitte Virtual Experience - Data Analytics", desc: "Practical exposure to Power BI and data visualization." },
    { icon: <ShieldCheck />, title: "Deloitte Virtual Experience - Cybersecurity", desc: "Learned foundational business problem-solving and security." },
  ];

  const qualities = ["Fast Learner", "Team Player", "Problem Solver", "Adaptable", "Self-Motivated", "Continuous Learner"];

  return (
    <div className="flex flex-col gap-24 py-24">
      {/* Experience Section */}
      <section id="experience" className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <SectionHeading title="Experience" subtitle="Real-world Exposure" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div whileHover={{ scale: 1.02 }} className="glass-card p-8 rounded-3xl border-l-4 border-l-purple-500">
            <h3 className="text-xl font-bold text-white">Data Analytics & Machine Learning</h3>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              Hands-on exposure to Data Analytics using Power BI and Python. Explored Machine Learning fundamentals and applied them in real-world project scenarios, extracting actionable insights from raw data.
            </p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} className="glass-card p-8 rounded-3xl border-l-4 border-l-cyan-500">
            <h3 className="text-xl font-bold text-white">Deloitte Virtual Job Simulations</h3>
            <p className="text-gray-400 mt-2 text-sm leading-relaxed">
              Completed intensive virtual job simulations at Deloitte via Forage. Gained practical experience in Data Analytics, Cybersecurity protocols, and Business Problem Solving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <SectionHeading title="Achievements" subtitle="Milestones & Recognition" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center text-center gap-4 group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-white font-bold">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <SectionHeading title="Certifications" subtitle="Continuous Learning" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {certifications.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-2xl flex items-start gap-4"
            >
              <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                {item.icon}
              </div>
              <div>
                <h4 className="text-white font-bold">{item.title}</h4>
                <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 w-full relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-3xl blur-xl" />
        <div className="glass-card p-12 rounded-3xl relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-10">Why Work With Me?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {qualities.map((quality, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 rounded-full glass border border-cyan-500/30 text-white font-medium shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-shadow"
              >
                {quality}
              </motion.span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function BrainCircuitIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>
  );
}
