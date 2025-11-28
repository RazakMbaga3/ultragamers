"use client";
import CTAButton from "../components/CTAButton";
import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      className="gradient-bg section flex flex-col md:flex-row items-center justify-between min-h-[60vh]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="flex-1 flex flex-col items-start justify-center"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          PlayStation Rentals • Delivered Anywhere in Dar
        </motion.h1>
        <motion.p
          className="mb-8 text-lg text-[#e0e0e0] max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Experience gaming at its best! Ultra Gamers brings PlayStation consoles and games right to your doorstep. Fast delivery, easy booking, and premium service for all gamers in Dar es Salaam.
        </motion.p>
        <motion.div className="flex gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }}>
          <CTAButton variant="primary">Book Now</CTAButton>
          <CTAButton variant="outline" icon={<PhoneCall size={20} />}>Call Now</CTAButton>
        </motion.div>
      </motion.div>
      <motion.div
        className="flex-1 flex items-center justify-center mt-10 md:mt-0"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src="/console.png"
          alt="PlayStation Console"
          className="w-72 h-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </motion.div>
    </motion.section>
  );
}
