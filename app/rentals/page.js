"use client";
import CTAButton from "../../components/CTAButton";
import FAQ from "../../components/FAQ";

const consoles = [
  {
    name: "PlayStation 5",
    image: "/ps5.png",
    specs: [
      "Ultra-fast SSD",
      "Ray tracing graphics",
      "4K gaming support",
      "DualSense controller",
    ],
    included: [
      "1x PS5 Console",
      "2x DualSense Controllers",
      "Popular games",
      "All cables & setup",
    ],
    pricing: {
      daily: "TZS 60,000",
      weekend: "TZS 170,000",
      weekly: "TZS 350,000",
    },
  },
  {
    name: "PlayStation 4 Pro",
    image: "/ps4pro.png",
    specs: [
      "4K gaming support",
      "HDR visuals",
      "1TB storage",
      "DualShock 4 controller",
    ],
    included: [
      "1x PS4 Pro Console",
      "2x DualShock 4 Controllers",
      "Popular games",
      "All cables & setup",
    ],
    pricing: {
      daily: "TZS 45,000",
      weekend: "TZS 120,000",
      weekly: "TZS 250,000",
    },
  },
  {
    name: "PlayStation 4 Slim",
    image: "/ps4slim.png",
    specs: [
      "Slim design",
      "HDR visuals",
      "500GB storage",
      "DualShock 4 controller",
    ],
    included: [
      "1x PS4 Slim Console",
      "2x DualShock 4 Controllers",
      "Popular games",
      "All cables & setup",
    ],
    pricing: {
      daily: "TZS 40,000",
      weekend: "TZS 110,000",
      weekly: "TZS 220,000",
    },
  },
];

export default function RentalsPage() {
  return (
    <main className="section bg-[#0D0D0D] min-h-screen">
      <div className="container">
        <h1 className="mb-8 text-center">PlayStation Rentals</h1>
        <p className="mb-12 text-lg text-[#e0e0e0] text-center max-w-2xl mx-auto">
          Rent the latest PlayStation consoles with Ultra Gamers. We deliver, set up, and provide everything you need for an amazing gaming experience in Dar es Salaam. Choose your console below for full details and easy booking!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {consoles.map((c) => (
            <div
              key={c.name}
              className="bg-[#181818] border border-[#222] soft-shadow rounded-xl p-6 flex flex-col items-center hover:-translate-y-2 transition-transform duration-300"
            >
              <img
                src={c.image}
                alt={c.name}
                className="w-32 h-32 object-contain mb-4 drop-shadow-lg"
                style={{ filter: "drop-shadow(0 8px 32px #07255955)" }}
              />
              <h2 className="text-xl font-bold text-white mb-2">{c.name}</h2>
              <div className="mb-2 text-[#e0e0e0] text-base font-semibold">Specs:</div>
              <ul className="mb-4 text-[#e0e0e0] text-sm list-disc list-inside">
                {c.specs.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="mb-2 text-[#e0e0e0] text-base font-semibold">What's Included:</div>
              <ul className="mb-4 text-[#e0e0e0] text-sm list-disc list-inside">
                {c.included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="mb-4 w-full flex flex-col gap-1 text-[#e0e0e0] text-sm">
                <div><span className="font-bold text-white">Daily:</span> {c.pricing.daily}</div>
                <div><span className="font-bold text-white">Weekend:</span> {c.pricing.weekend}</div>
                <div><span className="font-bold text-white">Weekly:</span> {c.pricing.weekly}</div>
              </div>
              <CTAButton
                variant="primary"
                className="w-full mt-auto"
                onClick={() => {
                  const msg = `Hi Ultra Gamers! I'd like to book a ${c.name}.`;
                  window.open(`https://wa.me/1234567890?text=${encodeURIComponent(msg)}`, "_blank");
                }}
              >
                Book Now
              </CTAButton>
            </div>
          ))}
        </div>
      </div>
      {/* Info Section */}
      <section className="mt-16 max-w-3xl mx-auto bg-[#181818] border border-[#222] rounded-xl p-8 text-[#e0e0e0]">
        <h2 className="text-2xl font-bold text-white mb-4">Delivery & Rental Info</h2>
        <div className="mb-4">
          <span className="font-semibold text-white">Delivery Areas:</span> We deliver anywhere in Dar es Salaam, including city center, Masaki, Oysterbay, Mikocheni, Sinza, and more. If you’re outside Dar, contact us for options.
        </div>
        <div className="mb-4">
          <span className="font-semibold text-white">Security Deposit:</span> No security deposit required for most rentals. For high-value bookings, a refundable deposit may apply—details provided during booking.
        </div>
        <div>
          <span className="font-semibold text-white">Returns:</span> At the end of your rental, we’ll pick up the console at your location. Please ensure all items are included and in good condition for a smooth return.
        </div>
      </section>
      <FAQ />
    </main>
  );
}
