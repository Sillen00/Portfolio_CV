import { useState } from "react";
import { twMerge } from "tailwind-merge";
import css from "./_Home.module.scss";

const Experience = () => {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div className='max-w-screen-lg mx-auto px-6 md:px-28' id='experience'>
      <h3 className={twMerge(css.line, "relative hidden md:block mb-8")}>
        <span className='fira text-secondary-color text-2xl'>01. </span>About Me
      </h3>

      <div className='flex'>
        <ul>
          <li className={twMerge(css.navItem, selectedItem == "Kokokaka" && `hover:text-red-600`)} onClick={() => setSelectedItem("Kokokaka")}>
            Kokokaka
          </li>
          <li className={twMerge(css.navItem, selectedItem == "Gym Control" && `border`)} onClick={() => setSelectedItem("Gym Control")}>
            Gym Control
          </li>
          <li className={twMerge(css.navItem, selectedItem == "MedieInstitutet" && `border`)} onClick={() => setSelectedItem("MedieInstitutet")}>
            MedieInstitutet
          </li>
          <li className={twMerge(css.navItem, selectedItem == "Elpro Alingsås" && `border`)} onClick={() => setSelectedItem("Elpro Alingsås")}>
            Elpro Alingsås
          </li>
          <li className={twMerge(css.navItem, selectedItem == "Netto Borås" && `border`)} onClick={() => setSelectedItem("Netto Borås")}>
            Netto Borås
          </li>
        </ul>

        <div className='flex-grow'>{selectedItem && <p>You clicked on: {selectedItem}</p>}</div>
      </div>
    </div>
  );
};

export default Experience;
