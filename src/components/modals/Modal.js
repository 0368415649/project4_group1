import React from 'react';
import cx from 'classnames';

import { TimesIcon } from '../Svg';

import './styles/Modal.scss';

const Modal = ({
  children,
  onDismiss,
  label,
  className = '',
  notAllowClose = false,
}) => {
  const classes = cx('Modal', className);
  return (
    <div className={classes}>
      <div className="Modal-heading">
        <div className="label">{label}</div>
        {!notAllowClose && (
          <TimesIcon onClick={onDismiss} className="close-btn" />
        )}
      </div>
      <div className="Modal-body">{children}</div>
    </div>
  );
};

export default Modal;
