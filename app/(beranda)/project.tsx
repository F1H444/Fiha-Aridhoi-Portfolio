"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const projectsData = [
  {
    id: 1,
    title: "Kalkulator Pintar",
    description:
      "Website kalkulator modern yang dibangun menggunakan Next.js 16 dan React 19. Website ini menampilkan desain glassmorphism (efek kaca) yang elegan dan interaktif, ditenagai oleh TailwindCSS 4 dan Framer Motion.",
    imageUrl: "/project/kalkulator.webp",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer-Motion"],
    linkGithub: "https://github.com/F1H444/KalkulatorPintar",
    linkLive: "https://kalkulator-pintar.vercel.app/",
  },
  {
    id: 2,
    title: "SMKN2 SBY V2.0",
    description:
      "Proyek redesign total yang dibangun menggunakan Next.js 16 (App Router) dengan fokus pada performa tinggi, animasi yang kaya, dan pengalaman pengguna yang modern. Proyek ini bukan sekadar website statis, melainkan aplikasi web interaktif penuh yang menampilkan berbagai fitur canggih untuk profil sekolah.",
    imageUrl: "/project/smkn2.webp",
    techStack: ["Next.js", "React", "Tailwind CSS", "Framer-Motion", "Gsap"],
    linkGithub: "https://github.com/F1H444/SMKN2-SBY-v2.0",
    linkLive: "https://smkn-2-sby-v2-0.vercel.app/",
  },
  {
    id: 3,
    title: "PDMJ",
    description:
      "Di bawah arahan mentor, saya diamanatkan untuk melakukan revisi dan optimasi responsiveness pada website tersebut. Fokus utama tugas ini adalah memastikan layout dan seluruh elemen website dapat beradaptasi dan tampil dengan optimal ketika diakses melalui perangkat tablet (khususnya iPad) dan mobile.",
    imageUrl: "/project/pdmj.webp",
    techStack: ["Laravel", "Bootstrap", "AOS", "Swiper JS", "SCSS"],
    linkGithub: "", // Kosong, tombol tidak akan muncul
    linkLive: "https://pdmj.co.id/",
  },
  {
    id: 4,
    title: "AIA FLOOR",
    description:
      "Berkontribusi dalam peningkatan aspek responsif website AIA Floor (aiafloor.co.id). Saya berfokus pada perbaikan layout mobile dengan mengidentifikasi dan mengatasi masalah kurangnya padding horizontal",
    imageUrl: "/project/aia.webp",
    techStack: ["Laravel", "Bootstrap", "AOS", "Swiper JS", "SCSS"],
    linkGithub: "", // Kosong, tombol tidak akan muncul
    linkLive: "https://aiafloor.co.id/",
  },
  {
    id: 5,
    title: "TinyGambar",
    description:
      "Web modern untuk mengoptimalkan ukuran gambar (kompresi dan konversi ke WebP) yang berjalan sepenuhnya di sisi klien (client-side)",
    imageUrl: "/project/tiny.webp",
    techStack: ["Next.js", "React", "Tailwind CSS", "AI/ML", "Vercel"],
    linkGithub: "https://github.com/F1H444/TINYGambar",
    linkLive: "https://tinygambar.vercel.app/",
  },
];

const Projects = () => {
  const title = "Proyek Saya";

  const viewportConfig = { once: true, amount: 0.2 };

  return (
    <main
      id="project"
      className={`${inter.variable} font-sans relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-black text-white p-8 md:p-16`}
    >
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-6xl text-center">
          {" "}
          {title.split("").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "backOut",
                delay: index * 0.05,
              }}
              viewport={viewportConfig}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </h1>
        <motion.p
          className="mt-4 text-center text-lg text-gray-400 max-w-2xl mx-auto"
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
            const isEven = index % 2 === 0;
            const imageX = isEven ? -100 : 100;
            const textX = isEven ? 100 : -100;
            const orderClass = !isEven ? "lg:order-last" : "";

            return (
              <section
                key={project.id}
                className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
              >
                <motion.div
                  className={`w-full transition-transform duration-300 hover:scale-103 ${orderClass}`}
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
                    className="rounded-xl object-cover shadow-2xl shadow-black/30 border border-gray-800"
                  />
                </motion.div>
                <div className="flex flex-col justify-center">
                  <motion.h3
                    className="text-3xl font-bold tracking-tight text-orange-500 sm:text-4xl"
                    initial={{ x: textX, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.2,
                    }}
                    viewport={viewportConfig}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="mt-6 text-lg text-gray-300 leading-relaxed"
                    initial={{ x: textX, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.3,
                    }}
                    viewport={viewportConfig}
                  >
                    {project.description}
                  </motion.p>
                  <motion.div
                    className="mt-6 flex flex-wrap gap-3"
                    initial={{ x: textX, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.4,
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
                    className="mt-8 flex items-center gap-6"
                    initial={{ x: textX, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                      delay: 0.5,
                    }}
                    viewport={viewportConfig}
                  >
                    {/* Kondisi: Hanya tampilkan jika linkGithub ada isinya */}
                    {project.linkGithub && (
                      <a
                        href={project.linkGithub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-300 transition-colors hover:text-white group"
                      >
                        <Github className="h-5 w-5" />
                        <span className="group-hover:underline">GitHub</span>
                      </a>
                    )}

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
