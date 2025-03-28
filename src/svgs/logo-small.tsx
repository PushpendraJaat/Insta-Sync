import React from 'react';

const LogoSmall: React.FC = () => (
    <svg width="250" height="60" viewBox="0 0 250 60" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#feda75" />
        <stop offset="50%" stopColor="#d62976" />
        <stop offset="100%" stopColor="#4f5bd5" />
      </linearGradient>
    </defs>
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontFamily="'Pacifico', cursive"
      fontSize="32"
      fill="url(#textGradient)"
    >
      InstaSync
    </text>
  </svg>
);

export default LogoSmall;
