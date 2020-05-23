import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import HomeDrawerCreateDialog from './HomeDrawerCreateDialog';
import HomeDrawerEditDialog from './HomeDrawerEditDialog';
import HomeDrawerHeader from './HomeDrawerHeader';
import HomeDrawerFolder from './HomeDrawerFolder';
import List from '@material-ui/core/List';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useToogle from '../hooks/useToogle';
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

const useStyles = makeStyles((_: Theme) => createStyles({
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
  paper: {
    width: 240,
  },
}));

const useEdges = (fragViewer: any) : any[] => {
  let [viewer] = usePagination(fragment, fragViewer);
  viewer = viewer || {};
  const { folders = {} } = viewer;
  const { edges = [] } = folders;
  return edges;
}

const HomeDrawer = ({ viewer }: any) => {
  const classes = useStyles();
  const edges = useEdges(viewer);
  const [openCreate, toogleCreate] = useToogle();
  const [openEdit, toogleEdit] = useToogle();
  const [folderEdit, setFolderEdit] = React.useState({ name: '', id: '' });
  const folderComponents = edges.map(
    ({ node }: any) => (
      <HomeDrawerFolder
        folder={node}
        key={node.id}
        setFolderEdit={setFolderEdit}
        toogleEdit={toogleEdit}
      />
    )
  );
  return (
    <nav className={classes.root}>
      <Drawer variant='permanent' classes={{paper: classes.paper}}>
        <Toolbar />
        <div className={classes.drawerContainer}>
          <HomeDrawerHeader onClick={toogleCreate} />
          <Divider className={classes.divider} />
          <List aria-label="folders">
            {folderComponents}
          </List>
        </div>
      </Drawer>
      <HomeDrawerCreateDialog open={openCreate} toogle={toogleCreate} />
      <HomeDrawerEditDialog
        open={openEdit}
        toogle={toogleEdit}
        folder={folderEdit}
      />
    </nav>
  );
};

export default HomeDrawer;
