import { useState } from "react";
import { twMerge } from "tailwind-merge";
import css from "./_Home.module.scss";

const Experience = () => {
  const [selectedItem, setSelectedItem] = useState("Kokokaka");

  return (
    <div className='max-w-screen-lg mx-auto px-6 md:px-28' id='experience'>
      <h3 className={twMerge(css.line, "flex flex-nowrap items-center relative mb-8")}>
        <span className='fira text-secondary-color text-2xl mr-4'>02. </span>Experience
      </h3>

      <div className='flex'>
        <ul className='fira'>
          <li className={twMerge(css.navItem, selectedItem == "Kokokaka" && css.active)} onClick={() => setSelectedItem("Kokokaka")}>
            Kokokaka
          </li>
          <li className={twMerge(css.navItem, selectedItem == "Gym Control" && css.active)} onClick={() => setSelectedItem("Gym Control")}>
            Gym Control
          </li>
          <li
            className={twMerge(css.navItem, selectedItem == "MedieInstitutet" && css.active)}
            onClick={() => setSelectedItem("MedieInstitutet")}
          >
            MedieInstitutet
          </li>
          <li
            className={twMerge(css.navItem, selectedItem == "Elpro Alingsås" && css.active)}
            onClick={() => setSelectedItem("Elpro Alingsås")}
          >
            Elpro Alingsås
          </li>
          <li className={twMerge(css.navItem, selectedItem == "Netto Borås" && css.active)} onClick={() => setSelectedItem("Netto Borås")}>
            Netto Borås
          </li>
        </ul>

        <div className='flex-grow ml-4 mt-1.5'>
          {selectedItem === "Kokokaka" && (
            <h4>
              Frontend Utvecklare <span>@ Kokokaka Creative Studio</span>
            </h4>
          )}
          {selectedItem === "Gym Control" && (
            <h4>
              Fullstack Utvecklare <span>@ Gym Control</span>
            </h4>
          )}
          {selectedItem === "MedieInstitutet" && (
            <h4>
              Student Frontend <span>@ MedieInstitutet</span>
            </h4>
          )}
          {selectedItem === "Elpro Alingsås" && (
            <h4>
              Elmontör <span>@ Elpro i Alingsås</span>
            </h4>
          )}
          {selectedItem === "Netto Borås" && (
            <h4>
              Butikssäljare <span>@ Netto Borås</span>
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
