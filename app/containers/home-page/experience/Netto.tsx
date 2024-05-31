import { Play } from "lucide-react";
import { twMerge } from "tailwind-merge";
import css from "../_Home.module.scss";

const Netto = () => {
  return (
    <div>
      <h4>
        Butikssäljare <span className='text-secondary-color cursor-pointer'>@ Netto Borås</span>
      </h4>
      <p className='fira small gray pb-4 pt-0.5'>juni - augusti 2019</p> {/* 29 januari - 17 maj 2024 */}
      <div className={twMerge(css.textRowHover, "flex gap-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='gray'>
          Efter min gymnasieutbildning hade jag förmånen att arbeta som butiksäljare på Netto, där jag fick möjlighet att utveckla
          färdigheter inom varulagerhantering, kassahantering, städning, underhåll och kundservice.
        </p>
      </div>
      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='gray'>
          Jag lärde mig vikten av effektiv kommunikation, samarbete och problemlösning, samt hur man hanterar krav och förväntningar från
          olika kundgrupper.
        </p>
      </div>
    </div>
  );
};

export default Netto;
