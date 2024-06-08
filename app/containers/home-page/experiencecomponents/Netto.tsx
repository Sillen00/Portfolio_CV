import { Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import css from "../_Home.module.scss";

const Netto = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h4>
        {t("experience.netto.title")} <span className='text-secondary-color cursor-pointer'>@ Netto Borås</span>
      </h4>
      <p className='fira small text-gray pb-4 pt-0.5'>{t("experience.netto.date")}</p> {/* 29 januari - 17 maj 2024 */}
      <div className={twMerge(css.textRowHover, "flex gap-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>{t("experience.netto.description1")}</p>
      </div>
      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>{t("experience.netto.description2")}</p>
      </div>
    </div>
  );
};

export default Netto;
