"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const stats = [
    { count: "08", label: "Months Experience", icon: "📅" },
    { count: "3", label: "Live Websites", icon: "🌐" },
    { count: "10+", label: "Projects", icon: "💼" },
    { count: "100+", label: "UI Components", icon: "🎨" },
  ];

  const strengths = [
    {
      title: "Frontend Development",
      description: "Building scalable web applications with React.js, Next.js, and modern CSS frameworks",
      icon: "⚡"
    },
    {
      title: "AI Integration",
      description: "Leveraging Gemini, Convex, and automation tools to create intelligent solutions",
      icon: "🤖"
    },
    {
      title: "UI/UX Excellence",
      description: "Crafting human-centered interfaces with attention to detail and performance",
      icon: "✨"
    }
  ];

  const achievements = [
    "Delivered 2 production-ready websites during internships",
    "Built 3 AI-powered tools solving real-world problems",
    "Created 100+ reusable UI components for scalable development",
    "Worked with leading companies: WrapPixel & Cognifyz Technologies"
  ];

  return (
    <section ref={ref} className="relative bg-[#F5F5F0] dark:bg-[#1a1a1a] py-20 md:py-32 transition-colors duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle Dot Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }} />
        
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 18,
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
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-black dark:bg-white transition-colors duration-300" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Content (Scrollable) */}
          <motion.div 
            className="space-y-12 lg:pr-4"
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            {/* Introduction */}
            <motion.div variants={fadeInUp}>
              <p className="text-xl md:text-2xl text-black dark:text-white leading-relaxed font-light mb-6 transition-colors duration-300">
                I turn <span className="font-semibold">complex problems into elegant solutions</span> where clean code meets 
                intelligent design, and every pixel serves a purpose.
              </p>
              <p className="text-lg text-secondary dark:text-gray-400 leading-relaxed transition-colors duration-300">
                Over the past 8 months, I've bridged the gap between cutting-edge AI technology and intuitive user interfaces. 
                From building production-ready applications at WrapPixel and Cognifyz Technologies to creating AI-powered tools 
                that solve real-world challenges, I've learned that great software isn't just functional it's delightful, 
                accessible, and built to scale.
              </p>
              <p className="text-lg text-secondary dark:text-gray-400 leading-relaxed mt-4 transition-colors duration-300">
                I'm driven by the belief that technology should feel effortless. Whether it's optimizing performance, 
                crafting reusable component libraries, or integrating AI seamlessly into user workflows, I approach every 
                project with precision, curiosity, and a commitment to excellence.
              </p>
            </motion.div>

            {/* Key Strengths */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-6 transition-colors duration-300">
                What I Do
              </h3>
              <div className="space-y-4">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-white dark:hover:bg-gray-800 transition-colors duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <div className="text-2xl flex-shrink-0">{strength.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-black dark:text-white mb-1 transition-colors duration-300">
                        {strength.title}
                      </h4>
                      <p className="text-base text-secondary dark:text-gray-400 leading-relaxed transition-colors duration-300">
                        {strength.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl md:text-3xl font-semibold text-black dark:text-white mb-6 transition-colors duration-300">
                Key Achievements
              </h3>
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-lg text-secondary dark:text-gray-400 transition-colors duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats & Languages (Sticky) */}
          <motion.div 
            className="space-y-12 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto lg:overflow-x-hidden sticky-section lg:z-10"
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
          >
            {/* Stats Cards */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/50 hover:shadow-md transition-all duration-200 shadow-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-1 transition-colors duration-300">
                    {stat.count}
                  </div>
                  <div className="text-sm text-secondary dark:text-gray-400 font-medium transition-colors duration-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Languages */}
            <motion.div
              variants={fadeInUp}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4 flex items-center gap-2 transition-colors duration-300">
                <Image
                  src="/images/icon/lang-icon.svg"
                  alt="language"
                  width={24}
                  height={24}
                  className="opacity-60 dark:invert"
                />
                Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {["English", "Hindi"].map((lang, i) => (
                  <motion.span
                    key={lang}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-base font-medium text-black dark:text-white border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors duration-200"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {lang}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Tech Focus */}
            <motion.div
              variants={fadeInUp}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-black dark:text-white mb-4 transition-colors duration-300">
                Current Focus
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-base text-secondary dark:text-gray-400 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>Next.js & React.js Development</span>
                </div>
                <div className="flex items-center gap-2 text-base text-secondary dark:text-gray-400 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>AI Integration & Automation</span>
                </div>
                <div className="flex items-center gap-2 text-base text-secondary dark:text-gray-400 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>Performance Optimization</span>
                </div>
                <div className="flex items-center gap-2 text-base text-secondary dark:text-gray-400 transition-colors duration-300">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>Scalable UI Component Systems</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
