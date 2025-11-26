export function WhySection({ benefits }) {
  return (
    <section className="space-y-10" id="why" data-aos="fade-up">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-[#34D399]">
          Why FXCapital3
        </p>
        <h2 className="text-3xl font-semibold text-white">
          Why traders choose FXCapital3 for funding and structure
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.title}
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
              <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
              <p className="mt-3 text-[#A0A8B0] leading-relaxed">{benefit.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

