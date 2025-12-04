export function WhySection({ benefits }) {
  return (
    <section className="space-y-10" id="why" data-aos="fade-up">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-[#34D399]">
        Designed for Serious Traders
        </p>
        <h2 className="text-3xl font-semibold text-white">
        Designed for Serious Traders
        </h2>
        <p className="text-lg text-[#A0A8B0]">
        The FXCapital3 evaluation provides a professional framework with clear risk limits and rules. You trade under the same conditions as our funded accounts—in a simulated environment first. When you start your challenge, you’ll understand the rules, pacing, and expectations.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {benefits.map((feature, index) => (
          <div
            key={feature.title}
            className="fx-card group relative overflow-hidden rounded-2xl border border-[#1C2335] bg-gradient-to-br from-[#0F1523]/90 to-[#0A0E19]/90 p-6 shadow-[0_20px_60px_rgba(10,14,25,0.4)]"
            data-aos="fade-up"
            data-aos-delay={index * 60}
          >
            {/* Accent gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#34D399]/0 to-[#34D399]/0 transition-all duration-500 group-hover:from-[#34D399]/5 group-hover:to-[#34D399]/0" />
            
            <div className="relative z-10">
              {/* Icon placeholder */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#34D399]/10 ring-1 ring-[#34D399]/20">
                <div className="h-2 w-2 rounded-full bg-[#34D399]" />
              </div>
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-[#A0A8B0] leading-relaxed">
                {feature.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

