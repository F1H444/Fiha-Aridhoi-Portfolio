// components/Hero.tsx (atau di mana pun file ini berada)

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { usePreloader } from "@/contexts/PreloaderContext"; //

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const MotionLink = motion(Link);

const Hero = () => {
  const { isPreloading } = usePreloader(); // <-- 2. Baca status preloader
  const bigText = "FIHA ARIDHOI";
  const cleanBigText = bigText.replace(/\s/g, " ");

  // Fungsi helper untuk prop 'animate'
  // Jika isPreloading: true, kembalikan 'undefined', animasi tidak akan jalan
  // Jika isPreloading: false, kembalikan target animasi
  const getAnimateProps = (target: any) => {
    return isPreloading ? undefined : target;
  };

  return (
    <main
      id="beranda"
      className={`${inter.variable} font-sans relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black text-white`}
    >
      <motion.div
        className="pointer-events-none absolute bottom-8 sm:bottom-12 md:bottom-16 left-1/2 z-10 -translate-x-1/2 w-[300px] sm:w-[380px] md:w-[450px] lg:w-[550px] xl:w-[650px]"
        initial={{ y: 200, scale: 0.9, opacity: 0 }}
        // --- 3. PERBARUI DI SINI ---
        animate={getAnimateProps({ y: 0, scale: 1, opacity: 1 })}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.4,
        }}
      >
        <Image
          src="/images/fiha.webp"
          alt="Fiha Aridhoi | Photo"
          width={800}
          height={1000}
          priority
          className="h-auto w-full object-contain"
        />
      </motion.div>
      <motion.h2
        className="pointer-events-none absolute bottom-0 z-20 w-full overflow-hidden text-center font-extrabold uppercase text-white leading-none pb-2 sm:pb-4 md:pb-6 lg:pb-8"
        style={{
          fontSize: "clamp(1.75rem, 10vw, 25rem)",
          letterSpacing: "-0.05em",
        }}
      >
        {cleanBigText.split("").map((letter, index) => (
          <motion.span
            key={`letter-${index}`}
            className="inline-block"
            initial={{ y: 50, opacity: 0 }}
            // --- 3. PERBARUI DI SINI ---
            animate={getAnimateProps({ y: 0, opacity: 1 })}
            transition={{
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1],
              delay: 0.6 + index * 0.08, // Stagger tetap berfungsi
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.h2>
      <div className="absolute bottom-0 left-0 z-30 h-32 sm:h-40 md:h-48 w-full bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none"></div>
      <div
        className="relative z-40 grid w-full max-w-7xl grid-cols-1 p-6 min-h-screen
                   items-start pt-32 sm:p-8 sm:pt-40
                   md:items-center md:pt-12 md:p-12"
      >
        <div
          className="flex flex-col w-full gap-8
                     md:grid md:grid-cols-12 md:gap-12 md:items-center"
        >
          <div
            className="flex flex-col justify-center space-y-4 md:space-y-6
                     items-center text-center
                     md:col-span-4 md:items-start md:text-left"
          >
            <motion.div
              className="flex w-fit items-center gap-2 sm:gap-3 rounded-full border border-gray-800 bg-gray-900/50 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-gray-300 backdrop-blur-sm"
              initial={{ y: 50, opacity: 0 }}
              // --- 3. PERBARUI DI SINI ---
              animate={getAnimateProps({ y: 0, opacity: 1 })}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.2, // Stagger pertama
              }}
            >
              <span className="relative flex h-2 w-2 sm:h-3 sm:w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-orange-500"></span>
              </span>
              Available to Work
            </motion.div>
            <motion.h1
              className="text-4xl font-extrabold tracking-tighter text-white sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              initial={{ y: 50, opacity: 0 }}
              // --- 3. PERBARUI DI SINI ---
              animate={getAnimateProps({ y: 0, opacity: 1 })}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.35, // Stagger kedua
              }}
            >
              Frontend Developer
            </motion.h1>
          </div>
          <div
            className="flex flex-col justify-center space-y-6 lg:space-y-8
                     items-center text-center
                     md:col-span-4 md:col-start-9 md:items-end md:text-right"
          >
            <motion.p
              className="max-w-md text-base text-gray-400 sm:text-lg"
              initial={{ y: 50, opacity: 0 }}
              // --- 3. PERBARUI DI SINI ---
              animate={getAnimateProps({ y: 0, opacity: 1 })}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.5, // Stagger ketiga
              }}
            >
              Hai, saya Fiha Aridhoi – seorang Pengembang Frontend yang kreatif.
              Saya suka mewujudkan ide dengan teknologi modern seperti Next.js,
              Tailwind, dan animasi canggih menggunakan GSAP.
            </motion.p>
            <MotionLink
              href="/#kontak"
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full bg-orange-600 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium text-white shadow-lg shadow-orange-900/30 transition-all duration-300 hover:bg-orange-500 hover:shadow-xl hover:shadow-orange-800/40 hover:scale-105 active:scale-95 w-full md:w-auto block"
              initial={{ y: 50, opacity: 0 }}
              // --- 3. PERBARUI DI SINI ---
              animate={getAnimateProps({ y: 0, opacity: 1 })}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.65, // Stagger keempat
              }}
            >
              Kontak Saya
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight size={18} className="sm:w-5 sm:h-5" />
              </span>
            </MotionLink>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
