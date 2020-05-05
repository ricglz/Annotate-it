import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../config/firebase';
import useMutation from '../mutations/LogInMutation';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

export default function Login() {
  const [commit] = useMutation();
  const onAuth = React.useCallback((user) => {
    if(!user) {
      return;
    }
    const { email, password } = user;
    commit({ variables: { email, password } });
  }, [commit]);

  React.useEffect(() => {
    const unregisterAuthObserver =
      firebase.auth().onAuthStateChanged(onAuth);
    return () => unregisterAuthObserver();
  }, [onAuth]);
  return (
    <Card>
      <CardHeader title="Log-in" />
      <CardContent>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </CardContent>
    </Card>
  );
}
