import Divider from '@material-ui/core/Divider';
import NotesEditor from './NotesEditor';
import NotesRenderer from './NotesRenderer';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Route, useRouteMatch } from 'react-router-dom';

const NotesContent = ({ note }: any) => {
  const { path } = useRouteMatch();
  return (
    <>
      <Typography variant="h4">Note</Typography>
      <Divider />
      <Route path={`${path}/edit`}>
        <NotesEditor note={note} />
      </Route>
      <Route exact path={path}>
        <NotesRenderer note={note} />
      </Route>
    </>
  );
}

export default NotesContent;
