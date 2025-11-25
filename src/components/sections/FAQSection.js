export function FAQSection({ faqs }) {
  return (
    <section className="space-y-10" id="faq" data-aos="fade-up">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-[#34D399]">
          FAQ teaser
        </p>
        <h2 className="text-3xl font-semibold text-white">
          Frequently asked questions
        </h2>
        <p className="text-lg text-[#A0A8B0]">
          Snapshot answers for the most common questions. Visit the full FAQ for
          more detail.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {faqs.map((item, index) => (
          <div
            key={item.q}
            className="fx-card rounded-2xl border border-[#1C2335] bg-[#0F1523]/90 p-6"
            data-aos="fade-up"
            data-aos-delay={index * 60}
          >
            <h3 className="text-lg font-semibold text-white">{item.q}</h3>
            <p className="mt-3 text-[#A0A8B0]">{item.a}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-[#34D399]">
        For more detailed answers, visit the full FAQ section.
      </p>
    </section>
  );
}

