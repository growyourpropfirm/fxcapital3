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
      <div className="grid gap-6 md:grid-cols-2">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.title}
            className="fx-card rounded-2xl border border-[#1C2335] bg-[#0F1523]/90 p-6"
            data-aos="fade-up"
            data-aos-delay={index * 60}
          >
            <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
            <p className="mt-3 text-[#A0A8B0]">{benefit.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

