// VQ-FRONT-009
import React, { useState } from "react";
import AuthLayout from "../layouts/AuthLayout";
import NeonInput from "../components/NeonInput";
import NeonButton from "../components/NeonButton";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
    alert("Reset link sent! (Pretend for now 😎)");
  };

  return (
    <AuthLayout>
      <form
        onSubmit={handleSubmit}
        className="bg-black bg-opacity-60 backdrop-blur-md p-8 rounded-2xl shadow-lg max-w-md w-full space-y-6"
      >
        <h2 className="text-3xl font-bold text-center neon-text">
          Forgot Password
        </h2>
        <p className="text-center text-sm text-gray-300">
          Enter your email and we’ll send a reset link.
        </p>

        <NeonInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <NeonButton type="submit" text="Send Reset Link" />
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;