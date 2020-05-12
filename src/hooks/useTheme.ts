import amber from '@material-ui/core/colors/amber';
import createMuiTheme, { Theme } from '@material-ui/core/styles/createMuiTheme';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { useLocalStorage } from './generalHooks';
import { useState, useCallback } from 'react';

const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: lightBlue,
  }
});

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: amber,
  }
});

function changeBodyBgColor(theme: Theme) {
  const body = document.getElementsByTagName('body')[0];
  body.style.setProperty('background-color', theme.palette.background.default)
}

export const useTheme = (): [Theme, () => void] => {
  const [storedValue, setStoredValue] = useLocalStorage('theme', 'light');
  const preferredTheme = storedValue === 'light' ? lightTheme : darkTheme;
  const [theme, setTheme] = useState(preferredTheme);
  changeBodyBgColor(theme);
  const changeTheme = useCallback(() => {
    setTheme(prevTheme => {
      const newTheme = prevTheme === lightTheme ? darkTheme : lightTheme
      changeBodyBgColor(newTheme);
      return newTheme;
    });
    setStoredValue(prevValue => prevValue === 'light' ? 'dark' : 'light');
  }, [setStoredValue]);
  return [theme, changeTheme];
}
