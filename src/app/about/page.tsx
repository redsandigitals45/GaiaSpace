"use client";

import { AboutHero } from "@/src/components/about/AboutHero";
import { Invitation } from "@/src/components/about/Invitation";
import { Newsroom } from "@/src/components/about/Newsroom";
import { Partners } from "@/src/components/about/Partners";
import { TeamSection } from "@/src/components/about/TeamSection";
import { CTA } from "@/src/components/CTA";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="mx-auto overflow-x-hidden">
        <AboutHero />
        <TeamSection />
        <Partners />
        <Newsroom />
        <Invitation />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
