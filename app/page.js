
import HeroSection from "../sections/HeroSection";
import HowItWorks from "../sections/HowItWorks";
import ConsolesPreview from "../sections/ConsolesPreview";
import Testimonials from "../sections/Testimonials";
import QuickBookingSection from "../sections/QuickBookingSection";

export default function Home() {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <HeroSection />
      <HowItWorks />
      <ConsolesPreview />
      <Testimonials />
      <QuickBookingSection />
    </main>
  );
}
