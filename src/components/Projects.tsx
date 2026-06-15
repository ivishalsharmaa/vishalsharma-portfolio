"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const projects = [
  {
    title: "Interior Design Website",
    description: "A comprehensive interior design platform featuring scalable architecture, 100+ responsive components, and REST API integration. Achieved 20–25% performance improvements and successfully deployed to production.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Travel Agency Platform",
    description: "A full-stack MERN travel agency website featuring 10+ interactive modules, an improved booking experience, and a fully responsive UI. Deployed live with robust backend data management.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "#",
    demo: "#",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop"
  },
  {
    title: "Engage Works Agency",
    description: "A premium digital marketing and web development agency website. Features a modern, high-performance UI with smooth animations, dynamic routing, and a focus on conversions.",
    tech: ["Next.js", "React.js", "Tailwind CSS"],
    github: "#",
    demo: "https://engageworks.netlify.app/",
    image: "/engage-works.png"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading title="Featured Projects" subtitle="My Recent Work" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-3xl overflow-hidden group flex flex-col"
            >
              <div className="relative h-60 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent z-10 opacity-60" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Tech badges overlaid */}
                <div className="absolute bottom-4 left-4 z-20 flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs font-medium bg-black/50 backdrop-blur-md text-cyan-300 rounded-full border border-cyan-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-white hover:text-purple-400 transition-colors">
                    <GithubIcon />
                    Code
                  </a>
                  <a href={project.demo} className="flex items-center gap-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors ml-auto">
                    Live Demo
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
