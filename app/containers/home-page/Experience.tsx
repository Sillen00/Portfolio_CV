import { useState } from "react";
import { twMerge } from "tailwind-merge";
import css from "./_Home.module.scss";
import Elpro from "./experience/Elpro";
import GymControl from "./experience/GymControl";
import Kokokaka from "./experience/Kokokaka";
import MedieInstitutet from "./experience/MedieInstitutet";
import Netto from "./experience/Netto";

const Experience = () => {
  const [selectedItem, setSelectedItem] = useState("Kokokaka");

  const experiences = ["Kokokaka", "Gym Control", "MedieInstitutet", "Elpro", "Netto"];

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLIElement>, experience: string) => {
    if (event.key === "Enter") {
      setSelectedItem(experience);
    }
  };

  return (
    <section className='max-w-screen-lg mx-auto pt-32 pb-28 px-6 md:px-28' id='experience'>
      <h3 className={twMerge(css.line, "flex flex-nowrap items-center relative mb-8")}>
        <span className='fira text-secondary-color text-2xl mr-4'>02. </span>Experience
      </h3>

      <div className='sm:flex'>
        <ul className={twMerge(css.navUl, "fira flex text-nowrap overflow-x-scroll overflow-y-hidden sm:flex-col sm:overflow-x-hidden")}>
          {experiences.map(experience => (
            <li
              key={experience}
              className={twMerge(css.navItem, selectedItem === experience && css.active)}
              onClick={() => setSelectedItem(experience)}
              onKeyDown={event => handleKeyDown(event, experience)}
              tabIndex={0}
            >
              {experience}
            </li>
          ))}
        </ul>

        <div className='pt-6 sm:pt-0 sm:ml-4 flex-1'>
          {selectedItem === "Kokokaka" && <Kokokaka />}

          {selectedItem === "Gym Control" && <GymControl />}

          {selectedItem === "MedieInstitutet" && <MedieInstitutet />}

          {selectedItem === "Elpro" && <Elpro />}

          {selectedItem === "Netto" && <Netto />}
        </div>
      </div>
    </section>
  );
};

export default Experience;
