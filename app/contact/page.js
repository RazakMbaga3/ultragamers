"use client";
import { useState } from "react";
import CTAButton from "../../components/CTAButton";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi Ultra Gamers!\nName: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <main className="section bg-[#0D0D0D] min-h-screen">
      <div className="container max-w-lg mx-auto">
        <h1 className="mb-8 text-center">Contact Us</h1>
        <div className="mb-8 flex flex-col gap-4 items-center">
          <CTAButton
            variant="primary"
            icon={null}
            className="w-full"
            onClick={() => window.open("https://wa.me/1234567890", "_blank")}
          >
            WhatsApp Us
          </CTAButton>
          <div className="text-white font-semibold">Phone: <a href="tel:+1234567890" className="text-[#072559]">+1 234 567 890</a></div>
          <div className="text-white font-semibold">Instagram: <a href="https://instagram.com/ultragamers" target="_blank" rel="noopener noreferrer" className="text-[#072559]">@ultragamers</a></div>
          <div className="text-[#e0e0e0]">Location: Dar es Salaam, Tanzania</div>
        </div>
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
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded bg-[#222] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#072559]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded bg-[#222] text-white border border-[#333] focus:outline-none focus:ring-2 focus:ring-[#072559] min-h-[60px]"
          />
          <button
            type="submit"
            className="mt-4 px-6 py-3 rounded bg-[#072559] text-white font-bold hover:bg-[#0D0D0D] transition-colors"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>
    </main>
  );
}
