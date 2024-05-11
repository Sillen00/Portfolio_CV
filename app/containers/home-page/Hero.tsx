import OrangeOutlineBtn from "@/app/components/OrangeOutlineBtn";
import Link from "next/link";

const Hero = () => {
  return (
    <section className='min-h-screen pt-44 max-w-screen-lg mx-auto px-6 md:px-28' id='hero'>
      <p className='text-secondary-color pb-5 pl-1'>Hej, mitt namn är</p>
      <h1 className='leading-none'>Simon Bengtsson</h1>
      <h2 className='gray leading-tight pb-4'>Skapar digitala lösningar</h2>

      <p className='roboto gray max-w-[550px] mb-14'>
        Jag är en fullstackutvecklare som brinner för att skapa användarvänliga digitala lösningar. Mitt fokus ligger på att utveckla
        responsiva och tillgängliga webbapplikationer och ständigt förbättra mina kunskaper.
      </p>

      <Link href='#portfolio'>
        <OrangeOutlineBtn className='py-4 px-6'>Check out my portfolio!</OrangeOutlineBtn>
      </Link>
    </section>
  );
};

export default Hero;
