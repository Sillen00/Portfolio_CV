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
        Electrician {/* {t("experience.elpro.title")}{" "} */}
        <Link className='text-secondary-color' href={"https://elpro.se/"} target='_blank'>
          @ Elpro i Alingsås
        </Link>
      </h4>
      <p className='fira small text-gray pb-4 pt-0.5'>
        September 2019 - September 2022
        {/* {t("experience.elpro.date")} */}
      </p>{" "}
      {/* 29 januari - 17 maj 2024 */}
      <div className={twMerge(css.textRowHover, "flex gap-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>
          During my time at Elpro, I gained a deep understanding of industrial automation and developed my skills in electrical design. I
          worked as an electrical assembler, where I played a vital role in the production of advanced electrical control systems and
          cabinets.
          {/* {t("experience.elpro.description1")} */}
        </p>
      </div>
      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>
          With the help of various drawings, I created customized solutions to meet the specific needs of customers. I handled both
          individual projects and serial production of control cabinets. My role involved building systems from scratch and ensuring that
          each project met high-quality standards.
          {/* {t("experience.elpro.description2")} */}
        </p>
      </div>
      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>
          I have learned the importance of precision, efficiency, and continuous improvement.
          {/* {t("experience.elpro.description3")} */}
        </p>
      </div>
    </div>
  );
};

export default Elpro;
