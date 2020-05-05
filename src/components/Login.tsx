import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../config/firebase';
import commitLoginMutation from '../mutations/LogInMutation';
// import { useHistory } from "react-router-dom";

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
  // const history = useHistory()

  const onSuccess = React.useCallback(() => {
    // history.push('/')
  }, []);
  const onAuth = React.useCallback((user) => {
    if(!user) {
      return;
    }
    const { email, uid } = user;
    commitLoginMutation(email, onSuccess)
    console.log(uid);
  }, [onSuccess]);

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
