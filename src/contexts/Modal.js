import {
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useEffect,
  useState,
} from 'react';
import { motion } from 'framer-motion';

export const Context = createContext();

export function useModalContext() {
  const value = useContext(Context);
  if (!value) {
    throw new Error('Must wrap component by context provider!');
  }

  return value;
}

const Provider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [content, setContent] = useState(null);
  const [props, setProps] = useState({});

  const handleDismiss = () => {
    setIsVisible(false);
    setContent(null);
  };

  const handleVisible = (content, props) => {
    setIsVisible(true);
    setContent(content);
    setProps(props);
  };

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isVisible]);

  return (
    <Context.Provider
      value={{ isVisible, handleVisible, content, setContent, handleDismiss }}
    >
      {children}
      {content && isVisible && isValidElement(content) && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key="modal"
            className="backdrop"
            // onClick={(event) => {
            //   if (event.target === event.currentTarget) {
            //     handleDismiss();
            //   }
            // }}
          >
            {cloneElement(content, {
              onDismiss: handleDismiss,
              ...props,
            })}
          </motion.div>
        </>
      )}
    </Context.Provider>
  );
};

export default Provider;
