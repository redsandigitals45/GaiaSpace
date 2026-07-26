import { CTA } from "@/src/components/CTA";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import Image from "next/image";
import V from "@/src/components/engineering/V";
import EngineSpecs2 from "@/src/components/engineering/EngineSpecs2";
import ParticleCanvas from "@/src/components/ParticleCanvas";

const cards = [
  {
    data: "50%",
    title: "High Performance",
    desc: " With advanced RF ionization, the GIT-RF enhances efficiency, thrust, and performance while minimizing power usage.",
    src: "/images/engineering/1.png",
  },
  {
    data: "3x",
    title: "Resolute",
    desc: "Ideal for extended mission durations,offering reliable performance over prolonged periods.",
    src: "/images/engineering/2.png",
  },
  {
    data: "<10x",
    title: "Green and Affordable",
    desc: "The fuel is as safe to handle as common salt, requiring minimal safety precautions and significantly reducing infrastructure costs.",
    src: "/images/engineering/3.png",
  },
];

export default function page() {
  return (
    <>
      <Navbar />

      <main className="bg-background">
        {/* Intro Section */}
        <section
          className="text-secondary relative mx-auto flex h-screen w-full max-w-[1440px] flex-col justify-center px-4 font-light md:px-6"
          style={{
            backgroundImage: `url('/images/engineering/gitBG.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="from-background absolute inset-x-0 top-0 h-24 bg-linear-to-b to-transparent" />
            <div className="from-background absolute inset-x-0 bottom-0 h-24 bg-linear-to-t to-transparent" />
            <div className="from-background absolute inset-y-0 left-0 hidden w-[5vw] bg-linear-to-r to-transparent md:block" />
            <div className="from-background absolute inset-y-0 right-0 hidden w-[5vw] bg-linear-to-l to-transparent md:block" />
          </div>
          <div className="mx-auto h-full max-w-7xl">
            <div className="flex h-[30%] flex-col justify-end">
              <h3 className="text-[28px] leading-tight font-thin tracking-tight md:text-[40px]">
                GIT-RF-200
              </h3>
              <h5 className="text-primary text-p font-normal tracking-tight md:text-[22px]">
                RADIO FREQUENCY GRIDDED ION THRUSTER
              </h5>
            </div>
            <div className="mt-20 text-center">
              <h4 className="text-h4 leading-8 font-thin tracking-tight">
                Meet Our First Gen RF-Gridded Ion Thruster
              </h4>
              <p className="mt-6 text-justify text-sm leading-4 tracking-tight text-[#acacad] md:mt-10">
                We are revolutionizing electric propulsion with cutting-edge
                RF-gridded ion thrusters that offer unmatched performance and
                efficiency. Our innovative designs prioritize extended lifespan,
                cost-effectiveness, and weight reduction, making them ideal for
                a wide range of satellite applications, from station-keeping to
                interplanetary maneuvers.
              </p>
            </div>
          </div>
        </section>
        {/* Cards */}
        <section className="text-secondary mx-auto max-w-7xl px-4 pt-10 md:px-6 md:pt-20">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-h4 my-4 leading-tight font-thin tracking-tight">
              <span className="text-primary">Precision</span> Propulsion,
              Limitless <span className="text-primary">Possibilities</span>
            </h1>
            <p className="text-center text-base leading-5 font-thin tracking-tight text-[#acacad] md:text-lg">
              Developing Advanced Ion Thrusters Pioneering the Future of
              Efficient and Precise Space Propulsion
            </p>
          </div>
          {/* card */}
          <div className="mx-auto my-10 grid max-w-4xl grid-cols-1 gap-6 text-[14px] font-light text-[#acacad] sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, id) => (
              <div
                key={id}
                className="relative mx-auto flex h-[280px] w-[240px] items-center justify-center rounded-2xl border-2 border-[#28282a] p-3 transition-all hover:scale-105 hover:border hover:shadow-[0_10px_70px_rgba(14,35,60,1.00)]"
                style={{
                  backgroundImage: `url(${card.src})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="flex flex-col items-center justify-center text-center font-normal">
                  <h1 className="text-secondary text-h1 md:text-[80px]">
                    {card.data}
                  </h1>
                  <p className="text-secondary">{card.title}</p>
                  <p className="pt-2 text-center text-[13px] leading-4 font-thin">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Model */}
        <EngineSpecs2 />
        {/* Support */}
        <div className="bg-background relative z-99 mx-auto w-full">
          <section className="text-secondary bg-background relative z-99 mx-auto flex h-fit max-w-7xl flex-col items-start justify-between gap-10 px-4 pt-10 font-thin md:items-stretch md:gap-6 md:px-6 md:pt-20 lg:flex-row">
            <article className="flex w-full flex-col justify-evenly gap-6 md:gap-0 lg:w-[30%]">
              <div>
                <h4 className="text-h3 leading-9">
                  <span className="text-primary">Design,</span> Delivery and
                  <span className="text-primary"> Support</span>
                </h4>
                <h5 className="text-h5 mt-5 leading-6">
                  Mission & Engineering Excellence:
                </h5>
              </div>
              <div>
                <p className="text-[#acacad]">
                  Strategic design and expert support for optimized satellite
                  performance.
                </p>
              </div>
            </article>
            <article className="flex w-full flex-col gap-4 sm:flex-row md:w-auto">
              <div className="group relative flex h-auto w-full flex-col rounded-2xl bg-[#101010] text-center sm:h-[415px] sm:w-[315px]">
                <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#0f0f0f] p-5 ring-white/30 transition-all duration-300 group-hover:ring-[0.5px] md:p-9">
                  {/* Top-left corner glow */}
                  <div className="absolute -bottom-3 -left-3 h-24 w-24 rounded-full bg-white/25 opacity-0 blur-3xl transition-all duration-300 group-hover:opacity-100" />

                  {/* Bottom-right corner glow */}
                  <div className="absolute -top-3 -right-3 h-24 w-24 rounded-full bg-white/25 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
                  <Image
                    src="/images/engineering/D2.svg"
                    alt="cip1"
                    height={80}
                    width={80}
                  />
                  <h5 className="text-primary mt-4 text-[18px] font-normal">
                    Engineering Support
                  </h5>
                  <p className="mt-4 text-sm leading-4 font-thin text-[#acacad]">
                    Although our systems are built on a unified architecture, we
                    recognize that each satellite builder has distinct
                    requirements. That's why we offer personalized engineering
                    support to every customer.
                  </p>
                </div>
              </div>
              <div className="group relative flex h-auto w-full flex-col rounded-2xl bg-[#101010] text-center sm:h-[415px] sm:w-[315px]">
                <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#0f0f0f] p-5 ring-white/30 transition-all duration-300 group-hover:ring-[0.5px] md:p-9">
                  {/* Top-left corner glow */}
                  <div className="absolute -bottom-3 -left-3 h-24 w-24 rounded-full bg-white/25 opacity-0 blur-3xl transition-all duration-300 group-hover:opacity-100" />

                  {/* Bottom-right corner glow */}
                  <div className="absolute -top-3 -right-3 h-24 w-24 rounded-full bg-white/25 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
                  <Image
                    src="/images/engineering/D1.svg"
                    alt="cip1"
                    height={80}
                    width={80}
                  />
                  <h5 className="text-primary mt-4 text-[18px] font-normal">
                    Mission Design
                  </h5>
                  <p className="mt-4 text-sm leading-4 font-thin text-[#acacad]">
                    Whether it's orbit insertion, phasing, station keeping,
                    debris avoidance, life extension, momentum management,
                    de-orbiting, or all of the above, we're here to ensure your
                    mission's success.
                  </p>
                </div>
              </div>
            </article>
          </section>
          <section className="text-secondary z-99 mx-4 flex max-w-7xl flex-col items-start justify-between gap-6 rounded-2xl bg-[#090b0e] p-10 text-[22px] font-thin tracking-tight md:mx-auto md:my-20 md:flex-row md:items-center md:gap-0 md:p-10 md:text-[28px]">
            <div className="text-h4 md:text-h2 leading-tight font-thin md:leading-14">
              <p>Want to know more ?</p>
              <p>Reach out to us! </p>
            </div>

            <div className="w-full md:w-[50%]">
              <p className="text-p leading-4">
                Reach out to our team directly to understand the program, and
                address your quires one on one.
              </p>

              <button className="text-secondary mt-4 w-full rounded bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] font-[400]">
                <span className="text-secondary flex w-full justify-center rounded bg-gray-900 p-2 px-10 py-2 text-base">
                  Get In Touch
                </span>
              </button>
            </div>
          </section>
        </div>
      </main>

      <CTA />
      <Footer />
    </>
  );
}
