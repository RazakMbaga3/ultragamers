"use client";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../components/ui/accordion";

const faqs = [
  {
    q: "How do I book a rental?",
    a: "You can book online or via WhatsApp. Select your console, fill out the booking form, and we’ll confirm your order.",
  },
  {
    q: "Where do you deliver?",
    a: "We deliver anywhere in Dar es Salaam. For other areas, contact us for options.",
  },
  {
    q: "Is a security deposit required?",
    a: "No deposit for most rentals. For high-value bookings, a refundable deposit may apply—details provided during booking.",
  },
  {
    q: "How do I cancel my booking?",
    a: "Contact us at least 24 hours before your scheduled date to cancel or reschedule your booking.",
  },
  {
    q: "What if my console overheats?",
    a: "Ensure the console is placed in a well-ventilated area. If overheating persists, contact our support team for assistance.",
  },
  {
    q: "My controller isn’t working. What should I do?",
    a: "Try reconnecting or charging the controller. If issues continue, reach out to us for a replacement or troubleshooting help.",
  },
  {
    q: "How do I get technical support during my rental?",
    a: "Our team is available via WhatsApp or phone for any setup or technical issues. We’re here to help!",
  },
  {
    q: "What’s included in my rental?",
    a: "Each rental includes the console, controllers, popular games, and all necessary cables. Setup is included!",
  },
];

export default function SupportPage() {
  return (
    <main className="section bg-[#0D0D0D] min-h-screen">
      <div className="container max-w-2xl mx-auto">
        <h1 className="mb-8 text-center text-3xl font-extrabold text-white">Support & FAQ</h1>
        <Accordion type="single" collapsible className="bg-[#181818] border border-[#222] rounded-xl p-4 mb-8">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={"faq-" + i}>
              <AccordionTrigger className="text-lg text-white font-semibold py-2">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-[#e0e0e0] py-2">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="bg-[#181818] border border-[#222] rounded-xl p-6 text-[#e0e0e0] text-center">
          <h2 className="text-xl font-bold text-white mb-2">Need More Help?</h2>
          <p className="mb-2">Contact our customer support team for quick assistance:</p>
          <div className="font-semibold text-white">WhatsApp: <a href="https://wa.me/1234567890" className="text-[#072559]">+1 234 567 890</a></div>
          <div className="font-semibold text-white">Phone: <a href="tel:+1234567890" className="text-[#072559]">+1 234 567 890</a></div>
        </div>
      </div>
    </main>
  );
}
