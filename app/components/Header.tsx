"use client";
import { AlignJustify, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import css from "./Header.module.scss";
import OrangeOutlineBtn from "./OrangeOutlineBtn";

const Header = () => {
  // const currentPath = usePathname();
  // className={`${href === currentPath ? "text-zinc-900" : "text-zinc-500"} hover:text-orange-600`}>

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={twMerge(css.header, "fira flex justify-between items-center px-6 md:px-12 py-2 fixed w-full z-50")}>
      <Link href='/'>
        <Image
          className={css.logo}
          priority
          width={10}
          height={10}
          alt="Simon Bengtsson 'S' logo."
          src='/logoOrange.svg'
          style={{ width: "30px", height: "auto" }}
        />
      </Link>

      <nav>
        <ul className={twMerge("gap-5 hidden md:flex items-center")}>
          {links.map(({ href, label }, index) => (
            <li key={href} className={"hover:text-secondary-color"}>
              <a href={href}>
                <span className='text-secondary-color'>0{index + 1}. </span>
                {label}
              </a>
            </li>
          ))}
          <OrangeOutlineBtn className='ml-5 px-4 py-1.5'>Resume</OrangeOutlineBtn>
        </ul>

        {isMenuOpen && (
          <div className='absolute top-0 left-0 w-full h-screen bg-primary-color-dark'>
            <div className='flex justify-between items-center px-6 py-2' onClick={() => setIsMenuOpen(prevState => !prevState)}>
              <Image
                className={css.logo}
                priority
                width={10}
                height={10}
                alt="Simon Bengtsson 'S' logo."
                src='/logoOrange.svg'
                style={{ width: "30px", height: "auto" }}
              />
              <X width={30} />
            </div>

            <ul className={twMerge("flex flex-col items-start pt-12")}>
              {links.map(({ href, label }, index) => (
                <li onClick={() => setIsMenuOpen(prevState => !prevState)} key={href} className={"hover:bg-hover-color w-full py-3 pl-12"}>
                  <a href={href}>
                    <span className='text-secondary-color'>0{index + 1}.</span> {label}
                  </a>
                </li>
              ))}
              <OrangeOutlineBtn className='mt-12 px-4 py-1.5 mx-auto w-[calc(100%-96px)]'>Resume</OrangeOutlineBtn>
            </ul>
          </div>
        )}

        <div onClick={() => setIsMenuOpen(prevState => !prevState)} className='md:hidden'>
          <AlignJustify width={30} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
