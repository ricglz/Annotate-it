import { useCallback, useState } from 'react';
import { useLocalStorage } from './generalHooks';

export interface User {
  email: string;
  uid: string;
}

export interface useUserCallback {
  user: User | {};
  changeUser: (user: User) => void;
}

export const useUser = () : useUserCallback => {
  const [storedValue, setStoredValue] =
    useLocalStorage('theme', JSON.stringify({}));
  const [user, setUser] = useState(JSON.parse(storedValue));
  const changeUser = useCallback((user: User) => {
    setUser(user);
    setStoredValue(JSON.stringify(user));
  }, [setStoredValue]);

  return { user, changeUser };
}
