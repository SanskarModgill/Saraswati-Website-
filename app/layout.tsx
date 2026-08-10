import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Saraswati Immigration & Travel Services | Dhuri",
  description:
    "Saraswati Immigration & Travel Services, Dhuri — study visas, work visas, PR guidance and travel assistance for Canada, UK, USA, Malta, Cyprus, Mauritius and Singapore.",
    keywords: [
    "immigration consultant in Dhuri",
    "visa consultant in Dhuri",
    "immigration services in Dhuri",
    "student visa consultant Dhuri",
    "study abroad consultant Dhuri",
    "visa consultancy Punjab",
    "immigration services",
    "visa consultant",
    "study abroad",
    "canada study visa",
    "mauritius study visa",
    "australia study visa"
  ],
  openGraph: {
    title: "Saraswati Immigration & Travel Services",
    description:
      "Immigration, visa and study abroad consultancy services in Dhuri, Punjab.",
    url: "https://saraswatiimmigration.com",
    siteName: "Saraswati Immigration & Travel Services",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--cream)] text-[var(--slate)]">
        <Navbar />
        <div className="flex-1 pt-20">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
