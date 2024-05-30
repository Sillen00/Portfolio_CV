import Link from "next/link";

const Footer = () => {
  return (
    <Link href='https://github.com/Sillen00'>
      <p className='fira w-[280px] small mx-auto text-center hover:text-secondary-color transition-all duration-300 pb-8'>© 2024 av Simon Bengtsson</p>
    </Link>
  );
};

export default Footer;
