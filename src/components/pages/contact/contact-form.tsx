"use client";

import { Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { StandardPageContent } from "@content/types";

const IconMap: Record<string, React.ElementType> = {
  Phone,
  Mail,
  Clock,
};

interface ContactFormProps {
  contact: StandardPageContent;
}

export function ContactForm({ contact }: ContactFormProps) {
  const contactInfoSection = contact.additionalSections?.find(s => s.type === "contact-info");
  const formSection = contact.additionalSections?.find(s => s.type === "form-fields");

  return (
    <Section className="py-20 bg-white relative">
      <Container>
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#209f8f]/30 text-xs font-semibold text-[#209f8f] uppercase tracking-widest bg-[#209f8f]/10 shadow-xs mb-4">
            Contact Support & Sales
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#152825] mb-4 tracking-tight">
            {contact.hero.headline}
          </h1>
          {contact.hero.subheadline && (
            <p className="text-base sm:text-lg text-zinc-600 font-normal max-w-2xl mx-auto">
              {contact.hero.subheadline}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left Column: Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#152825] mb-3 tracking-tight">
                {contactInfoSection?.heading || "Need Assistance?"}
              </h2>
              <p className="text-zinc-600 text-base leading-relaxed">
                Reach out to us directly or fill out the form, and our dedicated support team in Lahore will assist you promptly.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfoSection?.items?.map((item, index) => {
                const iconName = item.label === "Phone" ? "Phone" : item.label === "Email" ? "Mail" : "Clock";
                const Icon = IconMap[iconName] || Mail;
                return (
                  <div key={index} className="flex items-start group bg-[#F8FAF9] p-5 rounded-2xl border border-gray-200/80 transition-all hover:border-[#209f8f]/40 hover:shadow-xs">
                    <div className="w-12 h-12 rounded-xl bg-[#209f8f]/10 flex items-center justify-center shrink-0 mr-5 text-[#209f8f] group-hover:bg-[#209f8f] group-hover:text-white transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-1">{item.label}</h4>
                      <p className="text-base sm:text-lg font-semibold text-[#152825]">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right Column: Modern Contact Form */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-[0_12px_40px_rgba(0,0,0,0.06)] relative overflow-hidden">
            <h3 className="text-2xl font-semibold text-[#152825] mb-2 tracking-tight">
              {formSection?.heading || "Send us a message"}
            </h3>
            <p className="text-sm text-zinc-500 mb-6">
              Fill in your details and we will respond within 24 hours.
            </p>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="firstName" className="text-xs font-semibold text-zinc-700">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-white text-sm text-[#152825] focus:outline-none focus:ring-2 focus:ring-[#209f8f] focus:border-transparent transition-all shadow-xs"
                    placeholder="John"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="lastName" className="text-xs font-semibold text-zinc-700">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-white text-sm text-[#152825] focus:outline-none focus:ring-2 focus:ring-[#209f8f] focus:border-transparent transition-all shadow-xs"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="phoneField" className="text-xs font-semibold text-zinc-700">Phone Number</label>
                <input
                  type="tel"
                  id="phoneField"
                  className="w-full h-11 px-4 rounded-xl border border-gray-200 bg-white text-sm text-[#152825] focus:outline-none focus:ring-2 focus:ring-[#209f8f] focus:border-transparent transition-all shadow-xs"
                  placeholder="+92 300 1234567"
                />
              </div>
              
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-zinc-700">Your Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-4 rounded-xl border border-gray-200 bg-white text-sm text-[#152825] focus:outline-none focus:ring-2 focus:ring-[#209f8f] focus:border-transparent transition-all resize-none shadow-xs"
                  placeholder="Tell us about your business needs or question..."
                ></textarea>
              </div>
              
              <Button
                type="submit"
                className="w-full h-11 rounded-xl bg-[#209f8f] hover:bg-[#1a8578] text-white font-semibold shadow-sm active:scale-[0.98] transition-all"
              >
                {contact.hero.primaryCTA?.label || "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
