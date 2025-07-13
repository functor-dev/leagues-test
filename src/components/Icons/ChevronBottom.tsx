import React from "react";

const ChevronBottom: React.FC<React.HTMLAttributes<HTMLOrSVGElement>> = (
  props,
) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.00001 7.79287L2.35356 4.14642L1.64645 4.85353L6.00002 9.20708L10.3536 4.85353L9.64645 4.14642L6.00001 7.79287Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ChevronBottom;
