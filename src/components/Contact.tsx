"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    window.location.href = `mailto:vishalorisha7575@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(message as string)}%0A%0AReply to: ${email}`;
  };



  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading title="Get In Touch" subtitle="Let's build something amazing together" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="glass-card p-8 rounded-3xl h-full flex flex-col justify-center gap-8">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              <p className="text-gray-400">
                I am currently open to new opportunities, collaborations, and freelance projects. Feel free to reach out!
              </p>

              <div className="flex flex-col gap-6 mt-4">
                <a href="mailto:vishalorisha7575@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Email</span>
                    <span className="font-medium text-white">vishalorisha7575@gmail.com</span>
                  </div>
                </a>

                <a href="tel:+916371106588" className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Phone</span>
                    <span className="font-medium text-white">+91 6371106588</span>
                  </div>
                </a>

                <a href="https://github.com/ivishalsharmaa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform">
                    <GithubIcon />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">GitHub</span>
                    <span className="font-medium text-white">github.com/ivishalsharmaa</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="glass-card p-8 rounded-3xl flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-[#0f172a]/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                  placeholder="Hello Vishal, I would like to discuss..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="group relative w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold flex justify-center items-center gap-2 overflow-hidden hover:scale-[1.02] transition-transform duration-300 mt-2"
              >
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);
