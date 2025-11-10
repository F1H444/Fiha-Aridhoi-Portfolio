// components/SmoothScroll.tsx

"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = () => {
  useEffect(() => {
    // Inisialisasi Lenis
    const lenis = new Lenis({
      duration: 1.2, // Durasi animasi (lebih tinggi = lebih lambat)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      touchMultiplier: 2, // Multiplier untuk perangkat sentuh
    });

    // Fungsi untuk menjalankan loop animasi
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Mulai loop animasi
    requestAnimationFrame(raf);

    // Cleanup function
    return () => {
      lenis.destroy();
    };
  }, []); // Dependensi kosong, hanya berjalan sekali

  return null; // Komponen ini tidak me-render UI apapun
};

export default SmoothScroll;
