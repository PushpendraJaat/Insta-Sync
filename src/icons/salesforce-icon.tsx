// SalesforceIcon.tsx
import React from "react";

interface SalesforceIconProps {
  size?: number;
  color?: string;
}

const SalesforceIcon: React.FC<SalesforceIconProps> = ({
  size = 24,
  color = "currentColor",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M375.4 128.5c-13.3 0-26.2 2.2-38.3 6.4-18.3-46.1-62.6-77.9-113.7-77.9-50.3 0-94 30.5-112.8 75-9.8-3.3-20.2-5-30.8-5-53 0-96 43-96 96s43 96 96 96h4.8c12.7 47.1 55.5 81 106.2 81 17.9 0 35.5-4.3 51.4-12.5 15.8 8.2 33.4 12.5 51.4 12.5 61.9 0 112-50.1 112-112 0-61.9-50.1-112-112-112z" />
    </svg>
  );
};

export default SalesforceIcon;
