import React from "react";

const DotGrid2X3: React.FC<React.HTMLAttributes<HTMLOrSVGElement>> = (
  props,
) => {
  return (
    <svg
      width="0.5em"
      height="1em"
      viewBox="0 0 6 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.333313 0.666656H2.33331V2.66666H0.333313V0.666656Z"
        fill="currentColor"
      />
      <path
        d="M0.333313 9.33332H2.33331V11.3333H0.333313V9.33332Z"
        fill="currentColor"
      />
      <path
        d="M0.333313 4.99999H2.33331V6.99999H0.333313V4.99999Z"
        fill="currentColor"
      />
      <path
        d="M3.66665 0.666656H5.66665V2.66666H3.66665V0.666656Z"
        fill="currentColor"
      />
      <path
        d="M3.66665 9.33332H5.66665V11.3333H3.66665V9.33332Z"
        fill="currentColor"
      />
      <path
        d="M3.66665 4.99999H5.66665V6.99999H3.66665V4.99999Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DotGrid2X3;
