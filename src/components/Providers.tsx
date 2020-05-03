import React, { ReactNode } from 'react'
import environment from '../relay-env';
import { BrowserRouter as Router } from 'react-router-dom'
import { ChangeThemeProvider } from '../contexts/ChangeThemeContext';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { ThemeProvider } from '@material-ui/core/styles';
import { useTheme } from '../hooks/useTheme';

interface Props {
  children: ReactNode
}

function Providers({ children }: Props) {
  const [theme, changeTheme] = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <ChangeThemeProvider value={changeTheme}>
        <RelayEnvironmentProvider environment={environment}>
          <Router>
            {children}
          </Router>
        </RelayEnvironmentProvider>
      </ChangeThemeProvider>
    </ThemeProvider>
  )
}

export default Providers;
