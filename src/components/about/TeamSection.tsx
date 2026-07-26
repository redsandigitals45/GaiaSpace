"use client";
import Image from "next/image";
import { TeamCarousel } from "./TeamCarousel";

export function TeamSection() {
  const leaders = [
    {
      src: "/images/about/team/MD.avif",
      alt: "MD",
      name: "Dr. Sachin Shrivastav",
      role: "Managing Director",
      link: "https://www.linkedin.com/in/prof-dr-sachin-srivastava-70873692/",
      size: 200,
      featured: true,
    },
    {
      src: "/images/about/team/CEO.avif",
      alt: "CEO",
      name: "Shubham Haldar",
      role: "Chief Executive Officer",
      link: "https://www.linkedin.com/in/subham-haldar-69794a1b7/",
      size: 200,
      featured: true,
    },
  ];

  const members = [
    {
      src: "/images/about/team/ADM.avif",
      alt: "ADM",
      name: "Dr. Rajesh Singh",
      link: "https://www.linkedin.com/in/dr-rajeshsingh/",
      role: "Advisory Board Member",
    },
    {
      src: "/images/about/team/SBA.avif",
      alt: "SBA1",
      name: "Bhagyashree Singh",
      link: "",
      role: "Strategic Business Advisor",
    },
    {
      src: "/images/about/team/STA.png",
      alt: "SBA2",
      name: "Dr. Amit Thakur",
      link: "https://www.linkedin.com/in/dr-amit-thakur-67a1a373/",
      role: "Senior Technical Advisor",
    },
    {
      src: "/images/about/team/HR.png",
      alt: "SBA3",
      name: "Deepak Rai",
      link: "https://www.linkedin.com/in/deepak-rai-9b7a19253/",
      role: "Human Resource",
    },
    {
      src: "/images/about/team/OD.avif",
      alt: "OD",
      name: "Rajeeth Chetty",
      link: "https://www.linkedin.com/in/rajeeth-chetty/",
      role: "Head of Operations",
    },
    {
      src: "/images/about/team/TechnicalLead.png",
      alt: "SBA4",
      name: "Divij Arora",
      link: "https://www.linkedin.com/in/divij-aroraa/",
      role: "Technical Advisor",
    },
  ];

  return (
    <>
      <section className="mx-auto my-10 flex h-full max-w-7xl flex-col items-center px-4 text-[#cbcbcb]">
        <h4 className="text-h4 text-center font-thin text-white">
          People behind the <span className="text-primary">Mission</span>
        </h4>

        <div className="mt-10 w-full max-w-6xl rounded-xl bg-[#0f0f0f] p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {leaders.map((person) => (
              <div
                key={person.alt}
                className="bg-highlight flex flex-col items-center justify-around gap-4 rounded-lg px-4 py-8"
              >
                <Image
                  src={person.src}
                  alt={person.alt}
                  width={person.size}
                  height={person.size}
                  className="aspect-square h-36 w-36 rounded-full object-cover object-top-right sm:h-44 sm:w-44 md:h-[200px] md:w-[200px]"
                />
                <p className="text-p text-center font-light">{person.name}</p>
                <p className="w-fit border-r-[2] border-l-[2] px-2 text-center leading-4 font-semibold">
                  {person.role}
                </p>
                <a href={person.link} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/icon/Linkedin.png"
                    alt="Instagram"
                    width={40}
                    height={40}
                  />
                </a>
              </div>
            ))}
          </div>

          {/* Team members  */}
          <div className="mt-3 grid grid-cols-2 gap-3 md:grid-cols-3">
            {members.map((person, i) => (
              <div
                key={`${person.alt}-${i}`}
                className="bg-highlight flex flex-col items-center justify-around gap-3 rounded-lg px-2 py-4"
              >
                <Image
                  src={person.src}
                  alt={person.alt}
                  width={130}
                  height={130}
                  className="aspect-square h-32 w-32 rounded-full object-cover object-top-right md:h-[130px] md:w-[130px]"
                />
                <p className="sm:text-p text-center text-[12px] font-light md:text-sm">
                  {person.name}
                </p>
                <p className="w-fit px-2 text-center text-[12px] leading-4 font-medium md:text-sm md:font-semibold">
                  {person.role}
                </p>
                <a href={person.link} target="_blank">
                  <Image
                    className="md:h-[35px] md:w-[35px]"
                    src="/icon/LD.png"
                    alt="Instagram"
                    width={35}
                    height={35}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TeamCarousel />
    </>
  );
}
