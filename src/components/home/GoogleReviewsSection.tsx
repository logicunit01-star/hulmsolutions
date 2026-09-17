"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  ExternalLink,
  ShieldCheck
} from "lucide-react";

// Official Google Multi-Color "G" Icon
function GoogleGIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
    </svg>
  );
}

export interface GoogleReviewItem {
  id: string;
  name: string;
  business: string;
  date: string;
  rating: number;
  avatar: string;
  text: string;
}

export const googleReviews: GoogleReviewItem[] = [
  {
    id: "review-1",
    name: "Meesum Shaikh",
    business: "Cab & Fleet Service",
    date: "8 months ago",
    rating: 5,
    avatar: "/images/home/reviews/review-1-meesum-shaikh.jpg",
    text: "I have a cab business, I was unable to manage properly in this scenario HULM Solutions came to rescue my business with their logistics app! Highly recomended"
  },
  {
    id: "review-2",
    name: "Muhammad Rizwan",
    business: "Retail & Wholesale",
    date: "9 months ago",
    rating: 5,
    avatar: "/images/home/reviews/review-5-muhammad-rizwan.jpg",
    text: "After a successful free trial, I now run my entire business on HulmPOS because it is simple, affordable, and incredibly easy to use."
  },
  {
    id: "review-3",
    name: "STARK",
    business: "Small Business Owner",
    date: "8 months ago",
    rating: 5,
    avatar: "/images/home/reviews/review-7-stark.jpg",
    text: "As someone who isn't very tech-savvy, I appreciate how easy HulmPOS is to use. Setting up was a breeze, and managing my small business has never been simpler. Wish I had found this sooner."
  },
  {
    id: "review-4",
    name: "ZAIN UL ABIDIN",
    business: "Bakery & Sweets",
    date: "8 months ago",
    rating: 5,
    avatar: "/images/home/reviews/review-9-zain-ul-abidin.jpg",
    text: "HulmPOS significantly increased my bakery sales & fulfilled all needs to manage my bakery operations"
  },
  {
    id: "review-5",
    name: "Mustafa Sheikh",
    business: "Inventory Manager",
    date: "7 months ago",
    rating: 5,
    avatar: "/images/home/reviews/review-11-mustafa-sheikh.jpg",
    text: "HulmPOS provides the easy way to operate my inventory management. Highly recommended!"
  },
  {
    id: "review-6",
    name: "Eesha Khan",
    business: "Restaurant & Cafe",
    date: "6 months ago",
    rating: 5,
    avatar: "/images/home/reviews/review-13-eesha-khan.jpg",
    text: "Hulm POS has completely transformed how I run my restaurant. The FBR integration makes tax reporting so much easier, and managing orders and inventory is a breeze. Plus, it's affordable! Honestly, it's the best POS software in Pakistan for restaurants."
  },
  {
    id: "review-7",
    name: "aqsa khalid",
    business: "Bakery & Confectionery",
    date: "6 months ago",
    rating: 5,
    avatar: "/images/home/reviews/review-15-aqsa-khalid.jpg",
    text: "Hulm POS has made running my bakery so much smoother. With FBR integration, tracking orders and inventory is effortless, and it keeps everything affordable. It's definitely the best POS software in Pakistan for bakeries."
  },
  {
    id: "review-8",
    name: "Jawad hussain",
    business: "Retail Shop Owner",
    date: "6 months ago",
    rating: 5,
    avatar: "/images/home/reviews/review-17-jawad-hussain.jpg",
    text: "Hulm Solutions POS is an excellent choice for retail shops in Pakistan. It's user-friendly, reliable, and perfectly suited for managing inventory and sales. Highly recommended for retail business owners!"
  },
  {
    id: "review-9",
    name: "Mustafa Hasnain",
    business: "Grocery Mart Owner",
    date: "5 months ago",
    rating: 5,
    avatar: "/images/home/reviews/review-19-mustafa-hasnain.jpg",
    text: "As a mart owner, I needed a POS with FBR integration and tried HULM POS's free demo. It's user-friendly, automates FBR invoices, and manages inventory seamlessly. The real-time reporting and affordable pricing make it a great choice for small businesses."
  },
  {
    id: "review-10",
    name: "Zohaib khalid",
    business: "Retail Store Owner",
    date: "5 months ago",
    rating: 5,
    avatar: "/images/home/reviews/review-21-zohaib-khalid.jpg",
    text: "We've been using this POS software for a few months and it's been a game changer for our retail store. It's simple, fast, and makes managing sales and inventory much easier. Support is responsive and helpful. Highly recommended for businesses in Pakistan looking for a solid POS solution."
  }
];

export function GoogleReviewsSection({
  heading = "Pakistani Businesses Run on Hulm Here is What They Say",
  subheading = "From a single-branch bakery in Lahore to a multi-location retail chain in Karachi, businesses across Pakistan trust Hulm to run their daily operations. These are real reviews from real owners."
}: {
  heading?: string;
  subheading?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Responsive cards: 1 on mobile/small tablets, 2 on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1);
      } else {
        setCardsPerPage(2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.max(1, googleReviews.length - cardsPerPage + 1);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <Section className="py-14 sm:py-16 lg:py-20 bg-[#f8faf9] border-t border-zinc-100 overflow-hidden relative">
      <Container>
        {/* Split Modern Layout: Left Summary / Right Compact Slider */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Trust Summary & Controls (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Google Trust Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200/80 shadow-xs text-xs font-semibold text-[#152825] mb-3.5">
                <GoogleGIcon className="w-3.5 h-3.5 shrink-0" />
                <span>Google Customer Reviews</span>
                <span className="text-zinc-300">•</span>
                <span className="text-amber-500 font-bold">5.0 ★</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#152825] tracking-tight leading-[1.25] mb-3">
                Pakistani Businesses Run on Hulm
              </h2>

              {/* Subheading */}
              <p className="text-sm text-zinc-600 leading-relaxed font-normal mb-6">
                Real reviews from verified retail, restaurant, bakery, and mart owners across Pakistan.
              </p>

              {/* Rating Card Box */}
              <div className="bg-white rounded-2xl p-4 border border-gray-200/70 shadow-sm mb-6 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-[#152825] leading-none">5.0</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 mt-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500/10" />
                    <span>10+ Verified Customer Reviews</span>
                  </div>
                </div>

                <a
                  href="https://www.google.com/search?q=hulm+solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-[#25a18e]/10 text-[#209f8f] hover:bg-[#209f8f] hover:text-white transition-all flex items-center justify-center shrink-0"
                  aria-label="View Google Reviews"
                  title="View on Google"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Slider Controls Bar */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="w-9 h-9 rounded-xl bg-white border border-gray-200 hover:border-[#25a18e] hover:bg-[#25a18e]/5 text-zinc-700 hover:text-[#25a18e] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-9 h-9 rounded-xl bg-white border border-gray-200 hover:border-[#25a18e] hover:bg-[#25a18e]/5 text-zinc-700 hover:text-[#25a18e] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Progress Dots */}
              <div className="flex items-center gap-1.5">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentIndex === idx
                        ? "w-6 bg-[#209f8f]"
                        : "w-1.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Compact Cards Track (8 Cols) */}
          <div
            className="lg:col-span-8 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)`,
              }}
            >
              {googleReviews.map((rev) => (
                <div
                  key={rev.id}
                  className="shrink-0 px-2 sm:px-2.5"
                  style={{ width: `${100 / cardsPerPage}%` }}
                >
                  <div className="bg-white rounded-2xl p-5 sm:p-5.5 border border-[#EBECEF] hover:border-[#25a18e]/40 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(37,161,142,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full min-h-[220px]">
                    
                    <div>
                      {/* Top Row: Avatar + Name + Business Pill */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="relative shrink-0">
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 bg-zinc-100">
                              <Image
                                src={rev.avatar}
                                alt={`${rev.name} profile picture`}
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-white shadow-xs border border-gray-100 flex items-center justify-center p-0.5">
                              <GoogleGIcon className="w-3 h-3" />
                            </div>
                          </div>

                          <div className="min-w-0">
                            <div className="flex items-center gap-1">
                              <h3 className="font-semibold text-sm text-[#152825] truncate">
                                {rev.name}
                              </h3>
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500/10 shrink-0" />
                            </div>
                            <span className="text-[11px] text-zinc-400 font-normal">
                              {rev.date}
                            </span>
                          </div>
                        </div>

                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#25a18e]/10 text-[#209f8f] border border-[#25a18e]/20 shrink-0">
                          {rev.business}
                        </span>
                      </div>

                      {/* Stars */}
                      <div className="flex items-center gap-0.5 mb-2.5 text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal line-clamp-4">
                        &ldquo;{rev.text}&rdquo;
                      </p>
                    </div>

                    {/* Card Footer */}
                    <div className="pt-3 mt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400">
                      <span className="inline-flex items-center gap-1 font-medium text-zinc-500">
                        <GoogleGIcon className="w-3 h-3" />
                        <span>Google Review</span>
                      </span>
                      <span className="text-[#209f8f] font-medium">
                        Verified Customer
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}

export default GoogleReviewsSection;
