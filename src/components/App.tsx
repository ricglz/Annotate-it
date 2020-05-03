import Button from '@material-ui/core/Button'
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { useTheme } from '../hooks/useTheme';

function App() {
  const [theme, changeTheme] = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" onClick={changeTheme} color="primary">
        Change theme
      </Button>
    </ThemeProvider>
  );
}

export default App;
