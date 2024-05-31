import { ExternalLink, Folder, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { projects } from "../../../data/projects";
import css from "./_Home.module.scss";

const Portfolio = () => {
  return (
    <section id='portfolio'>
      {/* FEAUTURED PROJECTS ---------------------------------- */}
      {/* FEAUTURED PROJECTS ---------------------------------- */}
      {/* FEAUTURED PROJECTS ---------------------------------- */}
      <div className='max-w-screen-lg mx-auto pt-32 pb-28 px-6 md:px-28'>
        <h3 className={twMerge(css.line, "flex flex-nowrap items-center relative mb-8")}>
          <span className='fira text-secondary-color text-2xl mr-4'>03. </span>Portfolio
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
              <p className='fira text-secondary-color'>Feautured Project</p>
              <Link href={project.hostedLink ?? ""} target='_blank'>
                <h3 className='hover:text-secondary-color'>{project.title}</h3>
              </Link>
              <p className='py-8 gray'>{project.text}</p>
              <ul className='fira gray flex gap-2.5 flex-wrap pb-4'>
                {project.builtWith?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className='flex gap-4'>
                <a className='hover:text-secondary-color' href={project.githubLink ?? ""} target='_blank'>
                  <Github size={22} />
                </a>
                <a className='hover:text-secondary-color' href={project.hostedLink ?? ""} target='_blank'>
                  <ExternalLink size={22} />
                </a>
              </div>
            </div>
          ))}
      </div>

      <h3 className='text-center mt-24 mb-8'>Other Noteworthy Projects</h3>

      {/* UNFEAUTURED PROJECTS --------------------------------------------------- */}
      {/* UNFEAUTURED PROJECTS --------------------------------------------------- */}
      {/* UNFEAUTURED PROJECTS --------------------------------------------------- */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-xl mx-auto pt-32 pb-28 px-6 md:px-28'>
        {projects
          .filter(project => !project.feautured)
          .map(project => (
            <Link
              className={twMerge(css.unfeautured, "px-5 pt-8 pb-20 relative mb-6 bg-primary-color-light rounded-md ")}
              key={project.id}
              href={project.hostedLink ? project.hostedLink : project.githubLink}
              target='_blank'
            >
              <div>
                <div className='flex justify-between items-center mb-6'>
                  <Folder size={42} className='text-secondary-color' />
                  <div className='flex gap-3'>
                    {project.hostedLink ? (
                      <Link className='hover:text-secondary-color' href={project.hostedLink} target='_blank'>
                        <ExternalLink size={22} />
                      </Link>
                    ) : (
                      <span className='w-[22px]'></span>
                    )}
                    {project.githubLink ? (
                      <Link className='hover:text-secondary-color' href={project.githubLink} target='_blank'>
                        <Github size={22} />
                      </Link>
                    ) : (
                      <span className='w-[22px]'></span>
                    )}
                  </div>
                </div>
                <h4 className='primaryLight pb-2.5'>{project.title}</h4>
                <p className='small gray'>{project.text}</p>
                <ul className='fira gray flex gap-2.5 flex-wrap absolute bottom-[24px] '>
                  {project.builtWith?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
