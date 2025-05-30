import React from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "fa", label: "فارسی" },
  { code: "ckb", label: "کوردی سورانی" },
  { code: "ku", label: "Kurmancî" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "de", label: "Deutsch" },
  { code: "zh", label: "中文" },
  { code: "ru", label: "Русский" },
  { code: "hi", label: "हिंदी" },
  { code: "ur", label: "اردو" },
  { code: "ar", label: "العربية" }
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
    if (["fa", "ar", "ckb", "ku", "ur"].includes(e.target.value)) {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  };

  return (
    <select value={i18n.language} onChange={handleChange} style={{
      padding: "6px 14px",
      borderRadius: "8px",
      fontSize: "1rem",
      margin: "10px 0",
      border: "1px solid #ccc",
      background: "#fff"
    }}>
      {languages.map((lng) => (
        <option key={lng.code} value={lng.code}>{lng.label}</option>
      ))}
    </select>
  );
}

export default LanguageSwitcher;