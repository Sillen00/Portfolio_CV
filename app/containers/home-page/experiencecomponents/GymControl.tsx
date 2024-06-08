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
        {t("experience.gymControl.title")}{" "}
        <Link className='text-secondary-color' href={"https://gymcontrol.se/"} target='_blank'>
          @ Gym Control
        </Link>
      </h4>
      <p className='fira small text-gray pb-4 pt-0.5'>{t("experience.gymControl.date")}</p> {/* 11 september - 17 maj 2023 */}
      <div className={twMerge(css.textRowHover, "flex gap-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>{t("experience.gymControl.description1")}</p>
      </div>
      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>
          {t("experience.gymControl.description2")} <span className='text-color'>{t("experience.gymControl.quote")}</span>
        </p>
      </div>
    </div>
  );
};

export default GymControl;
