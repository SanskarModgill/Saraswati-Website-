"use client";

import { supabase } from "@/lib/supabase";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ContactForm() {
  const searchParams = useSearchParams();
  const prefilledCountry = searchParams.get("country") ?? "";
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    country: prefilledCountry,
    message: "",
  });

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
        onSubmit={async (e) => {
          e.preventDefault();

          setLoading(true);

          try {
            const { error } = await supabase
              .from("contact_forms")
              .insert([form]);

            if (error) {
              throw error;
            }

            setForm({
              name: "",
              phone: "",
              email: "",
              country: prefilledCountry,
              message: "",
            });

            setSubmitted(true);
          } catch (error: any) {
            console.error(error);
            alert(error.message || "Something went wrong.");
          } finally {
            setLoading(false);
          }
        }}
              >
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          placeholder="Full Name"
          className="border border-[var(--line)] p-4 rounded-lg focus:outline-none focus:border-[var(--gold)]"
        />
        <input
          type="tel"
          required
          value={form.phone}
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
          placeholder="Phone Number"
          className="border border-[var(--line)] p-4 rounded-lg focus:outline-none focus:border-[var(--gold)]"
        />
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          placeholder="Email ID"
          className="border border-[var(--line)] p-4 rounded-lg focus:outline-none focus:border-[var(--gold)]"
        />
        <input
          type="text"
          required
          value={form.country}
          onChange={(e) =>
            setForm({ ...form, country: e.target.value })
          }
          placeholder="Country"
          className="border border-[var(--line)] p-4 rounded-lg focus:outline-none focus:border-[var(--gold)]"
        />
        <textarea
          rows={4}
          required
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
          placeholder="Tell us about yourself"
          className="border border-[var(--line)] p-4 rounded-lg focus:outline-none focus:border-[var(--gold)]"
        />

        <button
          type="submit"
          disabled={loading}
          className="mt-2 bg-[var(--gold)] text-black px-8 py-4 rounded-xl font-bold text-lg hover:brightness-95 transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}

        </button>
      </form>
    </div>
  );
}
