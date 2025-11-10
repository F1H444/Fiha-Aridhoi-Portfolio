"use client";

import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Rocket, Move3d, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const About = () => {
  const title = "Tentang Saya";

  const viewportConfig = { once: true, amount: 0.3 };
  const textEase = "easeOut";
  const backEase = [0.34, 1.56, 0.64, 1];

  return (
    <main
      id="tentang"
      className={`${inter.variable} font-sans relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-white p-8 md:p-16`}
    >
      <section className="grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-24 items-center">
        {/* SISI KIRI: FOTO (5 Kolom) */}
        <motion.div
          className="w-full lg:col-span-5 transition-transform duration-300 ease-out hover:scale-[1.03] hover:-translate-y-1"
          initial={{ x: -100, scale: 0.8, opacity: 0 }}
          whileInView={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={viewportConfig}
        >
          <Image
            src="/images/fiha.webp"
            alt="Foto Profil Fiha Aridhoi"
            width={600}
            height={750}
            priority
            className="object-contain w-full h-auto" // Menggunakan object-contain dan menghilangkan border/shadow
          />
        </motion.div>

        {/* SISI KANAN: BIO (7 Kolom) */}
        <div className="flex flex-col justify-center lg:col-span-7">
          {/* Judul */}
          <h1 className="text-4xl font-extrabold tracking-tighter text-white sm:text-6xl">
            {title.split("").map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ y: 30, rotateX: -90, opacity: 0 }}
                whileInView={{ y: 0, rotateX: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: backEase,
                  delay: 0.3 + index * 0.05,
                }}
                viewport={viewportConfig}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>

          {/* Paragraf 1 */}
          <motion.p
            className="mt-6 text-lg text-gray-300 leading-relaxed"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: textEase, delay: 0.6 }}
            viewport={viewportConfig}
          >
            Sebagai seorang Pengembang Frontend, saya percaya bahwa web bukan
            hanya tentang kode, tapi tentang menciptakan **pengalaman**. Saya
            memiliki hasrat untuk membangun antarmuka yang dinamis, interaktif,
            dan hidup, mengubah ide-ide kompleks menjadi kenyataan digital yang
            elegan.
          </motion.p>

          {/* Poin Kunci */}
          <div className="my-8 space-y-4">
            <motion.div
              className="flex items-center gap-3"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: textEase, delay: 0.8 }}
              viewport={viewportConfig}
            >
              <Rocket className="h-5 w-5 text-orange-500" />
              <span className="text-lg text-gray-200">
                Animasi Interaktif (GSAP)
              </span>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: textEase, delay: 0.95 }}
              viewport={viewportConfig}
            >
              <Move3d className="h-5 w-5 text-orange-500" />
              <span className="text-lg text-gray-200">
                Eksplorasi Web 3D (Three.js)
              </span>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: textEase, delay: 1.1 }}
              viewport={viewportConfig}
            >
              <BrainCircuit className="h-5 w-5 text-orange-500" />
              <span className="text-lg text-gray-200">Integrasi AI & IoT</span>
            </motion.div>
          </div>

          {/* Paragraf 2 */}
          <motion.p
            className="text-lg text-gray-300 leading-relaxed"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: textEase, delay: 1.2 }}
            viewport={viewportConfig}
          >
            Dari proyek AI untuk mengecek kalori hingga sistem Smart Farm
            berbasis IoT, saya selalu tertantang untuk mendorong batasan dari
            apa yang bisa dilakukan oleh sebuah website.
          </motion.p>
        </div>
      </section>
    </main>
  );
};

export default About;
