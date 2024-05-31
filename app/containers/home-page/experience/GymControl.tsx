import { Play } from "lucide-react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import css from "../_Home.module.scss";

const GymControl = () => {
  return (
    <div>
      <h4>
        Fullstack Utvecklare{" "}
        <Link className='text-secondary-color' href={"https://gymcontrol.se/"} target='_blank'>
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
  );
};

export default GymControl;
