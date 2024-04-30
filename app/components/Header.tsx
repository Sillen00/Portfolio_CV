"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const currentPath = usePathname();

  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav>
      <Link href='/'>Logo</Link>
      <ul>
        <li>
          {links.map(({ href, label }) => (
            <a key={href} href={href} className={`${href === currentPath ? "text-zinc-900" : "text-zinc-500"} hover:text-ORANGE-900`}>
              {label}
            </a>
          ))}
        </li>
      </ul>
    </nav>
  );
};

export default Header;
