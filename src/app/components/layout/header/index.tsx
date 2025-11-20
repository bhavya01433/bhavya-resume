"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "../logo";
import ThemeToggle from "../theme-toggle";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  // Subtle backdrop blur on scroll
  const headerBlur = useTransform(scrollY, [0, 100], [0, 20]);
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-[#F5F5F0]/80 dark:bg-[#1a1a1a]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800" 
          : "bg-[#F5F5F0]/0 dark:bg-[#1a1a1a]/0"
      }`}
      style={{
        backdropFilter: `blur(${headerBlur}px)`,
        opacity: headerOpacity,
      }}
    >
      <motion.div
        className="container"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          ease: [0.16, 1, 0.3, 1] 
        }}
      >
        <nav className="py-5 md:py-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ opacity: 0.8 }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer"
            >
              <Logo />
            </motion.div>

            {/* Right side - Theme Toggle and CTA Button */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <ThemeToggle />

              {/* CTA Button - Minimal Apple-style */}
              <motion.button
                onClick={handleDownloadPDF}
                className="group relative px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-sm md:text-base tracking-wide overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Download PDF
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ y: 0 }}
                    whileHover={{ y: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </motion.svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-primary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;
