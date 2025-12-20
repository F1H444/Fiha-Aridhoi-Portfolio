"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Terminal, Sparkles, Layers, Cpu, MousePointer2 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const containerRef = useRef(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[110vh] w-full bg-[#000000] text-white flex items-center justify-center py-24 px-6 overflow-hidden"
    >
      {/* Background Decor */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-orange-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full" />
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-4 relative z-10"
      >
        {/* LEFT COLUMN */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Main Hero Card */}
          <motion.div 
            variants={itemVariants}
            className="md:col-span-2 p-8 md:p-10 rounded-[2rem] bg-zinc-900/30 border border-white/5 backdrop-blur-3xl flex flex-col justify-between min-h-[380px] relative overflow-hidden group shadow-2xl"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/5 border border-orange-500/20 text-[9px] font-bold tracking-[0.2em] uppercase mb-10">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
                </span>
                {t.available}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1]">
                Frontend <br />
                <span className="text-zinc-500 italic font-light">Designer &</span> <br />
                Developer
              </h1>
            </div>
            
            <div className="relative z-10 mt-10 flex flex-wrap gap-6 items-end justify-between">
              <p className="text-zinc-400 max-w-[280px] text-sm leading-relaxed font-light">
                {t.description}
              </p>
              
              <Link href="/#kontak" className="group relative inline-flex items-center gap-3 bg-white text-black px-7 py-3.5 rounded-full text-xs font-bold transition-all duration-300 hover:pr-10 active:scale-95 overflow-hidden">
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">{t.contactBtn}</span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5 transition-all duration-300 group-hover:text-white group-hover:translate-x-1" />
                {/* Precise Hover Fill Effect */}
                <div className="absolute inset-0 bg-orange-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </Link>
            </div>
          </motion.div>

          {/* Card: Tech Stack */}
          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -5 }}
            className="p-6 rounded-[1.5rem] bg-zinc-900/20 border border-white/5 backdrop-blur-md flex flex-col justify-between group transition-colors hover:bg-zinc-800/40"
          >
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-6 border border-orange-500/10">
              <Layers className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h3 className="text-base font-bold mb-1">Architecture</h3>
              <p className="text-zinc-500 text-[11px] leading-relaxed">Building scalable apps with Next.js & TypeScript.</p>
            </div>
          </motion.div>

          {/* Card: Location */}
          <motion.div 
            variants={itemVariants} 
            whileHover={{ y: -5 }}
            className="p-6 rounded-[1.5rem] bg-zinc-900/20 border border-white/5 backdrop-blur-md flex flex-col justify-between group transition-colors hover:bg-zinc-800/40"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/10">
              <MapPin className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h3 className="text-base font-bold mb-1">Surabaya, ID</h3>
              <p className="text-zinc-500 text-[11px] leading-relaxed">Open for remote collaboration worldwide.</p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: PORTRAIT */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-4 relative group min-h-[450px] lg:h-full rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl"
        >
          <Image
            src="/images/fiha.png"
            alt="Profile"
            fill
            className="object-cover object-top grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 scale-[1.05] group-hover:scale-100"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

          {/* Floating Profile Info */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="p-4 bg-white/[0.03] backdrop-blur-2xl rounded-[1.2rem] border border-white/10 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm tracking-tight text-white/90">Fiha Aridhoi</h4>
                <div className="flex items-center gap-1.5">
                  <p className="text-orange-500 text-[8px] font-bold tracking-widest uppercase">Frontend Developer</p>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                 <Terminal className="w-3.5 h-3.5 text-zinc-400" />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;