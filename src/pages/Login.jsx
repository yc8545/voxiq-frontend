import React, { useState } from "react";
import NeonInput from "../components/NeonInput";
import NeonButton from "../components/NeonButton";
import { Link } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted", formData);
  };

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit}
        className="bg-black bg-opacity-60 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-md w-full space-y-6"
      >
        <h2 className="text-3xl font-bold text-center neon-text">Welcome Back 👋</h2>

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

        <NeonButton type="submit" text="Login" />

        <p className="text-center text-sm text-gray-400 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;
