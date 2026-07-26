import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactMap() {
  const [location, setLocation] = useState("office");
  return (
    <div className="overflow-clip px-4 xl:px-0">
      <section className="text-secondary mx-auto max-w-7xl font-thin">
        {/* Header */}
        <h3 className="text-h4 md:text-h3 text-center">
          Contact <span className="text-primary">Us.</span>
        </h3>
        <h4 className="text-h6 md:text-h4 mt-10">
          We are located <span className="text-primary">in.</span>
        </h4>

        {/* Map */}
        <div
          className="relative mx-auto w-full max-w-[1000px]"
          style={{ aspectRatio: "1000 / 300" }}
        >
          <Image
            src={
              location === "office"
                ? "/images/contact/office.png"
                : "/images/contact/lab.png"
            }
            alt=""
            fill
            className="object-contain"
          />
          <MapPin
            className={
              location === "office"
                ? "text-primary absolute hidden -translate-x-1/2 -translate-y-1/2 animate-bounce md:block"
                : "text-primary absolute hidden -translate-x-1/2 -translate-y-1/2 animate-bounce md:block"
            }
            style={{
              top: `${location === "office" ? "45%" : "31%"}`,
              left: `${location === "office" ? "66.55%" : "64.8%"}`,
            }}
          />
          <MapPin
            className={
              location === "office"
                ? "text-primary absolute -translate-x-1/2 -translate-y-1/2 animate-bounce md:hidden"
                : "text-primary absolute -translate-x-1/2 -translate-y-1/2 animate-bounce md:hidden"
            }
            style={{
              top: `${location === "office" ? "40%" : "26%"}`,
              left: `${location === "office" ? "66.55%" : "64.8%"}`,
            }}
          />
        </div>

        <div className="text-sm text-[#948c8d]">
          <p className="flex w-fit items-center justify-center gap-2">
            <Image
              src="/images/contact/mail.png"
              alt=""
              height={15}
              width={15}
            />
            info@gaiaspace.co.in
          </p>
          <p className="flex w-fit items-center justify-center gap-2">
            <Image
              src="/images/contact/phone.png"
              alt=""
              height={15}
              width={15}
            />
            +6969420420
          </p>
        </div>

        <div className="my-5 flex flex-col gap-2 md:flex-row md:gap-10">
          <div className="rounded-xl bg-[#011019] p-5">
            <div
              className="flex items-center gap-2 text-[18px]"
              onClick={() => setLocation("office")}
            >
              <div
                className={`${location === "office" ? "bg-primary" : "bg-background"} ml-[2px] h-2 w-2 rounded-full ring-[0.5px] ring-[#8f8f8f] ring-offset-3 ring-offset-black`}
              />
              Registered Office
            </div>
            <p className="mt-2 text-sm font-thin text-[#afb2b4]">
              V Roy, Garacharma, Sri Vijaya Puram, South Andaman, Andaman &
              Nicobar Island, 744105, India
            </p>
          </div>
          <div className="rounded-xl bg-[#011019] p-5">
            <div
              className="flex items-center gap-2 text-[18px]"
              onClick={() => setLocation("lab")}
            >
              <div
                className={`${location === "office" ? "bg-background" : "bg-primary"} ml-[2px] h-2 w-2 rounded-full ring-[0.5px] ring-[#8f8f8f] ring-offset-3 ring-offset-black`}
              />
              Research and Development Lab
            </div>
            <p className="mt-2 text-sm font-thin text-[#afb2b4]">
              DRI, Uttaranchal University, near Prem Nagar, Dehradun,
              Uttarakhand, 2300047, India
            </p>
          </div>
        </div>

        <p className="text-thin mx-auto my-10 text-center text-sm leading-5 md:w-1/2 md:text-[18px]">
          Have a question, seeking assistance, or exploring partnership
          opportunities? We&apos;re here to support you every step of the way.
        </p>

        <div className="mx-auto my-10 flex max-w-7xl flex-col-reverse items-center gap-8 rounded-xl bg-[#090b0e] px-6 py-8 text-[#cbcbcb] sm:px-10 md:flex-row-reverse md:justify-evenly md:gap-0 md:py-6">
          <div className="flex flex-col justify-center gap-2 text-[18px]">
            <Link
              href="/contact"
              className="rounded-full bg-[#1b1b1a] px-4 py-2 text-center"
            >
              Explore Opportunities
            </Link>
            <Link
              href="/training_program"
              className="rounded-full bg-[#1b1b1a] px-4 py-2"
            >
              Training Program
            </Link>
          </div>

          {/* Divider — horizontal on mobile, vertical on md+ */}
          {/* <div className="w-full border-t border-white/10 md:h-32 md:w-px md:border-t-0 md:border-l" /> */}

          {/* Right */}
          <div className="text-h6 flex w-full flex-col justify-center gap-6 p-5 text-center md:w-1/2 md:gap-10 md:p-10 md:text-[26px]">
            <p>
              Want to Join us and <span className="text-primary">lead</span> the
              way in sustainable{" "}
              <span className="text-primary">space engineering.</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
