import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* Hero */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <h1 className="text-5xl font-bold leading-tight">
            Saraswati Immigration &
            <span className="text-yellow-400"> Travel Services</span>
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            Helping Students Study Abroad with Confidence.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg"
            >
              Free Consultation
            </Link>

            <Link
              href="#countries"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black"
            >
              Explore Countries
            </Link>
          </div>

        </div>
      </section>

      {/* Countries */}

      <section
        id="countries"
        className="max-w-7xl mx-auto py-20 px-6"
      >
        <h2 className="text-4xl font-bold text-center">
          Study Destinations
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {[
            "Canada",
            "UK",
            "USA",
            "Malta",
            "Cyprus",
            "Mauritius",
            "Singapore",
          ].map((country) => (
            <div
              key={country}
              className="rounded-xl shadow-lg border p-8 hover:shadow-2xl transition"
            >
              <h3 className="text-2xl font-bold">{country}</h3>

              <p className="mt-3 text-gray-600">
                Expert admission guidance and complete visa assistance.
              </p>

              <button className="mt-6 bg-black text-white px-5 py-2 rounded-lg">
                Learn More
              </button>
            </div>
          ))}

        </div>
      </section>

      {/* Why Choose Us */}

      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-bold">
                Student Visa Experts
              </h3>

              <p className="mt-3">
                Complete guidance from admission to visa approval.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-bold">
                Documentation Support
              </h3>

              <p className="mt-3">
                We help prepare every required document accurately.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-bold">
                Honest Consultation
              </h3>

              <p className="mt-3">
                Transparent advice with personalized support.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Contact */}

      <section
        id="contact"
        className="max-w-5xl mx-auto py-20 px-6"
      >

        <h2 className="text-4xl font-bold text-center">
          Book Your Free Consultation
        </h2>

        <form className="mt-10 grid gap-5">

          <input
            className="border p-4 rounded-lg"
            placeholder="Full Name"
          />

          <input
            className="border p-4 rounded-lg"
            placeholder="Phone Number"
          />

          <input
            className="border p-4 rounded-lg"
            placeholder="Preferred Country"
          />

          <textarea
            className="border p-4 rounded-lg"
            rows={5}
            placeholder="Tell us about yourself"
          />

          <button className="bg-yellow-500 text-black font-bold py-4 rounded-lg hover:bg-yellow-400">
            Submit
          </button>

        </form>

      </section>

      {/* Footer */}

      <footer className="bg-black text-white py-12">

        <div className="max-w-7xl mx-auto px-6">

          <h3 className="text-2xl font-bold">
            Saraswati Immigration & Travel Services
          </h3>

          <p className="mt-4">
            Opp. S.D. School, Pathshala Road, Dhuri
          </p>

          <p>📞 +91 94177 11022</p>

          <p className="mt-6 text-gray-400">
            © 2026 Saraswati Immigration. All Rights Reserved.
          </p>

        </div>

      </footer>

    </main>
  );
} 