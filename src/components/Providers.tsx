import AlertTemplate from './AlertTemplate';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { ReactNode } from 'react'
import environment from '../config/relay-env';
import { BrowserRouter as Router } from 'react-router-dom'
import { ChangeThemeProvider } from '../contexts/ChangeThemeContext';
import {
  AlertProviderProps,
  Provider as AlertProvider,
  positions,
  transitions,
} from 'react-alert';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { ThemeProvider } from '@material-ui/core/styles';
import { UserProvider } from '../contexts/UserContext';
import { useTheme } from '../hooks/useTheme';
import { useUser } from '../hooks/useUser';

interface Props {
  children: ReactNode
}

const alertProviderProps: AlertProviderProps = {
  offset: '30px',
  position: positions.BOTTOM_RIGHT,
  template: AlertTemplate,
  timeout: 3000,
  transition: transitions.FADE,
  type: 'error',
}

function Providers({ children }: Props) {
  const [theme, changeTheme] = useTheme();
  const currentState = useUser();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ChangeThemeProvider value={changeTheme}>
        <AlertProvider {...alertProviderProps}>
          <RelayEnvironmentProvider environment={environment}>
            <UserProvider value={currentState}>
              <Router>
                {children}
              </Router>
            </UserProvider>
          </RelayEnvironmentProvider>
        </AlertProvider>
      </ChangeThemeProvider>
    </ThemeProvider>
  )
}

export default Providers;
