export function FundingSection({ accountSummary, programs }) {
  return (
    <section className="space-y-10" id="funding" data-aos="fade-up">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-[#34D399]">
          Funding programs overview
        </p>
        <h2 className="text-3xl font-semibold text-white">
          Choose the funding path that fits your style
        </h2>
        <p className="text-lg text-[#A0A8B0]">
          All FXCapital3 programs are built around{" "}
          <strong>simulated accounts with live-market conditions</strong>, clear
          targets, and defined risk limits. Every package includes access to our
          AI tools.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div
          className="fx-card group relative overflow-hidden rounded-2xl border border-[#1C2335] bg-gradient-to-br from-[#0F1523]/90 to-[#0A0E19]/90 p-6 shadow-[0_20px_60px_rgba(10,14,25,0.4)]"
          data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#34D399]/0 to-[#34D399]/0 transition-all duration-500 group-hover:from-[#34D399]/5 group-hover:to-[#34D399]/0" />
          <div className="relative z-10">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#34D399]/10 ring-1 ring-[#34D399]/20">
              <svg className="h-5 w-5 text-[#34D399]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white">Account sizes</h3>
            <p className="mt-4 text-[#A0A8B0] leading-relaxed">{accountSummary}</p>
          </div>
        </div>
        {programs.map((program) => (
          <div
            key={program.title}
            className="fx-card group relative overflow-hidden rounded-2xl border border-[#1C2335] bg-gradient-to-br from-[#0F1523]/90 to-[#0A0E19]/90 p-6 shadow-[0_20px_60px_rgba(10,14,25,0.4)]"
            data-aos="fade-up"
            data-aos-delay={program.delay}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#34D399]/0 to-[#34D399]/0 transition-all duration-500 group-hover:from-[#34D399]/5 group-hover:to-[#34D399]/0" />
            <div className="relative z-10">
            <div
              className={`mb-4 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${program.badgeClass}`}
            >
              {program.title}
            </div>
            {program.description ? (
              <p className="text-[#A0A8B0]">{program.description}</p>
            ) : null}
            {program.sections.map((section) => (
              <div key={section.title} className="mt-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-white">
                  {section.title}
                </p>
                <ul className="fx-dot-list mt-3 space-y-3 text-[#A0A8B0]">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
            {program.footer ? (
              <p className="mt-4 text-[#A0A8B0]">{program.footer}</p>
            ) : null}
            {program.disclaimer ? (
              <p className="mt-4 text-sm text-[#88909C]">{program.disclaimer}</p>
            ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

