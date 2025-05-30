import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-orange-600 mb-6">
          {t('about_title') || "About BRKChain"}
        </h1>
        <p className="text-lg mb-8">
          {t('about_intro') || "BRKChain is a decentralized trade infrastructure designed to rebuild trust, transparency, and efficiency in global commodity deals."}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">🌐 {t('decentralized')}</h3>
            <p>{t('decentralized_text') || "No central authority. All contracts are validated via blockchain."}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">🛡 {t('privacy_protection')}</h3>
            <p>{t('privacy_text') || "Identity and commission rights of brokers are protected cryptographically."}</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-xl font-bold mb-2">🤝 {t('fair_trading')}</h3>
            <p>{t('fair_text') || "No fees from brokers. Sellers only pay 0.2% upon final execution."}</p>
          </div>
        </div>

        <blockquote className="italic text-xl text-center text-gray-700 mb-12">
          {t('about_quote') || "Redefining trust. Empowering brokers. Securing global trade."}
        </blockquote>

        <div className="text-center">
          <a href="#" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-xl text-lg shadow">
            {t('join_now') || "Join Now"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;