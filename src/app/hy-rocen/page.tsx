import { CTA } from "@/src/components/CTA";
import EngineSpecs from "@/src/components/engineering/EngineSpecs";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import TransitionLinks from "@/src/components/TransitionLinks";
import Image from "next/image";

const cards = [
  {
    image: "/images/engineering/ClipA1.png",
    title: "Education Institution Support",
    desc: "Comprehensive support for educational institutions to develop safe, cost-effective, in-house propulsion test setups for hands-on learning and research.",
    src: "/images/engineering/S1.png",
  },
  {
    image: "/images/engineering/ClipA2.png",
    title: "Mission Design",
    desc: "Comprehensive support for sounding rockets with hybrid propulsion or payload deployment, from design to launch, ensuring optimal performance, reliability, and efficiency.",
    src: "/images/engineering/S2.png",
  },
  {
    image: "/images/engineering/ClipA3.png",
    title: "Training Program",
    desc: "Our exclusive student training program is designed for hands-on industry standard learning with testing of hybrid propulsion technology.",
    src: "/images/engineering/S3.png",
  },
];

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-secondary text-shadow-xs">
        <main className="relative mx-auto flex h-screen max-w-[1400px]">
          <video
            src="/thrusterVideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="h-full w-full scale-x-[-1] object-cover"
          />

          {/* Edge fade overlays */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black to-transparent" />
            <div className="from-background absolute inset-y-0 left-0 w-[20vw] bg-linear-to-r to-transparent" />
            <div className="from-background absolute inset-y-0 right-0 w-[20vw] bg-linear-to-l to-transparent" />
          </div>

          {/* Heading */}
          <div className="absolute top-1/2 z-20 -translate-y-1/2 px-10 font-normal text-shadow-xs md:font-thin">
            <h3 className="text-[40px] leading-10 font-medium">HY-RocEn </h3>
            <h6 className="text-primary mt-4 text-[22px]">
              HYBRID ROCKET ENGINE
            </h6>
            <p className="text-sm md:w-[45%]">
              We are redefining hybrid propulsion that deliver exceptional
              performance, reliability, and efficiency prioritizing safety,
              cost-effectiveness, and environmental sustainability.
            </p>
          </div>
        </main>

        {/* Engine Specification */}
        <EngineSpecs />

        {/* Cards */}
        <section className="text-secondary mx-auto max-w-7xl px-4 pt-10 pb-0 md:pt-20 lg:px-0">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-h4 my-4 leading-12 font-thin tracking-tight">
              Our Services
            </h1>
          </div>
          {/* card */}
          <div className="mx-auto my-10 flex max-w-4xl flex-col items-center justify-between gap-4 text-[14px] font-light text-[#acacad] md:flex-row md:gap-0">
            {cards.map((card, id) => (
              <div
                key={id}
                className="relative flex h-[280] w-[240] items-center justify-center rounded-2xl border-2 border-[#28282a] p-2 transition-all hover:scale-105 hover:border hover:shadow-[0_10px_70px_rgba(14,35,60,1.00)] lg:h-[300] lg:w-[270]"
                style={{
                  backgroundImage: `url(${card.src})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="flex flex-col items-center justify-center text-center font-normal">
                  <Image
                    src={card.image}
                    alt={card.title}
                    height={130}
                    width={130}
                  />
                  <p className="text-secondary">{card.title}</p>
                  <p className="pt-2 text-center text-[14px] leading-4 font-thin">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Get in touch section */}
        <section className="mx-auto mt-20 flex w-[70%] max-w-6xl flex-col items-center gap-8 border border-gray-800 bg-gray-950 p-6 text-center text-[22px] font-thin tracking-tight text-[#cbcbcb] sm:p-8 sm:text-[28px] md:w-full md:flex-row md:justify-around md:gap-0 md:p-10">
          <div className="flex md:w-1/2 md:max-w-1/2">
            <p className="text-center md:text-left">
              Want to know more? <br /> Reach out to us!
            </p>
          </div>

          {/* Divider */}
          <div className="h-px w-full rounded-2xl bg-[#666666] md:h-auto md:w-0.5 md:self-stretch" />

          <div className="flex flex-col items-center gap-2 md:w-1/2 md:max-w-1/2">
            <p className="text-center text-sm">
              Reach out to our team directly to understand the program <br />
              and address your queries one on one.
            </p>
            <div className="flex gap-4">
              <TransitionLinks
                prefetch
                href="/contact"
                className="text-p mt-2 flex items-center gap-2 rounded bg-linear-65 from-purple-700 to-teal-400 px-4 py-0 tracking-tight"
              >
                <span>Contact Us</span>
              </TransitionLinks>

              <TransitionLinks
                prefetch
                href="/training_program"
                className="text-p mt-2 flex items-center gap-2 rounded bg-linear-65 from-purple-700 to-teal-400 px-4 py-0 tracking-tight"
              >
                <span>Training Program</span>
              </TransitionLinks>
            </div>
          </div>
        </section>
        <CTA />
      </main>
      <Footer />
    </>
  );
}

<div className="pointer-events-none absolute inset-0">
  {/* Top */}
  {/* <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent" /> */}
  {/* Bottom */}
  {/* <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" /> */}
  {/* Left */}
  <div className="from-background absolute inset-y-0 left-0 w-[20vw] bg-linear-to-r to-transparent" />
  {/* Right */}
  <div className="from-background absolute inset-y-0 right-0 w-[20vw] bg-linear-to-l to-transparent" />
</div>;
