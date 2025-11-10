// components/Preloader.tsx

"use client";

import { useState, useEffect } from "react";
import { motion, animate } from "framer-motion";
import { usePreloader } from "@/contexts/PreloaderContext"; // <-- 1. Impor hook

const Preloader = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { setIsPreloading } = usePreloader(); // <-- 2. Ambil fungsi setter

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 3,
      ease: [0.33, 1, 0.68, 1],
      onUpdate(value) {
        setCount(Math.round(value));
      },
      onComplete() {
        setTimeout(() => {
          setIsVisible(false);
          setIsPreloading(false); // <-- 3. Matikan saklar!
        }, 500);
      },
    });

    return () => controls.stop();
  }, [setIsPreloading]); // <-- 4. Tambahkan dependensi

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-end justify-end bg-black p-8 md:p-12"
      initial={{ y: 0 }}
      animate={{
        y: isVisible ? 0 : "-100%",
      }}
      transition={{ duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      <motion.span
        key={count}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="text-8xl font-bold text-white md:text-9xl"
        style={{ textShadow: "0 4px 15px rgba(0,0,0,0.3)" }}
      >
        {count}
      </motion.span>
      <span
        className="text-5xl font-semibold text-gray-400 md:text-6xl"
        style={{ textShadow: "0 2px 10px rgba(0,0,0,0.3)" }}
      >
        %
      </span>
    </motion.div>
  );
};

export default Preloader;
