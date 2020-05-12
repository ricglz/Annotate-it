import FolderNotes from './FolderNotes';
import React from 'react'
import { UserContext } from '../contexts/UserContext';
import { graphql } from 'react-relay';
import { useParams } from 'react-router-dom';
import { useQuery } from 'relay-hooks';

const query = graphql`
  query FolderDetailsQuery(
    $email: String!
    $password: String!
    $folderId: ID!
  ) {
    viewer(email: $email, password: $password) {
      folder(id: $folderId) {
        id
        ...FolderNotes_folder
      }
    }
  }
`

const FolderDetails = () => {
  const { user } = React.useContext(UserContext);
  const { folderId } = useParams();
  const { props, error } = useQuery(query, { ...user, folderId });
  if(props) {
    const { viewer = {} } = props;
    const { folder = {} } = viewer;
    return <FolderNotes folder={folder}/>;
  }
  if(error) {
    return <div>{ error.message }</div>;
  }
  return <div>Loading...</div>;
}

export default FolderDetails;
