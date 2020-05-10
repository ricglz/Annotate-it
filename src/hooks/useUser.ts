import { useCallback, useState } from 'react';
import { useLocalStorage } from './generalHooks';

export interface User {
  email: string;
  password: string;
}

type GenericUser = User | {}

export interface useUserCallback {
  user: GenericUser;
  changeUser: (user: GenericUser) => void;
}

export const useUser = (): useUserCallback => {
  const [storedValue, setStoredValue] =
    useLocalStorage('user', JSON.stringify({}));
  const [user, setUser] = useState(JSON.parse(storedValue));
  const changeUser = useCallback((user: GenericUser) => {
    setUser(user);
    setStoredValue(JSON.stringify(user));
  }, [setStoredValue]);

  return { user, changeUser };
}
