import { StarsCanvas } from "../components/StarsCanvas";
import { WebsiteEstimator } from "../components/WebsiteEstimator";

export default function Calculator() {
    return (
      <div className="relative w-full  overflow-auto">
        <StarsCanvas />
        <div className="relative container mx-auto z-10">
        <WebsiteEstimator />
        </div>
      </div>
    );
  }
