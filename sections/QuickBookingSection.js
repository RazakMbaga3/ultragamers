"use client";
import { useState } from "react";

const consoles = ["PlayStation 5", "PlayStation 4 Pro", "PlayStation 4 Slim"];

export default function QuickBookingSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    console: consoles[0],
    days: "1",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi Ultra Gamers!\nI'd like to book a ${form.console} for ${form.days} day(s).\nName: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location}`;
    const url = `https://wa.me/1234567890?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="section bg-[#0D0D0D]">
      <div className="container max-w-lg mx-auto">
        <h2 className="mb-6 text-center">Quick Booking</h2>
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
          <button
            type="submit"
            className="mt-4 px-6 py-3 rounded bg-[#072559] text-white font-bold hover:bg-[#0D0D0D] transition-colors"
          >
            Book via WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
