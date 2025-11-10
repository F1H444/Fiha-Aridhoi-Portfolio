"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion"; // Impor motion
// GSAP dan ScrollTrigger dihapus

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Registrasi plugin GSAP tidak diperlukan lagi

const projectsData = [
  // ... (data proyek Anda tidak berubah)
  {
    id: 1,
    title: "SIKALORI - AI Calorie Checker",
    description:
      "Website Cek Kalori yang menggunakan AI untuk mendeteksi dan menghitung kalori dari foto makanan. Dibangun dengan Next.js untuk performa tinggi.",
    imageUrl: "/project/sikalori.png",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer-Motion", "Gsap"],
    linkGithub: "#",
    linkLive: "#",
  },
  {
    id: 2,
    title: "SMKN2 SBY V2.0",
    description:
      "Proyek redesign total yang dibangun menggunakan Next.js 16 (App Router) dengan fokus pada performa tinggi, animasi yang kaya, dan pengalaman pengguna yang modern. Proyek ini bukan sekadar website statis, melainkan aplikasi web interaktif penuh yang menampilkan berbagai fitur canggih untuk profil sekolah.",
    imageUrl: "/project/smkn2.png",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer-Motion", "Gsap"],
    linkGithub: "https://github.com/F1H444/SMKN2-SBY-v2.0",
    linkLive: "https://smkn-2-sby-v2-0.vercel.app/",
  },
  {
    id: 3,
    title: "Kalkulator Pintar",
    description:
      "Website kalkulator modern yang dibangun menggunakan Next.js 16 dan React 19. Website ini menampilkan desain glassmorphism (efek kaca) yang elegan dan interaktif, ditenagai oleh TailwindCSS 4 dan Framer Motion.",
    imageUrl: "/project/kalkulator.png",
    techStack: ["Next.js", "React", "Tailwind CSS", "AI/ML", "Vercel"],
    linkGithub: "https://github.com/F1H444/KalkulatorPintar",
    linkLive: "https://kalkulator-pintar.vercel.app/",
  },
  {
    id: 4,
    title: "SIKALORI - AI Calorie Checker",
    description:
      "Aplikasi web cerdas yang menggunakan AI untuk mendeteksi dan menghitung kalori dari foto makanan. Dibangun dengan Next.js untuk performa tinggi.",
    imageUrl: "/project/sikalori.png",
    techStack: ["Next.js", "React", "Tailwind CSS", "AI/ML", "Vercel"],
    linkGithub: "#",
    linkLive: "#",
  },
  {
    id: 5,
    title: "SIKALORI - AI Calorie Checker",
    description:
      "Aplikasi web cerdas yang menggunakan AI untuk mendeteksi dan menghitung kalori dari foto makanan. Dibangun dengan Next.js untuk performa tinggi.",
    imageUrl: "/project/sikalori.png",
    techStack: ["Next.js", "React", "Tailwind CSS", "AI/ML", "Vercel"],
    linkGithub: "#",
    linkLive: "#",
  },
];

const Projects = () => {
  const title = "Proyek Saya";
  // containerRef dan useGSAP dihapus

  const backEase = [0.34, 1.56, 0.64, 1]; // Mirip 'back.out(1.7)'
  const viewportConfig = { once: true, amount: 0.2 }; // Trigger lebih awal

  return (
    <main
      id="project"
      // ref={containerRef} dihapus
      className={`${inter.variable} font-sans relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-black text-white p-8 md:p-16`}
    >
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-6xl text-center">
          {" "}
          {/* gsap-title-project dihapus */}
          {title.split("").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block" // gsap-title-letter dan opacity-0 dihapus
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: backEase,
                delay: index * 0.05,
              }}
              viewport={viewportConfig}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="mt-4 text-center text-lg text-gray-400 max-w-2xl mx-auto" // gsap-project-desc dan opacity-0 dihapus
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          viewport={viewportConfig}
        >
          Kumpulan proyek pilihan yang menunjukkan keahlian saya dalam mengubah
          ide menjadi solusi nyata.
        </motion.p>
        <div className="mt-24 flex flex-col gap-24 md:gap-32">
          {projectsData.map((project, index) => {
            // Logika untuk menentukan arah animasi
            const isEven = index % 2 === 0;
            const imageX = isEven ? -100 : 100;
            const textX = isEven ? 100 : -100;
            const orderClass = !isEven ? "lg:order-last" : "";

            return (
              <section
                key={project.id}
                className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16" // gsap-project-section dan opacity-0 dihapus
              >
                <motion.div
                  className={`w-full transition-transform duration-300 hover:scale-103 ${orderClass}`} // Kelas orderClass diterapkan di sini
                  initial={{ x: imageX, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={viewportConfig}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={1200}
                    height={900}
                    priority={index < 2}
                    className="rounded-xl object-cover shadow-2xl shadow-black/30 border border-gray-800" // gsap-project-image dihapus
                  />
                </motion.div>
                <div className="flex flex-col justify-center">
                  <motion.h3
                    className="text-3xl font-bold tracking-tight text-orange-500 sm:text-4xl" // gsap-project-text-item dihapus
                    initial={{ x: textX, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.2, // Stagger manual
                    }}
                    viewport={viewportConfig}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="mt-6 text-lg text-gray-300 leading-relaxed" // gsap-project-text-item dihapus
                    initial={{ x: textX, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.3, // Stagger manual
                    }}
                    viewport={viewportConfig}
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    className="mt-6 flex flex-wrap gap-3" // gsap-project-text-item dihapus
                    initial={{ x: textX, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.4, // Stagger manual
                    }}
                    viewport={viewportConfig}
                  >
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-gray-800 px-4 py-2 text-sm font-medium text-orange-400 border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                  <motion.div
                    className="mt-8 flex items-center gap-6" // gsap-project-text-item dihapus
                    initial={{ x: textX, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.5, // Stagger manual
                    }}
                    viewport={viewportConfig}
                  >
                    <a
                      href={project.linkGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 transition-colors hover:text-white group"
                    >
                      <Github className="h-5 w-5" />
                      <span className="group-hover:underline">GitHub</span>
                    </a>
                    <a
                      href={project.linkLive}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 transition-colors hover:text-white group"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span className="group-hover:underline">Live Demo</span>
                    </a>
                  </motion.div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Projects;
