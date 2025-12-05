"use client";

import { AnimatedBackground } from "@/components/AnimatedBackground";

const journeySteps = [
  {
    "label": "Step 1",
    "title": "Choose your challenge.",
    "body": "Select a 1-Step or 2-Step Evaluation and begin trading your simulated account under the evaluation rules."
  },
  {
    "label": "Step 2",
    "title": "Trade with discipline.",
    "body": "Execute your strategy while respecting FXCapital3's profit targets and drawdown limits."
  },
  {
    "label": "Step 3",
    "title": "Get funded and earn a split.",
    "body": "Upon passing, qualify for a simulated funded account and earn up to an 80% profit split."
  }
];

export function NextStepsSection() {
  return (
    <section className="relative overflow-hidden space-y-8 rounded-3xl px-6 py-12" id="journey" data-aos="fade-up">
      <AnimatedBackground variant="default" />
      <div className="relative z-10">
      <div className="flex flex-col gap-3 text-center mb-4">
        <p className="text-sm uppercase tracking-[0.3em] text-[#34D399]">
          What happens next
        </p>
        <h2 className="text-3xl font-semibold text-white">
          Your Path to Funding
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {journeySteps.map((step, index) => (
          <div
            key={step.label}
            className="fx-card rounded-2xl border border-[#1C2335] bg-[#0F1523]/85 p-6 text-left"
            data-aos="fade-up"
            data-aos-delay={index * 80}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#34D399]">
              {step.label}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">
              {step.title}
            </h3>
            <p className="mt-3 text-sm text-[#A0A8B0] leading-relaxed">
              {step.body}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
