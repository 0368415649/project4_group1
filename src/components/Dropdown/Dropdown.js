import React, { useState } from 'react';
import cx from 'classnames';

import './Dropdown.scss';
import { ChevronDownIcon } from '../Svg';
import useToggle from '../../hooks/useToggle';

const Dropdown = ({
  className = '',
  options = [],
  setOption,
  name,
  placeholder = '',
  disabled = false,
  ...props
}) => {
  const [isShow, setIsShow] = useToggle();
  const [label, setLabel] = useState(placeholder);

  const classes = cx('Dropdown', className);

  const handleSelectOption = (option) => {
    setOption(name, option.value);
    setLabel(option.label);
  };

  return (
    <div
      className={`${classes} ${disabled ? 'disabled' : ''}`}
      onClick={setIsShow}
      {...props}
    >
      {label}
      <ChevronDownIcon className="chevron-down-icon" />
      {isShow && (
        <div className="options">
          {options.map((option) => {
            return (
              <div
                key={option.label}
                className="option"
                onClick={() => handleSelectOption(option)}
              >
                {option.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
