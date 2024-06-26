import { Github, Linkedin, Phone } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import css from "./AbsoluteLinks.module.scss";

const AbsoluteLinks = () => {
  return (
    <>
      <div className={twMerge(css.lineSocials, "hidden fixed bottom-32 left-12 z-10 md:flex flex-col gap-4")}>
        <Link
          className={twMerge(css.iconHover, "hover:text-secondary-color")}
          href='https://github.com/Sillen00'
          target='_blank'
          rel='noopener noreferrer'
        >
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
      <div className={twMerge(css.lineEmail, "hidden md:block fixed bottom-60 -right-16 z-10 rotate-90")}>
        <Link className={twMerge("hover:text-secondary-color")} href='mailto:simonbengtsson00@gmail.com' target='_blank'>
          <p className={css.onHover}>simonbengtsson00@gmail.com</p>
        </Link>
      </div>
    </>
  );
};

export default AbsoluteLinks;
