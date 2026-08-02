"use client";

import { useState } from "react";
import {
  User,
  GraduationCap,
  Globe,
  Briefcase,
  Wallet,
  ArrowRight,
  ArrowLeft,
  CheckCircle
} from "lucide-react";

export default function EligibilityPage() {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    qualification: "",
    percentage: "",
    englishTest: "IELTS",
    score: "",
    backlogs: "",
    gapYears: "",
    experience: "",
    budget: "",
    intake: "",
    preferredCountry: "",
  });

  
  // ADD THIS
  const [result, setResult] = useState<{
    countries: typeof countryRules;
    strengths: string[];
    improvements: string[];
    percentage: number;
    score: number;
    backlogs: number;
  } | null>(null);

  const countryRules = [
    {
      name: "Canada",
      minPercentage: 60,
      englishRequired: true,
      minScore: 6.5,
      maxBacklogs: 5,
      minBudget: 2,
    },
    {
      name: "UK",
      minPercentage: 55,
      englishRequired: true,
      minScore: 6,
      maxBacklogs: 10,
      minBudget: 1,
    },
    {
      name: "Australia",
      minPercentage: 65,
      englishRequired: true,
      minScore: 6.5,
      maxBacklogs: 5,
      minBudget: 2,
    },
    {
      name: "USA",
      minPercentage: 70,
      englishRequired: true,
      minScore: 7,
      maxBacklogs: 3,
      minBudget: 3,
    },
    {
      name: "Germany",
      minPercentage: 70,
      englishRequired: true,
      minScore: 6.5,
      maxBacklogs: 2,
      minBudget: 2,
    },
    {
      name: "Singapore",
      minPercentage: 75,
      englishRequired: false,
      minScore: 6.5,
      maxBacklogs: 2,
      minBudget: 3,
    },
    {
      name: "Malta",
      minPercentage: 50,
      englishRequired: false,
      minScore: 6,
      maxBacklogs: 15,
      minBudget: 1,
    },
    {
      name: "Cyprus",
      minPercentage: 50,
      englishRequired: false,
      minScore: 5.5,
      maxBacklogs: 20,
      minBudget: 1,
    },
    {
      name: "Mauritius",
      minPercentage: 50,
      englishRequired: false,
      minScore: 0,
      maxBacklogs: 20,
      minBudget: 0,
    },
  ];
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const next = () => {
    if (step < 3) setStep(step + 1);
  };

  const prev = () => {
    if (step > 1) setStep(step - 1);
  };

  const getBudgetLevel = () => {
    switch (form.budget) {
      case "Below ₹15 Lakhs":
        return 0;
      case "₹15–25 Lakhs":
        return 1;
      case "₹25–40 Lakhs":
        return 2;
      case "Above ₹40 Lakhs":
        return 3;
      default:
        return 0;
    }
  };


  const generateEligibilityReport = () => {
    if (
      !form.name ||
      !form.qualification ||
      !form.percentage ||
      !form.score ||
      !form.budget
    ) {
      alert("Please complete all required fields.");
      return;
    }

  const percentage = Number(form.percentage);

  const score = Number(form.score);

  const backlogs = Number(form.backlogs);

  const budget = getBudgetLevel();

  const eligibleCountries = countryRules.filter((country) => {

    const englishEligible =
  !country.englishRequired ||
  (
    form.englishTest !== "None" &&
    form.englishTest !== "" &&
    score >= country.minScore
  );

    return (
      percentage >= country.minPercentage &&
      englishEligible &&
      backlogs <= country.maxBacklogs &&
      budget >= country.minBudget
    );

  });

    let strengths = [];

    if (percentage >= 75)
      strengths.push("Strong Academic Profile");

    if (score >= 7)
      strengths.push("Excellent English Test Score");

    if (backlogs === 0)
      strengths.push("No Academic Backlogs");

    if (budget >= 2)
      strengths.push("Healthy Financial Profile");

    let improvements = [];

    if (percentage < 60)
      improvements.push("Improve academic profile");

    if (score < 6.5)
      improvements.push("Improve IELTS/PTE score");

    if (backlogs > 5)
      improvements.push("High number of backlogs");

    if (budget < 2)
      improvements.push("Increase study budget");

    setResult({

      countries: eligibleCountries,

      strengths,

      improvements,

      percentage,

      score,

      backlogs,

    });

  };
  const progress = (step / 3) * 100;

  return (
    <main className="min-h-screen bg-[#f8f7f2] py-16 px-5">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <div className="text-center">

          <h1 className="text-5xl font-bold text-[#0B1F3A]">
            Study Abroad Eligibility Assessment
          </h1>

          <p className="mt-5 text-lg text-gray-600">
            Complete this 2-minute assessment to discover the countries you're
            eligible for.
          </p>

        </div>

        {/* Benefits */}

        <div className="grid md:grid-cols-3 gap-5 mt-10">

          <div className="bg-white rounded-xl shadow p-5 text-center">

            <CheckCircle className="mx-auto text-green-600" size={35} />

            <h3 className="font-semibold mt-3">
              100% Free Assessment
            </h3>

          </div>

          <div className="bg-white rounded-xl shadow p-5 text-center">

            <CheckCircle className="mx-auto text-green-600" size={35} />

            <h3 className="font-semibold mt-3">
              No Registration Required
            </h3>

          </div>

          <div className="bg-white rounded-xl shadow p-5 text-center">

            <CheckCircle className="mx-auto text-green-600" size={35} />

            <h3 className="font-semibold mt-3">
              Instant Results
            </h3>

          </div>

        </div>

        {/* Progress */}

        <div className="mt-12">

          <div className="flex justify-between mb-2">

            <span className="font-medium">
              Step {step} of 3
            </span>

            <span className="font-medium">
              {Math.round(progress)}%
            </span>

          </div>

          <div className="h-3 bg-gray-200 rounded-full">

            <div
              className="h-3 rounded-full bg-[#d4a537] transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </div>

        {/* Card */}

        <div className="bg-white rounded-3xl shadow-2xl mt-10 p-10">

          {/* STEP 1 */}

          {step === 1 && (
            <div>

              <h2 className="text-3xl font-bold text-[#0B1F3A]">
                Personal Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mt-8">

                <div>

                  <label className="font-medium">
                    Full Name
                  </label>

                  <div className="relative mt-2">

                    <User
                      className="absolute left-3 top-4 text-gray-400"
                      size={20}
                    />

                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full border rounded-xl pl-11 p-4"
                    />

                  </div>

                </div>

                <div>

                  <label className="font-medium">
                    Highest Qualification
                  </label>

                  <div className="relative mt-2">

                    <GraduationCap
                      className="absolute left-3 top-4 text-gray-400"
                      size={20}
                    />

                    <select
                      name="qualification"
                      value={form.qualification}
                      onChange={handleChange}
                      className="w-full border rounded-xl pl-11 p-4"
                    >
                      <option value="">
                        Select
                      </option>

                      <option>12th</option>
                      <option>Diploma</option>
                      <option>Bachelor's</option>
                      <option>Master's</option>

                    </select>

                  </div>

                </div>

                <div>

                  <label className="font-medium">
                    Preferred Intake
                  </label>

                  <select
                    name="intake"
                    value={form.intake}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-4 mt-2"
                  >
                    <option value="">
                      Select Intake
                    </option>

                    <option>January</option>
                    <option>May</option>
                    <option>September</option>

                  </select>

                </div>

                <div>

                  <label className="font-medium">
                    Preferred Country
                  </label>

                  <div className="relative mt-2">

                    <Globe
                      className="absolute left-3 top-4 text-gray-400"
                      size={20}
                    />

                    <select
                      name="preferredCountry"
                      value={form.preferredCountry}
                      onChange={handleChange}
                      className="w-full border rounded-xl pl-11 p-4"
                    >
                      <option value="">
                        Select
                      </option>

                      <option>Canada</option>
                      <option>UK</option>
                      <option>Australia</option>
                      <option>USA</option>
                      <option>Germany</option>
                      <option>Singapore</option>
                      <option>Malta</option>
                      <option>Cyprus</option>
                      <option>Mauritius</option>

                    </select>

                  </div>

                </div>

              </div>

            </div>
          )}

          {/* STEP 2 */}

          {step === 2 && (
            <div>

              <h2 className="text-3xl font-bold text-[#0B1F3A]">
                Academic Profile
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mt-8">

                <div>

                  <label className="font-medium">
                    Percentage / CGPA
                  </label>

                  <input
                    type="number"
                    name="percentage"
                    value={form.percentage}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-4 mt-2"
                  />

                </div>

                <div>

                 <div>

                <label className="font-medium">
                  English Language Test
                </label>

                <select
                  name="englishTest"
                  value={form.englishTest}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-4 mt-2"
                >
                  <option value="">Select Test</option>

                  <option value="IELTS">IELTS</option>

                  <option value="PTE">PTE Academic</option>

                  <option value="Duolingo">Duolingo English Test</option>

                  <option value="None">Not Taken Yet</option>

                </select>

              </div>

              <div>

                <label className="font-medium">

                  Test Score

                </label>

                <input
                  type="number"
                  step="0.5"
                  name="score"
                  value={form.score}
                  onChange={handleChange}
                  placeholder="Example: IELTS 6.5 or PTE 58"
                  className="w-full border rounded-xl p-4 mt-2"
                />

              </div>

                </div>

                <div>

                  <label className="font-medium">
                    Number of Backlogs
                  </label>

                  <input
                    type="number"
                    name="backlogs"
                    value={form.backlogs}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-4 mt-2"
                  />

                </div>

                <div>

                  <label className="font-medium">
                    Gap Years
                  </label>

                  <input
                    type="number"
                    name="gapYears"
                    value={form.gapYears}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-4 mt-2"
                  />

                </div>

              </div>

            </div>
          )}

          {/* STEP 3 */}

          {step === 3 && (
            <div>

              <h2 className="text-3xl font-bold text-[#0B1F3A]">
                Financial Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mt-8">

                <div>

                  <label className="font-medium">
                    Work Experience
                  </label>

                  <div className="relative mt-2">

                    <Briefcase
                      className="absolute left-3 top-4 text-gray-400"
                      size={20}
                    />

                    <select
                      name="experience"
                      value={form.experience}
                      onChange={handleChange}
                      className="w-full border rounded-xl pl-11 p-4"
                    >
                      <option value="">
                        Select
                      </option>

                      <option>Fresher</option>
                      <option>1 Year</option>
                      <option>2 Years</option>
                      <option>3+ Years</option>

                    </select>

                  </div>

                </div>

                <div>

                  <label className="font-medium">
                    Budget
                  </label>

                  <div className="relative mt-2">

                    <Wallet
                      className="absolute left-3 top-4 text-gray-400"
                      size={20}
                    />

                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className="w-full border rounded-xl pl-11 p-4"
                    >
                      <option value="">
                        Select
                      </option>

                      <option>Below ₹15 Lakhs</option>
                      <option>₹15–25 Lakhs</option>
                      <option>₹25–40 Lakhs</option>
                      <option>Above ₹40 Lakhs</option>

                    </select>

                  </div>

                </div>

              </div>

            </div>
          )}

          {/* Buttons */}

          <div className="flex justify-between mt-12">

            <button
              onClick={prev}
              disabled={step === 1}
              className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 ${
                step === 1
                  ? "bg-gray-200 cursor-not-allowed"
                  : "bg-gray-800 text-white hover:bg-black"
              }`}
            >
              <ArrowLeft size={18} />
              Previous
            </button>

            {step < 3 ? (
              <button
                onClick={next}
                className="bg-[#d4a537] hover:bg-[#c19327] text-black font-bold px-8 py-3 rounded-xl flex items-center gap-2"
              >
                Next
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                onClick={generateEligibilityReport}
                  className="bg-[#0B1F3A] hover:bg-[#163A70] text-white font-bold px-8 py-3 rounded-xl"
                >
                  Generate Eligibility Report
              </button>
            )}

          </div>
        
        {result && (
          <div className="mt-10 border-t pt-8">

            <h2 className="text-3xl font-bold text-[#0B1F3A]">
              Your Eligibility Report
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="font-bold text-xl">
                  Eligible Countries
                </h3>

                {result.countries.length > 0 ? (
                  <ul className="mt-4 space-y-2">
                    {result.countries.map((country: any) => (
                      <li
                        key={country.name}
                        className="bg-white rounded-lg p-3 shadow"
                      >
                        ✅ {country.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-4 text-red-600">
                    Unfortunately we couldn't find a suitable country based on your
                    profile.
                  </p>
                )}
              </div>

              <div className="bg-blue-50 rounded-xl p-6">

              <h3 className="font-bold text-xl">
                Profile Summary
              </h3>

                <div className="mt-4 space-y-3 text-gray-700">

                  <p>
                    🎓 <strong>Qualification:</strong> {form.qualification}
                  </p>

                  <p>
                    📊 <strong>Percentage:</strong> {form.percentage}
                  </p>

                  <p>
                    🌍 <strong>Preferred Country:</strong> {form.preferredCountry || "Any"}
                  </p>

                  <p>
                    📝 <strong>English Test:</strong>{" "}
                    {form.englishTest === "None"
                      ? "Not Taken"
                      : `${form.englishTest} ${form.score}`}
                  </p>

                  <p>
                    📚 <strong>Backlogs:</strong> {form.backlogs}
                  </p>

                  <p>
                    💰 <strong>Budget:</strong> {form.budget}
                  </p>

                </div>

              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              <div className="bg-green-50 rounded-xl p-6">

                <h3 className="font-bold text-xl mb-4">
                  Strengths
                </h3>

                <ul className="space-y-2">
                  {result.strengths.map((item: string) => (
                    <li key={item}>✅ {item}</li>
                  ))}
                </ul>

              </div>

              <div className="bg-red-50 rounded-xl p-6">

                <h3 className="font-bold text-xl mb-4">
                  Areas to Improve
                </h3>

                <ul className="space-y-2">
                  {result.improvements.map((item: string) => (
                    <li key={item}>⚠️ {item}</li>
                  ))}
                </ul>

              </div>

            </div>

            <div className="mt-8 bg-[#0B1F3A] text-white rounded-2xl p-8 text-center">

              <h3 className="text-2xl font-bold">
                Ready to Study Abroad?
              </h3>

              <p className="mt-3">
                Book a FREE consultation with our experts and receive a personalised
                university shortlist.
              </p>

              <a
                href="/contact"
                className="inline-block mt-6 bg-[#d4a537] text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-400"
              >
                Book Free Consultation
              </a>

            </div>

          </div>
        )}
        </div>

      </div>

    </main>
  );
}