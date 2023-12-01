import React, { useState } from 'react';
import cx from 'classnames';

import placehoder from '../../assets/imgs/placeholder-image.png';

import Img from '../Img';

import './UploadImage.scss';
import { PlusIcon, TrashIcon } from '../Svg';

const UploadImage = ({
  defaultImage = null,
  className = '',
  readOnly = false,
  style = {},
  ...props
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [removeDefaultImage, setRemoveDefaultImage] = useState(false);

  const classes = cx('UploadImage', className);

  const remove = () => {
    if (readOnly) return;
    setSelectedImage(null);
    defaultImage && setRemoveDefaultImage(true);
  };

  return (
    <div className={classes} style={style}>
      {!removeDefaultImage && defaultImage && (
        <>
          <Img
            src={`${defaultImage}`}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = placehoder;
            }}
            alt="car"
          />
          {!readOnly && (
            <div className="remove-img" onClick={remove}>
              <TrashIcon className="icon" />
            </div>
          )}
        </>
      )}
      {selectedImage && (
        <>
          {!readOnly && (
            <div className="remove-img" onClick={remove}>
              <TrashIcon className="icon" />
            </div>
          )}
          <Img
            alt="img"
            src={URL.createObjectURL(selectedImage)}
            className="show-img"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = placehoder;
            }}
          />
        </>
      )}
      <PlusIcon className="icon" />
      <input
        disabled={readOnly}
        type="file"
        accept="image/*"
        onChange={(event) => {
          props.onChange(event);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadImage;
