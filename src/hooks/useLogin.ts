import commit from '../mutations/LogInMutation';
import { UserContext } from '../contexts/UserContext';
import { auth } from '../config/firebase';
import { useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';

export default function useLogin() {
  const { changeUser } = useContext(UserContext);
  const history = useHistory();
  const onCompleted = useCallback(() => {
    const user = auth().currentUser;
    if (!user) {
      return;
    }
    const { email, uid } = user;
    if (!email) {
      return;
    }
    changeUser({ email, password: uid })
    history.push('/')
  }, [changeUser, history])
  const onAuth = useCallback((user) => {
    if (!user) {
      return;
    }
    const { email, uid, displayName } = user;
    commit({ email, password: uid, name: displayName }, onCompleted)
  }, [onCompleted]);
  return onAuth;
}
