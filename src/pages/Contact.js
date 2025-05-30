import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("https://brkchain-api.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.status === "success") {
        setSubmitted(true);
      } else {
        setError("Error submitting form.");
      }
    } catch (err) {
      setError("Connection failed.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-orange-600 mb-6">
          {t('contact_title') || "Contact Us"}
        </h1>

        <p className="text-lg mb-8">
          {t('contact_intro') || "Have a question, partnership offer, or investor inquiry? Reach out to our team directly."}
        </p>

        <div className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p><strong>📍 Dubai HQ:</strong> Burj Gate, Downtown, Dubai, UAE</p>
            <p><strong>📞 Phone:</strong> +971 55 123 4567</p>
            <p><strong>📧 Email:</strong> info@brkchain.com</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" onChange={handleChange} value={formData.name} type="text" placeholder="Your Name" required className="w-full border border-gray-300 p-3 rounded-lg" />
            <input name="email" onChange={handleChange} value={formData.email} type="email" placeholder="Your Email" required className="w-full border border-gray-300 p-3 rounded-lg" />
            <input name="subject" onChange={handleChange} value={formData.subject} type="text" placeholder="Subject" required className="w-full border border-gray-300 p-3 rounded-lg" />
            <textarea name="message" onChange={handleChange} value={formData.message} placeholder="Message" required className="w-full border border-gray-300 p-3 rounded-lg h-32"></textarea>
            <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-xl">
              {t('send_message') || "Send Message"}
            </button>
            {submitted && <p className="text-green-600">{t('form_thanks') || "Thank you for your message!"}</p>}
            {error && <p className="text-red-600">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;