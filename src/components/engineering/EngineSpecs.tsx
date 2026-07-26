"use client";

import Image from "next/image";
import { useState } from "react";

export default function EngineSpecs() {
  const [toggleSpecs, setToggleSpecs] = useState(true);
  return (
    <>
      <section className="text-secondary px-4 md:px-6">
        {/* Header */}
        <div className="text-secondary text-center font-thin">
          <h1 className="my-4 text-[28px] leading-tight tracking-tight md:text-[40px]">
            <span className="text-primary">Precision</span> Thrust, Efficient
            <span className="text-primary"> Combustion</span>
          </h1>
          <p className="text-p text-center leading-5 tracking-tight text-[#acacad] md:text-[18px]">
            Engineering Hybrid Propulsion, Propulsion Solutions for
            Tomorrow&apos;s Missions
          </p>
        </div>

        {/* Specifications */}
        <div className="mx-auto mt-10 h-auto max-w-6xl items-center rounded-3xl border border-x-0 border-[#646464] bg-[#0c0c0c] p-5 md:mt-14 md:flex-row md:p-0">
          <h6 className="text-h6 my-8 text-center text-[600]">
            Engine Specification
          </h6>

          <div className="flex h-auto flex-col md:h-[450px] md:flex-row">
            {/* Engine Image */}
            <div className="relative h-[340px] w-full shrink-0 md:h-[400px] md:w-[35%]">
              <Image
                src="/images/engineering/Engine.png"
                alt="Engine"
                fill
                objectFit="contain"
              />
            </div>

            {/* Content */}
            <div className="flex h-auto w-full flex-col px-4 pb-6 font-thin text-[#acacad] md:pr-[2%] md:pb-0 md:pl-0">
              {/* Toggle Buttons */}
              <div className="text-p mb-6 flex items-center gap-4 md:mb-10 md:text-[18px]">
                <button
                  onClick={() => setToggleSpecs(true)}
                  className={toggleSpecs ? "text-primary" : ""}
                >
                  Overview
                </button>
                <div className="bg-secondary h-4.5 w-[2px]" />
                <button
                  onClick={() => setToggleSpecs(false)}
                  className={toggleSpecs ? "" : "text-primary"}
                >
                  Technical Specification
                </button>
              </div>

              <div className="relative min-h-[450px] flex-1 justify-center overflow-hidden md:min-h-0">
                {/* Overview panel */}
                <div
                  className={`absolute inset-0 flex flex-col justify-start transition-opacity duration-500 ${
                    toggleSpecs
                      ? "pointer-events-auto opacity-100"
                      : "pointer-events-none opacity-0"
                  }`}
                >
                  <p className="md:text-p text-[15px] text-[#d5d5d5]">
                    Our Hybrid Rocket Motor designs are optimised for
                    manufacturing while delivering full performance.
                  </p>
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-2">
                    <div>
                      <h6 className="text-primary text-[17px] font-normal md:text-[18px]">
                        Surge Capability
                      </h6>
                      <p className="md:text-p text-[15px] text-[#d5d5d5] md:mt-3">
                        Rapidly scale motor production leveraging common
                        manufacturing production equipment and minimal tooling.
                      </p>
                    </div>
                    <div>
                      <h6 className="text-primary text-[17px] font-normal md:text-[18px]">
                        Adapdibility
                      </h6>
                      <p className="md:text-p text-[15px] text-[#d5d5d5] md:mt-3">
                        Easy changeover to different casings and sounding launch
                        vehicle frame.
                      </p>
                    </div>
                    <div className="mt-2 sm:col-span-2 md:mt-4">
                      <h6 className="text-primary font- [400] text-[17px] md:text-[18px]">
                        Lower Cost & Fewer Parts
                      </h6>
                      <p className="md:text-p text-[15px] text-[#d5d5d5] md:mt-3">
                        Our processes have simplified the complex and labour
                        intensive process of rocket motor manufacturing,
                        reducing both part count and assembly tasks.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technical Specification panel */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    toggleSpecs
                      ? "pointer-events-none opacity-0"
                      : "pointer-events-auto opacity-100"
                  }`}
                >
                  <div className="flex flex-col justify-evenly font-normal tracking-tight">
                    <p className="md:text-p text-[15px] text-[#d5d5d5]">
                      Our Hybrid Rocket Motor designs are optimised for
                      manufacturing while delivering full performance.
                    </p>
                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-2">
                      <div>
                        <h6 className="text-[17px] font-normal text-[#0088ff] md:text-[18px]">
                          Core Specification
                        </h6>
                        <p className="md:text-p text-[15px] text-[#999999] md:mt-3">
                          Thrust Range: 1 kN / 224.808 lb
                          <br />
                          Specific Impulse (Isp): 230 sec <br />
                          Burn Duration (s): 20 <br />
                          Throttle Capability: Yes <br />
                          Restart Capability: Yes <br />
                        </p>
                      </div>
                      <div>
                        <h6 className="text-[17px] font-normal text-[#0088ff] md:text-[18px]">
                          Performance & Efficiency
                        </h6>
                        <p className="md:text-p text-[15px] text-[#999999] md:mt-3">
                          Propellant Mass Fraction: <br />
                          Chamber Pressure: 30 bar <br />
                          Efficiency: 84.67%
                        </p>
                      </div>
                      <div className="mt-2 sm:col-span-2 md:mt-4">
                        <h6 className="text-[17px] font-normal text-[#0088ff] md:text-[18px]">
                          Design & Archiecture
                        </h6>
                        <p className="md:text-p text-[15px] text-[#999999] md:mt-3">
                          Modularity (scalable / clustered designs): Yes <br />
                          Ignition System: Pyro and Torch ignition
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
