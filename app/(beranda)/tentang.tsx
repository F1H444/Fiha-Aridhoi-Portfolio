"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { useRef } from "react";

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;
  const containerRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const bgX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } 
    }
  };

  return (
    <section 
      id="tentang" 
      ref={containerRef}
      className="relative min-h-screen w-full bg-black overflow-hidden flex items-center justify-center p-6 md:p-16"
    >
      <motion.div 
        style={{ x: bgX }}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[200%] text-center pointer-events-none opacity-[0.02] whitespace-nowrap"
      >

      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-[1400px] grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-center"
      >
        <div className="md:col-span-4 flex flex-col justify-center py-2">
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-5 group cursor-pointer">
              <motion.span 
                whileHover={{ width: 40 }}
                className="h-[1px] w-6 bg-orange-500 transition-all" 
              />
              <span className="text-orange-500 font-mono text-[9px] uppercase tracking-[0.4em]">
                {t.label}
              </span>
            </div>
            
            <motion.h2 
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-black text-white leading-[0.9] uppercase tracking-tighter mb-8"
            >
              {t.title.split(" ").map((word, i) => (
                <motion.span 
                  key={i} 
                  className="inline-block mr-3 hover:text-orange-500 transition-colors duration-300 cursor-default"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            <div className="max-w-sm">
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-12">
                {t.p1}
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="hidden md:block">
             <div className="border-t border-zinc-900 pt-8">
                <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest mb-6">// {t.expertise}</p>
                <div className="flex flex-col gap-y-4">
                   {[t.skills.gsap, t.skills.nextjs, t.skills.backend].map((skill, idx) => (
                     <div 
                        key={idx} 
                        className="flex items-center gap-3 group cursor-default"
                     >
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-orange-500 group-hover:shadow-[0_0_8px_#f97316] transition-all duration-300" />
                        <span className="text-zinc-500 text-[11px] font-bold uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                          {skill}
                        </span>
                     </div>
                   ))}
                </div>
             </div>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, perspective: 1000 }}
          className="md:col-span-4 relative flex items-center justify-center cursor-crosshair z-20"
        >
          <div className="relative w-full h-[500px] md:h-[750px] flex items-center justify-center">
            <Image
              src="/images/fiha.png"
              alt="Fiha Aridhoi"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-contain grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-[1.15] drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)]"
            />
          </div>
        </motion.div>

        <div className="md:col-span-4 flex flex-col justify-center py-2 md:pl-12">
          <motion.div variants={itemVariants} className="space-y-10">
             <motion.div 
                className="relative p-6 rounded-2xl transition-all duration-500 hover:bg-zinc-900/10 group"
             >
                <span className="absolute -top-4 -left-2 text-7xl text-orange-500/10 font-serif group-hover:text-orange-500/20 transition-colors">“</span>
                <p className="text-zinc-300 text-lg md:text-2xl leading-tight font-medium italic relative z-10 tracking-tight">
                  {t.p2}
                </p>
             </motion.div>
             
             <div className="grid grid-cols-2 gap-8 pt-10 border-t border-zinc-900">
                <div className="cursor-default">
                   <p className="text-zinc-700 font-mono text-[9px] uppercase tracking-widest mb-2">{t.info.location}</p>
                   <p className="text-zinc-200 text-xs font-black uppercase tracking-tighter">{t.info.city}</p>
                </div>
                <div className="cursor-default">
                   <p className="text-zinc-700 font-mono text-[9px] uppercase tracking-widest mb-2">{t.info.status}</p>
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]" />
                      <p className="text-zinc-200 text-xs font-black uppercase tracking-tighter italic">{t.info.available}</p>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block"
      >
         <p className="rotate-90 origin-center text-zinc-900 font-mono text-[10px] tracking-[1em] uppercase whitespace-nowrap">
            {t.verticalLabel}
         </p>
      </motion.div>
    </section>
  );
};

export default About;