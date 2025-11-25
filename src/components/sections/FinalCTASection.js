import Link from "next/link";

export function FinalCTASection() {
  return (
    <section
      className="fx-card rounded-3xl border border-[#1C2335] bg-gradient-to-r from-[#0F1523] to-[#0A0E19] px-8 py-12 text-center"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-semibold text-white">
        Your edge deserves a structured environment
      </h2>
      <p className="mt-4 text-lg text-[#A0A8B0]">
        If you already have a trading plan, risk framework, and discipline,
        FXCapital3 can provide the simulated capital, rules, and tools to put
        that work to the test.
      </p>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
        <Link
          className="inline-flex items-center justify-center rounded-lg bg-[#34D399] px-6 py-3 text-base font-semibold text-[#0A0E19] transition hover:bg-[#3FE0A7]"
          href="#funding"
        >
          View funding programs
        </Link>
        <Link
          className="inline-flex items-center justify-center rounded-lg border border-[#34D399] px-6 py-3 text-base font-semibold text-[#34D399] transition hover:bg-[#34D3991A]"
          href="#"
        >
          Log in / Create account
        </Link>
      </div>
      <p className="mt-5 text-sm text-[#88909C]">
        Take time to read the rules, legal terms, and risk disclosures carefully.
        Apply only if you understand how the program works and accept the risks
        involved.
      </p>
    </section>
  );
}

