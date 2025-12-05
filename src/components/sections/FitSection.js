"use client";

import { AnimatedBackground } from "@/components/AnimatedBackground";

export function FitSection({ bullets }) {
  return (
    <section className="relative overflow-hidden space-y-10 rounded-3xl px-6 py-12" id="fit" data-aos="fade-up">
      <AnimatedBackground variant="default" />
      <div className="relative z-10">
      <div className="flex flex-col gap-4 mb-4">
        <p className="text-sm uppercase tracking-[0.3em] text-[#34D399]">
        Perfect for Traders Who Want to Validate Their Strategy
        </p>
        <h2 className="text-3xl font-semibold text-white">
        Perfect for Traders Who Want to Validate Their Strategy
        </h2>
      </div>
      <div className="fx-card rounded-2xl border border-[#1C2335] bg-[#0F1523]/80 p-6">
        <ul className="fx-dot-list space-y-3 text-[#A0A8B0]">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      </div>
    </section>
  );
}

