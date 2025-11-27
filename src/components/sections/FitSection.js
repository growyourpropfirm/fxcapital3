export function FitSection({ bullets }) {
  return (
    <section className="space-y-10" id="fit" data-aos="fade-up">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-[#34D399]">
          Perfect for validation
        </p>
        <h2 className="text-3xl font-semibold text-white">
          Perfect for Traders Who Want to Validate Their Strategy
        </h2>
      </div>
      <div className="fx-card rounded-2xl border border-[#1C2335] bg-[#0F1523]/80 p-6">
        <ul className="fx-dot-list space-y-3 text-[#A0A8B0]">
          {bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

