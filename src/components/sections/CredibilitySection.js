export function CredibilitySection() {
  return (
    <section className="space-y-6" id="credibility" data-aos="fade-up">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-semibold text-white">
          A funding partner built by traders, investors, and builders
        </h2>
        <p className="text-lg text-[#A0A8B0]">
          FXCapital3 is a team of traders, investors, and technologists focused
          on helping skilled traders access simulated capital under clear,
          risk-first rules.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="fx-card rounded-2xl border border-[#1C2335] bg-[#0F1523]/90 p-8 text-[#A0A8B0]">
          <p>
            FXCapital3 is run by operators who have built, funded, and traded
            through real market cycles. We keep the program focused on discipline
            by combining structure with the right tooling.
          </p>
          <ul className="fx-dot-list mt-4 space-y-2">
            <li>Simulated capital funding for evaluation and funded stages</li>
            <li>Structured risk parameters instead of vague promises</li>
            <li>Technology and AI tools that support—not replace—your process</li>
          </ul>
        </div>
        <div className="fx-card rounded-2xl border border-[#1C2335] bg-[#0F1523]/90 p-8 text-[#A0A8B0]">
          <p>
            We operate strictly as a <strong>trading evaluation and simulated funding provider</strong>,
            not as a broker or investment advisor. We don’t accept client deposits for
            speculative trading or manage portfolios on your behalf. Any live trading
            capital is provided through third-party partners under separate agreements
            and terms.
          </p>
          <p className="mt-4">
            All guidelines, trading rules, and legal terms are published and updated
            transparently so you understand the program before committing.
          </p>
        </div>
      </div>
    </section>
  );
}

