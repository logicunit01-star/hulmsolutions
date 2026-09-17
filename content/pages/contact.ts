import { StandardPageContent } from '../types';

export const contactContent: StandardPageContent = {
  seo: {
    title: "Contact Us | Hulm Solutions - Run your business smarter",
    description: "Run your business smarter, faster, better. Contact Hulm Solutions for personalized POS and business development.",
    keywords: ["Contact Hulm", "POS Support Pakistan", "Hulm Solutions Phone"]
  },
  hero: {
    headline: "Run your business smarter, faster, better.",
    subheadline: "Personalized Development",
    primaryCTA: {
      label: "Get Started",
      href: "https://app.hulmsolutions.com/Register"
    }
  },
  additionalSections: [
    {
      type: "contact-info",
      heading: "Need Assistance?",
      items: [
        { label: "Phone", value: "+92 339 111 9259" },
        { label: "Email", value: "info@hulmsolutions.com" }
      ]
    },
    {
      type: "form-fields",
      heading: "Send us a message",
      items: [
        { label: "First Name", type: "text" },
        { label: "Last Name", type: "text" },
        { label: "Numeric Field", type: "tel" },
        { label: "Your Message", type: "textarea" }
      ]
    }
  ]
};
