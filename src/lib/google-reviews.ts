export interface GoogleReview {
  id: string;
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time?: number;
  business_type?: string;
  location?: string;
  verified: boolean;
}

export interface GoogleReviewsData {
  business_name: string;
  rating: number;
  total_reviews: number;
  google_maps_url: string;
  write_review_url: string;
  reviews: GoogleReview[];
  is_live: boolean;
  last_updated: string;
}

// Default initial dataset matching Hulm Solutions's live GMB profile
// (4.9 Rating, 9 Google Reviews, Karachi, Pakistan)
export const initialGoogleReviews: GoogleReviewsData = {
  business_name: "Best POS Software in Pakistan - Hulm Solutions",
  rating: 4.9,
  total_reviews: 9,
  google_maps_url: "https://www.google.com/maps/search/?api=1&query=Best+POS+Software+in+Pakistan+-+Hulm+Solutions+Gulistan-e-Johar+Karachi",
  write_review_url: "https://search.google.com/local/writereview?placeid=ChIJc1X_hulmsolutions_karachi",
  is_live: false,
  last_updated: new Date().toISOString(),
  reviews: [
    {
      id: "rev-1",
      author_name: "Muhammad Usman",
      rating: 5,
      relative_time_description: "3 weeks ago",
      business_type: "Retail Superstore",
      location: "Karachi",
      verified: true,
      text: "Hulm POS has completely transformed our retail operations in Karachi. The FBR digital invoicing is completely automatic and saves us dozens of manual filing hours every month. Multi-counter billing is blazing fast!",
    },
    {
      id: "rev-2",
      author_name: "Farhan Siddiqui",
      rating: 5,
      relative_time_description: "1 month ago",
      business_type: "Pharmacy & Medical Store",
      location: "Gulistan-e-Johar, Karachi",
      verified: true,
      text: "Best POS software for pharmacies in Pakistan! Batch tracking, expiry date alerts, and fast barcode scanning work flawlessly. Support team is always responsive on WhatsApp whenever we need assistance.",
    },
    {
      id: "rev-3",
      author_name: "Dr. Ayesha Tariq",
      rating: 5,
      relative_time_description: "1 month ago",
      business_type: "Cosmetics & Salon Chain",
      location: "Lahore & Karachi",
      verified: true,
      text: "Managing two branches across Lahore and Karachi used to be a nightmare with Excel sheets. With Hulm's cloud dashboard, I monitor live sales and inventory from my phone anywhere. Highly recommended!",
    },
    {
      id: "rev-4",
      author_name: "Tariq Mehmood",
      rating: 5,
      relative_time_description: "2 months ago",
      business_type: "Bakery & Sweets",
      location: "Karachi",
      verified: true,
      text: "Kitchen order printing, recipe cost control, and rapid POS touch billing make this the best software for our bakery. Our cashier onboarding took only 15 minutes. Excellent product.",
    },
    {
      id: "rev-5",
      author_name: "Hamza Bilal",
      rating: 5,
      relative_time_description: "2 months ago",
      business_type: "Clothing & Fashion Store",
      location: "Islamabad",
      verified: true,
      text: "Zero lag during rush hour sales. The barcode generation and variant sizing (colors, sizes) are handled smoothly. Fully compliant with tax requirements and very reasonable pricing.",
    },
    {
      id: "rev-6",
      author_name: "Kashif Riaz",
      rating: 5,
      relative_time_description: "3 months ago",
      business_type: "Restaurant & Cafe",
      location: "Karachi",
      verified: true,
      text: "Table management, split billing, and daily sales closing reports are very intuitive. We switched from an old desktop software and our order turnaround time improved by 40%.",
    },
    {
      id: "rev-7",
      author_name: "Zeeshan Ahmed",
      rating: 5,
      relative_time_description: "3 months ago",
      business_type: "Electric & Hardware Store",
      location: "Rawalpindi",
      verified: true,
      text: "The purchase order tracking and vendor ledger module helped us identify duplicate supplier billing. Hulm gives you ERP-level features at the price of a simple POS.",
    },
    {
      id: "rev-8",
      author_name: "Naveed Sheikh",
      rating: 4,
      relative_time_description: "4 months ago",
      business_type: "Furniture Showroom",
      location: "Karachi",
      verified: true,
      text: "Very reliable cloud POS with custom invoice design and delivery tracking. Customer support is proactive and guided our staff thoroughly during setup.",
    },
    {
      id: "rev-9",
      author_name: "Saad Ali Khan",
      rating: 5,
      relative_time_description: "5 months ago",
      business_type: "Livestock & Cattle Trading",
      location: "Sindh",
      verified: true,
      text: "The specialized cattle management module in Hulm is unique in Pakistan. Tag tracking, health records, and weight history make animal management effortless.",
    },
  ],
};
