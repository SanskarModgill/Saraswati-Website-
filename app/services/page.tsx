import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Saraswati Immigration & Travel Services",
  description:
    "Student visa assistance, admission guidance, work & PR pathways, and travel assistance from Saraswati Immigration & Travel Services, Dhuri.",
};

const services = [
  {
    icon: "🎓",
    title: "Student Visa Assistance",
    summary: "End-to-end visa filing, from document collection to final approval.",
    details: [
      "Document checklist tailored to your destination country",
      "Statement of Purpose review and drafting support",
      "Visa application filing and status tracking",
      "Mock visa interviews for USA, UK and Canada",
    ],
  },
  {
    icon: "🏛",
    title: "Admission Guidance",
    summary: "University and course shortlisting matched to your profile and budget.",
    details: [
      "University shortlisting based on academics and budget",
      "Application form completion and submission",
      "Offer letter comparison and final selection support",
      "Scholarship and fee-waiver opportunities, where available",
    ],
  },
  {
    icon: "🛂",
    title: "Work & PR Pathways",
    summary: "Guidance on skilled worker programs and permanent residency routes.",
    details: [
      "Eligibility review for Express Entry, PNP and similar programs",
      "Job-offer based and employer-sponsored visa routes",
      "Points-based profile improvement suggestions",
      "Documentation support for PR filing",
    ],
  },
  {
    icon: "✈",
    title: "Travel Assistance",
    summary: "Flights, accommodation and pre-departure briefing, handled for you.",
    details: [
      "Flight booking assistance at student-friendly fares",
      "Accommodation guidance near your campus",
      "Pre-departure briefing on documents, currency and essentials",
      "Airport pickup coordination in select destinations",
    ],
  },
  {
    icon: "🗂",
    title: "Visit & Tourist Visa",
    summary: "Family visit, tourism and business travel visas, filed correctly the first time.",
    details: [
      "Purpose-specific documentation guidance",
      "Sponsor and invitation letter support",
      "Travel itinerary and funds proof preparation",
      "Application tracking until visa issuance",
    ],
  },
  {
    icon: "📋",
    title: "Free Profile Evaluation",
    summary: "An honest first read on where your profile stands before you commit.",
    details: [
      "Education, experience and English test review",
      "Realistic visa category recommendation",
      "Clear list of gaps to close before applying",
      "No cost, no obligation — just a straight answer",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[var(--cream)]">
      <section className="bg-[var(--ink)] text-white py-20 px-6 text-center">
        <span className="eyebrow">What We Handle</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-white">
          Our Services
        </h1>
        <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
          One team, every stage — from choosing a university to landing at
          your destination.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white border border-[var(--line)] p-8 hover:shadow-xl hover:border-[var(--gold)] hover:-translate-y-1 transition"
            >
              <div className="w-14 h-14 rounded-full bg-[var(--gold-soft)] flex items-center justify-center text-2xl">
                {service.icon}
              </div>
              <h3 className="mt-5 text-2xl font-display font-semibold">{service.title}</h3>
              <p className="mt-2 text-[var(--muted)]">{service.summary}</p>
              <ul className="mt-5 space-y-2">
                {service.details.map((d) => (
                  <li key={d} className="flex gap-2 text-sm">
                    <span className="text-[var(--gold)] font-bold">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-block bg-[var(--gold)] text-black px-10 py-4 rounded-xl text-lg font-bold hover:brightness-95 transition"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
