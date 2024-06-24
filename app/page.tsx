"use client";
import About from "./containers/home-page/About";
import Contact from "./containers/home-page/Contact";
import Experience from "./containers/home-page/Experience";
import Hero from "./containers/home-page/Hero";
import Portfolio from "./containers/home-page/Portfolio";
import "./services/i18n";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
}
