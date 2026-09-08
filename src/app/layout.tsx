import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Space_Grotesk } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gaia Space",
  description:
    "We're pioneering a new frontier in satellite technology, flying lower and smarter to deliver ultra-high-definition imagery, seamless global communications.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon/GIcon.png", type: "image/png" },
    ],
    apple: "/icon/GIcon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <Head>
        <link rel="preload" as="video" href="/images/engineering/v1.mp4" />
        <link rel="preload" as="video" href="/images/engineering/v2.mp4" />
      </Head>
      <body>
        {/* <ReactLenis root options={{ smoothWheel: true, lerp: 0.1 }} /> */}
        {children}
        <Toaster />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
