export function FitSection({ fit, notFit }) {
  return (
    <section className="space-y-10" id="fit" data-aos="fade-up">
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-[#34D399]">
          Who FXCapital3 is for
        </p>
        <h2 className="text-3xl font-semibold text-white">
          Built for traders who already respect the markets
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div
          className="fx-card rounded-2xl border border-[#1C2335] bg-[#0F1523]/90 p-6"
          data-aos="fade-up"
        >
          <h3 className="text-xl font-semibold text-white">Designed for</h3>
          <ul className="fx-dot-list mt-4 space-y-3 text-[#A0A8B0]">
            {fit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div
          className="fx-card rounded-2xl border border-[#1C2335] bg-[#0F1523]/90 p-6"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <h3 className="text-xl font-semibold text-white">Not for</h3>
          <ul className="fx-dot-list mt-4 space-y-3 text-[#A0A8B0]">
            {notFit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="text-sm text-[#A0A8B0]">
        If you treat trading as a serious, high-risk activity and want structure
        around your process, FXCapital3 may be a good fit.
      </p>
    </section>
  );
}

