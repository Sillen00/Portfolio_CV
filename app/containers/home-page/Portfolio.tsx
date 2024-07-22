import { ExternalLink, Folder, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import OrangeOutlineBtn from "@/app/components/OrangeOutlineBtn";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { projects } from "../../../data/projects";
import css from "./_Home.module.scss";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const { t } = useTranslation();
  const [showAllProjects, setShowAllProjects] = useState(false);

  const toggleShowAllProjects = () => {
    setShowAllProjects(prevState => !prevState);
  };

  const handleKeyDown = (event: React.KeyboardEvent, showAllProjects: boolean) => {
    if (event.key === "Enter") {
      setShowAllProjects(!showAllProjects);
    }
  };

  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 767px)", // Ställ in mobil brytpunkt
        isDesktop: "(min-width: 768px)", // Ställ in desktop brytpunkt
      },
      context => {
        let { isMobile, isDesktop }: { isMobile?: string; isDesktop?: string } = context.conditions || {};

        if (isMobile) {
          projectRefs.current.forEach((ref, index) => {
            if (ref) {
              gsap.fromTo(
                ref,
                { opacity: 0 },
                {
                  opacity: 1,
                  duration: 0.5,
                  delay: index * 0.2, // Stagger the animations
                  scrollTrigger: {
                    trigger: ref,
                    start: "top bottom-=30", // Adjust start point based on your needs
                    toggleActions: "play none none none",
                    // markers: true,
                  },
                }
              );
            }
          });
        } else if (isDesktop) {
          projectRefs.current.forEach((ref, index) => {
            if (ref) {
              gsap.fromTo(
                ref,
                { opacity: 0 },
                {
                  opacity: 1,
                  duration: 1.5,
                  delay: index * 0.2, // Stagger the animations
                  scrollTrigger: {
                    trigger: ref,
                    start: "top bottom-=300", // Adjust start point based on your needs
                    toggleActions: "play none none none",
                    // markers: true,
                  },
                }
              );
            }
          });
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section lang='en' id='portfolio'>
      {/* FEAUTURED PROJECTS ---------------------------------- */}
      {/* FEAUTURED PROJECTS ---------------------------------- */}
      {/* FEAUTURED PROJECTS ---------------------------------- */}
      <div className='max-w-screen-lg mx-auto pt-32 pb-28 px-6 md:px-28'>
        <h3 className={twMerge(css.line, "flex flex-nowrap items-center relative mb-8")}>
          <span className='fira text-secondary-color text-2xl mr-4'>03. </span>
          {/* Portfolio */}
          {t("portfolio.portfolio")}
        </h3>
        {projects
          .filter(project => project.feautured)
          .map(project => (
            <div key={project.id} className={twMerge(css.project, "px-5 py-6 relative mb-6 border border-gray-700 rounded-md")}>
              <Image
                className='absolute top-0 left-0 -z-20 w-full h-full object-cover '
                width={530}
                height={10}
                src={project.img ?? ""}
                alt={project.title + " project image."}
                style={{ width: "100%", height: "100%" }}
              />
              <div className={twMerge(css.imageFilter)}></div>
              <p className='fira text-secondary-color'>
                {/* Featured Project */}
                {t("portfolio.featuredProject")}
              </p>

              <Link href={project.hostedLink ?? ""} target='_blank'>
                <h3 className='hover:text-secondary-color'>{project.title}</h3>
              </Link>

              <p className='py-8 text-gray'>{project.text}</p>
              <ul className='fira text-gray flex gap-2.5 flex-wrap pb-4'>
                {project.builtWith?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className='flex gap-4'>
                <Link className='hover:text-secondary-color' href={project.githubLink ?? ""} target='_blank'>
                  <Github size={22} />
                  <span className={css.visuallyHidden}>GitHub Profile</span>
                </Link>
                <Link className='hover:text-secondary-color' href={project.hostedLink ?? ""} target='_blank'>
                  <ExternalLink size={22} />
                  <span className={css.visuallyHidden}>External Project Link</span>
                </Link>
              </div>
            </div>
          ))}
      </div>

      <h3 className='text-center mt-24 mb-6'>
        {/* Other Noteworthy Projects */}
        {t("portfolio.otherProjects")}
      </h3>

      {/* UNFEAUTURED PROJECTS --------------------------------------------------- */}
      {/* UNFEAUTURED PROJECTS --------------------------------------------------- */}
      {/* UNFEAUTURED PROJECTS --------------------------------------------------- */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto pt-32 pb-16 px-6 md:px-28'>
        {projects
          .filter(project => !project.feautured)
          .slice(0, showAllProjects ? projects.length : 6)
          .map((project, index) => (
            <div
              ref={el => {
                projectRefs.current[index] = el;
              }}
              className={twMerge(css.unfeautured, "px-5 pt-8 pb-20 relative mb-6 bg-background-color-dark rounded-md ")}
              key={project.id}
              // href={project.hostedLink ? project.hostedLink : project.githubLink}
              // target='_blank'
            >
              <div className='flex justify-between items-center mb-6'>
                <Folder size={42} className='text-secondary-color' />
                <div className='flex gap-3'>
                  {project.hostedLink ? (
                    <Link className='hover:text-secondary-color' href={project.hostedLink} target='_blank'>
                      <ExternalLink size={22} />
                      <span className={css.visuallyHidden}>External Project Link</span>
                    </Link>
                  ) : (
                    <span className='w-[22px]'></span>
                  )}
                  {project.githubLink ? (
                    <Link className='hover:text-secondary-color' href={project.githubLink} target='_blank'>
                      <Github size={22} />
                      <span className={css.visuallyHidden}>GitHub Profile</span>
                    </Link>
                  ) : (
                    <span className='w-[22px]'></span>
                  )}
                </div>
              </div>
              <h4 className='text-light pb-2.5'>{project.title}</h4>
              <p className='small text-gray'>{project.text}</p>
              <ul className='fira text-gray flex gap-2.5 flex-wrap absolute bottom-[24px] '>
                {project.builtWith?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
      </div>
      <div
        onClick={toggleShowAllProjects}
        className='cursor-pointer max-w-fit mx-auto'
        tabIndex={0}
        onKeyDown={event => handleKeyDown(event, showAllProjects)}
      >
        <OrangeOutlineBtn className='px-6 py-4 rounded-md'>
          {showAllProjects ? t("portfolio.showLess") : t("portfolio.showMore")}
          {/* t("portfolio.showLess") */}
          {/* t("portfolio.showMore") */}
        </OrangeOutlineBtn>
      </div>
    </section>
  );
};

export default Portfolio;
