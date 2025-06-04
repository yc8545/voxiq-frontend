// VQ-CODE-006-1
import React, { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";
import NeonInput from "../components/NeonInput";
import NeonButton from "../components/NeonButton";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "", // not used in backend yet
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast.error("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Signup failed");
      } else {
        toast.success("Signup successful!");
        localStorage.setItem("token", data.token);
        navigate("/"); // redirect to login or dashboard
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Server error. Please try again later.");
    }
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
          <a
            href="/"
            className="text-blue-400 underline hover:text-pink-400 transition"
          >
            Log in
          </a>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Signup;