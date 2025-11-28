"use client";
import { useState } from "react";
import games from "../../data/games.json";

const consoles = ["PlayStation 5", "PlayStation 4 Pro", "PlayStation 4 Slim"];

export default function BookNowPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    console: consoles[0],
    days: "1",
    games: [],
    date: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setForm((prev) => ({
        ...prev,
        games: checked
          ? [...prev.games, value]
          : prev.games.filter((g) => g !== value),
      }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi Ultra Gamers!\nI'd like to book a ${form.console} for ${form.days} day(s) on ${form.date}.\nName: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location}\nGames: ${form.games.join(", ")}\nNotes: ${form.notes}`;
    const url = `https://wa.me/1234567890?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <main className="section bg-[#0D0D0D] min-h-screen">
      <div className="container max-w-lg mx-auto">
        <h1 className="mb-8 text-center">Book Now</h1>
        <form
          className="bg-[#181818] border border-[#222] soft-shadow rounded-xl p-6 flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded bg-[#222] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#072559]"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded bg-[#222] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#072559]"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={form.location}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded bg-[#222] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#072559]"
          />
          <select
            name="console"
            value={form.console}
            onChange={handleChange}
            className="px-4 py-2 rounded bg-[#222] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#072559]"
          >
            {consoles.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <input
            type="number"
            name="days"
            min="1"
            max="30"
            placeholder="Days Needed"
            value={form.days}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded bg-[#222] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#072559]"
          />
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded bg-[#222] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#072559]"
          />
          <div>
            <div className="mb-2 text-white font-semibold">Select Games:</div>
            <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
              {games.map((g) => (
                <label key={g.id} className="flex items-center gap-2 text-[#e0e0e0] text-sm">
                  <input
                    type="checkbox"
                    name="games"
                    value={g.title}
                    checked={form.games.includes(g.title)}
                    onChange={handleChange}
                  />
                  {g.title}
                </label>
              ))}
            </div>
          </div>
          <textarea
            name="notes"
            placeholder="Additional notes (optional)"
            value={form.notes}
            onChange={handleChange}
            className="px-4 py-2 rounded bg-[#222] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#072559] min-h-[60px]"
          />
          <button
            type="submit"
            className="mt-4 px-6 py-3 rounded bg-[#072559] text-white font-bold hover:bg-[#0D0D0D] transition-colors"
          >
            Book via WhatsApp
          </button>
        </form>
      </div>
    </main>
  );
}
