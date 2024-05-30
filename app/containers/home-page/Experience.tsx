import { Download, Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import css from "./_Home.module.scss";

const Experience = () => {
  const [selectedItem, setSelectedItem] = useState("Kokokaka");

  return (
    <section className='max-w-screen-lg mx-auto pt-32 pb-28 px-6 md:px-28' id='experience'>
      <h3 className={twMerge(css.line, "flex flex-nowrap items-center relative mb-8")}>
        <span className='fira text-secondary-color text-2xl mr-4'>02. </span>Experience
      </h3>

      <div className='sm:flex'>
        <ul className={twMerge(css.navUl, "fira flex text-nowrap overflow-x-scroll overflow-y-hidden sm:flex-col sm:overflow-x-hidden")}>
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
            Medieinstitutet
          </li>
          <li className={twMerge(css.navItem, selectedItem == "Elpro" && css.active)} onClick={() => setSelectedItem("Elpro")}>
            Elpro
          </li>
          <li className={twMerge(css.navItem, selectedItem == "Netto" && css.active)} onClick={() => setSelectedItem("Netto")}>
            Netto
          </li>
        </ul>

        <div className='pt-6 sm:pt-0 sm:ml-4 flex-1'>
          {/* KOKOKAKA ----------------------------------------------------------------------------------------------------- */}
          {/* KOKOKAKA ----------------------------------------------------------------------------------------------------- */}
          {/* KOKOKAKA ----------------------------------------------------------------------------------------------------- */}

          {selectedItem === "Kokokaka" && (
            <div>
              <h4>
                Frontend Utvecklare{" "}
                <Link className='text-secondary-color' href={"https://kokokaka.com/"}>
                  @ Kokokaka Creative Studio
                </Link>
              </h4>

              <div className='flex items-center gap-4 pb-4 pt-0.5 flex-wrap'>
                <p className='fira small gray'>januari - maj 2024</p> {/* 29 januari - 17 maj 2024 */}
                <p className='fira small gray'> | </p>
                <div className='flex items-center gap-2'>
                  <Link href='./pdfs/Simon_rekommendationsbrev.pdf' target='_blank' download className='flex items-center gap-2'>
                    <p className={twMerge(css.linkHover, "fira small underline text-secondary-color")}>Rekommendationsbrev</p>
                    <Download className='gray' width={15}></Download>
                  </Link>
                </div>
              </div>

              <div className={twMerge(css.textRowHover, "flex gap-4")}>
                <Play width={11} className='text-secondary-color flex-none' />
                <p className='gray'>
                  Hos Kokokaka fick jag möjlighet att verkligen utforska och utveckla min kreativa och tekniska sida som front-end
                  utvecklare med fokus på UX/UI.
                </p>
              </div>
              <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
                <Play width={11} className='text-secondary-color flex-none' />
                <p className='gray'>
                  Arbetade med en mängd olika teknologier, inklusive HTML, CSS, React Wordpress och även AR-tekniker. Jag fick också
                  fördjupa mig i Photoshop och Illustrator, vilket breddade mina färdigheter inom både utveckling och design.
                </p>
              </div>
              <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
                <Play width={11} className='text-secondary-color flex-none' />
                <p className='gray'>
                  Jag hade en självgående roll där jag ofta fick lösa problem och göra research på egen hand, men jag uppskattade verkligen
                  det stöd och de insikter jag fick från mina kollegor.
                </p>
              </div>
              <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
                <Play width={11} className='text-secondary-color flex-none' />
                <p className='gray'>
                  Såhär beskrev min handledare mig:{" "}
                  <span className='text-primary'>
                    &quot;Simon är alltid väldigt fokuserad och engagerad i sitt arbete. När han stöter på problem så försöker han hitta
                    lösningar med hjälp av AI, forum och tutorials. Han är självständig och noggrann.&quot;{" "}
                  </span>
                  Jag fick även ett mycket fint rekommendationsbrev från Kokokaka som du kan ladda ner här ovan.
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
              <div className={twMerge(css.textRowHover, "flex gap-4")}>
                <Play width={11} className='text-secondary-color flex-none' />
                <p className='gray'>
                  Hos Gym Control fick jag möjlighet att ytterligare utveckla mina kunskaper inom frontend-teknologier såsom HTML, CSS,
                  Javascript/JQuery samt integrationer med olika API:er och PHP med SQL som backend.
                </p>
              </div>
              <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
                <Play width={11} className='text-secondary-color flex-none' />
                <p className='gray'>
                  Vid avslutet av min praktik fick jag en mycket positiv utvärdering från Johan:{" "}
                  <span className='text-primary'>
                    &quot;Simon står på tårna och lär sig fort och kommer bli en tillgång för den som får chans att arbeta/anställa honom i
                    framtiden. Bästa av alla praktikanter vi haft i företaget genom åren.&quot;
                  </span>
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
              <div className={twMerge(css.textRowHover, "flex gap-4")}>
                <Play width={11} className='text-secondary-color flex-none' />
                <p className='gray'>
                  Under min utbildning har jag kontinuerligt utvecklat mina tekniska färdigheter och vuxit både personligen och
                  professionellt. Jag har lärt mig att skapa responsiva och användarvänliga webbplatser samt förmåga att lösa problem,
                  samarbeta effektivt i team och kommunicera tydligt. Mina kunskaper kommer vara ovärderliga i min framtida karriär
                </p>
              </div>
              <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
                <Play width={11} className='text-secondary-color flex-none' />
                <p className='gray'>
                  När jag blickar framåt ser jag många möjliga yrkesvägar. Att jämföra min nuvarande kunskap med den jag hade när jag
                  började utbildningen ger mig en känsla av stolthet.Utbildningen har varit en ovärderlig del av min resa mot att bli en
                  framgångsrik Front End Developer, och jag ser med spänning fram emot vad framtiden har att erbjuda.
                </p>
              </div>
              <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
                <Play width={11} className='text-secondary-color flex-none' />
                <p className='gray'>
                  Vid avslutet av min utbildning fick jag en positiv text av min utbildningsledare Johanna:{" "}
                  <span className='text-primary'>
                    &quot;Du är grym och imponerar ständigt! Har varit så kul att följa dig under utbildningens gång. Jag upplever också att
                    du har utvecklats mycket under din LIA, vilket är så kul att se. Fortsätt att tro på dig själv och gå ut på
                    arbetsmarknaden med självförtroende.&quot;
                  </span>
                </p>
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
              <div className={twMerge(css.textRowHover, "flex gap-4")}>
                <Play width={11} className='text-secondary-color flex-none' />
                <p className='gray'>
                  Under min tid på Elpro har jag fått en stor förståelse för industriell automation och utvecklat mina färdigheter inom
                  elkonstruktion. Jag arbetade som elmontör, där jag spelade en viktig roll i produktionen av avancerade elektriska
                  styrsystem och apparatskåp.
                </p>
              </div>
              <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
                <Play width={11} className='text-secondary-color flex-none' />
                <p className='gray'>
                  Med hjälp av olika ritningar skapade jag skräddarsydda lösningar för att möta kundernas specifika behov. Jag hanterade
                  både enstaka projekt och serietillverkning av apparatskåp. Min roll innefattade att bygga system från grunden och
                  säkerställa att varje projekt uppfyllde höga kvalitetsstandarder.
                </p>
              </div>
              <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
                <Play width={11} className='text-secondary-color flex-none' />
                <p className='gray'>Jag har lärt mig vikten av noggrannhet, effektivitet och kontinuerlig förbättring.</p>
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
                  Jag lärde mig vikten av effektiv kommunikation, samarbete och problemlösning, samt hur man hanterar krav och förväntningar
                  från olika kundgrupper.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
