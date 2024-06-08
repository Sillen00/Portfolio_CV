import { Play } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import css from "../_Home.module.scss";

const Kokokaka = () => {
  return (
    <div>
      <h4>
        Frontend Utvecklare{" "}
        <Link className={twMerge("text-secondary-color")} href={"https://kokokaka.com/"} target='_blank'>
          @ Kokokaka Creative Studio
        </Link>
      </h4>

      <div className='flex items-center gap-4 pb-4 pt-0.5 flex-wrap'>
        <p className='fira small text-gray'>januari - maj 2024</p> {/* 29 januari - 17 maj 2024 */}
        <p className='fira small text-gray'> | </p>
        <Link href='./pdfs/Simon_rekommendationsbrev.pdf' target='_blank'>
          <p className={twMerge(css.linkHover, "fira small underline text-secondary-color")}>Rekommendationsbrev</p>
        </Link>
      </div>

      <div className={twMerge(css.textRowHover, "flex gap-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>
          Hos Kokokaka fick jag möjlighet att verkligen utforska och utveckla min kreativa och tekniska sida som front-end utvecklare med
          fokus på UX/UI.
        </p>
      </div>
      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>
          Arbetade med en mängd olika teknologier, inklusive HTML, CSS, React Wordpress och även AR-tekniker. Jag fick också fördjupa mig i
          Photoshop och Illustrator, vilket breddade mina färdigheter inom både utveckling och design.
        </p>
      </div>
      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>
          Jag hade en självgående roll där jag ofta fick lösa problem och göra research på egen hand, men jag uppskattade verkligen det stöd
          och de insikter jag fick från mina kollegor.
        </p>
      </div>
      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='text-gray'>
          Såhär beskrev min handledare mig:{" "}
          <span className='text-text-color'>
            &quot;Simon är alltid väldigt fokuserad och engagerad i sitt arbete. När han stöter på problem så försöker han hitta lösningar
            med hjälp av AI, forum och tutorials. Han är självständig och noggrann.&quot;{" "}
          </span>
          Jag fick även ett mycket fint rekommendationsbrev från Kokokaka som du kan ladda ner här ovan.
        </p>
      </div>
    </div>
  );
};

export default Kokokaka;
