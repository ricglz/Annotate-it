import Divider from '@material-ui/core/Divider';
import Loader from './Loader';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import loadable from "@loadable/component";
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const NotesEditor = loadable(() => import('./NotesEditor'), {
  fallback: <Loader />
});
const NotesRenderer = loadable(() => import('./NotesRenderer'), {
  fallback: <Loader />
});

interface Props {
  note: any;
  viewer: any;
}

const NotesContent = ({ note, viewer }: Props) => {
  const { path } = useRouteMatch();
  return (
    <>
      <Typography variant="h4">Note</Typography>
      <Divider />
      <Switch>
        <Route exact path={path}>
          <NotesRenderer note={note} />
        </Route>
        <Route path={`${path}/edit`}>
          <NotesEditor note={note} viewer={viewer}/>
        </Route>
      </Switch>
    </>
  );
}

export default NotesContent;
