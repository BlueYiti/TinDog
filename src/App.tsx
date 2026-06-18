import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "./components/layout/Navbar";
import { StickyHeader } from "./components/layout/StickyHeader";
import { HeroSection } from "./components/sections/HeroSection";
import { PartnersSection } from "./components/sections/PartnersSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { CTASection } from "./components/sections/CTASection";
import { Footer } from "./components/layout/Footer";
import { SkipToContent } from "./components/common/SkipToContent";
import { SEO } from "./components/common/SEO";

export default function App() {
  return (
    <HelmetProvider>
      <SEO />
      <SkipToContent />

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main id="main-content" className="flex-1">
          <HeroSection />
          <StickyHeader />
          <PartnersSection />
          <TestimonialsSection />
          <CTASection />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}