"use client";

import { useState, useEffect } from "react"; // UPDATE: Hapus useRef (tidak terpakai)
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  Home,
  User,
  Code,
  LayoutGrid,
  // ArrowRight, // UPDATE: Hapus (tidak terpakai)
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ModernNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
  // const pathname = usePathname(); // UPDATE: Hapus (tidak terpakai)
  const router = useRouter();

  // Efek scroll untuk style navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // UPDATE: Tautan navigasi sekarang menggunakan hash (#) untuk scroll
  const navLinks = [
    { id: "beranda", name: "Beranda", href: "/#beranda", icon: Home },
    { id: "tentang", name: "Tentang", href: "/#tentang", icon: User },
    { id: "skills", name: "Skill", href: "/#skills", icon: Code },
    { id: "project", name: "Project", href: "/#project", icon: LayoutGrid },
    { id: "kontak", name: "Kontak", href: "/#kontak", icon: Mail },
  ];

  // Prefetch root page
  useEffect(() => {
    router.prefetch("/");
  }, [router]);

  // Efek Intersection Observer untuk active section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -60% 0px",
      threshold: 0,
    };

    // UPDATE: Memberikan tipe yang benar, bukan 'any[]'
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean); // Filter(Boolean) akan menghapus null jika ada

    // Aman untuk observe karena null sudah difilter
    sections.forEach((section) => observer.observe(section!));

    return () => sections.forEach((section) => observer.unobserve(section!));
  }, [navLinks]); // Tambahkan navLinks sebagai dependensi

  // Definisikan varian animasi untuk Framer Motion
  const mobileMenuVariant = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const mobileLinkVariant = {
    hidden: { opacity: 0, x: -15 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -15 },
  };

  return (
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled
          ? "w-[90%] md:w-full max-w-2xl mt-4"
          : "w-[90%] md:w-full max-w-3xl mt-6"
      }`}
    >
      <div
        className={`backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border border-gray-200/30 dark:border-gray-700/30 transition-all duration-500 ${
          isScrolled ? "rounded-2xl shadow-lg" : "rounded-3xl shadow-xl"
        }`}
      >
        <div className="px-6 lg:px-8">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              isScrolled ? "h-16" : "h-20"
            }`}
          >
            {/* Logo */}
            <Link
              href="/#beranda"
              className="flex items-center space-x-3 group"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-lg overflow-hidden group-hover:scale-105 transition-transform duration-300 ease-in-out">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  fill
                  sizes="(max-width: 768px) 36px, 40px"
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              <span className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight group-hover:text-black dark:group-hover:text-white transition-colors">
                Fiha Aridhoi
              </span>
            </Link>

            {/* Navigasi Desktop (Modern) */}
            <div className="hidden md:flex items-center bg-gray-100/70 dark:bg-gray-800/70 p-1 rounded-full border border-gray-200/50 dark:border-gray-700/50">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full relative z-10 ${
                      isActive
                        ? "text-gray-900 dark:text-gray-100"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                    }`}
                    onClick={() => {
                      if (link.id === "kontak") setActiveSection("kontak");
                    }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="desktop-active-pill"
                        className="absolute inset-0 bg-white dark:bg-gray-700 shadow-md rounded-full"
                        style={{ zIndex: -1 }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Tombol Menu Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100/60 dark:hover:bg-gray-800/60 rounded-lg transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile (Modern) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden overflow-hidden border-t border-gray-200/50 dark:border-gray-700/50"
              variants={mobileMenuVariant}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="px-6 py-4 space-y-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  // FIX: Komponen harus diawali huruf besar untuk dirender
                  const Icon = link.icon;
                  return (
                    <motion.div key={link.name} variants={mobileLinkVariant}>
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 font-medium rounded-lg transition-all duration-300 transform hover:translate-x-1 ${
                          isActive
                            ? "bg-gray-100/60 dark:bg-gray-800/60 text-black dark:text-white"
                            : "text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white hover:bg-gray-100/60 dark:hover:bg-gray-800/60"
                        }`}
                      >
                        {/* FIX: Gunakan variabel 'Icon' yang sudah dikapitalisasi */}
                        <Icon
                          className={`w-5 h-5 ${
                            isActive ? "text-orange-500" : ""
                          }`}
                        />
                        <span>{link.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
