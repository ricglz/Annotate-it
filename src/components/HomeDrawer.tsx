import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { NavLink } from 'react-router-dom';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { graphql } from 'react-relay';
import { usePagination } from 'relay-hooks';

const fragment = graphql`
  fragment HomeDrawer_viewer on User
  @argumentDefinitions(
    count: {type: "Int", defaultValue: 10}
    cursor: {type: "String"}
  ) {
    id
    folders(first: $count, after: $cursor)
    @connection(key: "HomeDrawer_folders") {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      marginTop: '0.5rem',
    },
    root: {
      width: 240,
      flexShrink: 0,
    },
    drawerContainer: {
      padding: '1rem',
      overflow: 'auto',
    },
    link: {
      color: theme.palette.text.primary,
    },
    selectedLink: {
      color: theme.palette.primary.light
    },
    paper: {
      width: 240,
    },
  }),
);

const HomeDrawer = (props: any) => {
  const classes = useStyles();
  let [viewer] = usePagination(fragment, props.viewer);
  viewer = viewer || {};
  const { folders = {} } = viewer
  const { edges = [] } = folders
  return (
    <nav className={classes.root}>
      <Drawer variant='permanent' classes={{paper: classes.paper}}>
        <Toolbar />
        <div className={classes.drawerContainer}>
          <Typography variant='h4'>Folders</Typography>
          <Divider className={classes.divider} />
          <List aria-label="folders">
            {edges.map(({ node }: any) => (
              <NavLink key={node.id} to={`/${node.id}`} className={classes.link} activeClassName={classes.selectedLink}>
                <ListItem button>
                  <ListItemText primary={node.name} />
                </ListItem>
              </NavLink>
            ))}
          </List>
        </div>
      </Drawer>
    </nav>
  );
};

export default HomeDrawer;
