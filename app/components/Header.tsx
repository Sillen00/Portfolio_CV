"use client";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  // const currentPath = usePathname();
  // className={`${href === currentPath ? "text-zinc-900" : "text-zinc-500"} hover:text-orange-600`}>

  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className='flex justify-between items-center px-12 fixed w-full'>
      <Link href='/'>
        <Image width={30} height={30} alt="Simon Bengtsson 'S' logo." src='/logo.png' />
      </Link>
      <ul className='flex gap-8'>
        {links.map(({ href, label }, index) => (
          <li key={href} className={"hover:text-orange-600"}>
            <a href={href}>
              <span className='text-cyan-400'>0{index + 1}</span> {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
