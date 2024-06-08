import { Play } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import css from "../_Home.module.scss";

const Kokokaka = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h4>
        {t("experience.kokokaka.title")}{" "}
        <Link className={twMerge("text-secondary-color")} href={"https://kokokaka.com/"} target='_blank'>
          @ Kokokaka Creative Studio
        </Link>
      </h4>

      <div className='flex items-center gap-4 pb-4 pt-0.5 flex-wrap'>
        <p className='fira small text-gray'>{t("experience.kokokaka.date")}</p> {/* 29 januari - 17 maj 2024 */}
        <p className='fira small text-gray'> | </p>
        <Link href='./pdfs/Simon_rekommendationsbrev.pdf' target='_blank'>
          <p className={twMerge(css.linkHover, "fira small underline text-secondary-color")}>
            {t("experience.kokokaka.recommendationLetter")}
          </p>
        </Link>
      </div>

      <div className={twMerge(css.textRowHover, "flex gap-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>{t("experience.kokokaka.description1")}</p>
      </div>

      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>{t("experience.kokokaka.description2")}</p>
      </div>

      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>{t("experience.kokokaka.description3")}</p>
      </div>

      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>
          {t("experience.kokokaka.description4")}
          <span className='text-color'>{t("experience.kokokaka.quote")} </span>
          {t("experience.kokokaka.description5")}
        </p>
      </div>
    </div>
  );
};

export default Kokokaka;
