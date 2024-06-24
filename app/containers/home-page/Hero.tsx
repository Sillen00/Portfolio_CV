import OrangeOutlineBtn from "@/app/components/OrangeOutlineBtn";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className='pt-36 pb-28 2xl:pt-60 max-w-screen-lg mx-auto px-6 md:px-28' id='hero'>
      <p className='fira text-secondary-color pb-5 pl-1'>{t("hero.myNameIs")}</p>
      <h1 className='leading-none'>Simon Bengtsson</h1>
      <h2 className='text-gray leading-tight pb-4'>{t("hero.whatIDo")}</h2>
      <p className='text-gray max-w-[550px] mb-14'>{t("hero.whatIDoLong")}</p>
      <p>{t("hero.test", { something: 123, somethingelse: "tudelu" })}</p>
      <Link href='#portfolio'>
        <OrangeOutlineBtn className='fira py-4 px-6'>{t("hero.checkPortfolio")}</OrangeOutlineBtn>
      </Link>
      {/* <Image width={60} height={60} className='absolute z-50 bottom-0 left-[50%] -translate-x-2/4' src='/icons/scroll.gif' alt='Your GIF' /> */}
    </section>
  );
};

export default Hero;
