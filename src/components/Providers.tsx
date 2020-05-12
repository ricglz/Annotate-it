import CssBaseline from '@material-ui/core/CssBaseline';
import React, { ReactNode } from 'react'
import environment from '../config/relay-env';
import { BrowserRouter as Router } from 'react-router-dom'
import { ChangeThemeProvider } from '../contexts/ChangeThemeContext';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { ThemeProvider } from '@material-ui/core/styles';
import { UserProvider } from '../contexts/UserContext';
import { useTheme } from '../hooks/useTheme';
import { useUser } from '../hooks/useUser';

interface Props {
  children: ReactNode
}

function Providers({ children }: Props) {
  const [theme, changeTheme] = useTheme();
  const currentState = useUser();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ChangeThemeProvider value={changeTheme}>
        <RelayEnvironmentProvider environment={environment}>
          <UserProvider value={currentState}>
            <Router>
              {children}
            </Router>
          </UserProvider>
        </RelayEnvironmentProvider>
      </ChangeThemeProvider>
    </ThemeProvider>
  )
}

export default Providers;
