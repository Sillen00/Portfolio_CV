import OrangeOutlineBtn from "@/app/components/OrangeOutlineBtn";
import Link from "next/link";

const Contact = () => {
  return (
    <section className='max-w-screen-lg mx-auto pt-52 pb-60 px-6 md:px-28' id='contact'>
      <p className={"fira text-center text-secondary-color"}>04. What&rsquo;s Next?</p>
      <h3 className='font-semibold text-center my-4'>Get In Touch</h3>
      <p className='text-gray text-center pb-8 max-w-[580px] mx-auto'>
        Jag söker nya möjligheter. Min inkorg alltid öppen, oavsett om du har en fråga eller bara vill säga hej så ska jag göra mitt bästa
        för att återkomma till dig!
      </p>
      <div className='flex justify-center pt-4'>
        <Link href='mailto:simonbengtsson00@gmail.com' target='_blank'>
          <OrangeOutlineBtn className='fira px-6 py-4'>Say Hello</OrangeOutlineBtn>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
