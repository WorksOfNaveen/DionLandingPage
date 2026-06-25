import { NextResponse } from "next/server";

import { getReviewsData } from "@/lib/reviews";

export async function GET() {
  try {
    const data = await getReviewsData();

    return NextResponse.json({
      reviews: data.reviews,
      rating: data.rating,
      userRatingCount: data.userRatingCount,
    });
  } catch (error) {
    console.error("Failed to fetch reviews", error);

    return NextResponse.json(
      { message: "Unable to load reviews right now." },
      { status: 500 },
    );
  }
}
