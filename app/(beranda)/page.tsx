"use client";

import React from "react";
import Hero from "./hero";
import Contact from "./kontak";
import Projects from "./project";
import Skills from "./skill";
import About from "./tentang";

// Impor AOS dan CSS-nya tidak diperlukan lagi
// import AOS from "aos";
// import "aos/dist/aos.css";

const Beranda = () => {
  // Inisialisasi AOS tidak diperlukan lagi
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //     offset: 50,
  //   });
  // }, []);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

export default Beranda;
