import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import ParticleCanvas from "@/src/components/ParticleCanvas";

const cards = [
  {
    title: "Electric Propulsion",
    imageSrc: "/images/home/GIT-RF.avif",
    description: "GIT-RF",
    href: "/git-rf-200",
  },
  {
    title: "High Performance Green Propulsion",
    imageSrc: "/images/home/HPGP.avif",
    description: "HPGP",
    href: "",
  },
  {
    title: "Hybrid Propulsion",
    imageSrc: "/images/home/HyRocEn.avif",
    description: "HyRocEn",
    href: "/hy-rocen",
  },
  {
    title: "Liquid Propulsion",
    imageSrc: "/images/home/VAC-LP.avif",
    description: "VAC-LP",
    href: "",
  },
];

export function Propulsion() {
  return (
    <div className="relative mx-auto flex flex-col justify-between px-4 pt-20 lg:h-[600px] lg:max-h-[600px] lg:max-w-7xl lg:flex-row xl:px-0">
      {/* Background particle canvas */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <ParticleCanvas />
      </div>
      {/* Left */}
      <div className="relative z-10 w-full lg:w-1/2">
        <h3 className="text-h4 text-secondary leading-10 font-thin md:w-[90%] lg:w-[70%]">
          Enabling Orbital Stewardship Through Next-Generation Propulsion
        </h3>
        <p className="text-p text-primary mt-2 w-[95%] leading-5 md:w-[70%]">
          We&apos;re also laying the groundwork to sustain space infrastructure
          with capabilities in space propulsion.
        </p>
        <div className="mt-5 w-full md:mt-10 md:w-[70%]">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1" className="pb-3">
              <AccordionTrigger className="data-[state=open]:text-primary text-secondary border-secondary data-[state=open]:border-primary border-l-2 pb-2 pl-3 text-lg leading-4 font-thin xl:leading-2">
                Advancing Core Propulsion Techonologies
              </AccordionTrigger>
              <AccordionContent className="text-secondary flex flex-col gap-4 pl-4 text-sm font-light text-balance">
                <p>
                  We design and deliver state-of-the-art ABEP, electric, and
                  green propellant chemical thrusters to extend satellite
                  operational lifetimes, achieve very low operating altitudes,
                  enable precise station-keeping, and support complex orbital
                  transfers, all while drastically reducing propellant mass.
                  Leveraging non-toxic, high-performance propellants to minimise
                  environmental impact, simplify ground handling, and enhance
                  mission flexibility
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="pb-3">
              <AccordionTrigger className="data-[state=open]:text-primary text-secondary border-secondary data-[state=open]:border-primary border-l-2 pb-2 pl-3 text-lg leading-4 font-thin md:leading-2">
                Enhancing Orbital Agility
              </AccordionTrigger>
              <AccordionContent className="text-secondary flex flex-col gap-4 pl-4 text-sm font-thin text-balance">
                <p>
                  By integrating advanced guidance, navigation, and control
                  (GNC) algorithms, our propulsion systems enable autonomous
                  maneuvering and collision avoidance, giving satellites and
                  servicing vehicles the agility to adapt to changing mission
                  needs and orbital debris threats. Precision thrust control and
                  fine-grained modulation further ensure reliable orbit
                  maintenance, rapid repositioning, and seamless support for
                  proximity operations and in-orbit servicing.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="pb-3">
              <AccordionTrigger className="data-[state=open]:text-primary text-secondary border-secondary data-[state=open]:border-primary border-l-2 pb-2 pl-3 text-lg leading-4 font-thin md:leading-2">
                Extending Reach Beyond Earth Orbit
              </AccordionTrigger>
              <AccordionContent className="text-secondary flex flex-col gap-4 pl-4 text-sm font-thin text-balance">
                <p>
                  High thrust and specific impulse solutions combine scalable
                  propulsion modules, mission adaptable architectures to support
                  deep space missions including lunar and cislunar transfer
                  while optimized power processing units and advanced thermal
                  management systems ensure sustained, reliable performance even
                  in the most challenging environments.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Right — card grid */}
      <div className="mt-8 grid grid-cols-2 grid-rows-2 gap-3 md:mt-0 md:grid-cols-4 md:grid-rows-1 md:gap-2.5 lg:w-1/2 lg:grid-cols-2 lg:grid-rows-2">
        {cards.map((card, id) => (
          <div
            key={id}
            className="bg-highlight group flex h-[220px] flex-col justify-between rounded-lg p-2 transition-all hover:brightness-150 sm:h-[260px] md:h-[195px] md:w-[180px] lg:h-auto lg:w-auto"
          >
            <h6 className="text-secondary text-xs font-light">{card.title}</h6>
            <div className="mx-auto w-fit">
              <img
                src={card.imageSrc}
                className="h-[130px] md:h-[120px] lg:h-[145px]"
              />
              <p className="text-secondary -mt-2 text-center text-xs font-light">
                {card.description}
              </p>
            </div>
            <p className="text-secondary flex items-end pr-2 text-sm font-light">
              <Link
                href={card.href}
                className="ml-auto w-fit cursor-pointer rounded-full px-2 py-1 transition-colors group-hover:bg-black/50 md:px-3"
              >
                Know more
              </Link>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
