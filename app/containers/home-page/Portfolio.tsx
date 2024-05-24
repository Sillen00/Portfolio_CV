import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { Projects, projects } from "../../../data/projects";
import css from "./_Home.module.scss";

const Portfolio = () => {
  return (
    <section className='max-w-screen-lg mx-auto pb-60 px-6 md:px-28' id='portfolio'>
      <h3 className={twMerge(css.line, "flex flex-nowrap items-center relative mb-8")}>
        <span className='fira text-secondary-color text-2xl mr-4'>03. </span>Portfolio
      </h3>

      <div id='container'>
        {projects.map((project: Projects) => (
          <div key={project.id} className={twMerge(css.project, "px-9 py-11")}>
            <p className='fira text-secondary-color'>Utvalt Project</p>
            <h3>{project.title}</h3>
            <p className='gray'>{project.text}</p>

            <ul className='fira gray flex gap-2.5 flex-wrap'>
              {project.builtWith?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className='flex'>
              <Link href={project.githubLink ?? ""}>
                <Github size={24} />
              </Link>
              <Link href={project.hostedLink ?? ""}>
                <ExternalLink size={24} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
