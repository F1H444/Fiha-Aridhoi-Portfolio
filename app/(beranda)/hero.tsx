"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Terminal, Globe, Cpu } from "lucide-react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { usePreloader } from "@/contexts/PreloaderContext";

const Hero = () => {
  const { language } = useLanguage();
  const { isPreloading } = usePreloader();
  const t = translations[language].hero;
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 80]);

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: (custom: number) => ({
      y: 0, 
      opacity: 1, 
      transition: { 
        delay: custom * 0.2,
        duration: 0.8, 
        ease: [0.21, 1.11, 0.81, 0.99] as [number, number, number, number] 
      }
    }),
  };

  const solidThickBorder = "border-[3px] border-white";

  return (
    <section id="beranda"
      ref={containerRef}
      className="relative min-h-[90vh] lg:min-h-screen w-full bg-[#000000] text-white flex items-center justify-center py-12 px-6 overflow-hidden"
    >
      {/* Background Decor */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] bg-blue-600/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] bg-orange-600/10 blur-[100px] rounded-full" />
      </motion.div>

      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-4 relative z-10">
        
        {/* LEFT COLUMN: Core Content */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* URUTAN 1: Hero Identity */}
          <motion.div 
            custom={1}
            variants={itemVariants}
            initial="hidden"
            animate={isPreloading ? "hidden" : "visible"}
            className={`md:col-span-2 p-7 md:p-10 rounded-[1.8rem] bg-black flex flex-col justify-between min-h-[320px] relative overflow-hidden ${solidThickBorder}`}
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border-2 border-white/20 text-[9px] font-bold tracking-widest uppercase mb-6">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
                </span>
                {t.available}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-4">
                {t.role}
              </h1>
            </div>
            
            <div className="relative z-10 flex flex-wrap gap-6 items-end justify-between">
              <p className="text-zinc-300 max-w-[400px] text-sm md:text-base leading-relaxed font-medium">
                {t.description}
              </p>
              
              <Link 
                href="/#contact" 
                className="group relative inline-flex items-center gap-2.5 bg-white text-black px-6 py-3.5 rounded-full text-xs font-bold transition-all duration-300 hover:ring-4 hover:ring-white/20 border-2 border-white active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 group-hover:text-white transition-colors">
                  {t.contactBtn}
                </span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </motion.div>

          {/* URUTAN 3: Architecture Tech (Clean Code) */}
          <motion.div 
            custom={3}
            variants={itemVariants} 
            initial="hidden"
            animate={isPreloading ? "hidden" : "visible"}
            whileHover={{ y: -4 }}
            className={`p-6 rounded-[1.5rem] bg-black flex flex-col justify-between group ${solidThickBorder}`}
          >
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4 border border-orange-500/20 group-hover:border-orange-500/50 transition-colors">
              <Cpu className="w-5 h-5 text-orange-500" />
            </div>
            <div>
              <h3 className="text-base font-bold mb-1.5 tracking-tight">{t.cleanCodeTitle}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-medium">
                {t.cleanCodeDesc}
              </p>
            </div>
          </motion.div>

          {/* URUTAN 4: Reliability (Performance) */}
          <motion.div 
            custom={4}
            variants={itemVariants} 
            initial="hidden"
            animate={isPreloading ? "hidden" : "visible"}
            whileHover={{ y: -4 }}
            className={`p-6 rounded-[1.5rem] bg-black flex flex-col justify-between group ${solidThickBorder}`}
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-500/20 group-hover:border-blue-500/50 transition-colors">
              <Globe className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h3 className="text-base font-bold mb-1.5 tracking-tight">{t.performanceTitle}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-medium">
                {t.performanceDesc}
              </p>
            </div>
          </motion.div>
        </div>

        {/* URUTAN 2: RIGHT COLUMN - Photo Bento */}
        <motion.div 
          custom={2}
          variants={itemVariants}
          initial="hidden"
          animate={isPreloading ? "hidden" : "visible"}
          className={`lg:col-span-4 relative group min-h-[380px] lg:h-full rounded-[1.8rem] overflow-hidden bg-black ${solidThickBorder} order-first lg:order-last`}
        >
          <Image
            src="/images/fiha.png"
            alt="Fiha Aridhoi"
            fill
            className="object-cover object-top grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

          <div className="absolute bottom-4 left-4 right-4 space-y-2">
            <div className={`p-4 bg-black rounded-[1.2rem] border-2 border-white/20 flex items-center justify-between`}>
              <div>
                <h4 className="font-bold text-xs text-white uppercase tracking-wider">FIHA ARIDHOI</h4>
                <p className="text-orange-500 text-[9px] font-black tracking-[0.2em] uppercase">{t.role}</p>
              </div>
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/20">
                <Terminal className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;