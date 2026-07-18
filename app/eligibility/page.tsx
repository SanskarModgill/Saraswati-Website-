"use client";

import { useState } from "react";

export default function EligibilityPage() {
  const [form, setForm] = useState({
    name: "",
    qualification: "",
    percentage: "",
    ielts: "",
    backlogs: "",
    budget: "",
    experience: "",
    country: "",
  });

  const [result, setResult] = useState<null | {
    score: number;
    level: string;
    color: string;
    countries: string[];
  }>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function calculateEligibility() {
    let score = 0;

    const percentage = Number(form.percentage);
    const ielts = Number(form.ielts);
    const backlogs = Number(form.backlogs);

    // Percentage
    if (percentage >= 85) score += 30;
    else if (percentage >= 75) score += 25;
    else if (percentage >= 65) score += 20;
    else if (percentage >= 55) score += 10;

    // IELTS
    if (ielts >= 8) score += 25;
    else if (ielts >= 7) score += 20;
    else if (ielts >= 6.5) score += 15;
    else if (ielts >= 6) score += 10;

    // Backlogs
    if (backlogs === 0) score += 20;
    else if (backlogs <= 3) score += 15;
    else if (backlogs <= 6) score += 8;

    // Budget
    if (form.budget === "High") score += 15;
    else if (form.budget === "Medium") score += 10;
    else score += 5;

    // Experience
    if (form.experience === "2+") score += 10;
    else if (form.experience === "1") score += 5;

    let level = "";
    let color = "";
    let countries: string[] = [];

    if (score >= 80) {
      level = "Excellent";
      color = "text-green-600";
      countries = ["Canada", "UK", "USA", "Singapore"];
    } else if (score >= 60) {
      level = "Good";
      color = "text-yellow-600";
      countries = ["Canada", "UK", "Malta", "Cyprus"];
    } else {
      level = "Needs Improvement";
      color = "text-red-600";
      countries = ["Malta", "Cyprus", "Mauritius"];
    }

    setResult({
      score,
      level,
      color,
      countries,
    });
  }

  return (
    <main className="min-h-screen bg-gray-100 py-16">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-center">
          🎓 Study Abroad Eligibility Assessment
        </h1>

        <p className="text-center text-gray-500 mt-3">
          Fill in your academic details to instantly check your eligibility.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <input
            name="name"
            placeholder="Full Name"
            className="border rounded-lg p-4"
            onChange={handleChange}
          />

          <input
            name="qualification"
            placeholder="Highest Qualification"
            className="border rounded-lg p-4"
            onChange={handleChange}
          />

          <input
            name="percentage"
            placeholder="Percentage / CGPA"
            className="border rounded-lg p-4"
            onChange={handleChange}
          />

          <input
            name="ielts"
            placeholder="IELTS Score"
            className="border rounded-lg p-4"
            onChange={handleChange}
          />

          <input
            name="backlogs"
            placeholder="Number of Backlogs"
            className="border rounded-lg p-4"
            onChange={handleChange}
          />

          <select
            name="budget"
            className="border rounded-lg p-4"
            onChange={handleChange}
          >
            <option>Budget</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <select
            name="experience"
            className="border rounded-lg p-4"
            onChange={handleChange}
          >
            <option>Work Experience</option>
            <option value="0">Fresher</option>
            <option value="1">1 Year</option>
            <option value="2+">2+ Years</option>
          </select>

          <select
            name="country"
            className="border rounded-lg p-4"
            onChange={handleChange}
          >
            <option>Preferred Country</option>
            <option>Canada</option>
            <option>UK</option>
            <option>USA</option>
            <option>Singapore</option>
            <option>Malta</option>
            <option>Cyprus</option>
            <option>Mauritius</option>
          </select>

        </div>

        <button
          onClick={calculateEligibility}
          className="w-full mt-10 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-xl transition"
        >
          Check Eligibility
        </button>

        {result && (

          <div className="mt-12 bg-gray-50 rounded-2xl p-8 shadow">

            <h2 className="text-3xl font-bold text-center">
              Eligibility Result
            </h2>

            <p className={`text-center text-6xl font-bold mt-6 ${result.color}`}>
              {result.score}/100
            </p>

            <p className={`text-center text-2xl mt-4 font-semibold ${result.color}`}>
              {result.level}
            </p>

            <div className="mt-8">

              <h3 className="text-xl font-bold">
                Recommended Countries
              </h3>

              <ul className="mt-3 list-disc list-inside">

                {result.countries.map((country) => (
                  <li key={country}>{country}</li>
                ))}

              </ul>

            </div>

            <div className="mt-8">

              <h3 className="text-xl font-bold">
                Documents Required
              </h3>

              <ul className="mt-3 list-disc list-inside space-y-1">
                <li>Passport</li>
                <li>Academic Certificates</li>
                <li>IELTS / PTE Score Card</li>
                <li>Statement of Purpose (SOP)</li>
                <li>Resume</li>
                <li>Financial Documents</li>
              </ul>

            </div>

            <a
              href="/contact"
              className="block text-center mt-10 bg-black text-white py-4 rounded-xl hover:bg-gray-800"
            >
              Book Free Consultation
            </a>

          </div>

        )}

      </div>

    </main>
  );
}