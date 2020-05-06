import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth } from '../config/firebase';
import useLogin from '../hooks/useLogin';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

export default function Login() {
  const onAuth = useLogin();
  React.useEffect(() => {
    const unregisterAuthObserver =
      auth().onAuthStateChanged(onAuth);
    return () => unregisterAuthObserver();
  }, [onAuth]);
  return (
    <Card>
      <CardHeader title="Log-in" />
      <CardContent>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={auth()}
        />
      </CardContent>
    </Card>
  );
}
