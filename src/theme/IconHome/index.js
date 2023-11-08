import React from 'react';

const IconHome = ({ width = 20, height = 20, ...props }) => {
  return (
    <svg
      viewBox="0 0 22 21"
      width={width}
      height={height}
      aria-hidden="true"
      fill="none"
      {...props}>
        <path d="M4 18V8.45377L11 2.32877L18 8.45377V18C18 19.1046 17.1046 20 16 20H6C4.89543 20 4 19.1046 4 18Z" stroke="currentColor" strokeWidth="2" />
        <path d="M21 11L11 2L1 11" stroke="currentcolor" strokeWidth="2" />
    </svg>
  );
};

export default IconHome;
