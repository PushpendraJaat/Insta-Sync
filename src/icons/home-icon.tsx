import React from 'react';

interface HomeDualToneIconProps {
  width?: number;
  height?: number;
  primaryColor?: string;
  secondaryColor?: string;
}

const HomeDualToneIcon: React.FC<HomeDualToneIconProps> = ({
  width = 24,
  height = 24,
  primaryColor = '#4f5bd5',
  secondaryColor = '#d62976',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Base house shape with primary color at lower opacity */}
    <path
      d="M3 9.85714L12 3L21 9.85714V20.1429C21 20.7511 20.5786 21.3095 20 21.3095H4C3.42143 21.3095 3 20.7511 3 20.1429V9.85714Z"
      fill={primaryColor}
      fillOpacity="0.3"
    />
    {/* Outline of the house with secondary color */}
    <path
      d="M3 9.85714L12 3L21 9.85714V20.1429C21 20.7511 20.5786 21.3095 20 21.3095H4C3.42143 21.3095 3 20.7511 3 20.1429V9.85714Z"
      stroke={secondaryColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Door of the house */}
    <path
      d="M9 21.3095V14.3095H15V21.3095"
      stroke={secondaryColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HomeDualToneIcon;
