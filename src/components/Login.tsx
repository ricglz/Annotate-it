import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Footer from './Footer';
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
    card: {
      minWidth: '80%',
    },
    cardContent: {
      flex: 4,
    },
    cardHeader: {
      textAlign: 'center'
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
    },
    flex: {
      flex: '1 0 auto',
    },
    main: {
      display: 'flex',
      margin: '2rem',
      padding: '2rem',
    },
    jcCenter: {
      justifyContent: 'center',
    },
    pureFlex: {
      flex: 1,
    },
  }),
);

export default function Login() {
  const {
    card, cardContent, cardHeader, flex, jcCenter, main, pureFlex, column
  } = useStyles();
  const onAuth = useLogin();
  React.useEffect(() => {
    const unregisterAuthObserver =
      auth().onAuthStateChanged(onAuth);
    return () => unregisterAuthObserver();
  }, [onAuth]);
  return (
    <div className={`${column} ${pureFlex}`}>
      <main className={`${main} ${flex} ${jcCenter}`}>
        <Card className={`${card} ${column}`}>
          <CardHeader
            className={`${cardHeader} ${pureFlex}`}
            component="section"
            title="Log-in"
          />
          <Divider />
          <CardContent
            className={`${cardContent} ${column} ${jcCenter}`}
            component="section"
          >
            <StyledFirebaseAuth
              firebaseAuth={auth()}
              uiConfig={uiConfig}
            />
          </CardContent>
        </Card>
      </main>
      <div className={flex} />
      <Footer />
    </div>
  );
}
