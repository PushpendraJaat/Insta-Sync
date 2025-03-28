import React from 'react';

interface HelpIconProps {
  primaryColor?: string;
  secondaryColor?: string;
  width?: number | string;
  height?: number | string;
}

const HelpIcon: React.FC<HelpIconProps> = ({
  primaryColor = '#1976d2',     // default primary (e.g., blue)
  secondaryColor = '#e3f2fd',   // default secondary (e.g., light blue)
  width = 24,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background Circle */}
    <circle cx="12" cy="12" r="10" fill={secondaryColor} />
    
    {/* Question Mark */}
    <path
      d="M12 6C9.23858 6 7 8.23858 7 11H9C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 11.5523 14.5523 12 14 12H13C12.4477 12 12 12.4477 12 13V13.01C12 14.1046 12.8954 15 14 15C15.1046 15 16 15.8954 16 17V18H14V17C14 16.4477 13.5523 16 13 16C12.4477 16 12 15.5523 12 15V14.99C12 13.8954 11.1046 13 10 13C8.89543 13 8 12.1046 8 11H6C6 13.7614 8.23858 16 11 16C13.7614 16 16 13.7614 16 11C16 8.23858 13.7614 6 11 6H12Z"
      fill={primaryColor}
    />
    
    {/* Dot under the question mark */}
    <circle cx="12" cy="19" r="1" fill={primaryColor} />
  </svg>
);

export default HelpIcon;
