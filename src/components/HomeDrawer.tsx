import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      marginTop: '0.5rem',
    },
    drawer: {
      width: 240,
      flexShrink: 0,
    },
    drawerContainer: {
      padding: '1rem',
      overflow: 'auto',
    },
    paper: {
      width: 240,
    },
  }),
);

const HomeDrawer = () => {
  const classes = useStyles();
  return (
    <nav>
      <Drawer className={classes.drawer} variant='permanent'>
        <Toolbar />
        <div className={classes.drawerContainer}>
          <Typography variant='h4'>Folders</Typography>
          <Divider className={classes.divider} />
          <List>
            <ListItem button>
              <ListItemText primary='folder' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='folder' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='folder' />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </nav>
  );
};

export default HomeDrawer;
