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
        {/* Studying Frontend */}
        {t("experience.medieinstitutet.title")}{" "}
        <Link className='text-secondary-color' href={"https://medieinstitutet.se/"} target='_blank'>
          @ MedieInstitutet
        </Link>
      </h4>

      <div className='flex items-center gap-4 pb-4 pt-0.5 flex-wrap'>
        <p className='fira small text-gray'>
          {/* September 2022 - May 2024 */}
          {t("experience.medieinstitutet.date")}
        </p>{" "}
        {/* 12 september 2022 - 17 maj 2024 */}
        <p className='fira small text-gray'> | </p>
        <Link href='./pdfs/Examensbevis_Simon_Bengtsson.pdf' target='_blank'>
          <p className={twMerge(css.linkHover, "fira small underline text-secondary-color")}>
            {/* Degree Certificate */}
            {t("experience.medieinstitutet.degreeCertificate")}
          </p>
        </Link>
      </div>

      <div className={twMerge(css.textRowHover, "flex gap-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>
          {/* During my education, I have continuously developed my technical skills and grown both personally and professionally. I have
          learned to create responsive and user-friendly websites as well as the ability to solve problems, collaborate effectively in
          teams, and communicate clearly. My skills will be invaluable in my future career. */}
          {t("experience.medieinstitutet.description1")}
        </p>
      </div>

      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>
          {/* As I look ahead, I see many possible career paths. Comparing my current knowledge to what I had when I started the education fills
          me with a sense of pride. The education has been an invaluable part of my journey towards becoming a successful Front End
          Developer, and I look forward with excitement to what the future holds. */}
          {t("experience.medieinstitutet.description2")}
        </p>
      </div>

      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>
          {/* At the end of my education, I received a positive message from my education leader, Johanna: (translated from Swedish){" "} */}
          {t("experience.medieinstitutet.description3")}
          <span className='text-color'>
            {/* &#39;You&#39;re awesome and constantly impress! It&#39;s been so fun to follow you during the course of your education. I also
            feel that you have developed a lot during your internship, which is great to see. Keep believing in yourself and enter the job
            market with confidence.&#39; */}
            {t("experience.medieinstitutet.quote")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default MedieInstitutet;
