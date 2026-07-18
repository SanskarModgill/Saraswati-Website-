"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const prefilledCountry = searchParams.get("country") ?? "";
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white border border-[var(--line)] p-8 flex flex-col items-center justify-center text-center h-full">
        <div className="text-4xl">✅</div>
        <h3 className="mt-4 text-xl font-display font-semibold">Message Received</h3>
        <p className="mt-2 text-[var(--muted)]">
          Thank you — we&apos;ve got your details and will call you back shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white border border-[var(--line)] p-8">
      <h3 className="text-xl font-display font-semibold">Send Us Your Query</h3>
      <p className="mt-1 text-sm text-[var(--muted)]">
        We usually reply within one business day.
      </p>

      <form
        className="mt-6 grid gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: wire this up to your email/CRM endpoint
          setSubmitted(true);
        }}
      >
        <input
          type="text"
          required
          placeholder="Full Name"
          className="border border-[var(--line)] p-4 rounded-lg focus:outline-none focus:border-[var(--gold)]"
        />
        <input
          type="tel"
          required
          placeholder="Phone Number"
          className="border border-[var(--line)] p-4 rounded-lg focus:outline-none focus:border-[var(--gold)]"
        />
        <input
          type="email"
          placeholder="Email (optional)"
          className="border border-[var(--line)] p-4 rounded-lg focus:outline-none focus:border-[var(--gold)]"
        />
        <input
          type="text"
          defaultValue={prefilledCountry}
          placeholder="Preferred Country"
          className="border border-[var(--line)] p-4 rounded-lg focus:outline-none focus:border-[var(--gold)]"
        />
        <textarea
          rows={4}
          placeholder="Tell us about yourself"
          className="border border-[var(--line)] p-4 rounded-lg focus:outline-none focus:border-[var(--gold)]"
        />

        <button
          type="submit"
          className="mt-2 bg-[var(--gold)] text-black px-8 py-4 rounded-xl font-bold text-lg hover:brightness-95 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
