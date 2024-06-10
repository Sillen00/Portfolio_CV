"use client";
import { AlignJustify, Github, Linkedin, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import css from "./Header.module.scss";
import OrangeOutlineBtn from "./OrangeOutlineBtn";

const Header = () => {
  // const currentPath = usePathname();
  // className={`${href === currentPath ? "text-zinc-900" : "text-zinc-500"} hover:text-orange-600`}>
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const [t, i18n] = useTranslation();
  // const handleLanguageChange = (language: string) => {
  //   i18n.changeLanguage(language);
  // };

  const links = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={twMerge(css.header, "fira flex justify-between items-center px-6 md:px-12 py-2 fixed w-full z-50")}>
      {/* <button onClick={() => handleLanguageChange("en")} className='hover:text-secondary-color'>
        EN
      </button>
      <button onClick={() => handleLanguageChange("sv")} className='hover:text-secondary-color'>
        SV
      </button> */}
      <Link href='#top'>
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
          <Link href='./pdfs/Simon_Bengtsson_CV.pdf' target='_blank' className='hidden md:block ml-5'>
            <OrangeOutlineBtn className='px-4 py-1.5'>Resume</OrangeOutlineBtn>
          </Link>
        </div>

        {isMenuOpen && (
          <div className='absolute top-0 left-0 w-full h-screen bg-background-color-dark'>
            <div className='flex justify-between items-center px-6 py-2'>
              <Link href='#top' onClick={() => setIsMenuOpen(prevState => !prevState)}>
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
              <X width={30} className='cursor-pointer' onClick={() => setIsMenuOpen(prevState => !prevState)} />
            </div>

            <ul className={twMerge("flex flex-col items-start pt-12")}>
              {links.map(({ href, label }, index) => (
                <Link className='w-full' onClick={() => setIsMenuOpen(prevState => !prevState)} href={href} key={href}>
                  <li className={"hover:bg-hover-color w-full py-3 pl-12"}>
                    <span className='text-secondary-color'>0{index + 1}.</span> {label}
                  </li>
                </Link>
              ))}
              <Link href='./pdfs/Simon_Bengtsson_CV.pdf' target='_blank' className='w-[calc(100%-96px)] mx-auto mt-12'>
                <OrangeOutlineBtn className='px-4 py-1.5 w-full'>Resume</OrangeOutlineBtn>
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

        <div onClick={() => setIsMenuOpen(prevState => !prevState)} className='md:hidden cursor-pointer'>
          <AlignJustify width={30} />
          <span className={css.visuallyHidden}>Menu</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
