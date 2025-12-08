"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export function FinalCTASection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      // Call Brevo API
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect to appropriate page based on subscription status
        if (data.alreadySubscribed) {
          router.push(`/subscribe?email=${encodeURIComponent(email)}&already=true`);
        } else {
          router.push(`/subscribe?email=${encodeURIComponent(email)}`);
        }
      } else {
        // Handle error - still redirect but could show error message
        console.error("Subscription error:", data.error);
        router.push(`/subscribe?email=${encodeURIComponent(email)}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Still redirect to subscribe page even on error
      router.push(`/subscribe?email=${encodeURIComponent(email)}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-[#34D399]/20 bg-gradient-to-br from-[#0F1523] via-[#0A0E19] to-[#0A0E19] px-8 py-16 text-center shadow-[0_40px_120px_rgba(52,211,153,0.15)]"
      data-aos="fade-up"
    >
      <AnimatedBackground variant="vibrant" />
      {/* Background glow effect */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#34D399]/10 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <p className="text-sm uppercase tracking-[0.3em] text-[#34D399]">
        Ready to Show Your Skills?
        </p>
        <h2 className="text-3xl font-semibold text-white">
        Start your evaluation challenge today.
        </h2>
        {/* <p className="mt-4 text-lg text-[#A0A8B0]">
          Limited FXCapital trial accounts are available this week.
        </p> */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="flex-1 rounded-lg border border-[#1C2335] bg-[#0F1523]/60 px-5 py-3 text-white placeholder:text-[#88909C] focus:border-[#34D399] focus:outline-none focus:ring-2 focus:ring-[#34D399]/20"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center rounded-lg bg-[#34D399] px-6 py-3 text-sm font-semibold text-[#0A0E19] transition hover:bg-[#3FE0A7] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "TRADE NOW"}
          </button>
        </form>
        <p className="mt-4 text-sm text-[#A0A8B0]">
          Used by traders worldwide who want structure, rules, and funding
          potential—without risking their own capital on day one.
        </p>
        <p className="mt-5 text-xs text-[#88909C]">
       <i>
       Used by traders worldwide who seek a structured path to funding potential.
       </i>
        </p>
      </div>
    </section>
  );
}

