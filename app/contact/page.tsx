import Contact from "@/app/components/Contact";
import { StarsCanvas } from "@/app/components/StarsCanvas";

export default function ContactPage() {
    return (
      <div className="relative w-full  overflow-auto">
        <StarsCanvas />
        <div className="relative container mx-auto z-10">
          <Contact />
        </div>
      </div>
    );
  }
