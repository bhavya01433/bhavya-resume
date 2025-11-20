"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const EducationSkills = () => {
  const [educationData, setEductionData] = useState<any>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEductionData(data?.educationData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  const allEducation = [
    ...(educationData?.education || []),
    
    {
      title: "12th Grade",
      description: "Fateh Public School, CBSE Board - 75%",
      // year: "2019"
    },
    {
      title: "10th Grade",
      description: "Bright Sun School, RBSE Board - 70%",
      // year: "2017"
    }
  ].sort((a: any, b: any) => {
    // Sort by year descending (newest first), but keep entries without year at the top
    if (!a.year && !b.year) return 0;
    if (!a.year) return -1; // API entries without year come first
    if (!b.year) return 1;
    return parseInt(b.year) - parseInt(a.year); // Newest first
  });

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
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section ref={ref} className="relative bg-gray-50 dark:bg-[#1a1a1a] py-20 md:py-32 overflow-hidden transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Hexagon Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(30deg, transparent, transparent 35px, rgba(0,0,0,0.05) 35px, rgba(0,0,0,0.05) 70px)`
        }} />
        
        <motion.div
          className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.4, 0.6, 0.4],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/4 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 24,
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
            Education & Tech Stacks
          </h2>
          <div className="w-16 h-0.5 bg-black dark:bg-white transition-colors duration-300" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Education Section */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-8 transition-colors duration-300">
              Education
            </h3>
            <div className="space-y-6">
              {allEducation.map((edu: any, index: number) => (
                <motion.div
                  key={index}
                  className="relative"
                  variants={fadeInUp}
                >
                  {/* Timeline Line */}
                  {index < allEducation.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transition-colors duration-300" />
                  )}

                  <div className="flex gap-6">
                    {/* Year Badge */}
                    <div className="flex-shrink-0">
                      <motion.div
                        className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center font-semibold text-sm text-black dark:text-white transition-colors duration-300"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 200 }}
                      >
                        {edu.year ? edu.year.slice(-2) : "•"}
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <motion.div
                      className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-200"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      whileHover={{ y: -2 }}
                    >
                      <h4 className="text-xl font-semibold text-black dark:text-white mb-2 transition-colors duration-300">
                        {edu.title}
                      </h4>
                      <p className="text-base text-secondary dark:text-gray-400 leading-relaxed transition-colors duration-300">
                        {edu.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-8 transition-colors duration-300">
              Tech Stacks
            </h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              variants={staggerContainer}
            >
              {educationData?.skills?.map((skill: any, index: number) => (
                <motion.div
                  key={index}
                  className="p-5 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600 transition-all duration-200 flex flex-col items-center gap-3 group"
                  variants={fadeInUp}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={skill?.icon}
                      alt={skill?.name}
                      width={60}
                      height={60}
                      className="transition-all"
                    />
                  </motion.div>
                  <p className="text-sm md:text-base font-medium text-black dark:text-white text-center transition-colors duration-300">
                    {skill?.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
