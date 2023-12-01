import { useState } from 'react';
import cx from 'classnames';

import '../components/Input/styles/Checkbox.scss';
import { CheckIcon } from '../components/Svg';

function useCheckbox(label, defaultState) {
  const [isChecked, setIsChecked] = useState(!!defaultState);

  const Checkbox = ({ className = '' }) => {
    const classes = cx('Checkbox', className);

    const handleToogle = () => {
      setIsChecked((prev) => !prev);
    };

    return (
      <div className={classes} onClick={handleToogle}>
        <div className={`handler ${isChecked ? 'checked' : ''}`}>
          <CheckIcon className="check-icon" />
        </div>
        {label}
      </div>
    );
  };

  return { isChecked, setIsChecked, Checkbox };
}

export default useCheckbox;
