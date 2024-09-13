import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "./components/Navbar";
import MouseMovement from "./components/MouseMovement";
import { CookieConsent } from "./components/CookieConsent";
import { Footer } from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Robert Dumitru - Web Developer",
  description: "Professional web development services including custom website design, responsive layouts, and SEO optimization. Transform your online presence with a tailored solution that fits your needs.",
  icons: {
    icon: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
  openGraph: {
    title: "Robert Dumitru - Web Developer",
    description: "Professional web development services including custom design, responsive layouts, and SEO.",
    url: "https://www.dumitrurobert.com",
    siteName: "Robert Dumitru",
    images: [
      {
        url: "/assets/opengraph.png",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-primary ${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <MouseMovement />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieConsent />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
