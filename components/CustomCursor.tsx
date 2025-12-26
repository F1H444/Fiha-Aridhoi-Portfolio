"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse position values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for smooth movement
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    // 1. Track Mouse Movement
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    // 2. Track Hover State (More Robust)
    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if the element expects a pointer cursor (universal interactive check)
      const style = window.getComputedStyle(target);
      const isClickable = style.cursor === "pointer";

      // Also explicitly check mostly used interactive tags/classes
      const isInteractiveTag = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.closest("a") || 
        target.closest("button") ||
        target.closest('[data-hover="true"]'); // Explicit trigger for custom elements

      setIsHovered(isClickable || !!isInteractiveTag);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", checkHover);
    window.addEventListener("mouseout", () => setIsHovered(false));
    // Note: mouseout on window might not be enough for nested elements, 
    // but the next mouseover event will correct the state immediately.

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", checkHover);
      window.removeEventListener("mouseout", () => setIsHovered(false));
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovered ? 80 : 30, // Normal 30px, Hover 80px (Big expansion)
        height: isHovered ? 80 : 30,
        backgroundColor: isHovered ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)", 
        borderColor: isHovered ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.5)",
        mixBlendMode: isHovered ? "difference" : "normal", // Optional: ensures text remains readable
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.5, // Lightweight feel
      }}
      className="fixed top-0 left-0 rounded-full border border-white pointer-events-none z-[99999] hidden md:block" // Hidden on mobile
    />
  );
}
