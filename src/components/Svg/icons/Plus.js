import React from 'react';

import Svg from '../Svg';

const Icon = (props) => {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5317 5.39307V19.3931"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M5.53174 12.3931H19.5317"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </Svg>
  );
};

export default Icon;
