import { ExternalLink, Github } from "lucide-react";
import { twMerge } from "tailwind-merge";
import css from "./_Home.module.scss";

const Portfolio = () => {
  return (
    <section className='max-w-screen-lg mx-auto pb-60 px-6 md:px-28' id='portfolio'>
      <h3 className={twMerge(css.line, "flex flex-nowrap items-center relative mb-8")}>
        <span className='fira text-secondary-color text-2xl mr-4'>03. </span>Portfolio
      </h3>

      <div id='container'>
        <div className={twMerge(css.project, "px-9 py-11")}>
          <p className='fira text-secondary-color'>Utvalt Project</p>
          <h3>Web Shop</h3>
          <p className='gray '>
            A school project first made with react client side then added backend side with express and mongoDB database.
          </p>

          <ul className='fira gray flex gap-2.5 flex-wrap'>
            <li>ReactJS</li>
            <li>ExpressJS</li>
            <li>Mongoose</li>
            <li>MongoDB</li>
            <li>MongoDB</li>
          </ul>
          <div className='flex'>
            <Github size={24} />
            <ExternalLink size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
