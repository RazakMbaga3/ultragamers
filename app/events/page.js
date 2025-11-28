"use client";
import CTAButton from "../../components/CTAButton";

const packages = [
  {
    name: "Birthday Party Package",
    image: "/events/birthday.jpg",
    price: "TZS 250,000",
    included: [
      "PlayStation console (PS5 or PS4)",
      "4 controllers",
      "Selection of party games",
      "On-site setup & support",
      "Decorative gaming area",
      "2-4 hours rental",
    ],
  },
  {
    name: "Gaming Night",
    image: "/events/gamingnight.jpg",
    price: "TZS 180,000",
    included: [
      "PlayStation console (PS5 or PS4)",
      "2 controllers",
      "Popular multiplayer games",
      "On-site setup & support",
      "Snacks & drinks (optional add-on)",
      "2 hours rental",
    ],
  },
  {
    name: "Corporate Team Building",
    image: "/events/corporate.jpg",
    price: "TZS 350,000",
    included: [
      "PlayStation console (PS5 or PS4)",
      "4 controllers",
      "Team-based games",
      "On-site setup & support",
      "Projector/TV setup",
      "3 hours rental",
    ],
  },
  {
    name: "Multiplayer Setup",
    image: "/events/multiplayer.jpg",
    price: "TZS 200,000",
    included: [
      "PlayStation console (PS5 or PS4)",
      "4 controllers",
      "Multiplayer games",
      "On-site setup & support",
      "2 hours rental",
    ],
  },
  {
    name: "Outdoor Event Setup",
    image: "/events/outdoor.jpg",
    price: "TZS 400,000",
    included: [
      "PlayStation console (PS5 or PS4)",
      "4 controllers",
      "Selection of games",
      "Outdoor screen/projector",
      "On-site setup & support",
      "Weather protection",
      "3 hours rental",
    ],
  },
];

export default function EventsPage() {
  return (
    <main className="section bg-[#0D0D0D] min-h-screen">
      <div className="container">
        <h1 className="mb-8 text-center">Event Packages</h1>
        <p className="mb-12 text-lg text-[#e0e0e0] text-center max-w-2xl mx-auto">
          Make your next event unforgettable with Ultra Gamers! Choose from our curated packages for parties, team building, and more. We handle setup, games, and support—just book and play!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="bg-[#181818] border border-[#222] soft-shadow rounded-xl p-6 flex flex-col items-center hover:-translate-y-2 transition-transform duration-300"
            >
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-40 h-32 object-cover mb-4 rounded-lg drop-shadow-lg"
                style={{ filter: "drop-shadow(0 8px 32px #07255955)" }}
              />
              <h2 className="text-xl font-bold text-white mb-2 text-center">{pkg.name}</h2>
              <div className="mb-2 text-[#e0e0e0] text-base font-semibold">What's Included:</div>
              <ul className="mb-4 text-[#e0e0e0] text-sm list-disc list-inside">
                {pkg.included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mb-4 w-full flex flex-col gap-1 text-[#e0e0e0] text-sm">
                <div><span className="font-bold text-white">Price:</span> {pkg.price}</div>
              </div>
              <CTAButton
                variant="primary"
                className="w-full mt-auto"
                onClick={() => {
                  const msg = `Hi Ultra Gamers! I'd like to book the ${pkg.name} package.`;
                  window.open(`https://wa.me/1234567890?text=${encodeURIComponent(msg)}`, "_blank");
                }}
              >
                Book Now
              </CTAButton>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
