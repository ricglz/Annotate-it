import Divider from '@material-ui/core/Divider';
import NotesEditor from './NotesEditor';
import NotesRenderer from './NotesRenderer';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

const NotesContent = ({ note }: any) => {
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
          <NotesEditor note={note} />
        </Route>
      </Switch>
    </>
  );
}

export default NotesContent;
