import React from "react";
import { useTranslation } from "react-i18next";

function AdminPanel() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-orange-600 mb-8">
          {t('admin_title') || "Admin Panel"}
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">👥 {t('admin_users') || "Total Users"}</h2>
            <p>1,234 users</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">📄 {t('admin_contracts') || "Contracts Submitted"}</h2>
            <p>87 active contracts</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">🔒 {t('admin_security') || "Security Alerts"}</h2>
            <p>2 ZKP failures · 1 blocked login</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow mb-6">
          <h3 className="text-lg font-bold mb-3">{t('admin_recent_users') || "Recent Users"}</h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Ali Z. (Seller) - Joined 2h ago</li>
            <li>Sara M. (Broker) - Joined yesterday</li>
            <li>Mohammad R. (Mandate) - 3 days ago</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-bold mb-3">{t('admin_logs') || "System Logs"}</h3>
          <p className="text-sm text-gray-600">No critical errors detected in last 24h.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;