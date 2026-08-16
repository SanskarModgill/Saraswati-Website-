import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const Playfair_display = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

// const fraunces = Fraunces({
//   variable: "--font-display",
//   subsets: ["latin"],
//   weight: ["500", "600", "700"],
// });

export const metadata: Metadata = {
  title: "Saraswati Immigration & Travel Services | Immigration & Visa Consultancy",
  description:
    "Saraswati Immigration & Travel Services provides immigration, student visa, study abroad, work visa and travel assistance for destinations including Canada, UK, USA, Australia and more.",
  openGraph: {
    title: "Saraswati Immigration & Travel Services | Immigration & Visa Consultancy",
    description:
      "Saraswati Immigration & Travel Services provides immigration, student visa, study abroad, work visa and travel assistance for destinations including Canada, UK, USA, Australia and more.",
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
      className={`${inter.variable} ${Playfair_display.variable} h-full antialiased`}
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
