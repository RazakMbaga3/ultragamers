"use client";
import { Card, CardContent } from "../components/ui/card";
import { Gamepad2, Truck, Smile } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <Gamepad2 size={32} className="text-[#072559]" />,
    title: "Pick a Console",
    desc: "Choose your favorite PlayStation console and games from our selection.",
  },
  {
    icon: <Truck size={32} className="text-[#072559]" />,
    title: "We Deliver & Setup",
    desc: "We bring the console to your location, set it up, and get you ready to play.",
  },
  {
    icon: <Smile size={32} className="text-[#072559]" />,
    title: "Play and Enjoy",
    desc: "Dive into gaming fun with friends and family—no hassle, just play!",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HowItWorks() {
  return (
    <section className="section bg-[#0D0D0D]">
      <div className="container text-center">
        <h2 className="mb-8">How Ultra Gamers Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <Card className="bg-[#181818] border border-[#222] soft-shadow p-6 flex flex-col items-center">
                <CardContent className="flex flex-col items-center">
                  <div className="mb-4">{step.icon}</div>
                  <h3 className="mb-2 text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-[#e0e0e0] text-base">{step.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
