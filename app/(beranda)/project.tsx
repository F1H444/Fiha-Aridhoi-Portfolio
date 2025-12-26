"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Inter, Space_Grotesk } from "next/font/google";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
});

const projectsData = [
  {
    id: 1,
    key: "kalkulator",
    imageUrl: "/project/kalkulator.webp",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer-Motion"],
    linkGithub: "https://github.com/F1H444/KalkulatorPintar",
    linkLive: "https://kalkulator-pintar.vercel.app/",
  },
  {
    id: 2,
    key: "smkn2",
    imageUrl: "/project/smkn2.webp",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer-Motion", "Gsap"],
    linkGithub: "https://github.com/F1H444/SMKN2-SBY-v2.0",
    linkLive: "https://smkn-2-sby-v2-0.vercel.app/",
  },
  {
    id: 3,
    key: "tiny",
    imageUrl: "/project/tiny.webp",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer-Motion"],
    linkGithub: "https://github.com/F1H444/TINYGambar",
    linkLive: "https://tinygambar.vercel.app/",
  },
  {
    id: 4,
    key: "popqr",
    imageUrl: "/project/popqr.webp",
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer-Motion"],
    linkGithub: "https://github.com/F1H444/PopQR",
    linkLive: "https://popqr.vercel.app/",
  },
];

const ProjectCard = ({ project, index, t }: any) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Brutalist Scroll Physics
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const y = useTransform(smoothProgress, [0, 1], [-50, 50]);
  const skew = useTransform(smoothProgress, [0, 0.5, 1], [2, 0, -2]);
  
  const projectInfo = t.items[project.key];

  return (
    
    <motion.article
      ref={containerRef}
      style={{ skewX: skew }}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true, margin: "-10%" }}
      className="group relative border-b border-white/10 py-12 md:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center overflow-hidden"
      data-hover="true"
    >
      {/* Brutalist Scanning Line Effect */}
      <motion.div 
        animate={{ top: ["-100%", "100%"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[1px] bg-orange-500/10 z-0"
      />

      <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col z-10">
        <div className="flex items-center gap-4 mb-4 lg:mb-8">
          <motion.span 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="font-mono text-orange-500 text-xs md:text-sm font-bold"
          >
            [{index + 1}]
          </motion.span>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="h-[1px] bg-orange-500 w-12 md:w-20 origin-left"
          />
        </div>

        <motion.h3 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-4 lg:mb-6 uppercase"
        >
          {projectInfo?.title || "Project Title"}
        </motion.h3>

        <div className="flex flex-wrap gap-2 mb-6 lg:mb-8">
          {project.techStack.map((tech: string, i: number) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="px-2 md:px-3 py-1 text-[9px] md:text-[10px] font-bold tracking-widest uppercase border border-white/20 text-white/50 rounded-none bg-white/5 group-hover:bg-orange-500 group-hover:text-black transition-all duration-300"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 lg:mb-10 max-w-md border-l-2 border-orange-500/20 pl-4">
          {projectInfo?.description || "Description not available."}
        </p>

        <div className="flex flex-wrap gap-6 md:gap-8">
          <a href={project.linkGithub} target="_blank" className="group/link flex items-center gap-2 text-white/70 hover:text-orange-500 transition-colors text-xs md:text-sm font-black italic">
            <Github className="w-4 h-4 md:w-5 md:h-5" />
            <span>/ SOURCE_CODE</span>
          </a>
          {project.linkLive && (
            <a href={project.linkLive} target="_blank" className="group/link flex items-center gap-2 text-white/70 hover:text-orange-500 transition-colors text-xs md:text-sm font-black italic">
              <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
              <span>/ LIVE_PREVIEW</span>
            </a>
          )}
        </div>
      </div>

      <div className="order-1 lg:order-2 lg:col-span-7 relative">
        <motion.div 
          style={{ y }} 
          className="relative aspect-[16/10] overflow-hidden rounded-none bg-zinc-900 border border-white/10 shadow-2xl"
        >
          <a href={project.linkLive} target="_blank" className="block h-full w-full group/img">
            {/* NO GRAYSCALE - TERANG DARI AWAL */}
            <Image
              src={project.imageUrl}
              alt={projectInfo?.title}
              fill
              className="object-cover scale-100 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
              priority={index < 2}
            />
            
            {/* HOVER EFFECT: DARK OVERLAY COMES IN ON HOVER */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 z-10" />

            <div className="absolute top-4 right-4 z-20">
               <div className="bg-orange-500 text-black h-12 w-12 flex items-center justify-center rounded-none opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                  <ArrowUpRight className="w-6 h-6" />
               </div>
            </div>
          </a>
        </motion.div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language].projects;

  return (
    <main id="project" className={`${inter.variable} bg-black text-white py-20 md:py-32 px-4 sm:px-8 md:px-12 lg:px-24 overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 md:mb-32 relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="absolute top-0 left-0 w-full h-px bg-white/10 origin-left"
          />
          
          <div className="pt-8">
            <motion.p 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="text-orange-500 font-mono text-xs tracking-[0.5em] mb-4"
            >
              
            </motion.p>
            
            <h2 className={`${spaceGrotesk.className} text-6xl sm:text-8xl lg:text-[12rem] font-bold leading-[0.8] tracking-tighter uppercase italic overflow-hidden`}>
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="inline-block"
              >
                My Projects
              </motion.span>
              <motion.span
                initial={{ x: "-20%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20"
              >
             
              </motion.span>
            </h2>
          </div>
        </header>

        <div className="flex flex-col">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} t={t} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;