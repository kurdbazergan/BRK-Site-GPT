import React from "react";
import { useTranslation } from "react-i18next";

function Investor() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-orange-600 mb-6">
          {t('investor_title') || "Investor Panel"}
        </h1>

        <p className="text-lg mb-8">
          {t('investor_intro') || "BRKChain offers a transparent and scalable investment opportunity in the decentralized trade sector."}
        </p>

        <section className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">💰 0.2% Commission Model</h3>
            <p>{t('investor_revenue') || "Revenue is generated from finalized seller-side transactions only."}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">🗳 DAO Governance</h3>
            <p>{t('investor_dao') || "Investors gain voting rights and treasury visibility."}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">🔐 Exit Flexibility</h3>
            <p>{t('investor_exit') || "Options include token resale, SAFE notes, or revenue-based exit."}</p>
          </div>
        </section>

        <blockquote className="italic text-center text-xl text-gray-700 mb-12">
          {t('investor_quote') || "Invest not just in a platform – invest in a trade revolution."}
        </blockquote>

        <div className="text-center">
          <a href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-xl text-lg shadow">
            {t('investor_cta') || "Request Access"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Investor;