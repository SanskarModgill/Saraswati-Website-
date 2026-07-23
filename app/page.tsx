import Link from "next/link";
import { countries } from "../data/countries";

const featuredCountries = countries.slice(0, 6);

export default function Home() {
  return (
    <main className="bg-[var(--cream)] text-[var(--slate)]">
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center -mt-20 pb-24"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/85 via-[var(--ink)]/75 to-[var(--ink)]" />

        <div className="relative text-center px-6 pt-20 md:pt-24 max-w-3xl">
          <span className="eyebrow">Registered Consultancy · Dhuri, Punjab</span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-[1.05]">
            Study Abroad, <span className="text-[var(--gold)]">Guided Right</span>
          </h1>
          <p className="mt-6 text-base md:text-xl text-gray-300">
            Your gateway to global education — honest counselling for every
            step, from shortlisting a university to landing at your destination.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/eligibility"
              className="bg-[var(--gold)] text-black w-full sm:w-auto px-8 py-4 text-center rounded-xl text-lg font-bold hover:brightness-95 transition shadow-lg shadow-black/20"
            >
              Check My Eligibility — Free
            </Link>
            <Link
              href="/countries"
              className="border-2 border-[var(--gold)] text-white w-full sm:w-auto px-8 py-4 text-center rounded-xl text-lg font-bold hover:bg-[var(--gold)] hover:text-black transition"
            >
              Explore Countries
            </Link>
          </div>
        </div>

        {/* Trust strip, overlapping the hero edge */}
        <div className="absolute -bottom-20 md:-bottom-16 left-0 right-0 px-4 md:px-6">
          <div className="max-w-5xl mx-auto boarding-pass">
            <div>
              <div className="eyebrow">Destinations</div>
              <p className="mt-2 font-display text-lg font-semibold">10+ Countries</p>
            </div>
            <div>
              <div className="eyebrow">Visa Types</div>
              <p className="mt-2 font-display text-lg font-semibold">Study · Work · PR · Visitor · Spouse</p>
            </div>
            <div>
              <div className="eyebrow">Approach</div>
              <p className="mt-2 font-display text-lg font-semibold">1:1 Counselling</p>
            </div>
            <div>
              <div className="eyebrow">Assessment</div>
              <p className="mt-2 font-display text-lg font-semibold">Free &amp; Instant</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility promo */}
      <section className="max-w-6xl mx-auto px-4 md: px-6 pt-32 pb-8">
        <div className="rounded-3xl bg-white border border-[var(--line)] p-6 md:p-10 grid md:grid-cols-[1.3fr_1fr] gap-8 items-center shadow-sm">
          <div>
            <span className="eyebrow">Free Tool</span>
            <h2 className="mt-3 text-3xl font-semibold">
              Not sure where you stand? Find out in 60 seconds.
            </h2>
            <p className="mt-4 text-[var(--muted)]">
              Our eligibility checker scores your academic profile, IELTS
              score, budget and experience — then recommends the countries
              that genuinely fit, before you commit to anything.
            </p>
            <Link
              href="/eligibility"
              className="mt-6 inline-flex items-center gap-2 bg-[var(--ink)] text-white px-7 py-3.5 rounded-xl font-bold hover:brightness-125 transition"
            >
              Check My Eligibility →
            </Link>
          </div>
          <div className="rounded-2xl bg-[var(--cream)] border border-[var(--line)] p-6">
            <div className="flex items-center justify-between text-sm font-mono text-[var(--muted)]">
              <span>Sample Result</span>
              <span className="px-3 py-1 rounded-full bg-[#E7F5EC] text-[#1E7A4C] text-xs font-bold uppercase">
                Good Fit
              </span>
            </div>
            <p className="mt-4 font-display text-5xl font-bold text-[var(--ink)]">
              72<span className="text-xl text-[var(--muted)]">/100</span>
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Recommended: Canada, UK, Malta, Cyprus
            </p>
          </div>
        </div>
      </section>

      {/* Countries teaser */}
      <section id="countries" className="max-w-7xl mx-auto py-20 px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow">Where You Could Go</span>
          <h2 className="mt-3 text-4xl font-semibold">Study Destinations</h2>
          <p className="mt-4 text-[var(--muted)]">
            Each country has its own visa process, intake calendar and cost of
            living. Open a destination to see exactly what it takes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCountries.map((country) => (
            <Link
              key={country.slug}
              href={`/countries/${country.slug}`}
              className="group rounded-2xl overflow-hidden border border-[var(--line)] bg-white hover:shadow-2xl hover:-translate-y-1 transition"
            >
              <div
                className="h-36 bg-cover bg-center relative"
                style={{ backgroundImage: `url('${country.heroImage}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)]/70 via-[var(--ink)]/10 to-transparent" />
                <span className="absolute bottom-3 left-4 text-3xl drop-shadow">{country.flag}</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-display font-semibold">{country.name}</h3>
                <p className="mt-2 text-sm text-[var(--muted)]">{country.tagline}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--gold)] group-hover:gap-2 transition-all">
                  Explore visa &amp; courses →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/countries"
            className="inline-block border-2 border-[var(--ink)] px-8 py-3 rounded-xl font-bold hover:bg-[var(--ink)] hover:text-white transition"
          >
            View All 7 Destinations →
          </Link>
        </div>
      </section>

      {/* Services teaser */}
      <section id="services" className="bg-[var(--ink)] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">What We Handle</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold text-white">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🎓", title: "Student Visa", desc: "Complete visa assistance from admission through to approval." },
              { icon: "🏛", title: "Admission Guidance", desc: "University selection matched to your budget and goals." },
              { icon: "✈", title: "Travel Assistance", desc: "Flights, accommodation and pre-departure briefing, sorted." },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-[var(--gold)]/50 hover:bg-white/[0.08] transition"
              >
                <div className="w-14 h-14 rounded-full bg-[var(--gold)]/15 flex items-center justify-center text-2xl">
                  {s.icon}
                </div>
                <h3 className="mt-5 text-2xl font-display font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block border-2 border-[var(--gold)] px-8 py-3 rounded-xl font-bold hover:bg-[var(--gold)] hover:text-black transition"
            >
              See Full Service Details →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-24" id="faq">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Why Families Trust Us</span>
            <h2 className="mt-3 text-4xl font-semibold">Why Choose Us?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: "01", title: "Honest Assessments", desc: "We tell you clearly if a profile isn't ready yet, and exactly what to fix — instead of filing a weak application." },
              { n: "02", title: "Local & Accessible", desc: "Based right in Dhuri, opposite S. D. School — walk in anytime for an in-person update on your file." },
              { n: "03", title: "End-to-End Support", desc: "From SOPs to interview mocks, one team stays with you from application to arrival." },
            ].map((item) => (
              <div
                key={item.n}
                className="rounded-2xl p-8 border border-[var(--line)] bg-[var(--cream)] hover:border-[var(--gold)] hover:shadow-lg transition"
              >
                <span className="font-display text-4xl font-bold text-[var(--gold)]/60">{item.n}</span>
                <h3 className="mt-3 text-xl font-display font-semibold">{item.title}</h3>
                <p className="mt-3 text-[var(--muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative bg-gradient-to-r from-[var(--ink)] to-[var(--charcoal)] text-white text-center py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_20%_20%,white,transparent_35%),radial-gradient(circle_at_80%_60%,white,transparent_35%)]" />
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Ready to start your application?
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Book a free consultation and leave with a clear, honest next step —
            no pressure, no guesswork.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block bg-[var(--gold)] text-black w-full sm:w-auto px-8 py-4 text-center rounded-xl text-lg font-bold hover:brightness-95 transition"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/eligibility"
              className="inline-block border-2 border-white/30 text-white w-full sm:w-auto px-8 py-4 text-center rounded-xl text-lg font-bold hover:bg-white/10 transition"
            >
              Check Eligibility First
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
