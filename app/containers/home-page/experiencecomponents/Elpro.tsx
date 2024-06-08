import { Play } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import css from "../_Home.module.scss";

const Elpro = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h4>
        {t("experience.elpro.title")}{" "}
        <Link className='text-secondary-color' href={"https://elpro.se/"} target='_blank'>
          @ Elpro i Alingsås
        </Link>
      </h4>
      <p className='fira small text-gray pb-4 pt-0.5'>{t("experience.elpro.date")}</p> {/* 29 januari - 17 maj 2024 */}
      <div className={twMerge(css.textRowHover, "flex gap-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>{t("experience.elpro.description1")}</p>
      </div>
      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>{t("experience.elpro.description2")}</p>
      </div>
      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>{t("experience.elpro.description3")}</p>
      </div>
    </div>
  );
};

export default Elpro;
