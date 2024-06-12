import OrangeOutlineBtn from "@/app/components/OrangeOutlineBtn";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className='max-w-screen-lg mx-auto pt-52 pb-60 px-6 md:px-28' id='contact'>
      <p className={"fira text-center text-secondary-color"}>04. What&rsquo;s Next?</p>
      <h3 className='font-semibold text-center my-4'>
        Get In Touch
        {/* {t("contact.getInTouch")} */}
      </h3>
      <p className='text-gray text-center pb-8 max-w-[580px] mx-auto'>
        I&#39;m seeking new opportunities. My inbox is always open, whether you have a question or just want to say hello, I&#39;ll do my
        best to get back to you!
        {/* {t("contact.endingText")} */}
      </p>

      <div className='flex justify-center pt-4'>
        <Link href='mailto:simonbengtsson00@gmail.com' target='_blank'>
          <OrangeOutlineBtn className='fira px-6 py-4'>
            Say Hello
            {/* {t("contact.contactMe")} */}
          </OrangeOutlineBtn>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
