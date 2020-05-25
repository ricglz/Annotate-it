import Loader from './Loader';
import loadable from "@loadable/component";
import React from 'react';
import Search from './Search';
import Toolbar from '@material-ui/core/Toolbar';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Switch, Route } from 'react-router-dom';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const NotesDetails = loadable(() => import('./NotesDetails'), {
  fallback: <Loader />,
});
const NotesCreator = loadable(() => import('./NotesCreator'), {
  fallback: <Loader />,
});
const FolderDetails = loadable(() => import('./FolderDetails'), {
  fallback: <Loader />,
});

const useStyles = makeStyles((theme: Theme) => createStyles({
  main: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const HomeMain = () => {
  const { main } = useStyles();
  return (
    <main className={main}>
      <Toolbar />
      <Switch>
        <Route exact path="/folder/:folderId">
          <FolderDetails />
        </Route>
        <Route exact path="/folder/:folderId/notes/new">
          <NotesCreator />
        </Route>
        <Route path="/folder/:folderId/notes/:noteId">
          <NotesDetails />
        </Route>
        <Route exact path="/notes/:query">
          <Search />
        </Route>
      </Switch>
    </main>
  );
};

export default HomeMain;
