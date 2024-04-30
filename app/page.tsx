"use client";
import About from "./containers/home-page/About";
import Contact from "./containers/home-page/Contact";
import Experience from "./containers/home-page/Experience";
import Portfolio from "./containers/home-page/Portfolio";

export default function Home() {
  return (
    <div>
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}
