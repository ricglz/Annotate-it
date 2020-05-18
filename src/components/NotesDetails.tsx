import Divider from '@material-ui/core/Divider';
import NotesEditor from './NotesEditor';
import NotesRenderer from './NotesRenderer';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Route, useParams, useRouteMatch } from 'react-router-dom';
import { graphql } from 'react-relay';
import { useQuery } from 'relay-hooks';

const query = graphql`
  query NotesDetailsQuery($noteId: ID!) {
    viewer {
      note(id: $noteId) {
        id
        content
      }
    }
  }
`

const NotesDetails = () => {
  const { noteId } = useParams();
  const { path } = useRouteMatch();
  const { props, error } = useQuery(query, { noteId });
  if(props) {
    const { viewer = {} } = props;
    const { note = {} } = viewer;
    return (
      <>
        <Typography variant="h4">Note</Typography>
        <Divider />
        <Route path={`${path}/edit`}>
          <NotesEditor content={note.content} />
        </Route>
        <Route exact path={path}>
          <NotesRenderer content={note.content} />
        </Route>
      </>
    );
  }
  if(error) {
    return <div>{ error.message }</div>;
  }
  return <div>Loading...</div>;
};

export default NotesDetails;
