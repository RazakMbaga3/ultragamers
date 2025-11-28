"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const consoles = [
  {
    name: "PlayStation 5",
    image: "/ps5.png",
    price: "TZS 60,000/day",
  },
  {
    name: "PlayStation 4 Pro",
    image: "/ps4pro.png",
    price: "TZS 45,000/day",
  },
  {
    name: "PlayStation 4 Slim",
    image: "/ps4slim.png",
    price: "TZS 40,000/day",
  },
];

const cardVariants = {
  rest: { y: 0, boxShadow: "0 4px 24px 0 rgba(7,37,89,0.10)" },
  hover: {
    y: -12,
    boxShadow: "0 8px 32px 0 rgba(7,37,89,0.18)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

export default function ConsolesPreview() {
  return (
    <section className="section bg-[#0D0D0D]">
      <div className="container text-center">
        <h2 className="mb-8">Choose Your Console</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {consoles.map((console) => (
            <motion.div
              key={console.name}
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={cardVariants}
              className="bg-[#181818] border border-[#222] soft-shadow rounded-xl p-6 flex flex-col items-center transition-all duration-300"
            >
              <img
                src={console.image}
                alt={console.name}
                className="w-32 h-32 object-contain mb-4 drop-shadow-lg"
                style={{ filter: "drop-shadow(0 8px 32px #07255955)" }}
              />
              <h3 className="text-xl font-bold text-white mb-2">{console.name}</h3>
              <div className="text-[#e0e0e0] text-base mb-4">{console.price}</div>
              <Link
                href="/rentals"
                className="mt-auto px-4 py-2 rounded bg-[#072559] text-white font-semibold hover:bg-[#0D0D0D] transition-colors"
              >
                View Rentals
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
