"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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

  // Efek parallax halus pada gambar
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const projectInfo = t.items[project.key];

  return (
    <motion.article
      ref={containerRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
      viewport={{ once: true, margin: "-10%" }}
      className="group relative border-b border-white/10 py-12 md:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
    >
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

      {/* Info Content - Order 2 on mobile, 1 on desktop */}
      <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col z-10">
        <div className="flex items-center gap-4 mb-4 lg:mb-8">
          <span className="font-mono text-orange-500 text-xs md:text-sm">0{index + 1}</span>
          <div className="h-[1px] bg-white/20 w-8 md:w-12 group-hover:w-16 transition-all duration-500"></div>
        </div>

        <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4 lg:mb-6 group-hover:translate-x-2 transition-transform duration-500">
          {projectInfo?.title || "Project Title"}
        </h3>

        <div className="flex flex-wrap gap-2 mb-6 lg:mb-8">
          {project.techStack.map((tech: string) => (
            <span
              key={tech}
              className="px-2 md:px-3 py-1 text-[9px] md:text-[10px] font-medium tracking-widest uppercase border border-white/10 text-white/50 rounded-full group-hover:border-orange-500/50 group-hover:text-orange-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 lg:mb-10 max-w-md">
          {projectInfo?.description || "Description not available."}
        </p>

        <div className="flex flex-wrap gap-6 md:gap-8">
          {project.linkGithub && (
            <a
              href={project.linkGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-2 text-white/70 hover:text-orange-500 transition-colors text-xs md:text-sm font-bold tracking-tighter"
            >
              <Github className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover/link:-rotate-12" />
              <span>SOURCE</span>
            </a>
          )}
          {project.linkLive && project.linkLive !== "#" && (
            <a
              href={project.linkLive}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-2 text-white/70 hover:text-orange-500 transition-colors text-xs md:text-sm font-bold tracking-tighter"
            >
              <ExternalLink className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover/link:scale-110" />
              <span>LIVE VIEW</span>
            </a>
          )}
        </div>
      </div>

      {/* Visual Content - Order 1 on mobile, 2 on desktop */}
      <div className="order-1 lg:order-2 lg:col-span-7 relative">
        <motion.div 
          style={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? y : 0 }} 
          className="relative aspect-[16/10] overflow-hidden rounded-lg md:rounded-xl bg-zinc-900 shadow-2xl border border-white/5"
        >
          <a
            href={project.linkLive !== "#" ? project.linkLive : "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full w-full group/img"
          >
            {/* Elegant Overlay */}
            <div className="absolute inset-0 bg-black/40 lg:bg-black/60 group-hover/img:bg-black/0 transition-colors duration-700 z-10" />
            
            <Image
              src={project.imageUrl}
              alt={projectInfo?.title || "Project Image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              className="object-cover grayscale-[0.5] group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-[1.2s] ease-out"
              priority={index < 2}
            />

            {/* Floating Badge (Only visible on hover/touch) */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 overflow-hidden">
               <div className="bg-white text-black h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full translate-y-[110%] group-hover/img:translate-y-0 transition-transform duration-500 ease-out shadow-xl">
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
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
    <main
      id="project"
      className={`${inter.variable} font-sans relative min-h-screen w-full bg-[#000000] text-white py-20 md:py-32 px-4 sm:px-8 md:px-12 lg:px-24 overflow-hidden`}
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-orange-500/[0.03] blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-500/[0.03] blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-16 md:mb-24 lg:mb-32 relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-4 md:mb-6"
          >
            <div className="h-[1px] w-6 md:w-8 bg-orange-500" />
            <span className="text-orange-500 font-mono text-[10px] md:text-xs tracking-[0.3em] uppercase">
              Project Showcase
            </span>
          </motion.div>

          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold leading-[0.9] md:leading-[0.85] tracking-tighter uppercase italic lg:not-italic">
            My <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">
              Projects
            </span>
          </h2>
        </header>

        {/* Project List */}
        <div className="divide-y divide-white/10">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} t={t} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;