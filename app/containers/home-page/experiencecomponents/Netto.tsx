import { Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import css from "../_Home.module.scss";

const Netto = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h4>
        {/* Store Clerk  */}
        {t("experience.netto.title")}
        <span className='text-secondary-color cursor-pointer'>@ Netto Borås</span>
      </h4>
      <p className='fira small text-gray pb-4 pt-0.5'>
        {/* June - August 2019 */}
        {t("experience.netto.date")}
      </p>{" "}
      {/* 29 januari - 17 maj 2024 */}
      <div className={twMerge(css.textRowHover, "flex gap-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>
          {/* After completing my high school education, I had the privilege of working as a retail salesperson at Netto, where I had the
          opportunity to develop skills in inventory management, cash handling, cleaning, maintenance, and customer service. */}
          {t("experience.netto.description1")}
        </p>
      </div>
      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>
          {/* I learned the importance of effective communication, collaboration, and problem-solving, as well as how to manage demands and
          expectations from different customer groups. */}
          {t("experience.netto.description2")}
        </p>
      </div>
    </div>
  );
};

export default Netto;
