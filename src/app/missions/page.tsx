import { CTA } from "@/src/components/CTA";
import Footer from "@/src/components/Footer";
import Capabilities from "@/src/components/missions/Capabilities";
import Globe from "@/src/components/missions/Globe";
import Technology from "@/src/components/missions/Technology";
import Navbar from "@/src/components/Navbar";
export default function page() {
  return (
    <>
      <Navbar />
      <main className="bg-background relative">
        {/* Globe */}
        <section className="fixed inset-0 z-20 m-auto min-h-screen">
          <Globe />
        </section>

        {/* =========== Absolute Components Blocks =========== */}
        {/* Titles */}
        <section className="hero_pin fixed inset-0 h-screen overflow-hidden">
          <div className="content absolute top-[40%] left-[50%] z-0 flex w-full max-w-[1000px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[1.4rem] text-center md:w-[90%]">
            <h1 className="text-secondary md:text-h1 text-shadown-lg text-[28px] leading-0 font-thin tracking-tight md:font-medium">
              Worldwide ATS Intelligence
            </h1>
            <p className="text-primary md:text-h6 text-shadown-lg text-p font-light md:pt-3">
              Precision Data for Aircrafts Navigation and Surveillance
            </p>
            {/* <button className="cta_btn">Get started.</button> */}
          </div>
        </section>

        {/* =========== Screens =========== */}

        <section className="bg-background relative z-99 w-full px-4 lg:px-0">
          {/* Capabilities */}
          <Capabilities />
          {/*Technology */}
          <Technology />
          {/* CTA */}
          <CTA />
        </section>
      </main>
      <Footer />
    </>
  );
}
