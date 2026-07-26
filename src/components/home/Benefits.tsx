import Link from "next/link";
import ParticleCanvas from "../ParticleCanvas";

const benefits = [
  {
    title: "HYROCEN",
    imageSrc: "/images/home/Benefit01.webp",
    visible: true,
  },
  {
    title: "VAC-LP",
    imageSrc: "/images/home/Benefit01.webp",
    visible: false,
  },
  {
    title: "GIT-RF",
    imageSrc: "/images/home/Benefit01.webp",
    visible: false,
  },
  {
    title: "HPGP",
    imageSrc: "/images/home/Benefit01.webp",
    visible: false,
  },
  {
    title: "ATLAS",
    imageSrc: "/images/home/Benefit01.webp",
    visible: false,
  },
];

export function Benefits() {
  return (
    <div className="mx-auto max-w-7xl px-4 xl:px-0">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <ParticleCanvas />
      </div>
      {/* header */}
      <div className="mb-10 text-center md:mb-20">
        <h3 className="text-secondary text-h5 leading-5 font-normal md:text-[40px] md:leading-15">
          We help Earth benefit from space
        </h3>
        <h5 className="text-primary fon t-[400] mt-3 text-[15px] leading-4 text-pretty md:mt-0">
          Discover how GAIA SPACE transforms innovation in orbit into real-world
          impact on Earth.
        </h5>
      </div>
      {/* content */}
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 md:flex-row md:px-0">
        {/* left */}
        <div className="grid w-full grid-cols-4 grid-rows-2 gap-2 md:w-1/2 md:grid-cols-3 lg:grid-cols-4">
          {benefits.map((benefit, id) => (
            <div key={id}>
              <div className="relative mx-auto h-[90px] w-[90px] sm:h-[110px] sm:w-[110px] xl:h-[140px] xl:w-[140px]">
                <img
                  src={benefit.imageSrc}
                  className={`h-full w-full ${benefit.visible === true ? "transition-all duration-300 hover:brightness-200" : "blur-sm"}`}
                />

                <p
                  className={`${benefit.visible === false ? "flex" : "hidden"} absolute inset-0 items-center justify-center text-center text-[12px] font-thin text-white`}
                >
                  {benefit.title}
                </p>
              </div>
              <p
                className={`${benefit.visible === true ? "block" : "hidden"} text-center text-[12px] font-thin text-white`}
              >
                {benefit.title}
              </p>
            </div>
          ))}
        </div>

        {/* divider — horizontal on mobile, vertical on desktop */}
        <div className="bg-secondary my-6 h-0.5 w-full shrink-0 md:mx-6 md:my-0 md:h-[360px] md:w-0.5" />

        {/* right */}
        <div className="w-full md:ml-4 md:w-1/2">
          <h3 className="text-secondary md:text-h3 mb-5 text-[28px] font-thin sm:text-[34px]">
            Who are we ?
          </h3>
          <p className="text-secondary sm:text-p text-[14px] leading-[20px] font-light tracking-tighter md:text-[18px] md:leading-[22px]">
            At GAIA SPACE, we see space not as a distant frontier, from
            next-generation in-space propulsion to real-time air traffic
            insights from orbit, we create technologies that keep satellites
            moving efficiently, skies safer, and global networks more connected.
            <br />
            <br />
            Guided by innovation and sustainability, we use advanced engineering
            to turn space technology into real-world solutions, protecting our
            environment and shaping a smarter, more resilient future for Earth.
          </p>
          <div className="mt-4 flex w-full justify-end">
            <div className="flex w-fit rounded-sm bg-linear-to-r from-[#9139a5] to-[#520f9a] p-[2px] shadow-lg">
              <Link
                href="/contact"
                className="text-h6 rounded-sm bg-black px-2 py-1 text-white"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
