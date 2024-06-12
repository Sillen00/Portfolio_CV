import OrangeOutlineBtn from "@/app/components/OrangeOutlineBtn";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className='pt-36 pb-28 2xl:pt-60 max-w-screen-lg mx-auto px-6 md:px-28' id='hero'>
      <p className='fira text-secondary-color pb-5 pl-1'>
        {/* {t("hero.myNameIs")} */}
        Hello, my name is
      </p>
      <h1 className='leading-none'>Simon Bengtsson</h1>
      <h2 className='text-gray leading-tight pb-4'>
        I create digital solutions
        {/* {t("hero.whatIDo")} */}
      </h2>

      <p className='text-gray max-w-[550px] mb-14'>
        I am a full-stack developer passionate about creating user-friendly digital solutions. My focus is on developing responsive and
        accessible web applications and constantly improving my skills.
        {/* {t("hero.whatIDoLong")} */}
      </p>

      <Link href='#portfolio'>
        <OrangeOutlineBtn className='fira py-4 px-6'>
          Check out my portfolio!
          {/* {t("hero.checkPortfolio")} */}
        </OrangeOutlineBtn>
      </Link>
    </section>
  );
};

export default Hero;
