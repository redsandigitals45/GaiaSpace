import Link from "next/link";

export function Invitation() {
  return (
    <section className="mx-auto mt-[100px] flex max-w-6xl flex-col items-center px-4 text-[#cbcbcb]">
      <div className="flex w-full flex-col items-center gap-8 rounded-xl bg-[#090b0e] px-6 py-8 sm:px-10 md:flex-row md:justify-evenly md:gap-0 md:py-6">
        {/* Left */}
        <div className="flex w-full flex-col items-center gap-4 md:w-[30%]">
          <h3 className="text-[32px] lg:text-[40px]">
            An <span className="text-primary">Invitation</span>
          </h3>
          <p className="text-[14px] font-[300]">Join us in our mission</p>
          <Link
            href="/contact"
            className="w-full rounded-[10px] border-[0.5] border-white/50 py-2 text-center text-sm"
          >
            Get In Touch
          </Link>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <Link
              href="/careers"
              className="rounded-full bg-[#1b1b1a] px-4 py-2"
            >
              Internship Co-op
            </Link>
            <Link
              href="/training_program"
              className="rounded-full bg-[#1b1b1a] px-4 py-2"
            >
              Training Program
            </Link>
          </div>
        </div>

        {/* Divider — horizontal on mobile, vertical on md+ */}
        <div className="w-full border-t border-white/10 md:h-32 md:w-px md:border-t-0 md:border-l" />

        {/* Right */}
        <div className="flex w-full flex-col justify-center gap-6 text-center text-sm md:w-1/2 md:gap-10 md:text-left">
          <p>
            Join us on this journey. Whether you're a potential partner,
            customer, or a young professional with a passion for exploration and
            innovation, there is a place for you in our mission.
          </p>
          <p>Together, we're propelling humankind to and for the beyond.</p>
        </div>
      </div>
    </section>
  );
}
