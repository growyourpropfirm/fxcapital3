"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function HeroSection({ stats }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    router.push(`/subscribe?email=${encodeURIComponent(email)}`);
  };
  return (
    <section
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F1523] via-[#0A0E19] to-[#0A0E19] px-8 py-16 shadow-2xl sm:px-12"
      data-aos="fade-up"
    >
      <div className="pointer-events-none absolute inset-0">
        <svg
          className="hero-wave hero-wave-1"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 120 Q 150 60 300 120 T 600 120 T 900 120 T 1200 120"
            stroke="#34D399"
            strokeWidth="1.5"
            strokeOpacity="0.45"
            fill="none"
          />
        </svg>
        <svg
          className="hero-wave hero-wave-2"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 140 Q 200 90 400 140 T 800 140 T 1200 140"
            stroke="#34D399"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            fill="none"
          />
        </svg>
        <svg
          className="hero-wave hero-wave-3"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 160 Q 180 110 360 160 T 720 160 T 1080 160"
            stroke="#34D399"
            strokeWidth="1.5"
            strokeOpacity="0.2"
            fill="none"
          />
        </svg>
      </div>
      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#059669] px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white sm:text-sm">
          <span>Capital meets intelligence</span>
        </div>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="lg:w-3/5">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#34D399]/30 bg-gradient-to-r from-[#34D399]/25 via-transparent to-transparent px-5 py-2 text-xs font-semibold uppercase tracking-[0.5em] text-[#34D399] shadow-[0_10px_40px_rgba(52,211,153,0.25)] sm:text-sm">
              FXCAPITAL3
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
              AI-guided forex funding for disciplined traders
            </h1>
            <p className="mt-6 text-lg text-[#A0A8B0]">
              Access up to $400,000 in simulated funding through clear,
              rule-based evaluations. Combine capital, risk-aware AI tools, and
              robust infrastructure so you can focus on executing your strategy.
            </p>

            {/* Email Subscribe Form */}
            <div className="subscribe-bounce mt-8 rounded-2xl border border-[#34D399]/20 bg-gradient-to-br from-[#0F1523]/80 to-[#0A0E19]/80 p-6 backdrop-blur-sm shadow-[0_0_30px_rgba(52,211,153,0.2)]">
              <h3 className="mb-3 text-lg font-semibold text-white">
                Stay updated with trading insights
              </h3>
              <p className="mb-4 text-sm text-[#A0A8B0]">
                Get the latest updates, market analysis, and exclusive offers delivered to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 rounded-lg border border-[#1C2335] bg-[#0F1523]/50 px-4 py-3 text-white placeholder:text-[#88909C] focus:border-[#34D399] focus:outline-none focus:ring-2 focus:ring-[#34D399]/20"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-lg bg-[#34D399] px-6 py-3 text-sm font-semibold text-[#0A0E19] transition hover:bg-[#3FE0A7] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Subscribing..." : "Get Started"}
                </button>
              </form>
            </div>
            <p className="mt-5 text-sm text-[#88909C]">
              For intermediate to advanced forex and indices traders. Trading
              leveraged products involves significant risk and is not suitable
              for everyone.
            </p>

          </div>
          <div className="mt-10 grid flex-1 gap-6 rounded-2xl border border-[#1C2335]/70 bg-[#0F1523]/80 p-8 shadow-[0_35px_120px_rgba(52,211,153,0.18)] ring-1 ring-[#34D399]/10 backdrop-blur-xl sm:grid-cols-2">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-transparent bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:border-[#34D399]/40 hover:bg-white/10"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <div className="flex flex-col justify-between h-[100%]">
                  <p className="text-sm text-[#A0A8B0]">{item.label}</p>
                  <p className="text-[28px] font-semibold text-white">{item.value}</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .hero-wave {
          position: absolute;
          width: 200%;
          height: 160px;
          left: -50%;
          animation: waveSlide 18s linear infinite;
        }
        .hero-wave-1 {
          top: 10%;
        }
        .hero-wave-2 {
          top: 45%;
          animation-duration: 22s;
        }
        .hero-wave-3 {
          bottom: 5%;
          animation-duration: 28s;
        }
        @keyframes waveSlide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-25%);
          }
        }
        .subscribe-bounce {
          animation: gentleBounce 3s ease-in-out infinite;
        }
        @keyframes gentleBounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}

