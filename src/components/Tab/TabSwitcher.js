import React from 'react';
import cx from 'classnames';

import './TabSwitcher.scss';

const TabSwitcher = ({
  option,
  options,
  setOption,
  className = '',
  useIndex = false,
}) => {
  const classes = cx('TabSwitcher', className);

  return (
    <div className={classes}>
      {options.map((op, i) => {
        return (
          <div
            className={cx('TabSwitcher-option', {
              actived: !useIndex ? op === option : option === i,
            })}
            key={op}
            onClick={() => {
              !useIndex ? setOption(op) : setOption(i);
            }}
          >
            {op}
          </div>
        );
      })}
    </div>
  );
};

export default TabSwitcher;
