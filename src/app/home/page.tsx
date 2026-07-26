"use client";

import { CTA } from "@/src/components/CTA";
import { Benefits } from "@/src/components/home/Benefits";
import { Propulsion } from "@/src/components/home/Propulsion";
import { Roadmap } from "@/src/components/home/Roadmap";
import Basic from "@/src/components/home/Basic";
import Flights from "@/src/components/home/Flights";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useRef, useEffect } from "react";
import BackgroundCanvas from "@/src/components/BackgroundCanvas";
import Image from "next/image";
import TransitionLinks from "@/src/components/TransitionLinks";

export default function Home() {
  const timelineData = [
    {
      year: "1938",
      label: "Global annual airline passengers: ~1 million",
      passengers: "~1 million",
      flights: "~2K",
      routeLimit: 2,
    },
    {
      year: "1950",
      label: "Annual passengers worldwide: ~30 million",
      passengers: "~30 million",
      flights: "~100K",
      routeLimit: 10,
    },
    {
      year: "1970",
      label: "Annual passengers: ~310 million",
      passengers: "~310 million",
      flights: "~1M",
      routeLimit: 50,
    },
    {
      year: "1980",
      label: "Annual passengers: ~600 million",
      passengers: "~600 million",
      flights: "~2M",
      routeLimit: 100,
    },
    {
      year: "1990",
      label: "Annual passengers: ~1 billion",
      passengers: "~1 billion",
      flights: "~3M",
      routeLimit: 150,
    },
    {
      year: "2000",
      label: "Annual passengers: ~1.7 billion",
      passengers: "~1.7 billion",
      flights: "~5M",
      routeLimit: 220,
    },
    {
      year: "2010",
      label: "Annual passengers: ~2.6 billion",
      passengers: "~2.6 billion",
      flights: "~8M",
      routeLimit: 310,
    },
    {
      year: "2019",
      label: "Pre-pandemic peak: ~4.5 billion",
      passengers: "~4.5 billion",
      flights: "~12M",
      routeLimit: 420,
    },
    {
      year: "2020",
      label: "Sharp COVID-19 decline: ~1.8 billion",
      passengers: "~1.8 billion",
      flights: "~6M",
      routeLimit: 200,
    },
    {
      year: "2023",
      label: "Recovery to ~4.5 billion passengers",
      passengers: "~4.5 billion",
      flights: "~12M",
      routeLimit: 420,
    },
    {
      year: "2024",
      label: "Record high: ~9.5 billion passengers",
      passengers: "~9.5 billion",
      flights: "~25M",
      routeLimit: 500,
    },
  ];
  const timelineDataMobile = [
    {
      year: "1938",
      label: "Global annual airline passengers: ~1 million",
      passengers: "~1 million",
      flights: "~2K",
      routeLimit: 2,
    },
    {
      year: "1970",
      label: "Annual passengers: ~310 million",
      passengers: "~310 million",
      flights: "~1M",
      routeLimit: 50,
    },
    {
      year: "1990",
      label: "Annual passengers: ~1 billion",
      passengers: "~1 billion",
      flights: "~3M",
      routeLimit: 150,
    },
    {
      year: "2010",
      label: "Annual passengers: ~2.6 billion",
      passengers: "~2.6 billion",
      flights: "~8M",
      routeLimit: 310,
    },
    {
      year: "2020",
      label: "Sharp COVID-19 decline: ~1.8 billion",
      passengers: "~1.8 billion",
      flights: "~6M",
      routeLimit: 200,
    },
    {
      year: "Present",
      label: "Record high: ~9.5 billion passengers",
      passengers: "~9.5 billion",
      flights: "~25M",
      routeLimit: 500,
    },
  ];
  const [timelineIndex, setTimelineIndex] = useState(0);
  const timelineIndexRef = useRef(0);
  const [isSmallDevice, setIsSmallDevice] = useState(false);

  const activeTimeline = isSmallDevice ? timelineDataMobile : timelineData;

  useEffect(() => {
    const BREAKPOINT = 786;
    if (window.innerWidth < BREAKPOINT) {
      setIsSmallDevice(true);
      setTimelineIndex((prev) => Math.min(prev, timelineDataMobile.length - 1));
    }
  }, []);
  return (
    <>
      <Navbar />
      <main className="bg-background relative">
        {/* Earth */}
        {/* <BackgroundCanvas /> */}
        <section className="basic-canvas pointer-events-none fixed inset-0 z-20 m-auto">
          <Flights
            onTimelineUpdate={(idx: number) => {
              if (idx !== timelineIndexRef.current) {
                timelineIndexRef.current = idx;
                setTimelineIndex(idx);
              }
            }}
          />
        </section>

        {/* =========== Absolute Components Blocks =========== */}

        {/* Phase 2 — Flight Timeline */}
        <div className="phase-2 text-secondary pointer-events-none fixed top-[60%] left-1/2 z-40 w-[min(1200px,90vw)] -translate-x-1/2 -translate-y-1/2 opacity-0 md:top-[70%]">
          {/* Top row: passenger + flight counts */}
          <div className="flex flex-col items-center gap-[40vw] md:flex-row md:items-start md:justify-between md:gap-0">
            <div className="text-center md:text-start">
              <p className="text-h4 md:text-h2 tabular-nums transition-all duration-300">
                {activeTimeline[timelineIndex].passengers}
              </p>
              <p className="text-p md:text-h5 text-primary">
                Passengers Annually
              </p>
            </div>
            <div className="text-center md:text-end">
              <p className="text-h4 md:text-h2 tabular-nums transition-all duration-300">
                {activeTimeline[timelineIndex].flights}
              </p>
              <p className="text-p md:text-h5 text-primary">Flights Annually</p>
            </div>
          </div>

          {/* Timeline slider */}
          <div className="mt-5 md:mt-[100px]">
            <div className="relative mx-auto max-w-[90vw] md:w-[800px]">
              {/* Track */}
              <div className="relative h-[2px] w-full rounded-full bg-white/20">
                <div
                  className="absolute h-full rounded-full bg-white transition-all duration-300"
                  style={{
                    width: `${(timelineIndex / (activeTimeline.length - 1)) * 100}%`,
                  }}
                />
                {/* Thumb dot */}
                <div
                  className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white transition-all duration-300"
                  style={{
                    left: `${(timelineIndex / (activeTimeline.length - 1)) * 100}%`,
                    top: "6px",
                    transform: "translate(-50%, -50%)",
                  }}
                />
              </div>

              {/* Year labels */}
              <div className="mt-3 flex max-w-[100vh] justify-between">
                {activeTimeline.map((d, i) => (
                  <span
                    key={d.year}
                    className={`w-8 max-w-8 text-xs transition-all duration-300 ${i === timelineIndex ? "font-semibold text-white" : "text-white/40"}`}
                  >
                    {d.year}
                  </span>
                ))}
              </div>
            </div>

            {/* Descriptor */}
            <p className="text-p md:text-h5 text-secondary mt-6 text-center transition-all duration-300">
              {activeTimeline[timelineIndex].label}
            </p>
          </div>
        </div>

        {/* Satellites */}
        <div className="satellite fixed top-[20%] left-1/2 z-40 w-full -translate-x-1/2 px-4 opacity-0 lg:top-[30%] lg:w-[1000] lg:px-0 xl:w-[1300]">
          <p className="text-p lg:text-h5 text-primary">
            Meet our satellite constellation ATLAS !
          </p>
          <h2 className="text-h4 lg:text-h2 text-secondary mt-4 leading-9 font-medium lg:mt-6 lg:leading-14">
            Space-powered intelligence <br /> for tomorrow&apos;s airspace.
          </h2>
          {/* Accordian */}
          <div className="mt-5">
            <Accordion
              type="single"
              collapsible
              className="w-full"
              defaultValue="item-1"
            >
              <AccordionItem value="item-1" className="pb-3">
                <AccordionTrigger className="data-[state=open]:text-primary text-secondary border-secondary data-[state=open]:border-primary mb-2 border-l-3 border-l-[#555555] pb-2 pl-3 text-lg leading-4 font-normal">
                  Global, uninterrupted airspace activity tracking
                </AccordionTrigger>
                <AccordionContent className="text-p flex flex-col gap-4 px-4 leading-4.5 font-normal text-[#aaaaaa] md:w-[50%]">
                  <p>
                    ATLAS ensures the skies are always visible. With worldwide
                    coverage that reaches oceans, polar regions, and the most
                    remote airspaces, it delivers uninterrupted and accurate
                    tracking of aircraft across the globe. Built for safety,
                    efficiency, and security, ATLAS brings the future of air
                    traffic and aerospace monitoring within reach.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="pb-3">
                <AccordionTrigger className="data-[state=open]:text-primary text-secondary border-secondary data-[state=open]:border-primary mb-2 border-l-3 border-l-[#555555] pb-2 pl-3 text-lg leading-2 font-thin">
                  Safer airspace operation
                </AccordionTrigger>
                <AccordionContent className="text-p flex flex-col gap-4 px-4 leading-4.5 font-normal text-[#aaaaaa] md:w-[50%]">
                  <p>
                    ATLAS enhances the safety of global aviation by providing
                    continuous, real-time awareness of aircraft movements. By
                    closing surveillance gaps over oceans, poles, and remote
                    regions, ATLAS empowers air traffic controllers, airlines,
                    and defence agencies with the data they need to prevent
                    risks, respond more quickly, and ensure secure and efficient
                    skies.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="pb-5">
                <AccordionTrigger className="data-[state=open]:text-primary text-secondary border-secondary data-[state=open]:border-primary mb-2 border-l-3 border-l-[#555555] pb-2 pl-3 text-lg leading-2 font-normal">
                  Economic & Efficiency Benefits
                </AccordionTrigger>
                <AccordionContent className="text-p flex flex-col gap-4 px-4 leading-4.5 font-normal text-[#aaaaaa] md:w-[50%]">
                  <p>
                    ATLAS drives economic and operational efficiency by enabling
                    more direct flight routes, reducing delays, and lowering
                    fuel consumption. Real-time global surveillance optimizes
                    airspace use, minimizes congestion, and supports faster
                    recovery from disruptions, helping airlines and air traffic
                    agencies reduce costs, improve scheduling, and enhance
                    overall aviation productivity worldwide.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* =========== Screens =========== */}

        {/* Main */}
        <section className="hero_pin relative h-screen overflow-hidden pt-0">
          <div className="content absolute top-[40%] left-[50%] z-0 flex w-[90%] max-w-[1000px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-[1.4rem] text-center">
            <h1 className="text-secondary lg:text-h1 text-shadown-lg text-[40px] leading-10 tracking-tight md:leading-0">
              PROPELLING TO THE BEYOND
            </h1>
            <p className="text-primary md:text-h6 text-shadown-lg text-p pt-3 leading-5 font-light">
              Together, we can shape a stronger, more adaptable space.
            </p>
            {/* <button className="cta_btn">Get started.</button> */}
          </div>
        </section>

        {/* Flights */}
        <section className="after_hero relative min-h-[300vh]">
          {/* <div>
            <h2>Now we scroll normally</h2>
            <p>This is standard document flow.</p>
          </div> */}
        </section>

        {/* Satellites */}
        <section className="last relative min-h-[400vh]">
          {/* <div>
            <h2>Now we scroll normally</h2>
            <p>This is standard document flow.</p>
          </div> */}
        </section>

        {/* Propulsion  & Roadmap*/}
        <section className="bg-background relative z-999">
          {/* Propulsion */}
          <Propulsion />
          {/* Roadmap */}
          <Roadmap />
          {/* Benefits */}
          <Benefits />

          <section className="mx-6 mt-20 flex max-w-7xl flex-col items-center text-[#cbcbcb] md:mx-auto">
            <h3 className="text-h5 font-thin md:text-[40px]">In The News</h3>
            <p className="text-center text-[14px] leading-3 font-thin text-[#b7b8b8]">
              Our mission has garnered substantial media attention, including
              major journals such as
            </p>
            {/* News */}
            <div className="from-background relative mt-10 flex w-full items-center justify-around gap-20 bg-gradient-to-b to-[#101316] py-10 md:py-0">
              <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-[40vw] bg-gradient-to-r to-transparent" />
              <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-[40vw] bg-gradient-to-l to-transparent" />
              <Image
                src="/images/about/partner2.png"
                alt="partner"
                height={100}
                width={100}
              />
            </div>
          </section>

          {/* Get in touch section */}
          <section className="mx-auto mt-20 flex w-[70%] max-w-6xl flex-col items-center gap-8 border border-gray-800 bg-gray-950 p-6 text-center text-[22px] font-thin tracking-tight text-[#cbcbcb] sm:p-8 sm:text-[28px] md:w-full md:flex-row md:justify-around md:gap-0 md:p-10">
            <div className="flex md:w-1/2 md:max-w-1/2">
              <p className="text-center md:text-left">
                Curious what we can <br className="block md:hidden" /> do for
                you?
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full rounded-2xl bg-[#666666] md:h-auto md:w-0.5 md:self-stretch" />

            <div className="flex flex-col items-center md:w-1/2 md:max-w-1/2">
              <p className="text-center text-sm">
                Reach out to our team directly and address <br /> your quires
                one on one.
              </p>

              <TransitionLinks
                prefetch
                href="/contact"
                className="text-p mt-2 flex items-center gap-2 rounded bg-linear-65 from-purple-700 to-teal-400 px-6 py-0.5 tracking-tight"
              >
                <span>Contact Us</span>
              </TransitionLinks>
            </div>
          </section>
          {/* CTA */}
          <CTA />
        </section>
      </main>
      <Footer />
    </>
  );
}
