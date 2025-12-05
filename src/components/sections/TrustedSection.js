"use client";

import Image from "next/image";
import Customers from "../../../public/customers.webp";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export function TrustedSection() {
  return (
    <section
      className="relative overflow-hidden space-y-6 rounded-3xl border border-[#1C2335] bg-gradient-to-br from-[#0F1523] to-[#0A0E19] p-8 text-center shadow-[0_25px_80px_rgba(10,14,25,0.55)]"
      data-aos="fade-up"
    >
      <AnimatedBackground variant="default" />
      <div className="relative z-10">
      {/* <p className="text-sm uppercase tracking-[0.3em] text-[#34D399]">
      Trusted By Traders All Around The World
      </p> */}
      <h2 className="text-3xl font-semibold text-white">
      Trusted by Traders All Around the World
      </h2>
      {/* <div className="flex items-center justify-center gap-4">
        {[1, 2, 3, 4, 5].map((avatar) => (
          <div
            key={avatar}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#34D399]/50 bg-[#34D399]/10 text-sm font-semibold text-[#34D399]"
          >
            {avatar}
          </div>
        ))}
      </div> */}
      <Image
        src={Customers}
        width={100}
        height={100}
        alt="Customer avatars"
        className="mx-auto mt-4 h-10 w-auto"
        data-aos="zoom-in"
        data-aos-delay="400"
      />
      <p className="text-sm text-[#A0A8B0]">
        <i>Traders use FXCapital3's structured evaluations to test their strategies under real-time market conditions.</i>
      </p>
      </div>
    </section>
  );
}

