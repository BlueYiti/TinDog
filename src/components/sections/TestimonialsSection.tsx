import { Container } from "../common/Container";
import { SectionWrapper } from "../common/SectionWrapper";
import { SectionHeading } from "../common/SectionHeading";
import { StarRating } from "../common/StarRating";
import { Carousel } from "../common/Carousel";
import { testimonials } from "../../data/testimonials";
import type { Testimonial } from "../../types";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [parentName, petName] = testimonial.name.split(" & ");

  return (
    <article className="relative h-full pb-2">
      {/* Orange shadow layer */}
      <div className="absolute inset-x-0 top-2 bottom-0 bg-brand-orange rounded-2xl z-0" />

      {/* Actual card */}
      <div className="relative z-10 bg-white rounded-2xl border-2 border-black p-5 sm:p-6 md:p-8 h-full flex flex-col">
        <div className="flex flex-col items-center gap-3 sm:gap-4 mb-4 -mt-12 sm:-mt-16">
          <div className="flex -space-x-3 justify-center">
            <img
              src={testimonial.petAvatarSrc}
              alt={`${petName}'s photo`}
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-white object-cover"
              loading="lazy"
            />
            <img
              src={testimonial.avatarSrc}
              alt={`${parentName} profile photo`}
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 border-white object-cover"
              loading="lazy"
            />
          </div>

          <div className="text-center">
            <span className="block font-accent text-base sm:text-lg md:text-xl text-neutral-500">
              {parentName}
            </span>
            <span className="block font-accent text-xl sm:text-2xl md:text-3xl text-black">
              Pet: {petName}
            </span>
          </div>
        </div>

        <StarRating
          rating={testimonial.rating}
          className="mb-3 sm:mb-4 mx-auto"
        />

        <blockquote className="text-neutral-700 text-xs sm:text-sm leading-relaxed flex-1 flex items-start gap-2 sm:gap-3 justify-center">
          <span className="text-purple-600 font-accent text-5xl sm:text-7xl md:text-8xl leading-none select-none shrink-0 -ml-2 sm:-ml-4">
            &ldquo;
          </span>

          <span className="pt-1 sm:pt-2 md:pt-3 text-center -ml-3 sm:-ml-5">
            {testimonial.quote}
          </span>
        </blockquote>
      </div>
    </article>
  );
}

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" background="light">
      <Container>
        <SectionHeading
          label="Superb Testimonials"
          title="See what they say about us"
          className="mb-12"
        />

        {/* Carousel with dots: 3 cards on desktop, 1 card on mobile */}
        <div className="hidden md:block">
          <Carousel
            items={testimonials}
            renderItem={(item) => <TestimonialCard testimonial={item} />}
            slidesPerView={3}
            trackClassName="pt-6 sm:pt-8"
          />
        </div>

        <div className="md:hidden pt-6">
          <Carousel
            items={testimonials}
            renderItem={(item) => <TestimonialCard testimonial={item} />}
            slidesPerView={1}
            trackClassName="pt-6 sm:pt-8"
          />
        </div>
      </Container>
    </SectionWrapper>
  );
}