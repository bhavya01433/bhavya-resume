"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/work-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

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
    <section id="latest-work" ref={ref} className="relative bg-[#F5F5F0] dark:bg-[#1a1a1a] py-20 md:py-32 overflow-hidden transition-colors duration-300">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Wave Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)`
        }} />
        
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.35, 0.55, 0.35],
            x: [0, 50, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2.5 h-2.5 bg-primary/15 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 25}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.15, 0.4, 0.15],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
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
            Latest Projects
          </h2>
          <div className="w-16 h-0.5 bg-black dark:bg-white transition-colors duration-300" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
        >
          {workData?.map((project: any, index: number) => {
            return (
              <motion.div
                key={index}
                className="group"
                variants={fadeInUp}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.15 }}
              >
                <motion.a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Image Container with Layered Shadow */}
                  <div className="relative mb-6">
                    {/* Shadow Layer */}
                    <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-3xl transform translate-x-4 translate-y-4 -z-10 transition-colors duration-300" />
                    
                    {/* Image Container */}
                    <motion.div
                      className="relative rounded-3xl overflow-hidden bg-white dark:bg-gray-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] transition-colors duration-300"
                      whileHover={{ scale: 1.00 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="relative w-full aspect-[16/10] bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
                        <Image
                          src={project?.image}
                          alt={project?.title}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 570px"
                        />
                      </div>
                      
                      {/* Hover Overlay - Clean Icon Only */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <motion.div
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ scale: 0.8, rotate: -90 }}
                          whileHover={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-xl group-hover:bg-primary group-hover:shadow-primary/50 transition-all duration-300 pointer-events-auto">
                            <svg
                              className="w-6 h-6 text-black dark:text-white group-hover:text-white transition-colors"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 group-hover:border-gray-200 dark:group-hover:border-gray-600 transition-all duration-300">
                    <div className="space-y-5">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-semibold text-black dark:text-white group-hover:text-primary transition-colors duration-300 mb-2">
                            {project?.title}
                          </h3>
                          {project?.category && (
                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                              {project?.category}
                            </span>
                          )}
                        </div>
                        <motion.div
                          className="flex-shrink-0 mt-1 p-2 rounded-full bg-gray-50 dark:bg-gray-700 group-hover:bg-primary/10 transition-colors"
                          whileHover={{ x: 4, scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg
                            className="w-5 h-5 text-secondary dark:text-gray-400 group-hover:text-primary transition-colors"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </motion.div>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-secondary dark:text-gray-400 leading-relaxed transition-colors duration-300">
                        {project?.description}
                      </p>

                      {/* Tech Stack */}
                      {project?.techStack && project.techStack.length > 0 && (
                        <div className="pt-3 border-t border-gray-100 dark:border-gray-700 transition-colors duration-300">
                          <div className="flex items-center gap-2 mb-3">
                            <svg
                              className="w-4 h-4 text-secondary dark:text-gray-400 transition-colors duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                              />
                            </svg>
                            <span className="text-sm font-semibold text-black dark:text-white transition-colors duration-300">Tech Stack</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech: string, techIndex: number) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1.5 bg-gray-50 dark:bg-gray-700 text-sm font-medium text-black dark:text-white rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary/30 dark:hover:border-primary/50 hover:bg-primary/5 transition-all duration-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Key Features */}
                      {project?.features && project.features.length > 0 && (
                        <div className="pt-3 border-t border-gray-100 dark:border-gray-700 transition-colors duration-300">
                          <div className="flex items-center gap-2 mb-3">
                            <svg
                              className="w-4 h-4 text-secondary dark:text-gray-400 transition-colors duration-300"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            <span className="text-sm font-semibold text-black dark:text-white transition-colors duration-300">Key Features</span>
                          </div>
                          <ul className="space-y-2">
                            {project.features.map((feature: string, featureIndex: number) => (
                              <li key={featureIndex} className="flex items-center gap-2 text-sm text-secondary dark:text-gray-400 transition-colors duration-300">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default LatestWork;
