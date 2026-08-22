import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://saraswatiimmigration.com";

  const countries = [
    "canada",
    "uk",
    "germany",
    "australia",
    "mauritius",
    "malta",
    "new zealand",
    "singapore",
    "cyprus",
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/countries`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/eligibility`,
      lastModified: new Date(),
    },

    // Individual country pages
    ...countries.map((country) => ({
      url: `${baseUrl}/countries/${country}`,
      lastModified: new Date(),
    })),
  ];
}