import Divider from '@material-ui/core/Divider';
import NotesEditor from './NotesEditor';
import NotesRenderer from './NotesRenderer';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Route, useParams, useRouteMatch } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { graphql } from 'react-relay';
import { useQuery } from 'relay-hooks';

const query = graphql`
  query NotesDetailsQuery(
    $email: String!
    $password: String!
    $noteId: ID!
  ) {
    viewer(email: $email, password: $password) {
      note(id: $noteId) {
        id
        content
      }
    }
  }
`

const NotesDetails = () => {
  const { user } = React.useContext(UserContext);
  const { noteId } = useParams();
  const { url } = useRouteMatch();
  const { props, error } = useQuery(query, { ...user, noteId });
  if(props) {
    const { viewer = {} } = props;
    const { note = {} } = viewer;
    return (
      <>
        <Typography variant="h4">Note</Typography>
        <Divider />
        <Route path={`${url}/edit`}>
          <NotesEditor content={note.content} />
        </Route>
        <Route exact path={url}>
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
