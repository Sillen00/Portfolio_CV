import OrangeOutlineBtn from "@/app/components/OrangeOutlineBtn";
import { Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import css from "./_Home.module.scss";

const Experience = () => {
  const [selectedItem, setSelectedItem] = useState("Kokokaka");

  return (
    <div className='max-w-screen-lg mx-auto pb-60 px-6 md:px-28' id='experience'>
      <h3 className={twMerge(css.line, "flex flex-nowrap items-center relative mb-8")}>
        <span className='fira text-secondary-color text-2xl mr-4'>02. </span>Experience
      </h3>

      <div className='flex'>
        <ul className='fira'>
          <li className={twMerge(css.navItem, selectedItem == "Kokokaka" && css.active)} onClick={() => setSelectedItem("Kokokaka")}>
            Kokokaka
          </li>
          <li className={twMerge(css.navItem, selectedItem == "Gym Control" && css.active)} onClick={() => setSelectedItem("Gym Control")}>
            Gym Control
          </li>
          <li
            className={twMerge(css.navItem, selectedItem == "MedieInstitutet" && css.active)}
            onClick={() => setSelectedItem("MedieInstitutet")}
          >
            MedieInstitutet
          </li>
          <li className={twMerge(css.navItem, selectedItem == "Elpro" && css.active)} onClick={() => setSelectedItem("Elpro")}>
            Elpro
          </li>
          <li className={twMerge(css.navItem, selectedItem == "Netto" && css.active)} onClick={() => setSelectedItem("Netto")}>
            Netto
          </li>
        </ul>

        {/* KOKOKAKA ----------------------------------------------------------------------------------------------------- */}
        {/* KOKOKAKA ----------------------------------------------------------------------------------------------------- */}
        {/* KOKOKAKA ----------------------------------------------------------------------------------------------------- */}

        <div className='flex-grow ml-4 mt-1.5'>
          {selectedItem === "Kokokaka" && (
            <div>
              <h4>
                Frontend Utvecklare{" "}
                <Link className='text-secondary-color' href={"https://kokokaka.com/"}>
                  @ Kokokaka Creative Studio
                </Link>
              </h4>
              <p className='fira small gray pb-4 pt-0.5'>januari - maj 2024</p> {/* 29 januari - 17 maj 2024 */}

              <Link href='./pdfs/Simon_rekommendationsbrev.pdf' target='_blank' download>
                <OrangeOutlineBtn>Rekommendationsbrev</OrangeOutlineBtn>
              </Link>
              
              <div className='flex gap-4'>
                <Play width={7} className='text-secondary-color flex-none' />
                <p className='gray'>
                  Hos Kokokaka fick jag möjlighet att verkligen utforska och utveckla min kreativa och tekniska sida som front-end
                  utvecklare med fokus på UX/UI.
                </p>
              </div>
              <div className='flex gap-4 pt-4'>
                <Play width={7} className='text-secondary-color flex-none' />
                <p className='gray'>
                  Arbetade med en mängd olika teknologier, inklusive HTML, CSS, React Wordpress och även AR-tekniker. Jag fick också
                  fördjupa mig i Photoshop och Illustrator, vilket breddade mina färdigheter inom både utveckling och design.
                </p>
              </div>
              <div className='flex gap-4 pt-4'>
                <Play width={7} className='text-secondary-color flex-none' />
                <p className='gray'>
                  Jag hade en självgående roll där jag ofta fick lösa problem och göra research på egen hand, men jag uppskattade verkligen
                  det stöd och de insikter jag fick från mina kollegor.
                </p>
              </div>
              <div className='flex gap-4 pt-4'>
                <Play width={7} className='text-secondary-color flex-none' />
                <p className='gray'>
                  Såhär beskrev min handledare mig: &quot;Simon är alltid väldigt fokuserad och engagerad i sitt arbete. När han stöter på
                  problem så försöker han hitta lösningar med hjälp av AI, forum och tutorials. Han är självständig och noggrann.&quot; Jag
                  fick även ett mycket fint rekommendationsbrev från Kokokaka som du kan ladda ner här ovan.
                </p>
              </div>
            </div>
          )}

          {/* GYM CONTROL ----------------------------------------------------------------------------------------------------- */}
          {/* GYM CONTROL ----------------------------------------------------------------------------------------------------- */}
          {/* GYM CONTROL ----------------------------------------------------------------------------------------------------- */}

          {selectedItem === "Gym Control" && (
            <div>
              <h4>
                Fullstack Utvecklare{" "}
                <Link className='text-secondary-color' href={"https://gymcontrol.se/"}>
                  @ Gym Control
                </Link>
              </h4>
              <p className='fira small gray pb-4 pt-0.5'>september - maj 2023</p> {/* 11 september - 17 maj 2023 */}
              <div className='flex gap-4'>
                <Play width={7} className='text-secondary-color flex-none' />
                <p className='gray'>
                  Hos Gym Control fick jag möjlighet att ytterligare utveckla mina kunskaper inom frontend-teknologier såsom HTML, CSS,
                  Javascript/JQuery samt integrationer med olika API:er och PHP med SQL som backend.
                </p>
              </div>
              <div className='flex gap-4 pt-4'>
                <Play width={7} className='text-secondary-color flex-none' />
                <p className='gray'>
                  Vid avslutet av min praktik fick jag en mycket positiv utvärdering från Johan: &quot;Simon står på tårna och lär sig fort
                  och kommer bli en tillgång för den som får chans att arbeta/anställa honom i framtiden. Bästa av alla praktikanter vi haft
                  i företaget genom åren.&quot;
                </p>
              </div>
            </div>
          )}

          {/* MEDIEINSTITUTET ----------------------------------------------------------------------------------------------------- */}
          {/* MEDIEINSTITUTET ----------------------------------------------------------------------------------------------------- */}
          {/* MEDIEINSTITUTET ----------------------------------------------------------------------------------------------------- */}

          {selectedItem === "MedieInstitutet" && (
            <div>
              <h4>
                Student Frontend{" "}
                <Link className='text-secondary-color' href={"https://medieinstitutet.se/"}>
                  @ MedieInstitutet
                </Link>
              </h4>
              <p className='fira small gray pb-4 pt-0.5'>september 2022 - maj 2024</p> {/* 12 september 2022 - 17 maj 2024 */}
              <div className='flex gap-4'>
                <Play width={7} className='text-secondary-color' />
                <p className='gray'></p>
              </div>
            </div>
          )}

          {/* ELPRO ----------------------------------------------------------------------------------------------------- */}
          {/* ELPRO ----------------------------------------------------------------------------------------------------- */}
          {/* ELPRO ----------------------------------------------------------------------------------------------------- */}

          {selectedItem === "Elpro" && (
            <div>
              <h4>
                Elmontör{" "}
                <Link className='text-secondary-color' href={"https://elpro.se/"}>
                  @ Elpro i Alingsås
                </Link>
              </h4>
              <p className='fira small gray pb-4 pt-0.5'>september 2019 - september 2022</p> {/* 29 januari - 17 maj 2024 */}
              <div className='flex gap-4'>
                <Play width={7} className='text-secondary-color' />
                <p className='gray'>Här var jag hos kokokaka</p>
              </div>
            </div>
          )}

          {/* NETTO ----------------------------------------------------------------------------------------------------- */}
          {/* NETTO ----------------------------------------------------------------------------------------------------- */}
          {/* NETTO ----------------------------------------------------------------------------------------------------- */}

          {selectedItem === "Netto" && (
            <div>
              <h4>
                Butikssäljare <span className='text-secondary-color cursor-pointer'>@ Netto Borås</span>
              </h4>
              <p className='fira small gray pb-4 pt-0.5'>juni - augusti 2019</p> {/* 29 januari - 17 maj 2024 */}
              <div className='flex gap-4'>
                <Play width={7} className='text-secondary-color' />
                <p className='gray'>Här var jag hos kokokaka</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
