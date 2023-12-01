import { createContext, useContext, useEffect, useState } from 'react';
import http from '../utils/http';

export const Context = createContext();

export function useUserContext() {
  const value = useContext(Context);
  if (!value) {
    throw new Error('Must wrap component by context provider!');
  }

  return value;
}

const Provider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [user, setUser] = useState(null);
  console.log('>> Check | user:', user);

  useEffect(() => {
    const userIdFromLocal = localStorage.getItem('USER_ID');
    if (userIdFromLocal) {
      setUserInfo({ customer_id: userIdFromLocal });
    }
  }, []);

  useEffect(() => {
    async function fetch() {
      if (userInfo) {
        try {
          const { data } = await http.get('/get_customer', {
            params: {
              id: userInfo.customer_id,
            },
          });
          setUser(data);
        } catch (error) {
          console.log('>> Check | error:', error);
        }
      }
    }

    fetch();
  }, [userInfo]);

  return (
    <Context.Provider value={{ userInfo, setUserInfo, user }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
