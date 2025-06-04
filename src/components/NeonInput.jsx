
// VQ-CODE-004-2
import React from "react";
import { Eye, EyeOff } from "lucide-react";

const NeonInput = ({
  label,
  type,
  name,
  value,
  onChange,
  required,
  showEye = false,
  toggleVisibility,
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="block mb-1 text-sm font-medium neon-text">{label}</label>
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full px-5 py-3 bg-transparent border-2 border-neonBlue rounded-2xl neon-shadow focus:outline-none focus:ring-2 focus:ring-neonPink text-white placeholder-gray-400"
        />
        {showEye && (
          <div
            className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
            onClick={toggleVisibility}
          >
            {type === "password" ? (
              <Eye className="text-neon-pink" size={20} />
            ) : (
              <EyeOff className="text-neon-pink" size={20} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NeonInput;



