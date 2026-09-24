import { Metadata } from "next";
import { aboutContent } from "@content/pages/about";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: aboutContent.seo.title,
  description: aboutContent.seo.description,
  keywords: aboutContent.seo.keywords,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div>
      {/* Top Hero - Modern Brand Gradient */}
      <section className="relative w-full py-20 sm:py-28 bg-gradient-to-br from-[#1b7f70] via-[#209f8f] to-[#16695d] text-white text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none bg-repeat bg-center"
          style={{
            backgroundImage: "url('/images/home/cta-bg-pattern.png')",
            backgroundSize: "600px",
          }}
        />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-black/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-widest border border-white/20 shadow-xs mb-4">
            About Hulm Solutions
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4 leading-tight">
            {aboutContent.hero.headline}
          </h1>
          <p className="text-base sm:text-lg text-white/90 font-normal leading-relaxed max-w-2xl mx-auto">
            Empowering Pakistani retail, restaurant, and enterprise businesses with intelligent, reliable point of sale and business automation software.
          </p>
        </div>
      </section>
      
      {/* Dynamic Sections */}
      {aboutContent.additionalSections?.map((section, index) => {
        if (section.type === "split-who-we-are") {
          return (
            <Section key={index} className="py-20 lg:py-24 bg-white">
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div className="order-2 lg:order-1 flex justify-center">
                    <img
                      src={section.image}
                      alt={section.heading}
                      className="max-w-full h-auto rounded-3xl border border-gray-200/80 shadow-md"
                    />
                  </div>
                  <div className="order-1 lg:order-2 space-y-6">
                    <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#209f8f]/30 text-xs font-semibold text-[#209f8f] uppercase tracking-widest bg-[#209f8f]/10 shadow-xs">
                      Who We Are
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] tracking-tight leading-tight">
                      {section.heading}
                    </h2>
                    {section.content?.split('\n\n').map((paragraph: string, pIdx: number) => (
                      <p key={pIdx} className="text-base text-zinc-600 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </Container>
            </Section>
          );
        }
        
        if (section.type === "split-mission") {
          return (
            <Section key={index} className="py-20 lg:py-24 bg-[#F8FAF9] border-y border-gray-100">
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div className="space-y-6">
                    <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#209f8f]/30 text-xs font-semibold text-[#209f8f] uppercase tracking-widest bg-[#209f8f]/10 shadow-xs">
                      Our Mission
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] tracking-tight leading-tight">
                      {section.heading}
                    </h2>
                    <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                      {section.content}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <img
                      src={section.image}
                      alt={section.heading}
                      className="max-w-full h-auto rounded-3xl border border-gray-200/80 shadow-md"
                    />
                  </div>
                </div>
              </Container>
            </Section>
          );
        }
        
        if (section.type === "four-grid") {
          return (
            <Section key={index} className="py-20 bg-white">
              <Container>
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] mb-3 tracking-tight">
                    Our Core Values
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-600">
                    The driving principles behind everything we engineer at Hulm Solutions.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {section.items?.map((item, i) => (
                    <div
                      key={i}
                      className="bg-[#F8FAF9] border border-gray-200/80 rounded-2xl p-7 shadow-xs hover:border-[#209f8f]/40 hover:shadow-md transition-all text-center"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#209f8f]/10 text-[#209f8f] flex items-center justify-center mx-auto mb-4 font-semibold text-base">
                        0{i + 1}
                      </div>
                      <h4 className="text-lg font-semibold text-[#152825] mb-2">{item.title}</h4>
                      <p className="text-sm text-zinc-600 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </Container>
            </Section>
          );
        }
        
        if (section.type === "split-vision") {
          return (
            <Section key={index} className="py-20 lg:py-24 bg-[#F8FAF9] border-y border-gray-100">
              <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div className="order-2 lg:order-1 flex justify-center">
                    <img
                      src={section.image}
                      alt={section.heading}
                      className="max-w-full h-auto rounded-3xl border border-gray-200/80 shadow-md"
                    />
                  </div>
                  <div className="order-1 lg:order-2 space-y-6">
                    <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#209f8f]/30 text-xs font-semibold text-[#209f8f] uppercase tracking-widest bg-[#209f8f]/10 shadow-xs">
                      Our Vision
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#152825] tracking-tight leading-tight">
                      {section.heading}
                    </h2>
                    <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
                      {section.content}
                    </p>
                  </div>
                </div>
              </Container>
            </Section>
          );
        }
        
        return null;
      })}

      {/* Google Reviews */}
      <GoogleReviewsSection />

      {/* Modern Split Final CTA */}
      <FinalCta
        heading="Experience the difference with Hulm POS"
        subheading="Join hundreds of thriving retail, restaurant, pharmacy, and manufacturing businesses across Pakistan."
      />
    </div>
  );
}
