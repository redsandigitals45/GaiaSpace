import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const roles = [
  { id: 1, desc: "Passionate about space technology." },
  { id: 2, desc: "Commited to environmental stability." },
  { id: 3, desc: "Innovative problem-solvers." },
  { id: 4, desc: "Collaborative team players." },
  { id: 5, desc: "Driven to make a lasting impact." },
];

export function JourneySection() {
  return (
    <>
      <article className="mx-auto flex max-w-[1300px] flex-col items-start justify-around px-4 pt-16 text-[#cbcbcb] sm:pt-[100px] lg:flex-row lg:gap-8 lg:px-6">
        {/* Journey */}
        <section className="flex w-full max-w-full flex-col items-center text-center lg:ml-[3vw] lg:max-w-[45%] lg:items-start lg:text-left">
          <h2 className="text-h3 mb-5 text-left font-thin text-white">
            Embark On Your Journey
          </h2>
          <p className="text-justify text-sm leading-4 tracking-tight">
            At Gaiaspace, your growth is our priority. Here, you'll find a place
            where collaboration sparks innovation, ideas turn into
            breakthroughs, and your contributions truly matter. Join a vibrant
            team committed to shaping the future—together, we'll reach new
            heights.
          </p>

          <div className="mt-10 w-full sm:mt-16">
            {roles.map((item, index) => (
              <motion.li
                key={index}
                className="mb-2 flex items-center gap-4 text-sm font-thin"
              >
                <Image
                  src="/icon/ArrowHead.png"
                  height={13}
                  width={13}
                  alt="ArrowHead"
                />
                {item.desc}
              </motion.li>
            ))}
          </div>
        </section>

        {/* Image */}
        <div className="relative mx-auto mt-10 w-full max-w-full lg:mt-0 lg:mr-[3vw] lg:max-w-[60%]">
          <Image
            src="/images/CareersPageJourneySection.png"
            height={300}
            width={600}
            alt="Journey"
            className="h-auto w-full"
          />
          <h2 className="text-h5 md:text-h3 mt-2 hidden text-center font-thin md:block">
            Who <span className="text-primary">We're Looking</span> For?
          </h2>
        </div>
      </article>

      <section className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-evenly gap-8 rounded-3xl bg-[#06080b] px-4 py-6 text-[#cbcbcb] sm:mt-20 sm:px-6 lg:flex-row lg:gap-[18%]">
        <h2 className="text-h5 text-center leading-6 font-thin tracking-tight text-white md:text-[42px] md:leading-10 lg:text-left">
          Dont See Your <br /> Perfect Role?
        </h2>

        <div className="w-full max-w-sm sm:max-w-md lg:max-w-[40%]">
          <span className="block text-center text-[12px] leading-4 font-thin">
            <p>
              We're always looking for exceptional talent. Send your resume and
              with a brief introduction about yourself to{" "}
              <a href="mailto:hr@gaiaspace.co.in" className="text-sm underline">
                hr@gaiaspace.co.in
              </a>
            </p>
            <div className="mt-2 flex justify-end">
              <p className="text-secondary flex items-end pr-2 text-sm font-light">
                <Link
                  href="/contact"
                  className="ml-auto w-fit cursor-pointer rounded-full bg-[#1b1b1a] px-2 py-0.5"
                >
                  Contact Us
                </Link>
              </p>
            </div>
          </span>
          <div className="my-2 flex items-center justify-between">
            <div className="border-primary w-[40%] border-t"></div>
            <span className="text-h3 text-primary">OR</span>
            <div className="border-primary w-[40%] border-t"></div>
          </div>
          <span className="block text-center text-[12px] leading-4 font-thin tracking-tighter">
            <p>
              Join our exclusive training program, designed to align your skills
              and expertise with the rigorous standards of the global space
              industry.
            </p>
            <div className="mt-2 flex justify-end">
              <p className="text-secondary flex items-end pr-2 text-sm font-light">
                <Link
                  href="/training_program"
                  className="ml-auto w-fit cursor-pointer rounded-full bg-[#1b1b1a] px-2 py-0.5"
                >
                  Training Program
                </Link>
              </p>
            </div>
          </span>
        </div>
      </section>
    </>
  );
}
