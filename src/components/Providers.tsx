import React, { ReactNode } from 'react'
import environment from '../config/relay-env';
import { BrowserRouter as Router } from 'react-router-dom'
import { ChangeThemeProvider } from '../contexts/ChangeThemeContext';
import { UserProvider } from '../contexts/UserContext';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { ThemeProvider } from '@material-ui/core/styles';
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
      <RelayEnvironmentProvider environment={environment}>
        <ChangeThemeProvider value={changeTheme}>
          <UserProvider value={currentState}>
            <Router>
              {children}
            </Router>
          </UserProvider>
        </ChangeThemeProvider>
      </RelayEnvironmentProvider>
    </ThemeProvider>
  )
}

export default Providers;
