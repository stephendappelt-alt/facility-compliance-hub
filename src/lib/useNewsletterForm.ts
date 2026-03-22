"use client";

import { useState, FormEvent } from "react";

// ============================================================
// Kit (ConvertKit) Newsletter Integration
// ============================================================
// To activate:
// 1. Sign up at kit.com (free plan)
// 2. Create an inline form
// 3. Add to your .env.local (and Vercel environment variables):
//    NEXT_PUBLIC_KIT_FORM_ID=your_form_id
// ============================================================

const KIT_FORM_ID = process.env.NEXT_PUBLIC_KIT_FORM_ID || "";

type Status = "idle" | "loading" | "success" | "error";

export function useNewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!KIT_FORM_ID) {
      console.log("Newsletter signup (Kit not configured):", email);
      setStatus("success");
      setEmail("");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // Use Kit's HTML form subscription endpoint (no API key required)
      const formData = new FormData();
      formData.append("email_address", email);

      const res = await fetch(
        `https://app.convertkit.com/forms/${KIT_FORM_ID}/subscriptions`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) {
        throw new Error("Subscription failed. Please try again.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  function reset() {
    setStatus("idle");
    setEmail("");
    setErrorMessage("");
  }

  return { email, setEmail, status, errorMessage, handleSubmit, reset };
}
