import { twMerge } from "tailwind-merge";
import css from "./_Home.module.scss";

const Portfolio = () => {
  return (
    <section className='max-w-screen-lg mx-auto pb-60 px-6 md:px-28' id='portfolio'>
      <h3 className={twMerge(css.line, "flex flex-nowrap items-center relative mb-8")}>
        <span className='fira text-secondary-color text-2xl mr-4'>03. </span>Portfolio
      </h3>
    </section>
  );
};

export default Portfolio;
