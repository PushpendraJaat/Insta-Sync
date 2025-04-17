import React from "react";

interface ActiveAutomationsIconProps {
  size?: number;
  color?: string;
}

const ActiveAutomationsIcon: React.FC<ActiveAutomationsIconProps> = ({
  size = 24,
  color = "currentColor",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" stroke={color} />
      <path d="M8 12a4 4 0 0 1 4-4" stroke={color} />
      <path d="M12 12a4 4 0 0 0 4 4" stroke={color} />
      <circle cx="12" cy="12" r="1" fill={color} />
      <path d="M6 6l2 2" stroke={color} />
      <path d="M18 6l-2 2" stroke={color} />
      <path d="M6 18l2-2" stroke={color} />
      <path d="M18 18l-2-2" stroke={color} />
    </svg>
  );
};

export default ActiveAutomationsIcon;
