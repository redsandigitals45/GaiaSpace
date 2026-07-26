export function AboutHero() {
  return (
    <section className="grad mx-auto flex max-w-7xl flex-col items-center px-4 pt-[80px] text-[#cbcbcb] lg:pt-[140px]">
      {/* Header and Information */}
      <h1 className="text-h6 md:text-h4 lg:text-h2 my-5 mt-10 font-normal tracking-tight text-white md:my-0 md:font-light">
        Building A{" "}
        <span className="text-primary">Sustainable Space Economy</span>
      </h1>
      <h5 className="my-5 text-[22px] font-thin tracking-tight text-white">
        About Us
      </h5>
      <p className="max-w-[1120px] text-justify text-sm leading-4 font-light tracking-tighter">
        Incorporated in the INDIA in 2024, GAIA SPACE is at the forefront of
        advancing sustainable space technologies. Our journey began with
        pioneering research in efficient propulsion systems, laying the
        foundation for next-generation inspace mobility. As a leader in space
        innovation, we are engineering, a mission dedicated to providing
        real-time air traffic from space insights alongside cutting-edge
        propulsion solutions. From our headquarters in INDIA, we continue to
        push the boundaries of space sustainability, integrating Artificial
        Intelligence, advanced propulsion, and data driven insights to shape a
        safer and more efficient future.
      </p>
      <p className="my-10 text-center font-light tracking-tighter md:text-left">
        Unlocking the Future of Space potential for Economic and Technological
        Advancement.
      </p>
      {/* Cards */}
      <div className="mt-5 flex flex-col gap-10 lg:flex-row lg:gap-14">
        <div className="group relative mx-auto w-[90%] md:h-[300px] md:w-[420px]">
          <div className="relative h-full w-full overflow-hidden rounded-3xl bg-[#0f0f0f] p-7 ring-white/30 transition-all duration-300 group-hover:ring-[0.5px] md:p-9">
            {/* Top-left corner glow */}
            <div className="absolute -top-3 -left-3 h-24 w-24 rounded-full bg-white/25 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

            {/* Bottom-right corner glow */}
            <div className="absolute -right-3 -bottom-3 h-24 w-24 rounded-full bg-white/25 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

            <h5 className="text-h6 relative mb-4 text-center text-white">
              Vision
            </h5>
            <p className="relative text-justify text-sm/4 font-light text-white/80">
              We are dedicated to for to advancing in-space propulsion and
              next-generation satellite technologies that power a sustainable
              and efficient space economy. As the demand for space-based
              intelligence grows, we deliver innovative solutions that enhance
              satellite mobility, strengthen global connectivity through
              space-enabled air traffic management, and safeguard the long-term
              stability of operations in both the skies and beyond.
            </p>
          </div>
        </div>
        <div className="group relative mx-auto w-[90%] md:h-[300px] md:w-[420px]">
          <div className="relative h-full w-full overflow-hidden rounded-3xl bg-[#0f0f0f] p-7 ring-white/30 transition-all duration-300 group-hover:ring-[0.5px] md:p-9">
            {/* Top-left corner glow */}
            <div className="absolute -top-3 -left-3 h-24 w-24 rounded-full bg-white/25 opacity-0 blur-2xl transition-all duration-300 group-hover:opacity-100" />

            {/* Bottom-right corner glow */}
            <div className="absolute -right-3 -bottom-3 h-24 w-24 rounded-full bg-white/25 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

            <h5 className="text-h6 relative mb-4 text-center text-white">
              Mission
            </h5>
            <p className="relative text-justify text-sm/4 font-light text-white/80">
              Our mission is to advance space mobility and intelligence through
              next-generation propulsion systems and real-time air traffic
              management. By integrating AI-driven analytics with sustainable
              engineering, we enable precise satellite maneuverability, optimize
              aerospace operations, and expand global connectivity. Through
              these innovations, we are building a resilient space economy that
              ensures long-term stability, efficiency, and opportunity beyond
              Earth.
            </p>
          </div>
        </div>
      </div>

      <h5 className="md:text-h5 text-h6 mt-10 text-center leading-7 font-light tracking-tighter">
        <span className="text-primary">Together</span>, we'll traverse the space
        frontier, forging a better future.
      </h5>
    </section>
  );
}
