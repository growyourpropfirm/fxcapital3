"use client";

import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function LoginPage() {
  return (
    <div
      className={`${inter.variable} relative min-h-screen overflow-hidden bg-[#05070F] text-white antialiased`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-24 h-[420px] w-[420px] rounded-full bg-[#34D399]/30 blur-[160px]" />
        <div className="absolute top-1/3 -right-10 h-[520px] w-[520px] rounded-full bg-[#10B981]/25 blur-[200px]" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16">
        <div className="mx-auto w-full max-w-md rounded-3xl border border-[#34D399]/20 bg-gradient-to-br from-[#0F1523] via-[#0A0E19] to-[#0A0E19] p-8 shadow-2xl backdrop-blur-sm sm:p-12">
          <h1 className="mb-6 text-3xl font-bold text-white">Login</h1>
          <p className="mb-8 text-[#A0A8B0]">
            Login page coming soon. Please check back later.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-[#34D399] px-6 py-3 text-base font-semibold text-[#0A0E19] transition hover:bg-[#3FE0A7]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

