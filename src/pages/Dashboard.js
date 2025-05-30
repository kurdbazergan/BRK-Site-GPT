import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Dashboard() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    contractId: "", role: "Broker", value: "", status: "Pending"
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("https://brkchain-api.onrender.com/contracts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.status === "success") {
        setSubmitted(true);
        setFormData({ contractId: "", role: "Broker", value: "", status: "Pending" });
        setShowForm(false);
      } else {
        setError("Error submitting contract.");
      }
    } catch (err) {
      setError("Connection failed.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">{t('dashboard_title') || "User Dashboard"}</h1>
        <p className="text-gray-600 mb-8">{t('dashboard_welcome') || "Welcome back. Here is your overview."}</p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">📄 {t('your_contracts') || "Your Contracts"}</h3>
            <p>12 Active · 4 Pending · 2 Completed</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">💰 {t('commission_earned') || "Commission Earned"}</h3>
            <p>$4,200 available · $11,800 total</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold mb-2">🔒 {t('security_status') || "Security Status"}</h3>
            <p>2FA Enabled · ZKP Validated</p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{t('recent_activity') || "Recent Activity"}</h2>
          <button onClick={() => setShowForm(!showForm)} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg shadow">
            {t('new_contract') || "Register Contract"}
          </button>
        </div>

        {showForm && (
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow mb-6 space-y-4">
            <input name="contractId" onChange={handleChange} value={formData.contractId} type="text" placeholder="Contract ID" required className="w-full border p-3 rounded-lg" />
            <select name="role" onChange={handleChange} value={formData.role} className="w-full border p-3 rounded-lg">
              <option>Broker</option>
              <option>Seller</option>
              <option>Buyer</option>
              <option>Mandate</option>
            </select>
            <input name="value" onChange={handleChange} value={formData.value} type="number" placeholder="Value in USD" required className="w-full border p-3 rounded-lg" />
            <select name="status" onChange={handleChange} value={formData.status} className="w-full border p-3 rounded-lg">
              <option>Pending</option>
              <option>Active</option>
              <option>Completed</option>
            </select>
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-xl">Submit Contract</button>
            {submitted && <p className="text-green-600">{t('contract_success') || "Contract submitted successfully!"}</p>}
            {error && <p className="text-red-600">{error}</p>}
          </form>
        )}

        <div className="bg-white rounded-xl shadow overflow-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Role</th>
                <th className="p-3">Status</th>
                <th className="p-3">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">#BRK-1849</td>
                <td className="p-3">Broker</td>
                <td className="p-3 text-yellow-600">Pending</td>
                <td className="p-3">$2M</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">#BRK-1790</td>
                <td className="p-3">Seller</td>
                <td className="p-3 text-green-600">Completed</td>
                <td className="p-3">$9M</td>
              </tr>
              <tr className="border-t">
                <td className="p-3">#BRK-1633</td>
                <td className="p-3">Mandate</td>
                <td className="p-3 text-blue-600">Active</td>
                <td className="p-3">$1.5M</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;