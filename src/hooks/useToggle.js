import { useState } from 'react';

function useToggle(defaultState = false) {
  const [state, setState] = useState(!!defaultState);

  const toggle = (state) => {
    if (state && typeof state === 'boolean') {
      setState(!!state);
      return;
    }

    setState((prev) => !prev);
  };

  return [state, toggle];
}

export default useToggle;
