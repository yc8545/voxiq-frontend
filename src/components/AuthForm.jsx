// src/components/AuthForm.jsx
import React from 'react';

const AuthForm = ({ formType, formData, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <h2 className="text-3xl neon-text mb-6">{formType === 'login' ? 'Login to VoxIQ' : 'Create Your Account'}</h2>

      <input
        type="email"
        name="email"
        placeholder="Email"
        className="w-full p-2 rounded bg-black border border-cyan-400 text-white"
        value={formData.email}
        onChange={onChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        className="w-full p-2 rounded bg-black border border-cyan-400 text-white"
        value={formData.password}
        onChange={onChange}
      />

      <button type="submit" className="neon-button w-full mt-4">
        {formType === 'login' ? 'Login' : 'Sign Up'}
      </button>
    </form>
  );
};

export default AuthForm;
