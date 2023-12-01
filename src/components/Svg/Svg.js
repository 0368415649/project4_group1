import React from "react";

const Svg = ({ children, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      {children}
    </svg>
  );
};

export default Svg;
