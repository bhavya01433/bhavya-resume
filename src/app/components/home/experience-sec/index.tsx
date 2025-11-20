"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ExperienceSec = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      year: "2025",
      title: "Frontend Developer",
      company: "WrapPixel",
      companyUrl: "www.wrappixel.com",
      type: "Internship",
      period: "Jan – Aug 2025",
      highlights: [
        "Built scalable UI components and admin dashboards using React.js and Next.js",
        "Improved application performance through server-side rendering and code-splitting",
        "Transformed Figma wireframes into pixel-perfect, responsive layouts",
        "Streamlined releases with automated build and deployment flows (GitHub & Vercel)"
      ],
    },
    {
      year: "2024",
      title: "Frontend Developer",
      company: "Cognifyz Technologies",
      companyUrl: "www.cognifyz.com",
      type: "Summer Internship",
      period: "Jun – Aug 2024",
      highlights: [
        "Designed and built responsive web interfaces with Bootstrap, JavaScript, and CSS",
        "Enhanced cross-browser compatibility and optimized page load times",
        "Learned best practices for version control and teamwork",
        "Delivered production-ready code under tight deadlines"
      ],
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section ref={ref} className="relative bg-[#F5F5F0] dark:bg-[#1a1a1a] py-20 md:py-32 overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Line Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 20px)`
        }} />
        
        <motion.div
          className="absolute top-1/2 left-0 w-[550px] h-[550px] bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-primary/4 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.55, 0.35],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Section Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black dark:text-white mb-4 transition-colors duration-300">
            Experience
          </h2>
          <div className="w-16 h-0.5 bg-black dark:bg-white transition-colors duration-300" />
        </motion.div>

        <motion.div
          className="space-y-8 md:space-y-12"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={fadeInUp}
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block transition-colors duration-300" />
              )}

              <div className="flex gap-6 md:gap-8">
                {/* Year Badge */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center font-semibold text-sm md:text-base transition-colors duration-300"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ delay: 0.2 + index * 0.2, type: "spring", stiffness: 200 }}
                  >
                    {exp.year.slice(-2)}
                  </motion.div>
                </div>

                {/* Content Card */}
                <motion.div
                  className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-200"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.1 + index * 0.2 }}
                  whileHover={{ y: -2 }}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-2 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <a
                          href={`https://${exp.companyUrl}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-medium text-black dark:text-white hover:text-primary transition-colors duration-200"
                        >
                          {exp.company}
                        </a>
                        <span className="hidden md:inline text-secondary dark:text-gray-400 transition-colors duration-300">•</span>
                        <span className="text-base text-secondary dark:text-gray-400 font-medium transition-colors duration-300">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium w-fit">
                      {exp.type}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 text-base text-secondary dark:text-gray-400 transition-colors duration-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ delay: 0.3 + index * 0.2 + i * 0.1 }}
                      >
                        <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSec;
