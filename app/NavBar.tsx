"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { href: "/", label: "Portfolio" },
    { href: "/cv", label: "CV" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav>
      <Link href="/">Logo</Link>
      <ul>
        <li>
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className={`${href === currentPath ? "text-zinc-900" : "text-zinc-500"} hover:text-ORANGE-900`}>
              {label}
            </Link>
          ))}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
