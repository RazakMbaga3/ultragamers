"use client";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "./ui/accordion";

const faqs = [
  {
    q: "How do I book a PlayStation rental?",
    a: "You can book directly on our website or via WhatsApp. Just choose your console, fill out the booking form, and we’ll confirm your order!",
  },
  {
    q: "Where do you deliver?",
    a: "We deliver anywhere in Dar es Salaam. For areas outside Dar, contact us for options.",
  },
  {
    q: "Is there a security deposit?",
    a: "No deposit for most rentals. For high-value bookings, a refundable deposit may apply—details provided during booking.",
  },
  {
    q: "What’s included with my rental?",
    a: "Each rental includes the console, controllers, popular games, and all necessary cables. Setup is included!",
  },
  {
    q: "How do returns work?",
    a: "At the end of your rental, we’ll pick up the console at your location. Please have all items ready for collection.",
  },
  {
    q: "Can I extend my rental?",
    a: "Yes! Just contact us before your rental ends to arrange an extension.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept mobile money, cash, and bank transfer. Details provided during booking.",
  },
  {
    q: "Do you offer support if I have issues?",
    a: "Absolutely! Our team is available to help with any setup or technical issues during your rental.",
  },
];

export default function FAQ() {
  return (
    <section className="mt-16 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="bg-[#181818] border border-[#222] rounded-xl p-4">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={"faq-" + i}>
            <AccordionTrigger className="text-lg text-white font-semibold py-2">{faq.q}</AccordionTrigger>
            <AccordionContent className="text-[#e0e0e0] py-2">{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
