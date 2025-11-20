"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomePage() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/Home" },
    { name: "Quiz", href: "/Quiz" },
    { name: "Article", href: "/Article/article" },
    { name: "About", href: "/About/about" },
    { name: "Community", href: "/Community/community" },
    { name: "Profile", href: "/Profile/profile" },
  ];

  return (
    <div>
      {/* NAVBAR EXACTLY LIKE ARTICLE PAGE */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          borderBottom: "1px solid #ddd",
        }}
      >
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Cyber Saathi
        </div>

        <div style={{ display: "flex", gap: "1.5rem" }}>
          {navLinks.map(({ name, href }) => (
            <Link
              key={href}
              href={href}
              style={{
                textDecoration: pathname === href ? "underline" : "none",
                color: pathname === href ? "blue" : "black",
                fontWeight: "500",
              }}
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>

      {/* HOME PAGE CONTENT */}
      <div
        style={{
          margin: "3rem auto",
          maxWidth: "800px",
          padding: "0 1rem",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "1.5rem",
          }}
        >
          Protect Your Digital Life
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.6",
            marginBottom: "1.5rem",
          }}
        >
          Cybersecurity is everyone&apos;s responsibility. Stay vigilant against
          phishing scams, data breaches, and online threats. Awareness and early
          action are your strongest defenses in today&apos;s connected world.
        </p>

        <Link
          href="/Article/article"
          style={{
            fontSize: "1.1rem",
            color: "blue",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}
