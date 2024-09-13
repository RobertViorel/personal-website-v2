// app/calculator/page.tsx (or page.js if not using TypeScript)

import { StarsCanvas } from '../components/StarsCanvas';
import { WebsiteEstimator } from '../components/WebsiteEstimator';

export const metadata = {
  title: 'Website Cost Calculator | Robert Dumitru',
  description: 'Estimate the cost of your website project with our easy-to-use website cost calculator. Get accurate estimates and plan your budget efficiently.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.dumitrurobert.com/calculator',
  },
  openGraph: {
    title: 'Website Cost Calculator | Dumitru Robert',
    description: 'Use my website cost calculator to get an accurate estimate for your web development project.',
    url: 'https://www.dumitrurobert.com/calculator',
    images: [
      {
        url: '/assets/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Website Cost Calculator Preview',
      },
    ],
  },
};

export default function Calculator() {
  return (
    <div className="relative w-full overflow-auto">
      <StarsCanvas />
      <div className="relative container mx-auto z-10">
        <WebsiteEstimator />
      </div>
    </div>
  );
}
