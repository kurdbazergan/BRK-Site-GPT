import React from "react";
import { useTranslation } from "react-i18next";

function Tokenomics() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-orange-600 mb-6">
          {t('tokenomics_title') || "Tokenomics"}
        </h1>

        <p className="text-lg mb-6">
          {t('token_intro') || "BRK is a utility token with a fixed supply of 100 million, designed to power governance, transactions, and incentives across the BRKChain ecosystem."}
        </p>

        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">💸 {t('use_case_fees') || "Transaction Fees"}</h3>
            <p>{t('token_fee_text') || "BRK is used to pay for contract registration, matching, and validation."}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">🎯 {t('use_case_incentives') || "Incentives"}</h3>
            <p>{t('token_incentive_text') || "Validators and active users are rewarded in BRK."}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">🗳 {t('use_case_governance') || "DAO Governance"}</h3>
            <p>{t('token_dao_text') || "Token holders can vote on upgrades and strategic decisions."}</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow">
            <h3 className="font-bold text-xl mb-2">🔐 {t('use_case_access') || "Premium Access"}</h3>
            <p>{t('token_access_text') || "Staking BRK grants access to advanced dashboards and analytics."}</p>
          </div>
        </section>

        <h2 className="text-2xl font-bold mb-4">{t('allocation_title') || "Token Allocation"}</h2>
        <table className="w-full text-left border border-gray-200 rounded-xl overflow-hidden mb-12">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">{t('category') || "Category"}</th>
              <th className="p-3">{t('allocation') || "Allocation (%)"}</th>
              <th className="p-3">{t('vesting') || "Vesting Terms"}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td className="p-3">Community Incentives</td><td className="p-3">30%</td><td className="p-3">3 years</td></tr>
            <tr><td className="p-3">DAO Treasury</td><td className="p-3">25%</td><td className="p-3">DAO Controlled</td></tr>
            <tr><td className="p-3">Strategic Partners</td><td className="p-3">15%</td><td className="p-3">12m cliff / 24m vesting</td></tr>
            <tr><td className="p-3">Development Fund</td><td className="p-3">15%</td><td className="p-3">Time-locked</td></tr>
            <tr><td className="p-3">Liquidity & Exchange</td><td className="p-3">10%</td><td className="p-3">At launch</td></tr>
            <tr><td className="p-3">Advisors</td><td className="p-3">5%</td><td className="p-3">6m cliff / 18m vesting</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tokenomics;