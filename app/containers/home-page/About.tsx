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
          Hej! Jag är en junior Frontend-Utvecklare, född och uppvuxen i Alingsås. Upplevs som en positiv kille som gärna vill hjälpa till
          och är serviceminded. Har inga problem med nya arbetsuppgifter utan är snarare nyfiken och motiverad att utveckla mina färdigheter
          samt lära mig nytt. Jag tycker det är roligt att samarbeta samtidigt som jag inte har problem att arbeta ensam. Jag gillar att ha
          ordning och reda, är noggrann med de uppgifter som jag får. Har inga problem med att vara flexibel och hjälpa till där det behövs
          som mest.
        </p>

        <div className='gray relative min-w-[50%] flex border p-6 border-secondary-color'>
          <p className='absolute -top-3 bg-[var(--background-color)] px-2 left-4 hidden md:block'>Skills </p>
          <ul className='mr-2'>
            <div className='flex gap-2'>
              <Play width={7} className='text-secondary-color' />
              <li>Javascript</li>
            </div>
            <div className='flex gap-2'>
              <Play width={7} className='text-secondary-color' />
              <li>Typescript</li>
            </div>
            <div className='flex gap-2'>
              <Play width={7} className='text-secondary-color' />
              <li>React.JS</li>
            </div>
            <div className='flex gap-2'>
              <Play width={7} className='text-secondary-color' />
              <li>Socket.io</li>
            </div>
            <div className='flex gap-2'>
              <Play width={7} className='text-secondary-color' />
              <li>Npm</li>
            </div>
            <div className='flex gap-2'>
              <Play width={7} className='text-secondary-color' />
              <li>UX/UI</li>
            </div>
            <div className='flex gap-2'>
              <Play width={7} className='text-secondary-color' />
              <li>SCSS</li>
            </div>
            <div className='flex gap-2'>
              <Play width={7} className='text-secondary-color' />
              <li>Tailwind</li>
            </div>
            <div className='flex gap-2'>
              <Play width={7} className='text-secondary-color' />
              <li>Material-UI</li>
            </div>
            <div className='flex gap-2'>
              <Play width={7} className='text-secondary-color' />
              <li>Figma</li>
            </div>
            <div className='flex gap-2'>
              <Play width={7} className='text-secondary-color' />
              <li>Github</li>
            </div>
            <div className='flex gap-2'>
              <Play width={7} className='text-secondary-color' />
              <li>ExpressJS</li>
            </div>
            <div className='flex gap-2'>
              <Play width={7} className='text-secondary-color' />
              <li>Mongodb</li>
            </div>
            <div className='flex gap-2'>
              <Play width={7} className='text-secondary-color' />
              <li>Agila arbetsmetoder</li>
            </div>
          </ul>
          <ul>
            <li className='underline'>Introducerade tekniker:</li>
            <div className='flex gap-2 pt-1'>
              <Play width={7} className='text-secondary-color ' />
              <li>PHP</li>
            </div>
            <div className='flex gap-2'>
              <Play width={7} className='text-secondary-color' />
              <li>MySQL</li>
            </div>
            <div className='flex gap-2'>
              <Play width={7} className='text-secondary-color' />
              <li>P5.js</li>
            </div>
            <div className='flex gap-2'>
              <Play width={7} className='text-secondary-color' />
              <li>Svelte</li>
            </div>
            <div className='flex gap-2'>
              <Play width={7} className='text-secondary-color' />
              <li>Wordpress</li>
            </div>
            <div className='flex gap-2'>
              <Play width={7} className='text-secondary-color' />
              <li>Jest</li>
            </div>
            <div className='flex gap-2'>
              <Play width={7} className='text-secondary-color' />
              <li>React TL</li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
