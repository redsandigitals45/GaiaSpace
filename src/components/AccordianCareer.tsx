"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface Data {
  title?: string | undefined;
  desc?: string;
  data?: Data[];
  requirements?: string[];
  tags?: string[];
}

const data: Data[] = [
  {
    title: "Propulsion Engineering",
    desc: "Join us as an intern in our propulsion engineering department to innovate, design, and propel the future capabilities of spacecraft propulsion.",
    data: [
      {
        title: "Electric Propulsion",
        desc: "Join our Electric Propulsion team as an intern and support the design, analysis, and optimization of advanced electric propulsion systems. Work alongside industry experts to enchance propulsion efficiency, improve system reliability, and contribute to the next-generation space technologies.",
        data: [
          {
            requirements: [
              "Completed Bachelor’s degree or currently pursing Masters or P.hd in Space Engineering or Physics.",
              " Basic knowledge on electric propulsion systems.",
              "Graduate level proficiency in Python or MatLab/Simulink for algorithm development.",
              "Experience in propulsion system research.",
              "Problem-solving skills with a proactive attitude.",
              "Ability to work with both hardware and software.",
            ],
            tags: ["#duration - 6 months", "#remote", "research & development"],
          },
        ],
      },
      {
        title: "Liquid Propulsion",
        desc: "Join our Liquid Propulsion team as an intern and support the design, analysis, and optimization of advanced electric propulsion systems. Work alongside industry experts to enchance propulsion efficiency, improve system reliability, and contribute to the next-generation space missions.",
        data: [
          {
            requirements: [
              "Completed Bachelor’s degree or pursuing Master’s or Ph.D. in Space Engineering, Aerospace Engineering or Mechanical Engineering.",
              "Basic knowledge of liquid propulsion systems, including feed systems, thrust control and vectoring, and regenerative cooling systems.",
              "Graduate-level proficiency in MATLAB/Simulink for algorithm development Ansys or FlowSim for flow simulation and Solidworks, CATIA or Fusion 360 for CAD modelling.",
              "Experience in propulsion system research and analysis.",
              "Strong problem-solving skills with a proactive attitude.",
              "Ability to work with both hardware and software in a multidisciplinary environment",
            ],
            tags: ["#duration - 6 months", "#remote", "research & development"],
          },
        ],
      },
    ],
  },
  {
    title: "Satellite Engineering",
    desc: "Join our Satellite Engineering team as an intern to innovate, design, and shape the future of cutting-edge spacecraft technology",
    data: [
      {
        title: "Structural Engineering",
        desc: "Join our Structural Engineering team as an intern and support the design, analysis, and optimization of spacecraft structures, focusing on advanced materials, load dynamics, and structural integrity.",
        data: [
          {
            requirements: [
              "Pursuing Bachelor’s (final year) or Master’s in Mechanical Engineering, Aerospace Engineering, or related fields.",
              "Basic knowledge of satellite and spacecraft structural design, including material selection, load and stress analysis.",
              "Proficiency in CAD software (e.g., SolidWorks, CATIA or FUSION 360) for modeling and design.",
              "Experience with Finite Element Analysis (FEA) tools for structural simulations.",
              "Strong understanding of structural integrity, vibration analysis, and thermal expansion in aerospace applications.",
              "Problem-solving skills with attention to detail and a proactive approach to complex engineering challenges.",
              "Ability to collaborate with cross-functional teams, integrating structural systems with other engineering domains (e.g., propulsion, thermal, avionics)",
            ],
            tags: ["#duration - 6 months", "#remote", "research & development"],
          },
        ],
      },
      {
        title: "Orbital Mechanics and Controls",
        desc: "Join our Orbital Mechnaics and Controls team as an intern and support the design, analysis, and optimization of spacecraft trajectories, orbital dynamics, and control algorithms.",
        data: [
          {
            requirements: [
              "Currently pursuing bachelor’s degree (final year) or Master’s in Aerospace Engineering or related fields.",
              "Basic knowledge of orbital mechanics, including trajectory planning, orbital dynamics, and satellite maneuvering.",
              "Experience with orbital simulations software like GMAT, AGI STK or FreeFlyer for spacecraft operations.",
              "Proficiency in programming languages such as Python, MATLAB, or Simulink for algorithm development and simulation.",
              "Understanding of attitude control, guidance systems, and navigation algorithms. Strong problem-solving skills and a proactive approach to developing innovative solutions for orbital operations.",
              "Ability to work with cross-functional teams and integrate orbital mechanics with mission planning, guidance, and control systems.",
            ],
            tags: ["#duration - 6 months", "#remote", "research & development"],
          },
        ],
      },
      {
        title: "Guidance and Navigations",
        desc: "Join our Guidance and Navigations team as a intern and play a pivitol role in developing, testing, and optimizing advanced guidance systems, precision navigation algorithms, and trajectory planning specifically for lunar lander missions, enabling the future of space missions.",
        data: [
          {
            requirements: [
              "Pursuing Bachelor’s degree or Master’s in Aerospace Engineering, Electronic and Communication Engineering.",
              "Basic knowledge of guidance, navigation, and control (GNC) systems, with a focus on target landing operations.",
              "Understanding of trajectory planning, descent dynamics, and precise landing algorithms for planetary missions.",
              "Experience with simulation tools such as MATLAB, Simulink, or custom GNC algorithm for mission design and testing.",
              "Basic knowledge on sensor integration and estimation algorithms (e.g., visual odometry, IMUs, LiDAR) for accurate position and velocity tracking during descent.",
              "Strong problem-solving skills with the ability to optimize GNC systems for successful planetary landings.",
              "Ability to collaborate with cross-functional teams, including propulsion, avionics, and mission control, to integrate landing systems effectively",
            ],
            tags: ["#duration - 6 months", "#remote", "research & development"],
          },
        ],
      },
    ],
  },
  {
    title: "General Internship",
    desc: "Become a General Intern with our team! Immerse yourself in the founder's office, where you'll play a key role in managing the team, developing content, and driving strategic initiatives. Gain practical experience in leadership, communication, and operational excellence, all within a dynamic and innovative setting.",
    data: [
      {
        title: "General Intern Program",
        desc: "Join our Guidance and Navigations team as a intern and play a pivitol role in developing, testing, and optimizing advanced guidance systems, precision navigation algorithms, and trajectory planning specifically for lunar lander missions, enabling the future of space missions.",
        data: [
          {
            requirements: [
              "Completed Bachelor’s degree in Aerospace, Business Administration, Engineering, or related fields.",
              "Strong organizational skills with the ability to manage multiple tasks and prioritize effectively.",
              "Excellent communication skills, both written and verbal, with the ability to engage with internal teams.",
              "Proficiency in Microsoft Office Suite (Word, Excel, PowerPoint) and familiarity with project management tools (e.g. Trello).",
              "Analytical mindset with the ability to contribute to strategic initiatives and data-driven decision-making.",
              "Strong problem-solving skills with a proactive attitude and the ability to take ownership of projects.",
              "Ability to work in a fast-paced environment and adapt to changing priorities.",
              "Strong interpersonal skills with the ability to collaborate across various departments and teams.",
            ],
            tags: ["#duration - 6 months", "#remote", "research & development"],
          },
        ],
      },
    ],
  },
];

interface AccordionItemProps {
  title?: string;
  desc?: string;
  data?: Data[];
  open: boolean;
  toggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  desc,
  data,
  open,
  toggle,
}) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <div className="accordionItem px-auto p-3 pb-0 md:p-6">
      <h2 className="text-primary flex items-center gap-6 pb-2 text-xl text-[18px] font-medium">
        {title}
        {/* <motion.img
          alt="Arrow"
          onClick={toggle}
          src="/Icon/Arrow.png"
          style={{ width: 15, height: 15, cursor: "pointer" }}
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        /> */}
      </h2>
      {desc && (
        <span className="text-[13px] leading-4 font-light text-[#d5d5d5]">
          {desc}
        </span>
      )}

      <AnimatePresence>
        {open && data && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
            className="desc px-1 md:px-6"
          >
            {data.map((item, idx) => (
              <div key={idx} className="">
                {item.data && (
                  <MenuItem
                    title={item.title}
                    desc={item.desc}
                    data={item.data}
                    open={idx === openDropdown}
                    toggleDropdown={() => toggleDropdown(idx)}
                  />
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const AccordianCareer = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[#030709]bg-[#030709] relative z-20 mx-4 -mt-[200px] max-w-[1000px] rounded-2xl border-[0.5px] border-[#26292c] bg-black md:rounded-[30px] lg:mx-auto xl:max-w-6xl">
      {data.map((item, index) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          desc={item.desc}
          data={item.data}
          open={true}
          toggle={() => toggle(index)}
        />
      ))}
    </section>
  );
};

interface MenuItemProps {
  title?: string;
  desc?: string;
  data?: Data[];
  open: boolean;
  toggleDropdown: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  title,
  desc,
  data,
  open,
  toggleDropdown,
}) => {
  return (
    <div
      className="menuItem my-4 rounded-xl bg-[#0c0f11] p-2 px-3 md:rounded-3xl md:p-4 md:px-5"
      onClick={toggleDropdown}
    >
      <h3 className="text-primary flex items-center justify-between gap-6 pb-2 text-[18px]">
        {title}
        <motion.img
          alt="Arrow"
          onClick={toggleDropdown}
          src="/icon/Arrow.png"
          style={{ width: 15, height: 15, cursor: "pointer" }}
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.7, type: "spring" }}
        />
      </h3>
      <span className="text-[13px] font-light text-[#d5d5d5]">{desc}</span>
      {/* <hr
        style={{ marginTop: "10px" }}
        className="border-[0.2px] border-gray-500"
      /> */}
      <AnimatePresence>
        {open && data && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="submenu px-4"
          >
            {data.map((subItem, index) => (
              <div key={index} className="pt-4">
                <h3>{subItem.title}</h3>
                <span className="leading-2 text-white">{subItem.desc}</span>
                <span className="text-[#948c8d]">Requirements:</span>
                <ul className="list-inside list-disc text-[12px]">
                  {subItem.requirements?.map((item, id) => (
                    <li key={id} className="text-[#d5d5d5]">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-col justify-between gap-4 text-white md:flex-row md:gap-0">
                  <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                    {subItem.tags?.map((item, id) => (
                      <div
                        key={id}
                        className="w-fit rounded-full bg-[#1b1b1a] px-4 py-2.5 text-[14px] font-light text-[#d5d5d5]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/form"
                    className="w-fit rounded-lg border border-[#26292c] bg-black px-5 py-2"
                  >
                    Apply
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
