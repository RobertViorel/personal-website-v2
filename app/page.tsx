import { Hero } from "./components/Hero";
import { StarsCanvas } from "./components/StarsCanvas";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Stars Background */}
      <StarsCanvas />

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}
