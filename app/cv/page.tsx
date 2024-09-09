import { StarsCanvas } from "@/app/components/StarsCanvas";
import { Cv } from "../components/Cv";

export default function Resume () {
    return (
      <div className="relative w-full  overflow-auto h-screen">
        <StarsCanvas />
        <div className="relative container mx-auto z-10">
          <Cv />
        </div>
      </div>
    );
  }
