import React from "react";
import { useTranslation } from "react-i18next";

function Roadmap() {
  const { t } = useTranslation();

  const phases = [
    {
      icon: "🚀",
      title: "MVP Phase",
      time: "Months 1–3",
      goals: [
        "Contract registration system",
        "Internal MVP testing",
        "Private infrastructure launch"
      ]
    },
    {
      icon: "🌐",
      title: "Market Test",
      time: "Months 4–9",
      goals: [
        "DAO activation & voting",
        "Token listing",
        "Field testing with brokers"
      ]
    },
    {
      icon: "🌍",
      title: "Global Scale",
      time: "Months 10–24",
      goals: [
        "Mobile apps & dashboards",
        "Global partner onboarding",
        "Public API & enterprise SDK"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-orange-600 mb-10">
          {t('roadmap_title') || "Project Roadmap"}
        </h1>

        <div className="space-y-12">
          {phases.map((phase, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-md">
              <div className="flex items-center space-x-4 mb-3">
                <div className="text-3xl">{phase.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold">{t(phase.title) || phase.title}</h2>
                  <p className="text-sm text-gray-600">{phase.time}</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-800 space-y-1">
                {phase.goals.map((goal, i) => (
                  <li key={i}>{t(goal) || goal}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;