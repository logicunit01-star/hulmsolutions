import { Metadata } from "next";
import { contactContent } from "@content/pages/contact";
import { ContactForm } from "@/components/pages/contact/contact-form";
import { GoogleReviewsSection } from "@/components/home/GoogleReviewsSection";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: contactContent.seo.title,
  description: contactContent.seo.description,
  keywords: contactContent.seo.keywords,
};

export default function ContactPage() {
  return (
    <div>
      <ContactForm contact={contactContent} />
      <GoogleReviewsSection />
      <FinalCta
        heading="Ready to get started with Hulm?"
        subheading="Join hundreds of businesses across Pakistan streamlining operations with our smart POS & ERP."
      />
    </div>
  );
}
