import { Play } from "lucide-react";
import { twMerge } from "tailwind-merge";
import css from "./_Home.module.scss";

const About = () => {
  return (
    <section className='max-w-screen-lg mx-auto pt-32 pb-28 px-6 md:px-28' id='about'>
      <h3 className={twMerge(css.line, "flex text-nowrap items-center relative mb-8")}>
        <span className='fira text-secondary-color text-2xl mr-4'>01. </span>About Me
      </h3>

      <div className='flex flex-col md:flex-row gap-4 wrap'>
        <p className='min-w-[50%] gray'>
          Hej! Jag är en junior Frontend-Utvecklare, född och uppvuxen i Alingsås. Jag upplevs som en positiv kille som gärna vill hjälpa
          till och är serviceinriktad. <br /> <br />
          Har inga problem med nya arbetsuppgifter utan är snarare nyfiken och motiverad att utveckla mina färdigheter och lära mig nytt.
          Jag tycker det är roligt att samarbeta men har samtidigt inga problem att arbeta självständigt. <br /> <br />
          Jag gillar att ha ordning och reda och är noggrann med de uppgifter jag får. Har inga problem med att vara flexibel och hjälpa
          till där det behövs som mest.
        </p>

        <div className='gray relative min-w-[50%] flex border p-6 border-secondary-color'>
          <p className='absolute -top-3 bg-[var(--background-color)] px-2 left-4 hidden md:block'>Skills </p>
          <ul className='mr-2'>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative")}>
              <li>Javascript</li>
              <Play width={7} className='text-secondary-color' />
            </div>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative")}>
              <li>Typescript</li>
              <Play width={7} className='text-secondary-color' />
            </div>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative")}>
              <li>React.JS</li>
              <Play width={7} className='text-secondary-color' />
            </div>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative")}>
              <li>Socket.io</li>
              <Play width={7} className='text-secondary-color' />
            </div>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative")}>
              <li>Npm</li>
              <Play width={7} className='text-secondary-color' />
            </div>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative")}>
              <li>CI/CD</li>
              <Play width={7} className='text-secondary-color' />
            </div>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative")}>
              <li>UX/UI</li>
              <Play width={7} className='text-secondary-color' />
            </div>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative")}>
              <li>SCSS</li>
              <Play width={7} className='text-secondary-color' />
            </div>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative")}>
              <li>Tailwind</li>
              <Play width={7} className='text-secondary-color' />
            </div>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative")}>
              <li>Material-UI</li>
              <Play width={7} className='text-secondary-color' />
            </div>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative")}>
              <li>Figma</li>
              <Play width={7} className='text-secondary-color' />
            </div>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative")}>
              <li>Github</li>
              <Play width={7} className='text-secondary-color' />
            </div>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative")}>
              <li>ExpressJS</li>
              <Play width={7} className='text-secondary-color' />
            </div>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative")}>
              <li>Mongodb</li>
              <Play width={7} className='text-secondary-color' />
            </div>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative")}>
              <li>Agila arbetsmetoder</li>
              <Play width={7} className='text-secondary-color' />
            </div>
          </ul>
          <ul>
            <li className={twMerge(css.linkHover, "underline text-secondary-color")}>Introducerade tekniker:</li>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative pt-1")}>
              <li>PHP</li>
              <Play width={7} className='text-secondary-color ' />
            </div>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative")}>
              <li>MySQL</li>
              <Play width={7} className='text-secondary-color' />
            </div>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative")}>
              <li>P5.js</li>
              <Play width={7} className='text-secondary-color' />
            </div>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative")}>
              <li>Svelte</li>
              <Play width={7} className='text-secondary-color' />
            </div>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative")}>
              <li>Wordpress</li>
              <Play width={7} className='text-secondary-color' />
            </div>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative")}>
              <li>Jest</li>
              <Play width={7} className='text-secondary-color' />
            </div>
            <div className={twMerge(css.skillHover, "flex gap-2 flex-row-reverse items-center justify-end relative")}>
              <li>React TL</li>
              <Play width={7} className='text-secondary-color' />
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
