import React from "react";
import { useTranslation } from "react-i18next";

function HowItWorks() {
  const { t } = useTranslation();

  const steps = [
    { icon: "📝", title: "Register Contract", desc: "Seller submits the trade contract to BRK." },
    { icon: "🔗", title: "Chain Broadcast", desc: "Mandates and brokers forward it to their networks." },
    { icon: "✅", title: "Buyer Validation", desc: "End-buyer confirms interest and proves capability." },
    { icon: "🤝", title: "Final Agreement", desc: "Entire broker chain is recorded with protected rights." },
    { icon: "💸", title: "Commission Logic", desc: "Only seller pays 0.2% to BRK, others are free." },
    { icon: "🔐", title: "Blockchain Proof", desc: "Only contract structure (not names) stored on-chain." },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-orange-600 mb-8">
          {t('how_it_works_title') || "How BRKChain Works"}
        </h1>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md text-center">
              <div className="text-4xl mb-3">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{t(step.title) || step.title}</h3>
              <p>{t(step.desc) || step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;