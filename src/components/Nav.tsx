"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import TransitionLinks from "./TransitionLinks";
import { usePathname } from "next/navigation";

const navLinks = [
  { id: 1, title: "About Us", href: "/about" },
  { id: 2, title: "Missions", href: "/missions" },
  {
    id: 3,
    title: "Engineering",
    href: "/engineering",
    children: [
      {
        title: "GIT-RF 200",
        subtitle: "RADION FREQUENCY GRIDDED ION THRUSTER",
        href: "/git-rf-200",
      },
      {
        title: "Hy-RocEn",
        subtitle: "HYBRID ROCKET ENGINE",
        href: "/hy-rocen",
      },
    ],
  },
  { id: 4, title: "Careers", href: "/careers" },
  { id: 5, title: "Training Program", href: "/training_program" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [engineeringExpanded, setEngineeringExpanded] = useState(false);

  const closeMenu = () => setMobileNavOpen(false);

  const isActive = (href: string) => pathname === href;
  const isEngineeringActive =
    pathname === "/git-rf-200" || pathname === "/hy-rocen";

  return (
    <header className="sticky inset-x-0 top-0 bg-transparent px-4">
      <nav className="container mx-auto">
        <motion.button
          aria-label="Toggle menu"
          initial="hide"
          animate={mobileNavOpen ? "show" : "hide"}
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="relative z-1000 flex flex-col justify-center gap-1.5"
        >
          <motion.span
            variants={{
              hide: { rotate: 0 },
              show: { rotate: 45, y: 6 },
            }}
            className="block h-0.5 w-5 bg-white"
          />
          <motion.span
            variants={{
              hide: { opacity: 1 },
              show: { opacity: 0 },
            }}
            className="block h-0.5 w-5 bg-white"
          />
          <motion.span
            variants={{
              hide: { rotate: 0 },
              show: { rotate: -45, y: -6 },
            }}
            className="block h-0.5 w-5 bg-white"
          />
        </motion.button>

        <AnimatePresence>
          {mobileNavOpen && (
            <>
              <motion.div
                key="mobile-nav-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeMenu}
                className="fixed inset-0 z-998 bg-black/20 backdrop-blur-sm lg:hidden"
                aria-hidden="true"
              />
              <MotionConfig
                transition={{
                  type: "spring",
                  bounce: 0.15,
                }}
              >
                <motion.div
                  key="mobile-nav"
                  initial={{ opacity: 0, scale: 0.95, y: -8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -8 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.2 }}
                  className="fixed top-18 right-4 z-999 w-[min(320px,calc(100vw-2rem))] rounded-2xl border border-white/10 bg-[#1a1a1a]/98 p-4 shadow-xl backdrop-blur-3xl lg:hidden"
                >
                  <motion.ul
                    initial="hide"
                    animate="show"
                    variants={{
                      hide: {},
                      show: {
                        transition: {
                          staggerChildren: 0.03,
                          delayChildren: 0.05,
                        },
                      },
                    }}
                    className="list-none space-y-0.5"
                  >
                    {navLinks.map((link) => (
                      <motion.li
                        key={link.id}
                        variants={{
                          hide: { opacity: 0, y: 4 },
                          show: { opacity: 1, y: 0 },
                        }}
                      >
                        {"children" in link ? (
                          <div className="space-y-1">
                            <button
                              type="button"
                              onClick={() =>
                                setEngineeringExpanded(!engineeringExpanded)
                              }
                              className={`flex w-full items-center justify-between py-2 text-left text-base font-medium ${
                                isEngineeringActive
                                  ? "text-primary"
                                  : "text-secondary"
                              }`}
                            >
                              {link.title}
                              <motion.span
                                animate={{
                                  rotate: engineeringExpanded ? 180 : 0,
                                }}
                                className="flex items-center"
                              >
                                <Image
                                  src="/icon/Chevron.png"
                                  alt=""
                                  width={8}
                                  height={8}
                                  className="opacity-80"
                                />
                              </motion.span>
                            </button>
                            <AnimatePresence>
                              {engineeringExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="mt-1.5 space-y-1.5 overflow-hidden pl-1"
                                >
                                  {link.children?.map((sub) => (
                                    <TransitionLinks
                                      key={sub.href}
                                      href={sub.href}
                                      onClick={closeMenu}
                                      className="text-secondary hover:text-primary block rounded-xl bg-white/5 px-3 py-2.5 transition-colors hover:bg-white/10"
                                    >
                                      <p className="text-secondary text-sm font-medium">
                                        {sub.title}
                                      </p>
                                      <p className="text-primary text-xs font-light">
                                        {sub.subtitle}
                                      </p>
                                    </TransitionLinks>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <TransitionLinks
                            href={link.href}
                            onClick={closeMenu}
                            className={`block py-2 text-base font-medium ${
                              isActive(link.href)
                                ? "text-primary"
                                : "text-secondary"
                            }`}
                          >
                            {link.title}
                          </TransitionLinks>
                        )}
                      </motion.li>
                    ))}
                  </motion.ul>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="my-3 h-px w-full bg-white/10"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center"
                  >
                    <TransitionLinks
                      href="/contact"
                      onClick={closeMenu}
                      className="text-secondary flex items-center justify-center rounded-sm bg-linear-65 from-purple-700 to-teal-400 px-6 py-1.5 text-sm font-medium tracking-tight"
                    >
                      Contact Us
                    </TransitionLinks>
                  </motion.div>
                </motion.div>
              </MotionConfig>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
