import { Container } from "../common/Container";
import { SectionWrapper } from "../common/SectionWrapper";
import { DownloadBadge } from "../common/DownloadBadge";
import { siteContent } from "../../data/site-content";
import topDog from "../../assets/images/top_dog.png";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <SectionWrapper id="features" background="gradient" className="pt-0 md:pt-0 lg:pt-0 relative z-50 overflow-hidden"><Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center gap-8 md:gap-12 min-h-[calc(100vh-80px)] pt-16 lg:pt-0">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1 px-2 sm:px-0 pt-0 my-auto lg:my-0">
            {/* Eyebrow */}
            <p className="font-accent text-xl md:text-3xl lg:text-5xl text-white mb-4">
              {hero.eyebrow}
            </p>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {hero.headline}
            </h1>

            {/* Description */}
            <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-8">
              {hero.description}
            </p>

            {/* Download Area */}
            <div>
              <span className="font-accent text-2xl sm:text-3xl md:text-4xl text-white">Download the app now</span>
            </div>
            <div className="flex gap-2 sm:gap-3 pt-2 sm:pt-3 lg:pt-6 justify-center lg:justify-start">
              <DownloadBadge store="google-play" />
              <DownloadBadge store="app-store" />
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 order-1 lg:order-2 flex justify-center pt-12 lg:pt-0 lg:flex">
            <div className="relative">
              <img
                src={topDog}
                alt="Dog looking through mobile app mockup"
                className="w-full max-w-70 sm:max-w-md lg:max-w-lg h-auto drop-shadow-2xl"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </Container>
      
      {/* Decorative curve at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 md:h-40 overflow-hidden z-60 pointer-events-none">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,140 Q720,-40 1440,140 L1440,160 L0,160 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Find out more text - positioned on the white curve */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-70 pb-4 sm:pb-6 flex flex-col items-center gap-1">
        <span className="font-accent text-lg sm:text-xl md:text-2xl lg:text-3xl text-black whitespace-nowrap">
          {siteContent.cta.buttonText}
        </span>
        <svg
          className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-black animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </SectionWrapper>
  );
}