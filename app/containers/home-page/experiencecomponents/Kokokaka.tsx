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
        {/* Frontend Developer  */}
        {t("experience.kokokaka.title")}{" "}
        <Link className={twMerge("text-secondary-color")} href={"https://kokokaka.com/"} target='_blank'>
          @ Kokokaka Creative Studio
        </Link>
      </h4>

      <div className='flex items-center gap-4 pb-4 pt-0.5 flex-wrap'>
        <p className='fira small text-gray'>
          {/* January - May 2024 */}
          {t("experience.kokokaka.date")}
        </p>{" "}
        {/* 29 januari - 17 maj 2024 */}
        <p className='fira small text-gray'> | </p>
        <Link href='./pdfs/Simon_rekommendationsbrev.pdf' target='_blank'>
          <p className={twMerge(css.linkHover, "fira small underline text-secondary-color")}>
            {/* Recommendation Letter */}
            {t("experience.kokokaka.recommendationLetter")}
          </p>
        </Link>
      </div>

      <div className={twMerge(css.textRowHover, "flex gap-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>
          {/* At Kokokaka, I had the opportunity to truly explore and develop my creative and technical side as a front-end developer with a
          focus on UX/UI. */}
          {t("experience.kokokaka.description1")}
        </p>
      </div>

      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>
          {/* I worked with a variety of technologies, including HTML, CSS, React, WordPress, and even AR technologies. I also delved into
          Photoshop and Illustrator, which broadened my skills in both development and design. */}
          {t("experience.kokokaka.description2")}
        </p>
      </div>

      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>
          {/* I had an independent role where I often had to solve problems and conduct research on my own, but I greatly appreciated the
          support and insights I received from my colleagues. */}
          {t("experience.kokokaka.description3")}
        </p>
      </div>

      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>
          {/* This is how my supervisor described me: (translated to English)  */}
          {t("experience.kokokaka.description4")}
          <span className='text-color'>
            {/* &#39;Simon is always very focused and dedicated to his work. When he encounters problems, he tries to find solutions using AI,
            forums, and tutorials. He is independent and meticulous.&#39; */}
            {t("experience.kokokaka.quote")}
          </span>{" "}
          {/* I also received a very nice letter of recommendation from Kokokaka, which you can download above. */}
          {t("experience.kokokaka.description5")}
        </p>
      </div>
    </div>
  );
};

export default Kokokaka;
