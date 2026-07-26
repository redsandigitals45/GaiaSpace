"use client";
import TransitionLinks from "./TransitionLinks";
import Image from "next/image";
import Nav from "./Nav";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  {
    id: 1,
    title: "About Us",
    href: "/about",
  },
  {
    id: 2,
    title: "Missions",
    href: "/missions",
  },
  {
    id: 3,
    title: "Engineering",
    href: "/engineering",
  },
  {
    id: 4,
    title: "Careers",
    href: "/careers",
  },
  {
    id: 5,
    title: "Training Program",
    href: "/training_program",
  },
];

export default function Navbar() {
  const [isEngineeringHovered, setIsEngineeringHovered] = useState(false);
  return (
    <>
      <nav className="absolute top-0 left-0 flex min-h-[70px] items-center justify-center bg-transparent">
        {/* Navbar for large displays */}
        <div className="navbar fixed left-[50%] z-999 hidden h-[70px] w-full -translate-x-[50%] items-center justify-between px-10 text-white backdrop-blur-3xl md:flex md:px-4 lg:px-10">
          <TransitionLinks
            prefetch
            href="/home"
            className="flex cursor-pointer items-center gap-2"
          >
            <Image src="/icon/GIcon.png" alt="GIcon" height={40} width={40} />
          </TransitionLinks>
          <ul className="flex lg:pl-20">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="relative cursor-pointer rounded-full px-3 py-1"
                onMouseEnter={() =>
                  link.title === "Engineering" && setIsEngineeringHovered(true)
                }
                onMouseLeave={() =>
                  link.title === "Engineering" && setIsEngineeringHovered(false)
                }
              >
                {link.title === "Engineering" ? (
                  <>
                    <p className="text-secondary flex h-full items-center justify-center gap-1.5 text-sm">
                      Engineering
                      <Image
                        alt="s"
                        src="/icon/Chevron.png"
                        width={5}
                        height={5}
                      />
                    </p>
                  </>
                ) : (
                  <>
                    <TransitionLinks
                      className="underlineAnimationLinks text-secondary text-sm"
                      href={link.href}
                    >
                      {link.title}
                    </TransitionLinks>
                  </>
                )}

                {link.title === "Engineering" && (
                  <AnimatePresence>
                    {isEngineeringHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute top-full left-0 z-9999 mt-2 w-60 rounded-2xl border border-white/10 bg-black/60 p-2 shadow-xl backdrop-blur-3xl"
                      >
                        <TransitionLinks
                          href="/git-rf-200"
                          className="block w-full rounded-xl px-2 py-3 text-left text-white transition-colors hover:bg-white/10"
                        >
                          <p className="text-secondary text-sm">GIT-RF 200</p>
                          <p className="text-primary">
                            RADION FREQUENCY GRIDDED ION THRUSTER
                          </p>
                        </TransitionLinks>

                        <TransitionLinks
                          href="/hy-rocen"
                          className="block w-full rounded-xl px-2 py-3 text-left text-white transition-colors hover:bg-white/10"
                        >
                          <p className="text-secondary text-sm">Hy-RocEn</p>
                          <p className="text-primary">HYBRID ROCKET ENGINE</p>
                        </TransitionLinks>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>
          <TransitionLinks
            prefetch
            href="/contact"
            className="flex items-center gap-2 rounded-sm bg-linear-65 from-purple-700 to-teal-400 px-6 py-0.5 tracking-tight"
          >
            <span>Contact Us</span>
          </TransitionLinks>
        </div>
        {/* Navbar for small displays */}
        <div className="fixed left-0 z-999 flex w-full max-w-full flex-1 items-center justify-between pl-4 text-white md:hidden">
          <TransitionLinks href="/home" className="flex items-center gap-2">
            <Image src="/icon/GIcon.png" alt="logo" width={35} height={35} />
          </TransitionLinks>
          <div>
            <Nav />
          </div>
        </div>
      </nav>
    </>
  );
}
