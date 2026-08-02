import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Saraswati Immigration & Travel Services",
  description:
    "Visit Saraswati Immigration & Travel Services, Opp. S. D. School, Pathshala Road, Dhuri, or book a free consultation online.",
};

export default function ContactPage() {
  return (
    <main className="bg-[var(--cream)]">
      <section className="bg-[var(--ink)] text-white py-20 px-6 text-center">
        <span className="eyebrow">Get In Touch</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-[var(--gold)]">
          Book Your Free Consultation
        </h1>
        <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
          Walk in, call, WhatsApp us, or fill the form below — We usually
          reply within one business day.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        {/* Office details */}
        <div>
          <div className="rounded-2xl bg-white border border-[var(--line)] p-8">
            <h3 className="text-xl font-display font-semibold">Visit Our Office</h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <div className="text-xs uppercase tracking-wide text-[var(--muted)] font-semibold">Address</div>
                  <div className="mt-1 font-medium">Opp. S. D. School, Pathshala Road, Dhuri, Punjab</div>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl">📞</span>
                <div>
                  <div className="text-xs uppercase tracking-wide text-[var(--muted)] font-semibold">Phone</div>
                  <a href="tel:+919417711022" className="mt-1 font-medium block hover:text-[var(--gold)]">
                    +91 94177 11022
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl">💬</span>
                <div>
                  <div className="text-xs uppercase tracking-wide text-[var(--muted)] font-semibold">WhatsApp</div>
                  <a
                    href="https://wa.me/919417711022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 font-medium block hover:text-[var(--gold)]"
                  >
                    Chat with us instantly
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl">🕐</span>
                <div>
                  <div className="text-xs uppercase tracking-wide text-[var(--muted)] font-semibold">Hours</div>
                  <div className="mt-1 font-medium">Mon – Sat, 10:00 AM – 6:30 PM</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden border border-[var(--line)] h-64">
            <iframe
              title="Office location map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3551.3744834578247!2d75.86387166414875!3d30.37051716403398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39105b20b21dadc9%3A0x5623b4e9888f1563!2sSaraswati%20Immigration%20and%20Travel%20Services!5e0!3m2!1sen!2sin!4v1785664989972!5m2!1sen!2sin"
            />
          </div>
        </div>

        {/* Form */}
        <Suspense fallback={<div className="rounded-2xl bg-white border border-[var(--line)] p-8 h-full" />}>
          <ContactForm />
        </Suspense>
      </section>
    </main>
  );
}
