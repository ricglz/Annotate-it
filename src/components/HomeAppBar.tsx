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
      flexGrow: 1,
      color: theme.palette.text.primary,
      zIndex: theme.zIndex.drawer + 1,
    },
    title: {
      flexGrow: 1,
    },
    toolbar: {
      backgroundColor: theme.palette.background.default,
    },
  }),
);

const HomeAppBar = () => {
  const classes = useStyles();
  const changeTheme = React.useContext(ChangeThemeContext);
  const [menuEl, onMenuOpen, onMenuClose] = useHandleAnchorEl();
  const logout = useLogout(onMenuClose);
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          Annotate it!
        </Typography>
        <IconButton
          aria-label="change theme button"
          onClick={changeTheme}
          color="primary"
        >
          <WbSunnyIcon />
        </IconButton>
        <IconButton
          aria-label="account of current user"
          aria-controls="user-appbar-menu"
          aria-haspopup="true"
          onClick={onMenuOpen}
          color="primary"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          id="user-appbar-menu"
          anchorEl={menuEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(menuEl)}
          onClose={onMenuClose}
        >
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default HomeAppBar;
