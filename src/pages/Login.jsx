// src/pages/Login.jsx
import React, { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";
import NeonInput from "../components/NeonInput";
import NeonButton from "../components/NeonButton";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Login failed");
      } else {
        alert("Login successful!");
        localStorage.setItem("token", data.token);
        // Redirect if needed: window.location.href = "/dashboard";
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit}
        className="bg-black bg-opacity-60 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-md w-full space-y-6"
      >
        <h2 className="text-3xl font-bold text-center neon-text">Welcome Back</h2>

        <NeonInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <NeonInput
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          showEye
          toggleVisibility={() => setShowPassword((prev) => !prev)}
        />

        <div className="text-right">
          <Link
            to="/forgot-password"
            className="text-sm text-blue-400 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <NeonButton type="submit" text="Login" />

        <p className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-pink-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
