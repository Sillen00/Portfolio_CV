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
    <nav className='flex justify-between items-center px-12 py-2 fixed w-full'>
      <Link href='/'>
        <Image width={30} height={30} alt="Simon Bengtsson 'S' logo." src='/logo.png' />
      </Link>

      <div className='flex items-center gap-8'>
        <ul className='gap-6 hidden md:flex'>
          {links.map(({ href, label }, index) => (
            <li key={href} className={"hover:text-secondary"}>
              <a href={href}>
                <span className='text-secondary-color'>0{index + 1}.</span> {label}
              </a>
            </li>
          ))}
        </ul>

        <button className='border-secondary-color border-2 px-4 py-1.5 rounded-md text-secondary-color'>Resume</button>

        <div className='md:hidden'>
          -- <br />
        </div>
      </div>
    </nav>
  );
};

export default Header;
