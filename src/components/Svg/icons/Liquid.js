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
        d="M12.4703 2.98779L18.1303 8.64779C19.2497 9.7664 20.0121 11.1919 20.3212 12.7438C20.6304 14.2958 20.4722 15.9046 19.8669 17.3668C19.2615 18.8289 18.2362 20.0786 16.9205 20.9579C15.6047 21.8372 14.0578 22.3065 12.4753 22.3065C10.8929 22.3065 9.34595 21.8372 8.03024 20.9579C6.71453 20.0786 5.68915 18.8289 5.08381 17.3668C4.47846 15.9046 4.32034 14.2958 4.62945 12.7438C4.93855 11.1919 5.701 9.7664 6.82035 8.64779L12.4703 2.98779Z"
        stroke="#5FCF86"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
