import Link from "next/link";

export default function NavLinks({ closeMenu }) {
  const links = [
    { name: "Home", href: "/Home" },
    { name: "Quiz", href: "/Quiz" },
    { name: "Article", href: "/Article/article" },
    { name: "About", href: "/About/about" },
    { name: "Community", href: "/Community/community" },
    { name: "profile", href: "/Profile/profile" },
  ];

  return (
    <>
      {links.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className="text-white hover:text-yellow-300 text-lg transition"
          onClick={closeMenu}
        >
          {name}
        </Link>
      ))}
    </>
  );
}
