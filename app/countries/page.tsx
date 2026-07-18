import Link from "next/link";
import type { Metadata } from "next";
import { countries } from "../../data/countries";

export const metadata: Metadata = {
  title: "Study Destinations | Saraswati Immigration & Travel Services",
  description:
    "Compare study visa requirements, intakes and tuition across Canada, UK, USA, Malta, Cyprus, Mauritius and Singapore.",
};

export default function CountriesPage() {
  return (
    <main className="bg-[var(--cream)]">
      <section className="bg-[var(--ink)] text-white py-20 px-6 text-center">
        <span className="eyebrow">Compare Destinations</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold text-white">
          Every Study Destination We Cover
        </h1>
        <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
          Open a country to see its visa requirements, intake calendar,
          popular courses and typical tuition — before you decide where to apply.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country) => (
            <Link
                key={country.slug}
                href={`/countries/${country.slug}`}
                className="group overflow-hidden rounded-3xl bg-white border border-[var(--line)] shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
                >

                <div className="relative h-56 overflow-hidden">

                    <img
                    src={country.heroImage}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    <div className="absolute top-4 left-4 bg-white/90 rounded-full px-3 py-1 text-lg shadow">
                    {country.flag}
                    </div>

                    <div className="absolute bottom-5 left-5">
                    <h3 className="text-3xl font-bold text-white">
                        {country.name}
                    </h3>

                    <p className="text-gray-200 text-sm">
                        {country.tagline}
                    </p>
                    </div>

                </div>

                <div className="p-7">

                    <div className="flex flex-wrap gap-2 mb-5">

                    <span className="bg-[var(--gold)]/10 text-[var(--gold)] px-3 py-1 rounded-full text-xs font-semibold">
                        Student Visa
                    </span>

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Work Rights
                    </span>

                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        Scholarships
                    </span>

                    </div>

                    <div className="flex justify-between items-center">

                    <span className="text-sm text-[var(--muted)]">
                        {country.intakes}
                    </span>

                    <span className="text-[var(--gold)] font-bold group-hover:translate-x-2 transition-all">
                        Explore →
                    </span>

                    </div>

                </div>

                </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
