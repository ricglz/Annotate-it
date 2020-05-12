import FolderDetails from './FolderDetails';
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Switch, Route, useParams } from 'react-router-dom';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const NotesDetails = () => {
  const { noteId } = useParams();
  return <div>Nota: {noteId}</div>;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

const HomeMain = () => {
  const { main } = useStyles();
  return (
    <main className={main}>
      <Toolbar />
      <Switch>
        <Route path="/notes/:noteId">
          <NotesDetails />
        </Route>
        <Route path="/:folderId">
          <FolderDetails />
        </Route>
      </Switch>
    </main>
  );
};

export default HomeMain;
