import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 767px)", // Ställ in mobil brytpunkt
        isDesktop: "(min-width: 768px)", // Ställ in desktop brytpunkt
      },
      context => {
        let { isMobile, isDesktop }: { isMobile?: string; isDesktop?: string } = context.conditions || {};

        if (isMobile) {
          // Inställningar för mobil
          gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 90%",
                end: "top 45%",
                scrub: true,
              },
            }
          );
        } else if (isDesktop) {
          // Inställningar för desktop
          gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 100%",
                scrub: true,
              },
            }
          );
        }
      }
    );

    // Rensa animationer och matchMedia när komponenten avmonteras
    return () => mm.revert();
  }, []);

  return <div ref={sectionRef}>{children}</div>;
};

export default FadeInSection;
