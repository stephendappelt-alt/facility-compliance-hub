"use client";

import { useState, FormEvent } from "react";

// ============================================================
// Kit (ConvertKit) Newsletter Integration
// ============================================================
// Form ID and API Key are set via environment variables in Vercel.
// NEXT_PUBLIC_KIT_FORM_ID and NEXT_PUBLIC_KIT_API_KEY
// ============================================================

const KIT_FORM_ID = process.env.NEXT_PUBLIC_KIT_FORM_ID || "";
const KIT_API_KEY = process.env.NEXT_PUBLIC_KIT_API_KEY || "";

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

    if (!KIT_FORM_ID || !KIT_API_KEY) {
      console.log("Newsletter signup (Kit not configured):", email);
      setStatus("success");
      setEmail("");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
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
