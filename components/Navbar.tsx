"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--ink)]/95 backdrop-blur-xl border-b border-white/10 text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-24 px-4 md:px-8">

        <div className="flex items-center gap-3">

            <Image
              src="/logo.jpeg"
              alt="Logo"
              width={48}
              height={48}
              className="rounded-full border-2  shadow-lg"

            />

          <div>
            <h1 className="text-lg md:text-2xl font-extrabold tracking-wide text-yellow-400">
              Saraswati Immigration
            </h1>

            <p className="text-xs md:text-sm text-gray-400 tracking-wide">
              Travel Services
            </p>
          </div>
        </div>

        <button
          className="lg:hidden text-3xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
          
        <div className="hidden lg:flex items-center gap-12 font-medium text-[15px]">

          <Link
            href="/"
            className="relative hover:text-yellow-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full">
          
            Home
          </Link>
          <Link
            href="/countries"
             className="relative hover:text-yellow-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
>
          
            Countries
          </Link>

          <Link
            href="/services"
             className="relative hover:text-yellow-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"

          >
            Services
          </Link>

          <Link
            href="/contact"
            className="relative hover:text-yellow-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"

          >
            Contact us
          </Link>

          <Link
            href="/eligibility"
            className="relative hover:text-yellow-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            Eligibility
          </Link>

        </div>

      </div>
      {menuOpen && (
      <div className="lg:hidden bg-[var(--ink)] border-t border-white/10">

        <Link
          href="/"
          className="block px-6 py-4 hover:bg-white/10"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          href="/countries"
          className="block px-6 py-4 hover:bg-white/10"
          onClick={() => setMenuOpen(false)}
        >
          Countries
        </Link>

        <Link
          href="/services"
          className="block px-6 py-4 hover:bg-white/10"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </Link>

        <Link
          href="/contact"
          className="block px-6 py-4 hover:bg-white/10"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>

        <Link
          href="/eligibility"
          className="block px-6 py-4 hover:bg-white/10"
          onClick={() => setMenuOpen(false)}
        >
          Eligibility
        </Link>

      </div>
    )}
    </nav>
  );
}