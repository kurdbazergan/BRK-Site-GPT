import React from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 px-4 py-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-orange-600">BRKChain</h1>
        <LanguageSwitcher />
      </header>

      <section className="text-center">
        <h2 className="text-4xl font-extrabold mb-4">{t('welcome')}</h2>
        <p className="text-lg mb-6">{t('description')}</p>
        <div className="flex justify-center space-x-4">
          <a href="/about" className="text-sm text-orange-600 underline mt-2">{t("about_link") || "About BRKChain"}</a>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-xl shadow">
            {t('start_now') || "Start Now"}
          </button>
          <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold py-2 px-6 rounded-xl shadow">
            {t('learn_more') || "Learn More"}
          </button>
        
          <a href="/investor" className="text-sm text-blue-600 underline mt-2">{t("investor_link") || "Investor Panel"}</a>
        
          <a href="/contact" className="text-sm text-green-600 underline mt-2">{t("contact_link") || "Contact Us"}</a>
        
          <a href="/tokenomics" className="text-sm text-purple-600 underline mt-2">{t("tokenomics_link") || "Tokenomics"}</a>
        
          <a href="/how-it-works" className="text-sm text-blue-800 underline mt-2">{t("how_it_works_link") || "How BRKChain Works"}</a>
        
          <a href="/dashboard" className="text-sm text-gray-800 underline mt-2">{t("dashboard_link") || "User Dashboard"}</a>
        
          <a href="/roadmap" className="text-sm text-indigo-600 underline mt-2">{t("roadmap_link") || "Project Roadmap"}</a>
        
          <a href="/admin" className="text-sm text-red-600 underline mt-2">{t("admin_link") || "Admin Panel"}</a>
        </div>
      </section>
        
        
        
        
        
        
        

      <section className="mt-12 grid gap-6 md:grid-cols-3 text-left">
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
          <h3 className="text-xl font-bold mb-2">🔒 Privacy First</h3>
          <p>End-to-end encrypted broker chains with zero-knowledge protection.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
          <h3 className="text-xl font-bold mb-2">📈 Commission Logic</h3>
          <p>0.2% seller-side fee, no cut from mandates or brokers.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
          <h3 className="text-xl font-bold mb-2">🤖 Smart Contracts</h3>
          <p>Self-executing deals with immutable contract paths.</p>
        
          <a href="/investor" className="text-sm text-blue-600 underline mt-2">{t("investor_link") || "Investor Panel"}</a>
        
          <a href="/contact" className="text-sm text-green-600 underline mt-2">{t("contact_link") || "Contact Us"}</a>
        
          <a href="/tokenomics" className="text-sm text-purple-600 underline mt-2">{t("tokenomics_link") || "Tokenomics"}</a>
        
          <a href="/how-it-works" className="text-sm text-blue-800 underline mt-2">{t("how_it_works_link") || "How BRKChain Works"}</a>
        
          <a href="/dashboard" className="text-sm text-gray-800 underline mt-2">{t("dashboard_link") || "User Dashboard"}</a>
        
          <a href="/roadmap" className="text-sm text-indigo-600 underline mt-2">{t("roadmap_link") || "Project Roadmap"}</a>
        
          <a href="/admin" className="text-sm text-red-600 underline mt-2">{t("admin_link") || "Admin Panel"}</a>
        </div>
      </section>
        
        
        
        
        
        
        
    </div>
  );
}

export default Home;