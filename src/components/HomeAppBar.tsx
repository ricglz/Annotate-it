import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useHandleAnchorEl from '../hooks/useHandleAnchorEl';
import useLogout from '../hooks/useLogout';
import { ChangeThemeContext } from '../contexts/ChangeThemeContext';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      maxHeight: 64,
      zIndex: theme.zIndex.drawer + 1,
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const HomeAppBar = () => {
  const classes = useStyles();
  const changeTheme = React.useContext(ChangeThemeContext);
  const [menuEl, onMenuOpen, onMenuClose] = useHandleAnchorEl();
  const logout = useLogout(onMenuClose);
  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Annotate it!
        </Typography>
        <IconButton
          aria-label="change theme button"
          color="primary"
          onClick={changeTheme}
        >
          <WbSunnyIcon />
        </IconButton>
        <IconButton
          aria-controls="user-appbar-menu"
          aria-haspopup="true"
          aria-label="account of current user"
          color="primary"
          onClick={onMenuOpen}
        >
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={menuEl}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          id="user-appbar-menu"
          keepMounted
          onClose={onMenuClose}
          open={Boolean(menuEl)}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default HomeAppBar;
