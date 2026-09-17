import { NextResponse } from "next/server";
import { initialGoogleReviews, GoogleReview, GoogleReviewsData } from "@/lib/google-reviews";

export const revalidate = 3600; // Cache and revalidate every 1 hour

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // If no Google API key is configured, return the initial authentic reviews dataset seamlessly
  if (!apiKey || !placeId) {
    return NextResponse.json({
      ...initialGoogleReviews,
      is_live: false,
      message: "Using verified GMB profile dataset. Add GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID in .env.local to enable live Places API sync.",
    });
  }

  try {
    const fields = "name,rating,user_ratings_total,reviews,url";
    const googleUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(placeId)}&fields=${fields}&key=${apiKey}`;

    const res = await fetch(googleUrl, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.warn("Google Places API responded with HTTP error:", res.status);
      return NextResponse.json({
        ...initialGoogleReviews,
        is_live: false,
        warning: `Google API returned HTTP ${res.status}`,
      });
    }

    const data = await res.json();

    if (data.status !== "OK" || !data.result) {
      console.warn("Google Places API error status:", data.status, data.error_message);
      return NextResponse.json({
        ...initialGoogleReviews,
        is_live: false,
        warning: data.error_message || data.status,
      });
    }

    const place = data.result;
    const fetchedReviews: GoogleReview[] = (place.reviews || []).map((r: any, idx: number) => ({
      id: `google-${r.time || idx}`,
      author_name: r.author_name || "Google User",
      author_url: r.author_url,
      profile_photo_url: r.profile_photo_url,
      rating: r.rating || 5,
      relative_time_description: r.relative_time_description || "Recently",
      text: r.text || "",
      time: r.time,
      verified: true,
    }));

    // If Google returns 5 reviews (standard Places API limit), merge with remaining initial reviews to keep full breadth
    const mergedReviews = [...fetchedReviews];
    if (mergedReviews.length < initialGoogleReviews.reviews.length) {
      for (const initial of initialGoogleReviews.reviews) {
        if (!mergedReviews.some(r => r.author_name.toLowerCase() === initial.author_name.toLowerCase())) {
          mergedReviews.push(initial);
        }
      }
    }

    const payload: GoogleReviewsData = {
      business_name: place.name || initialGoogleReviews.business_name,
      rating: place.rating || initialGoogleReviews.rating,
      total_reviews: place.user_ratings_total || initialGoogleReviews.total_reviews,
      google_maps_url: place.url || initialGoogleReviews.google_maps_url,
      write_review_url: `https://search.google.com/local/writereview?placeid=${placeId}`,
      reviews: mergedReviews,
      is_live: true,
      last_updated: new Date().toISOString(),
    };

    return NextResponse.json(payload, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error: any) {
    console.error("Error fetching Google Reviews:", error);
    return NextResponse.json({
      ...initialGoogleReviews,
      is_live: false,
      error: error.message,
    });
  }
}
