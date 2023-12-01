import React, { useState } from 'react';
import cx from 'classnames';

import './styles/Input.scss';
import { EyeIcon, EyeSlashIcon } from '../Svg';
import { checkValidAndCloneElement } from '../../utils/common';
import { preventSpecialCharacters } from '../../utils/input';

const Input = ({
  className = '',
  button,
  type = 'text',
  isPasswordInput,
  startIcon,
  suffix,
  isNumberInput,
  defaultValue,
  ...props
}) => {
  const classes = cx('Input', className);
  const [inputType, setInputType] = useState(
    isNumberInput ? 'number' : isPasswordInput ? 'password' : type
  );
  const [value, setValue] = useState('');

  const toggleInputType = () => {
    if (!isPasswordInput) return type;
    setInputType((prev) => (prev === 'text' ? 'password' : 'text'));
  };

  if (type === 'date') {
    const [year, month, day] = value.split('-');
    return (
      <div className={classes}>
        <input
          type="date"
          onKeyDown={isNumberInput && preventSpecialCharacters}
          style={{
            opacity: 0,
            cursor: 'pointer',
          }}
          onClick={(e) => {
            e.target.showPicker();
          }}
          {...props}
          onChange={(e) => {
            setValue(e.target.value);
            props.onChange(e);
          }}
        />
        <span
          className={cx('formatted', {
            empty: !value,
          })}
        >
          {value ? `${day}/${month}/${year}` : 'dd/MM/yyyy'}
        </span>
      </div>
    );
  }

  return (
    <div className={classes}>
      {checkValidAndCloneElement(startIcon, {
        className: 'input-start-icon',
      })}
      <input
        type={inputType}
        {...props}
        onKeyDown={isNumberInput && preventSpecialCharacters}
        defaultValue={defaultValue}
      />
      {suffix && <span className="suffix">{suffix}</span>}
      {checkValidAndCloneElement(button, {
        className: 'input-button',
      })}
      {isPasswordInput && (
        <>
          {inputType === 'text' ? (
            <EyeSlashIcon className="hide-password" onClick={toggleInputType} />
          ) : (
            <EyeIcon className="show-password" onClick={toggleInputType} />
          )}
        </>
      )}
    </div>
  );
};

export default Input;
