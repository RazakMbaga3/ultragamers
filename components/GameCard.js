"use client";
import CTAButton from "./CTAButton";

import { motion } from "framer-motion";

export default function GameCard({ game, onAdd }) {
  return (
    <motion.div
      className="bg-[#181818] border border-[#222] soft-shadow rounded-xl p-4 flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, boxShadow: "0 8px 32px 0 rgba(7,37,89,0.18)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.img
        src={game.coverImage}
        alt={game.title}
        className="w-32 h-32 object-contain mb-4 drop-shadow-lg"
        style={{ filter: "drop-shadow(0 8px 32px #07255955)" }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
      <h2 className="text-lg font-bold text-white mb-1 text-center">{game.title}</h2>
      <div className="text-xs text-[#b0b0b0] mb-2">{game.console}</div>
      <CTAButton
        variant="primary"
        className="w-full mt-auto"
        onClick={() => onAdd && onAdd(game)}
      >
        Add to Booking
      </CTAButton>
    </motion.div>
  );
}
