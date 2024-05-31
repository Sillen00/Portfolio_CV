import PDFViewer from "@/app/components/PDFViewer";
import { Download, Play } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import css from "../_Home.module.scss";

const MedieInstitutet = () => {
  const [showPDF, setShowPDF] = useState(false);

  const handlePDFClick = () => {
    setShowPDF(true);
  };

  const handlePDFClose = () => {
    setShowPDF(false);
  };

  return (
    <div>
      <h4>
        Student Frontend{" "}
        <Link className='text-secondary-color' href={"https://medieinstitutet.se/"} target='_blank'>
          @ MedieInstitutet
        </Link>
      </h4>

      <div className='flex items-center gap-4 pb-4 pt-0.5 flex-wrap'>
        <p className='fira small gray'>september 2022 - maj 2024</p> {/* 12 september 2022 - 17 maj 2024 */}
        <p className='fira small gray'> | </p>
        <div className='flex items-center gap-2'>
          <button onClick={handlePDFClick} className='flex items-center gap-2 cursor-pointer'>
            <p className={twMerge(css.linkHover, "fira small underline text-secondary-color")}>Examensbevis</p>
          </button>
          <Link href='./pdfs/Examensbevis_Simon_Bengtsson.pdf' target='_blank' download>
            <Download className='gray' width={15}></Download>
          </Link>
        </div>
        {showPDF && <PDFViewer src='./pdfs/Examensbevis_Simon_Bengtsson.pdf' onClose={handlePDFClose} />}
      </div>

      <div className={twMerge(css.textRowHover, "flex gap-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='gray'>
          Under min utbildning har jag kontinuerligt utvecklat mina tekniska färdigheter och vuxit både personligen och professionellt. Jag
          har lärt mig att skapa responsiva och användarvänliga webbplatser samt förmåga att lösa problem, samarbeta effektivt i team och
          kommunicera tydligt. Mina kunskaper kommer vara ovärderliga i min framtida karriär
        </p>
      </div>
      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='gray'>
          När jag blickar framåt ser jag många möjliga yrkesvägar. Att jämföra min nuvarande kunskap med den jag hade när jag började
          utbildningen ger mig en känsla av stolthet.Utbildningen har varit en ovärderlig del av min resa mot att bli en framgångsrik Front
          End Developer, och jag ser med spänning fram emot vad framtiden har att erbjuda.
        </p>
      </div>
      <div className={twMerge(css.textRowHover, "flex gap-4 pt-4")}>
        <Play width={11} className='text-secondary-color flex-none' />
        <p className='gray'>
          Vid avslutet av min utbildning fick jag en positiv text av min utbildningsledare Johanna:{" "}
          <span className='text-text-color'>
            &quot;Du är grym och imponerar ständigt! Har varit så kul att följa dig under utbildningens gång. Jag upplever också att du har
            utvecklats mycket under din LIA, vilket är så kul att se. Fortsätt att tro på dig själv och gå ut på arbetsmarknaden med
            självförtroende.&quot;
          </span>
        </p>
      </div>
    </div>
  );
};

export default MedieInstitutet;
