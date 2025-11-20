"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomePage() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/Home" },
    { name: "Quiz", href: "/Quiz" },
    { name: "Article", href: "/Article/article" },
    { name: "About", href: "/About/about" },
    { name: "Community", href: "/Community/community" },
    { name: "Profile", href: "/Profile/profile" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 🔵 SAME NAVBAR AS YOUR SCREENSHOT */}
      <nav className="w-full bg-[#0A2657] text-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-4">
          {/* Logo */}
          <h1 className="text-3xl font-extrabold tracking-wide">CyberSaathi</h1>

          {/* Navlinks */}
          <div className="flex space-x-10 text-lg font-medium">
            {links.map(({ name, href }) => (
              <div key={href} className="relative">
                <Link
                  href={href}
                  className={`${
                    pathname === href ? "font-bold" : "opacity-80"
                  } hover:opacity-100 transition`}
                >
                  {name}
                </Link>

                {/* Active underline */}
                {pathname === href && (
                  <span className="absolute left-0 right-0 -bottom-1 mx-auto w-8 h-[3px] rounded-full bg-white"></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* CONTENT AREA */}
      <div className="max-w-4xl mx-auto pt-20 px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
          Protect Your Digital Life
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Cybersecurity is everyone&#39;s responsibility. Stay vigilant against
          phishing scams, data breaches, and online threats. Awareness and early
          action are your strongest defenses in today&#39;s connected world.
        </p>

        <Link
          href="/Article/article"
          className="text-blue-700 font-semibold text-lg hover:underline"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}
