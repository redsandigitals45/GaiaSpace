"use client";
import TransitionLinks from "../components/TransitionLinks";

export default function LoadingScreen() {
  return (
    <>
      <div className="load flex h-screen w-full flex-col items-center justify-center text-white">
        <div className="flex flex-col items-center justify-center">
          <div className="loader-container">
            <svg>
              <text
                x="50% "
                y="50%"
                dy=".32em"
                textAnchor="middle"
                className="text-body text-[15vw] tracking-[-2px] md:text-[10vw] md:tracking-[-4px] lg:tracking-[-8px]"
              >
                GaiaSpace
              </text>
              <text
                x="50% "
                y="50%"
                dy=".32em"
                dx="2.6em"
                textAnchor="middle"
                className="text-body text-[15vw] tracking-[-2px] md:text-[10vw] md:tracking-[-4px] lg:tracking-[-8px]"
              >
                .
              </text>
            </svg>
            <div className="hidden">
              <TransitionLinks
                href="/home"
                prefetch={true}
                autoNavigate={true}
                delay={5000}
              >
                Home
              </TransitionLinks>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
