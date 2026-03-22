"use client";

import { useState, FormEvent } from "react";

// ============================================================
// Kit (ConvertKit) Newsletter Integration
// ============================================================
// Submits to /api/subscribe which proxies to Kit server-side.
// This avoids browser CORS issues with Kit's API.
// ============================================================

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

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Subscription failed. Please try again.");
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
