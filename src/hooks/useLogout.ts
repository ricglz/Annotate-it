import { UserContext } from '../contexts/UserContext';
import { auth } from '../config/firebase';
import { useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';

function useLogout(callback: () => void) {
  const { changeUser } = useContext(UserContext);
  const history = useHistory();
  const logout = useCallback(async () => {
    try {
      callback();
      await auth().signOut();
      changeUser({});
      history.push('/login');
    } catch (err) {
      console.error(err);
    }
  }, [callback, changeUser, history]);
  return logout;
}

export default useLogout;
