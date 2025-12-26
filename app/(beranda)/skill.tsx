"use client";

import React, { useId } from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import {
  SiJavascript, SiTypescript, SiPhp, SiMysql, SiNextdotjs,
  SiTailwindcss, SiBootstrap, SiGreensock, SiLaravel,
  SiGit, SiGithub, SiGitlab, SiPython, SiC, SiCplusplus, SiFramer, SiSwiper
} from "react-icons/si";
import { Layers, Code, Wrench } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

/**
 * Komponen Khusus Python dengan Gradasi
 */
const PythonIcon = ({ className }: { className?: string }) => {
  const id = useId();
  const gradientId = `python-gradient-${id}`;

  return (
    <>
      <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="50%" stopColor="#3776AB" />
            <stop offset="50%" stopColor="#FFD43B" />
          </linearGradient>
        </defs>
      </svg>
      <SiPython 
        className={className} 
        style={{ fill: `url(#${gradientId})` }} 
      />
    </>
  );
};

const skillCategories = [
  {
    key: "frameworks",
    icon: Layers,
    accentColor: "text-orange-500",
    items: [
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "GSAP", icon: SiGreensock, color: "#88CE02" },
      { name: "Framer", icon: SiFramer, color: "#0055FF" },
      { name: "Swiper JS", icon: SiSwiper, color: "#6332F6" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    key: "languages",
    icon: Code,
    accentColor: "text-blue-500",
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Python", icon: PythonIcon, color: "multi" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
    ],
  },
  {
    key: "tools",
    icon: Wrench,
    accentColor: "text-zinc-500",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
    ],
  },
];

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;

  // 1. Variat untuk Container (Bento Grid)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Jeda waktu antar elemen muncul
        delayChildren: 0.2
      }
    }
  };

  // 2. Variat untuk Card Individu
  const cardVariants: Variants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  // 3. Variat untuk Ikon (Efek Floating)
  const iconVariants: Variants = {
    initial: { y: 0 },
    animate: { 
      y: -10,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section
      id="skills"
      className={`${inter.className} relative min-h-screen w-full bg-black text-white p-6 md:p-12 flex flex-col items-center overflow-hidden`}
    >
      <div className="w-full max-w-6xl flex flex-col flex-1 z-10">
        
        {/* TOP ACCENT - Beranimasi Slide In */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4 self-start"
        >
          <div className="w-10 h-[2px] bg-orange-500" />
          <span className={`${spaceGrotesk.className} text-orange-500 font-bold tracking-[0.3em] text-xs uppercase`}>
            {language === 'id' ? 'Skill' : 'SKILLS'}
          </span>
        </motion.div>

        {/* HEADER SECTION - Beranimasi Fade Up */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 border-b border-zinc-900 pb-8"
        >
          <h2 className={`${spaceGrotesk.className} text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none`}>
            TECH <span className="text-orange-500">STACK.</span>
          </h2>
        </motion.div>

        {/* BENTO GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-0"
        >
          
          {/* FRAMEWORKS AREA */}
          <motion.div 
            variants={cardVariants}
            className="lg:col-span-8 bg-zinc-950 border border-zinc-900 rounded-[2rem] p-8 md:p-12 flex flex-col"
            data-hover="true"
          >
            <div className="flex items-center gap-3 mb-12 shrink-0">
              <Layers className="text-orange-500" size={24} />
              <h3 className="text-xl font-bold uppercase tracking-widest opacity-60">{t.frameworks}</h3>
            </div>

            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 items-center justify-items-center">
              {skillCategories[0].items.map((skill, idx) => (
                <div key={skill.name} className="flex flex-col items-center group">
                  <motion.div 
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    style={{ transitionDelay: `${idx * 100}ms` }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className="cursor-default mb-4"
                  >
                    <skill.icon 
                      style={skill.color !== "multi" ? { color: skill.color } : undefined} 
                      className="text-7xl md:text-8xl transition-transform duration-300" 
                    />
                  </motion.div>
                  <span className="text-[11px] font-bold tracking-[0.2em] text-zinc-500 group-hover:text-orange-500 transition-colors uppercase text-center">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* LANGUAGES CARD */}
            <motion.div 
              variants={cardVariants}
              className="flex-[1.4] bg-zinc-950 border border-zinc-900 rounded-[2rem] p-8 flex flex-col"
              data-hover="true"
            >
              <div className="flex items-center gap-3 mb-8 shrink-0">
                <Code className="text-blue-500" size={20} />
                <h3 className="text-lg font-bold uppercase tracking-widest opacity-60">{t.languages}</h3>
              </div>
              
              <div className="flex-1 grid grid-cols-3 gap-y-10 gap-x-2 items-center justify-items-center">
                {skillCategories[1].items.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center group">
                    <motion.div whileHover={{ scale: 1.15, y: -5 }}>
                      <skill.icon 
                        style={skill.color !== "multi" ? { color: skill.color } : undefined} 
                        className="text-4xl md:text-5xl mb-2 transition-transform" 
                      />
                    </motion.div>
                    <span className="text-[9px] font-bold tracking-widest text-zinc-500 group-hover:text-blue-400 transition-colors uppercase text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* TOOLS CARD */}
            <motion.div 
              variants={cardVariants}
              className="flex-1 bg-zinc-950 border border-zinc-900 rounded-[2rem] p-8 flex flex-col"
              data-hover="true"
            >
              <div className="flex items-center gap-3 mb-6 shrink-0">
                <Wrench className="text-zinc-500" size={18} />
                <h3 className="text-lg font-bold uppercase tracking-widest opacity-60">{t.tools}</h3>
              </div>
              <div className="flex-1 flex justify-around items-center">
                {skillCategories[2].items.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center group">
                    <motion.div whileHover={{ scale: 1.15, rotate: -10 }}>
                      <skill.icon 
                        style={{ color: skill.color }} 
                        className="text-4xl md:text-5xl mb-2 transition-transform" 
                      />
                    </motion.div>
                    <span className="text-[9px] font-bold tracking-widest text-zinc-500 group-hover:text-white transition-colors uppercase">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* FOOTER ACCENT */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 w-full flex justify-end border-t border-zinc-900 pt-6"
        >
          <div className={`${spaceGrotesk.className} text-xs font-bold tracking-[0.4em] text-zinc-800 uppercase`}>
            {language === 'id' ? '' : ''}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;