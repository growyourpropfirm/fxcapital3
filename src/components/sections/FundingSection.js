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
          className="fx-card rounded-2xl border border-[#1C2335] bg-[#0F1523]/90 p-6"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-semibold text-white">Account sizes</h3>
          <p className="mt-4 text-[#A0A8B0]">{accountSummary}</p>
        </div>
        {programs.map((program) => (
          <div
            key={program.title}
            className="fx-card rounded-2xl border border-[#1C2335] bg-[#0F1523]/90 p-6"
            data-aos="fade-up"
            data-aos-delay={program.delay}
          >
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
        ))}
      </div>
    </section>
  );
}

