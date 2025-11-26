"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

const navLinks = [
  { label: "Funding", href: "#funding" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Why FXCapital3", href: "#why" },
  { label: "AI tools", href: "#ai-tools" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const links = useMemo(() => navLinks, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#1C2335]/30 bg-[#05070F]/40 backdrop-blur-md"
      data-aos="fade-down"
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 sm:px-10 lg:px-12">
        <Link
          href="/"
          className="flex items-center gap-3 text-white"
          aria-label="FXCapital3 Home"
        >
        <Image src={"./logo.svg"} width={150} height={30} alt="fxcapital3-logo" />
        </Link>

        {/* <nav className="hidden items-center gap-6 text-sm font-medium text-[#A0A8B0] md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav> */}
 
        <div className="hidden gap-3 md:flex">
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-lg border border-[#34D399] px-5 py-2.5 text-sm font-semibold text-[#34D399] transition hover:bg-[#34D3991A]"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-lg bg-[#34D399] px-5 py-2.5 text-sm font-semibold text-[#0A0E19] transition hover:bg-[#3FE0A7]"
          >
            Sign Up
          </Link>
        </div>

        <div className="flex gap-2 md:hidden">
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-lg border border-[#34D399] px-4 py-2 text-xs font-semibold text-[#34D399] transition hover:bg-[#34D3991A]"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-lg bg-[#34D399] px-4 py-2 text-xs font-semibold text-[#0A0E19] transition hover:bg-[#3FE0A7]"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}

