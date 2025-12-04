"use client";

import { useEffect } from "react";
import { Inter } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";


import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { CredibilitySection } from "@/components/sections/CredibilitySection";
import { FundingSection } from "@/components/sections/FundingSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhySection } from "@/components/sections/WhySection";
import { AiToolsSection } from "@/components/sections/AiToolsSection";
import { FitSection } from "@/components/sections/FitSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { RiskFooter } from "@/components/sections/RiskFooter";
import { MistakeSection } from "@/components/sections/MistakeSection";
import { TrustedSection } from "@/components/sections/TrustedSection";
import { NextStepsSection } from "@/components/sections/NextStepsSection";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const stats = [
  { label: "Max simulated funding", value: "$1.2M" },
  { label: "Profit split", value: "Up to 80%" },
  { label: "Evaluation phases", value: "1-step & 2-step" },
  { label: "Drawdown limits", value: "4-8%" },
];

const howItWorks = [
  {
    "title": "Choose Your Challenge",
    "body": "Select and register for a 1-Step or 2-Step Evaluation to receive your account credentials and the full rule set."
  },
  {
    "title": "Trade Under Evaluation Rules",
    "body": "Use simulated capital with live market data to trade your strategy while meeting FXCapital3’s profit targets and drawdown limits (6–8% max, 4–5% daily)."
  },
  {
    "title": "Qualify for a Funded Account",
    "body": "Pass your selected evaluation to qualify for a simulated funded account and earn up to an 80% profit split."
  }
];

const benefits = [
  {
    "title": "Clear, structured evaluation",
    "body": "See how your strategy performs under defined profit targets and drawdown rules."
  },
  {
    "title": "Transparent rules",
    "body": "All conditions are defined before you start – no hidden tricks, no surprise restrictions."
  },
  {
    "title": "AI-powered tools",
    "body": "Access tools like a position size calculator to help manage risk and exposure."
  },
  {
    "title": "Path to funding",
    "body": "Pass the evaluation to qualify for a simulated funded account with profit-split potential."
  }
];


const faq = [
  {
    q: "Who can join?",
    a:
      "Traders 18+ who pass our eligibility checks and live in jurisdictions where our services are permitted. Local regulations and internal policies may restrict some regions.",
  },
  {
    q: "Am I trading with real money or simulated capital?",
    a:
      "Evaluations and funded stages use simulated accounts that mirror live prices. References to “funding” relate to these simulations or to third-party capital provided under separate terms. We do not accept client deposits for speculative trading.",
  },
  {
    q: "What instruments can I trade?",
    a:
      "Forex and indices defined by our broker partners and program rules. The complete instrument list is available inside your dashboard and trading platform.",
  },
  {
    q: "How are fees structured?",
    a:
      "You pay a one-time evaluation fee per account size and program. Trading costs such as spreads and commissions are charged by the broker. Review all costs and terms before starting.",
  },
];

const programs = [
  {
    title: "1-Step Challenge",
    description:
      "A single-phase evaluation for traders confident in their edge and risk management.",
    sections: [
      {
        title: "You trade a simulated account with:",
        items: [
          "Profit target: 8%",
          "Maximum overall drawdown: 6%",
          "Maximum daily drawdown: 4%",
          "Leverage: 1:100",
          "Time limit: None, no minimum trading days",
          "Profit split on funded stage: 80%",
        ],
      },
    ],
    footer:
      "If you stay within the risk parameters and reach the profit target, you can progress to a funded stage under the program rules.",
    disclaimer:
      "All parameters are subject to change. Always check the Funding page for the latest details.",
    badgeClass: "bg-[#059669] text-white",
    delay: 100,
  },
  {
    title: "2-Step Challenge",
    description:
      "A two-phase evaluation for traders who prefer a more gradual path.",
    sections: [
      {
        title: "Phase 1",
        items: [
          "Profit target: 8%",
          "Max overall drawdown: 8%",
          "Max daily drawdown: 5%",
          "Leverage: 1:100",
        ],
      },
      {
        title: "Phase 2",
        items: [
          "Profit target: 4%",
          "Max overall drawdown: 8%",
          "Max daily drawdown: 5%",
          "Leverage: 1:100",
        ],
      },
      {
        title: "Pro Trader / funded stage",
        items: [
          "Profit target: 4% (where applicable under program rules)",
          "Max overall drawdown: 8%",
          "Max daily drawdown: 5%",
          "Profit split: 80% to the trader, subject to the agreement",
        ],
      },
    ],
    footer:
      "All trading is conducted on simulated accounts that mirror market conditions, with any live capital allocation managed via third-party partners.",
    badgeClass: "bg-[#34D399] text-[#0A0E19]",
    delay: 160,
  },
];

// const fit = [
//   "Traders with existing forex or indices strategies",
//   "Professionals who understand leverage and margin",
//   "Operators seeking structure, capital access, and tools",
// ];

const notFit = [
  "You’ve been trading demo or live accounts and want to see if your approach can meet professional evaluation criteria.",
  "You want to experience a clear, rule-based evaluation process with defined targets and limits.",
  "You prefer a structured, simulated environment to demonstrate consistent strategy performance.",
];

const aiPreview = [
  "Turn trade ideas into clear, structured plans",
  "Check risk per trade and per day against your rules",
  "Think through scenarios before execution to stay aligned with your guidelines",
];

const aiRoadmap = ["Risk/Reward planner", "AI-informed economic calendar"];

function BackgroundFX() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-24 h-[420px] w-[420px] rounded-full bg-[#34D399]/30 blur-[160px]" />
        <div className="absolute top-1/3 -right-10 h-[520px] w-[520px] rounded-full bg-[#10B981]/25 blur-[200px]" />
        <div className="absolute bottom-0 left-1/4 h-[460px] w-[640px] rounded-full bg-[#34D399]/15 blur-[220px]" />
        <div className="grid-glow absolute inset-0 opacity-40" />
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
      `}</style>
    </>
  );
}

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 80,
      easing: "ease-out",
    });
  }, []);

  return (
    <div
      className={`${inter.variable} relative min-h-screen overflow-hidden bg-[#05070F] text-white antialiased`}
    >
      <BackgroundFX />
      <div className="relative z-10">
        <Header />
        <main className="mx-auto flex min-h-screen max-w-[1370px] flex-col gap-24 px-6 pt-24 pb-16 sm:px-10 lg:px-12">
          <HeroSection stats={stats} />
          {/* <CredibilitySection /> */}
          {/* <FundingSection
            accountSummary="Select from simulated account sizes ranging from $10,000 to $400,000 with standard 1:100 leverage. Start smaller if needed—our scaling plans let you grow the allocation up to $400,000, subject to rules and performance criteria."
            programs={programs}
          /> */}
          <HowItWorksSection steps={howItWorks} />
          <MistakeSection />
          <TrustedSection />
          <WhySection benefits={benefits} />
          <FitSection bullets={notFit} />
          <NextStepsSection />
          <FinalCTASection />
          <RiskFooter />

          {/* <AiToolsSection
            preview={aiPreview}
            calculator="Enter account size, risk %, and stop distance to get a suggested lot size that keeps risk consistent."
            roadmap={aiRoadmap}
          />
          <FAQSection faqs={faq} /> */}
        </main>
      </div>
      <style jsx global>{`
        .fx-card {
          transition: transform 0.4s ease, border-color 0.4s ease,
            box-shadow 0.4s ease;
          box-shadow: 0 40px 120px rgba(10, 14, 25, 0.35);
          backdrop-filter: blur(18px);
        }
        .fx-card:hover {
          transform: translateY(-6px);
          border-color: rgba(52, 211, 153, 0.45);
          box-shadow: 0 30px 120px rgba(52, 211, 153, 0.25);
        }
        .fx-dot-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .fx-dot-list li {
          position: relative;
          padding-left: 1.5rem;
        }
        .fx-dot-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.65rem;
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: #34d399;
          box-shadow: 0 0 12px rgba(52, 211, 153, 0.7);
        }
      `}</style>
    </div>
  );
}
