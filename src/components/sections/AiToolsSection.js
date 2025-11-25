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
          className="fx-card rounded-2xl border border-[#1C2335] bg-[#0F1523]/90 p-6 lg:col-span-2"
          data-aos="fade-up"
        >
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
        <div
          className="fx-card rounded-2xl border border-[#1C2335] bg-[#0F1523]/90 p-6"
          data-aos="fade-up"
          data-aos-delay="120"
        >
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
    </section>
  );
}

