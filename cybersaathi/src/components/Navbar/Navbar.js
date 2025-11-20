"use client";
import { useState } from "react";
import Logo from "./logo";
import NavLinks from "./Navlinks";
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav className="w-full bg-blue-900 shadow px-6 py-3 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLinks closeMenu={closeMenu} />
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-blue-950 shadow-lg py-4 px-6 flex flex-col space-y-4">
          <NavLinks closeMenu={closeMenu} />
        </div>
      )}
    </nav>
  );
}
