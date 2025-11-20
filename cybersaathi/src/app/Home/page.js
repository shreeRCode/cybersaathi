"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./home.css";

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

  const cyberFacts = [
    "India saw a 153% rise in cybercrime cases in the last 3 years.",
    "95% of cybersecurity breaches occur due to human error.",
    "Phishing attacks increased by 47% in India in 2024.",
    "Every 39 seconds, a cyber-attack happens somewhere in the world.",
    "Weak passwords are responsible for 81% of data breaches.",
  ];

  return (
    <div className="page">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">CyberSaathi</div>

        <div className="nav-links">
          {links.map(({ name, href }) => (
            <div key={href} className="nav-item">
              <Link
                href={href}
                className={pathname === href ? "active nav-link" : "nav-link"}
              >
                {name}
              </Link>

              {pathname === href && <div className="underline" />}
            </div>
          ))}
        </div>
      </nav>

      {/* HOME CONTENT */}
      <div className="content">
        <h1>Protect Your Digital Life</h1>

        <p>
          Cybersecurity is everyone&apos;s responsibility. Stay vigilant against
          phishing scams, data breaches, and online threats. Awareness and early
          action are your strongest defenses in today&apos;s connected world.
        </p>

        <Link href="/Article/article" className="learn">
          Learn More →
        </Link>
      </div>

      {/* CYBER FACTS SECTION */}
      <section className="facts-section">
        <h2 className="facts-title">Cybersecurity Fast Facts 🔐</h2>
        <ul className="facts-list">
          {cyberFacts.map((fact, index) => (
            <li key={index} className="fact-item">
              {fact}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
