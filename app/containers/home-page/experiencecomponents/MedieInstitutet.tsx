import { Play } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import css from "../_Home.module.scss";

const MedieInstitutet = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h4>
        {t("experience.medieinstitutet.title")}{" "}
        <Link className='text-secondary-color' href={"https://medieinstitutet.se/"} target='_blank'>
          @ MedieInstitutet
        </Link>
      </h4>

      <div className='flex items-center gap-4 pb-4 pt-0.5 flex-wrap'>
        <p className='fira small text-gray'>{t("experience.medieinstitutet.date")}</p> {/* 12 september 2022 - 17 maj 2024 */}
        <p className='fira small text-gray'> | </p>
        <Link href='./pdfs/Examensbevis_Simon_Bengtsson.pdf' target='_blank'>
          <p className={twMerge(css.linkHover, "fira small underline text-secondary-color")}>
            {t("experience.medieinstitutet.degreeCertificate")}
          </p>
        </Link>
      </div>

      <div className={twMerge(css.textRowHover, "flex gap-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>{t("experience.medieinstitutet.description1")}</p>
      </div>

      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>{t("experience.medieinstitutet.description2")}</p>
      </div>

      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>
          {t("experience.medieinstitutet.description3")}
          <span className='text-color'>{t("experience.medieinstitutet.quote")}</span>
        </p>
      </div>
    </div>
  );
};

export default MedieInstitutet;
