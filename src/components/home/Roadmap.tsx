"use client";

import { useRef, useEffect, useState } from "react";
import { CustomScrollbar } from "./CustomScrollbar";
import ParticleCanvas from "../ParticleCanvas";

const timeline = [
  {
    title: ">GS_001",
    scope: "Initial R&D",
    year: 2019,
    desc: "Even before GAIA SPACE was officially established, our team was engaged in small-scale experiments with various hybrid rocket fuels. These early tests, dating back to late 2019, served as the spark that ignited the passion and vision now driven forward by a dedicated team of experienced professionals and educators.",
    img: "/images/home/Roadmap01.webp",
  },
  {
    title: ">GS_002",
    scope: "HyRocEn 500",
    year: 2022,
    desc: "The HyRocEn 500, developed and tested in 2022, first hybrid rocket engine rated at 500 N of thrust. Utilizing a paraffin solid fuel grain in combination with a gaseous oxygen oxidizer, the engine demonstrated stable combustion, efficient thrust generation, and key insights into fuel regression dynamics paving the way for more advanced propulsion systems.",
    img: "/images/home/HyRocEn500.webp",
  },
  {
    title: ">GS_003",
    scope: "GAIA SPACE Foundation",
    year: 2024,
    desc: "GAIA SPACE was founded in May 2024 with a mission to push the boundaries of in-space propulsion and space-based intelligence. Building on years of experimental research, the foundation focuses on developing advanced propulsion systems and autonomous technologies that will shape the future of deep space exploration and operations.",
    img: "/images/home/pitch_deck.webp",
  },
  {
    title: ">GS_004",
    scope: "Grants and Collaborations",
    year: 2025,
    desc: "Partnered with the Department of Aerospace Engineering at Uttaranchal University to advance research in satellite engineering and space propulsion systems. This collaboration focuses on joint innovation, skill development, and industry-aligned education to empower future space professionals and strengthen India’s global aerospace footprint.",
    img: "/images/home/timeline2025.webp",
  },
  {
    title: ">GS_005",
    scope: "HyRocEN 1kN",
    year: 2026,
    desc: "HyRocEn 1kN, set for testing in early 2026, builds on the success of the 500 model. It delivers 1000 N of thrust with restart capability and an improved paraffin-based fuel grain. The campaign will test longer burns, scalability, and readiness for small launch and upper-stage use.",
    img: "/images/home/hyrocenTimeline.webp",
  },
  {
    title: ">GS_006",
    scope: "GIT-RF",
    year: 2027,
    desc: "The GIT-RF, currently under development, represents a significant step in electric propulsion technology aimed at high-efficiency Inspace mobilitiy application. The program aims to conduct a full-scale vacuum-simulated test in 2027, a key milestone toward validating the thruster’s readiness for in-space operation and integration into future deep-space and orbital missions.",
    img: "/images/home/timelineAll.webp",
  },
  {
    title: ">GS_007",
    scope: "GIT-RF Space Commissioning and Further R&D for ABEP",
    year: 2029,
    desc: "The GIT-RF Space Commissioning Mission will be the first in-orbit demonstration of our GIT technology, marking a key step toward operational electric propulsion. Scheduled after successful vacuum-simulated testing in 2027, the mission will validate in-space performance and readiness for integration into future technology development for air breathing electric propulsion.",
    img: "/images/home/timelineAll.webp",
  },
  {
    title: ">GS_008",
    scope: "ATLAS Technology Demonstration",
    year: 2030,
    desc: "The ATLAS Technology Demonstration Mission will serve as the validation of a satellite-based air traffic management system designed to enhance global flight monitoring and safety. ATLAS ecosystem aims to provide seamless tracking of aircraft across oceanic, remote, and underserved regions where ground-based radar coverage is limited or nonexistent.",
    img: "/images/home/timelineAll.webp",
  },
  {
    title: ">GS_009",
    scope: "ATLAS Satellite Launch and Services",
    year: 2035,
    desc: "The deployment phase of the ATLAS system, designed to revolutionize global air traffic management through space based surveillance. The mission will launch the first ATLAS satellite into low Earth orbit, equipped with advanced ADS-B and ADS-C reception capabilities to provide persistent, real-time aircraft tracking over oceanic, polar, and remote regions.",
    img: "/images/home/timelineAll.webp",
  },
  {
    title: ">GS_010",
    scope: "Further R&D for interplanetary economics",
    year: 2037,
    desc: "As humanity extends its reach beyond Earth, the development of a robust interplanetary economy becomes essential. Our future research and development efforts will focus on the foundational technologies, governance frameworks, and economic models required to enable sustainable trade, resource utilization, and value exchange across planetary bodies.",
    img: "/images/home/timelineAll.webp",
  },
];

export function Roadmap() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="text-secondary mx-auto my-30 max-w-7xl px-1 md:my-[150px] xl:px-0">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <ParticleCanvas />
      </div>
      <h2 className="md:text-h2 mb-2 text-[42px] font-light md:mb-10">
        Roadmap
      </h2>
      <div className="relative">
        {/* Fade overlays */}
        <div className="from-background pointer-events-none absolute top-0 left-0 z-10 h-full w-4 bg-gradient-to-r to-transparent sm:w-16 md:w-32" />
        <div className="from-background pointer-events-none absolute top-0 right-0 z-10 h-full w-4 bg-gradient-to-l to-transparent sm:w-16 md:w-32" />

        <div
          ref={scrollContainerRef}
          className="scrollbar-hide bg-background flex w-[98%] gap-4 overflow-x-scroll md:gap-6"
          style={{
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {timeline.map((time, id) => (
            <div
              key={id}
              className={`${id === timeline.length ? "mr-4 h-auto w-[88vw] shrink-0 sm:w-[600px] md:mr-10 md:h-[330px] md:w-[760px]" : "ml-4 h-auto w-[88vw] shrink-0 sm:w-[600px] md:h-[330px] md:w-[760px]"}`}
            >
              <div className="flex flex-col items-end gap-2 sm:flex-row md:gap-3">
                <img
                  src={time.img}
                  className="aspect-video h-auto w-full rounded-md object-cover sm:h-[280px] sm:w-[500px]"
                  alt=""
                />
                <p className="text-secondary bg-highlight flex-1 overflow-auto p-3 text-xs leading-[17px] font-light tracking-tighter text-balance sm:h-[252px] sm:text-sm">
                  {time.desc}
                </p>
              </div>
              <div className="mt-2 flex justify-between font-light md:text-base">
                <div className="flex flex-col">
                  <span className="text-[14px]">{`${time.title}`}</span>
                  <span className="text-[15px] font-semibold">{`${time.scope}`}</span>
                </div>
                <span>{time.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isMounted && scrollContainerRef.current && (
        <CustomScrollbar scrollContainerRef={scrollContainerRef} />
      )}
    </div>
  );
}
