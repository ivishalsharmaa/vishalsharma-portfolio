"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 60 },
      { name: "Python", level: 40 },
    ],
  },
  {
    title: "Web Development",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "React.js", level: 80 },
      { name: "Node.js", level: 60 },
      { name: "Express.js", level: 60 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Netlify/Render", level: 85 },
    ],
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "DSA", level: 65 },
      { name: "OOPs", level: 90 },
      { name: "DBMS", level: 80 },
      { name: "Machine Learning", level: 65 },
      { name: "Prompt Engineering", level: 88 },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading title="Technical Skills" subtitle="My Toolkit" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent w-max">
                {category.title}
              </h3>
              
              <div className="flex flex-col gap-5">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-200 font-medium">{skill.name}</span>
                      <span className="text-cyan-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-[#0f172a] rounded-full overflow-hidden border border-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
