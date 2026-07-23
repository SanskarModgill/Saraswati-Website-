import Link from "next/link";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white py-14 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="font-display text-xl font-semibold text-white">
            Saraswati Immigration &amp; Travel Services
          </h3>
          <p className="mt-4 text-sm text-gray-400 max-w-xs">
            Opp. S. D. School, Pathshala Road, Dhuri, Punjab.
            
          </p>
          <p className="mt-4 text-sm text-gray-400 max-w-xs">
          Honest guidance for study, work, PR and travel visas.
          </p>
        </div>

        <div>
          <h4 className="text-[11px] tracking-widest uppercase text-[var(--gold)] font-semibold mb-4">
            Destinations
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/countries/canada" className="hover:text-[var(--gold)]">Canada</Link></li>
            <li><Link href="/countries/uk" className="hover:text-[var(--gold)]">United Kingdom</Link></li>
            <li><Link href="/countries/usa" className="hover:text-[var(--gold)]">United States</Link></li>
            <li><Link href="/countries" className="hover:text-[var(--gold)]">View all →</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] tracking-widest uppercase text-[var(--gold)] font-semibold mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/services" className="hover:text-[var(--gold)]">Services</Link></li>
            <li><Link href="/contact" className="hover:text-[var(--gold)]">Contact</Link></li>
            <li><Link href="/#faq" className="hover:text-[var(--gold)]">FAQs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[11px] tracking-widest uppercase text-[var(--gold)] font-semibold mb-4">
            Reach Us
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <MapPin size={18} />
              Opp. S. D. School, Pathshala Road, Dhuri
            </li>

            <li className="flex items-center gap-2">
              <Phone size={18} />
              +91 98157 11133
            </li>
            
            <li className="flex items-center gap-2">
            <Mail size={18} />
            saraswatiimmi@gmail.com
            </li>
            <li>🕐 Mon – Sat, 10:00 AM – 6:30 PM</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 flex flex-wrap justify-between gap-2 text-xs text-gray-500">
        <span>© 2026 Saraswati Immigration &amp; Travel Services. All rights reserved.</span>
        <span>Guidance shared is informational and not a visa guarantee.</span>
      </div>
    </footer>
  );
}
