import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { countries, getCountry } from "../../../data/countries";

export function generateStaticParams() {
  return countries.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const country = getCountry(slug);
  if (!country) return { title: "Destination Not Found" };
  return {
    title: `Study in ${country.name} | Saraswati Immigration & Travel Services`,
    description: country.overview,
  };
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const country = getCountry(slug);
  if (!country) return notFound();

  return (
    <main className="bg-[var(--cream)]">
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end bg-cover bg-center"
        style={{ backgroundImage: `url('${country.heroImage}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/70 to-[var(--ink)]/20" />
        <div className="relative max-w-7xl mx-auto px-6 pb-16 w-full">
          <Link href="/countries" className="text-sm text-gray-300 hover:text-[var(--gold)]">
            ← All Destinations
          </Link>
          <div className="mt-4 flex items-center gap-4">
            <span className="text-5xl">{country.flag}</span>
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              Study in {country.name}
            </h1>
          </div>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">{country.tagline}</p>
        </div>
      </section>

      {/* Boarding pass stats strip */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">
        <div className="boarding-pass">
          <div>
            <div className="eyebrow">Intakes</div>
            <p className="mt-2 font-display text-lg font-semibold">{country.intakes}</p>
          </div>
          <div>
            <div className="eyebrow">Processing Time</div>
            <p className="mt-2 font-display text-lg font-semibold">{country.processingTime}</p>
          </div>
          <div>
            <div className="eyebrow">Avg. Tuition</div>
            <p className="mt-2 font-display text-lg font-semibold">{country.avgTuition}</p>
          </div>
          <div>
            <div className="eyebrow">Popular Field</div>
            <p className="mt-2 font-display text-lg font-semibold">{country.popularCourses[0]}</p>
          </div>
        </div>
      </section>

      {/* Overview + Why study */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <span className="eyebrow">Overview</span>
          <h2 className="mt-3 text-3xl font-semibold">Why {country.name}?</h2>
          <p className="mt-5 text-[var(--muted)] leading-relaxed">{country.overview}</p>

          <ul className="mt-8 space-y-3">
            {country.whyStudy.map((point) => (
              <li key={point} className="flex gap-3 text-sm">
                <span className="text-[var(--gold)] font-bold">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="eyebrow">Popular Courses</span>
          <div className="mt-3 flex flex-wrap gap-3">
            {country.popularCourses.map((course) => (
              <span
                key={course}
                className="px-4 py-2 rounded-full bg-white border border-[var(--line)] text-sm font-medium"
              >
                {course}
              </span>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-[var(--ink)] text-white p-8">
            <span className="eyebrow">Visa Requirements Checklist</span>
            <ul className="mt-4 space-y-3">
              {country.visaRequirements.map((req) => (
                <li key={req} className="flex gap-3 text-sm text-gray-300">
                  <span className="text-[var(--gold)]">—</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-gray-500">
              Requirements are indicative and change periodically — we confirm
              the current checklist with you during your consultation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-[var(--line)] py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold">
          Thinking about {country.name}?
        </h2>
        <p className="mt-3 text-[var(--muted)]">
          Book a free consultation and we&apos;ll map out your exact path.
        </p>
        <Link
          href={`/contact?country=${encodeURIComponent(country.name)}`}
          className="mt-8 inline-block bg-[var(--gold)] text-black px-10 py-4 rounded-xl text-lg font-bold hover:brightness-95 transition"
        >
          Book Free Consultation
        </Link>
      </section>
    </main>
  );
}
