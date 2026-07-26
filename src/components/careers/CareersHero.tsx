import Image from "next/image";

export function CareersHero() {
  return (
    <section
      className="relative mx-auto mt-10 flex h-[600px] max-w-[1500px] flex-col items-center justify-around overflow-hidden bg-transparent px-4 pt-[20px] pb-20 text-[#cbcbcb] md:min-h-[650px] md:pb-0 xl:h-[80vh] xl:px-0 xl:pt-[70px]"
      style={{
        backgroundImage: `url(/images/careersMain.png)`,
        backgroundSize: "contain",
        backgroundPosition: "50% 250px",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Edge fade overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-black to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black to-transparent" />
        <div className="from-background absolute inset-y-0 left-0 w-[20vw] bg-linear-to-r to-transparent" />
        <div className="from-background absolute inset-y-0 right-0 w-[20vw] bg-linear-to-l to-transparent" />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-around md:flex-row">
        <h4 className="text-h6 md:text-h5 mb-4 w-full text-center font-light md:mb-0 md:w-[40%] md:text-left xl:text-[28px]">
          Let's Shape{" "}
          <span className="text-primary">
            the Future <br /> of Sustainable
          </span>{" "}
          Space Technology
        </h4>
        <h6 className="w-full text-justify text-[12px] leading-4 font-light md:w-[40%] lg:text-sm">
          We're looking for passionate, forward-thinking individuals to join our
          mission of engineering the future of space propulsion. At GaiaSpace
          your work will definitely impact how we preserve and extend the life
          of critical spacecraft.
        </h6>
      </div>
      <h5 className="text-[28px] font-light">
        <span className="text-primary">Internship</span> and Co-Op
      </h5>

      <div className="overflow-hidden">
        <Image
          src="/images/home/satellite.webp"
          alt="satellite"
          width={60}
          height={60}
          className="dot absolute bottom-[20%] left-1/2 block -translate-x-1/2 -translate-y-1/2 sm:w-[40] md:mx-0 md:hidden lg:w-[50]"
        />
        <Image
          src="/images/home/satellite.webp"
          alt="satellite"
          width={60}
          height={60}
          className="dotMD absolute bottom-[20%] left-1/2 hidden -translate-x-1/2 -translate-y-1/2 sm:w-[40] md:mx-0 md:block md:w-[100]"
        />
      </div>
    </section>
  );
}
