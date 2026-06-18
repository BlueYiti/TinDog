import { SectionWrapper } from "../common/SectionWrapper";
import { Container } from "../common/Container";
import { Button } from "../common/Button";
import { siteContent } from "../../data/site-content";
import bottomDog from "../../assets/images/bottom_dog.png";

export function CTASection() {
  const { cta } = siteContent;

  return (
    <SectionWrapper
      id="download"
      background="white"
      className="relative overflow-hidden py-12 lg:pt-16 lg:pb-36"
    >
      <Container className="relative z-10">
        <div className="flex items-center">
          <div className="max-w-xl mx-auto lg:mx-0 px-6 lg:px-0 text-center lg:text-left">
            {/* Tagline */}
            <p className="font-accent text-3xl text-brand-orange mb-2">
              {cta.tagline}
            </p>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight mb-6">
              {(() => {
                const [line1, line2] = cta.headline.split(" a ");

                return (
                  <>
                    {line1} a
                    <br />
                    {line2}
                  </>
                );
              })()}
            </h2>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Button href="#download" variant="primary" size="lg">
                {cta.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Desktop Dog Image */}
      <div className="hidden lg:block absolute bottom-0 right-20 z-20 pointer-events-none">
        <img
          src={bottomDog}
          alt="Happy dog with a big smile"
          className="w-[40vw] max-w-lg h-auto drop-shadow-xl"
          loading="lazy"
        />
      </div>
    </SectionWrapper>
  );
}