"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ContactBar = () => {
    const [contactBarData, setContactBarData] = useState<any>(null);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setContactBarData(data?.contactBar);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section ref={ref}>
            <div className="border-t border-softGray/50 dark:border-gray-800/50 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm transition-colors duration-300">
                <div className="container">
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-7"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Contact Items */}
                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 md:gap-5 lg:gap-11">
                            {contactBarData?.contactItems?.map((value: any, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={value?.link}
                                        className="flex items-center gap-2 lg:gap-4 text-sm md:text-base group"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                            transition={{ type: "spring", stiffness: 300 }}
                                        >
                                            <Image
                                                src={value?.icon}
                                                alt={value?.type}
                                                width={24}
                                                height={24}
                                                className="min-w-[24px] min-h-[24px]"
                                            />
                                        </motion.div>
                                        
                                        <h6 className="text-sm md:text-base xl:text-xl text-secondary dark:text-gray-400 group-hover:text-primary transition-colors duration-300 font-medium">
                                            {value?.label}
                                        </h6>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Items */}
                        <div className="flex items-center justify-center md:justify-end gap-4 md:gap-2.5">
                            {contactBarData?.socialItems?.map((value: any, index: number) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                    transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 200 }}
                                >
                                    <motion.a
                                        href={value?.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, rotate: 5, y: -2 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Image
                                            src={value?.icon}
                                            alt={value?.platform}
                                            width={30}
                                            height={30}
                                            className="hover:opacity-80 transition-opacity drop-shadow-sm"
                                        />
                                    </motion.a>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactBar;
