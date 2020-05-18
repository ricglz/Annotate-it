import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link } from 'react-router-dom';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      color: theme.palette.text.primary,
      paddingLeft: '1rem',
    },
    root: {
      display: 'flex',
      flexShrink: 0,
      justifyContent: 'center',
      padding: '1rem',
    },
  }),
);

const Footer = () => {
  const { link, root } = useStyles();
  return (
    <footer className={root}>
      @2020 Annotate it!,
      <Link className={link} to="/about-us">
        See more about us
      </Link>
    </footer>
  );
}

export default Footer;
