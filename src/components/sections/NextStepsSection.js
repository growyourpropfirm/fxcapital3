const journeySteps = [
  {
    label: "Step 1",
    title: "Start your trial today.",
    body:
      "Sign up with your email and begin trading your simulated trial account.",
  },
  {
    label: "Step 2",
    title: "Prove your trading discipline.",
    body:
      "Trade your edge while respecting FXCapital’s risk rules and evaluation conditions.",
  },
  {
    label: "Step 3",
    title: "Unlock access to a funded challenge.",
    body:
      "Meet the criteria, then move into a 1-Step or 2-Step challenge with larger simulated capital and an 80% profit split.",
  },
];

export function NextStepsSection() {
  return (
    <section className="space-y-8" id="journey" data-aos="fade-up">
      <div className="flex flex-col gap-3 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[#34D399]">
          What happens next
        </p>
        <h2 className="text-3xl font-semibold text-white">
          Your Journey to Funding Starts Here
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
    </section>
  );
}
