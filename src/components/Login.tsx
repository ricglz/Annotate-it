import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useLogin from '../hooks/useLogin';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { auth } from '../config/firebase';

const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult: () => false
  }
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      margin: '2rem',
      padding: '2rem',
    },
    card: {
      minWidth: '80%',
    },
    cardHeader: {
      textAlign: 'center'
    }
  }),
);

export default function Login() {
  const { root, card, cardHeader } = useStyles();
  const onAuth = useLogin();
  React.useEffect(() => {
    const unregisterAuthObserver =
      auth().onAuthStateChanged(onAuth);
    return () => unregisterAuthObserver();
  }, [onAuth]);
  return (
    <main className={root}>
      <Card className={card}>
        <CardHeader component="section" className={cardHeader} title="Log-in" />
        <CardContent component="section">
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={auth()}
          />
        </CardContent>
      </Card>
    </main>
  );
}
