"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
    const [contactData, setContactData] = useState<any>(null);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        number: "",
        email: "",
        message: ""
    });
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/page-data');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                setContactData(data?.contactLinks);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchData();
    }, []);

    const reset = () => {
        setFormData({
            name: "",
            number: "",
            email: "",
            message: ""
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        fetch("https://formsubmit.co/ajax/bhainirav772@gmail.com", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                name: formData.name,
                number: formData.number,
                email: formData.email,
                message: formData.message,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setSubmitted(data.success);
                reset();
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const formVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const,
            },
        },
    };

    const linksVariants = {
        hidden: { opacity: 0, x: 30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const,
            },
        },
    };

    return (
        <section ref={ref} className="no-print relative bg-gray-50 dark:bg-[#1a1a1a] py-20 md:py-32 overflow-hidden transition-colors duration-300">
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Circle Pattern Overlay */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
                
                <motion.div
                    className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.6, 0.4],
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
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            
            <div className="container relative z-10">
                <div className="pb-20">
                    <motion.div
                        className="mb-16 md:mb-20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black dark:text-white mb-4 transition-colors duration-300">
                            Contact Me
                        </h2>
                        <div className="w-16 h-0.5 bg-black dark:bg-white transition-colors duration-300" />
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.form
                            onSubmit={handleSubmit}
                            variants={formVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <div className="flex flex-col gap-7 sm:gap-12">
                                <div className="grid grid-cols-2 gap-8">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <label htmlFor="name" className="label block mb-2 font-medium text-black dark:text-white transition-colors duration-300">Name *</label>
                                        <input
                                            required
                                            className="input focus:border-primary/50 transition-colors duration-300"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <label htmlFor="number" className="label block mb-2 font-medium text-black dark:text-white transition-colors duration-300">Phone *</label>
                                        <input
                                            required
                                            className="input focus:border-primary/50 transition-colors duration-300"
                                            id="number"
                                            type="tel"
                                            name="number"
                                            value={formData.number}
                                            onChange={handleChange}
                                        />
                                    </motion.div>
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <label htmlFor="email" className="label block mb-2 font-medium text-black dark:text-white transition-colors duration-300">Email *</label>
                                    <input
                                        required
                                        className="input focus:border-primary/50 transition-colors duration-300"
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <label htmlFor="message" className="label block mb-2 font-medium text-black dark:text-white transition-colors duration-300">Message *</label>
                                    <textarea
                                        required
                                        className="input focus:border-primary/50 transition-colors duration-300 resize-none"
                                        name="message"
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                    />
                                </motion.div>
                                {submitted &&
                                    <motion.div
                                        className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                    >
                                        <Image src={"/images/icon/success-icon.svg"} alt="success-icon" width={30} height={30} />
                                        <p className="text-green-700 font-medium">Great!!! Email has been Successfully Sent. We will get in touch asap.</p>
                                    </motion.div>
                                }
                                <motion.button
                                    type="submit"
                                    className="relative overflow-hidden cursor-pointer w-fit py-2 sm:py-3 md:py-5 px-4 sm:px-5 md:px-7 border border-primary rounded-full group"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <span className="relative z-10 text-xl font-medium text-primary group-hover:text-white transition-colors duration-300">Send Now</span>
                                </motion.button>
                            </div>
                        </motion.form>
                        <motion.div
                            className="flex flex-col sm:flex-row md:flex-col justify-between gap-5 md:gap-20 items-center md:items-end"
                            variants={linksVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            <div className="flex flex-wrap flex-row md:flex-col items-start md:items-end gap-4 md:gap-6">
                                {contactData?.socialLinks?.map((value: any, index: any) => {
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                            transition={{ delay: 0.3 + index * 0.1 }}
                                        >
                                            <Link
                                                href={value?.href}
                                                className="text-base sm:text-lg font-medium text-secondary dark:text-gray-400 hover:text-primary transition-colors duration-300 relative group/link"
                                            >
                                                {value?.title}
                                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover/link:w-full transition-all duration-300" />
                                            </Link>
                                        </motion.div>
                                    )
                                })}
                            </div>
                            <div className="flex flex-wrap justify-center gap-5 lg:gap-11 items-end">
                                {contactData?.contactInfo?.map((value: any, index: any) => {
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                            transition={{ delay: 0.4 + index * 0.1 }}
                                        >
                                            <Link
                                                href={value?.link}
                                                className="text-base lg:text-lg text-black dark:text-white font-semibold border-b-2 border-black dark:border-white pb-3 hover:text-primary hover:border-primary transition-all duration-300"
                                            >
                                                {value?.label}
                                            </Link>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact