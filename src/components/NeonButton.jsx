// src/components/NeonButton.jsx
import React from 'react';

const colorMap = {
  rage: 'from-cyan-400 to-cyan-600 shadow-cyan-400',
  calm: 'from-green-400 to-green-600 shadow-green-400',
  sad: 'from-pink-400 to-pink-600 shadow-pink-400',
  confident: 'from-sky-400 to-sky-600 shadow-sky-400',
  focus: 'from-purple-400 to-purple-600 shadow-purple-400',
};

export default function NeonButton({ text, onClick, emotion = 'focus', disabled = false }) {
  const colorClass = colorMap[emotion] || colorMap.focus;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-6 py-3 rounded-xl font-neon text-white text-lg
        bg-gradient-to-br ${colorClass}
        shadow-md shadow-glow transition duration-300
        hover:scale-105 hover:shadow-xl
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {text}
    </button>
  );
}
