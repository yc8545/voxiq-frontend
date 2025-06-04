// VQ-CODE-006-1
import React, { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";
import NeonInput from "../components/NeonInput";
import NeonButton from "../components/NeonButton";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup submitted:", formData);
    // Add backend later
  };

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit}
        className="bg-black bg-opacity-60 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-xl w-full space-y-6"
      >
        <h2 className="text-3xl font-bold text-center neon-text">Create Your VoxIQ Account</h2>

        <NeonInput
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

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

        <NeonInput
          label="Confirm Password"
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          showEye
          toggleVisibility={() => setShowPassword((prev) => !prev)}
        />

        <NeonButton type="submit" text="Sign Up" />
        <p className="text-sm text-center">
  Already have an account?{" "}
  <a href="/" className="text-blue-400 underline hover:text-pink-400 transition">
    Log in
  </a>
</p>

      </form>
    </AuthLayout>
  );
};

export default Signup;
