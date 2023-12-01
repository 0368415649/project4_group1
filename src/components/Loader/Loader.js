import React from 'react';

const Loader = ({ color }) => {
  return (
    <div
      class="spinner-border"
      style={{
        color: color === 'primary' ? '#5fcf86' : '#888',
        width: 28,
        height: 28,
      }}
      role="status"
    />
  );
};

export default Loader;
