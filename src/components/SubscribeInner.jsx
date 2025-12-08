"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Inter } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";

// Move Inter here
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function SubscribeInner() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    AOS.init({
      duration: 700,
      once: true,
      offset: 80,
      easing: "ease-out",
    });
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`${inter.variable} relative min-h-screen overflow-hidden bg-[#05070F] text-white antialiased`}
    >
      <div
        className={`${inter.variable} relative min-h-screen overflow-hidden bg-[#05070F] text-white antialiased`}
      >
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-24 h-[420px] w-[420px] rounded-full bg-[#34D399]/30 blur-[160px]" />
          <div className="absolute top-1/3 -right-10 h-[520px] w-[520px] rounded-full bg-[#10B981]/25 blur-[200px]" />
          <div className="absolute bottom-0 left-1/4 h-[460px] w-[640px] rounded-full bg-[#34D399]/15 blur-[220px]" />
          <div className="grid-glow absolute inset-0 opacity-40" />
        </div>

        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-16">
          <div
            className="mx-auto w-full max-w-2xl"
            data-aos="fade-up"
          >
            <div className="relative overflow-hidden rounded-3xl border border-[#34D399]/20 bg-gradient-to-br from-[#0F1523] via-[#0A0E19] to-[#0A0E19] p-12 shadow-2xl backdrop-blur-sm sm:p-16">
              {/* Wave Animation */}
              <div className="pointer-events-none absolute inset-0">
                <svg
                  className="subscribe-wave subscribe-wave-1"
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
                  className="subscribe-wave subscribe-wave-2"
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
              </div>

              <div className="relative z-10 text-center">
                {/* Success Icon with Gold Gradient */}
                <div
                  className="success-icon-wrapper mx-auto mb-6"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                >
                  <div className="success-icon flex justify-center">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="40" cy="40" r="40" fill="url(#goldGradient)" />
                      <path d="M25 40L35 50L55 30" stroke="#000" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                      <defs>
                        <linearGradient id="goldGradient" x1="0" y1="0" x2="80" y2="80">
                          <stop offset="0%" stopColor="#34d399" />
                          <stop offset="100%" stopColor="#F4E6AB" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Title */}
                <h1
                  className="subscribe-title mb-4 text-4xl font-bold text-white sm:text-5xl"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  You're In!<br />Check your inbox!
                </h1>

                {/* Subtitle */}
                {email && (
                  <p
                    className="subscribe-subtitle mb-8 text-lg text-[#A0A8B0]"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    We've sent your early access details to<br />
                    <strong className="email-highlight font-semibold text-[#34D399]">{email}</strong>
                  </p>
                )}

                {/* What's Next Section */}
                <div
                  className="subscribe-message mx-auto mb-8 max-w-md"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="message-box rounded-2xl border border-[#1C2335] bg-[#0F1523]/50 p-6 text-left">
                    <h3 className="mb-4 text-xl font-semibold text-white">What's Next?</h3>
                    <ul className="next-steps-list space-y-3 text-[#A0A8B0]">
                      <li className="flex items-start gap-3">
                        <span className="list-icon text-2xl">📧</span>
                        <span>Check your email for the starter guide and pricing tiers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="list-icon text-2xl">🎯</span>
                        <span>Review the evaluation rules and account options</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="list-icon text-2xl">🚀</span>
                        <span>Start your journey to a funded account</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div
                  className="flex flex-col gap-4 sm:flex-row sm:justify-center"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-lg bg-[#34D399] px-6 py-3 text-base font-semibold text-[#0A0E19] transition hover:bg-[#3FE0A7]"
                  >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
      .grid-glow {
        background-image: radial-gradient(
            circle at 1px 1px,
            rgba(52, 211, 153, 0.08) 1px,
            transparent 0
          ),
          radial-gradient(
            circle at 1px 1px,
            rgba(16, 185, 129, 0.05) 1px,
            transparent 0
          );
        background-size: 120px 120px, 180px 180px;
        mix-blend-mode: screen;
      }
      .subscribe-wave {
        position: absolute;
        width: 200%;
        height: 160px;
        left: -50%;
        animation: waveSlide 18s linear infinite;
      }
      .subscribe-wave-1 {
        top: 10%;
      }
      .subscribe-wave-2 {
        top: 45%;
        animation-duration: 22s;
      }
      @keyframes waveSlide {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-25%);
        }
      }
    `}</style>
      </div>
    </div>
  );
}
