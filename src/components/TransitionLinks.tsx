"use client";
import { ReactNode, useEffect } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";

interface TransitionLinksProps extends LinkProps {
  children: ReactNode;
  href: string;
  className?: string;
  autoNavigate?: boolean; // New prop to enable auto-navigation
  delay?: number; // Optional custom delay
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function TransitionLinks({
  children,
  href,
  className,
  autoNavigate = false, // Default to false
  delay = 3000, // Default 3 seconds
  ...props
}: TransitionLinksProps) {
  const router = useRouter();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (autoNavigate) {
      timeoutId = setTimeout(async () => {
        const body = document.querySelector("body");
        body?.classList.add("page-transition");
        await sleep(500);
        router.push(href);
        await sleep(500);
        body?.classList.remove("page-transition");
      }, delay);
    }

    // Cleanup function to clear timeout if component unmounts
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [autoNavigate, href, delay, router]);

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const body = document.querySelector("body");
    body?.classList.add("page-transition");
    await sleep(500);
    router.push(href);
    await sleep(500);
    body?.classList.remove("page-transition");
  };

  return (
    <Link
      href={href}
      {...props}
      onClick={handleTransition}
      className={className}
      prefetch
    >
      {children}
    </Link>
  );
}
