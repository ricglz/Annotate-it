import { createContext } from 'react'
import { useUserCallback, User } from '../hooks/useUser';

const defaultContext: useUserCallback = {
  user: {},
  changeUser: (user: User | {}) => { }
}

export const UserContext = createContext(defaultContext);
export const UserProvider = UserContext.Provider;
