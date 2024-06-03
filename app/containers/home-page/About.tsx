import { Play } from "lucide-react";
import { twMerge } from "tailwind-merge";
import css from "./_Home.module.scss";

const About = () => {
  const skills = [
    "Javascript",
    "Typescript",
    "React.JS",
    "Socket.io",
    "Npm",
    "CI/CD",
    "UX/UI",
    "SCSS",
    "Tailwind",
    "Material-UI",
    "Figma",
    "Github",
    "ExpressJS",
    "Mongodb",
    "Agile Working",
  ];

  const introducedTechnologies = ["PHP", "MySQL", "P5.js", "Svelte", "Wordpress", "Jest", "React TL"];

  return (
    <section className='max-w-screen-lg mx-auto pt-32 pb-28 px-6 md:px-28' id='about'>
      <h3 className={twMerge(css.line, "flex text-nowrap items-center relative mb-8")}>
        <span className='fira text-secondary-color text-2xl mr-4'>01. </span>About Me
      </h3>

      <div className='flex flex-col md:flex-row gap-4 wrap'>
        <p className='min-w-[50%] text-gray'>
          Hej! Jag är en junior Frontend-Utvecklare, född och uppvuxen i Alingsås. Jag upplevs som en positiv kille som gärna vill hjälpa
          till och är serviceinriktad. <br /> <br />
          Har inga problem med nya arbetsuppgifter utan är snarare nyfiken och motiverad att utveckla mina färdigheter och lära mig nytt.
          Jag tycker det är roligt att samarbeta men har samtidigt inga problem att arbeta självständigt. <br /> <br />
          Jag gillar att ha ordning och reda och är noggrann med de uppgifter jag får. Har inga problem med att vara flexibel och hjälpa
          till där det behövs som mest.
        </p>

        <div className='relative min-w-[50%] flex flex-wrap sm:gap-8 border p-6 border-secondary-color mt-8 md:mt-0'>
          <p className={twMerge("absolute -top-3 bg-[var(--background-color)] px-2 left-4")}>Skills</p>
          <ul className='mr-2'>
            {skills.map(skill => (
              <li
                key={skill}
                className={twMerge(css.skillHover, "text-gray flex gap-2 flex-row-reverse items-center justify-end relative")}
              >
                <span>{skill}</span>
                <Play width={7} className={twMerge("text-secondary-color")} />
              </li>
            ))}
          </ul>
          <ul>
            <li className={twMerge(css.linkHover, "pt-1")}>Introducerade tekniker:</li>
            {introducedTechnologies.map(tech => (
              <li
                key={tech}
                className={twMerge(
                  css.skillHover,
                  "text-gray flex gap-2 flex-row-reverse items-center justify-end relative pt-1"
                )}
              >
                <span>{tech}</span>
                <Play width={7} className='text-secondary-color' />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
