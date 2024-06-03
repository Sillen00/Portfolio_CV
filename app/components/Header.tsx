"use client";
import { AlignJustify, Github, Linkedin, Phone, X } from "lucide-react";
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
          src='/logo.svg'
          style={{ width: "30px", height: "auto" }}
        />
      </Link>

      <nav>
        <div className='flex gap-5'>
          <ul className={twMerge("gap-5 hidden md:flex items-center")}>
            {links.map(({ href, label }, index) => (
              <li key={href} className={"hover:text-secondary-color"}>
                <Link href={href}>
                  <span className='text-secondary-color'>0{index + 1}. </span>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href='./pdfs/Simon_Bengtsson_CV.pdf' target='_blank' className='hidden md:block'>
            <OrangeOutlineBtn className='ml-5 px-4 py-1.5'>Resume</OrangeOutlineBtn>
          </Link>
        </div>

        {isMenuOpen && (
          <div className='absolute top-0 left-0 w-full h-screen bg-background-color-dark'>
            <div className='flex justify-between items-center px-6 py-2' onClick={() => setIsMenuOpen(prevState => !prevState)}>
              <Image
                className={css.logo}
                priority
                width={10}
                height={10}
                alt="Simon Bengtsson 'S' logo."
                src='/logo.svg'
                style={{ width: "30px", height: "auto" }}
              />
              <X width={30} />
            </div>

            <ul className={twMerge("flex flex-col items-start pt-12")}>
              {links.map(({ href, label }, index) => (
                <Link className='w-full' onClick={() => setIsMenuOpen(prevState => !prevState)} href={href} key={href}>
                  <li className={"hover:bg-hover-color w-full py-3 pl-12"}>
                    <span className='text-secondary-color'>0{index + 1}.</span> {label}
                  </li>
                </Link>
              ))}
              <Link href='./pdfs/Simon_Bengtsson_CV.pdf' target='_blank' className='w-full text-center'>
                <OrangeOutlineBtn className='mt-12 px-4 py-1.5 mx-auto w-[calc(100%-96px)]'>Resume</OrangeOutlineBtn>
              </Link>
            </ul>

            <div className='absolute bottom-10 left-[50%] -translate-x-2/4 z-10'>
              <div className={twMerge("flex justify-center gap-6 mb-6")}>
                <Link className={twMerge(css.iconHover, "hover:text-secondary-color")} href='https://github.com/Sillen00' target='_blank'>
                  <Github />
                  <span className={css.visuallyHidden}>GitHub Profile</span>
                </Link>
                <Link
                  className={twMerge(css.iconHover, "hover:text-secondary-color")}
                  href='https://www.linkedin.com/in/simon-bengtsson-656a86193/'
                  target='_blank'
                >
                  <Linkedin />
                  <span className={css.visuallyHidden}>LinkedIn Profile</span>
                </Link>
                <Link className={twMerge(css.iconHover, "hover:text-secondary-color")} href='tel:+46706612089'>
                  <Phone />
                  <span className={css.visuallyHidden}>Phone Number</span>
                </Link>
              </div>

              <div>
                <Link className={twMerge("hover:text-secondary-color")} href='mailto:simonbengtsson00@gmail.com' target='_blank'>
                  <p className={css.iconHover}>simonbengtsson00@gmail.com</p>
                </Link>
              </div>
            </div>
          </div>
        )}

        <div onClick={() => setIsMenuOpen(prevState => !prevState)} className='md:hidden'>
          <AlignJustify width={30} />
          <span className={css.visuallyHidden}>Menu</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
