
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { StarsCanvas } from "./components/StarsCanvas";
import { Tech } from "./components/Tech";
import { AboutMe } from "./components/AboutMe";
import { Cta } from "./components/Cta";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <StarsCanvas />
      <div className="relative z-10 overflow-hidden">
        <Hero />
        <Services />
        <Experience />
        <Tech />
        <AboutMe />
        <Cta />
      </div>
    </div>
  );
}
