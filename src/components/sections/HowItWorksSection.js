export function HowItWorksSection({ steps }) {
  return (
    <section className="space-y-10" id="how-it-works" data-aos="fade-up">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-[#34D399]">
          How it works
        </p>
        <h2 className="text-3xl font-semibold text-white">
          From application to a potential funded stage
        </h2>
        <p className="text-lg text-[#A0A8B0]">
          A streamlined path designed for serious traders who already treat
          trading like a professional activity.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {steps.map((step, index) => (
          <div
            key={step.title}
            className="fx-card rounded-2xl border border-[#1C2335] bg-[#0F1523]/90 p-6"
            data-aos="fade-up"
            data-aos-delay={index * 75}
          >
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#34D399]/15 text-2xl font-bold text-[#34D399] ring-1 ring-[#34D399]/40">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
            <p className="mt-3 text-[#A0A8B0]">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

