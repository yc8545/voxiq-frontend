// src/layouts/AuthLayout.jsx
import React from 'react';
// import Lottie from 'lottie-react';
// import animationData from '../assets/auth-anim.json'; // Add a calming Lottie JSON file

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      {/* <div className="hidden md:block w-1/2 p-10">
        <Lottie animationData={animationData} loop autoplay />
      </div> */}
      <div className="w-full md:w-1/2 ">{children}</div>
    </div>
  );
};

export default AuthLayout;
