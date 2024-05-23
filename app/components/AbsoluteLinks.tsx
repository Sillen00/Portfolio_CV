import { Github, Linkedin, Phone } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import css from "./AbsoluteLinks.module.scss";

const AbsoluteLinks = () => {
  return (
    <>
      <div className={twMerge(css.lineSocials, "hidden fixed bottom-32 left-12 z-10 md:flex flex-col gap-4")}>
        <Link className={twMerge(css.iconHover, "hover:text-secondary-color")} href='github'>
          <Github />
        </Link>
        <Link className={twMerge(css.iconHover, "hover:text-secondary-color")} href='linked'>
          <Linkedin />
        </Link>
        <Link className={twMerge(css.iconHover, "hover:text-secondary-color")} href='telefon'>
          <Phone />
        </Link>
      </div>
      <div className={twMerge(css.lineEmail, "hidden md:block fixed bottom-60 -right-16 z-10 rotate-90")}>
        <Link className={twMerge("hover:text-secondary-color")} href='mail'>
          <p className={css.onHover}>simonbengtsson00@gmail.com</p>
        </Link>
      </div>
    </>
  );
};

export default AbsoluteLinks;
