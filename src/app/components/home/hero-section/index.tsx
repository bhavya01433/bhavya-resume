"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const index = () => {
  // Subtle fade-in animations - Apple-style minimal
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  };

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <section className="relative bg-[#F5F5F0] dark:bg-[#1a1a1a] min-h-screen flex items-center pt-24 md:pt-32 pb-20 md:pb-32 overflow-hidden transition-colors duration-300">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
        
        <motion.div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-primary/4 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
      <div className="container relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Content Section */}
          <motion.div
            className="flex flex-col space-y-8 lg:space-y-10"
            variants={staggerContainer}
          >
            {/* Greeting with Animated Wave */}
            <motion.div
              className="flex items-center gap-3 mb-2"
              variants={fadeInUp}
            >
              <motion.span
                className="text-lg md:text-xl font-medium text-secondary dark:text-gray-400 transition-colors duration-300"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Hello
              </motion.span>
              <motion.span
                className="text-2xl md:text-3xl"
                animate={{
                  rotate: [0, 14, -8, 14, -4, 10, 0],
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: "70% 70%" }}
              >
                👋
              </motion.span>
              <motion.span
                className="text-lg md:text-xl font-bold text-secondary dark:text-gray-400 transition-colors duration-300"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                I'm
              </motion.span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              className="space-y-3"
              variants={fadeInUp}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-black dark:text-white leading-[1.1] tracking-tight transition-colors duration-300">
                Bhavya
              </h1>
              <div className="flex items-baseline gap-3">
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-secondary dark:text-gray-400 leading-tight transition-colors duration-300">
                  Web Developer
                </h2>
                <motion.div
                  className="h-1 w-12 bg-primary rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 48, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </div>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              className="text-lg md:text-xl text-secondary dark:text-gray-400 leading-relaxed max-w-lg font-light transition-colors duration-300"
              variants={fadeInUp}
            >
              Front-End & AI Developer skilled in React.js, Next.js, and cloud
              platforms, building scalable web apps with precision and
              performance.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={fadeInUp}
              className="pt-4"
            >
              <motion.button
                onClick={() => {
                  const workSection = document.getElementById('latest-work');
                  workSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-base tracking-wide overflow-hidden transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
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
            </motion.div>

            {/* Status Indicator */}
            <motion.div
              className="flex items-center gap-3 pt-2"
              variants={fadeInUp}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                <div className="relative w-2 h-2 bg-primary rounded-full" />
              </div>
              <span className="text-sm text-secondary dark:text-gray-400 font-light transition-colors duration-300">
                Available for opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* Photo Section */}
          <motion.div
            className="relative lg:pl-8"
            variants={fadeIn}
          >
            <div className="relative">
              {/* Subtle shadow container */}
              <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-3xl transform translate-x-4 translate-y-4 transition-colors duration-300" />
              
              {/* Image container */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)]"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={"/images/home/banner/bhavya1.jpg"}
                  alt="Bhavya - Web Developer"
                  width={685}
                  height={650}
                  className="w-full h-auto object-cover"
                  priority
                />
              </motion.div>

              {/* Decorative accent - minimal */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default index;
