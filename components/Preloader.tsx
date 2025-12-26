"use client";

import { useState, useEffect } from "react";
import { motion, animate, AnimatePresence } from "framer-motion";
import { usePreloader } from "@/contexts/PreloaderContext";

const Preloader = () => {
  const [count, setCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const { isPreloading, setIsPreloading } = usePreloader();

  useEffect(() => {
    // 1. Jalankan Counter
    const controls = animate(0, 100, {
      duration: 3,
      ease: [0.65, 0, 0.35, 1],
      onUpdate(value) {
        setCount(Math.round(value));
      },
      onComplete() {
        // Mulai efek kejut, blur, dan transparansi background
        setIsFinished(true);

        // Hapus komponen dari DOM setelah animasi transisi selesai
        setTimeout(() => {
          setIsPreloading(false);
        }, 1000); 
      },
    });

    return () => controls.stop();
  }, [setIsPreloading]);

  return (
    <AnimatePresence>
      {isPreloading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          // Exit agar saat komponen dilepas, ia memudar halus
          exit={{ opacity: 0 }}
        >
          {/* BACKGROUND LAYER: Berubah transparan saat selesai */}
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isFinished ? 0 : 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-black"
          />

          {/* KONTEN ANGKA: Responsive & Efek Kejut */}
          <div className="relative z-10 flex items-center justify-center w-full px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: isFinished ? 0 : 1, 
                scale: isFinished ? 2 : 1, // Membesar (Efek Kejut)
                filter: isFinished ? "blur(30px)" : "blur(0px)", // Efek Blur
              }}
              transition={{ 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="relative flex items-baseline justify-center"
            >
              {/* Counter Utama: Responsive Size */}
              <h1 className="text-[clamp(5rem,18vw,20rem)] font-black text-white leading-none tracking-tighter">
                {count}
              </h1>
              
              {/* Simbol Persen: Responsive Size */}
              <span className="text-[clamp(1.5rem,6vw,5rem)] font-black text-orange-500 ml-2 md:ml-4">
                %
              </span>

              {/* Angka Bayangan di Belakang untuk Depth */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <span className="text-[clamp(6rem,22vw,24rem)] font-black text-white/[0.02] select-none">
                  {count}
                </span>
              </div>
            </motion.div>
          </div>

          {/* FLASH EFFECT: Memberikan kesan transisi yang "bersih" */}
          <AnimatePresence>
            {isFinished && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white z-20 pointer-events-none"
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;