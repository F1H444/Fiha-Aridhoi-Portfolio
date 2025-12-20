"use client";

import React from "react";
import { Inter } from "next/font/google";
import {
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiGreensock,
  SiLaravel,
  SiGit,
  SiGithub,
  SiGitlab,
} from "react-icons/si";
import { ChevronsDown } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Data Skills
const skillCategories = [
  {
    key: "frameworks",
    items: [
      { name: "Next.js", icon: SiNextdotjs, color: "hover:text-white" },
      { name: "Laravel", icon: SiLaravel, color: "hover:text-[#FF2D20]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-[#06B6D4]" },
      { name: "GSAP", icon: SiGreensock, color: "hover:text-[#88CE02]" },
      { name: "Bootstrap", icon: SiBootstrap, color: "hover:text-[#7952B3]" },
      { name: "AOS", icon: ChevronsDown, color: "hover:text-orange-500" },
    ],
  },
  {
    key: "languages",
    items: [
      { name: "JavaScript", icon: SiJavascript, color: "hover:text-[#F7DF1E]" },
      { name: "TypeScript", icon: SiTypescript, color: "hover:text-[#3178C6]" },
      { name: "PHP", icon: SiPhp, color: "hover:text-[#777BB4]" },
      { name: "MySQL", icon: SiMysql, color: "hover:text-[#4479A1]" },
    ],
  },
  {
    key: "tools",
    items: [
      { name: "Git", icon: SiGit, color: "hover:text-[#F05032]" },
      { name: "GitHub", icon: SiGithub, color: "hover:text-white" },
      { name: "GitLab", icon: SiGitlab, color: "hover:text-[#FC6D26]" },
    ],
  },
];

const SkillCard = ({ item, index }: { item: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative flex flex-col items-center justify-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-orange-500/30"
    >
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-orange-500/0 blur-xl transition-all duration-500 group-hover:bg-orange-500/5 -z-10" />
      
      <div className={`text-4xl lg:text-5xl text-gray-400 transition-all duration-300 transform-gpu group-hover:scale-110 ${item.color}`}>
        <item.icon />
      </div>
      
      <span className="text-sm font-medium tracking-wide text-gray-400 transition-colors duration-300 group-hover:text-white">
        {item.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;

  return (
    <main
      id="skills"
      className={`${inter.variable} font-sans relative min-h-screen w-full bg-black text-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden`}
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-4 flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/5 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-orange-500">
              Expertise
            </span>
          </motion.div>

          <h2 className="text-center text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
            {t.title.split(" ").map((word: string, i: number) => (
              <span key={i} className={i === 1 ? "text-orange-500" : "text-white"}>
                {word}{" "}
              </span>
            ))}
          </h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-6 text-center text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-24">
          {skillCategories.map((category) => (
            <section key={category.key} className="relative">
              <div className="flex items-center gap-4 mb-10">
                <h3 className="text-xl font-semibold uppercase tracking-widest text-orange-500/80">
                  {t[category.key as keyof typeof t]}
                </h3>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-orange-500/30 to-transparent" />
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {category.items.map((skill, index) => (
                  <SkillCard key={skill.name} item={skill} index={index} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Skills;