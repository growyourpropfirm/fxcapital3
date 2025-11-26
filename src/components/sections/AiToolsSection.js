export function AiToolsSection({ preview, calculator, roadmap }) {
  return (
    <section className="space-y-10" id="ai-tools" data-aos="fade-up">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-[#34D399]">
          AI tools & trading assistant
        </p>
        <h2 className="text-3xl font-semibold text-white">
          AI-supported trading discipline
        </h2>
        <p className="text-lg text-[#A0A8B0]">
          AI is integrated into FXCapital3 to help you plan and manage risk—not
          to trade for you.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div
          className="fx-card group relative overflow-hidden rounded-2xl border border-[#1C2335] bg-gradient-to-br from-[#0F1523]/90 to-[#0A0E19]/90 p-6 shadow-[0_20px_60px_rgba(10,14,25,0.4)] lg:col-span-2"
          data-aos="fade-up"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#34D399]/0 to-[#34D399]/0 transition-all duration-500 group-hover:from-[#34D399]/5 group-hover:to-[#34D399]/0" />
          <div className="relative z-10">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#34D399]/10 ring-1 ring-[#34D399]/20">
              <svg className="h-5 w-5 text-[#34D399]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white">
              AI Trading Assistant (preview / coming soon)
            </h3>
            <ul className="fx-dot-list mt-4 space-y-3 text-[#A0A8B0]">
              {preview.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[#88909C]">
              The assistant does not place trades, provide personalized investment
              advice, or guarantee results.
            </p>
          </div>
        </div>
        <div
          className="fx-card group relative overflow-hidden rounded-2xl border border-[#1C2335] bg-gradient-to-br from-[#0F1523]/90 to-[#0A0E19]/90 p-6 shadow-[0_20px_60px_rgba(10,14,25,0.4)]"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#34D399]/0 to-[#34D399]/0 transition-all duration-500 group-hover:from-[#34D399]/5 group-hover:to-[#34D399]/0" />
          <div className="relative z-10">
          <h3 className="text-xl font-semibold text-white">
            Position Size Calculator (live)
          </h3>
          <p className="mt-4 text-[#A0A8B0]">{calculator}</p>
          <h4 className="mt-6 text-lg font-semibold text-white">
            Tools in development
          </h4>
          <ul className="fx-dot-list mt-3 space-y-2 text-[#A0A8B0]">
            {roadmap.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-[#88909C]">
            All tools are optional and designed to support your existing strategy.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}

