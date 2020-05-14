import Divider from '@material-ui/core/Divider';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import Typography from '@material-ui/core/Typography';
import { UserContext } from '../contexts/UserContext';
import { graphql } from 'react-relay';
import { useParams } from 'react-router-dom';
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
  const { props, error } = useQuery(query, { ...user, noteId });
  if(props) {
    const { viewer = {} } = props;
    const { note = {} } = viewer;
    return (
      <>
        <Typography variant="h4">Note</Typography>
        <Divider />
        <ReactMarkdown source={note.content}/>
      </>
    );
  }
  if(error) {
    return <div>{ error.message }</div>;
  }
  return <div>Loading...</div>;
};

export default NotesDetails;
