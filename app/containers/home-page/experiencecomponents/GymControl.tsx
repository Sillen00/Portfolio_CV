import { Play } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import css from "../_Home.module.scss";

const GymControl = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h4>
        {/* Fullstack Developer */}
        {t("experience.gymControl.title")}{" "}
        <Link className='text-secondary-color' href={"https://gymcontrol.se/"} target='_blank'>
          @ Gym Control
        </Link>
      </h4>
      <p className='fira small text-gray pb-4 pt-0.5'>
        {/* September - May 2023 */}
        {t("experience.gymControl.date")}
      </p>{" "}
      {/* 11 september - 17 maj 2023 */}
      <div className={twMerge(css.textRowHover, "flex gap-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>
          {/* At Gym Control, I had the opportunity to further develop my skills in frontend technologies such as HTML, CSS, JavaScript/jQuery,
          as well as integrations with various APIs and PHP with SQL as the backend. */}
          {t("experience.gymControl.description1")}
        </p>
      </div>
      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>
          {/* At the end of my internship, I received very positive feedback from Johan: (translated from Swedish){" "} */}
          {t("experience.gymControl.description2")}
          <span className='text-color'>
            {/* &#39;Simon is always on his toes and learns quickly, and he will be an asset to anyone who gets the chance to work with/hire him
            in the future. The best of all interns we have had in the company over the years.&#39; */}
            {t("experience.gymControl.quote")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default GymControl;
