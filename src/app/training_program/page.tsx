import { CTA } from "@/src/components/CTA";
import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const card = [
  {
    review:
      "“An exceptionally well-structured program that simplifies complex hybrid propulsion conecpts and makes them highly applicable.”",
    name: "Rahul Sharma,",
    company: "Aerosopace Engineering Student",
  },
  {
    review:
      "“A perfect blend of theoretical depth and practical insight, supported by highly knowledgeable mentors.”",
    name: "Priya Nair,",
    company: "Mechanical Engineering Undergraduate",
  },
  {
    review:
      "“Effectively bridges academic learning with real-world rocket engineering applications.”",
    name: "Sneha Verma,",
    company: "Aerospace Engineering Intern",
  },
  {
    review:
      "“Insightful sessions with a strong emphasis on practical understanding and industry relevance.”",
    name: "Karthik Iyer,",
    company: "Mechanical Engineering Student",
  },
];

export default function TrainingPrograms() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-secondary">
        {/* Header */}
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
          <h3 className="text-h3 absolute top-1/2 z-20 -translate-y-1/2 px-10 leading-10 font-normal text-shadow-xs md:font-thin">
            <span className="text-primary">Engineering</span> Thrust, <br />
            Enabling
            <span className="text-primary"> Exploration</span>
          </h3>
        </main>

        {/* About */}
        <section className="mx-auto max-w-7xl px-4 font-thin xl:px-0">
          <h4 className="text-h4 mx-auto mb-10 w-fit">
            About the Training Program
          </h4>
          <p className="mb-10 text-justify text-[15px] tracking-tight text-[#acacad]">
            ITSP (Industrial Training for Space Propulsion) is a specialized
            training program designed to equip engineers, researchers, and STEM
            professionals with industry-grade expertise in space propulsion
            technologies. Focused on hybrid rocket propulsion systems, ITSP
            blends theoretical knowledge with hands-on experience in engine
            design, manufacturing, testing, and system integration. <br />
            <br />
            Enrolled candidates gains mission-ready skills aligned with
            aerospace industry standards, ensuring they are prepared for
            real-world applications in rocket propulsion, spacecraft
            engineering, and advanced thrust systems.
          </p>

          <h5 className="text-h5 mb-5 font-medium">
            WHY <span className="text-primary">ITSP</span> ?
          </h5>

          <p className="text-justify text-[15px] tracking-tight text-[#acacad]">
            This program combining hands-on projects, real-world simulations,
            and expert-led sessions. With a focus on design, manufacturing, and
            system integration, the program bridges academia and industry,
            equipping candidates with cutting-edge skills and career-ready
            expertise in space propulsion.
          </p>
          <div className="mt-15 flex w-full justify-between md:justify-evenly">
            <button className="text-secondary rounded bg-linear-to-r from-blue-500 to-purple-500 p-px font-normal lg:w-[450px]">
              <span className="text-secondary flex w-full justify-center rounded bg-gray-900 p-2 px-12 py-2 text-base lg:px-30">
                Brochure
              </span>
            </button>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded bg-linear-65 from-purple-700 to-teal-400 px-8 py-1 lg:w-[450px]"
            >
              Register Here
            </Link>
          </div>
        </section>

        {/* Reviews */}
        <section className="mx-auto mt-40 max-w-7xl px-4 font-thin xl:px-0">
          {/* Header */}
          <h4 className="text-h4 mx-auto w-fit text-center md:text-left">
            Our Previous Training Session
          </h4>
          <h5 className="text-h6 my-10 w-full md:w-[45%] md:text-[22px]">
            Engineering{" "}
            <span className="text-primary">
              Tomorrow&apos;s Space Scientists
            </span>{" "}
            Through Knowledge, Training, and Innovation
          </h5>

          {/* Card */}
          <h5 className="text-h6 md:text-h5 mx-auto mt-15 w-fit">
            Hear it from our students
          </h5>
          <div className="mx-auto mt-10 grid min-h-[280px] max-w-5xl grid-cols-1 items-stretch gap-10 md:grid-cols-2 lg:grid-cols-3">
            {card.map((card, id) => (
              <div
                key={id}
                className={`group col-span-1 mx-auto w-[280px] rounded-xl border-[0.5px] border-[#262727] bg-[#050505] p-4 transition-transform duration-300 hover:scale-105 ${id === 3 ? "lg:col-start-2" : ""}`}
              >
                <Image src="/icon/apst.png" alt="apst" height={40} width={40} />
                <p className="p-4 text-sm tracking-tight">{card.review}</p>
                <div className="group-hover:text-p p-4 text-sm tracking-tight text-[#585858] transition-all duration-300">
                  <p>{card.name}</p>
                  <p>{card.company}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Last */}
        <section
          className="mx-auto max-w-[1600px] bg-cover bg-center px-4 font-thin lg:px-0 xl:my-30"
          style={{
            backgroundImage: `url("/images/training/ElevateDiscovery.png")`,
          }}
        >
          <div className="mx-auto flex max-w-7xl flex-col items-end px-6 pt-20 md:pt-32">
            <div className="text-right">
              <h6 className="lg:text-h5 text-sm md:text-base">Be a Pioneer</h6>

              <h3 className="mt-2 text-2xl leading-tight sm:text-3xl md:text-4xl md:leading-12 lg:text-[40px]">
                Elevate Discovery, <br className="hidden sm:block" />
                Transform Our World
              </h3>
            </div>
          </div>

          <section className="text-secondary bg-background/40 mx-auto mt-20 mb-20 flex max-w-7xl flex-col gap-10 rounded-xl border border-white/10 p-6 text-lg font-thin tracking-tight shadow-xl backdrop-blur-md sm:p-8 md:mt-32 md:flex-row md:items-center md:justify-between md:p-12 md:text-xl lg:mt-40 lg:p-15 lg:text-[28px]">
            <div className="text-h4 leading-snug md:w-1/2 md:leading-14">
              <p>
                Required further <br className="hidden md:block" /> assistance,
                reach out to us.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full rounded-2xl bg-[#666666] md:h-auto md:w-px md:self-stretch" />

            <div className="md:w-1/2">
              <p className="md:text-p mb-5 text-base">
                Reach out to our training coordinator directly to understand the
                program, and address your queries one on one.
              </p>

              <Link
                href="/contact"
                className="flex w-full items-center justify-center gap-2 rounded bg-linear-to-r from-purple-700 to-teal-400 px-4 py-2 text-base transition hover:opacity-90 md:text-lg"
              >
                Reach Out
              </Link>
            </div>
          </section>
        </section>
      </main>
      <CTA />
      <Footer />
    </>
  );
}
