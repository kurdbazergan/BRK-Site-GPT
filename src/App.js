import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Investor from "./pages/Investor";
import Contact from "./pages/Contact";
import Tokenomics from "./pages/Tokenomics";
import HowItWorks from "./pages/HowItWorks";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import Roadmap from "./pages/Roadmap";
import Login from "./pages/Login";
import './i18n';

function App() {
  const userRole = localStorage.getItem("userRole");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tokenomics" element={<Tokenomics />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={userRole === "user" || userRole === "admin" ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/admin"
          element={userRole === "admin" ? <AdminPanel /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;