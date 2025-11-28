
"use client";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rentals", label: "Rentals" },
  { href: "/games", label: "Games" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/book", label: "Book Now" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0D0D0D] text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="text-2xl font-extrabold tracking-wide">
        <Link href="/">
          <span className="text-white">ULTRA </span>
          <span className="text-[#072559]">GAMERS</span>
        </Link>
      </div>
      <div className="hidden md:flex space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-[#072559] font-semibold transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="md:hidden flex items-center">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="p-2 rounded soft-shadow bg-[#072559] text-white"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-[#0D0D0D] text-white w-64 p-6">
            <div className="text-2xl font-extrabold mb-8">
              <span className="text-white">ULTRA </span>
              <span className="text-[#072559]">GAMERS</span>
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-[#072559] font-semibold text-lg"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
