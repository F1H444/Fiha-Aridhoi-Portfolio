"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Globe, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import { usePreloader } from "@/contexts/PreloaderContext";
import { useLenis } from "@/components/SmoothScroll";

export default function UltimateFixedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  const [mounted, setMounted] = useState(false);

  const { language, toggleLanguage } = useLanguage();
  const { isPreloading } = usePreloader();
  const { lenis } = useLenis();
  const { scrollY } = useScroll();
  const t = useMemo(() => translations[language].navbar, [language]);

  const navLinks = useMemo(() => [
    { id: "beranda", name: t.home, href: "/#beranda" },
    { id: "tentang", name: t.about, href: "/#tentang" },
    { id: "skills", name: t.skills, href: "/#skills" },
    { id: "project", name: t.projects, href: "/#project" },
    { id: "kontak", name: t.contact, href: "/#kontak" },
  ], [t]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
    if (latest < 100) setActiveSection("beranda");
  });

  useEffect(() => {
    const observerOptions = {
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [navLinks]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    setIsMobileMenuOpen(false);

    if (id === "beranda") {
      lenis?.scrollTo(0);
    } else {
      const el = document.getElementById(id);
      if (el) {
        lenis?.scrollTo(el, { offset: -100 });
      }
    }
    window.history.pushState(null, "", id === "beranda" ? "/" : `/#${id}`);
  };

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 w-full z-[100] px-4 md:px-8 py-5 md:py-8 pointer-events-none mt-7">
      <motion.nav 
        variants={{
          hidden: { 
            width: "4rem", // Starts as a small pill
            opacity: 0,
            paddingLeft: "0rem",
            paddingRight: "0rem",
          },
          visible: { 
            width: "100%", 
            opacity: 1,
            paddingLeft: "2.5rem", 
            paddingRight: "2.5rem",
            transition: { 
              type: "spring",
              bounce: 0.3, // Bouncy spring effect
              duration: 1.2,
              when: "beforeChildren",
              staggerChildren: 0.15
            }
          }
        }}
        initial="hidden"
        animate={isPreloading ? "hidden" : "visible"}
        className={`mx-auto max-w-6xl pointer-events-auto border-[3px] border-black dark:border-white relative transition-colors duration-500 overflow-hidden ${
          isScrolled 
            ? "bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)]" 
            : "bg-orange-400 dark:bg-orange-500 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
        }`}
        style={{
          borderRadius: "2.5rem",
          paddingTop: "1.25rem",
          paddingBottom: "1.25rem",
        }}
      >
        <div className="flex items-center justify-between relative z-10 w-full">
          <motion.div 
            variants={{
              hidden: { y: 20, opacity: 0, scale: 0.9, filter: "blur(10px)" },
              visible: { 
                y: 0, 
                opacity: 1, 
                scale: 1, 
                filter: "blur(0px)",
                transition: { type: "spring", bounce: 0.4, duration: 0.8 } 
              }
            }}
          >
            <Link 
              href="/#beranda" 
              onClick={(e) => handleSmoothScroll(e, "beranda")}
              className="flex items-center gap-4 group"
            >
            <div className="relative w-11 h-11 border-[3px] border-black dark:border-white bg-white rotate-[-3deg] group-hover:rotate-0 transition-all duration-500 overflow-hidden">
              <Image src="/images/fiha.png" alt="Logo" fill className="object-cover grayscale group-hover:grayscale-0" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-black uppercase italic leading-none tracking-tighter text-black dark:text-white">
                Fiha Aridhoi
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/60 dark:text-white/60">Web Developer</p>
            </div>
          </Link>

          </motion.div>

          <motion.div 
            variants={{
              hidden: { y: 20, opacity: 0, scale: 0.9, filter: "blur(10px)" },
              visible: { 
                y: 0, 
                opacity: 1, 
                scale: 1, 
                filter: "blur(0px)",
                transition: { type: "spring", bounce: 0.4, duration: 0.8 } 
              }
            }}
            className="hidden lg:flex items-center bg-black/5 dark:bg-white/5 rounded-full p-1 border-2 border-black/10 dark:border-white/10 relative"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.id)}
                  className={`px-6 py-2 text-[11px] font-black uppercase tracking-widest transition-colors relative rounded-full ${
                    isActive ? "text-white dark:text-black" : "text-black dark:text-white hover:opacity-60"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="brutalist-active"
                      className="absolute inset-0 bg-black dark:bg-white rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </motion.div>

          <motion.div 
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
            }}
            className="flex items-center gap-4"
          >
            <button
              onClick={toggleLanguage}
              className="relative group hidden sm:flex items-center justify-center w-12 h-12 bg-white dark:bg-zinc-800 border-[3px] border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
            >
              <Globe size={18} />
              <span className="absolute -top-2 -right-2 bg-black dark:bg-white text-white dark:text-black text-[8px] font-black px-1 border-2 border-black">
                {language.toUpperCase()}
              </span>
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex lg:hidden items-center justify-center bg-black dark:bg-white text-white dark:text-black px-5 py-2 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-black text-xs tracking-widest active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              {isMobileMenuOpen ? "CLOSE" : "MENU"}
            </button>
          </motion.div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-orange-500 dark:bg-zinc-950 z-[101] p-6 flex flex-col pointer-events-auto"
          >
            <div className="flex justify-between items-center mb-12 pt-4">
              <span className="font-black text-4xl tracking-tighter text-black dark:text-white uppercase italic">MENU</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black border-[3px] border-black font-black text-xs"
              >
                CLOSE
              </button>
            </div>

            <div className="space-y-4 flex-1">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.id)}
                    className={`group flex items-center justify-between p-6 border-[4px] border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
                      activeSection === link.id ? "bg-white text-black" : "bg-transparent text-black dark:text-white"
                    }`}
                  >
                    <span className="text-3xl font-black uppercase italic">{link.name}</span>
                    <ArrowUpRight size={24} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}