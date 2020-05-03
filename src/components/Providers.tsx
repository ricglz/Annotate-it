import React, { ReactNode } from 'react'
import environment from '../relay-env';
import { RelayEnvironmentProvider } from 'relay-hooks';
import { ThemeProvider } from '@material-ui/core/styles';
import { useTheme } from '../hooks/useTheme';
import { ChangeThemeProvider } from '../contexts/ChangeThemeContext';

interface Props {
  children: ReactNode
}

function Providers({ children }: Props) {
  const [theme, changeTheme] = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <ChangeThemeProvider value={changeTheme}>
        <RelayEnvironmentProvider environment={environment}>
          {children}
        </RelayEnvironmentProvider>
      </ChangeThemeProvider>
    </ThemeProvider>
  )
}

export default Providers;
