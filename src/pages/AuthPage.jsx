// src/pages/AuthPage.jsx
import React, { useState } from "react";
import { NeonInput } from "../components/NeonInput";
import { NeonButton } from "../components/NeonButton";

const AuthPage = () => {
  const [mode, setMode] = useState("login"); // or "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleMode = () => {
    setMode(mode === "login" ? "signup" : "login");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder logic — API hookup later
    console.log(`${mode.toUpperCase()} with`, { email, password });
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-6 neon-text">
        {mode === "login" ? "Welcome Back" : "Create Account"}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-6 rounded-xl border border-neutral-800 bg-black/30 shadow-lg space-y-4"
      >
        <NeonInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <NeonInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <NeonButton text={mode === "login" ? "Login" : "Sign Up"} />
      </form>

      <button onClick={toggleMode} className="mt-4 text-sm text-cyan-300 hover:underline">
        {mode === "login" ? "Don't have an account? Sign up" : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default AuthPage;
