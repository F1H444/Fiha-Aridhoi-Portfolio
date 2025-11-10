"use client";

import React from "react"; // useRef dihapus
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
import { ChevronsDown } from "lucide-react"; // Ikon untuk AOS
import { motion } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// --- DAFTAR KEAHLIAN DIPERBARUI ---
const languages = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "PHP", icon: SiPhp },
  { name: "MySQL", icon: SiMysql },
];

const frameworksAndLibraries = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "GSAP", icon: SiGreensock },
  { name: "AOS", icon: ChevronsDown },
  { name: "Laravel", icon: SiLaravel },
];

const versionControlTools = [
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "GitLab", icon: SiGitlab },
];
// --- AKHIR PEMBARUAN ---

const AnimatedH2 = ({
  title,
  className = "",
}: {
  title: string;
  className?: string;
}) => {
  const backEase = "backOut";
  const viewportConfig = { once: true, amount: 0.5 };

  return (
    <h2
      className={`text-3xl font-bold tracking-tight text-orange-500 sm:text-4xl text-center ${className}`}
    >
      {title.split("").map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ y: 20, opacity: 0 }}
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
    </h2>
  );
};

const Skills = () => {
  const title = "Keahlian Saya";
  const backEase = "backOut";
  const viewportConfig = { once: true, amount: 0.5 };

  return (
    <main
      id="skills"
      className={`${inter.variable} font-sans relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-black text-white p-8 md:p-16`}
    >
      <div className="w-full max-w-7xl">
        <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-6xl text-center">
          {title.split("").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: backEase,
                delay: 0.2 + index * 0.05,
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
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          viewport={viewportConfig}
        >
          Teknologi yang saya gunakan untuk mengubah ide menjadi produk digital
          yang interaktif dan berperforma tinggi.
        </motion.p>

        <section className="mt-24">
          <AnimatedH2 title="Frameworks & Libraries" />
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {frameworksAndLibraries.map((skill, index) => (
              <SkillCard
                key={skill.name}
                icon={<skill.icon />}
                name={skill.name}
                delay={index * 0.08}
              />
            ))}
          </div>
        </section>

        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <section>
            <AnimatedH2 title="Languages" />
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {languages.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  icon={<skill.icon />}
                  name={skill.name}
                  delay={index * 0.08}
                />
              ))}
            </div>
          </section>

          {/* --- BAGIAN DIPERBARUI --- */}
          <section>
            <AnimatedH2 title="Tools Version Control" />
            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {versionControlTools.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  icon={<skill.icon />}
                  name={skill.name}
                  delay={index * 0.08}
                />
              ))}
            </div>
          </section>
          {/* --- AKHIR PEMBARUAN --- */}
        </div>
      </div>
    </main>
  );
};

const SkillCard = ({
  icon,
  name,
  delay,
}: {
  icon: React.ReactNode;
  name: string;
  delay: number;
}) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-800/50 bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-6 backdrop-blur-sm text-gray-300 transition-all duration-300 ease-in-out hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-1 group"
      initial={{ y: 50, scale: 0.8, opacity: 0 }}
      whileInView={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <span className="text-4xl lg:text-5xl text-gray-400 group-hover:text-orange-400 transition-colors duration-300 group-hover:scale-110 group-hover:rotate-3 transform-gpu">
        {icon}
      </span>
      <span className="font-medium text-center text-gray-300 group-hover:text-orange-400 transition-colors duration-300">
        {name}
      </span>
    </motion.div>
  );
};

export default Skills;
