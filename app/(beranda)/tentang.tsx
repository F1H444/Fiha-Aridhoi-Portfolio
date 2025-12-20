"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { Rocket, Move3d, BrainCircuit } from "lucide-react";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const textEase = [0.65, 0, 0.35, 1];
  const viewportConfig = { once: true, margin: "-100px" };

  return (
    <section id="tentang" className="relative min-h-screen bg-black py-32 px-4 md:px-8 overflow-hidden font-sans">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 relative z-10">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="block text-orange-500 font-mono text-sm tracking-widest mb-4"
        >
          // 01. INTRO
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter"
        >
          {t.title}
        </motion.h2>
      </div>

      {/* Bento Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
        
        {/* Card 1: Main Description */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:col-span-2 bg-zinc-900/30 border border-gray-800 p-8 md:p-12 transition-all duration-300 hover:border-orange-500 hover:bg-zinc-900/50 group flex flex-col justify-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-orange-500 transition-colors">Who I Am</h3>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            {t.p1}
          </p>
          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: textEase, delay: 0.2 }}
            viewport={viewportConfig}
          >
            {t.p2}
          </motion.p>
        </motion.div>

        {/* Card 2: Photo */}
        <motion.div 
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:col-span-1 relative h-[400px] md:h-auto border border-gray-800 overflow-hidden group"
        >
          <div className="absolute inset-0 bg-orange-500/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500" />
          <Image
            src="/images/fiha-tentang.webp"
            alt="Fiha Aridhoi"
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
          />
        </motion.div>

        {/* Card 3: Skills List */}
        <motion.div
           variants={cardVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
           transition={{ delay: 0.3 }}
           className="md:col-span-3 bg-zinc-900/30 border border-gray-800 p-8 md:p-10 transition-all duration-300 hover:border-orange-500 hover:bg-zinc-900/50 group"
        >
           <h3 className="text-xl font-bold text-white mb-6 group-hover:text-orange-500 transition-colors">Key Skills</h3>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* GSAP */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-zinc-800/50 text-orange-500 border border-zinc-700">
                  <Rocket className="h-6 w-6" />
                </div>
                <span className="text-gray-300 font-medium">{t.skills.gsap}</span>
              </div>

               {/* Next.js */}
               <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-zinc-800/50 text-orange-500 border border-zinc-700">
                  <Move3d className="h-6 w-6" />
                </div>
                <span className="text-gray-300 font-medium">{t.skills.nextjs}</span>
              </div>

               {/* Backend */}
               <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-zinc-800/50 text-orange-500 border border-zinc-700">
                   <BrainCircuit className="h-6 w-6" />
                </div>
                <span className="text-gray-300 font-medium">{t.skills.backend}</span>
              </div>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
