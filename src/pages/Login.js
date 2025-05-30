import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // نسخه ساده بدون دیتابیس
    if (email === "admin@brkchain.com" && password === "admin123") {
      localStorage.setItem("userRole", "admin");
      navigate("/admin");
    } else if (email === "user@brkchain.com" && password === "user123") {
      localStorage.setItem("userRole", "user");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex items-center justify-center px-4 py-20">
      <form onSubmit={handleLogin} className="w-full max-w-md bg-gray-100 p-8 rounded-2xl shadow space-y-4">
        <h1 className="text-2xl font-bold text-orange-600 text-center">Login to BRKChain</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 p-3 rounded-lg"
          required
        />
        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-xl">
          Login
        </button>
        {error && <p className="text-red-600 text-sm text-center">{error}</p>}
      </form>
    </div>
  );
}

export default Login;