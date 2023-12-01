import { useEffect } from 'react';

function useOnClickOutside(ref, callback) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      callback(e);
    };

    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    };
  }, [callback, ref]);
}

export default useOnClickOutside;
