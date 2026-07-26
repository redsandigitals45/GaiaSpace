import Image from "next/image";

export function Newsroom() {
  return (
    <section className="mx-6 mt-20 flex max-w-7xl flex-col items-center text-[#cbcbcb] md:mx-auto">
      <h3 className="text-h5 font-thin md:text-[40px]">In The News</h3>
      <p className="text-center text-[14px] leading-3 font-thin text-[#b7b8b8]">
        Our mission has garnered substantial media attention, including major
        journals such as
      </p>
      {/* News */}
      <div className="mt-5 grid grid-cols-2 gap-10 text-sm md:w-[80%]">
        {/* First */}
        <a
          href="https://news.uudoon.in/2025/03/uttaranchal-university-signs-mou-with.html"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 md:col-span-1"
        >
          <div className="relative h-[250] md:h-[300]">
            <Image
              src="/images/about/newsroom1.png"
              alt="news"
              fill
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <h6 className="mt-1">20 March, 2025</h6>
          <p>Interactive session with the founder of Gaia Space Pvt. Ltd</p>
        </a>
        {/* Second */}
        <a
          href="https://news.uudoon.in/2025/03/interactive-session-with-founder-of.html"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-2 md:col-span-1"
        >
          <div className="relative h-[250] md:h-[300]">
            <Image
              src="/images/about/newsroom2.png"
              alt="news"
              fill
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <h6 className="mt-1">20 March, 2025</h6>
          <p>Interactive session with the founder of Gaia Space Pvt. Ltd</p>
        </a>
      </div>
      {/* Button */}
      <button className="font- mt-10 rounded-[10px] border-[0.5] border-white/60 px-30 py-2 text-lg text-white">
        Read More
      </button>
    </section>
  );
}
