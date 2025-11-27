export function MistakeSection() {
  return (
    <section
      className="space-y-6 rounded-3xl border border-[#1C2335] bg-[#0F1523]/80 p-8 shadow-[0_25px_80px_rgba(10,14,25,0.55)]"
      data-aos="fade-up"
    >
      <div className="flex flex-col gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-[#34D399]">
          No reset tax
        </p>
        <h2 className="text-3xl font-semibold text-white">
          Made a Mistake? Don’t Let One Trade Define You.
        </h2>
        <p className="text-lg text-[#A0A8B0]">
          Even strong traders have losing days. FXCapital’s trial focuses on
          process and risk control—not one lucky or unlucky trade.
        </p>
      </div>
      <div className="grid gap-4 text-[#A0A8B0]">
        <ul className="list-disc pl-5 space-y-3">
          <li>
            During your trial, you trade with predefined daily and overall loss limits,
            so one mistake doesn’t wipe out your account.
          </li>
          <li>
            Our risk-first framework and AI-supported tools help you keep lot size,
            leverage and exposure under control.
          </li>
          <li>
            Your performance is measured over time, giving you a fair picture of your edge,
            not a snapshot of one moment.
          </li>
        </ul>
        <p className="text-lg text-[#A0A8B0]">The goal is simple: reward disciplined traders who treat this like a profession, not a gamble</p>
      </div>

    </section>
  );
}

