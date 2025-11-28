"use client";
import { motion } from "framer-motion";

const team = [
  {
    name: "You",
    role: "Founder & Product Lead",
    image: "/team/you.jpg",
  },
  {
    name: "Operations Manager",
    role: "Operations Manager",
    image: "/team/opsmanager.jpg",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function AboutPage() {
  return (
    <main className="section bg-[#0D0D0D] min-h-screen">
      <div className="container max-w-3xl mx-auto">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8 text-center text-4xl font-extrabold text-white"
        >
          About Ultra Gamers
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8 text-lg text-[#e0e0e0] text-center"
        >
          Ultra Gamers is dedicated to making gaming accessible, social, and fun for everyone in Dar es Salaam. We deliver consoles, games, and unforgettable experiences to homes, parties, and events.
        </motion.p>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-2">Mission</h2>
          <p className="text-[#e0e0e0]">Empower people to connect, play, and create memories through gaming—anywhere, anytime.</p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-2">Vision</h2>
          <p className="text-[#e0e0e0]">To be the leading gaming experience provider in Tanzania, inspiring joy and community through play.</p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-2">Our Story</h2>
          <p className="text-[#e0e0e0]">Ultra Gamers started with a passion for gaming and a vision to bring people together. From living room tournaments to large events, we’ve grown into a trusted name for fun and service.</p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-2">Values</h2>
          <ul className="list-disc list-inside text-[#e0e0e0]">
            <li>Community & Connection</li>
            <li>Integrity & Trust</li>
            <li>Fun & Creativity</li>
            <li>Service & Support</li>
          </ul>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-2">Community Impact</h2>
          <p className="text-[#e0e0e0]">We support local youth, host tournaments, and partner with schools to make gaming a positive force in our community.</p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Meet the Team</h2>
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full mb-2 border-2 border-[#072559]"
                />
                <div className="font-bold text-white text-lg">{member.name}</div>
                <div className="text-[#e0e0e0] text-sm">{member.role}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
