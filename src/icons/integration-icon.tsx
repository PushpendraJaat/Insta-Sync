import React from 'react';

interface IntegrationDualToneIconProps {
  width?: number;
  height?: number;
  primaryColor?: string;
  secondaryColor?: string;
}

const IntegrationDualToneIcon: React.FC<IntegrationDualToneIconProps> = ({
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
    {/* Connecting lines between nodes */}
    <path
      d="M12 4 L20 12 L12 20 L4 12 Z"
      stroke={secondaryColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Top Node */}
    <circle
      cx="12"
      cy="4"
      r="2"
      fill={primaryColor}
      fillOpacity="0.3"
      stroke={secondaryColor}
      strokeWidth="2"
    />
    {/* Right Node */}
    <circle
      cx="20"
      cy="12"
      r="2"
      fill={primaryColor}
      fillOpacity="0.3"
      stroke={secondaryColor}
      strokeWidth="2"
    />
    {/* Bottom Node */}
    <circle
      cx="12"
      cy="20"
      r="2"
      fill={primaryColor}
      fillOpacity="0.3"
      stroke={secondaryColor}
      strokeWidth="2"
    />
    {/* Left Node */}
    <circle
      cx="4"
      cy="12"
      r="2"
      fill={primaryColor}
      fillOpacity="0.3"
      stroke={secondaryColor}
      strokeWidth="2"
    />
  </svg>
);

export default IntegrationDualToneIcon;
