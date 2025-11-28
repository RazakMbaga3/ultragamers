
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0D0D0D] text-white border-t border-[#222] py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="text-xl font-extrabold mb-2 tracking-wide">
            <span className="text-white">ULTRA </span>
            <span className="text-[#072559]">GAMERS</span>
          </div>
          <div className="text-sm text-[#e0e0e0]">&copy; {new Date().getFullYear()} Ultra Gamers. All rights reserved.</div>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex gap-4 mb-2">
            <Link href="/" className="hover:text-[#072559] text-sm">Home</Link>
            <Link href="/rentals" className="hover:text-[#072559] text-sm">Rentals</Link>
            <Link href="/games" className="hover:text-[#072559] text-sm">Games</Link>
            <Link href="/events" className="hover:text-[#072559] text-sm">Events</Link>
            <Link href="/about" className="hover:text-[#072559] text-sm">About</Link>
            <Link href="/book" className="hover:text-[#072559] text-sm">Book Now</Link>
          </div>
          <div className="flex flex-col items-center md:items-end text-xs text-[#b0b0b0]">
            <span>WhatsApp: <a href="https://wa.me/1234567890" className="hover:text-[#072559]">+1 234 567 890</a></span>
            <span>Phone: <a href="tel:+1234567890" className="hover:text-[#072559]">+1 234 567 890</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
