"use client";

import { useState } from "react";

interface LeadPopupProps {
  onClose: () => void;
}

export default function LeadPopup({ onClose }: LeadPopupProps) {
  const [form, setForm] = useState({
    destination: "",
    visaType: "",
    name: "",
    email: "",
    phone: "",
    education: "",
    country: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(form);

    alert("Thank you! We will contact you soon.");

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center px-4">

      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl relative animate-fadeIn">

        {/* Header */}

        <div className="bg-[#0B1F3A] text-white p-6 rounded-t-2xl">

          <h2 className="text-2xl font-bold">
            Free Visa Eligibility Assessment
          </h2>

          <p className="text-sm mt-1 opacity-90">
            Fill out the form below and our experts will contact you.
          </p>

        </div>

        {/* Close */}

        <button
          onClick={onClose}
          className="absolute top-4 right-5 text-white text-2xl"
        >
          ×
        </button>

        {/* Form */}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 p-6"
        >

          <select
            required
            name="destination"
            onChange={handleChange}
            className="border p-3 rounded-lg"
          >
            <option value="">Destination</option>
            <option>Canada</option>
            <option>Australia</option>
            <option>United Kingdom</option>
            <option>Germany</option>
            <option>Singapore</option>
            <option>Malta</option>
            <option>Cyprus</option>
          </select>

          <select
            required
            name="visaType"
            onChange={handleChange}
            className="border p-3 rounded-lg"
          >
            <option value="">Visa Type</option>
            <option>Student Visa</option>
            <option>Visitor Visa</option>
            <option>Work Permit</option>
            <option>PR</option>
          </select>

          <input
            required
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <input
            required
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="border p-3 rounded-lg"
          />

          <select
            required
            name="education"
            onChange={handleChange}
            className="border p-3 rounded-lg"
          >
            <option value="">Highest Qualification</option>
            <option>10th</option>
            <option>12th</option>
            <option>Diploma</option>
            <option>Bachelor's</option>
            <option>Master's</option>
          </select>

          <input
            required
            name="country"
            placeholder="Current Country"
            onChange={handleChange}
            className="border p-3 rounded-lg md:col-span-2"
          />

          <button
            className="md:col-span-2 bg-[#D4A537] hover:bg-yellow-600 text-white rounded-lg py-4 font-bold text-lg transition"
          >
            Check My Eligibility
          </button>

        </form>

      </div>

    </div>
  );
}