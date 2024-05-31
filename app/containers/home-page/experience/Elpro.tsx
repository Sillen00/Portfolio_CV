import { Play } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import css from "../_Home.module.scss";

const Elpro = () => {
  return (
    <div>
      <h4>
        Elmontör{" "}
        <Link className='text-secondary-color' href={"https://elpro.se/"} target='_blank'>
          @ Elpro i Alingsås
        </Link>
      </h4>
      <p className='fira small gray pb-4 pt-0.5'>september 2019 - september 2022</p> {/* 29 januari - 17 maj 2024 */}
      <div className={twMerge(css.textRowHover, "flex gap-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='gray'>
          Under min tid på Elpro har jag fått en stor förståelse för industriell automation och utvecklat mina färdigheter inom
          elkonstruktion. Jag arbetade som elmontör, där jag spelade en viktig roll i produktionen av avancerade elektriska styrsystem och
          apparatskåp.
        </p>
      </div>
      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='gray'>
          Med hjälp av olika ritningar skapade jag skräddarsydda lösningar för att möta kundernas specifika behov. Jag hanterade både
          enstaka projekt och serietillverkning av apparatskåp. Min roll innefattade att bygga system från grunden och säkerställa att varje
          projekt uppfyllde höga kvalitetsstandarder.
        </p>
      </div>
      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='gray'>Jag har lärt mig vikten av noggrannhet, effektivitet och kontinuerlig förbättring.</p>
      </div>
    </div>
  );
};

export default Elpro;
