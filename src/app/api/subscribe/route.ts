import { NextRequest, NextResponse } from "next/server";

const KIT_FORM_ID = process.env.NEXT_PUBLIC_KIT_FORM_ID || "";
const KIT_API_KEY = process.env.NEXT_PUBLIC_KIT_API_KEY || "";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!KIT_FORM_ID || !KIT_API_KEY) {
      console.log("Newsletter signup (Kit not configured):", email);
      return NextResponse.json({ success: true });
    }

    const res = await fetch(
      `https://api.convertkit.com/v3/forms/${KIT_FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          api_key: KIT_API_KEY,
          email,
        }),
      }
    );

    if (!res.ok) {
      const data = await res.text();
      console.error("Kit API error:", data);
      return NextResponse.json(
        { error: "Subscription failed. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
