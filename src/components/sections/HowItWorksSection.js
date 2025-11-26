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
            className="fx-card group relative overflow-hidden rounded-2xl border border-[#1C2335] bg-gradient-to-br from-[#0F1523]/90 to-[#0A0E19]/90 p-6 shadow-[0_20px_60px_rgba(10,14,25,0.4)]"
            data-aos="fade-up"
            data-aos-delay={index * 75}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#34D399]/0 to-[#34D399]/0 transition-all duration-500 group-hover:from-[#34D399]/5 group-hover:to-[#34D399]/0" />
            <div className="relative z-10">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#34D399]/20 to-[#10B981]/20 text-2xl font-bold text-[#34D399] ring-2 ring-[#34D399]/40 shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-[#A0A8B0] leading-relaxed">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

