"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function EngineSpecs2() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <>
      <section className="text-secondary bg-background px-4 md:px-6">
        {/* Header */}
        <div className="text-secondary text-center font-thin">
          <h1 className="my-4 text-[28px] leading-tight tracking-tight md:text-[40px]">
            <span className="text-primary">Precision</span> Thrust, Efficient
            <span className="text-primary"> Combustion</span>
          </h1>
          <p className="text-p text-center leading-5 tracking-tight text-[#acacad] md:text-[18px]">
            Engineering Hybrid Propulsion Solutions for Tomorrow&apos;s Missions
          </p>
        </div>

        {/* Specifications */}
        <div className="bg-background mx-auto mt-10 max-w-6xl flex-col items-center rounded-3xl border-2 border-[#1d1d1d] p-5 md:mt-14 lg:pt-0 lg:pb-8">
          <h6 className="text-h6 my-8 text-center text-[600]">
            Engine Specification
          </h6>
          <div className="flex h-auto flex-col md:flex-row lg:h-[520px]">
            {/* Engine Image */}
            <div className="relative flex w-full items-center justify-center md:w-[35%]">
              <video
                src={`${activeTab === "overview" ? "/images/engineering/v1.mp4" : activeTab === "structural" ? "/images/engineering/v2.mp4" : "/images/engineering/v1.mp4"}`}
                autoPlay
                className="h-[250px]"
              />
            </div>

            {/* Content */}
            <div className="flex w-full flex-col px-4 pb-6 font-thin text-[#acacad] md:pr-[2%] md:pb-0 md:pl-0">
              {/* Toggle Buttons */}
              <div className="text-p mb-6 flex flex-wrap items-center gap-2 md:mb-10 md:text-[18px] lg:gap-4">
                <button
                  onClick={() => setActiveTab("overview")}
                  className={
                    activeTab === "overview"
                      ? "text-sm text-[#0088ff] md:text-[18px]"
                      : "text-#666666 text-sm md:text-[18px]"
                  }
                >
                  Overview
                </button>
                <div className="bg-secondary h-3 w-px lg:h-4.5 lg:w-[2px]" />
                <button
                  onClick={() => setActiveTab("technical")}
                  className={
                    activeTab === "technical"
                      ? "text-sm text-[#0088ff] md:text-[18px]"
                      : "text-#666666 text-sm md:text-[18px]"
                  }
                >
                  Technical Specification
                </button>
                <div className="bg-secondary h-3 w-px lg:h-4.5 lg:w-[2px]" />
                <button
                  onClick={() => setActiveTab("structural")}
                  className={
                    activeTab === "structural"
                      ? "text-sm text-[#0088ff] md:text-[18px]"
                      : "text-#666666 text-sm md:text-[18px]"
                  }
                >
                  Structural & System Design
                </button>
              </div>

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  {/* Overview panel */}
                  {activeTab === "overview" && (
                    <div className="flex flex-col justify-evenly font-normal tracking-tight">
                      <p className="md:text-p text-[15px] text-[#d5d5d5]">
                        Built for efficiency and scalability, our GIT RF
                        thrusters maximize propulsion performance while
                        minimizing manufacturing complexity.
                      </p>
                      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-2">
                        <div>
                          <h6 className="text-[17px] font-normal text-[#0088ff] md:text-[18px]">
                            Surge Capability
                          </h6>
                          <p className="md:text-p text-[15px] text-[#999999] md:mt-3">
                            Our systems provide dynamic surge capability,
                            enabling long-duration thrust increases for
                            maneuvering, orbit adjustment, and mission-critical
                            operations.
                          </p>
                        </div>
                        <div>
                          <h6 className="text-[17px] font-normal text-[#0088ff] md:text-[18px]">
                            Adaptability
                          </h6>
                          <p className="md:text-p text-[15px] text-[#999999] md:mt-3">
                            GIT RF thrusters are designed for adaptability,
                            supporting a wide range of mission profiles, power
                            levels, and spacecraft platforms.
                          </p>
                        </div>

                        <div className="mt-2 sm:col-span-2 md:mt-4">
                          <h6 className="text-[17px] font-normal text-[#0088ff] md:text-[18px]">
                            Lower Cost & Fewer Parts
                          </h6>
                          <p className="md:text-p text-[15px] text-[#999999] md:mt-3">
                            With fewer critical components and streamlined
                            design, GIT RF systems lower manufacturing
                            complexity and improve overall reliability.
                          </p>
                        </div>
                        <div className="mt-2 sm:col-span-2 md:mt-4">
                          <h6 className="text-[17px] font-normal text-[#0088ff] md:text-[18px]">
                            Electrode-Free Longevity
                          </h6>
                          <p className="md:text-p text-[15px] text-[#999999] md:mt-3">
                            Unlike traditional propulsion systems, GIT RF
                            thrusters eliminate electrode erosion, enabling
                            extended mission lifetimes, improved reliability,
                            and significantly reduced maintenance requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Technical Specification panel */}
                  {activeTab === "technical" && (
                    <div className="flex flex-col justify-evenly font-normal tracking-tight">
                      <p className="md:text-p text-[15px] text-[#d5d5d5]">
                        Built for efficiency and scalability, our GIT RF
                        thrusters maximize propulsion performance while
                        minimizing manufacturing complexity.
                      </p>
                      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-2">
                        <div>
                          <h6 className="text-[17px] font-normal text-[#0088ff] md:text-[18px]">
                            Core Specification
                          </h6>
                          <p className="md:text-p text-[15px] text-[#999999] md:mt-3">
                            Thrust Range: 5 – 15 mN <br />
                            Beam Current (IB): ~0.17 A <br />
                            Specific Impulse (Isp): ~1500 – 3000 s <br />
                            Discharge Voltage (Vd): 20 – 30 V <br />
                            Max Power Required: 250 W
                          </p>
                        </div>
                        <div>
                          <h6 className="text-[17px] font-normal text-[#0088ff] md:text-[18px]">
                            Core Specification
                          </h6>
                          <p className="md:text-p text-[15px] text-[#999999] md:mt-3">
                            Volume: 3U Platform <br />
                            Compatibility: SmallSat to medium-class spacecraft
                          </p>
                        </div>
                        <div className="mt-2 sm:col-span-2 md:mt-4">
                          <h6 className="text-[17px] font-normal text-[#0088ff] md:text-[18px]">
                            Performance $ Efficiency
                          </h6>
                          <p className="md:text-p text-[15px] text-[#999999] md:mt-3">
                            High specific impulse enabling ultra-efficient
                            propellant usage Tightly collimated beam ({"<"}10°)
                            for superior thrust utilization Cathode-less RF
                            plasma for higher efficiency and longer system
                            lifetime Seamless scalability across diverse power
                            and mission profiles
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Structural & System Design panel */}
                  {activeTab === "structural" && (
                    <div className="font-medium">
                      <p className="md:text-p text-[15px] text-[#d5d5d5]">
                        Built for efficiency and scalability, our GIT RF
                        thrusters maximize propulsion performance while
                        minimizing manufacturing complexity.
                      </p>

                      <ul className="mt-4 flex flex-col gap-2 text-[14px] text-[#d5d5d5] md:text-[15px]">
                        {[
                          "Cathode-less architecture (no hollow cathode required)",
                          "Reduced internal erosion due to RF plasma generation",
                          "Modular grid and coil assembly for scalability",
                          "Compact cylindrical chamber for integration efficiency",
                        ].map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#acacad]" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6">
                        <h6 className="text-primary text-p font-normal md:text-[17px]">
                          RF System Architecture
                        </h6>
                        <div className="mt-3 flex flex-col gap-1.5 text-[14px] md:text-[15px]">
                          <p>
                            <span className="text-[#acacad]">RF Coil: </span>
                            <span className="font-normal text-[#d5d5d5]">
                              External inductive coil sized for plasma coupling
                            </span>
                          </p>
                          <p>
                            <span className="text-[#acacad]">
                              RF Power Coupling:{" "}
                            </span>
                            <span className="font-normal text-[#d5d5d5]">
                              Tuned for efficient ionization rate
                            </span>
                          </p>
                          <p>
                            <span className="text-[#acacad]">
                              Operating Frequency:{" "}
                            </span>
                            <span className="font-normal text-[#d5d5d5]">
                              13.56 MHz
                            </span>
                          </p>
                          <p>
                            <span className="text-[#acacad]">
                              RF Sheath Control:{" "}
                            </span>
                            <span className="font-normal text-[#d5d5d5]">
                              Managed at chamber boundaries for stability
                            </span>
                          </p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h6 className="text-primary text-p font-normal md:text-[17px]">
                          Propellant Compatibility
                        </h6>
                        <p className="mt-3 text-[14px] text-[#acacad] md:text-[15px]">
                          Our system supports a range of noble gas propellants,
                          including xenon and krypton, enabling flexibility in
                          mission cost and performance optimization.
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
