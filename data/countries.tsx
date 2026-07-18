export interface Country {
  slug: string;
  name: string;
  flag: string;
  tagline: string;
  heroImage: string;
  overview: string;
  whyStudy: string[];
  popularCourses: string[];
  intakes: string;
  processingTime: string;
  avgTuition: string;
  visaRequirements: string[];
}

export const countries: Country[] = [
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    tagline: "Post-study work rights and a clear path to permanent residency.",
    heroImage:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1600&q=80",
    overview:
      "Canada remains one of the most sought-after study destinations for Indian students — globally recognised degrees, multicultural campuses, and a Post-Graduation Work Permit that opens a real path to skilled migration.",
    whyStudy: [
      "Post-Graduation Work Permit valid up to 3 years",
      "Express Entry pathway to permanent residency",
      "Tuition generally lower than the US or UK",
      "Safe, welcoming campuses across every province",
    ],
    popularCourses: ["Business Management", "Computer Science", "Health Sciences", "Engineering", "Hospitality"],
    intakes: "September · January · May",
    processingTime: "4–8 weeks (indicative)",
    avgTuition: "₹8–20 Lakh / year",
    visaRequirements: [
      "Letter of Acceptance from a Designated Learning Institution",
      "Proof of funds covering tuition and living costs",
      "IELTS/PTE score meeting your program's requirement",
      "Statement of Purpose",
      "Medical exam, where applicable",
    ],
  },
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    tagline: "One-year master's degrees and a 2-year Graduate Route visa.",
    heroImage:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1600&q=80",
    overview:
      "The UK offers some of the world's oldest and most respected universities, with one-year master's programs that get you into the workforce faster — followed by two years of open work rights under the Graduate Route.",
    whyStudy: [
      "One-year master's degrees save time and cost",
      "Graduate Route gives 2 years of post-study work",
      "Historic universities with strong global recognition",
      "Large, established Indian student community",
    ],
    popularCourses: ["MBA", "Data Science", "Law", "Public Health", "Finance"],
    intakes: "September · January",
    processingTime: "3–6 weeks (indicative)",
    avgTuition: "₹15–30 Lakh / year",
    visaRequirements: [
      "Confirmation of Acceptance for Studies (CAS)",
      "Proof of maintenance funds for 28 consecutive days",
      "IELTS UKVI or equivalent English score",
      "Tuberculosis test (for longer stays)",
      "Valid passport with sufficient validity",
    ],
  },
  {
    slug: "usa",
    name: "United States",
    flag: "🇺🇸",
    tagline: "Top-ranked universities and extended OPT for STEM graduates.",
    heroImage:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1600&q=80",
    overview:
      "The US is home to the highest concentration of globally top-ranked universities and research programs, with Optional Practical Training — extended to 3 years for STEM graduates — giving strong post-study work exposure.",
    whyStudy: [
      "World's largest concentration of top-ranked universities",
      "OPT work authorisation, extended for STEM fields",
      "Extensive scholarship and assistantship options",
      "Vast alumni and industry networks",
    ],
    popularCourses: ["Computer Science", "Data Analytics", "MBA", "Engineering", "Biotechnology"],
    intakes: "August/Fall · January/Spring",
    processingTime: "6–10 weeks (indicative, incl. visa interview)",
    avgTuition: "₹20–45 Lakh / year",
    visaRequirements: [
      "Form I-20 from a SEVP-certified institution",
      "SEVIS fee payment confirmation",
      "Proof of sufficient financial support",
      "Strong academic and standardised test scores",
      "F-1 visa interview at the US consulate",
    ],
  },
  {
    slug: "malta",
    name: "Malta",
    flag: "🇲🇹",
    tagline: "An English-speaking EU nation and a lower-cost gateway to Europe.",
    heroImage:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1600&q=80",
    overview:
      "Malta is a compact, English-speaking EU member state, offering EU-recognised degrees, Schengen-area access and a noticeably lower cost of living than Western Europe's larger study hubs.",
    whyStudy: [
      "English is an official language — no translation needed",
      "EU-recognised degrees at a lower overall cost",
      "Schengen access for travel across Europe",
      "Small, safe island with a growing student community",
    ],
    popularCourses: ["Business Studies", "Tourism Management", "IT & Gaming", "Finance", "Aviation"],
    intakes: "October · February",
    processingTime: "4–6 weeks (indicative)",
    avgTuition: "₹6–12 Lakh / year",
    visaRequirements: [
      "Confirmed admission letter",
      "Proof of accommodation in Malta",
      "Proof of funds for tuition and living expenses",
      "Valid health insurance",
      "English proficiency evidence",
    ],
  },
  {
    slug: "cyprus",
    name: "Cyprus",
    flag: "🇨🇾",
    tagline: "Affordable EU-adjacent degrees with strong medicine and business programs.",
    heroImage:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80",
    overview:
      "Cyprus has become a fast-growing option for Indian students thanks to recognised medical and business degrees, comparatively low tuition, and a Mediterranean lifestyle with a sizeable South Asian student community.",
    whyStudy: [
      "Recognised MD and business programs at lower cost",
      "English-medium instruction at most universities",
      "Warm climate and growing Indian student network",
      "Pathway option toward wider European exposure",
    ],
    popularCourses: ["Medicine (MD)", "Business Administration", "Hospitality", "Engineering", "Psychology"],
    intakes: "September · February",
    processingTime: "4–7 weeks (indicative)",
    avgTuition: "₹5–15 Lakh / year",
    visaRequirements: [
      "University acceptance letter",
      "Proof of tuition fee payment",
      "Proof of funds for living costs",
      "Valid health insurance",
      "Clean police clearance certificate",
    ],
  },
  {
    slug: "mauritius",
    name: "Mauritius",
    flag: "🇲🇺",
    tagline: "An emerging India-linked education hub with a lower cost of entry.",
    heroImage:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1600&q=80",
    overview:
      "Mauritius is emerging as an accessible study destination, hosting offshore campuses of established international universities with close cultural and historical ties to India, at a fraction of the typical cost.",
    whyStudy: [
      "Offshore campuses of recognised international universities",
      "Significantly lower tuition and living costs",
      "Strong cultural familiarity for Indian students",
      "Compact, safe island with easy campus access",
    ],
    popularCourses: ["Business Management", "IT", "Hospitality & Tourism", "Finance", "Marine Studies"],
    intakes: "September · January",
    processingTime: "3–5 weeks (indicative)",
    avgTuition: "₹4–9 Lakh / year",
    visaRequirements: [
      "Admission letter from a registered institution",
      "Proof of accommodation",
      "Proof of funds for the duration of study",
      "Valid passport and passport photographs",
      "Medical certificate, where required",
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    flag: "🇸🇬",
    tagline: "Asia's business and technology hub, with globally ranked universities.",
    heroImage:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=80",
    overview:
      "Singapore pairs globally ranked universities with unmatched proximity to Asia's fastest-growing economies — a natural fit for students eyeing careers in finance, technology or logistics across the region.",
    whyStudy: [
      "Globally top-ranked universities in a compact city-state",
      "Direct gateway to Southeast Asian job markets",
      "Extremely low crime rate and high safety standards",
      "Short flight distance and time-zone proximity to India",
    ],
    popularCourses: ["Finance", "Computer Science", "Supply Chain Management", "Business Analytics", "Hospitality"],
    intakes: "January · July",
    processingTime: "3–5 weeks (indicative)",
    avgTuition: "₹10–22 Lakh / year",
    visaRequirements: [
      "Confirmed enrolment with a registered institution",
      "Student's Pass In-Principle Approval (IPA)",
      "Proof of funds for tuition and living costs",
      "Valid passport with sufficient validity",
      "Medical examination, where required",
    ],
  },
];

export function getCountry(slug: string) {
  return countries.find((c) => c.slug === slug);
}
