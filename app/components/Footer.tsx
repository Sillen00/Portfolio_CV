// import { useTranslation } from "react-i18next";

const Footer = () => {
  // const { t } = useTranslation();

  return (
    <p className='fira w-[280px] small mx-auto text-center hover:text-secondary-color transition-all duration-300 pb-8'>
      © 2024 by Simon Bengtsson
      {/* {t("footer.rightsReserved")} */}
    </p>
  );
};

export default Footer;
