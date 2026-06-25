import type { Testimonial } from "@/types";

type CachedReviewPayload = {
  reviews: Testimonial[];
  rating?: number;
  userRatingCount?: number;
};

const STATIC_GOOGLE_MAPS_REVIEWS: Testimonial[] = [
  {
    name: "Google Maps Review",
    review:
      "Helpful team and good service. They explained the battery options clearly and suggested the right fit.",
    rating: 5,
    source: "Google Maps",
  },
  {
    name: "Google Maps Review",
    review:
      "Quick response and professional support. Installation was smooth and the overall experience was reliable.",
    rating: 5,
    source: "Google Maps",
  },
  {
    name: "Google Maps Review",
    review:
      "Quality products and courteous staff. A dependable place for inverter and battery needs.",
    rating: 5,
    source: "Google Maps",
  },
];

export async function getReviewsData(): Promise<CachedReviewPayload> {
  return {
    reviews: STATIC_GOOGLE_MAPS_REVIEWS,
  };
}

export async function getGoogleReviews(): Promise<Testimonial[]> {
  const data = await getReviewsData();
  return data.reviews;
}

export async function getGoogleReviewSummary() {
  const data = await getReviewsData();

  return {
    rating: data.rating,
    userRatingCount: data.userRatingCount,
  };
}
