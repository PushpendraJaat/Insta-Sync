import React from 'react';

interface SettingsDualToneIconProps {
  width?: number;
  height?: number;
  primaryColor?: string;
  secondaryColor?: string;
}

const SettingsDualToneIcon: React.FC<SettingsDualToneIconProps> = ({
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
    {/* Base gear shape with primary color and lower opacity */}
    <path
      d="M19.14 12.94a7.11 7.11 0 0 0 .06-1 7.11 7.11 0 0 0-.06-1l2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.61-.22L16.85 6.77a7.25 7.25 0 0 0-1.73-1L15 3.05a.5.5 0 0 0-.5-.05l-4 .8a.5.5 0 0 0-.38.27L9 7.39A7.24 7.24 0 0 0 7.31 8a7.11 7.11 0 0 0-.06 1 7.11 7.11 0 0 0 .06 1l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1a7.25 7.25 0 0 0 1.73 1L9 20.95a.5.5 0 0 0 .5.05l4-.8a.5.5 0 0 0 .38-.27l1.26-2.79a7.24 7.24 0 0 0 1.69-.9l2.49 1a.5.5 0 0 0 .61-.22l2-3.46a.5.5 0 0 0-.12-.64Z"
      fill={primaryColor}
      fillOpacity="0.3"
    />
    {/* Gear outline with secondary color */}
    <path
      d="M19.14 12.94a7.11 7.11 0 0 0 .06-1 7.11 7.11 0 0 0-.06-1l2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.61-.22L16.85 6.77a7.25 7.25 0 0 0-1.73-1L15 3.05a.5.5 0 0 0-.5-.05l-4 .8a.5.5 0 0 0-.38.27L9 7.39A7.24 7.24 0 0 0 7.31 8a7.11 7.11 0 0 0-.06 1 7.11 7.11 0 0 0 .06 1l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .61.22l2.49-1a7.25 7.25 0 0 0 1.73 1L9 20.95a.5.5 0 0 0 .5.05l4-.8a.5.5 0 0 0 .38-.27l1.26-2.79a7.24 7.24 0 0 0 1.69-.9l2.49 1a.5.5 0 0 0 .61-.22l2-3.46a.5.5 0 0 0-.12-.64Z"
      stroke={secondaryColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Central circle */}
    <circle cx="12" cy="12" r="3" fill={secondaryColor} />
  </svg>
);

export default SettingsDualToneIcon;
