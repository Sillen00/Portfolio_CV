import { Github, Linkedin, Phone } from "lucide-react";
import Link from "next/link";

const AbsoluteLinks = () => {
  return (
    <>
      <div className='hidden fixed bottom-36 left-12 z-10 md:flex flex-col gap-4'>
        <Link className='hover:text-secondary-color' href='github'>
          <Github />
        </Link>
        <Link className='hover:text-secondary-color' href='linked'>
          <Linkedin />
        </Link>
        <Link className='hover:text-secondary-color' href='telefon'>
          <Phone />
        </Link>
      </div>
      <div className='hidden md:block fixed bottom-64 -right-16 z-10 rotate-90'>
        <Link className='hover:text-secondary-color' href='mail'>
          simonbengtsson00@gmail.com
        </Link>
      </div>
    </>
  );
};

export default AbsoluteLinks;
