import React from 'react';

import './Img.scss';
import placeholderSrc from '../../assets/imgs/user.png';

const Img = ({
  src = placeholderSrc,
  alt = 'img',
  className = 'Image',
  ...props
}) => {
  return <img src={src} className={className} alt={alt} {...props} />;
};

export default Img;
