import Image from "next/image";

export function Partners() {
  return (
    <section className="mx-auto my-20 flex max-w-7xl flex-col px-4 text-[#cbcbcb] xl:px-0">
      <div>
        <h6 className="text-h6">
          Our <span className="text-primary">PARTNERS</span> and{" "}
          <span className="text-primary">INVESTORS</span>
        </h6>
        <h4 className="my-4 text-[40px]/10 font-light">
          We like to partner with <br /> visionaries
        </h4>
        <p className="text-sm font-light text-[#D5D5D5]">
          We engage with global partners to address critical challenges and
          ensure a thriving, future-ready space economy.
        </p>
      </div>
      <div className="from-background relative mt-5 flex w-full flex-col items-center justify-around gap-20 bg-linear-to-b to-[#101316] py-10 md:flex-row md:justify-center md:py-0">
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-[40vw] bg-linear-to-r to-transparent" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-[40vw] bg-linear-to-l to-transparent" />

        <Image
          src="/images/about/partner1.png"
          alt="partner"
          height={160}
          width={160}
        />
        <Image
          src="/images/about/partner2.png"
          alt="partner"
          height={110}
          width={110}
        />
        <Image
          src="/images/about/partner3.png"
          alt="partner"
          height={160}
          width={160}
        />
      </div>
    </section>
  );
}
