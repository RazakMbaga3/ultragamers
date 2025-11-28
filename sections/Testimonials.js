"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Amina K.",
    review:
      "Ultra Gamers made my party unforgettable! The delivery was quick and setup was super easy. Highly recommend!",
  },
  {
    name: "John M.",
    review:
      "Great service and amazing selection of games. The team was friendly and professional. Will book again!",
  },
  {
    name: "Fatma S.",
    review:
      "Loved the convenience! PlayStation arrived on time and ready to play. Perfect for family nights.",
  },
  {
    name: "David O.",
    review:
      "Smooth experience from start to finish. Booking was easy and the console was in perfect condition.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Testimonials() {
  return (
    <section className="section bg-[#0D0D0D]">
      <div className="container text-center">
        <h2 className="mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
              className="bg-[#181818] border border-[#222] soft-shadow rounded-xl p-6 flex flex-col items-center min-h-[180px]"
            >
              <p className="text-[#e0e0e0] text-base mb-4">“{t.review}”</p>
              <div className="font-bold text-white text-sm">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
