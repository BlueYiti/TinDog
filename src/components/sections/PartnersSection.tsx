import { Container } from "../common/Container";
import { SectionWrapper } from "../common/SectionWrapper";
import { partners } from "../../data/partners";

export function PartnersSection() {
  return (
    <SectionWrapper id="partners" background="white" className="relative overflow-hidden py-8 md:py-10 lg:py-12">
      <Container>
        {/* Partner Logos Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={partner.logoSrc}
                alt={partner.alt}
                className="h-12 md:h-16 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}