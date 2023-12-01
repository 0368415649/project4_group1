import React from 'react';
import cx from 'classnames';

import './Button.scss';

import { checkValidAndCloneElement } from '../../utils/common';

const Button = ({
  children,
  className = '',
  loading = [false],
  disabled,
  variant,
  startIcon,
  size = 'md',
  as: Component = 'button',
  ...props
}) => {
  const classes = cx('Button', className, variant, size);

  const [isLoading, loadingText] = loading;

  const getButtonText = () => {
    if (isLoading) {
      return loadingText;
    }
    return children;
  };

  return (
    <Component disabled={isLoading || disabled} className={classes} {...props}>
      {checkValidAndCloneElement(startIcon, {
        className: 'button-start-icon',
      })}
      {getButtonText()}
    </Component>
  );
};

export default Button;
