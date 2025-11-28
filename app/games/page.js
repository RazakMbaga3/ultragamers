"use client";
import { useState } from "react";
import games from "../../data/games.json";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Action",
  "Sports",
  "Racing",
  "Fighting",
  "Kids",
  "Multiplayer",
];

export default function GamesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredGames = games.filter((game) => {
    const matchesCategory =
      category === "All" || game.category.toLowerCase().includes(category.toLowerCase());
    const matchesSearch =
      game.title.toLowerCase().includes(search.toLowerCase()) ||
      game.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.main
      className="section bg-[#0D0D0D] min-h-screen"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <motion.h1
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Browse Games
        </motion.h1>
        <motion.div
          className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <input
            type="text"
            placeholder="Search games..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded bg-[#222] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#072559] w-full md:w-1/2"
          />
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded font-semibold transition-colors border border-[#333] text-white ${
                  category === cat ? "bg-[#072559] border-[#072559]" : "bg-[#181818]"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredGames.map((game, i) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: "easeOut" }}
              className="bg-[#181818] border border-[#222] soft-shadow rounded-xl p-4 flex flex-col items-center"
              whileHover={{ y: -8, boxShadow: "0 8px 32px 0 rgba(7,37,89,0.18)" }}
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
              <div className="text-xs text-[#b0b0b0] mb-2">{game.category} • {game.console}</div>
              <p className="text-[#e0e0e0] text-sm mb-2 text-center">{game.description}</p>
            </motion.div>
          ))}
        </div>
        {filteredGames.length === 0 && (
          <motion.div className="text-center text-[#e0e0e0] mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            No games found.
          </motion.div>
        )}
      </div>
    </motion.main>
  );
}
